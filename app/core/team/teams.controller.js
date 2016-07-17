(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name TeamsController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $filter
* @requires TeamService
* @requires UserService
*
* @description
* Realizes the control layer for `teams.view`.
************************************************************************************/

angular.module('metricapp')

.controller('TeamsController', TeamsController);

TeamsController.$inject = ['$scope', '$location', '$filter', 'TeamService', 'UserService'];

function TeamsController($scope, $location, $filter, TeamService, UserService) {

    var vm = this;

    _init();

    vm.loadMore = loadMore;
    vm.search = search;

    _init();

    function loadMore() {
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.teams = vm.teams.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
    }

    function search(query) {
        vm.buffer = $filter('orderBy')($filter('filter')(vm.data, query), vm.orderBy);
    }

    function _loadAllTeams() {
        vm.loading = true;
        vm.success = false;
        TeamService.getAll().then(
            function(resolve) {
                vm.data = angular.copy(resolve.teams);
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
        vm.teams = [];
        vm.idx = 0;
        vm.step = 1;
        vm.query = '';
        vm.orderBy = 'name';
        _loadAllTeams();
        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.teams = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });
    }
}

})();
