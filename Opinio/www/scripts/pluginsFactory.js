app.factory('pluginsFactory', ['$http', function ($http) {
    return {
        pushNotificationInit: function () {
            // Init Push Notifications plugin
            var push = PushNotification.init({
                "android": { "senderID": "421274789188" },
                "ios": { "alert": "true", "badge": "true", "sound": "true" }, "windows": {}
            });


            // register for Push Notifications server (I copied the registrationId from the JS console to my python script for sending a push-notification)
            // TODO: We have to upload the registrationId (push-notification Token) to our mongo DB
            push.on('registration', function (data) {
                console.log("Hello");
                console.log(data.registrationId)
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
        },
        facebookLogin: function () {
            facebookConnectPlugin.login(["email, public_profile"], function (response) {
                if (response.authResponse) {
                    // Conntected Successfully
                }
                return response.authResponse
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

        facebookGetUserInfo: function () {
            facebookConnectPlugin.api('/me?fields=address,age_range,cover,email,picture.type(large),friends', ["email"],
                function (response) {
                    // response.picture.data.url => example for getting profile pic URL from the response object
                    return response;

                });
        },
        facebookLogout: function () {
            facebookConnectPlugin.logout(function (response) {
                // Logout Successfully
            });
        },
        cameraTakePicture: function ($http) {
            navigator.camera.getPicture(function (img) {
                var xhr = new XMLHttpRequest();
                var data = {
                    userID: "1234567",
                    photoPath: img,
                    price: "70$",
                    privacy: 3
                };
                var formData = new FormData();
                formData.append('userID', data.userID);
                formData.append('photoPath', data.photoPath);
                formData.append('price', data.price);
                formData.append('privacy', data.privacy);
                xhr.open('POST', 'http://192.168.1.134:3000/post');
                xhr.onreadystatechange = function () {
                    if (xhr.status == 200 && xhr.readyState == 4)
                        alert("Yay!");
                };
                xhr.send(formData);
                alert("Success! path: " + img);
            }, function (err) {
                alert("camera error. Details: " + err);
                var xhr = new XMLHttpRequest();
                var data = {
                    userID: "1234567",
                    photoPath: "cancelled",
                    price: "70$",
                    privacy: 3
                };
                xhr.onreadystatechange = function () {
                    if (xhr.status == 200 && xhr.readyState == 4)
                        alert("Yay!");
                };
                var formData = new FormData();
                formData.append('userID', data.userID);
                formData.append('photoPath', data.photoPath);
                formData.append('price', data.price);
                formData.append('privacy', data.privacy);
                xhr.open('POST', 'http://192.168.1.134:3000/post');
                xhr.send(formData);
                //$http({
                //    method: 'POST',
                //    url: 'http://192.168.1.134:3000/post',
                //    data: {
                //        userID: "1234567",
                //        photoPath: "imgPath",
                //        price: "70$",
                //        privacy: 3
                //    }
                //}).then(function success() {
                //    alert("Super");
                //}, function error() {
                //    alert("Hell");
                //});

            }
        )
        }
    };
}]);