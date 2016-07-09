(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name MetricService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
*
* @description
* Provides metric management services.
************************************************************************************/

angular.module('metricapp')

.service('MetricService', MetricService);

MetricService.$inject = ['$http', '$q', 'REST_SERVICE', 'DB_METRICS'];

function MetricService($http, $q, REST_SERVICE, DB_METRICS) {

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
        return $q(function(resolve, reject) {
            setTimeout(function() {
                reject('Grid not found: ' + gridid);
            }, 500);
        });
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
        return $q(function(resolve, reject) {
            setTimeout(function() {
                resolve({grids: []});
            }, 500);
        });
    }

}

})();
