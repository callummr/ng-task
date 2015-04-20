(function() {
  'use strict';

  /* Directives */


  angular.module('myApp.directives', []).

  	// General

    directive('appVersion', ['version', function(version) {
      return function(scope, elm, attrs) {
        elm.text(version);
      };
    }])
    .directive('appName', ['name', function(name) {
    	return function(scope, elm, attrs) {
    		elm.text(name);
    	};
    }])
    .directive('header', [function() {
    	return {
    		restrict: 'E',
    		templateUrl: 'partials/header.html'  			
    	};
    }])

    // Home page

    .directive('addTask', [function() {
    	return {
    		restrict: 'E',
    		templateUrl: 'partials/home/add-task.html'
    	};
    }])

    .directive('taskList', [function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/home/task-list.html'
      };
    }]);
  })();