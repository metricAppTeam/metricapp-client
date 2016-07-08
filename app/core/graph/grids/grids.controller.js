(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name GridsController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the Grids.
* Realizes the control layer for `grids.view`.
************************************************************************************/

angular.module('metricapp')

.controller('GridsController', GridsController);

GridsController.$inject = ['$scope', '$location'];

function GridsController($scope, $location) {

    var vm = this;


    //list of projects for view user project
    vm.grids = [
        {id: "1", name: "GRID 1",progress: 30, status: "active", description:"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"},
        {id: "2", name: "GRID 2",progress: 40, status: "active", description:"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"},
        {id: "3", name: "GRID 3",progress: 90, status: "complete", description:"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"},
        {id: "4", name: "GRID 4",progress: 10, status: "active", description:"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"},
        
        
    ];

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
