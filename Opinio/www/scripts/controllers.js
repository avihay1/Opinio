app.controller('AppController', function($scope, display, $ionicHistory, $ionicSideMenuDelegate, $ionicPlatform, $rootScope) {  
    $scope.display = display;
    $ionicPlatform.onHardwareBackButton(function(event){
        $ionicHistory.goBack();
    });
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
   
    $scope.takePicture = function () {
        navigator.camera.getPicture(function (img) { alert("Success! path: " + img);}, function (err) { alert("camera error. Details: " + err);})
    };
});
app.controller('IndexController', function($rootScope, $scope, display) {
    $rootScope.title = 'Home';
    
    // call to facebook status user service => if not allow user => redirect to welcome page...

    
});
app.controller('WelcomeController', function ($scope, display) {
    
});