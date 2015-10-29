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
  .state('search', {
    url: '/search',
       views : {
          index:{
            templateProvider : function(display){
                return display.getPageTemplate('page-search').then(function(template){
                    return template;
                }); 
            },
            controller: 'SearchController'    
          }
       }
  })

  $urlRouterProvider.otherwise("/");

});