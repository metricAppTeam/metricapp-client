(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name LogoutController
* @requires $location
* @requires AuthService
*
* @description
* Manages the user logout.
* Realizes the control layer for `logout.view`.
************************************************************************************/

angular.module('metricapp')

.controller('LogoutController', LogoutController);

LogoutController.$inject = ['$location', 'AuthService'];

function LogoutController($location, AuthService) {

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
        AuthService.logout().then(function(response) {
            AuthService.clearUser();            
            vm.loading = false;
            $location.path('/');
        });
    }

}

})();
