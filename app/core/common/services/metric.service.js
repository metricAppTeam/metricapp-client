(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name MetricService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
* @requires AuthService
*
* @description
* Provides metric management services.
* @requires $window
* @requires $cookies
*
* @description
* Get Metrics.

************************************************************************************/

angular.module('metricapp')

.service('MetricService', MetricService);

//MetricatorService.$inject = [
//    '$http', '$rootScope', '$cookies', '$window'];
MetricService.$inject = ['$http', '$q', 'REST_SERVICE', 'AuthService', 'DB_METRICS', '$window'];

//function MetricatorService($http, $rootScope, $cookies, $window) {
function MetricService($http,  $q, REST_SERVICE, AuthService, DB_METRICS,$window) {

    var service = this;
    service.metricToUpdate;

    service.getMetrics = getMetrics;
    service.getApprovedMetrics = getApprovedMetrics;
    service.getMetricsById = getMetricsById;
    service.getMetricsByStateAndUser = getMetricsByStateAndUser;
    service.getMetricsByUser = getMetricsByUser;
    service.getMetricsByState = getMetricsByState;
    service.toUpdateMetric = toUpdateMetric;
    service.getToUpdate = getToUpdate;
    service.submitMetric = submitMetric;
    service.newMetric=newMetric;
    service.changeState = changeState;


//giacomo inizio


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
    });}
//giacomo fine

    function submitMetric(metric){
      return $http.put('http://qips.sweng.uniroma2.it/metricapp-server/metric/', metric).then(
          function(response) {
               //var message = "Success!, id: "+ angular.fromJson(response.data).measurementGoals[0].metadata.id;
               console.log('SUCCESS PUT metric');
               var message = response.data;
               return message;
          },
          function(response) {
               var message = response.data;
               console.log('FAILURE PUT metric');
               return message;
          }
     );
   }

   function changeState(metric){
     return $http.put('http://qips.sweng.uniroma2.it/metricapp-server/metric?onlychangestate=true', metric).then(
         function(response) {
              //var message = "Success!, id: "+ angular.fromJson(response.data).measurementGoals[0].metadata.id;
              console.log('SUCCESS PUT metric');
              var message = response.data;
              return message;
         },
         function(response) {
              var message = response.data;
              console.log('FAILURE PUT metric');
              return message;
         }
    );
  }


   function newMetric(){
      var metric = {description:null, hasMax:false, hasMin:false, hasUserDefinedList:false,isOrdered:false,max:0,metadata:{creationDate:null,creatorId:AuthService.getUser().username,entityType:'Metric',id:null,lastVersionDate:null,releaseNote:null,state:'Created',tags:[],version:'0',versionBus:null},metricatorId:AuthService.getUser().username,min:0,name:null,scaleType:'ordinalScale',set:'integers',unit:null,userDefinedList:[]};
     return $http.post('http://qips.sweng.uniroma2.it/metricapp-server/metric/', metric).then(
         function(response) {
              //var message = "Success!, id: "+ angular.fromJson(response.data).measurementGoals[0].metadata.id;
              console.log('SUCCESS POST metric');
              var message = response.data;
              mmetric = message.metricsDTO[0];
              return message;
         },
         function(response) {
              var message = response.data;
              console.log('FAILURE POST metric');
              return message;
         }
    );

   }


    /********************************************************************************
    * @ngdoc method
    * @name getMetrics
    * @description
    * Get Metric by user.
    ********************************************************************************/

    function getMetrics() {

        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric?userid='+AuthService.getUser().username).then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET METRICS');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET METRICS');
                console.log(message);
                return message;
            }
        );

    }


        /********************************************************************************
        * @ngdoc method
        * @name getMetrics
        * @description
        * Get Metric by user.
        ********************************************************************************/

        function getMetricsByUser(username) {

            return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric?userid='+username).then(
                function(response) {
                    var message = angular.fromJson(response.data);
                    console.log('SUCCESS GET METRICS');
                    console.log(message);
                    return message;
                },
                function(response) {
                    var message = angular.fromJson(response.data);
                    console.log('FAILURE GET METRICS');
                    console.log(message);
                    return message;
                }
            );

        }


    /********************************************************************************
    * @ngdoc method
    * @name getMetrics
    * @description
    * Get Metric by id
    ********************************************************************************/

    function getMetricsById(metricId) {

        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric?id='+metricId).then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET METRIC BY ID');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET METRICS BY ID');
                console.log(message);
                return message;
            }
        );

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
                        METRIC[attr] = angular.copy(metricAttrs[attr]);
                    }
                    resolve({metric: METRIC});
                } else {
                    reject({errmsg: 'Metric ' + metricid + ' not found'});
                }
            }, 500);
        });
    }
/*
    * @name getMetricsByMeasurementGoalId
    * @description
    * Get Metric by measurement goal.
    ********************************************************************************/

    function getMetricsByMeasurementGoalId(measurementGoalId) {

        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/external/measurementgoal?id='+measurementGoalId).then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET METRICS');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET METRICS');
                console.log(message);
                return message;
            }
        );

    }


    /********************************************************************************
    * @ngdoc method
    * @name getApprovedMetrics
    * @description
    * Get approved metric by state.
    ********************************************************************************/

    function getApprovedMetrics() {

        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric?state=Approved').then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET METRICS BY APPROVED VERSION');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET METRICS');
                console.log(message);
                return message;
            }
        );

    }

    function getMetricsByStateAndUser(state,user) {

        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric?userid='+user+'&state='+state).then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET METRICS BY State and User VERSION');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET METRICS');
                console.log(message);
                return message;
            }
        );

    }

    function getMetricsByState(state) {

        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric?userid='+AuthService.getUser().username+'&state='+state).then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET METRICS BY State and User VERSION');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET METRICS');
                console.log(message);
                return message;
            }
        );

    }

    function toUpdateMetric(toUpdate){
       if(toUpdate.metricatorId == AuthService.getUser().username){
          service.metricToUpdate = toUpdate;
       }
   }

   function getToUpdate(){
      return service.metricToUpdate;
   }


}

})();
