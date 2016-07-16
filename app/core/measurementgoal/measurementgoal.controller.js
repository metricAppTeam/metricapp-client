/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 15:53:20
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 01:30:36
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

MeasurementGoalController.$inject = ['$scope', '$location','MeasurementGoalService','MetricService','$window','AuthService', 'STATES', 'MetricModalService', 'ContextFactorService', 'AssumptionService', 'ContextFactorModalService', 'AssumptionModalService'];

function MeasurementGoalController($scope, $location, MeasurementGoalService, MetricService, $window, AuthService, STATES, MetricModalService, ContextFactorService, AssumptionService, ContextFactorModalService, AssumptionModalService) {

    var vm = this;

    //$('body').removeClass('modal-open');
    vm.measurementGoals = [];

    //Initialize some transition variables
    vm.measurementGoalDialog = MeasurementGoalService.getUpdateMeasurementGoal().measurementGoal;
    vm.metrics = MeasurementGoalService.getUpdateMeasurementGoal().metrics;
    vm.contextFactors = MeasurementGoalService.getUpdateMeasurementGoal().contextFactors;
    vm.assumptions = MeasurementGoalService.getUpdateMeasurementGoal().assumptions;
    vm.organizationalGoal = MeasurementGoalService.getUpdateMeasurementGoal().organizationalGoal;
    vm.instanceProject = MeasurementGoalService.getUpdateMeasurementGoal().instanceProject;
    vm.functionJavascript = vm.measurementGoalDialog.interpretationModel.functionJavascript;

    //vm.organizationalGoalDialog = {};
    //vm.metricsDialog = [];
    vm.externalMetricDialog = MetricService.getExternalMetricDialog();//[];
    vm.externalQuestionDialog = [];
    vm.externalContextFactorDialog = [];
    vm.externalAssumptionDialog = [];

    vm.submitMeasurementGoal = submitMeasurementGoal;
    vm.cancelSubmit = cancelSubmit;
    //vm.getMeasurementGoalsBy = getMeasurementGoalsBy;
    vm.getOrganizationalGoalById = getOrganizationalGoalById;
    vm.goToUpdateMeasurementGoal = goToUpdateMeasurementGoal;
    vm.setMeasurementGoalDialog = setMeasurementGoalDialog;
    vm.setOrganizationalGoalDialog = setOrganizationalGoalDialog;
    vm.setMetricDialog = setMetricDialog;
    vm.initOrganizationalGoalDialog = initOrganizationalGoalDialog;
    vm.addTagToMeasurementGoal = addTagToMeasurementGoal;
    vm.removeTagFromMeasurementGoal = removeTagFromMeasurementGoal;
    vm.getMetricsByMeasurementGoal = getMetricsByMeasurementGoal;
    vm.getApprovedMetrics = getApprovedMetrics;
    vm.addMetricToMeasurementGoal = addMetricToMeasurementGoal;
    vm.removeMetricFromMeasurementGoal = removeMetricFromMeasurementGoal;
    //vm.addSomethingToMeasurementGoal = addSomethingToMeasurementGoal;
    vm.removeSomethingFromMeasurementGoal = removeSomethingFromMeasurementGoal;
    vm.isModifiable = isModifiable;
    vm.isSubmittable = isSubmittable;
    vm.getExternalContextFactors = getExternalContextFactors;
    vm.getExternalAssumptions = getExternalAssumptions;
    vm.sendForApproval = sendForApproval;
    vm.getMetricsToUpdate = getMetricsToUpdate;
    vm.getContextFactorsToUpdate = getContextFactorsToUpdate;
    vm.getAssumptionsToUpdate = getAssumptionsToUpdate;
    vm.setContextFactorDialog = setContextFactorDialog;
    vm.setAssumptionDialog = setAssumptionDialog;

    //initOrganizationalGoalDialog();
    //getMetricsByMeasurementGoal();
    _init();

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Submits a MeasurementGoal.
    ********************************************************************************/
    function submitMeasurementGoal(state) {

        var objectSubmit = (vm.object !== undefined) ? vm.object :  vm.measurementGoalDialog.object;
        var purposeSubmit = (vm.purpose !== undefined) ? vm.purpose :  vm.measurementGoalDialog.purpose;
        var viewPointSubmit = (vm.viewPoint !== undefined) ? vm.viewPoint :  vm.measurementGoalDialog.viewPoint;
        var qualityFocusSubmit = (vm.qualityFocus !== undefined) ? vm.qualityFocus :  vm.measurementGoalDialog.qualityFocus;
        //var functionJavascriptSubmit = (vm.functionJavascript !== undefined) ? vm.functionJavascript :  vm.measurementGoalDialog.interpretationModel.functionJavascript;
        var queryNoSQLSubmit = (vm.queryNoSQL !== undefined) ? vm.queryNoSQL :  vm.measurementGoalDialog.interpretationModel.queryNoSQL;
        var releaseNoteSubmit = (vm.sendMessage !== undefined) ? vm.sendMessage :  vm.measurementGoalDialog.metadata.releaseNote;
        var stateSubmit = (state != null) ? state :  vm.measurementGoalDialog.metadata.state;


        var measurementGoal = {
            userid : vm.measurementGoalDialog.userid,
        	name : vm.name,
        	object : objectSubmit,
            viewPoint : viewPointSubmit,
            qualityFocus : qualityFocusSubmit,
        	purpose : purposeSubmit,
            OrganizationalGoalId : vm.measurementGoalDialog.OrganizationalGoalId,
            metrics : vm.measurementGoalDialog.metrics,
            questions : vm.measurementGoalDialog.questions,
            metricatorId : vm.measurementGoalDialog.metricatorId,
            questionersId : vm.measurementGoalDialog.questionersId,
            contextFactors : vm.measurementGoalDialog.contextFactors,
            assumptions : vm.measurementGoalDialog.assumptions,
            interpretationModel : {
                functionJavascript : vm.measurementGoalDialog.interpretationModel.functionJavascript,
                queryNoSQL : queryNoSQLSubmit
            },
            metadata : {
                id : vm.measurementGoalDialog.metadata.id,
                version : vm.measurementGoalDialog.metadata.version,
                tags : vm.measurementGoalDialog.metadata.tags,
                creatorId : vm.measurementGoalDialog.metadata.creatorId,
                state : stateSubmit,
                releaseNote : releaseNoteSubmit,
                entityType : vm.measurementGoalDialog.metadata.entityType,
                versionBus : vm.measurementGoalDialog.metadata.versionBus,
                creationDate : vm.measurementGoalDialog.metadata.creationDate,
                lastVersionDate : vm.measurementGoalDialog.metadata.lastVersionDate
            }
        };

        MeasurementGoalService.submitMeasurementGoal(measurementGoal, state).then(
            function(message) {
                //alert(message);
                vm.measurementGoalDialog = message.measurementGoals[0];
                $("#modal_large_measurementgoal").modal("show");
                //$location.path('/measurementgoal');
            },
            function(message) {
                alert(message);
            }
        );
        /*
        AuthService.signup(user, profile).then(
            function(message) {
                alert(message);
                $location.path('/');
            },
            function(message) {
                alert(message);
            });*/
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
    * @name sendForApproval
    * @description
    * Sends a MeasurementGoal for approval.
    ********************************************************************************/
    function sendForApproval() {
        //if (vm.sendMessage !== undefined) {
        //    vm.measurementGoalDialog.metadata.releaseNote = vm.sendMessage;
        
        //} 
        submitMeasurementGoal('Pending');
    }


    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get active measurement goals for a metricator.
    ********************************************************************************/
    function getMeasurementGoals(){
        //TODO add method to retrieve last approved measurementGoal
        //TODO add method to send for approval
         MeasurementGoalService.getMeasurementGoals().then(
            function(data) {
                console.log(data.measurementGoals);
                vm.measurementGoals = data.measurementGoals;
            },
            function(data) {
                alert('Error retriving Measurement Goals');
            }
        );
    }

    /********************************************************************************
    * @ngdoc method
    * @name getMetricsByMeasurementGoal
    * @description
    * Get approved metrics by measurement goal.
    ********************************************************************************/
    function getMetricsByMeasurementGoal(){

        /*var metricsGetter = [];
        for(var i=0; i<vm.measurementGoalDialog.metrics.length;i++){ 
            MetricService.getMetricsById(vm.measurementGoalDialog.metrics[i].instance).then(
                function(data) {
                    console.log('SUCCESS GET METRICS BY MEASUREMENT GOAL');
                    console.log(data.metricsDTO);
                    metricsGetter.push(data.metricsDTO);
                },
                function(data) {
                    alert('Error retriving Metrics');
                }
            );
        }

        vm.metricsDialog = metricsGetter;*/

        MetricService.getMetricsByMeasurementGoalId(vm.measurementGoalDialog.metadata.id).then(
                function(data) {
                    console.log('SUCCESS GET METRICS BY MEASUREMENT GOAL');
                    console.log(data.metrics);
                    vm.metricsDialog = data.metrics;
                },
                function(data) {
                    alert('Error retriving Metrics');
                }
        );        

    }

    /********************************************************************************
    * @ngdoc method
    * @name getApprovedMetrics
    * @description
    * Get approved metrics.
    ********************************************************************************/
    function getApprovedMetrics(){

    	if (vm.externalMetricDialog.length === 0){
	        MetricService.getApprovedMetrics().then(
	            function(data) {
	                console.log('SUCCESS GET APPROVED METRICS');
	                console.log(data.metricsDTO);
	                //vm.externalMetricDialog = data.metricsDTO;
	                MetricService.storeExternalMetric(data.metricsDTO);
    			    MetricModalService.openExternalMetricModal();

	                //$("#modal_large_external_metric").modal("show");
	                //TODO Transfer to MeasurementGoalDialogService
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
         MeasurementGoalService.getExternalContextFactors().then(
            function(data) {
                console.log('SUCCESS GET EXTERNAL CONTEXT FACTORS');
                console.log(data);
                //vm.externalContextFactorDialog = data;
                //$("#modal_large_external_contextfactor").modal("show");
                ContextFactorService.storeExternalContextFactor(data);
			    ContextFactorModalService.openExternalContextFactorModal();
            },
            function(data) {
                alert('Error retrieving Context Factors');
            }
        );
    }

    /********************************************************************************
    * @ngdoc method
    * @name getExternalAssumptions
    * @description
    * Get external assumptions.
    ********************************************************************************/
    function getExternalAssumptions(){
         MeasurementGoalService.getExternalAssumptions().then(
            function(data) {
                console.log('SUCCESS GET EXTERNAL ASSUMPTIONS');
                console.log(data);
                //vm.externalAssumptionDialog = data;
                //$("#modal_large_external_assumption").modal("show");
                AssumptionService.storeExternalAssumption(data);
			    AssumptionModalService.openExternalAssumptionModal();
            },
            function(data) {
                alert('Error retrieving Assumptions');
            }
        );
    }

    /********************************************************************************
    * @ngdoc method
    * @name getOrganizationalGoal
    * @description
    * Get organizational goal.
    ********************************************************************************/
    function getOrganizationalGoalById(id){
         MeasurementGoalService.getOrganizationalGoalById(id).then(
            function(data) {
                console.log("getOrganizationalGoalDialog");
                console.log(data);
                vm.organizationalGoalDialog = data;
                //return data;//vm.organizationalGoalDialog;
            },
            function(data) {
                alert('Error retriving Measurement Goals by state');
            }
        );
    }

    /********************************************************************************
    * @ngdoc method
    * @name cancelSignup
    * @description
    * Cancels the ongoing submit.
    ********************************************************************************/
    function cancelSubmit() {
        $location.path('/measurementgoal');
    }

    function setMeasurementGoalDialog(measurementGoalToAssignId){
            vm.measurementGoalDialog = vm.measurementGoals[measurementGoalToAssignId];

            if(vm.measurementGoalDialog !== null){
                setOrganizationalGoalDialog(vm.measurementGoalDialog.organizatoinalGoalId);
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


    //function setExternalMetricDialog(metricToAssignId){
    //        MetricService.storeExternalMetric();
    //        MetricModalService.openExternalMetricModal();
    //}

    function setOrganizationalGoalDialog(organizationalGoalToAssignId){
            if(organizationalGoalToAssignId !== null){
                //vm.organizationalGoalDialog = 
                getOrganizationalGoalById(organizationalGoalToAssignId);
                console.log(vm.organizationalGoalDialog);
            }
    }

    function initOrganizationalGoalDialog(){
        if(vm.measurementGoalDialog !== null){
            setOrganizationalGoalDialog('1');//vm.measurementGoalDialog.organizatoinalGoalId);
        }
    }

    function goToUpdateMeasurementGoal(){
        MeasurementGoalService.toUpdateMeasurementGoal(vm.measurementGoalDialog);
        $location.path('/measurementgoal');
        console.log($location.path('/measurementgoal'));
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
    * @name addMetricToMeasurementGoal
    * @description
    * Add metric to measurement goal.
    ********************************************************************************/
    function addMetricToMeasurementGoal(index){
        for(var i=0; i<vm.metrics.length; i++){
            if(vm.externalMetricDialog[index].metadata.id == vm.metrics[i].metadata.id){
                $window.alert('You cannot add a metric twice!');
                return true;
            }
        }

        var pointerBus = {
           objIdLocalToPhase : "",
           typeObj : "Metric",
           instance : vm.externalMetricDialog[index].metadata.id,
           busVersion : "",
           tags: []
        };
        vm.measurementGoalDialog.metrics.push(pointerBus);
        vm.metrics.push(vm.externalMetricDialog[index]);
        $window.alert('Item added');
        console.log(vm.measurementGoalDialog);
        return false;
    }

    /********************************************************************************
    * @ngdoc method
    * @name removeMetricFromMeasurementGoal
    * @description
    * Remove metric from measurement goal.
    ********************************************************************************/
    function removeMetricFromMeasurementGoal(index){
        vm.measurementGoalDialog.metrics.splice(index, 1);
        vm.metrics.splice(index, 1);
        $window.alert('Item removed');
        console.log(vm.measurementGoalDialog);
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
        //console.log(vm.measurementGoalDialog.metricatorId);
        //console.log(AuthService.getUser().username);
        //console.log(vm.measurementGoalDialog.metricatorId == AuthService.getUser().username);
        return vm.measurementGoalDialog.metricatorId == AuthService.getUser().username && !vm.measurementGoalDialog.metadata.state == 'Pending';
    }

    /********************************************************************************
    * @ngdoc method
    * @name isChanged
    * @description
    * Is the Function Javascript changed.
    ********************************************************************************/
    function isChanged(){
        return vm.functionJavascript !== vm.measurementGoalDialog.interpretationModel.functionJavascript;
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
    * @name _init
    * @description
    * Initializes the controller.
    ********************************************************************************/
    function _init() {
        vm.loading = false;
    }

}

})();
