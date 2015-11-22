app.factory('postService', ['$http', function ($http) {
    return {
        cameraTakePicture: function () {
            navigator.camera.getPicture(
                
                function (img) {
                try { 
                    $http({
                        method: 'POST',
                        url: 'http://10.100.102.104:80/post',
                        data: {
                            userID: "1234567",
                            photoPath: img,
                            price: "70$",
                            privacy: 3
                        }
                    }).then(function success() {
                        alert("Super");
                    }, function error() {
                        alert("Hell");
                    });
                }
                catch (err) { console.log(err.message) }
               
            }, function (err) {
                alert("camera error. Details: " + err);
            })
        }
    };
}]);