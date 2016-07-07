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

    service.getTask = getTask;
    service.getNTasksFrom = getNTasksFrom;

    /********************************************************************************
    * @ngdoc method
    * @name getTask
    * @description
    * Retrieves the specified task.
    * @param {Int} taskid The task id.
    * @returns {Task|Error} On success, the task; an error message, otherwise.
    ********************************************************************************/
    function getTask(taskid) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                DB_TASKS.forEach(function(TASK) {
                    if (TASK.id === taskid) {
                        resolve({task: TASK});
                        return;
                    }
                });
                reject({errmsg: 'Task ' + taskid + ' not found'});
            }, 500);
        });
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
                var numtasks = DB_TASKS.length;
                var end = (tskN == -1) ? numtasks : Math.min(tskStart + tskN, numtasks);
                for (var i = tskStart; i < end; i++ ) {
                    tasks.push(DB_TASKS[i]);
                }
                resolve({tasks: tasks, numtasks: numtasks});
            }, 500);
        });
    }

}

})();
