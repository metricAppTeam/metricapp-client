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

MetricDashboardController.$inject = ['$scope', '$filter','$location','MetricService','AuthService','$window'];

function MetricDashboardController($scope, $filter ,$location, MetricService,AuthService, $window) {
   var vm = this;

   vm.loadMore = loadMore;
   vm.search = search;


   _init();


   vm.goToUpdateMetric = goToUpdateMetric;
   vm.setMetricDialog = setMetricDialog;
   vm.update=update;
   vm.newMetric = newMetric;

   vm.update();

   vm.modal = 'metric';
   vm.metricDialog;





   function newMetric(){
      MetricService.create().then(
         function(data){vm.update();},function(data){vm.update();}
      );
   }

   function loadMore() {
      if (vm.idx < vm.buffer.length) {
         var e = Math.min(vm.idx + vm.step, vm.buffer.length);
         vm.metrics = vm.metrics.concat(vm.buffer.slice(vm.idx, e));
         vm.idx = e;
      }
   }

   function search(query) {
      vm.buffer = $filter('orderBy')($filter('filter')(vm.data, query), vm.orderBy);
   }

   function _load(){
      if(vm.mine){
         _loadAllMyMetrics();
      }else{
         _loadAllMetrics();
      }
   }

   function _loadAllMyMetrics() {
      vm.loading = true;
      vm.success = false;
      MetricService.getAllMine().then(
         function(resolve) {
            vm.data = angular.copy(resolve.metricsDTO);
            vm.buffer = $filter('orderBy')(vm.data, vm.orderBy);
            vm.success = true;
         },
         function(reject) {
            vm.errmsg = reject.errmsg;
            vm.success = false;
         }
      ).finally(function() {
         vm.loading = false;
      });
   }


   function _loadAllMetrics() {
      vm.loading = true;
      vm.success = false;
      MetricService.getAll().then(
         function(resolve) {
            vm.data = angular.copy(resolve.metricsDTO);
            vm.buffer = $filter('orderBy')(vm.data, vm.orderBy);
            vm.success = true;
         },
         function(reject) {
            vm.errmsg = reject.errmsg;
            vm.success = false;
         }
      ).finally(function() {
         vm.loading = false;
      });
   }


   /********************************************************************************
   * @ngdoc method
   * @description
   * update active metrics for the current user id
   ********************************************************************************/
   function update(){
      _load();
   }

   /********************************************************************************
   * @ngdoc method
   * @name submit
   * @description
   * Check if the metric in vm.dialog has metricatorId field of the logged user
   ********************************************************************************/



   /********************************************************************************
   * @ngdoc method
   * @name submit
   * @description
   * This function is needed by modal when a metricator wants to change a metric
   ********************************************************************************/
   function goToUpdateMetric(){
      console.log("Going to Update Metric");
      $window.location.href ='#/metric?id='+vm.metricDialog.metadata.id;

   }

   /********************************************************************************
   * @ngdoc method
   * @name submit
   * @description
   * This function is called to set the vm.metricDialog. When a model is opened, the metric
   * displayed is the metric in vm.metricDialog. this method is generally called by ng-click
   * of the table
   ********************************************************************************/
   function setMetricDialog(metricToAssignId){
      vm.metricDialog = vm.data[metricToAssignId];

   }



/********************************************************************************
* @ngdoc method
* @name _init
* @description
* Initializes the controller.
********************************************************************************/
function _init() {
   vm.userId = AuthService.getUser().username;
   vm.role = AuthService.getUser().role;
   vm.loading = true;
   vm.success = false;
   vm.errmsg = null;
   vm.data = [];
   vm.buffer = [];
   vm.metrics = [];
   vm.idx = 0;
   vm.step = 4;
   vm.query = '';
   vm.orderBy = 'name';
   if(vm.role == 'METRICATOR'){
      vm.mine = true;
   }
   else{
      vm.mine=false;
   }
   _load();
   vm.buffer=vm.data;
   $scope.$watch('vm.buffer', function() {
      vm.idx = 0;
      var e = Math.min(vm.idx + vm.step, vm.buffer.length);
      vm.metrics = vm.buffer.slice(vm.idx, e);
      vm.idx = e;
   });
}
}
})();
