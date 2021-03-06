(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name GridService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
* @requires AuthService
*
* @description
* Provides grids management services.
************************************************************************************/

angular.module('metricapp')

.service('GridService', GridService);

GridService.$inject = ['$http', '$q', 'REST_SERVICE', 'AuthService', 'DB_GRIDS'];

function GridService($http, $q, REST_SERVICE, AuthService, DB_GRIDS) {

    var service = this;

    service.getAll = getAll;
    service.getById = getById;

    service.create = create;
    service.update = update;

    function _getNextId() {
        var lastId = Object.keys(DB_GRIDS).reduce(function(a, b) {
            return DB_GRIDS[a] > DB_GRIDS[b] ? a : b;
        });
        return lastId + 1;
    }

    /********************************************************************************
    * @ngdoc method
    * @name getAll
    * @description
    * Retrieves all the grids for authuser.
    * @returns {[Grid]|Error} On success, the grids for authuser;
    * an error message, otherwise.
    ********************************************************************************/
    function getAll() {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var username = AuthService.getUsername();
                if (username) {
                    var grids = [];
                    for (var gridid in DB_GRIDS) {
                        var GRID = DB_GRIDS[gridid];
                        if (GRID.expert === username) {
                            // start computes progress
                            var progress = Math.floor((Math.random() * 100) + 0);
                            // end compute progress
                            GRID.progress = progress;
                            grids.push(GRID);
                        }
                    }
                    resolve({grids: grids});
                } else {
                    reject({errmsg: 'User not logged'});
                }
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
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var username = AuthService.getUsername();
                if (username) {
                    var GRID = DB_GRIDS[gridid];
                    if (GRID) {
                        if (GRID.expert === username) {
                            // start computes progress
                            var progress = Math.floor((Math.random() * 100) + 0);
                            // end compute progress
                            GRID.progress = progress;
                            resolve({grid: GRID});
                        } else {
                            reject({errmsg: 'Grid ' + gridid + ' not readable for user ' + username});
                        }
                    } else {
                        reject({errmsg: 'Grid ' + gridid + ' not found'});
                    }
                } else {
                    reject({errmsg: 'User not logged'});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name create
    * @description
    * Creates a new grid.
    * @param {Grid} grid The grid to create.
    * @returns {Int|Error} On success, the gridid of the successfully created grid
    * and a success message;
    * an error message, otherwise.
    ********************************************************************************/
    function create(grid) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var gridid = _getNextId();
                grid.id = gridid;
                grid.ts_create = Date.now();
                grid.ts_update = Date.now();
                DB_GRIDS[gridid] = angular.copy(grid);
                resolve({gridid: gridid, msg: 'Thank you for creating grid ' + gridid});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name update
    * @description
    * Updates the grid with the specified grid attributes.
    * @param {GridAttrs} gridAttrs The grid attributes to update.
    * @returns {JSON} Insert description here.
    ********************************************************************************/
    function update(gridAttrs) {
        return $q(function(resolve, reject) {
            var gridid = userAttrs.gridid;
            setTimeout(function() {
                var GRID = DB_GRIDS[gridid];
                if (GRID) {
                    for (var attr in gridAttrs) {
                        GRID[attr] = angular.copy(gridAttrs[attr]);
                    }
                    // start computes progress
                    var progress = Math.floor((Math.random() * 100) + 0);
                    // end compute progress
                    GRID.progress = progress;
                    resolve({grid: GRID});
                } else {
                    reject({errmsg: 'Grid ' + gridid + ' not found'});
                }
            }, 500);
        });
    }

}

})();
