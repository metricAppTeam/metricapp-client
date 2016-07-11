(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name EditProfileController
* @module metricapp
* @requires $scope
* @requires $rootScope
* @requires $location
* @requires $routeParams
* @requires UserService
* @requires AuthService
* @requires GENDERS
* @requires USER_EVENTS
*
* @description
* Realizes the control layer for `edit-profile.modal.view`.
************************************************************************************/

angular.module('metricapp')

.controller('EditProfileController', EditProfileController);

EditProfileController.$inject = ['$rootScope', '$location', '$routeParams', 'UserService', 'AuthService', 'GENDERS', 'USER_EVENTS'];

function EditProfileController($rootScope, $location, $routeParams, UserService, AuthService, GENDERS, USER_EVENTS) {

    var vm = this;

    vm.GENDERS = GENDERS;

    vm.editProfile = editProfile;

    _init();

    function editProfile(user) {
        vm.loading = true;
        vm.success = false;
        UserService.update(user).then(
            function(resolve) {
                vm.currUser = angular.copy(resolve.user);
                vm.success = true;
                $rootScope.$broadcast(USER_EVENTS.EDIT_PROFILE_SUCCESS, vm.currUser);
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                alert(vm.errmsg);
                vm.success = false;
                $rootScope.$broadcast(USER_EVENTS.EDIT_PROFILE_FAILURE);
            }
        )
        .finally(function(){
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.currUser = AuthService.getUser();
        vm.updtUser = angular.copy(vm.currUser);
        if (vm.updtUser) {
            vm.success = true;
            vm.loading = false;
        } else {
            vm.success = false;
            vm.loading = false;
        }
    }

}

})();
