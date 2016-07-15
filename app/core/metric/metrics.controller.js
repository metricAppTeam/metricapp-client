(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name MetricsController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $filter
* @requires MetricService
*
* @description
* Realizes the control layer for `metrics.view`.
************************************************************************************/

angular.module('metricapp')

.controller('MetricsController', MetricsController);

MetricsController.$inject = ['$scope', '$location', '$filter', 'MetricService','AuthService'];

function MetricsController($scope, $location, $filter, MetricService,AuthService) {

    var vm = this;

    vm.loadMore = loadMore;
    vm.search = search;
    vm.reset=reset;
    vm.update=update;

    _init();

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

    function reset(){
      _init();
   }

   function _load(){
      if(vm.mine){
         _loadMyMetrics();
      }
      else{
         _loadAllMetrics();
      }
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

  function _loadMyMetrics() {
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

  function update(){
     _load();
 }

    function _init() {
        vm.userId = AuthService.getUser().username;
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.data = [];
        vm.buffer = [];
        vm.metrics = [];
        vm.mine=false;
        vm.idx = 0;
        vm.step = 4;
        vm.query = '';
        vm.orderBy = 'name';
        if(vm.role=='METRICATOR'){
           vm.mine=true;
        }
        _load();
        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.metrics = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });
    }

}

})();
