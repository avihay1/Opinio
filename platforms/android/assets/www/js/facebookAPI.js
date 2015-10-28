﻿function facebookFunc() {
    console.log("Hello")
    console.log("facebookConnectPlugin")
    // Check if the user already connected, and collect some data about him
    facebookConnectPlugin.getLoginStatus(function (response) {
        alert(response.status);
        if (response.status === 'connected') {
            facebookConnectPlugin.api('/me?fields=address,age_range,cover,email,picture.type(large),friends', ["email"],
            function (response) {
                console.log(response);
                alert(response.picture.data.url);
            });
        }

        // Else.. login and collect some data about the user
        else {
            facebookConnectPlugin.login(["email, public_profile"], function (response) {
                if (response.authResponse) {
                    facebookConnectPlugin.api('/me?fields=address,age_range,cover,email,picture.type(large),friends', ["email"],
                        function (response) {
                            console.log(response);
                            alert(response.picture.data.url);
                        });
                }
            });
        }
    });                
    //facebookConnectPlugin.logout(function (response) { alert("LogedOut") }) => For logging out.
}