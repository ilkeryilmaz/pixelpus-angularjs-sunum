// Module
var routeApp = angular.module('routeApp', ['ngRoute']);

// Route
routeApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
    })

    .when('/about', {
      templateUrl : 'pages/about.html',
      controller  : 'aboutController'
    })

    .when('/contact', {
      templateUrl : 'pages/contact.html',
      controller  : 'contactController'
    })
    .otherwise({
       redirectTo: '/'
     });
});

// Controllers
routeApp.controller('mainController', function($scope) {
  $scope.message = 'Welcome';
});

routeApp.controller('aboutController', function($scope) {
  $scope.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ';
});

routeApp.controller('contactController', function($scope) {
  $scope.message = 'Contact us!';
});
