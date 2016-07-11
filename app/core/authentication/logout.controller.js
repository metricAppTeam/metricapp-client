(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name LogoutController
* @requires $rootScope
* @requires $location
* @requires AuthService
* @requires AUTH_EVENTS
*
* @description
* Realizes the control layer for `logout.view`.
************************************************************************************/

angular.module('metricapp')

.controller('LogoutController', LogoutController);

LogoutController.$inject = ['$rootScope', '$location', 'AuthService', 'AUTH_EVENTS'];

function LogoutController($rootScope, $location, AuthService, AUTH_EVENTS) {

    var vm = this;

    vm.logout = logout;

    _init();

    /********************************************************************************
    * @ngdoc method
    * @name logout
    * @description
    * Deauthenticates the user, via its local cookie.
    ********************************************************************************/
    function logout() {
        vm.loading = true;
        AuthService.logout().then(
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
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = false;
        vm.success = false;
        vm.errmsg = null;
    }

}

})();
