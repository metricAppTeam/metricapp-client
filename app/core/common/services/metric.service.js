/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 16:21:06
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-15 23:01:16
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

MetricService.$inject = ['$http', '$window', 'AuthService'];
             
//function MetricatorService($http, $rootScope, $cookies, $window) {
function MetricService($http, $window, AuthService) {

    var service = this;
    service.metricDialog = {};
    service.externalMetricDialog = [];

    service.getMetrics = getMetrics;
    service.getApprovedMetrics = getApprovedMetrics;
    service.getMetricsById = getMetricsById;
    service.countMetricsByState = countMetricsByState;
    service.storeMetric = storeMetric;
    service.storeExternalMetric = storeExternalMetric;
    service.getMetricDialog = getMetricDialog;
    service.getExternalMetricDialog = getExternalMetricDialog;

    /********************************************************************************
    * @ngdoc method
    * @name getMetrics
    * @description
    * Get Metric by user.
    ********************************************************************************/

    function getMetrics() {
        
        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric?userid=metricator').then(
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

    /********************************************************************************
    * @ngdoc method
    * @name countMetricsByState
    * @description
    * Count metrics by state.
    ********************************************************************************/
    function countMetricsByState(state) {
        console.log('GET Metrics with userid='+AuthService.getUser().username+'&state='+state);

        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric/count?userid='+AuthService.getUser().username+'&state='+state).then(
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
    * Get Metric by user.
    ********************************************************************************/

    function getMetricsById(metricId) {
        
        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric?id='+metricId).then(
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

    /********************************************************************************
    * @ngdoc method
    * @name getMetricsByMeasurementGoalId
    * @description
    * Get Metric by measurement goal.
    ********************************************************************************/

    function getMetricsByMeasurementGoalId(measurementGoalId) {
        
        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/external/measurementgoal?id='+measurementGoalId).then(
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

    /********************************************************************************
    * @ngdoc method
    * @name getMetricDialog
    * @description
    * Get Metric Dialog stored
    ********************************************************************************/
    function getMetricDialog(){
        return service.metricDialog;
    }

    /********************************************************************************
    * @ngdoc method
    * @name getExternalMetricDialog
    * @description
    * Get External Metric Dialog stored
    ********************************************************************************/
    function getExternalMetricDialog(){
        return service.externalMetricDialog;
    }

    /********************************************************************************
    * @ngdoc method
    * @name storeMetric
    * @description
    * Store a Metric
    * @param {Metric} to store.
    ********************************************************************************/
    function storeMetric(toStore){
        service.metricDialog = toStore;
    }

    /********************************************************************************
    * @ngdoc method
    * @name storeExternalMetric
    * @description
    * Store an External Metric
    * @param {Metric} to store.
    ********************************************************************************/
    function storeExternalMetric(toStore){
        service.externalMetricDialog = toStore;
    }

    /********************************************************************************
    * @ngdoc method
    * @name getApprovedMetrics
    * @description
    * Get approved metric by state.
    ********************************************************************************/

    function getApprovedMetrics() {
        
        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric?state=Approved').then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET METRICS BY APPROVED VERSION');
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