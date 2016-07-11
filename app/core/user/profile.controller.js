(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name ProfileController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $routeParams
* @requires UserService
* @requires AuthService
* @requires USER_EVENTS
*
* @description
* Realizes the control layer for `profile.view`.
************************************************************************************/

angular.module('metricapp')

.controller('ProfileController', ProfileController);

ProfileController.$inject = ['$scope', '$location', '$routeParams', 'UserService', 'AuthService', 'USER_EVENTS'];

function ProfileController($scope, $location, $routeParams, UserService, AuthService, USER_EVENTS) {

    var vm = this;

    _init();

    function _loadUser(username) {
        vm.loading = true;
        vm.success = false;
        UserService.getById(username).then(
            function(resolve) {
                vm.currUser = angular.copy(resolve.user);
                vm.success = true;
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                alert(vm.errmsg);
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        if (!$routeParams.username) {
            var authuser = AuthService.getUser();
            if (authuser) {
                $location.path('/profile/' + authuser.username);
            } else {
                $location.path('/');
            }
            return;
        }
        vm.currUser = {
            username: $routeParams.username
        };
        _loadUser(vm.currUser.username);
        $scope.$on(USER_EVENTS.PROFILE_EDIT_SUCCESS, function(event, user) {
            alert('ProfileController:USER_EVENTS.PROFILE_EDIT_SUCCESS');
            vm.currUser = angular.copy(user);
        });
        $scope.$on(USER_EVENTS.PROFILE_EDIT_FAILURE, function(event) {
            alert('ProfileController:USER_EVENTS.PROFILE_EDIT_FAILURE');
            _loadUser(vm.currUser.username);
        });
    }

}

})();
