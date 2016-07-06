(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name TeamsController
* @module metricapp
* @requires $scope
* @requires $location
* @requires TeamService
*
* @description
* Realizes the control layer for `teams.view`.
************************************************************************************/

angular.module('metricapp')

.controller('TeamsController', TeamsController);

TeamsController.$inject = ['$scope', '$location', 'TeamService'];

function TeamsController($scope, $location, TeamService) {

    var vm = this;

    _init();

    function _loadTeams(tmStart, tmN) {
        vm.loading = true;
        vm.success = false;
        TeamService.getTeams(tmStart, tmN).then(
            function(response) {
                vm.loading = false;
                vm.success = true;
            }
        );
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.teams = [];
        vm.numteams = 0;
        _loadTeams(0, 20);
    }

}

})();
