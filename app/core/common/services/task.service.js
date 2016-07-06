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

TaskService.$inject = ['$http', 'REST_SERVICE'];

function TaskService($http, REST_SERVICE) {

    var service = this;

    service.getTask = getTask;
    service.getTasks = getTasks;

    /********************************************************************************
    * @ngdoc method
    * @name getTask
    * @description
    * Retrieves the specified task.
    * @param {Int} taskid The task id.
    * @returns {RichTask|Error} On success, the notifications with meta; an error,
    * otherwise.
    ********************************************************************************/
    function getTask(taskid) {

    }

    /********************************************************************************
    * @ngdoc method
    * @name getTasks
    * @description
    * Retrieves the specified tasks for authuser.
    * @param {Int} tskStart First task index.
    * @param {Int} tskN Number of tasks.
    * @returns {[RichTask]|Error} On success, the list of tasks with meta for
    * authuser; an error, otherwise.
    ********************************************************************************/
    function getTasks(tskStart, tskN) {

    }

}

})();
