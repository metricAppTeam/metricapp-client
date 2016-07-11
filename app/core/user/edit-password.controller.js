(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name EditPasswordController
* @module metricapp
* @requires $scope
* @requires $rootScope
* @requires $location
* @requires AuthService
* @requires AUTH_EVENTS
*
* @description
* Realizes the control layer for `edit-password.modal.view`.
************************************************************************************/

angular.module('metricapp')

.controller('EditPasswordController', EditPasswordController);

EditPasswordController.$inject = ['$scope', '$rootScope', '$location', 'AuthService', 'AUTH_EVENTS'];

function EditPasswordController($scope, $rootScope, $location, AuthService, AUTH_EVENTS) {

    var vm = this;

    vm.editPassword = editPassword;

    _init();

    function editPassword(oldPassword, newPassword) {
        vm.loading = true;
        vm.success = false;
        AuthService.editPassword(oldPassword, newPassword).then(
            function(resolve) {
                $rootScope.$broadcast(AUTH_EVENTS.PASSWORD_EDIT_SUCCESS);
                return AuthService.logout().then(
                    function(resolve) {
                        vm.success = true;
                        $rootScope.$broadcast(AUTH_EVENTS.LOGOUT_SUCCESS);
                        $location.path('/');
                    },
                    function(reject) {
                        vm.errmsg = reject.errmsg;
                        alert(vm.errmsg);
                        vm.success = false;
                        $rootScope.$broadcast(AUTH_EVENTS.LOGOUT_FAILURE);
                        $location.path('/');
                    }
                );
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                alert(vm.errmsg);
                $rootScope.$broadcast(AUTH_EVENTS.PASSWORD_EDIT_FAILURE);
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
    }

}

})();
