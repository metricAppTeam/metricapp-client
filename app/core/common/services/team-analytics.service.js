(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name TeamAnalyticsService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
*
* @description
* Realizes the team analytics DAO.
************************************************************************************/

angular.module('metricapp')

.service('TeamAnalyticsService', TeamAnalyticsService);

TeamAnalyticsService.$inject = ['$http', '$q', 'REST_SERVICE'];

function TeamAnalyticsService($http, $q, REST_SERVICE) {

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
        var request = {
            method: 'GET',
            url: REST_SERVICE.URL + '/analytics/teams',
            params: {
                'teamid': teamid
            }
        };
        return $http(request).then(
            function(success) {
                var analyticsDTO = angular.fromJson(success.data.analyticsDTO);
                var teamAnalytics = analyticsDTO[0];
                return $q.resolve({analytics: teamAnalytics});
            },
            function(error) {
                var errmsg = angular.copy(error.data.message);
                return $q.reject({errmsg: errmsg});
            }
        );
    }

}

})();
