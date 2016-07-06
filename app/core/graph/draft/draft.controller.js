(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name DraftController
* @module metricapp
* @requires $scope
*
* @description
************************************************************************************/

angular.module('metricapp')

.controller('DraftController', DraftController);

DraftController.$inject = ['$scope', '$location', 'ProfileService','FlashService', 'GENDERS'];

function DraftController($scope, $location, ProfileService, FlashService, GENDERS) 
{

    var vm = this;

    var color = d3.scale.category20();

    $scope.options = {
        chart: {
            type: 'forceDirectedGraph',
            height: 300,
            width: (function(){ return nv.utils.windowSize().width })(),
            margin:{top: 10, right: 10, bottom: 10, left: 10},
            color: function(d){
                return color(d.group)
            },
            nodeExtras: function(node) {
                node && node
                  .append("text")
                  .attr("dx", 12)
                  .attr("dy", ".35em")
                  .text(function(d) { return d.name })
                  .style('font-size', '15px');
            }
        }
    };
    
    $scope.data = {
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
            {"source":1,"target":0,"value":2},
            {"source":1,"target":0,"value":3},
            {"source":3,"target":0,"value":4},
            {"source":4,"target":0,"value":5},
            {"source":5,"target":0,"value":6},
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
    * @return {type} Insert here return description.
    ********************************************************************************/
    function _foo(a, b, c) {

    }
}

})();
