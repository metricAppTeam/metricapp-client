/*******************************************************************************
* @ngdoc controller
* @name LogoutController
* @requires $location
* @requires AuthService
*
* @description
* Manages the user logout. Realizes the control layer for:
* - logout.view
*******************************************************************************/

(function() {
    'use strict';

    angular
        .module('metricapp')
        .controller('LogoutController', LogoutController);

    LogoutController.$inject = ['$location', 'AuthService'];

    function LogoutController($location, AuthService) {
        /* jshint validthis: true */
        var vm = this;

        vm.logout = logout;

        /***********************************************************************
        * @ngdoc method
        * @name logout
        * @description
        * Deauthenticates the user, via its local cookie.
        ***********************************************************************/
        function logout() {
            AuthService.signout();
            AuthService.clearCurrentUser();
            $location.path('/');
        }

    }

})();
