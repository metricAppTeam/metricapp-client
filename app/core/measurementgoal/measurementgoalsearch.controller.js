(function () { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name MeasurementGoalSearchController
* @module metricapp
* @requires $scope
* @requires $location
* @description
* Manages the MeasurementGoal.
* Realizes the control layer for `measurementgoalsearch.view`.
************************************************************************************/

angular.module('metricapp')

.controller('MeasurementGoalSearchController', MeasurementGoalSearchController);

MeasurementGoalSearchController.$inject = ['$scope', '$location','MetricService','MeasurementGoalService','$window'];

function MeasurementGoalSearchController($scope, $location, MetricService, MeasurementGoalService, $window) {

    var vm = this;
    vm.measurementGoals = [];
    vm.metrics = [];
    vm.contextFactors = [];
    vm.assumptions = [];
    vm.organizationalGoal = {};
    vm.instanceProject = {};
    vm.measurementGoalDialog = {};
    vm.modal = "";
    
    vm.getMeasurementGoals = getMeasurementGoals;
    vm.getMetrics = getMetrics;
    vm.goToUpdateMeasurementGoal = goToUpdateMeasurementGoal;
    vm.getMeasurementGoalExternals = getMeasurementGoalExternals;
    vm.setMeasurementGoalDialog = setMeasurementGoalDialog;
    vm.getMeasurementGoalsBy = getMeasurementGoalsBy;
    
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
         MeasurementGoalService.getMeasurementGoals().then(
            function(data) {
                console.log(data.measurementGoals);
                vm.measurementGoals = data.measurementGoals;
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
    * Get active measurement goals for a metricator by some field.
    ********************************************************************************/
    function getMeasurementGoalsBy(keyword,field){

        if (keyword != null && field != null){
            MeasurementGoalService.getMeasurementGoalsBy(keyword,field).then(
                function(data) {
                    console.log(data.measurementGoals);
                    vm.measurementGoals = data.measurementGoals;
                    if(vm.measurementGoals.length === 0)
                        $window.alert(data.error);
                },
                function(data) {
                    alert('Error retriving Measurement Goals');
                }
            );
        }
        else
            $window.alert("You must enter keyword and field");
    }

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
                $("#modal_large").modal("show");
            },
            function(data) {
                alert('Error retriving Metrics');
            }
        );
    };

    function setMeasurementGoalDialog(measurementGoalToAssignId){
        vm.measurementGoalDialog = vm.measurementGoals[measurementGoalToAssignId];
        getMeasurementGoalExternals(vm.measurementGoals[measurementGoalToAssignId].metadata.id);
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
