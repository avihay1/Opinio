function PushNotificationFunc() {

    // Init Push Notifications plugin
    var push = PushNotification.init({
        "android": { "senderID": "421274789188" },
        "ios": { "alert": "true", "badge": "true", "sound": "true" }, "windows": {}
    });


    // register for Push Notifications server (I copied the registrationId from the JS console to my python script for sending a push-notification)
    // TODO: We have to upload the registrationId (push-notification Token) to our mongo DB
    push.on('registration', function (data) {
        var request = require('request');

        //request.post(
        //    'http://192.168.42.45/push',
        //    { form: { notification: data } },
        //    function (error, response, body) {
        //        if (!error && response.statusCode == 200) {
        //            console.log(body)
        //        }
        //    }
        //);
        console.log("Hello");
        console.log(data.registrationId);
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
}

