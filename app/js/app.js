(function() {
  'use strict';


  // Declare app level module which depends on filters, and services
  angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers',
    'ui.bootstrap.datetimepicker',
    'ui.bootstrap'
  ]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/home/home.html'});
    $routeProvider.when('/home', {redirectTo: '/'});
    $routeProvider.when('/about', {templateUrl: 'partials/about.html'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
})();