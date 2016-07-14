(function () { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name Metric update
* @module metricapp
* @requires $scope
* @requires $location
* @description
*
* Realizes the control layer for `metric.view`.
************************************************************************************/
angular.module('metricapp')

.controller('MetricPageController', MetricPageController);

MetricPageController.$inject = ['$scope','$routeParams', '$location','MetricService','$window'];

function MetricPageController($scope,$routeParams, $location, MetricService, $window) {
    var vm = this;
    vm.loading = true;

    vm.listOfSet=['Integers','Reals'];
    vm.listOfScaleType = [{value:'nominalScale', option:'Nominal Scale'},{value:'ordinalScale',option:'Ordinal Scale'},{value:'intervalScale',option:'Interval Scale'},{value:'ratioScale',option:'Ratio Scale'},{value:'absoluteScale',option:'Absolute Scale'}]


    vm.loadedMetric;
    vm.newMetric;

    vm.copyDialogToModel=copyDialogToModel;
    vm.pushIfNotExists=pushIfNotExists;
    vm.submitMetric=submitMetric;
    _selectMetricToView();






    /********************************************************************************
   * @ngdoc method
   * @name _selectMetricToView
   * @description
   * This function checks that in the url there's param id.
   *If id is specified, the page is loaded with the metric with id specified.
   * Otherwise page is loaded with metric in MetricService
   ********************************************************************************/
    function _selectMetricToView(){
      if(angular.isUndefined($routeParams.id)){
         vm.loadedMetric= MetricService.getToUpdate();
         vm.loading=false;
         vm.copyDialogToModel();
      }else{

         MetricService.getMetricsById($routeParams.id).then(
            function(data){
               vm.loadedMetric = data.metricsDTO[0];
               vm.loading=false;
               vm.copyDialogToModel();
            },function(data){
               vm.error = true;
            }
         );
      }
    }



    function copyDialogToModel(){
      vm.newMetric =angular.copy(vm.loadedMetric);
   }
   /********************************************************************************
  * @ngdoc method
  * @name pushIfNotExists
  * @description
  * This function takes an element el, typically a string.
  * Firstly it checks that el is not null and el is not already in array.
  * Then, if it is not too long or too short it pushes el to array.
  ********************************************************************************/
   function pushIfNotExists(el, array){
      if(array.indexOf(el)==-1 && !angular.isUndefined(el)){
         if(el.length>1 && el.length<31){
            array.push(el);
         }
      }
   }







    /********************************************************************************
    * @ngdoc method
    * @name submitMetric
    * @description
    * Submits a Metric
    ********************************************************************************/
    function submitMetric() {
      console.log(vm.newMetric)
        var objectSubmit = (vm.object !== null) ? vm.object :  vm.measurementGoalDialog.object;
        var purposeSubmit = (vm.purpose !== null) ? vm.purpose :  vm.measurementGoalDialog.purpose;
        var viewPointSubmit = (vm.viewPoint !== null) ? vm.viewPoint :  vm.measurementGoalDialog.viewPoint;
        var focusSubmit = (vm.focus !== null) ? vm.focus :  vm.measurementGoalDialog.focus;
        var functionJavascriptSubmit = (vm.functionJavascript !== null) ? vm.functionJavascript :  vm.measurementGoalDialog.functionJavascript;
        var queryNoSQLSubmit = (vm.queryNoSQL !== null) ? vm.queryNoSQL :  vm.measurementGoalDialog.queryNoSQL;




        var measurementGoal = {
            userid : vm.measurementGoalDialog.userid,
        	name : vm.name,
        	object : vm.object,
            viewPoint : vm.viewPoint,
            focus : vm.focus,
        	purpose : vm.purpose,
            OrganizationalGoalId : vm.measurementGoalDialog.OrganizationalGoalId,
            metrics : vm.measurementGoalDialog.metrics,
            questions : vm.measurementGoalDialog.questions,
            metricatorId : vm.measurementGoalDialog.metricatorId,
            questionersId : vm.measurementGoalDialog.questionersId,
            contextFactors : vm.measurementGoalDialog.contextFactors,
            assumptions : vm.measurementGoalDialog.assumptions,
            interpretationModel : {
                functionJavascript : vm.functionJavascript,
                queryNoSQL : vm.queryNoSQL
            },
            metadata : {
                id : vm.measurementGoalDialog.metadata.id,
                version : vm.measurementGoalDialog.metadata.version,
                tags : vm.measurementGoalDialog.metadata.tags,
                creatorId : vm.measurementGoalDialog.metadata.creatorId,
                state : vm.measurementGoalDialog.metadata.state,
                releaseNote : vm.measurementGoalDialog.metadata.releaseNote,
                entityType : vm.measurementGoalDialog.metadata.entityType,
                versionBus : vm.measurementGoalDialog.metadata.versionBus,
                creationDate : vm.measurementGoalDialog.metadata.creationDate,
                lastVersionDate : vm.measurementGoalDialog.metadata.lastVersionDate
            }
        };
        MeasurementGoalService.submitMeasurementGoal(measurementGoal).then(
            function(message) {
                alert(message);
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

        for(var i=0; i<vm.measurementGoalDialog.metrics.length;i++){
            MetricService.getMetricsById(vm.measurementGoalDialog.metrics[i].instance).then(
                function(data) {
                    console.log('SUCCESS GET METRICS BY MEASUREMENT GOAL');
                    console.log(data.metricsDTO);
                    vm.metricsDialog = data.metricsDTO;
                },
                function(data) {
                    alert('Error retriving Metrics');
                }
            );
        }
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
                vm.externalloadedMetric = data.metricsDTO;

            },
            function(data) {
                alert('Error retriving Metrics');
            }
        );
    }

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get active measurement goals for a metricator by some field.
    ********************************************************************************/
    function getMeasurementGoalsBy(keyword,field){
         MeasurementGoalService.getMeasurementGoalsBy(keyword,field).then(
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
        for(var i=0; i<vm.metricsDialog.length; i++){
            if(vm.externalloadedMetric[index].metadata.id == vm.metricsDialog[i].metadata.id){
                $window.alert('You cannot add a metric twice!');
                return true;
            }
        }

        var pointerBus = {
           objIdLocalToPhase : "",
           typeObj : "Metric",
           instance : vm.externalloadedMetric[index].metadata.id,
           tags: []
        };
        vm.measurementGoalDialog.metrics.push(pointerBus);
        vm.metricsDialog.push(vm.externalloadedMetric[index]);
        $window.alert('Item added');
        console.log(vm.measurementGoalDialog);
        return false;
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
