(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name ProfileController
* @module metricapp
* @requires $scope
* @requires $rootScope
* @requires $location
* @requires $routeParams
* @requires UserService
* @requires AuthService
* @requires GENDERS
* @requires USER_EVENTS
* @requires AUTH_EVENTS
*
* @description
* Realizes the control layer for `profile.view` and `update-profile.view`
************************************************************************************/

angular.module('metricapp')

.controller('ProfileController', ProfileController);

ProfileController.$inject = ['$scope', '$rootScope', '$location', '$routeParams', 'UserService', 'AuthService', 'GENDERS', 'USER_EVENTS', 'AUTH_EVENTS'];

function ProfileController($scope, $rootScope, $location, $routeParams, UserService, AuthService, GENDERS, USER_EVENTS, AUTH_EVENTS) {

    var vm = this;

    vm.GENDERS = GENDERS;

    vm.show = 1;

    vm.updateProfile = updateProfile;
    vm.updatePassword = updatePassword;

    vm.projects = [
        {name: "ISSR Project1", description:"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. ",status: "active",progress: 30},
        {name: "ISSR Project2", description:"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. ",status: "active",progress: 65}
    ];

    _init();

    function updateProfile(user) {
        vm.loading = true;
        vm.success = false;
        UserService.update(user).then(
            function(resolve) {
                vm.currUser = angular.copy(resolve.user);
                var username = resolve.user.username;
                vm.success = true;
                $location.path('/profile/' + username);
                $rootScope.$broadcast(USER_EVENTS.UPDATE_SUCCESS, vm.currUser);
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
                $rootScope.$broadcast(USER_EVENTS.UPDATE_FAILURE);
            }
        )
        .finally(function(){
            vm.loading = false;
        });
    }

    function updatePassword(oldPassword, newPassword) {
        vm.loading = true;
        vm.success = false;
        AuthService.editPassword(oldPassword, newPassword).then(
            function(resolve) {
                $rootScope.$broadcast(AUTH_EVENTS.PASSWORD_UPDATE_SUCCESS);
                return AuthService.logout().then(
                    function(resolve) {
                        vm.success = true;
                        $rootScope.$broadcast(AUTH_EVENTS.LOGOUT_SUCCESS);
                        $location.path('/');
                    },
                    function(reject) {
                        vm.errmsg = reject.errmsg;
                        vm.success = false;
                        $rootScope.$broadcast(AUTH_EVENTS.LOGOUT_FAILURE);
                        $location.path('/');
                    }
                );
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                alert(vm.errmsg);
                $rootScope.$broadcast(AUTH_EVENTS.PASSWORD_UPDATE_FAILURE);
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _loadUser(username) {
        vm.loading = true;
        vm.success = false;
        UserService.getById(username).then(
            function(resolve) {
                vm.currUser = angular.copy(resolve.user);
                vm.updtUser = angular.copy(vm.currUser);
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
        $scope.$on(USER_EVENTS.UPDATE_SUCCESS, function(event, user) {
            alert('ProfileController:USER_EVENTS.UPDATE_SUCCESS');
            vm.currUser = angular.copy(user);
        });
        $scope.$on(USER_EVENTS.UPDATE_FAILURE, function(event) {
            alert('ProfileController:USER_EVENTS.UPDATE_FAILURE');
            _loadUser(vm.currUser.username);
        });
    }

}

})();
