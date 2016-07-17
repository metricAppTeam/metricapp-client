/*
* @Author: alessandro.fazio
* @Date:   2016-07-12 23:08:35
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-17 16:15:24
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

MetricatorDashboardController.$inject = ['$scope', '$location','MetricService','MeasurementGoalService','$window', 'STATES'];

function MetricatorDashboardController($scope, $location, MetricService, MeasurementGoalService, $window, STATES) {

    var vm = this;

    //var states = [
    //	Approved = 'Approved',
    //	OnUpdate = 'OnUpdate',
    //	Pending = 'Pending'
    //];
    vm.date = new Date();

    vm.measurementGoalStates = [
    	STATES.APPROVED,
    	STATES.ONUPDATEENDPOINT,
        STATES.PENDING
    ];

    //vm.measurementGoalStates = [];
    //vm.measurementGoalStates[0] = 'Approved';
    //vm.measurementGoalStates[1] = 'OnUpdateQuestionerEndpoint';
    //vm.measurementGoalStates[2] = 'Pending';
    

    vm.metricStates = [
        STATES.APPROVED,
        STATES.ONUPDATE,
        STATES.PENDING
    ];

    vm.measurementGoals = {};

    vm.metrics = {};

    /*var approvedMeasurementGoals = 0;
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
    }; */

    //vm.getMeasurementGoals = getMeasurementGoals;
    //vm.getMetrics = getMetrics;

    _getMeasurementGoals();
    _getMetrics();
    _init();

    /********************************************************************************
    * @ngdoc method
    * @name getMeasurementGoals
    * @description
    * Get measurement goals for a metricator.
    ********************************************************************************/
    function _getMeasurementGoals(){
        console.log("Retrieving some informations about Measurement Goals");

        //for (var i = 0, len = vm.measurementGoalStates.length; i<len ; i++){
	    vm.measurementGoalStates.forEach(
                function getMgByState(i){ 
                    MeasurementGoalService.countMeasurementGoalsByState(i).then(
        	            function(data) {
        	                console.log(data.measurementGoals);
        	                vm.measurementGoals[i] = data.count;
                            console.log("vm.measurementGoals[" + i + "] = " + data.count);
        	            },
        	            function(data) {
        	                alert('Error retriving Measurement Goals');
        	            }
                );}
	        ,vm);
        //}

        console.log(vm.measurementGoals);
    };

    /********************************************************************************
    * @ngdoc method
    * @name getMetrics
    * @description
    * Get metrics for a metricator.
    ********************************************************************************/
    function _getMetrics(){
        console.log("Retrieving some informations about Metrics");

    	//for (var i = 0; i < vm.metricStates.lenght; i++){
	    vm.metricStates.forEach(
                function getMetByState(i){ 
            MetricService.countMetricsByState(i).then(
	            function(data) {
	                console.log(data.metricsDTO);
	                vm.metrics[i] = data.count;
                    console.log("vm.metrics[" + i + "] = " + data.count);

	            },
	            function(data) {
	                alert('Error retriving Metrics');
	            }
	        );}
        ,vm);
     	//}
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
