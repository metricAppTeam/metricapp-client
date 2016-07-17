(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name UserAnalyticsController
* @module metricapp
* @requires $location
* @requires $routeParams
* @requires UserService
* @requires UserAnalyticsService
*
* @description
* Realizes the control layer for `user/analytics.view`.
************************************************************************************/

angular.module('metricapp')

.controller('UserAnalyticsController', UserAnalyticsController);

UserAnalyticsController.$inject = ['$location', '$routeParams', 'UserService', 'UserAnalyticsService','USER_ANALYTICS'];

function UserAnalyticsController($location, $routeParams, UserService, UserAnalyticsService,USER_ANALYTICS) {

    var vm = this;

    vm.USER_ANALYTICS = USER_ANALYTICS;

    _init();

    function _loadUserAnalytics(username) {
        vm.loading = true;
        vm.success = false;
        UserService.getById(username).then(
            function(resolve) {
                vm.currUser = angular.copy(resolve.user);
                return UserAnalyticsService.getAll(username).then(
                    function(resolve) {
                        vm.currUser.analytics = angular.copy(resolve.analytics);
                        _loadChartData();
                        vm.success = true;
                    },
                    function(reject) {
                        vm.errmsg = reject.errmsg;
                        vm.success = false;
                    }
                );
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.currUser = {
            username: $routeParams.username
        };
        _loadUserAnalytics(vm.currUser.username);
    }

    vm.chart_data = '';

    function _loadChartData() {
        vm.chart_data = vm.currUser.analytics[vm.USER_ANALYTICS.TASKS_RECORD];
    }
}

})();
