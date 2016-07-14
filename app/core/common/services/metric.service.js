/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 16:21:06
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-11 16:09:39
*/
(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name MetricService
* @module metricapp
* @requires $http
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

MetricService.$inject = ['$http', '$window', 'AuthService'];

//function MetricatorService($http, $rootScope, $cookies, $window) {
function MetricService($http, $window, AuthService) {

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
