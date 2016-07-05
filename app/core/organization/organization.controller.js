(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name OrganizationController
* @module metricapp
* @requires $rootScope
* @requires $scope
* @requires $location
* @requires UserService
*
* @description
* Manages the contact listing.
* Realizes the control layer for `organization.view`.
************************************************************************************/

angular.module('metricapp')

.controller('OrganizationController', OrganizationController);

OrganizationController.$inject = ['$rootScope', '$scope', '$location', 'UserService'];

function OrganizationController($rootScope, $scope, $location, UserService) {

    var vm = this;

    _init();

    function getAllUsers() {
        var authuser = $rootScope.globals.user;
        UserService.getAll().then(function(response) {
            if (response.success) {
                var users = response.data;
                var i = 0;
                while (i < users.length) {
                    var u = users[i];
                    if (u.username === authuser.username) {
                        users.splice(i, 1);
                        break;
                    }
                    i++;
                }
                vm.users = users;
            } else {
                var message = response.message;
                alert(message);
                vm.users = [];
            }
        });
    }

    function _init() {
        vm.loading = true;
        getAllUsers();
        vm.loading = false;
    }

}

})();
