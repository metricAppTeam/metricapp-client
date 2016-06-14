/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 16:21:06
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-06-14 17:07:12
*/
(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name AuthService
* @module metricapp
* @requires $http
* @requires $rootScope
* @requires $cookies
*
* @description
* Submits a MeasurementGoal.
************************************************************************************/

angular.module('metricapp')

.service('MeasurementGoalService', MeasurementGoalService);

MeasurementGoalService.$inject = [
    '$http', '$rootScope', '$cookies'];

function MeasurementGoalService($http, $rootScope, $cookies) {

    var service = this;

    service.submitMeasurementGoal = submitMeasurementGoal;

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Submits a MeasurementGoal.
    * @param {MeasurementGoal} Measurement Goal to submit.
    ********************************************************************************/
    function submitMeasurementGoal(measurementGoal) {
        console.log('SUBMIT measurementGoal WITH ' +
        'name= '  + measurementGoal.name + ' & ' +	
        'object=' + measurementGoal.object + ' & ' +
        'purpose=' + measurementGoal.purpose + ' & ' +
        'viewPoint=' + measurementGoal.viewPoint + ' & ' +
        'focus=' + measurementGoal.focus)

        var metadata = {
        	tags:["saassad","sadsadsad","sadsadsad"],
  			creatorId:"3",
      		state:"Created",
      		releaseNote:"sakjbsakjabskjsa"
        };

        var submit = {
        	userId: "26",
        	name: measurementGoal.name,
        	object: measurementGoal.object,
        	purpose: measurementGoal.purpose,
        	viewPoint: measurementGoal.viewPoint,
        	focus: measurementGoal.focus,
        	OrganizationalGoalId: "4",
        	metadata: metadata};
        return $http.post('localhost:8080/measurementgoal/', submit).then(
            function(response) {
                var message = response.data;
                console.log('SUCCESS SUBMIT measurementGoal');
                return message;
            },
            function(response) {
                var message = response.data;
                console.log('FAILURE SUBMIT measurementGoal');
                return message;
            }
        );

    }
}

})();