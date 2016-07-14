/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 16:21:06
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-14 11:27:03
*/
(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name MeasurementGoalService
* @module metricapp
* @requires $http
* @requires $rootScope
* @requires $cookies
*
* @description
* Submits a MeasurementGoal.
************************************************************************************/

angular.module('metricapp')

.service('MeasurementGoalService', MeasurementGoalService);

MeasurementGoalService.$inject = [
    '$http', '$rootScope', '$cookies', '$window', 'AuthService'];

function MeasurementGoalService($http, $rootScope, $cookies, $window, AuthService) {

    var service = this;

    service.measurementGoalToUpdate = {};
    service.submitMeasurementGoal = submitMeasurementGoal;
    service.getMeasurementGoals = getMeasurementGoals;
    service.getMeasurementGoalsBy = getMeasurementGoalsBy;
    service.toUpdateMeasurementGoal = toUpdateMeasurementGoal;
    service.getUpdateMeasurementGoal = getUpdateMeasurementGoal;
    service.getOrganizationalGoalById = getOrganizationalGoalById;
    service.getMeasurementGoalExternals = getMeasurementGoalExternals;
    service.getExternalContextFactors = getExternalContextFactors;
    service.getExternalAssumptions = getExternalAssumptions;

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Submits a MeasurementGoal.
    * @param {MeasurementGoal} Measurement Goal to submit.
    ********************************************************************************/
    function submitMeasurementGoal(measurementGoal) {
        console.log('SUBMIT measurementGoal WITH ' +
        'name= '  + measurementGoal.name + ' & ' +	
        'object=' + measurementGoal.object + ' & ' +
        'purpose=' + measurementGoal.purpose + ' & ' +
        'viewPoint=' + measurementGoal.viewPoint + ' & ' +
        'focus=' + measurementGoal.focus);

        /*var metadata = {
        	tags:['saassad','sadsadsad','sadsadsad'],
  			creatorId:'3',
      		state:'Created',
      		releaseNote:'sakjbsakjabskjsa'
        };

        var submit = {
        	userId: '26',
        	name: 'name',
        	object: measurementGoal.object,
        	purpose: measurementGoal.purpose,
        	viewPoint: measurementGoal.viewPoint,
        	focus: measurementGoal.focus,
        	metadata: metadata};*/
                
        console.log(JSON.stringify(measurementGoal));

        //$window.alert(JSON.stringify(submit));
        //$http.post
        //submit).then(

        return $http.put('http://localhost:8080/metricapp-server-gitlab/measurementgoal/', measurementGoal).then(
            function(response) {
                //var message = "Success!, id: "+ angular.fromJson(response.data).measurementGoals[0].metadata.id;
                console.log('SUCCESS GET measurementGoal');
                var message = response.data;
                return message;
            },
            function(response) {
                var message = response.data;
                console.log('FAILURE GET measurementGoal');
                return message;
            }
        );

    }


    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get measurement goals.
    ********************************************************************************/
    
    function getMeasurementGoals(state) {
        console.log('GET Measurement Goals with userid='+AuthService.getUser().username+'&state='+state);

        return $http.get('http://localhost:8080/metricapp-server-gitlab/measurementgoal?userid='+AuthService.getUser().username+'&state='+state).then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET MEASUREMENT GOALS');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET MEASUREMENT GOALS');
                console.log(message);
                return message;
            }
        );

    }

    /********************************************************************************
    * @ngdoc method
    * @name getExternalContextFactors
    * @description
    * Get external context factors.
    ********************************************************************************/
    function getExternalContextFactors() {

        return $http.get('http://localhost:8080/metricapp-server-gitlab/contextfactor/all').then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET EXTERNAL CONTEXT FACTORS');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET EXTERNAL CONTEXT FACTORS');
                console.log(message);
                return message;
            }
        );

    }

    /********************************************************************************
    * @ngdoc method
    * @name getExternalAssumptions
    * @description
    * Get external assumptions.
    ********************************************************************************/
    function getExternalAssumptions() {

        return $http.get('http://localhost:8080/metricapp-server-gitlab/assumption/all').then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET EXTERNAL ASSUMPTIONS');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET EXTERNAL ASSUMPTIONS');
                console.log(message);
                return message;
            }
        );

    }

    /********************************************************************************
    * @ngdoc method
    * @name getMeasurementGoalExternals
    * @description
    * Get measurement goal externals.
    ********************************************************************************/
    
    function getMeasurementGoalExternals(measurementGoalId) {
        
        return $http.get('http://localhost:8080/metricapp-server-gitlab/external/measurementgoal?id='+measurementGoalId).then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET MEASUREMENT GOALS');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET MEASUREMENT GOALS');
                console.log(message);
                return message;
            }
        );

    }

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get measurement goals.
    ********************************************************************************/
    
    function getOrganizationalGoalById(organizationalGoalId) {
        
        //return $http.get('http://localhost:8080/metricapp-server-gitlab/external/organizationalgoal?id='+organizationalGoalId).then(
        
        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/external/organizationalgoal?id=1').then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET ORGANIZATIONAL GOAL');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET ORGANIZATIONAL GOAL');
                console.log(message);
                return message;
            }
        );

    }


    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get a measurement goal
    * @param {MeasurementGoal} field key.
    * @param {MeasurementGoal} field value .
    ********************************************************************************/
    
    function getMeasurementGoalsBy(keyword,field) {
        
        return $http.get("http://localhost:8080/metricapp-server-gitlab/measurementgoal?" + field + "=" + keyword).then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET MEASUREMENT GOALS');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET MEASUREMENT GOALS');
                console.log(message);
                return message;
            }
        );

    }

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Update a measurement goal, when a controller asks for it to show a form
    * @param {MeasurementGoal} measurement goal to update.
    ********************************************************************************/
    function toUpdateMeasurementGoal(toUpdate){
        service.measurementGoalToUpdate = toUpdate;
    }

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get measurement goal to update
    ********************************************************************************/
    function getUpdateMeasurementGoal(){
        return service.measurementGoalToUpdate;
    }

}

})();