(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name LoginController
* @requires $location
* @requires AuthService
*
* @description
* Manages the user login.
* Realizes the control layer for `login.view`.
************************************************************************************/

angular.module('metricapp')

.controller('LoginController', LoginController);

LoginController.$inject = ['$location', 'AuthService'];

function LoginController($location, AuthService) {

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
                $location.path('/home');
            } else {
                alert('Invalid username/password');
            }
        });

        vm.loading = false;
    }

}

})();
