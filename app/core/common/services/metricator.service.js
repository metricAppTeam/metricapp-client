/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 16:21:06
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-07 10:55:55
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

//MetricatorService.$inject = [
//    '$http', '$rootScope', '$cookies', '$window'];

MetricatorService.$inject = ['$http', '$window'];
             
//function MetricatorService($http, $rootScope, $cookies, $window) {
function MetricatorService($http, $window) {

    var service = this;

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Submits a MeasurementGoal.
    * @param {MeasurementGoal} Measurement Goal to submit.
    ********************************************************************************/
    
    service.getMeasurementGoals = 
    function getMeasurementGoals() {
        
        return $http.get('http://localhost:8080/metricapp-server-gitlab/measurementgoal?userid=1').then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET MEASUREMENT GOALS');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET MEASUREMENT GOALS');
                console.log(message);
                return message;
            }
        );

    }

    /********************************************************************************
    * @ngdoc method
    * @name getMetrics
    * @description
    * Submits a MeasurementGoal.
    * @param {Metric} Metric to get.
    ********************************************************************************/
    
    service.getMetrics = 
    function getMetrics() {
        
        return $http.get('http://localhost:8080/metricapp-server-gitlab/metric?userid=3').then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET METRICS');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET METRICS');
                console.log(message);
                return message;
            }
        );

    }

}

})();