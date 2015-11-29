app.controller('AppController', function ($scope, display, postService, loginService, $ionicHistory, $ionicSideMenuDelegate, $ionicPlatform, $rootScope, $http) {
    $scope.isViewHideTabs = false;
    $scope.posts = postService.getHomePosts();

    $scope.display = display;
    $ionicPlatform.onHardwareBackButton(function(event){
        $ionicHistory.goBack();
    });
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
   
    $scope.cameraTakePicture = postService.cameraTakePicture
    $scope.pushNotificationInit = loginService.pushNotificationInit;
    $scope.facebookLogin = loginService.facebookLogin;
    $scope.facebookGetLoginState = loginService.facebookGetLoginState;
    $scope.facebookGetUserInfo = loginService.facebookGetUserInfo;
    $scope.facebookLogout = loginService.facebookLogout;

    $scope.tab = 1;

    $scope.isSet = function (checkTab) {
        return this.tab === checkTab;
    };

    $scope.setTab = function (setTab) {
            $scope.tab = setTab;
    };

    $scope.showAllPosts = function () {
        $scope.setTab(1);
        $scope.posts = postService.getHomePosts();
    }

    $scope.showTopPosts = function () {
        $scope.setTab(2);
        $scope.posts = postService.getTopPosts();
    }
});
app.controller('IndexController', function($rootScope, $scope, display) {
    $rootScope.title = 'Home';
    $scope.isViewHideTabs = false;

    // call to facebook status user service => if not allow user => redirect to welcome page...

    
});
app.controller('WelcomeController', function ($scope, display) {
    $scope.loginWithFaceBook = function () {
        // call to login with facebook method from plugin service

        display.goToPath('/');
    }
});