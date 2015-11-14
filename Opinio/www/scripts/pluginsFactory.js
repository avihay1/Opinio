app.factory('pluginsFactory', ['$filter', '$q', '$ionicPopup', function ($filter, $q, $ionicPopup, $ionicPlatform, $cordovaLocalNotification) {
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
        facebookGetLoginState : function () {
                facebookConnectPlugin.getLoginStatus(function (response) {
                    if (response.status === 'connected') {
                        // Still Conncted
                    }
                    return response.status
                });
        },

        facebookGetUserInfo : function() {
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
        cameraTakePicture : function () {
            navigator.camera.getPicture(function (img) { alert("Success! path: " + img);}, function (err) { alert("camera error. Details: " + err);})
        }
    }

}]);