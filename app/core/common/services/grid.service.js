(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name GridService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
*
* @description
* Provides grid management services.
************************************************************************************/

angular.module('metricapp')

.service('GridService', GridService);

GridService.$inject = ['$http', 'REST_SERVICE'];

function GridService($http, REST_SERVICE) {

    var service = this;

    service.getGrid = getGrid;
    service.getGrids = getGrids;

    /********************************************************************************
    * @ngdoc method
    * @name getGrid
    * @description
    * Retrieves the specified grid.
    * @param {Int} gridid The grid id.
    * @returns {Grid|Error} On success, the grid; an error, otherwise.
    ********************************************************************************/
    function getGrid(gridid) {

    }

    /********************************************************************************
    * @ngdoc method
    * @name getGrids
    * @description
    * Retrieves the specified grids.
    * @param {Int} grdStart First grid index.
    * @param {Int} grdN Number of grids.
    * @returns {[Grid]|Error} On success, the list of grids; an error, otherwise.
    ********************************************************************************/
    function getGrids(grdStart, grdN) {

    }

}

})();
