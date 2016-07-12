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

MetricDashboardController.$inject = ['$scope', '$location','MetricService','AuthService','$window'];

function MetricDashboardController($scope, $location, MetricService,AuthService, $window) {
    var vm = this;
    vm.results = {
        metrics : []
    };

    vm.userId = AuthService.getUser().username;

    vm.getMetrics = getMetrics;
    vm.goToUpdateMetric = goToUpdateMetric;
    vm.setMetricDialog = setMetricDialog;
    vm.update=update;
    vm.isMine=isMine;

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


    function update(){
      vm.getMetrics();
   };

   function isMine(){
      if (vm.metricDialog.metricatorId == vm.userId){
         console.log(vm.metricDialog.metricatorId + ","+ vm.userId);
         return true;
      }else{
         return false;
      }
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


    function setMetricDialog(metricToAssignId){
       vm.metricDialog = vm.results.metrics[metricToAssignId];

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
