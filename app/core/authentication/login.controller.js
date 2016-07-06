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
* Manages the user login.
* Realizes the control layer for `login.view`.
************************************************************************************/

angular.module('metricapp')

.controller('LoginController', LoginController);

LoginController.$inject = ['$rootScope', '$location', 'AuthService', 'AUTH_EVENTS'];

function LoginController($rootScope, $location, AuthService, AUTH_EVENTS) {

    var vm = this;

    vm.loading = false;

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

        AuthService.login(credentials).then(function(authuser) {
            if (authuser) {
                AuthService.setUser(authuser);
                $rootScope.$broadcast(AUTH_EVENTS.LOGIN_SUCCESS);
                $location.path('/home');
            } else {
                alert('Invalid username or password');
                $rootScope.$broadcast(AUTH_EVENTS.LOGIN_FAILURE);

            }
        });

        vm.loading = false;
    }

}

})();
