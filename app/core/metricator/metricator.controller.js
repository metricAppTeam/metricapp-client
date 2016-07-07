/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 15:53:20
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-07 11:55:23
*/
(function () { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name MetricatorController
* @module metricapp
* @requires $scope
* @requires $location
* @description
* Manages the MetricatorGoal.
* Realizes the control layer for `metricator.view`.
************************************************************************************/

angular.module('metricapp')

.controller('MetricatorController', MetricatorController);

MetricatorController.$inject = ['$scope', '$location','MetricatorService','$window'];

function MetricatorController($scope, $location, MetricatorService, $window) {

    var vm = this;

    vm.getMeasurementGoals = getMeasurementGoals;
    vm.getMetrics = getMetrics;

    vm.results = {
        measurementGoals : [],
        metrics : [],
        questions : []
    };

    vm.measurementGoalDialog = null;
    vm.metricDialog = null;

    vm.modal = "";

    /*
    vm.measurementGoalDialog = {
            name: "",
            focus : "",
            object : "",
            purpose : "",
            viewPoint : "",
        };*/

    vm.setMeasurementGoalDialog = setMeasurementGoalDialog;
    
    vm.getMeasurementGoals();
    vm.getMetrics();
    _init();

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get active measurement goals for a metricator.
    ********************************************************************************/
    function getMeasurementGoals(){
        //TODO add method to retrieve last approved measurementGoal
        //TODO add method to send for approval
         MetricatorService.getMeasurementGoals().then(
            function(data) {
                console.log(data.measurementGoals);
                vm.results.measurementGoals = data.measurementGoals;
            },
            function(data) {
                alert('Error retriving Measurement Goals');
            }
        );
    };

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get active metrics for a metricator.
    ********************************************************************************/
    function getMetrics(){
         MetricatorService.getMetrics().then(
            function(data) {
                console.log(data.metricsDTO);
                vm.results.metrics = data.metricsDTO;
            },
            function(data) {
                alert('Error retriving Metrics');
            }
        );
    };

    /*
    function setMeasurementGoalDialog(measurementGoalToAssign){
        vm.measurementGoalDialog.name = measurementGoalToAssign.name;
        vm.measurementGoalDialog.purpose = measurementGoalToAssign.purpose;
        vm.measurementGoalDialog.object = measurementGoalToAssign.object;
        vm.measurementGoalDialog.viewPoint = measurementGoalToAssign.viewPoint;
        vm.measurementGoalDialog.focus = measurementGoalToAssign.focus;
    };*/
    
    function setMeasurementGoalDialog(modalId,measurementGoalToAssignId){
        switch (modalId) {
            case 0:
                //$('#modal_button').attr('data-target','#modal_measurementGoal');
                vm.modal = 'measurementGoal';
                vm.measurementGoalDialog = vm.results.measurementGoals[measurementGoalToAssignId];
                break;
            case 1:
                //$('#modal_button').attr('data-target','#modal_metric');
                vm.modal = 'metric';
                vm.metricDialog = vm.results.metrics[measurementGoalToAssignId];
                break;
            case 2:
                vm.modal = 'question';
                //$('#modal_button').attr('data-target','#modal_question');
                break;
            default:
                //$('#modal_button').attr('data-target','#modal_measurementGoal');
                vm.modal = 'metric';
                vm.measurementGoalDialog = vm.results.measurementGoals[measurementGoalToAssignId];
                break;
        }
    };

    /*
    function getMeasurementGoals() {
        
        /*var measurementGoal = {
            id: mtc.id,
        	name : mtc.name,
        	creationDate : mtc.creationDate,
        	lastVersionDate : mtc.lastVersionDate,
        	releaseNote : mtc.releaseNote,
        	state : mtc.state 		
        };
        MetricatorService.getMeasurementGoals().then(
            function(data) {
            
                measurementGoal.id = data.id;
                measurementGoal.name = data.name;
                measurementGoal.creationDate = data.creationDate;
                measurementGoal.lastVersionDate = data.lastVersionDate;
                measurementGoal.releaseNote = data.releaseNote;
                measurementGoal.state = data.state;
                $location.path('/measurementgoal');
                
                return data.measurementGoals;
                
                
            },
            function(message) {
                alert('Error retriving Measurement Goals');
            }
        );*/
        
    }


    /********************************************************************************
    * @ngdoc method
    * @name _init
    * @description
    * Initializes the controller.
    ********************************************************************************/
    function _init() {
        //mtc.loading = false;
        /*MetricatorService.getMeasurementGoals().then(
            function(message) {
                return message.measurementGoals;
                 },
            function(message) {
                alert('Error retriving Measurement Goals');
            }
        );*/
    
        //mtc.getMeasurementGoals();
    }

})();
