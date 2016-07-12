(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name TeamAnalyticsController
* @module metricapp
* @requires $location
* @requires $routeParams
* @requires TeamService
* @requires TeamAnalyticsService
*
* @description
* Realizes the control layer for `team/analytics.view`.
************************************************************************************/

angular.module('metricapp')

.controller('TeamAnalyticsController', TeamAnalyticsController);

TeamAnalyticsController.$inject = ['$location', '$routeParams', 'TeamService', 'TeamAnalyticsService'];

function TeamAnalyticsController($location, $routeParams, TeamService, TeamAnalyticsService) {

    var vm = this;

    _init();

    function _loadTeamAnalytics(teamid) {
        vm.loading = true;
        vm.success = false;
        TeamService.getById(teamid).then(
            function(resolve) {
                vm.currTeam = angular.copy(resolve.team);
                return TeamAnalyticsService.getAll(teamid).then(
                    function(resolve) {
                        vm.currTeam.analytics = angular.copy(resolve.analytics);
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
        vm.currTeam = {
            id: $routeParams.teamid
        };
        _loadTeamAnalytics(vm.currTeam.id);
    }

}

})();
