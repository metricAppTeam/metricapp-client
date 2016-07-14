(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name GridController
* @module metricapp
* @requires $scope
* @requires $rootScope
* @requires $location
* @requires $routeParams
* @requires $q
* @requires GridService
* @requires MGoalService
* @requires QuestionService
* @requires MetricService
* @requires UserService
* @requires ROLES
* @requires GRID_EVENTS
*
* @description
* Realizes the control layer for `grid.view`.
************************************************************************************/

angular.module('metricapp')

.controller('GridController', GridController);

GridController.$inject = ['$scope', '$rootScope', '$location', '$routeParams', '$q',
'GridService', 'MGoalService', 'QuestionService', 'MetricService', 'UserService', 'ROLES', 'GRID_EVENTS'];

function GridController($scope, $rootScope, $location, $routeParams, $q,
    GridService, MGoalService, QuestionService, MetricService, UserService, ROLES, GRID_EVENTS) {

    var vm = this;

    vm.updateGrid = updateGrid;
    vm.removeMember = removeMember;
    
    _init();

    function updateGrid(grid) {
        vm.loading = true;
        vm.success = false;
        GridService.update(grid).then(
            function(resolve) {
                vm.currGrid = angular.copy(resolve.grid);
                var gridid = resolve.grid.gridid;
                vm.success = true;
                $location.path('/grids/' + gridid);
                $rootScope.$broadcast(GRID_EVENTS.UPDATE_SUCCESS);
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
                $rootScope.$broadcast(GRID_EVENTS.UPDATE_FAILURE);
            }
        )
        .finally(function(){
            vm.loading = false;
        });
    }

    function removeMember(username, role) {
        if (role === ROLES.QUESTIONER) {
            delete vm.updtGrid.questioners[username];
        } else if (role === ROLES.METRICATOR) {
            delete vm.updtGrid.metricator[username];
        }
    }

    function _loadGrid(gridid) {
        vm.loading = true;
        vm.success = false;
        GridService.getById(gridid).then(
            function(resolve) {
                vm.currGrid = angular.copy(resolve.grid);
                var meta={
                    expert:UserService.getById(vm.currGrid.expert),
                    questioners:UserService.getInArray(vm.currGrid.questioners),
                    metricators:UserService.getInArray(vm.currGrid.metricators),
                    mgoals:MGoalService.getInArray(vm.currGrid.mgoals),
                    questions:QuestionService.getInArray(vm.currGrid.questions),
                    metrics:MetricService.getInArray(vm.currGrid.metrics)
                };
                return $q.all(meta).then(
                    function(resolve){
                        vm.currGrid.expert=angular.copy(resolve.expert.user);
                        vm.currGrid.questioners=angular.copy(resolve.questioners.users);
                        vm.currGrid.metricators=angular.copy(resolve.metricators.users);
                        vm.currGrid.mgoals=angular.copy(resolve.mgoals.mgoals);
                        vm.currGrid.questions=angular.copy(resolve.questions.questions);
                        vm.currGrid.metrics=angular.copy(resolve.metrics.metrics);
                        vm.updtGrid = angular.copy(vm.currGrid);
                        vm.success=true;
                    },
                    function(reject){
                        vm.errmsg = reject.errmsg;
                        alert(vm.errmsg);
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
        vm.currGrid = {
            id: $routeParams.gridid
        };
        _loadGrid(vm.currGrid.id);
    }

    vm.count_questions = function (){
        return 'ciao';
    }    

}

})();
