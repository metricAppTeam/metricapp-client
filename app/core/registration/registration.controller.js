/*******************************************************************************
* @ngdoc controller
* @name RegistrationController
* @module metricapp
* @requires $scope
* @requires $location
* @requires RegistrationService
*
* @description
* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
* incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
* nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
*******************************************************************************/

(function() {
    'use strict';

    angular
        .module('metricapp')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['$scope', '$location', 'RegistrationService'];

    function RegistrationController($scope, $location, RegistrationService) {
        /* jshint validthis: true */
        var vm = this;

        vm.signup = signup;

        /***********************************************************************
        * @ngdoc method
        * @name signup
        * @description
        * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        * eiusmod tempor incididunt ut labore et dolore magna aliqua.
        ***********************************************************************/
        function signup() {
            var firstname = $scope.firstname;
            var lastname = $scope.lastname;

            var user = {
                username: $scope.username,
                password: $scope.password,
                role: $scope.role,
            };

            var profile = {
                firstname: $scope.firstname,
                lastname: $scope.lastname,
            };

            RegistrationService.signup(user);
            RegistrationService.associateProfile(user, profile);

            $location.path('/');
        }

    }

})();
