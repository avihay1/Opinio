app.controller('AppController', function ($scope, display, pluginsFactory, $ionicHistory, $ionicSideMenuDelegate, $ionicPlatform, $rootScope, $http) {
    $scope.display = display;
    $ionicPlatform.onHardwareBackButton(function(event){
        $ionicHistory.goBack();
    });
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
   
    $scope.cameraTakePicture = pluginsFactory.cameraTakePicture
    $scope.pushNotificationInit = pluginsFactory.pushNotificationInit;
    $scope.facebookLogin = pluginsFactory.facebookLogin;
    $scope.facebookGetLoginState = pluginsFactory.facebookGetLoginState;
    $scope.facebookGetUserInfo = pluginsFactory.facebookGetUserInfo;
    $scope.facebookLogout = pluginsFactory.facebookLogout;
});
app.controller('IndexController', function($rootScope, $scope, display) {
    $rootScope.title = 'Home';
    
    // call to facebook status user service => if not allow user => redirect to welcome page...

    
});
app.controller('WelcomeController', function ($scope, display) {
    
});