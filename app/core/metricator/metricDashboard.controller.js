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
    vm.goToUpdateMetric = goToUpdateMetric;

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
    * @description
    * update active metrics for the current user id
    ********************************************************************************/
    function update(){
      vm.getMetrics();
   };

   /********************************************************************************
   * @ngdoc method
   * @name submit
   * @description
   * Check if the metric in vm.dialog has metricatorId field of the logged user
   ********************************************************************************/
   function isMine(){
      if (vm.metricDialog.metricatorId == vm.userId){
         console.log(vm.metricDialog.metricatorId + ","+ vm.userId);
         return true;
      }else{
         return false;
      }
   };


   /********************************************************************************
   * @ngdoc method
   * @name submit
   * @description
   * This function is needed by modal when a metricator wants to change a metric
   ********************************************************************************/
    function goToUpdateMetric(){
        MetricService.toUpdateMetric(vm.metricDialog);
        console.log("Going to Update Metric");
        $location.path('/metric');
        console.log($location.path('/metric'));

    };

    /********************************************************************************
    * @ngdoc method
    * @name submit
    * @description
    * This function is called to set the vm.metricDialog. When a model is opened, the metric
    * displayed is the metric in vm.metricDialog. this method is generally called by ng-click
    * of the table
    ********************************************************************************/
    function setMetricDialog(metricToAssignId){
       vm.metricDialog = vm.results.metrics[metricToAssignId];

   };

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
