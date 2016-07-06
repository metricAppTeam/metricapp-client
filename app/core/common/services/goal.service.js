(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name GoalService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
*
* @description
* Provides goal management services.
************************************************************************************/

angular.module('metricapp')

.service('GoalService', GoalService);

GoalService.$inject = ['$http', 'REST_SERVICE'];

function GoalService($http, REST_SERVICE) {

    var service = this;

    service.getGoal = getGoal;
    service.getGoals = getGoals;

    /********************************************************************************
    * @ngdoc method
    * @name getGoal
    * @description
    * Retrieves the specified goal.
    * @param {Int} goalid The goal id.
    * @returns {Goal|Error} On success, the goal; an error, otherwise.
    ********************************************************************************/
    function getGoal(goalid) {

    }

    /********************************************************************************
    * @ngdoc method
    * @name getGoals
    * @description
    * Retrieves the specified goals.
    * @param {Int} goaStart First goal index.
    * @param {Int} goaN Number of goals.
    * @returns {[Goal]|Error} On success, the list of goals; an error, otherwise.
    ********************************************************************************/
    function getGoals(goaStart, goaN) {

    }

}

})();
