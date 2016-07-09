(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name ProfileController
* @module metricapp
* @requires $location
* @requires $routeParams
* @requires UserService
*
* @description
* Realizes the control layer for `profile.view`.
************************************************************************************/

angular.module('metricapp')

.controller('ProfileController', ProfileController);

ProfileController.$inject = ['$location', '$routeParams', 'UserService'];

function ProfileController($location, $routeParams, UserService) {

    var vm = this;

    _init();

    function _loadUser(username) {
        vm.loading = true;
        vm.success = false;
        UserService.getUser(username).then(
            function(resolve) {
                vm.currUser = angular.copy(resolve.user);
                vm.success = true;
            },
            function(reject) {
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
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
        _loadUser(vm.currUser.username);
    }

}

})();
