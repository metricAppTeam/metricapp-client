/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 15:53:20
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-17 17:59:23
*/
(function () { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name MeasurementGoalController
* @module metricapp
* @requires $scope
* @requires $location
* @description
* Manages the MeasurementGoal.
* Realizes the control layer for `measurementgoal.view`.
************************************************************************************/

angular.module('metricapp')

.controller('MeasurementGoalController', MeasurementGoalController);

MeasurementGoalController.$inject = ['$scope', '$location','MeasurementGoalService','MetricService','$window','AuthService', 'STATES', 'MetricModalService', 'ContextFactorService', 'AssumptionService', 'ContextFactorModalService', 'AssumptionModalService', '$routeParams'];

function MeasurementGoalController($scope, $location, MeasurementGoalService, MetricService, $window, AuthService, STATES, MetricModalService, ContextFactorService, AssumptionService, ContextFactorModalService, AssumptionModalService, $routeParams) {

    var vm = this;

    //Initialize some transition variables
    vm.externalMetricDialog = MetricService.getExternalMetricDialog();
    vm.externalContextFactorDialog = [];
    vm.externalAssumptionDialog = [];

    vm.submitMeasurementGoal = submitMeasurementGoal;
    vm.goToUpdateMeasurementGoal = goToUpdateMeasurementGoal;
    vm.addTagToMeasurementGoal = addTagToMeasurementGoal;
    vm.removeTagFromMeasurementGoal = removeTagFromMeasurementGoal;
    vm.getApprovedMetrics = getApprovedMetrics;
    vm.removeSomethingFromMeasurementGoal = removeSomethingFromMeasurementGoal;
    vm.isModifiable = isModifiable;
    vm.getExternalContextFactors = getExternalContextFactors;
    vm.getExternalAssumptions = getExternalAssumptions;
    vm.getMetricsToUpdate = getMetricsToUpdate;
    vm.setMetricDialog = setMetricDialog;
    vm.getContextFactorsToUpdate = getContextFactorsToUpdate;
    vm.getAssumptionsToUpdate = getAssumptionsToUpdate;
    vm.setContextFactorDialog = setContextFactorDialog;
    vm.setAssumptionDialog = setAssumptionDialog;
    vm.commitChangeState = commitChangeState;
    vm.isForApproval = isForApproval;
    vm.isToApprove = isToApprove;
    vm.isToSuspend = isToSuspend;
    vm.isToReject = isToReject;

    _init();
    _selectMeasurementGoalToView();


    /********************************************************************************
    * @ngdoc method
    * @name _selectMeasurementGoalToView
    * @description
    * This function initializes MeasurementGoalDialog
    ********************************************************************************/
    function _initMeasurementGoalDialog(){
        vm.measurementGoalDialog = MeasurementGoalService.getUpdateMeasurementGoal().measurementGoal;
        vm.metrics = MeasurementGoalService.getUpdateMeasurementGoal().metrics;
        vm.contextFactors = MeasurementGoalService.getUpdateMeasurementGoal().contextFactors;
        vm.assumptions = MeasurementGoalService.getUpdateMeasurementGoal().assumptions;
        vm.organizationalGoal = MeasurementGoalService.getUpdateMeasurementGoal().organizationalGoal;
        vm.instanceProject = MeasurementGoalService.getUpdateMeasurementGoal().instanceProject;        
    }

    /********************************************************************************
    * @ngdoc method
    * @name _selectMeasurementGoalToView
    * @description
    * This function checks that in the url there's param id.
    * If id is specified, the page is loaded with the Measurement Goal id specified.
    * Otherwise page is loaded with Measurement Goal in MeasurementGoalService
    ********************************************************************************/
    function _selectMeasurementGoalToView(){
        if (!$routeParams.measurementgoalid) {
            //Can modify
            vm.modifying = true;
            _initMeasurementGoalDialog();
        }
        else {
            //Only for readers
            vm.modifying = false;

            vm.currMeasurementGoalId = {
                id: $routeParams.measurementgoalid
            };

            //Retrieve Measurement Goal Details
            MeasurementGoalService.getMeasurementGoalsBy(vm.currMeasurementGoalId.id,'id').then(
                function(data){
                    vm.measurementGoalDialog = data.measurementGoals[0];
                    
                    //Retrieve Measurement Goal Externals
                    MeasurementGoalService.getMeasurementGoalExternals(vm.currMeasurementGoalId.id).then(
                        function (response) {
                            console.log('Success in read to get Measurement Goal Externals');
                            console.log(response);

                            vm.metrics = response.metrics;
                            vm.contextFactors = response.contextFactors;
                            vm.assumptions = response.assumptions;
                            vm.organizationalGoal = response.organizationalGoal;
                            vm.instanceProject = response.instanceProject;

                            var toUpdate = {
                                measurementGoal : vm.measurementGoalDialog,
                                metrics : response.metrics,
                                contextFactors : response.contextFactors,
                                assumptions : response.assumptions,
                                organizationalGoal : response.organizationalGoal,
                                instanceProject : response.instanceProject
                            };
                            MeasurementGoalService.toUpdateMeasurementGoal(toUpdate);
                        },
                        function (response) {
                            console.log('Failure get Measurement Goal Externals');
                            console.log(response);
                        }
                    );
                },function(data){
                    vm.error = true;
                }
            );
        }
    }


    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Submits a MeasurementGoal.
    ********************************************************************************/
    function submitMeasurementGoal(state) {
        if (state !== undefined) vm.measurementGoalDialog.metadata.state = state;

        MeasurementGoalService.submitMeasurementGoal(vm.measurementGoalDialog).then(
            function(message) {
                vm.measurementGoalDialog = message.measurementGoals[0];
                $window.alert('Measurement Goal Submitted');
                $location.path('/metricator');
            },
            function(message) {
                alert(message);
            }
        );
    }

    function getMetricsToUpdate() {
    	vm.metrics = MeasurementGoalService.getUpdateMeasurementGoal().metrics;
    }

    function getContextFactorsToUpdate() {
    	vm.contextFactors = MeasurementGoalService.getUpdateMeasurementGoal().contextFactors;
    }

    function getAssumptionsToUpdate() {
    	vm.assumptions = MeasurementGoalService.getUpdateMeasurementGoal().assumptions;
    }

    /********************************************************************************
    * @ngdoc method
    * @name commitChangeState
    * @description
    * This function commits a new state for MeasurementGoal
    ********************************************************************************/
    function commitChangeState(state) {
        switch (state) {
            case STATES.PENDING : 
                _sendForApproval();
                break;
            case STATES.APPROVED : 
                _approve();
                break;
            case STATES.REJECTED : 
                _reject();
                break;
            case STATES.SUSPENDED : 
                _suspend();
                break;
            case STATES.ONUPDATEWAITING :
                _assign();
                break;
               
        }
    }

    /********************************************************************************
    * @ngdoc method
    * @name sendForApproval
    * @description
    * Sends a MeasurementGoal for approval.
    ********************************************************************************/
    function _sendForApproval() {
        submitMeasurementGoal(STATES.PENDING);
    }

    /********************************************************************************
    * @ngdoc method
    * @name reject
    * @description
    * Reject a MeasurementGoal.
    ********************************************************************************/
    function _reject() {
        submitMeasurementGoal(STATES.REJECTED);
    }

    /********************************************************************************
    * @ngdoc method
    * @name reject
    * @description
    * Assign a MeasurementGoal.
    ********************************************************************************/
    function _assign() {
        submitMeasurementGoal(STATES.ONUPDATEWAITING);    
    }

    /********************************************************************************
    * @ngdoc method
    * @name approve
    * @description
    * Approve a MeasurementGoal.
    ********************************************************************************/
    function _approve() {
        submitMeasurementGoal(STATES.APPROVED);    
    }

    /********************************************************************************
    * @ngdoc method
    * @name suspend
    * @description
    * Suspend a MeasurementGoal.
    ********************************************************************************/
    function _suspend() {
        submitMeasurementGoal(STATES.SUSPENDED);
    }

    /********************************************************************************
    * @ngdoc method
    * @name getApprovedMetrics
    * @description
    * Get approved metrics.
    ********************************************************************************/
    function getApprovedMetrics(){

    	if (vm.externalMetricDialog.length === 0){
	        MetricService.getAllApproved().then(
	            function(data) {
	                console.log('SUCCESS GET APPROVED METRICS');
	                console.log(data.metricsDTO);
	                //vm.externalMetricDialog = data.metricsDTO;
	                MetricService.storeExternalMetric(data.metricsDTO);
    			    MetricModalService.openExternalMetricModal();
	            },
	            function(data) {
	                alert('Error retriving Metrics');
	            }
	        );
     	}
     	else {
     		MetricModalService.openExternalMetricModal();
     	}
    }

    /********************************************************************************
    * @ngdoc method
    * @name getExternalContextFactors
    * @description
    * Get external context factors.
    ********************************************************************************/
    function getExternalContextFactors(){

        if (vm.externalContextFactorDialog.length === 0){
            MeasurementGoalService.getExternalContextFactors().then(
                function(data) {
                    console.log('SUCCESS GET EXTERNAL CONTEXT FACTORS');
                    console.log(data);
                    //vm.externalContextFactorDialog = data;
                    ContextFactorService.storeExternalContextFactor(data);
    			    ContextFactorModalService.openExternalContextFactorModal();
                },
                function(data) {
                    alert('Error retrieving Context Factors');
                }
            );
        }
        else {
            ContextFactorModalService.openExternalContextFactorModal();
        }
    }

    /********************************************************************************
    * @ngdoc method
    * @name getExternalAssumptions
    * @description
    * Get external assumptions.
    ********************************************************************************/
    function getExternalAssumptions(){
        if (vm.externalAssumptionDialog.length === 0){
            MeasurementGoalService.getExternalAssumptions().then(
                function(data) {
                    console.log('SUCCESS GET EXTERNAL ASSUMPTIONS');
                    console.log(data);
                    //vm.externalAssumptionDialog = data;
                    AssumptionService.storeExternalAssumption(data);
    			    AssumptionModalService.openExternalAssumptionModal();
                },
                function(data) {
                    alert('Error retrieving Assumptions');
                }
            );
        }
        else {
            AssumptionModalService.openExternalAssumptionModal();
        }
    }

    function setMetricDialog(metricToAssignId){
            MetricService.storeMetric(vm.metrics[metricToAssignId]);
            MetricModalService.openMetricModal();
    }

    function setContextFactorDialog(contextFactorToAssignId){
            ContextFactorService.storeContextFactor(vm.contextFactors[contextFactorToAssignId]);
            ContextFactorModalService.openContextFactorModal();
    }

    function setAssumptionDialog(assumptionToAssignId){
            AssumptionService.storeAssumption(vm.assumptions[assumptionToAssignId]);
            AssumptionModalService.openAssumptionModal();
    }

    function goToUpdateMeasurementGoal(){
        $location.path('/measurementgoal');
    }

    /********************************************************************************
    * @ngdoc method
    * @name addTagToMeasurementGoal
    * @description
    * Add tag to a measurement goal.
    ********************************************************************************/
    function addTagToMeasurementGoal(){
         vm.measurementGoalDialog.metadata.tags.push(vm.newTag);
    }

    /********************************************************************************
    * @ngdoc method
    * @name addTagToMeasurementGoal
    * @description
    * Remove tag from a measurement goal.
    ********************************************************************************/
    function removeTagFromMeasurementGoal(index){
        vm.measurementGoalDialog.metadata.tags.splice(index, 1);
    }

    /********************************************************************************
    * @ngdoc method
    * @name removeSomethingFromMeasurementGoal
    * @description
    * Remove something from measurement goal.
    ********************************************************************************/
    function removeSomethingFromMeasurementGoal(typeObject, index){
        
        switch(typeObject) {
            case 'Metric':
                vm.measurementGoalDialog.metrics.splice(index, 1);
                vm.metrics.splice(index, 1);
                break;
            case 'Question':
                vm.measurementGoalDialog.questions.splice(index, 1);
                vm.questions.splice(index, 1);
                break;
            case 'ContextFactor':
                vm.measurementGoalDialog.contextFactors.splice(index, 1);
                vm.contextFactors.splice(index, 1);
                break;
            case 'Assumption':
                vm.measurementGoalDialog.assumptions.splice(index, 1);
                vm.assumptions.splice(index, 1);
                break;
        }

        $window.alert('Item removed');
        console.log("MEASUREMENT GOAL AFTER REMOVE");
        console.log(vm.measurementGoalDialog);
    }

    /********************************************************************************
    * @ngdoc method
    * @name isModifiable
    * @description
    * Measurement Goal can be updated.
    ********************************************************************************/
    function isModifiable(){
        return vm.measurementGoalDialog.metricatorId == AuthService.getUser().username && !(vm.measurementGoalDialog.metadata.state == 'Pending');
    }

    /********************************************************************************
    * @ngdoc method
    * @name isForApproval
    * @description
    * Measurement Goal can be sent for approval.
    ********************************************************************************/ 
    function isForApproval(){
        return AuthService.getUser().role == 'METRICATOR' &&
        vm.measurementGoalDialog.metricatorId == AuthService.getUser().username && 
        vm.measurementGoalDialog.metadata.state == 'OnUpdateQuestionerEndpoint';
    }

    /********************************************************************************
    * @ngdoc method
    * @name isToReject
    * @description
    * Measurement Goal can be rejected.
    ********************************************************************************/ 
    function isToReject(){
        return AuthService.getUser().role == 'EXPERT' && 
        vm.measurementGoalDialog.metadata.state == 'Pending';
    }

    /********************************************************************************
    * @ngdoc method
    * @name isToApproved
    * @description
    * Measurement Goal can be approved.
    ********************************************************************************/ 
    function isToApprove(){
        return AuthService.getUser().role == 'EXPERT' && 
        vm.measurementGoalDialog.metadata.state == 'Pending';
    }

    /********************************************************************************
    * @ngdoc method
    * @name isToSuspend
    * @description
    * Measurement Goal can be suspended.
    ********************************************************************************/ 
    function isToSuspend(){
        return AuthService.getUser().role == 'EXPERT' && 
        vm.measurementGoalDialog.metadata.state == 'Approved'
        vm.measurementGoalDialog.metadata.state == 'Rejected';
    }

    /********************************************************************************
    * @ngdoc method
    * @name _init
    * @description
    * Initializes the controller.
    ********************************************************************************/
    function _init() {
        vm.loading = false;
    }

}

})();
