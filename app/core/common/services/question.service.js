(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name QuestionService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
*
* @description
* Provides question management services.
************************************************************************************/

angular.module('metricapp')

.service('QuestionService', QuestionService);

QuestionService.$inject = ['$http', '$q', 'REST_SERVICE', 'DB_QUESTIONS'];

function QuestionService($http, $q, REST_SERVICE, DB_QUESTIONS) {

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
