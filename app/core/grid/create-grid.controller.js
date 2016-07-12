(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name CreateGridController
* @module metricapp
* @requires $scope
* @requires $location
* @requires GridService
* @requires UserService
* @requires AuthService
*
* @description
* Realizes the control layer for `create-grid.modal.view`.
************************************************************************************/

angular.module('metricapp')

.controller('CreateGridController', CreateGridController);

CreateGridController.$inject = ['$scope', '$location', 'GridService', 'UserService', 'AuthService'];

function CreateGridController($scope, $location, GridService, UserService, AuthService) {

    var vm = this;

    vm.createGrid = createGrid;

    _init();

    function createGrid(grid) {
        vm.loading = true;
        vm.success = false;
        GridService.create(grid).then(
            function(resolve) {
                var gridid = resolve.gridid;
                var msg = resolve.msg;
                vm.success = true;
                $location.path('/grids/' + gridid);
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
        vm.loading = false;
        vm.success = true;
        vm.errmsg = null;
        vm.currUser = AuthService.getUser();
        vm.grid = {
            id: null,
            name: null,
            description: null,
            expert: vm.currUser.username,
            questioners: [],
            metricators: [],
            ts_create: null,
            ts_update: null,
            mgoals: [],
            questions: [],
            metrics: [],
            graph: {}
        };
    }

}

})();
