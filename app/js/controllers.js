'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

  // General

  .controller('MainCtrl', ['$scope', function($scope) {
    $scope.nightMode = false;

    $scope.toggleNightMode = function() {
      $scope.nightMode = !$scope.nightMode;
    }
  }])

  // Home page

  .controller('TaskListCtrl', ['$scope', '$http', '$modal', function($scope, $http, $modal) {
    $scope.loadTasks = function() {
      $scope.tasks = [
        {text: "Hi there!", dueDate: null, done: false},
        {text: "Your changes aren't permanent", dueDate: null, done: true},
        {text: "This is a demonstration of AngularJS more than anything", dueDate: null, done: false}
      ];
    };

    $scope.deleteTask = function($index) {
      $scope.tasks.splice($index,1);
    }

    $scope.clearNewTask = function() {
      var midnight = new Date();
      midnight.setHours(32,0,0,0);

      $scope.newTask = {
        text: '',
        dueDate: '',
        done: false
      };
    }

    $scope.clearDate  = function() {
      $scope.newTask.dueDate = '';
    }

    $scope.addTask = function() {
      $scope.tasks.push($scope.newTask);
      $scope.clearNewTask();
    }

    $scope.clearNewTask(); // more of an init than clear

    $scope.loadTasks();
  }])

  // About

  .controller('AboutCtrl', ['$scope', function($scope) {

  }]);

// declare this one differently so it can be passed in to the modal 
  var UpdateTaskCtrl = function($scope, $modalInstance, task) {
    $scope.task = task;
  };