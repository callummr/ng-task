(function() {
  'use strict';

  /* Controllers */

  angular.module('myApp.controllers', [])

    // General

    .controller('MainCtrl', ['$scope', function($scope) {
      $scope.nightMode = false;

      $scope.toggleNightMode = function() {
        $scope.nightMode = !$scope.nightMode;
      };
    }])

    // Home page

    .controller('TaskListCtrl', ['$scope', '$http', '$modal', 'StorageManager', function($scope, $http, $modal, StorageManager) {

      $scope.deleteTask = function(i) {
        $scope.tasks.splice(i, 1);
      };

      $scope.clearNewTask = function() {
        var midnight = new Date();
        midnight.setHours(32,0,0,0);

        $scope.newTask = {
          text: '',
          dueDate: '',
          done: false
        };
      };

      $scope.clearDate  = function() {
        $scope.newTask.dueDate = '';
      };

      $scope.addTask = function() {
        $scope.tasks.push($scope.newTask);
        $scope.clearNewTask();
      };

      $scope.clearNewTask(); // more of an init than clear

      $scope.tasks = StorageManager.getSavedTasks();

      // save any changes to 'tasks' immediately to localStorage
      $scope.$watch('tasks', function(newTasks) {
        StorageManager.saveTasks(newTasks);
      }, true); // deep watch
    }])

    // About

    .controller('AboutCtrl', ['$scope', function($scope) {

    }]);

  // declare this one differently so it can be passed in to the modal 
    var UpdateTaskCtrl = function($scope, $modalInstance, task) {
      $scope.task = task;
    };
  })();