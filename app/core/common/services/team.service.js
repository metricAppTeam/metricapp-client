(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name TeamService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
*
* @description
* Provides team management services.
************************************************************************************/

angular.module('metricapp')

.service('TeamService', TeamService);

TeamService.$inject = ['$http', 'REST_SERVICE'];

function TeamService($http, REST_SERVICE) {

    var service = this;

    service.getTeam = getTeam;
    service.getTeams = getTeams;

    /********************************************************************************
    * @ngdoc method
    * @name getTeam
    * @description
    * Retrieves the specified team.
    * @param {Int} teamid The team id.
    * @returns {RichTeam|Error} On success, the team with meta; an error, otherwise.
    ********************************************************************************/
    function getTeam(teamid) {

    }

    /********************************************************************************
    * @ngdoc method
    * @name getTeams
    * @description
    * Retrieves the specified teams.
    * @param {Int} tmStart First team index.
    * @param {Int} tmN Number of teams.
    * @returns {[RichTeam]|Error} On success, the list of teams with metar; an error,
    * otherwise.
    ********************************************************************************/
    function getTasks(tmStart, tmN) {

    }

}

})();
