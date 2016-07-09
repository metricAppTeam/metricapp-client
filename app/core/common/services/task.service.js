(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name TaskService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
*
* @description
* Provides task management services.
************************************************************************************/

angular.module('metricapp')

.service('TaskService', TaskService);

TaskService.$inject = ['$http', '$q', 'REST_SERVICE', 'DB_TASKS'];

function TaskService($http, $q, REST_SERVICE, DB_TASKS) {

    var service = this;

    service.getAll = getAll;
    service.getById = getById;
    service.getInArray = getInArray;
    service.getNFrom = getNFrom;

    /********************************************************************************
    * @ngdoc method
    * @name getAll
    * @description
    * Retrieves all the tasks.
    * @returns {Tasks|Error} On success, the tasks;
    * an error message, otherwise.
    ********************************************************************************/
    function getAll() {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                resolve({tasks: DB_TASKS});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getById
    * @description
    * Retrieves the specified task.
    * @param {Int} taskid The task id to retrieve.
    * @returns {Task|Error} On success, the specified task;
    * an error message, otherwise.
    ********************************************************************************/
    function getById(taskid) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var TASK = DB_TASKS[taskid];
                if (TASK) {
                    resolve({task: TASK});
                    return;
                }
                reject({errmsg: 'Task ' + taskid + ' not found'});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getInArray
    * @description
    * Retrieves the specified tasks.
    * @param {[Int]} taskids The list of task id to retrieve.
    * @returns {Tasks|Error} On success, the specified tasks;
    * an error message, otherwise.
    ********************************************************************************/
    function getInArray(taskids) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var tasks = {};
                taskids.forEach(function(taskid) {
                    var TASK = DB_TASKS[taskid];
                    if (TASK) {
                        tasks[taskid] = TASK;
                    }
                });
                resolve({tasks:tasks});
            }, 500);
    }

    /********************************************************************************
    * @ngdoc method
    * @name getNTasksFrom
    * @description
    * Retrieves the specified tasks for authuser.
    * @param {Int} tskStart First task index.
    * @param {Int} tskN Number of tasks.
    * @returns {[Task]|Error} On success, the list of tasks; an error message,
    * otherwise.
    ********************************************************************************/
    function getNTasksFrom(tskStart, tskN) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var tasks = [];
                var end = (tskN == -1) ? DB_TASKS.length : Math.min(tskStart + tskN, DB_TASKS.length);
                for (var i = tskStart; i < end; i++ ) {
                    tasks.push(DB_TASKS[i]);
                }
                resolve({tasks: tasks});
            }, 500);
        });
    }

}

})();
