/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 15:53:20
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-15 13:45:37
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

    vm.getMeasurementGoals = getMeasurementGoals;
    vm.getMeasurementGoalsByState = getMeasurementGoalsByState;
    vm.getMetrics = getMetrics;
    vm.goToUpdateMeasurementGoal = goToUpdateMeasurementGoal;
    vm.getMeasurementGoalExternals = getMeasurementGoalExternals;

    //vm.results = {
    //    measurementGoals : [],
    //    metrics : [],
    //    questions : []
    //};
    vm.states = [STATES.ONUPDATEQUESTIONERENDPOINT, STATES.ONUPDATEWAITINGQUESTIONS];
    vm.measurementGoals = [undefined,undefined];
    vm.metrics = [];
    vm.contextFactors = [];
    vm.assumptions = [];
    vm.organizationalGoal = {};
    vm.instanceProject = {};
    vm.measurementGoalDialog = {};
    //vm.metricDialog = null;

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
    vm.isModifiable = isModifiable;
    vm.isSubmittable = isSubmittable;
    vm.sendForApproval = sendForApproval;
    
    vm.getMeasurementGoals();
    //vm.getMetrics();
    _init();

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
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
    * @name submitMeasurementGoal
    * @description
    * Get active measurement goals for a metricator.
    ********************************************************************************/
    function getMeasurementGoals(){
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
                //console.log(data.measurementGoals);
                //TODO add check if variable is undefined
                vm.metrics = data.metrics;
                vm.contextFactors = data.contextFactors;
                vm.assumptions = data.assumptions;
                vm.organizationalGoal = data.organizationalGoal;
                vm.instanceProject = data.instanceProject;

                /*var toUpdate = {
	            	measurementGoal : vm.measurementGoalDialog,
	            	metrics : vm.metrics,
	            	contextFactors : vm.contextFactors,
	            	assumptions : vm.assumptions,
	            	organizationalGoal : vm.organizationalGoal,
	            	instanceProject : vm.instanceProject
	        	};*/

	        	var toUpdate = {
	            	measurementGoal : vm.measurementGoalDialog,
	            	metrics : data.metrics,
	            	contextFactors : data.contextFactors,
	            	assumptions : data.assumptions,
	            	organizationalGoal : data.organizationalGoal,
	            	instanceProject : data.instanceProject
	        	}; 	

	        	//Send to MeasurementGoalService to open a modal
        		MeasurementGoalService.toUpdateMeasurementGoal(toUpdate);
	        	MeasurementGoalModalService.openMeasurementGoalModal();
                //It's not necessary, now we have angular modal
                //$("#modal_large").modal("show");
            },
            function(data) {
                alert('Error retriving Externals');
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
    
    /*function setMeasurementGoalDialog(modalId,measurementGoalToAssignId){
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
    };*/

    function setMeasurementGoalDialog(parentIndex,measurementGoalToAssignId){
        vm.measurementGoalDialog = vm.measurementGoals[parentIndex][measurementGoalToAssignId];
        getMeasurementGoalExternals(vm.measurementGoals[parentIndex][measurementGoalToAssignId].metadata.id);//.then(

        //function (toUpdate) {

        //},
        //function (toUpdate) {
        //	console.log("Exit from setMeasurementGoalDialog with failure status");
        //});
        //var goalid = $routeParams.goalid;
        //vm.currMGoal = {
        //    id: goalid;
        //}
        //;
        //_loadMGoal(vm.currMGoal.id);
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
        console.log("Going to Update Measurement Goal");
        $location.path('/measurementgoal');
        console.log($location.path('/measurementgoal'));

    }

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Submits a MeasurementGoal.
    ********************************************************************************/
    function submitMeasurementGoal() {

        //getLatestVersion

        var measurementGoal = {
            userid : vm.measurementGoalDialog.userid,
            name : vm.name,
            object : vm.measurementGoalDialog.object,
            viewPoint : vm.measurementGoalDialog.viewPoint,
            qualityFocus : vm.measurementGoalDialog.qualityFocus,
            purpose : vm.measurementGoalDialog.purpose,
            OrganizationalGoalId : vm.measurementGoalDialog.OrganizationalGoalId,
            metrics : vm.measurementGoalDialog.metrics,
            questions : vm.measurementGoalDialog.questions,
            metricatorId : vm.measurementGoalDialog.metricatorId,
            questionersId : vm.measurementGoalDialog.questionersId,
            contextFactors : vm.measurementGoalDialog.contextFactors,
            assumptions : vm.measurementGoalDialog.assumptions,
            interpretationModel : {
                functionJavascript : vm.measurementGoalDialog.interpretationModel.functionJavascript,
                queryNoSQL : vm.measurementGoalDialog.interpretationModel.queryNoSQL
            },
            metadata : {
                id : vm.measurementGoalDialog.metadata.id,
                version : vm.measurementGoalDialog.metadata.version,
                tags : vm.measurementGoalDialog.metadata.tags,
                creatorId : vm.measurementGoalDialog.metadata.creatorId,
                state : vm.measurementGoalDialog.metadata.state,
                releaseNote : vm.sendMessage,
                entityType : vm.measurementGoalDialog.metadata.entityType,
                versionBus : vm.measurementGoalDialog.metadata.versionBus,
                creationDate : vm.measurementGoalDialog.metadata.creationDate,
                lastVersionDate : vm.measurementGoalDialog.metadata.lastVersionDate
            }
        };
        MeasurementGoalService.submitMeasurementGoal(measurementGoal).then(
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
    * @name isModifiable
    * @description
    * Measurement Goal can be updated.
    ********************************************************************************/
    function isModifiable(){
        //console.log(vm.measurementGoalDialog.metricatorId);
        //console.log(AuthService.getUser().username);
        //console.log(vm.measurementGoalDialog.metricatorId == AuthService.getUser().username);
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
