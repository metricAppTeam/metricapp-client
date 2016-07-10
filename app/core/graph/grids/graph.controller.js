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

GraphController.$inject = ['$scope', '$location','$http'];

function GraphController($scope, $location,$http) {

    var vm = this;

    vm.name = 'grid name';
    vm.description = 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.';
    vm.ts_creation = '01/01/2016 - 15:03:01';
    vm.ts_update = '01/06/2016 - 15:03:01';

    vm.num_mgs = 2;
    vm.num_questions = 10;
    vm.num_metrics = 20;

    vm.chart = {};
    
    //vm.chart.bind(vm.data_2);

    vm.data_2 =
    {
        "name": "Root node",
        "children": [{
            "name": "analytics",
            "children": [{
                "name": "cluster",
                "children": [{
                    "name": "Merge Edge",
                    "size": 700
                }]
            }, {
                "name": "graph",
                "children": [{
                    "name": "Betweenness Centrality",
                    "size": 3534
                }, {
                    "name": "Spanning Tree",
                    "size": 5416
                }]
            }]
        }]
    }

    /*var color = d3.scale.category20();

    
    /*vm.options = {
        chart: {
            type: 'forceDirectedGraph',
            height: (function(){ return nv.utils.windowSize().height -200})(),
            radius: 12,
            linkStrength: -0.03,
            width: (function(){ return nv.utils.windowSize().width -800})(),
            margin:{top: 10, right: 10, bottom: 10, left: 10},
            color: function(d){
                return color(d.group)
            },
            nodeExtras: function(node) {
                node && node
                  .append("text")
                  .attr("dx", 15)
                  .attr("dy", ".6em")
                  .text(function(d) { return d.name })
                  .style('font-size', '20px');
            }
        }
    };
    
    vm.data = {
        "nodes":[
            {"name":"A","group":1},
            {"name":"B","group":2},
            {"name":"C","group":3},
            {"name":"D","group":4},
            {"name":"E","group":5},
            {"name":"F","group":6},
            {"name":"G","group":7}
        ],
        "links":[
            {"source":1,"target":0,"value":1},
            {"source":4,"target":0,"value":2},
            {"source":2,"target":0,"value":1},
            {"source":3,"target":0,"value":2},
            {"source":4,"target":0,"value":5},
            {"source":5,"target":0,"value":6},
        ]
    };


    vm.graph_data = 
    {
        "name": "Prova",
        "children": [
            {"name": "Figlio1", "size": 3938},
            {"name": "Figlio2", "size": 3812}
        ]
    };

    vm.data2 = {
        name: 'ROOT',
        id: 'root',
        children: [
            {
                name: 'A',
                id: 'A',
                description: 'This is a tooltip with a long multi line text in it',
                children: [
                    {
                        name: 'AA',
                        id: 'AA',
                        description: 'This is a tooltip'
                    },
                    {
                        name: 'BB',
                        id: 'BB'
                    }
                ]
            },
            {
                name: 'B',
                id: 'B',
                children: [
                    {
                        name: 'AA',
                        id: 'AA'
                    },
                    {
                        name: 'BB',
                        id: 'BB'
                    },
                    {
                        name: 'CC',
                        id: 'CC'
                    }
                ]
            }
        ]
    };*/

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
    function foo(a, b, c) {

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
