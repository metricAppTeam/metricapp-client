(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name AnalyticService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
*
* @description
* Provides analytics management services.
************************************************************************************/

angular.module('metricapp')

.service('AnalyticService', AnalyticService);

AnalyticService.$inject = ['$http', 'REST_SERVICE'];

function AnalyticService($http, REST_SERVICE) {

    var service = this;

    service.getAnalytic = getAnalytic;
    service.getAnalytics = getAnalytics;

    /********************************************************************************
    * @ngdoc method
    * @name getAnalytic
    * @description
    * Retrieves the specified analytic.
    * @param {Int} analyticid The analytic id.
    * @returns {Analytic|Error} On success, the analytic; an error, otherwise.
    ********************************************************************************/
    function getAnalytic(analyticid) {

    }

    /********************************************************************************
    * @ngdoc method
    * @name getAnalytics
    * @description
    * Retrieves the specified analytics.
    * @param {Int} anaStart First analytic index.
    * @param {Int} anaN Number of analytics.
    * @returns {[Analytic]|Error} On success, the list of analytics; an error,
    * otherwise.
    ********************************************************************************/
    function getAnalytics(anaStart, anaN) {

    }

}

})();
