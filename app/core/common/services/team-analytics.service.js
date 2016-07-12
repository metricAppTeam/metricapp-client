(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name TeamAnalyticsService
* @module metricapp
* @requires $http
* @requires $cookies
* @requires REST_SERVICE
* @requires TEAM_ANALYTICS
*
* @description
* Realizes the team analytics DAO.
************************************************************************************/

angular.module('metricapp')

.service('TeamAnalyticsService', TeamAnalyticsService);

TeamAnalyticsService.$inject = ['$http', '$q', '$cookies', 'REST_SERVICE', 'TEAM_ANALYTICS', 'DB_TEAMS'];

function TeamAnalyticsService($http, $q, $cookies, REST_SERVICE, TEAM_ANALYTICS, DB_TEAMS) {

    var service = this;

    service.getAll = getAll;

    /********************************************************************************
    * @ngdoc method
    * @name getAll
    * @description
    * Retrieves all the analytics for the specified team.
    * @param {Int} teamid The id of the team whose analytics to retrieve.
    * @returns {Analytics|Error} On success, the team analytics;
    * an error message, otherwise.
    ********************************************************************************/
    function getAll(teamid) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var TEAM = DB_TEAMS[teamid];
                if (TEAM) {
                    var analytics = {};
                    // start compute analytics
                    var gqmScore = Math.floor((Math.random() * 100) + 0);
                    var gridsTot = Math.floor((Math.random() * 100) + 0);
                    var artifactsTot = Math.floor((Math.random() * 100) + 0);
                    var acceptanceRatio = Math.floor((Math.random() * 100) + 0);
                    var artifactsMGoal = Math.floor((Math.random() * 100) + 0);
                    var artifactsRate = Math.floor((Math.random() * 100) + 0);
                    var worktimeRatio = Math.floor((Math.random() * 100) + 0);
                    var tasksProgress = Math.floor((Math.random() * 100) + 0);

                    var tasksRecord = [];
                    for (var i = 0; i < 30; i++) {
                        var ts = new Date(2016, 1, i, 12, 30, 0, 0);
                        var assigned = Math.floor((Math.random() * 10) + 0);
                        var submitted = Math.floor((Math.random() * 10) + 0);
                        var accepted = Math.floor((Math.random() * 10) + 0);
                        var record = {ts: ts, assigned: assigned, submitted: submitted, accepted: accepted};
                        tasksRecord.push(record);
                    }
                    //end compute analytics

                    analytics[TEAM_ANALYTICS.GQM_SCORE] = gqmScore;
                    analytics[TEAM_ANALYTICS.GRIDS_TOT] = gridsTot;
                    analytics[TEAM_ANALYTICS.ARTIFACTS_TOT] = artifactsTot;
                    analytics[TEAM_ANALYTICS.ACCEPTANCE_RATIO] = acceptanceRatio;
                    analytics[TEAM_ANALYTICS.ARTIFACTS_MGOAL] = artifactsMGoal;
                    analytics[TEAM_ANALYTICS.ARTIFACTS_RATE] = artifactsRate;
                    analytics[TEAM_ANALYTICS.WORKTIME_RATIO] = worktimeRatio;
                    analytics[TEAM_ANALYTICS.TASKS_PROGRESS] = tasksProgress;
                    analytics[TEAM_ANALYTICS.TASKS_RECORD] = tasksRecord;

                    resolve({analytics: analytics, teamid: teamid});
                } else {
                    reject({errmsg: 'Team ' + teamid + ' not found'});
                }
            }, 500);
        });
    }

}

})();
