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

    vm.search = search;

    _init();

    function search() {
        
    }

    function _loadUsers(usrStart, usrN) {
        vm.loading = true;
        vm.success = false;
        UserService.getNUsersFrom(usrStart, usrN).then(
            function(resolve) {
                vm.numusers = resolve.numusers;
                vm.users.push(resolve.users);
                vm.success = true;
            },
            function(reject) {
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.users = [];
        vm.numusers = 0;
        _loadUsers(0, 20);
    }

}

})();
