(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name TeamController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $routeParams
* @requires TeamService
*
* @description
* Realizes the control layer for `team.view`.
************************************************************************************/

angular.module('metricapp')

.controller('TeamController', TeamController);

TeamController.$inject = ['$scope', '$location', '$routeParams', 'TeamService'];

function TeamController($scope, $location, $routeParams, TeamService) {

    var vm = this;

    _init();

    function _loadTeam(teamid) {
        vm.loading = true;
        vm.success = false;
        TeamService.getTeam(teamid).then(
            function(response) {
                vm.loading = false;
                vm.success = true;
            }
        );
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        if (!$routeParams.teamid) {
            $location.path('/teams');
        }
        vm.currTeam = {
            id: $routeParams.teamid
        };
        _loadTeam(vm.currTeam.id);
    }

}

})();
