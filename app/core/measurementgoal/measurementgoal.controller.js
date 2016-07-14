/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 15:53:20
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-14 17:04:38
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

MeasurementGoalController.$inject = ['$scope', '$location','MeasurementGoalService','MetricService','$window','AuthService', 'STATES'];

function MeasurementGoalController($scope, $location, MeasurementGoalService, MetricService, $window, AuthService, STATES) {

    var vm = this;

    $('body').removeClass('modal-open');
    vm.measurementGoals = [];

    //Initialize some transition variables
    vm.measurementGoalDialog = MeasurementGoalService.getUpdateMeasurementGoal().measurementGoal;
    vm.metrics = MeasurementGoalService.getUpdateMeasurementGoal().metrics;
    vm.contextFactors = MeasurementGoalService.getUpdateMeasurementGoal().contextFactors;
    vm.assumptions = MeasurementGoalService.getUpdateMeasurementGoal().assumptions;
    vm.organizationalGoal = MeasurementGoalService.getUpdateMeasurementGoal().organizationalGoal;
    vm.instanceProject = MeasurementGoalService.getUpdateMeasurementGoal().instanceProject;

    //vm.organizationalGoalDialog = {};
    //vm.metricsDialog = [];
    vm.externalMetricDialog = [];
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
    vm.initOrganizationalGoalDialog = initOrganizationalGoalDialog;
    vm.addTagToMeasurementGoal = addTagToMeasurementGoal;
    vm.removeTagFromMeasurementGoal = removeTagFromMeasurementGoal;
    vm.getMetricsByMeasurementGoal = getMetricsByMeasurementGoal;
    vm.getApprovedMetrics = getApprovedMetrics;
    vm.addMetricToMeasurementGoal = addMetricToMeasurementGoal;
    vm.removeMetricFromMeasurementGoal = removeMetricFromMeasurementGoal;
    vm.addSomethingToMeasurementGoal = addSomethingToMeasurementGoal;
    vm.removeSomethingFromMeasurementGoal = removeSomethingFromMeasurementGoal;
    vm.isModifiable = isModifiable;
    vm.isSubmittable = isSubmittable;
    vm.getExternalContextFactors = getExternalContextFactors;
    vm.getExternalAssumptions = getExternalAssumptions;
    vm.sendForApproval = sendForApproval;

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
        var functionJavascriptSubmit = (vm.functionJavascript !== undefined) ? vm.functionJavascript :  vm.measurementGoalDialog.interpretationModel.functionJavascript;
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
                functionJavascript : functionJavascriptSubmit,
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
         MetricService.getApprovedMetrics().then(
            function(data) {
                console.log('SUCCESS GET APPROVED METRICS');
                console.log(data.metricsDTO);
                vm.externalMetricDialog = data.metricsDTO;
                $("#modal_large_external_metric").modal("show");

            },
            function(data) {
                alert('Error retriving Metrics');
            }
        );
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
                vm.externalContextFactorDialog = data;
                $("#modal_large_external_contextfactor").modal("show");

            },
            function(data) {
                alert('Error retriving Context Factors');
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
                vm.externalAssumptionDialog = data;
                $("#modal_large_external_assumption").modal("show");
            },
            function(data) {
                alert('Error retriving Assumptions');
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
    * @name addSomethingToMeasurementGoal
    * @description
    * Add something to measurement goal.
    ********************************************************************************/
    function addSomethingToMeasurementGoal(typeObject, index){

        var toAdd = [];
        var dialog = [];

        switch(typeObject) {
            case 'Metric':
                toAdd = vm.metrics;
                dialog = vm.externalMetricDialog;
                break;
            case 'Question':
                toAdd = vm.questions;
                dialog = vm.externalQuestionDialog;
                break;
            case 'ContextFactor':
                toAdd = vm.contextFactors;
                dialog = vm.externalContextFactorDialog;
                break;
            case 'Assumption':
                toAdd = vm.assumptions;
                dialog = vm.externalAssumptionDialog;
                break;
        }

        if (typeObject == 'Metric' || typeObject == 'Question') {
            console.log('METRIC OR QUESTION UPDATE');
            for(var i=0; i<toAdd.length; i++){
                if(dialog[index].metadata.id == toAdd[i].metadata.id){
                    $window.alert('You cannot add an item twice!');
                    return true;
                }
            }
        }
        else {
            console.log('CONTEXTFACTOR OR ASSUMPTION UPDATE');
            console.log(dialog[index]);
            for(var i=0; i<toAdd.length; i++){
                if(dialog[index].id == toAdd[i].id){
                    $window.alert('You cannot add an item twice!');
                    return true;
                }
            }
        }

        var pointerBus = {
           objIdLocalToPhase : "",
           typeObj : typeObject,
           instance : dialog[index].metadata.id,
           busVersion : "",
           tags: []
        };

        switch(typeObject) {
            case 'Metric':
                vm.measurementGoalDialog.metrics.push(pointerBus);
                vm.metrics.push(dialog[index]);
                break;
            case 'Question':
                vm.measurementGoalDialog.questions.push(pointerBus);
                vm.questions.push(dialog[index]);
                break;
            case 'ContextFactor':
                vm.measurementGoalDialog.contextFactors.push(pointerBus);
                vm.contextFactors.push(dialog[index]);
                break;
            case 'Assumption':
                vm.measurementGoalDialog.assumptions.push(pointerBus);
                vm.assumptions.push(dialog[index]);
                break;
        }
        
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
        console.log(vm.measurementGoalDialog.metricatorId);
        console.log(AuthService.getUser().username);
        console.log(vm.measurementGoalDialog.metricatorId == AuthService.getUser().username);
        return vm.measurementGoalDialog.metricatorId == AuthService.getUser().username && !vm.measurementGoalDialog.metadata.state == 'Pending';
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
