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

HomeController.$inject = ['$rootScope', '$scope', '$location', 'AuthService'];

function HomeController($rootScope, $scope, $location, AuthService) {

    var vm = this;

    _init();

    function _loadHome() {
        vm.loading = true;
        vm.success = false;
        setTimeout(function() {
            vm.success = true;
            vm.loading = false;
        }, 750);
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        _loadHome();
    }
}

})();
