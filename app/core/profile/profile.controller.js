(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name ProfileController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $routeParams
* @requires UserService
*
* @description
* Manages the profile visualization and editing.
* Realizes the control layer for `profile.view`.
************************************************************************************/

angular.module('metricapp')

.controller('ProfileController', ProfileController);

ProfileController.$inject = ['$scope', '$location', '$routeParams', 'UserService'];

function ProfileController($scope, $location, $routeParams, UserService) {

    var vm = this;

    _init();

    function _loadProfile(username) {
        vm.loading = true;
        vm.success = false;
        UserService.getProfile(username).then(
            function(response) {
                vm.loading = false;
                vm.success = true;
            }
        );
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        if (!$routeParams.username) {
            var authusername = $rootScope.globals.user.username;
            if (authusername) {
                $location.path('/profile/' + authusername);
            } else {
                $location.path('/home');
            }
        }
        vm.currUser = {
            username: $routeParams.username
        };
        _loadProfile(vm.currUser.username);
    }

}

})();
