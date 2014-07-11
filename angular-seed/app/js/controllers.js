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

  .controller('HomeCtrl', ['$scope', function($scope){
    $scope.test = 'home section';
  }])

  .controller('AddTaskCtrl', ['$scope', function($scope) {
    $scope.test = 'add task section';
  }])

  .controller('TaskListCtrl', ['$scope', function($scope) {
    $scope.test = 'task list section';

    // init fake tasks
    $scope.tasks = [
      {
        text: 'Test task one',
        dueDate: Date(),
        done: false,
        createdDate: Date()
      },
      {
        text: 'Test task two',
        dueDate: Date(),
        done: true,
        createdDate: Date()
      },
      {
        text: 'Test task three',
        dueDate: Date(),
        done: false,
        createdDate: Date()
      }
    ];
  }])

  // LOAD TEST

  .controller('LoadTestCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.error = false;

    $scope.refresh = function() {
      $http.get("ajax/phptest.php")
        .success(function(data) {
          $scope.tasks = data;
        })
        .error(function() {
          $scope.error = true;
        });
    };

    $scope.refresh();
  }])

  // About

  .controller('AboutCtrl', ['$scope', function($scope) {

  }]);
