var app = angular.module('myApp',['ionic','ngCordova']);
app.config(['$controllerProvider', function($controllerProvider) {
	$controllerProvider.allowGlobals();
}]);
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('index', {
    url: '/',
      views : {
          index:{
            templateProvider : function(display){
                return display.getPageTemplate('page-index').then(function(template){
                    return template;
                });  

            },
            controller: 'IndexController'
          }
      }
  })
  .state('welcome', {
      url: '/welcome',
       views : {
          index:{
            templateProvider : function(display){
                return display.getPageTemplate('pre-login').then(function(template){
                    return template;
                }); 
            },
            controller: 'WelcomeController'
          }
       }
  })

  $urlRouterProvider.otherwise("/");

});