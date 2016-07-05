(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name SidebarController
* @module metricapp
* @requires $rootScope
* @requires $scope
* @requires $location
* @requires ActionService
*
* @description
* Manages the sidebar for all users.
* Realizes the control layer for {sidebar.directive}.
************************************************************************************/

angular.module('metricapp')

.controller('SidebarController', SidebarController);

SidebarController.$inject = ['$rootScope', '$scope', '$location','ActionService'];

function SidebarController($rootScope, $scope, $location, ActionService) {

    var vm = this;

    _init();

    /********************************************************************************
    * @ngdoc method
    * @name _init
    * @description
    * Initializes the controller:
    * - setup the sidebar actions, according to user's role.
    ********************************************************************************/
    function _init() {
        var authuser = $rootScope.globals.user;
        if (authuser) {
            vm.actions = ActionService.getActionsForRole(authuser.role);
        }
    }

}

})();
