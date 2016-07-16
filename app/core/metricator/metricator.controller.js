/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 15:53:20
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 20:15:41
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

MetricatorController.$inject = ['$scope', '$location','MetricService','MeasurementGoalService','$window','STATES', 'AuthService', 'MeasurementGoalModalService'];

function MetricatorController($scope, $location, MetricService, MeasurementGoalService, $window, STATES, AuthService, MeasurementGoalModalService) {

    var vm = this;

    vm.states = [STATES.ONUPDATEQUESTIONERENDPOINT, STATES.ONUPDATEWAITINGQUESTIONS];
    vm.measurementGoals = [undefined,undefined];
    vm.metrics = [];
    vm.contextFactors = [];
    vm.assumptions = [];
    vm.organizationalGoal = {};
    vm.instanceProject = {};
    vm.measurementGoalDialog = {};
    vm.modalIds = [];

    vm.setMeasurementGoalDialog = setMeasurementGoalDialog;
    //vm.isModifiable = isModifiable;
    //vm.isSubmittable = isSubmittable;
    vm.sendForApproval = sendForApproval;
    //vm.getMeasurementGoals = getMeasurementGoals;
    vm.getMeasurementGoalsByState = getMeasurementGoalsByState;
    //vm.getMetrics = getMetrics;
    vm.goToUpdateMeasurementGoal = goToUpdateMeasurementGoal;
    vm.getMeasurementGoalExternals = getMeasurementGoalExternals;

    _getMeasurementGoals();
    _init();

    /********************************************************************************
    * @ngdoc method
    * @name _getMeasurementGoalsByState
    * @description
    * Get measurement goals by state for a metricator.
    ********************************************************************************/
    function getMeasurementGoalsByState(index){
         MeasurementGoalService.getMeasurementGoals(vm.states[index]).then(
            function(data) {
                console.log(data.measurementGoals);
                //vm.results.measurementGoals = data.measurementGoals;
                vm.measurementGoals[index] = data.measurementGoals;
            },
            function(data) {
                alert('Error retriving Measurement Goals');
            }
        );
    };

    /********************************************************************************
    * @ngdoc method
    * @name _getMeasurementGoals
    * @description
    * Get active measurement goals for a metricator.
    ********************************************************************************/
    function _getMeasurementGoals(){
        for (var i=0; i<vm.states.length; i++){
            getMeasurementGoalsByState(i);
        }
    };

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get active metrics for a metricator.
    ********************************************************************************/
    function getMetrics(){
         MetricService.getMetrics().then(
            function(data) {
                console.log(data.metricsDTO);
                vm.results.metrics = data.metricsDTO;
            },
            function(data) {
                alert('Error retriving Metrics');
            }
        );
    };

    /********************************************************************************
    * @ngdoc method
    * @name getMeasurementGoalExternals
    * @description
    * Get measurement goals externals.
    ********************************************************************************/
    function getMeasurementGoalExternals(externalId){

         MeasurementGoalService.getMeasurementGoalExternals(externalId).then(
            function(data) {
                vm.metrics = data.metrics;
                vm.contextFactors = data.contextFactors;
                vm.assumptions = data.assumptions;
                vm.organizationalGoal = data.organizationalGoal;
                vm.instanceProject = data.instanceProject;

	        	var toUpdate = {
	            	measurementGoal : vm.measurementGoalDialog,
	            	metrics : data.metrics,
	            	contextFactors : data.contextFactors,
	            	assumptions : data.assumptions,
	            	organizationalGoal : data.organizationalGoal,
	            	instanceProject : data.instanceProject
	        	}; 	

                vm.modalIds.push([externalId,toUpdate]);

	        	//Send to MeasurementGoalService to open a modal
        		MeasurementGoalService.toUpdateMeasurementGoal(toUpdate);
	        	MeasurementGoalModalService.openMeasurementGoalModal();
                console.log("Retrieving Externals");
            },
            function(data) {
                alert('Error retriving Externals');
        	}
        );
    };

    function setMeasurementGoalDialog(parentIndex,measurementGoalToAssignId){
        vm.measurementGoalDialog = vm.measurementGoals[parentIndex][measurementGoalToAssignId];
        var toSearchId = vm.measurementGoals[parentIndex][measurementGoalToAssignId].metadata.id;
        var doubleInCache = false;

        for (var t=0, length = vm.modalIds.length; t<length; t++){
            if (vm.modalIds[t][0] === toSearchId){
                //Send to MeasurementGoalService to open a modal
                MeasurementGoalService.toUpdateMeasurementGoal(vm.modalIds[t][1]);
                MeasurementGoalModalService.openMeasurementGoalModal();
                doubleInCache = true;
            }
        }

        if (!doubleInCache) getMeasurementGoalExternals(toSearchId);
    };

    function goToUpdateMeasurementGoal(){

        var toUpdate = {
            measurementGoal : vm.measurementGoalDialog,
            metrics : vm.metrics,
            contextFactors : vm.contextFactors,
            assumptions : vm.assumptions,
            organizationalGoal : vm.organizationalGoal,
            instanceProject : vm.instanceProject
        };

        MeasurementGoalService.toUpdateMeasurementGoal(toUpdate);
        $location.path('/measurementgoal');
    }

    /********************************************************************************
    * @ngdoc method
    * @name isModifiable
    * @description
    * Measurement Goal can be updated.
    ********************************************************************************/
    function isModifiable(){
        return vm.measurementGoalDialog.metricatorId == AuthService.getUser().username;
    }

    /********************************************************************************
    * @ngdoc method
    * @name isSubmittable
    * @description
    * Measurement Goal can be submitted.
    ********************************************************************************/ 
    function isSubmittable(){
        return vm.measurementGoalDialog.metricatorId == AuthService.getUser().username && vm.measurementGoalDialog.metadata.state == 'OnUpdateQuestionerEndpoint';
    }

    /********************************************************************************
    * @ngdoc method
    * @name sendForApproval
    * @description
    * Send Measurement Goal for approval.
    ********************************************************************************/ 
    function sendForApproval(){

        console.log("Send For Approval");
        var toUpdate = {
            measurementGoal : vm.measurementGoalDialog,
            metrics : vm.metrics,
            contextFactors : vm.contextFactors,
            assumptions : vm.assumptions,
            organizationalGoal : vm.organizationalGoal,
            instanceProject : vm.instanceProject
        };

        MeasurementGoalService.toUpdateMeasurementGoal(toUpdate);
        
        $location.path('/measurementgoal/sendforapproval');
    }
    }
    /********************************************************************************
    * @ngdoc method
    * @name _init
    * @description
    * Initializes the controller.
    ********************************************************************************/
    function _init() {
    }


})();
