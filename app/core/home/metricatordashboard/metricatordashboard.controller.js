/*
* @Author: alessandro.fazio
* @Date:   2016-07-12 23:08:35
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-13 11:18:05
*/

(function () { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name MetricatorDashboardController
* @module metricapp
* @requires $scope
* @requires $location
* @description
* Manages the Measurement goal and metrics by Metricator id.
* Realizes the control layer for `metricatordashboard.view`.
************************************************************************************/

angular.module('metricapp')

.controller('MetricatorDashboardController', MetricatorDashboardController);

MetricatorDashboardController.$inject = ['$scope', '$location','MetricService','MeasurementGoalService','$window'];

function MetricatorDashboardController($scope, $location, MetricService, MeasurementGoalService, $window) {

    var vm = this;

    vm.getMeasurementGoals = getApprovedMeasurementGoals;
    vm.getMetrics = getApprovedMetrics;

    //var states = [
    //	Approved = 'Approved',
    //	OnUpdate = 'OnUpdate',
    //	Pending = 'Pending'
    //];
    vm.date = new Date();

    var states = [
    	STATES.CREATED,
    	STATES.ONUPDATEQUESTIONERENDPOINT
    ];

    var approvedMeasurementGoals = 0;
    var onUpdateMeasurementGoals = 0;
    var pendingMeasurementGoals = 0;
    var measurementGoals = [approvedMeasurementGoals, onUpdateMeasurementGoals, pendingMeasurementGoals];

    var approvedMetrics = 0;
    var onUpdateMetrics = 0;
    var pendingMetrics = 0;
    var metrics = [approvedMetrics, onUpdateMetrics, pendingMetrics];

    vm.results = {
    	metrics : metrics,
    	measurementGoals : measurementGoals,
    }; 

    vm.getMeasurementGoals();
    vm.getMetrics();

    _init();

    /********************************************************************************
    * @ngdoc method
    * @name getMeasurementGoals
    * @description
    * Get measurement goals for a metricator.
    ********************************************************************************/
    function getMeasurementGoals(){
        //TODO add method to retrieve last approved measurementGoal
        //TODO add method to send for approval
        for (var i = 0; i < states.lenght; i++){
	        MeasurementGoalService.countMeasurementGoalsByState(states[i]).then(
	            function(data) {
	                console.log(data.measurementGoals);
	                vm.results.measurementGoals[i] = data.count;
	            },
	            function(data) {
	                alert('Error retriving Measurement Goals');
	            }
	        );
        }
    };

    /********************************************************************************
    * @ngdoc method
    * @name getMetrics
    * @description
    * Get metrics for a metricator.
    ********************************************************************************/
    function getMetrics(){
    	for (var i = 0; i < states.lenght; i++){
	        MetricService.countMetricsByState(states[i]).then(
	            function(data) {
	                console.log(data.metricsDTO);
	                vm.results.metrics[i] = data.count;
	            },
	            function(data) {
	                alert('Error retriving Metrics');
	            }
	        );
     	}
    };

    /********************************************************************************
    * @ngdoc method
    * @name _init
    * @description
    * Initializes the controller.
    ********************************************************************************/
    function _init() {
        
    }

	}
})();
