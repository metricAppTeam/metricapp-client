(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name TeamService
* @module metricapp
* @requires $http
* @requires $cookies
* @requires REST_SERVICE
* @requires AuthService
*
* @description
* Provides team management services.
************************************************************************************/

angular.module('metricapp')

.service('TeamService', TeamService);

TeamService.$inject = ['$http', '$q', '$cookies', 'REST_SERVICE', 'AuthService', 'DB_TEAMS'];

function TeamService($http, $q, $cookies, REST_SERVICE, AuthService, DB_TEAMS) {

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
    * Retrieves all the teams.
    * @returns {[Team]|Error} On success, the teams;
    * an error message, otherwise.
    ********************************************************************************/
    function getAll() {
        return $q(function(resolve, reject) {
            var authusername = AuthService.getUsername();
            if (!authusername) {
                reject({errmsg: 'User not logged'});
            }
            setTimeout(function() {
                var teams = [];
                for (var teamid in DB_TEAMS) {
                    var TEAM = DB_TEAMS[teamid];
                    if (TEAM.expert === authusername) {
                        teams.push(TEAM);
                    }
                }
                resolve({teams: teams});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getById
    * @description
    * Retrieves the specified team.
    * @param {String} teamid The id of the team to retrieve.
    * @returns {Team|Error} On success, the team;
    * an error message, otherwise.
    ********************************************************************************/
    function getById(teamid) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var TEAM = DB_TEAMS[teamid];
                if (TEAM) {
                    resolve({team: TEAM});
                } else {
                    reject({errmsg: 'Team ' + teamid + ' not found'});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getInArray
    * @description
    * Retrieves the specified teams.
    * @param {[String]} teamids Usernames of teams to retrieve.
    * @returns {{teamid:Team}|Error} On success, the list of teams;
    * an error message, otherwise.
    ********************************************************************************/
    function getInArray(teamids) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var teams = {};
                teamids.forEach(function(teamid) {
                    var TEAM = DB_TEAMS[teamid];
                    if (TEAM) {
                        teams[teamid] = TEAM;
                    }
                });
                resolve({teams: teams});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getNFrom
    * @description
    * Retrieves the specified teams.
    * @param {Int} tmStart First team index.
    * @param {Int} tmN Number of teams.
    * @returns {[Team]|Error} On success, the list of teams;
    * an error message, otherwise.
    ********************************************************************************/
    function getNFrom(tmStart, tmN) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var teams = [];
                var numteams =  Object.keys(DB_TEAMS).length;
                var end = (tmN === -1) ? numteams : Math.min(tmStart + tmN, numteams);
                for (var i = tmStart; i < end; i++ ) {
                    teams.push(DB_TEAMS[i]);
                }
                resolve({teams: teams, numteams: numteams});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name create
    * @description
    * Creates a new team.
    * @param {Team} team The team to create.
    * @returns {JSON|Error} On success, the teamid of the successfully created team
    * and a success message;
    * an error message, otherwise.
    ********************************************************************************/
    function create(team) {
        return $q(function(resolve, reject) {
            var teamid = team.teamid;
            setTimeout(function() {
                if (DB_TEAMS[teamid]) {
                    reject({errmsg: 'Team ' + teamid + ' already registered'});
                } else {
                    DB_TEAMS[teamid] = angular.copy(team);
                    resolve({teamid: teamid, msg: 'Thank you for creating team ' + teamid});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name update
    * @description
    * Updates the team.
    * @param {TeamAttrs} teamAttrs The team attributes to update.
    * @returns {String|Error} On success, the teamid of the updated team;
    * an error message, otherwise.
    ********************************************************************************/
    function update(teamAttrs) {
        return $q(function(resolve, reject) {
            var authusername = AuthService.getUsername();
            var teamid = teamAttrs.teamid;
            setTimeout(function() {
                var TEAM = DB_TEAMS[teamid];
                if (TEAM) {
                    if (TEAM.expert === authusername) {
                        for (var attr in teamAttrs) {
                            TEAM[attr] = angular.copy(teamAttrs[attr]);
                        }
                        resolve({team: TEAM});
                    } else {
                        reject({errmsg: 'The current user ' + authusername + ' cannot update team ' + teamid});
                    }

                } else {
                    reject({errmsg: 'Team ' + teamid + ' not found'});
                }

            }, 500);
        });
    }

}

})();
