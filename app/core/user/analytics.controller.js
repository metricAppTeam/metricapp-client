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

UserAnalyticsController.$inject = ['$location', '$routeParams', 'UserService', 'UserAnalyticsService'];

function UserAnalyticsController($location, $routeParams, UserService, UserAnalyticsService) {

    var vm = this;

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

}

})();