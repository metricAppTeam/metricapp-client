(function () { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name MetricController
* @module metricapp
* @requires $scope
* @requires $location
* @description
* Manages Metrics.
* Realizes the control layer for `metric.view`.
************************************************************************************/

angular.module('metricapp')

.controller('MetricDashboardController', MetricDashboardController);

MetricDashboardController.$inject = ['$scope', '$location','MetricService','$window'];

function MetricDashboardController($scope, $location, MetricService, $window) {
    var vm = this;
    vm.results = {
        metrics : [],
        metricsOnUpdate : [],
        metricsRejected : []
    };
    vm.resultsName = [
      'All My Metrics',
      'Metrics OnUpdate',
      'Rejected Metrics'
   ];

    vm.getMetrics = getMetrics;
    vm.getMetricsByState = getMetricsByState;
    vm.goToUpdateMetric = goToUpdateMetric;
    vm.setMetricDialog = setMetricDialog;
    vm.update=update;

    vm.update();

    vm.modal = 'metric';
    vm.metricDialog = vm.results.metrics;

    _init();


    /********************************************************************************
    * @ngdoc method
    * @name submit
    * @description
    * Get active metrics for a metricator.
    ********************************************************************************/
    function getMetrics(){

         MetricService.getMetrics().then(
            function(data) {
                console.log(data.metricsDTO);
                vm.results.metrics= data.metricsDTO;
            },
            function(data) {
                alert('Error retriving Metrics');
            }
        );
    };

    /********************************************************************************
    * @ngdoc method
    * @name submit
    * @description
    * Get active metrics for a metricator.
    ********************************************************************************/
    function getMetricsByState(state){

         MetricService.getMetricsByState(state).then(
            function(data) {
                console.log('getbystate: '+data.metricsDTO);
                switch (state){
                case 'OnUpdate': vm.results.metricsOnUpdate=data.metricsDTO;
                break;
                case 'Rejected': vm.results.metricsRejected=data.metricsDTO;
                break;
             }

            },
            function(data) {
                alert('Error retriving Metrics');
            }
        );
    };

    function update(){
      vm.getMetrics();

   };


    /*
    function setMeasurementGoalDialog(measurementGoalToAssign){
        vm.measurementGoalDialog.name = measurementGoalToAssign.name;
        vm.measurementGoalDialog.purpose = measurementGoalToAssign.purpose;
        vm.measurementGoalDialog.object = measurementGoalToAssign.object;
        vm.measurementGoalDialog.viewPoint = measurementGoalToAssign.viewPoint;
        vm.measurementGoalDialog.focus = measurementGoalToAssign.focus;
    };*/


    function goToUpdateMetric(){
        MetricService.toUpdateMetric(vm.metricDialog);
        console.log("Going to Update Metric");
        $location.path('/metric');
        console.log($location.path('/metric'));

    };


    function setMetricDialog(modalId,metricToAssignId){
      switch (modalId) {
          case 0:
             vm.metricDialog = vm.results.metrics[metricToAssignId];
             break;
          case 1:
             vm.metricDialog = vm.results.metricsOnUpdate[metricToAssignId];
             break;
          case 2:
             vm.metricDialog = vm.results.metricsRejected[metricToAssignId];
             break;
          default:
             vm.metricDialog = vm.results.metrics[measurementGoalToAssignId];
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
    function _init(){
    };

})();
