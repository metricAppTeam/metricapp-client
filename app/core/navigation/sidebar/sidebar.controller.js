(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name SidebarController
* @module metricapp
* @requires $rootScope
* @requires $scope
* @requires $location
* @requires ActionService
* @requires AUTH_EVENTS
*
* @description
* Realizes the control layer for `sidebar.directive`.
************************************************************************************/

angular.module('metricapp')

.controller('SidebarController', SidebarController);

SidebarController.$inject = ['$rootScope', '$scope', '$location','ActionService', 'AUTH_EVENTS'];

function SidebarController($rootScope, $scope, $location, ActionService, AUTH_EVENTS) {

    var vm = this;

    _init();

    function _render() {
        if ($rootScope.globals && $rootScope.globals.user) {
            vm.actions = ActionService.getActionsForRole($rootScope.globals.user.role);
        } else {
            vm.actions = [];
        }
    }

    function _init() {
        _render();
        $scope.$on(AUTH_EVENTS.LOGIN_SUCCESS, _render);
        $scope.$on(AUTH_EVENTS.LOGOUT_SUCCESS, _render);
    }

}

})();
