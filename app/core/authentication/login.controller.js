/*******************************************************************************
* @ngdoc controller
* @name LoginController
* @requires $location
* @requires AuthService
*
* @description
* Manages the user login. Realizes the control layer for:
* - login.view
*******************************************************************************/

(function() {
    'use strict';

    angular
        .module('metricapp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthService'];

    function LoginController($location, AuthService) {
        /* jshint validthis: true */
        var vm = this;

        vm.login = login;
        vm.goToRegistration = goToRegistration;

        /***********************************************************************
        * @ngdoc method
        * @name login
        * @description
        * Authenticates the user, via its username and password.
        ***********************************************************************/
        function login() {
            var user = AuthService.signin(vm.username, vm.password);

            if (user) {
                if (vm.remember) {
                    AuthService.setCurrentUser(user);
                }
                $location.path('/dashboard');
            } else {
                alert('Invalid username/password');
            }
        }

        /***********************************************************************
        * @ngdoc method
        * @name goToRegistration
        * @description
        * Changes {$location} to '/registration'.
        ***********************************************************************/
        function goToRegistration() {
            $location.path('/registration');
        }

    }

})();
