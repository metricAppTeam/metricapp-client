(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name MetricService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
*
* @description
* Provides metric management services.
************************************************************************************/

angular.module('metricapp')

.service('MetricService', MetricService);

MetricService.$inject = ['$http', '$q', 'REST_SERVICE', 'DB_METRICS'];

function MetricService($http, $q, REST_SERVICE, DB_METRICS) {

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
    * Retrieves all the metrics.
    * @returns {[Metric]|Error} On success, the metrics;
    * an error message, otherwise.
    ********************************************************************************/
    function getAll() {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var metrics = [];
                for (var metric in DB_METRICS) {
                    metrics.push(DB_METRICS[metric]);
                }
                resolve({metrics: metrics});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getById
    * @description
    * Retrieves the specified metric.
    * @param {String} metricid The metricid of the metric to retrieve.
    * @returns {Metric|Error} On success, the metric;
    * an error message, otherwise.
    ********************************************************************************/
    function getById(metricid) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var METRIC = DB_METRICS[metricid];
                if (METRIC) {
                    resolve({metric: METRIC});
                } else {
                    reject({errmsg: 'Metric ' + metricid + ' not found'});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getInArray
    * @description
    * Retrieves the specified metrics.
    * @param {[String]} metricids Usernames of metrics to retrieve.
    * @returns {{metricid:Metric}|Error} On success, the list of metrics;
    * an error message, otherwise.
    ********************************************************************************/
    function getInArray(metricids) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var metrics = {};
                metricids.forEach(function(metricid) {
                    var METRIC = DB_METRICS[metricid];
                    if (METRIC) {
                        metrics[metricid] = METRIC;
                    }
                });
                resolve({metrics: metrics});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getNFrom
    * @description
    * Retrieves the specified metrics.
    * @param {Int} mtrStart First metric index.
    * @param {Int} mtrN Number of metrics.
    * @returns {[Metric]|Error} On success, the list of metrics;
    * an error message, otherwise.
    ********************************************************************************/
    function getNFrom(mtrStart, mtrN) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var metrics = [];
                var nummetrics =  Object.keys(DB_METRICS).length;
                var end = (mtrN === -1) ? nummetrics : Math.min(mtrStart + mtrN, nummetrics);
                for (var i = mtrStart; i < end; i++ ) {
                    metrics.push(DB_METRICS[i]);
                }
                resolve({metrics: metrics, nummetrics: nummetrics});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name create
    * @description
    * Creates a new metric.
    * @param {Metric} metric The metric to create.
    * @returns {JSON|Error} On success, the metricid of the successfully created metric
    * and a success message;
    * an error message, otherwise.
    ********************************************************************************/
    function create(metric) {
        return $q(function(resolve, reject) {
            var metricid = metric.metricid;
            setTimeout(function() {
                if (DB_METRICS[metricid]) {
                    reject({errmsg: 'Metric ' + metricid + ' already registered'});
                } else {
                    DB_METRICS[metricid] = angular.copy(metric);
                    resolve({metricid: metricid, msg: 'Thank you for creating ' + metricid});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name update
    * @description
    * Updates the authuser profile.
    * @param {Metric} metricAttrs The metric attributes to update.
    * @returns {JSON} Insert description here.
    ********************************************************************************/
    function update(metricAttrs) {
        return $q(function(resolve, reject) {
            var metricid = metricAttrs.metricid;
            setTimeout(function() {
                var METRIC = DB_METRICS[metricid];
                if (METRIC) {
                    for (var attr in metricAttrs) {
                        METRIC[attr] = metricAttrs[attr];
                    }
                    resolve({metric: METRIC});
                } else {
                    reject({errmsg: 'Metric ' + metricid + ' not found'});
                }
            }, 500);
        });
    }

}

})();
