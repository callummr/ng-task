(function() {
  'use strict';

  /* Services */

  angular.module('myApp.services', [])

    .value('version', '0.3')

    .value('name', 'Tasks')

    .service('StorageManager', [function(){

      var store = (window.localStorage || false);
      var storeKey = 'savedTasks';
      var defaultTasks = [
        {text: "Hi there!", dueDate: null, done: false},
        {text: "Looks like you don't have any saved tasks", dueDate: null, done: true},
        {text: "Here are a few to get you started", dueDate: null, done: false}
      ];

      this.getSavedTasks = function() {
        if (store && store[storeKey]) {
          return JSON.parse(store[storeKey]);
        } else {
          return defaultTasks;
        }
      };

      this.saveTasks = function(tasks) {
        if (store) {

          var newTasks = [];

          // rebuild the array, minus 'editing' prop
          for (var i = 0; i < tasks.length; i++) {
            newTasks[i] = {}; 

            for (var property in tasks[i]) {
              if (tasks[i].hasOwnProperty(property) && property !== 'editing') {
                newTasks[i][property] = tasks[i][property];
              }
            }
          }

          return (store[storeKey] = JSON.stringify(newTasks));

        } else {
          return false;
        }
      };

    }]);
  })();

