(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name HomeController
* @module metricapp
* @requires $rootScope
* @requires $scope
* @requires $location
* @requires AuthService
* @requires ActionService
*
* @description
* Manages the Home dashboard for all the users.
* Realizes the control layer for `home.view`.
************************************************************************************/

angular.module('metricapp')

.controller('HomeController', HomeController);

HomeController.$inject = [
    '$rootScope', '$scope', '$location',
    'AuthService', 'ActionService','$filter'];

function HomeController($rootScope, $scope, $location, AuthService, ActionService,$filter) {

    var vm = this;

    vm.getActionsForRole = getActionsForRole;
    /******************************************************
    *
    *
    * EXPERT SECTION ON HOME
    *
    *
    *******************************************************/

    //Active and Inactive Users
    vm.active_questioners = 10;
    vm.active_metricators = 15;
    vm.active_experts = 1;
    vm.inactive_questioners = 3;
    vm.inactive_metricators = 2;
    vm.inactive_experts = 0;

    //Active Tasks
    vm.active_tasks = 10;

    //Active Teams
    vm.active_teams = 2;

    //Total Users
    vm.total_active_users = vm.active_questioners + vm.active_metricators + vm.active_experts;
    vm.total_inactive_users = vm.inactive_experts + vm.inactive_metricators + vm.inactive_questioners;
    vm.total_users = vm.total_inactive_users + vm.total_active_users;

    //Active Users chart
    vm.active_users_chart_data = [ 
        {label: "Metricators", value: vm.active_questioners},
        {label: "Questioners", value: vm.active_metricators},
        {label: "Experts",     value: vm.active_experts}
    ];

    vm.trend_active_users = [
        { y: "Q2/15", questioners: 19,  metricators: 29 },
        { y: "Q3/15", questioners: 30,  metricators: 35 },
        { y: "Q1/16", questioners: 55,  metricators: 45 },
        { y: "Q2/16", questioners: 78,  metricators: 80 }
    ];

    vm.teams_productivity_trend = [
        { y: "01/11", questions: 10, metrics: 12 },
        { y: "02/16", questions: 8,  metrics: 3 },
        { y: "03/16", questions: 9,  metrics: 11 },
        { y: "04/16", questions: 12,  metrics: 12 },
        { y: "05/16", questions: 14,  metrics: 13 },
        { y: "06/16", questions: 11,  metrics: 9 },
        { y: "07/16", questions: 5, metrics: 6 }
    ]

    
    vm.projects = [
        {grid_name: "ISSR Project",status: "active",progress: 30},
        {grid_name: "ISSR Project2",status: "active",progress: 70}
    ];

    //Date
    vm.date = new Date();


    /******************************************************
    *
    *
    * QUESTIONER SECTION ON HOME
    *
    *
    *******************************************************/


    /******************************************************
    *
    *
    * METRICATOR SECTION ON HOME
    *
    *
    *******************************************************/

    _init();



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
