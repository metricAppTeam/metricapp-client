(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name UserAnalyticsController
* @module metricapp
* @requires $location
* @requires $routeParams
* @requires UserService
*
* @description
* Realizes the control layer for `user.analytics.view`.
************************************************************************************/

angular.module('metricapp')

.controller('UserAnalyticsController', UserAnalyticsController);

UserAnalyticsController.$inject = ['$location', '$routeParams', 'UserService'];

function UserAnalyticsController($location, $routeParams, UserService) {

    var vm = this;

    _init();

    function _loadUser(username) {
        vm.loading = true;
        vm.success = false;
        UserService.getById(username).then(
            function(resolve) {
                vm.currUser = angular.copy(resolve.user);
                vm.success = true;
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
        _loadUser(vm.currUser.username);
    }

}

})();
