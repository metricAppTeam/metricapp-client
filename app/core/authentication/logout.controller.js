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
* Manages the user logout.
* Realizes the control layer for `logout.view`.
************************************************************************************/

angular.module('metricapp')

.controller('LogoutController', LogoutController);

LogoutController.$inject = ['$rootScope', '$location', 'AuthService', 'AUTH_EVENTS'];

function LogoutController($rootScope, $location, AuthService, AUTH_EVENTS) {

    var vm = this;

    vm.loading = false;

    vm.logout = logout;

    /********************************************************************************
    * @ngdoc method
    * @name logout
    * @description
    * Deauthenticates the user, via its local cookie.
    ********************************************************************************/
    function logout() {
        vm.loading = true;
        AuthService.logout().then(
            function(username) {
                AuthService.clearUser();
                $rootScope.$broadcast(AUTH_EVENTS.LOGOUT_SUCCESS);
                vm.loading = false;
                $location.path('/');
            },
            function(errmsg) {
                alert(errmsg);
                $rootScope.$broadcast(AUTH_EVENTS.LOGIN_FAILURE);
                vm.loading = false;
            }
        );
    }

}

})();
