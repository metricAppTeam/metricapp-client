(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name SignupController
* @module metricapp
* @requires $scope
* @requires $location
* @requires AuthService
* @requires ROLES
* @requires GENDERS
*
* @description
* Manages the user registration.
* Realizes the control layer for `signup.view`.
************************************************************************************/

angular.module('metricapp')

.controller('SignupController', SignupController);

SignupController.$inject = ['$scope', '$location', 'AuthService', 'ROLES', 'GENDERS'];

function SignupController($scope, $location, AuthService, ROLES, GENDERS) {

    var vm = this;

    vm.ROLES = ROLES;
    vm.GENDERS = GENDERS;

    vm.signup = signup;
    vm.cancelSignup = cancelSignup;

    _init();

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
            gender: vm.gender,
            birthday: vm.birthday,
            email: vm.email
        };

        AuthService.signup(user, profile).then(
            function(message) {
                alert(message);
                $location.path('/');
            },
            function(message) {
                alert(message);
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

    /********************************************************************************
    * @ngdoc method
    * @name _init
    * @description
    * Initializes the controller.
    ********************************************************************************/
    function _init() {
        vm.loading = false;
    }

}

})();