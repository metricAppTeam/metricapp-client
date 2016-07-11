(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name GraphController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
************************************************************************************/

angular.module('metricapp')

.controller('GraphController', GraphController);

GraphController.$inject = ['$scope', '$location'];

function GraphController($scope, $location) {

    var vm = this;

    vm.name = 'grid name';
    vm.description = 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.';
    vm.ts_creation = '01/01/2016 - 15:03:01';
    vm.ts_update = '01/06/2016 - 15:03:01';

    vm.num_mgs = 2;
    vm.num_questions = 10;
    vm.num_metrics = 20;


    /* VIEW TEAM */

    //M.ators
    vm.metricators =
    [
        {firstname: 'Andrea', lastname: 'Gennusa', role: 'Metricator', email:'gennusa@gmail.com', online: true, },
        {firstname: 'Alessandro', lastname: 'Fazio', role: 'Metricator', email:'fazio@gmail.com', online: false},
    ];

    //Q.er
    vm.questioners =
    [
        {firstname: 'Marco', lastname: 'Piu', role: 'Questioner', email:'piu@gmail.com', online: true},
        {firstname: 'Davide', lastname: 'Nanni', role: 'Questioner', email:'nanni@gmail.com', online: false},
    ];

    vm.chart = {};
       
      
    vm.click = function() {
        vm.chart.bind(vm.graph);
    };

    vm.graph =
    {
        "name": "GQM GRAPH",
        "size": 20000,
        "children": 
        [
            {
                "name": "OG1",
                "size": 12000,
                "children": 
                [
                    {
                        "name": "M.G. 1",
                        "size": 5000,
                        "children": 
                        [
                            {
                                "name": 'Q. 1',
                                "size":1500,
                                "children": 
                                [
                                    {"name": 'M. 1',"size": 500},
                                    {"name": 'M. 2',"size": 500},
                                    {"name": 'M. 3',"size": 500}
                               ]
                            }, 
                            {
                                
                                "name": 'Q. 2',
                                "size":1500,
                                "children": 
                                [
                                    {"name": 'M. 4',"size": 500},
                                    {"name": 'M. 5',"size": 500},
                                    {"name": 'M. 6',"size": 500}
                               ]
                            }
                        ]
                    },
                    {
                        "name": "M.G. 1",
                        "size": 5000,
                        "children": 
                        [
                            {
                                "name": 'Q. 1',
                                "size":1500,
                                "children": 
                                [
                                    {"name": 'M. 1',"size": 500},
                                    {"name": 'M. 2',"size": 500},
                                    {"name": 'M. 3',"size": 500}
                               ]
                            }, 
                            {
                                
                                "name": 'Q. 2',
                                "size":1500,
                                "children": 
                                [
                                    {"name": 'M. 4',"size": 500},
                                    {"name": 'M. 5',"size": 500},
                                    {"name": 'M. 6',"size": 500}
                               ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "OG1",
                "size": 12000,
                "children": 
                [
                    {
                        "name": "M.G. 1",
                        "size": 5000,
                        "children": 
                        [
                            {
                                "name": 'Q. 1',
                                "size":1500,
                                "children": 
                                [
                                    {"name": 'M. 1',"size": 500},
                                    {"name": 'M. 2',"size": 500},
                                    {"name": 'M. 3',"size": 500}
                               ]
                            }, 
                            {
                                
                                "name": 'Q. 2',
                                "size":1500,
                                "children": 
                                [
                                    {"name": 'M. 4',"size": 500},
                                    {"name": 'M. 5',"size": 500},
                                    {"name": 'M. 6',"size": 500}
                               ]
                            }
                        ]
                    },
                    {
                        "name": "M.G. 1",
                        "size": 5000,
                        "children": 
                        [
                            {
                                "name": 'Q. 1',
                                "size":1500,
                                "children": 
                                [
                                    {"name": 'M. 1',"size": 500},
                                    {"name": 'M. 2',"size": 500},
                                    {"name": 'M. 3',"size": 500}
                               ]
                            }, 
                            {
                                
                                "name": 'Q. 2',
                                "size":1500,
                                "children": 
                                [
                                    {"name": 'M. 4',"size": 500},
                                    {"name": 'M. 5',"size": 500},
                                    {"name": 'M. 6',"size": 500}
                               ]
                            }
                        ]
                    }
                ]
            }
        ]        
    };

    /********************************************************************************
    * @ngdoc method
    * @name foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @returns {type} Insert here return description.
    ********************************************************************************/
    function _init() {
    }

    /********************************************************************************
    * @ngdoc method
    * @name _foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @returns {type} Insert here return description.
    ********************************************************************************/
    function _foo(a, b, c) {

    }
}

})();
