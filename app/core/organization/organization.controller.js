(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name OrganizationController
* @module metricapp
* @requires $location
* @requires UserService
*
* @description
* Realizes the control layer for `organization.view`.
************************************************************************************/

angular.module('metricapp')

.controller('OrganizationController', OrganizationController);

OrganizationController.$inject = ['$location', 'UserService'];

function OrganizationController($location, UserService) {

    var vm = this;

    vm.loadMore = loadMore;
    vm.search = search;

    _init();

    function loadMore() {
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.users = vm.users.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
    }

    function search(query) {
        vm.buffer = $filter('orderBy')($filter('filter')(vm.data, query), vm.orderBy);
    }

    function _loadAllUsers() {
        vm.loading = true;
        vm.success = false;
        UserService.getAll().then(
            function(resolve) {
                vm.data = angular.copy(resolve.users);
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

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.data = [];
        vm.buffer = [];
        vm.users = [];
        vm.idx = 0;
        vm.step = 5;
        vm.query = '';
        vm.orderBy = 'name';
        _loadAllUsers();
        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.users = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });
    }

}

})();