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
        {label: 'Metricators', value: vm.active_questioners},
        {label: 'Questioners', value: vm.active_metricators},
        {label: 'Experts',     value: vm.active_experts}
    ];

    //Active Users Trend Chart
    vm.trend_active_users = [
        { y: 'Q2/15', questioners: 19,  metricators: 29 },
        { y: 'Q3/15', questioners: 30,  metricators: 35 },
        { y: 'Q1/16', questioners: 55,  metricators: 45 },
        { y: 'Q2/16', questioners: 78,  metricators: 80 }
    ];

    //Projects Box
    vm.projects = [
        {name: 'ISSR Project',status: 'active',progress: 30},
        {name: 'ISSR Project2',status: 'active',progress: 70}
    ];

    //Date() for clock
    vm.date = new Date();

    vm.exportDataXLS = function () {
        var blob = new Blob([document.getElementById('exportable').innerHTML], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'
        });
        saveAs(blob, 'Report.xls');
    };

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


    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        _loadHome();
    }
}

})();
