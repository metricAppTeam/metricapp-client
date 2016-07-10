(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name SignupController
* @module metricapp
* @requires $scope
* @requires $location
* @requires UserService
* @requires FlashService
* @requires ROLES
* @requires GENDERS
*
* @description
* Manages the user registration.
* Realizes the control layer for `signup.view`.
************************************************************************************/

angular.module('metricapp')

.controller('SignupController', SignupController);

SignupController.$inject = ['$scope', '$location', 'UserService', 'FlashService',
'ROLES', 'GENDERS'];

function SignupController($scope, $location, UserService, FlashService, ROLES, GENDERS) {

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
        vm.loading = true;

        var user = {
            username: vm.username,
            password: vm.password,
            role: vm.role,
            firstname: vm.firstname,
            lastname: vm.lastname,
            gender: vm.gender,
            birthday: vm.birthday,
            email: vm.email,
            mobile: vm.mobile,
            picture: vm.picture

        };

        UserService.create(user).then(
            function(resolve) {
                var msg = resolve.msg;
                vm.success = true;
                //FlashService.success(msg);
                $location.path('/');
            },
            function(reject) {
                var errmsg = reject.errmsg;
                vm.success = false;
                //FlashService.danger(errmsg);
            }
        ).finally(function() {
            vm.loading = false;
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
        vm.success = false;
        vm.errmsg = null;
        vm.user = {};
    }

}

})();
