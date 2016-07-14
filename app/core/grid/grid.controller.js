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
'GridService', 'MGoalService', 'QuestionService', 'MetricService', 'UserService', 'ROLES', 'GRID_EVENTS','cytoData'];

function GridController($scope, $rootScope, $location, $routeParams, $q,
    GridService, MGoalService, QuestionService, MetricService, UserService, ROLES, GRID_EVENTS,cytoData) {

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
    
    $scope.vm.options = {
        textureOnViewport:true,
        pixelRatio: 'auto',
        motionBlur: false,
        hideEdgesOnViewport:true
       };

    $scope.vm.layout = {name: 'circle'};

    $scope.vm.elements = 
    {
        n1:{ group: 'nodes', data:{ weight: 30,   color: 'orange' ,     name: 'Metric 1'   }  },
        n2:{ group: 'nodes', data:{ weight: 30,   color: 'red'    ,     name: 'MG 2'       }  },
        n3:{ group: 'nodes', data:{ weight: 30,   color: 'blue'   ,     name: 'Question 1' }  },
        n4:{ group: 'nodes', data:{ weight: 30,   color: 'green'  ,     name: 'Org. Goal 1'}  },

        e1:{ group: 'edges', data:{ target: 'n1', source: 'n1' } },
        e2:{ group: 'edges', data:{ target: 'n1', source: 'n2' } },
        e3:{ group: 'edges', data:{ target: 'n1', source: 'n3' } },
        e4:{ group: 'edges', data:{ target: 'n1', source: 'n1' } }
    };
        
    $scope.vm.style = 
    [
        {
            selector: 'node',
            style: {
                'height': 'data(weight)',
                'width': 'data(weight)',
                'shape': 'ellipse',
                'border-width': 0,
                'background-color': 'data(color)',
            } 
        }
    ];


    $scope.node_name = '';
    $scope.node_description = '';
    $scope.node_creation ='';
    $scope.node_update = '';

    $scope.$on('cy:node:mouseover', function(ng,cy){
        $scope.event.name = 'cy:node:mouseover';
        var node = cy.cyTarget;
        //$scope.node_name = (node.data());
        $scope.node_name = 'eddaicazzo..';
        $scope.$apply();
    });

    $scope.$on('cy:node:mouseout', function(ng,cy){
        $scope.event.name = 'cy:node:mouseout';
        var node = cy.cyTarget;
        //$scope.node_name = (node.data());
        $scope.node_name = 'eddaicazzo..';
        $scope.$apply();
    });

    $scope.$on('cy:node:mousedown', function(ng,cy){
        $scope.event.name = 'cy:node:mousedown';
        var node = cy.cyTarget;
        //$scope.node_name = (node.data());
        $scope.node_name = 'eddaicazzo..';
        $scope.$apply();
    });

    $scope.$on('cy:node:mouseup', function(ng,cy){
        $scope.event.name = 'cy:node:mouseup';
        var node = cy.cyTarget;
        //$scope.node_name = (node.data());
        $scope.node_name = 'eddaicazzo..';
        $scope.$apply();
    });

    $scope.$on('cy:node:click', function(ng,cy){
        $scope.event.name = 'cy:node:click';
        var node = cy.cyTarget;
        //$scope.node_name = (node.data());
        $scope.node_name = 'eddaicazzo..';
        $scope.$apply();
    });    

}

})();
