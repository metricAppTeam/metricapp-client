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

    function _loadProfile(username) {
        vm.loading = true;
        vm.success = false;
        UserService.getUser(username).then(
            function(resolve) {
                vm.currUser.username = resolve.user.username;
                vm.currUser.role = resolve.user.role;
                vm.currUser.firstname = resolve.user.firstname;
                vm.currUser.lastname = resolve.user.lastname;
                vm.currUser.gender = resolve.user.gender;
                vm.currUser.birthday = resolve.user.birthday;
                vm.currUser.email = resolve.user.email;
                vm.currUser.mobile = resolve.user.mobile;
                vm.currUser.picture = resolve.user.picture;
                vm.currUser.online = resolve.user.online;
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
            username: $routeParams.username,
            password: null,
            role: null,
            firstname:  null,
            lastname:   null,
            gender:     null,
            birthday:   null,
            email:      null,
            mobile:     null,
            picture:    null,
            online: false
        };
        _loadProfile(vm.currUser.username);
    }

}

})();
