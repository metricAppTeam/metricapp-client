/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 16:21:06
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-06-14 17:07:12
*/
(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name MetricatorService
* @module metricapp
* @requires $http
* @requires $rootScope
* @requires $cookies
*
* @description
* Get Measurement Goal.
************************************************************************************/

angular.module('metricapp')

.service('MetricatorService', MetricatorService);

MetricatorService.$inject = [
    '$http', '$rootScope', '$cookies', '$window'];

function MetricatorService($http, $rootScope, $cookies, $window) {

    var service = this;

    service.getMeasurementGoals = getMeasurementGoals;

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Submits a MeasurementGoal.
    * @param {MeasurementGoal} Measurement Goal to submit.
    ********************************************************************************/
    function getMeasurementGoals() {
        
        return $http.get('localhost:8080/measurementgoal/?id=26').then(
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