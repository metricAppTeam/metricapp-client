(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name MGoalService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
*
* @description
* Provides measurement goal management services.
************************************************************************************/

angular.module('metricapp')

.service('MGoalService', MGoalService);

MGoalService.$inject = ['$http', '$q', 'REST_SERVICE', 'DB_MGOALS'];

function MGoalService($http, $q, REST_SERVICE, DB_MGOALS) {

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
        return $q(function(resolve, reject) {
            setTimeout(function() {
                reject('Goal not found: ' + goalid);
            }, 500);
        });
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
        return $q(function(resolve, reject) {
            setTimeout(function() {
                resolve({goals: []});
            }, 500);
        });
    }

}

})();
