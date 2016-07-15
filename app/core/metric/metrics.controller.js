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
    vm.openModal=openModal;
    vm.goToRead=goToRead;
    vm.getLabelState = getLabelState;

    vm.labelsForState = [
       {state:'OnUpdate',label: "label label-primary label-form"},
       {state:'Pending',label: "label label-default label-form"},
       {state:'Created',label: "label label-default label-form"},
       {state:'Approved',label: "label label-warning label-form"},
       {state:'Rejected',label: "label label-danger label-form"}];

    _init();

    function loadMore() {
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.metrics = vm.metrics.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
    }

    function goToRead(id){
      console.log('go to '+'#/metrics/'+id);
      $location.path('#/metrics/'+id);
   }

    function search(query) {
        vm.buffer = $filter('orderBy')($filter('filter')(vm.data, query), vm.orderBy,true);
    }

    function reset(){
      _init();
   }


       function openModal(metric){
         vm.metricDialog=metric;
         vm.modal=true;
      }

   function _load(){
      if(vm.mine){
         if(!vm.approved){
         _loadMyMetrics();
      }else{
         _loadMyApprovedMetrics();
      }
      }
      else{
         if(!vm.approved){
         _loadAllMetrics();
      }else{
         _loadAllApprovedMetrics();
      }
      }
   }

    function _loadAllMetrics() {
        vm.loading = true;
        vm.success = false;
        MetricService.getAll().then(
            function(resolve) {
                vm.data = angular.copy(resolve.metricsDTO);
                vm.buffer = $filter('orderBy')(vm.data, vm.orderBy,true);
                vm.success = true;
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;}
        );
  }

  function _loadMyMetrics() {
     vm.loading = true;
     vm.success = false;
     MetricService.getAllMine().then(
          function(resolve) {
              vm.data = angular.copy(resolve.metricsDTO);
              vm.buffer = $filter('orderBy')(vm.data, vm.orderBy,true);
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

function _loadAllApprovedMetrics() {
    vm.loading = true;
    vm.success = false;
    MetricService.getAllApproved().then(
        function(resolve) {
            vm.data = angular.copy(resolve.metricsDTO);
            vm.buffer = $filter('orderBy')(vm.data, vm.orderBy,true);
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

function _loadMyApprovedMetrics() {
 vm.loading = true;
 vm.success = false;
 MetricService.getAllApproved().then(
      function(resolve) {
         vm.data = [];
          var temp = angular.copy(resolve.metricsDTO);
          for (var m in temp){
             if (temp[m].metricatorId == vm.user){
                vm.data.push(angular.copy(temp[m]));
             }
          }
          vm.buffer = $filter('orderBy')(vm.data, vm.orderBy,true);
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
        vm.role = AuthService.getUser().role;
        vm.metricator=false;
        if(vm.role == 'METRICATOR'){
           vm.metricator=true;
        }
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.data = [];
        vm.buffer = [];
        vm.metrics = [];
        vm.mine=false;
        vm.modal=false;
        vm.idx = 0;
        vm.step = 9;
        vm.query = '';
        vm.approved=false;
        vm.orderBy = 'metadata.lastVersionDate';
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

    function getLabelState(state){
      return $filter('filter')(vm.labelsForState, function (d) {return d.state == state;})[0].label;
    }

}

})();
