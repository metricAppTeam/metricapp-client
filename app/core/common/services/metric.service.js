/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 16:21:06
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-07 18:50:40
*/
(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name MetricService
* @module metricapp
* @requires $http
* @requires $window
* @requires $cookies
*
* @description
* Get Metrics.
************************************************************************************/

angular.module('metricapp')

.service('MetricService', MetricService);

//MetricatorService.$inject = [
//    '$http', '$rootScope', '$cookies', '$window'];

MetricService.$inject = ['$http', '$window'];
             
//function MetricatorService($http, $rootScope, $cookies, $window) {
function MetricService($http, $window) {

    var service = this;

    service.getMetrics = getMetrics;

    /********************************************************************************
    * @ngdoc method
    * @name getMetrics
    * @description
    * Submits a MeasurementGoal.
    * @param {Metric} Metric to get.
    ********************************************************************************/

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