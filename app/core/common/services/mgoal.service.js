(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name MGoalService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
*
* @description
* Provides measurement goal management services.
************************************************************************************/

angular.module('metricapp')

.service('MGoalService', MGoalService);

MGoalService.$inject = ['$http', '$q', 'REST_SERVICE', 'DB_MGOALS'];

function MGoalService($http, $q, REST_SERVICE, DB_MGOALS) {

    var service = this;

    service.getAll = getAll;
    service.getById = getById;
    service.getInArray = getInArray;
    service.getNFrom = getNFrom;

    service.create = create;
    service.update = update;

    /********************************************************************************
    * @ngdoc method
    * @name getAll
    * @description
    * Retrieves all the mgoals.
    * @returns {[MGoal]|Error} On success, the measurement goals;
    * an error message, otherwise.
    ********************************************************************************/
    function getAll() {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var mgoals = [];
                for (var mgoal in DB_MGOALS) {
                    mgoals.push(DB_MGOALS[mgoal]);
                }
                resolve({mgoals: mgoals});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getById
    * @description
    * Retrieves the specified mgoal.
    * @param {String} goalid The goalid of the mgoal to retrieve.
    * @returns {MGoal|Error} On success, the mgoal;
    * an error message, otherwise.
    ********************************************************************************/
    function getById(goalid) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var MGOAL = DB_MGOALS[goalid];
                if (MGOAL) {
                    resolve({mgoal: MGOAL});
                } else {
                    reject({errmsg: 'MGoal ' + goalid + ' not found'});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getInArray
    * @description
    * Retrieves the specified mgoals.
    * @param {[String]} goalids Usernames of mgoals to retrieve.
    * @returns {{goalid:MGoal}|Error} On success, the list of mgoals;
    * an error message, otherwise.
    ********************************************************************************/
    function getInArray(goalids) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var mgoals = {};
                goalids.forEach(function(goalid) {
                    var MGOAL = DB_MGOALS[goalid];
                    if (MGOAL) {
                        mgoals[goalid] = MGOAL;
                    }
                });
                resolve({mgoals: mgoals});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getNFrom
    * @description
    * Retrieves the specified mgoals.
    * @param {Int} mglStart First mgoal index.
    * @param {Int} mglN Number of mgoals.
    * @returns {[MGoal]|Error} On success, the list of mgoals;
    * an error message, otherwise.
    ********************************************************************************/
    function getNFrom(mglStart, mglN) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var mgoals = [];
                var nummgoals =  Object.keys(DB_MGOALS).length;
                var end = (mglN === -1) ? nummgoals : Math.min(mglStart + mglN, nummgoals);
                for (var i = mglStart; i < end; i++ ) {
                    mgoals.push(DB_MGOALS[i]);
                }
                resolve({mgoals: mgoals, nummgoals: nummgoals});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name create
    * @description
    * Creates a new mgoal.
    * @param {MGoal} mgoal The mgoal to create.
    * @returns {JSON|Error} On success, the goalid of the successfully created mgoal
    * and a success message;
    * an error message, otherwise.
    ********************************************************************************/
    function create(mgoal) {
        return $q(function(resolve, reject) {
            var goalid = mgoal.goalid;
            setTimeout(function() {
                if (DB_MGOALS[goalid]) {
                    reject({errmsg: 'MGoal ' + goalid + ' already registered'});
                } else {
                    DB_MGOALS[goalid] = angular.copy(mgoal);
                    resolve({goalid: goalid, msg: 'Thank you for creating ' + goalid});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name update
    * @description
    * Updates the mgoal
    * @param {MGoal} mgoalAttrs The mgoal attributes to update.
    * @returns {JSON} Insert description here.
    ********************************************************************************/
    function update(mgoalAttrs) {
        return $q(function(resolve, reject) {
            var goalid = mgoalAttrs.goalid;
            setTimeout(function() {
                var MGOAL = DB_MGOALS[goalid];
                if (MGOAL) {
                    for (var attr in mgoalAttrs) {
                        MGOAL[attr] = mgoalAttrs[attr];
                    }
                    resolve({mgoal: MGOAL});
                } else {
                    reject({errmsg: 'MGoal ' + goalid + ' not found'});
                }
            }, 500);
        });
    }

}

})();
