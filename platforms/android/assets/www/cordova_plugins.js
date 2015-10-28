cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/phonegap-facebook-plugin/facebookConnectPlugin.js",
        "id": "phonegap-facebook-plugin.FacebookConnectPlugin",
        "clobbers": [
            "facebookConnectPlugin"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-push/www/push.js",
        "id": "phonegap-plugin-push.PushNotification",
        "clobbers": [
            "PushNotification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "phonegap-facebook-plugin": "0.12.0",
    "phonegap-plugin-push": "1.2.3"
}
// BOTTOM OF METADATA
});