(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name ProfileController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $routeParams
* @requires ProfileService
*
* @description
* Manages the profile visualization and editing.
* Realizes the control layer for `profile.view`.
************************************************************************************/

angular.module('metricapp')

.controller('ProfileController', ProfileController);

ProfileController.$inject = ['$scope', '$location', '$routeParams', 'ProfileService'];

function ProfileController($scope, $location, $routeParams, ProfileService) {

    var vm = this;

    _init();

    function _init() {
        vm.loading = true;
        if (!$routeParams.username) {
            var authusername = $rootScope.globals.user.username;
            if (authusername) {
                $location.path('/profile/' + authusername);
            } else {
                alert('WARNING [ProfileController._init()]: authusername undefined');
                $location.path('/home');
            }
        }
        vm.user = {
            username: $routeParams.username
        };
    }

}

})();
