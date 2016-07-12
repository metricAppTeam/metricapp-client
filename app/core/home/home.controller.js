(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name HomeController
* @module metricapp
* @requires $rootScope
* @requires $scope
* @requires $location
* @requires AuthService
*
* @description
* Realizes the control layer for `home.view`.
************************************************************************************/

angular.module('metricapp')

.controller('HomeController', HomeController);

HomeController.$inject = ['$rootScope', '$scope', '$location', '$timeout', 'AuthService'];

function HomeController($rootScope, $scope, $location, $timeout, AuthService) {

    var vm = this;

    _init();

    function _loadHome() {
        vm.loading = true;
        vm.success = false;
        vm.currUser = AuthService.getUser();
        vm.success = true;
        vm.loading = false;
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        _loadHome();
    }
}

})();
