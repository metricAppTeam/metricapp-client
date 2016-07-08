(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name LoginController
* @requires $rootScope
* @requires $location
* @requires AuthService
* @requires AUTH_EVENTS
*
* @description
* Realizes the control layer for `login.view`.
************************************************************************************/

angular.module('metricapp')

.controller('LoginController', LoginController);

LoginController.$inject = ['$rootScope', '$location', 'AuthService', 'AUTH_EVENTS'];

function LoginController($rootScope, $location, AuthService, AUTH_EVENTS) {

    var vm = this;

    vm.login = login;

    /********************************************************************************
    * @ngdoc method
    * @name login
    * @description
    * Authenticates the user, by its username and password.
    ********************************************************************************/
    function login() {
        vm.loading = true;

        var credentials = {
            username: vm.username,
            password: vm.password
        };

        AuthService.login(credentials).then(
            function(resolve) {
                AuthService.setUser(authuser);
                vm.success = true;
                $rootScope.$broadcast(AUTH_EVENTS.LOGIN_SUCCESS);
                $location.path('/home');
            },
            function(reject) {
                alert('Invalid username or password');
                vm.success = false;
                $rootScope.$broadcast(AUTH_EVENTS.LOGIN_FAILURE);
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = false;
        vm.success = true;
    }

}

})();
