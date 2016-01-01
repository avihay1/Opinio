app.factory('loginService', ['$q', '$http', function ($q, $http) {
    function facebookLogin() {
        return $q(
            function (resolve, reject) {
                facebookConnectPlugin.getLoginStatus(function (response) {
                    if (response.status === 'connected') {
                        // Still Conncted
                        resolve(response.status);
                    } else {
                        facebookConnectPlugin.login(["email, public_profile"],
                            function (response) {
                                if (response.authResponse) {
                                    // Conntected Successfully
                                    resolve(response.authResponse);
                                } else {
                                    reject(response);
                                }
                            },
                            function (response) {
                                reject(response);
                            }
                        );
                    }
                });
            }
        )
    }

    function pushNotificationInit() {
        return $q(function (resolve, reject) {
            // Init Push Notifications plugin
            var push = PushNotification.init({
                "android": { "senderID": "421274789188" },
                "ios": { "alert": "true", "badge": "true", "sound": "true" }, "windows": {}
            });


            // register for Push Notifications server (I copied the registrationId from the JS console to my python script for sending a push-notification)
            // TODO: We have to upload the registrationId (push-notification Token) to our mongo DB
            push.on('registration', function (data) {

                // TODO: Send the token to the db or something depends on the session management we decide
                //    'http://ourserver/push',
                //    { form: { notification: data } },
                //    function (error, response, body) {
                //        if (!error && response.statusCode == 200) {
                //            console.log(body)
                //        }
                //    }
                //);
                console.log("Got device id: " + data.registrationId);
                resolve(data.registrationId);
            });

            // Callback - tell the app what to do when the user get a notification
            push.on('notification', function (data) {
                alert(data.title)
                // data.count,
                // data.sound,
                // data.image,
                // data.additionalData
            });

            // Callback - tell the app what to do when an error occurred
            push.on('error', function (e) {
                alert(e.message)
            });

        });
    }

    function facebookGetUserInfo() {
        return $q(function (resolve) {
            facebookConnectPlugin.api('/me?fields=id, name, age_range,email,picture.type(large),friends', ["email"],
                function (response) {
                    // response.picture.data.url => example for getting profile pic URL from the response object
                    resolve(response);
                }
             );
        });
    }

    return {
        login: function () {

            facebookLogin().then(function () {
                pushNotificationInit().then(function (deviceID) {
                    facebookGetUserInfo().then(function (userInfo) {
                        var loginData = {
                            pushNotificationToken: deviceID,
                            name: userInfo.name,
                            id: userInfo.id,
                            email: userInfo.email,
                            age: userInfo.age_range.min,
                            pictureUrl: userInfo.picture.data.url,
                            friends: userInfo.friends.data.map(function (friend) { return friend.id; })
                        };
                        
                        console.log(JSON.stringify(loginData));
                        console.log(typeof(loginData));

                        $http({
                            method: 'POST',
                            url: 'http://10.100.102.3:3000/login',
                            data: loginData
                        }).then(function success() {
                            alert("Super");
                        }, function error() {
                            alert("Hell");
                        });
                    });
                });
            });
        },
        facebookGetLoginState: function () {
            facebookConnectPlugin.getLoginStatus(function (response) {
                if (response.status === 'connected') {
                    // Still Conncted
                }
                return response.status
            });
        },

        facebookLogout: function () {
            facebookConnectPlugin.logout(function (response) {
                // Logout Successfully
            });
        }
    };
}]);