(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name UserAnalyticsService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
*
* @description
* Realizes the user analytics DAO.
************************************************************************************/

angular.module('metricapp')

.service('UserAnalyticsService', UserAnalyticsService);

UserAnalyticsService.$inject = ['$http', '$q', 'REST_SERVICE'];

function UserAnalyticsService($http, $q, REST_SERVICE) {

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
        var request = {
            method: 'GET',
            url: REST_SERVICE.URL + '/analytics/users',
            params: {
                'username': username
            }
        };
        return $http(request).then(
            function(success) {
                var analyticsDTO = angular.fromJson(success.data.analyticsDTO);
                var userAnalytics = analyticsDTO[0];
                return $q.resolve({analytics: userAnalytics});
            },
            function(error) {
                var errmsg = angular.copy(error.data.message);
                return $q.reject({errmsg: errmsg});
            }
        );
    }

}

})();
