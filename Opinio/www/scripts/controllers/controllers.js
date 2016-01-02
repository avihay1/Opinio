app.controller('AppController', function ($scope, display, postService, loginService, $ionicHistory, $ionicSideMenuDelegate, $ionicPlatform, $rootScope, $q, $http) {
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
    $scope.login = loginService.login;
    $scope.facebookGetLoginState = loginService.facebookGetLoginState;
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

    $scope.likePost = function (post) {
        post.feedback.likes += 1;
        
        //update server..
    }

    $scope.dislikePost = function (post) {
        post.feedback.dislikes += 1;

        //update server..
    }

    $scope.getDateStringForPost = function (date) {
        //Date.daysBetween = function (date1, date2) {
        //    //Get 1 day in milliseconds
        //    var one_day = 1000 * 60 * 60 * 24;

        //    // Convert both dates to milliseconds
        //    var date1_ms = date1.getTime();
        //    var date2_ms = date2.getTime();

        //    // Calculate the difference in milliseconds
        //    var difference_ms = date2_ms - date1_ms;

        //    // Convert back to days and return
        //    return Math.round(difference_ms / one_day);
        //}

        Date.hoursBetween = function (date1, date2) {
            //Get 1 hour in milliseconds
            var one_hour = 1000 * 60 * 60 * 1;

            // Convert both dates to milliseconds
            var date1_ms = date1.getTime();
            var date2_ms = date2.getTime();

            // Calculate the difference in milliseconds
            var difference_ms = date2_ms - date1_ms;

            // Convert back to hours and return
            return Math.round(difference_ms / one_hour);
        }
        Date.minutesBetween = function (date1, date2) {
            //Get 1 minute in milliseconds
            var one_minute = 1000 * 60 * 1;

            // Convert both dates to milliseconds
            var date1_ms = date1.getTime();
            var date2_ms = date2.getTime();

            // Calculate the difference in milliseconds
            var difference_ms = date2_ms - date1_ms;

            // Convert back to minutes and return
            return Math.round(difference_ms / one_minute);
        }

        var arrDateTime = date.split(' ');
        var arrDate = arrDateTime[0].split('/');
        var arrTime = arrDateTime[1].split(':');

        var dateObj = new Date(parseInt(arrDate[2]),
                               parseInt(arrDate[1]) - 1,
                               parseInt(arrDate[0]),
                               parseInt(arrTime[0]),
                               parseInt(arrTime[1]),
                               arrTime[2] ? parseInt(arrTime[2]) : 0);

        var hoursBetweens = Date.hoursBetween(new Date(), dateObj) * -1;
        var minutesBetweens = Date.minutesBetween(new Date(), dateObj) * -1;

        var dateText = hoursBetweens <= 24
                        ? hoursBetweens === 0 
                            ? minutesBetweens + " Minutes ago"
                            : hoursBetweens + " Hours ago"
                        : date;

        return (dateText);
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