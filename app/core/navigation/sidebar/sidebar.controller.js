(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name SidebarController
* @module metricapp
* @requires $scope
* @requires $location
* @requires ActionService
*
* @description
* Manages the navbar for all users.
* Realizes the control layer for {navbar.view}.
************************************************************************************/

angular.module('metricapp')

.controller('SidebarController', SidebarController);

SidebarController.$inject = ['$scope', '$location','ActionService'];

function SidebarController($scope, $location, ActionService) {

    var vm = this;

    vm.getDashboardForRole = getDashboardForRole;
    vm.getActionsForRole = getActionsForRole;

    _init();

    /********************************************************************************
    * @ngdoc method
    * @name getDashboardForRole
    * @description
    * Returns the dashboard href for the specified user role.
    * @param {String} rolename The name of the user role.
    * @return {String} The Dashboard href for the specified role.
    ********************************************************************************/
    function getDashboardForRole(role) {
        return ActionService.DASHBOARDS[role];
    }

    /********************************************************************************
    * @ngdoc method
    * @name getActionsForRole
    * @description
    * Returns the list of actions for the specified user role.
    * @param {String} rolename The name of the user role.
    * @return {List[Action]} The list of actions provided for the specified role.
    ********************************************************************************/
    function getActionsForRole(role) {
        return ActionService.ACTIONS[role];
    }    

    /********************************************************************************
    * @ngdoc method
    * @name _init
    * @description
    * Initializes the controller:
    * - initialization 1.
    * - initialization 2.
    * - initialization 3.
    ********************************************************************************/
    function _init() {

    }
}

})();
