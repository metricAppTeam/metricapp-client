(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name GridService
* @module metricapp
* @requires $http
* @requires $cookies
* @requires REST_SERVICE
*
* @description
* Provides grid management services.
************************************************************************************/

angular.module('metricapp')

.service('GridService', GridService);

GridService.$inject = ['$http', '$q', 'REST_SERVICE', 'DB_GRIDS'];

function GridService($http, $q, REST_SERVICE, DB_GRIDS) {

    var service = this;

    service.getAll = getAll;
    service.getById = getById;

    /********************************************************************************
    * @ngdoc method
    * @name getAll
    * @description
    * Retrieves all the grids for authuser.
    * @returns {[Grid]|Error} On success, the grids for authuser;
    * an error message, otherwise.
    ********************************************************************************/
    function getAll() {
        var username = $cookies.getObject('globals').user.username;
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var grids = [];
                for (gridid in DB_GRIDS) {
                    var GRID = DB_GRIDS[gridid];
                    if (GRID.expert === username) {
                        grids.push(DB_TASKS[task]);
                    }                    
                }
                resolve({grids: grids});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getById
    * @description
    * Retrieves the specified grid for authuser.
    * @param {Int} gridid The id of the grid to retrieve.
    * @returns {Grid|Error} On success, the specified grid;
    * an error message, otherwise.
    ********************************************************************************/
    function getById(gridid) {
        var username = $cookies.getObject('globals').user.username;
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var GRID = DB_GRIDS[gridid];
                if (GRID) {
                    if (GRID.expert === username) {
                        resolve({grid: GRID});
                    } else {
                        reject({errmsg: 'Grid ' + gridid + ' not readable for user ' + username});
                    }
                } else {
                    reject({errmsg: 'Grid ' + gridid + ' not found'});
                }
            }, 500);
        });
    }

}

})();
