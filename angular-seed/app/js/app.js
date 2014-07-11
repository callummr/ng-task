'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/home', {redirectTo: '/'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html'});
  $routeProvider.when('/test', {templateUrl: 'partials/loadtest.html'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
