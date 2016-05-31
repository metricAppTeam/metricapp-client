(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name SignupController
* @module metricapp
* @requires $scope
* @requires $location
* @requires AuthService
* @requires ROLES
*
* @description
* Manages the user registration.
* Realizes the control layer for `signup.view`.
************************************************************************************/

angular.module('metricapp')

.controller('SignupController', SignupController);

SignupController.$inject = ['$scope', '$location', 'AuthService', 'ROLES'];

function SignupController($scope, $location, AuthService, ROLES) {

    var vm = this;

    vm.loading = false;

    vm.signup = signup;
    vm.cancelSignup = cancelSignup;

    /********************************************************************************
    * @ngdoc method
    * @name signup
    * @description
    * Registers a new user.
    ********************************************************************************/
    function signup() {
        var user = {
            username: vm.username,
            password: vm.password,
            role: vm.role
        };

        var profile = {
            firstname: vm.firstname,
            lastname: vm.lastname,
            email: vm.email
        };

        AuthService.signup(user, profile).then(function(response) {
            if (response.success) {
                $location.path('/');
            } else {
                alert (response.errmsg);
            }
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name cancelSignup
    * @description
    * Cancels the ongoing user registration.
    ********************************************************************************/
    function cancelSignup() {
        $location.path('/');
    }

    function _init() {
        vm.loading = false;
    }

}

})();
