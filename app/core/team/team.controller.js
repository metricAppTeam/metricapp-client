(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name TeamController
* @module metricapp
* @requires $scope
* @requires $rootScope
* @requires $location
* @requires $routeParams
* @requires $q
* @requires TeamService
* @requires UserService
* @requires ROLES
* @requires TEAM_EVENTS
*
* @description
* Realizes the control layer for `team.view`.
************************************************************************************/

angular.module('metricapp')

.controller('TeamController', TeamController);

TeamController.$inject = ['$scope', '$rootScope', '$location', '$routeParams', '$q',
'TeamService', 'UserService', 'ROLES', 'TEAM_EVENTS'];

function TeamController($scope, $rootScope, $location, $routeParams, $q,
    TeamService, UserService, ROLES, TEAM_EVENTS) {

    var vm = this;

    vm.updateTeam = updateTeam;
    vm.removeMember = removeMember;

    _init();

    function updateTeam(team) {
        vm.loading = true;
        vm.success = false;
        TeamService.update(team).then(
            function(resolve) {
                vm.currTeam = angular.copy(resolve.team);
                var teamid = resolve.team.teamid;
                vm.success = true;
                $location.path('/teams/' + teamid);
                $rootScope.$broadcast(TEAM_EVENTS.UPDATE_SUCCESS);
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
                $rootScope.$broadcast(TEAM_EVENTS.UPDATE_FAILURE);
            }
        )
        .finally(function(){
            vm.loading = false;
        });
    }

    function removeMember(username, role) {
        if (role === ROLES.QUESTIONER) {
            delete vm.updtTeam.questioners[username];
        } else if (role === ROLES.METRICATOR) {
            delete vm.updtTeam.metricator[username];
        }
    }

    function _loadTeam(teamid) {
        vm.loading = true;
        vm.success = false;
        TeamService.getById(teamid).then(
            function(resolve) {
                vm.currTeam = angular.copy(resolve.team);
                var meta={
                    expert:UserService.getById(vm.currTeam.expert),
                    questioners:UserService.getInArray(vm.currTeam.questioners),
                    metricators:UserService.getInArray(vm.currTeam.metricators)
                };
                return $q.all(meta).then(
                    function(resolve){
                        vm.currTeam.expert=angular.copy(resolve.expert.user);
                        vm.currTeam.questioners=angular.copy(resolve.questioners.users);
                        vm.currTeam.metricators=angular.copy(resolve.metricators.users);
                        vm.updtTeam = angular.copy(vm.currTeam);
                        vm.num_questioners = Object.keys(vm.currTeam.questioners).length;
                        vm.num_metricators = Object.keys(vm.currTeam.metricators).length;
                        vm.success=true;
                    },
                    function(reject){
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
        vm.orderBy = 'firstname';
        vm.currTeam = {
            id: $routeParams.teamid
        };
        _loadTeam(vm.currTeam.id);
    }

}

})();
