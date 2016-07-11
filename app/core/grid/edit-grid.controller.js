(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name EditGridController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $routeParams
* @requires GridService
* @requires UserService
*
* @description
* Realizes the control layer for `edit-grid.modal.view`.
************************************************************************************/

angular.module('metricapp')

.controller('EditGridController', EditGridController);

EditGridController.$inject = ['$scope', '$location', '$routeParams', 'GridService', 'UserService'];

function EditGridController($scope, $location, $routeParams, GridService, UserService) {

    var vm = this;

    _init();

    function _loadGrid(gridid) {
        vm.loading = true;
        vm.success = false;
        GridService.getById(gridid).then(
            function(resolve) {
                vm.currGrid = angular.copy(resolve.grid);
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
        vm.currGrid = {
            id: $routeParams.gridid
        };
        _loadGrid(vm.currGrid.id);
    }

}

})();
