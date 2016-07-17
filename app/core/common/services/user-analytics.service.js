(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name UserAnalyticsService
* @module metricapp
* @requires $http
* @requires $cookies
* @requires REST_SERVICE
* @requires USER_ANALYTICS
*
* @description
* Realizes the user analytics DAO.
************************************************************************************/

angular.module('metricapp')

.service('UserAnalyticsService', UserAnalyticsService);

UserAnalyticsService.$inject = ['$http', '$q', '$cookies', 'REST_SERVICE', 'USER_ANALYTICS', 'DB_USERS'];

function UserAnalyticsService($http, $q, $cookies, REST_SERVICE, USER_ANALYTICS, DB_USERS) {

    var service = this;

    service.getAll = getAll;

    /********************************************************************************
    * @ngdoc method
    * @name getAll
    * @description
    * Retrieves all the analytics for the specified user.
    * @param {String} username The username of the user whose analytics to retrieve.
    * @returns {Analytics|Error} On success, the user analytics;
    * an error message, otherwise.
    ********************************************************************************/
    function getAll(username) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var USER = DB_USERS[username];
                if (USER) {
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

                    analytics[USER_ANALYTICS.GQM_SCORE] = gqmScore;
                    analytics[USER_ANALYTICS.GRIDS_TOT] = gridsTot;
                    analytics[USER_ANALYTICS.ARTIFACTS_TOT] = artifactsTot;
                    analytics[USER_ANALYTICS.ACCEPTANCE_RATIO] = acceptanceRatio;
                    analytics[USER_ANALYTICS.ARTIFACTS_MGOAL] = artifactsMGoal;
                    analytics[USER_ANALYTICS.ARTIFACTS_RATE] = artifactsRate;
                    analytics[USER_ANALYTICS.WORKTIME_RATIO] = worktimeRatio;
                    analytics[USER_ANALYTICS.TASKS_PROGRESS] = tasksProgress;
                    analytics[USER_ANALYTICS.TASKS_RECORD] = tasksRecord;

                    resolve({analytics: analytics, username: username});
                } else {
                    reject({errmsg: 'User ' + username + ' not found'});
                }
            }, 500);
        });
    }

}

})();
