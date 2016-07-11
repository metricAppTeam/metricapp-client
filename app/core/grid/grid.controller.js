(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name GridController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $routeParams
* @requires $q
* @requires GridService
* @requires MGoalService
* @requires QuestionService
* @requires MetricService
* @requires UserService
*
* @description
* Realizes the control layer for `grid.view`.
************************************************************************************/

angular.module('metricapp')

.controller('GridController', GridController);

GridController.$inject = ['$scope', '$location', '$routeParams', '$q',
'GridService', 'MGoalService', 'QuestionService', 'MetricService', 'UserService'];

function GridController($scope, $location, $routeParams, $q,
    GridService, MGoalService, QuestionService, MetricService, UserService) {

    var vm = this;

    _init();

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

}

})();
