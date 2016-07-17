/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 16:21:06
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-17 16:15:05
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
* Service for MeasurementGoal.
************************************************************************************/

angular.module('metricapp')

.service('MeasurementGoalService', MeasurementGoalService);

MeasurementGoalService.$inject = [
    '$http', '$rootScope', '$cookies', '$window', 'AuthService'];

function MeasurementGoalService($http, $rootScope, $cookies, $window, AuthService) {

    var service = this;

    service.measurementGoalToUpdate = {};
    service.submitMeasurementGoal = submitMeasurementGoal;
    service.getMeasurementGoalsByState = getMeasurementGoalsByState;
    service.getMeasurementGoalsBy = getMeasurementGoalsBy;
    service.getMyMeasurementGoals = getMyMeasurementGoals;
    service.toUpdateMeasurementGoal = toUpdateMeasurementGoal;
    service.getUpdateMeasurementGoal = getUpdateMeasurementGoal;
    service.getMeasurementGoalExternals = getMeasurementGoalExternals;
    service.getExternalContextFactors = getExternalContextFactors;
    service.getExternalAssumptions = getExternalAssumptions;
    service.countMeasurementGoalsByState = countMeasurementGoalsByState;
    service.addSomethingToMeasurementGoal = addSomethingToMeasurementGoal;

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
                
        console.log("PUT MEASUREMENT GOAL");        
        console.log(JSON.stringify(measurementGoal));
        
        //TODO leave here
        return false;

        return $http.put('http://qips.sweng.uniroma2.it/metricapp-server/measurementgoal/', measurementGoal).then(
            function(response) {
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
    * @name countMeasurementGoalsByState
    * @description
    * Count Measurement Goals.
    ********************************************************************************/
    function countMeasurementGoalsByState(state) {
        console.log('GET Measurement Goals with userid='+AuthService.getUser().username+'&state='+state);

        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/measurementgoal/count/?userid='+AuthService.getUser().username+'&state='+state).then(
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
    * @name getMeasurementGoalsByState
    * @description
    * Get measurement goals by state.
    ********************************************************************************/
    function getMeasurementGoalsByState(state) {
        console.log('GET Measurement Goals with userid='+AuthService.getUser().username+'&state='+state);

        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/measurementgoal?userid='+AuthService.getUser().username+'&state='+state).then(
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
    * @name getMyMeasurementGoals
    * @description
    * Get measurement goals by user.
    ********************************************************************************/
    function getMyMeasurementGoals() {
        console.log('GET Measurement Goals with userid='+AuthService.getUser().username);

        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/measurementgoal?userid='+AuthService.getUser().username).then(
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

        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/external/contextfactor/all').then(
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

        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/external/assumption/all').then(
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
        
        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/external/measurementgoal?id='+measurementGoalId).then(
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
    * @name getMeasurementGoalsBy
    * @description
    * Get a measurement goal
    * @param {MeasurementGoal} field key.
    * @param {MeasurementGoal} field value .
    ********************************************************************************/
    function getMeasurementGoalsBy(keyword,field) {
        
        return $http.get("http://qips.sweng.uniroma2.it/metricapp-server/measurementgoal?" + field + "=" + keyword).then(
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
    * @name addSomethingToMeasurementGoal
    * @description
    * Add something to measurement goal.
    ********************************************************************************/
    function addSomethingToMeasurementGoal(typeObject, obj){

        var objId = (obj.metadata==undefined) ? obj.id : obj.metadata.id;

        var pointerBus = {
           objIdLocalToPhase : "",
           typeObj : typeObject,
           instance : objId,
           busVersion : "",
           tags: []
        };

    	switch(typeObject) {
            case 'Metric':
                if (_checkDouble(service.measurementGoalToUpdate.metrics,obj)){
                	service.measurementGoalToUpdate.metrics.push(obj);
                    service.measurementGoalToUpdate.measurementGoal.metrics.push(pointerBus);
                	return true;
                }
                else{
                	return false;
                } 
                break;
            case 'Question':
                if (_checkDouble(service.measurementGoalToUpdate.questions,obj)){
                	service.measurementGoalToUpdate.questions.push(obj);
                    service.measurementGoalToUpdate.measurementGoal.questions.push(pointerBus);
                	return true;
                }
                else{
                	return false;
                }
                break;
            case 'ContextFactor':
                if (_checkDouble(service.measurementGoalToUpdate.contextFactors,obj)){
                	service.measurementGoalToUpdate.contextFactors.push(obj);
                    service.measurementGoalToUpdate.measurementGoal.contextFactors.push(pointerBus);
                    return true;
                }
                else{
                	return false;
                }
                break;
            case 'Assumption':
            	if (_checkDouble(service.measurementGoalToUpdate.assumptions,obj)){
                	service.measurementGoalToUpdate.assumptions.push(obj);
                    service.measurementGoalToUpdate.measurementGoal.assumptions.push(pointerBus);
                    return true;
                }
                else{
                	return false;
                }
                break;
        }
    }

    function _checkDouble(toCheck, item){

        if (item.metadata == undefined){
            for (var j=0, len = toCheck.length; j<len ; j++){
                if (toCheck[j].metadata == undefined){
                    if (toCheck[j].id == item.id) return false;    
                }
                else{
                    if (toCheck[j].metadata.id == item.id) return false;                            
                }
                    
            }
        }
        else {
            for (var j=0, len = toCheck.length; j<len ; j++){   
                if (toCheck[j].metadata == undefined){
                    if (toCheck[j].id == item.metadata.id) return false;    
                }
                else{
                    if (toCheck[j].metadata.id == item.metadata.id) return false;                            
                }    
            }
        }
        
    	return true;
    }

    /********************************************************************************
    * @ngdoc method
    * @name toUpdateMeasurementGoal
    * @description
    * Update a measurement goal, when a controller asks for it to show a form
    * @param {MeasurementGoal} measurement goal to update.
    ********************************************************************************/
    function toUpdateMeasurementGoal(toUpdate){
        service.measurementGoalToUpdate = toUpdate;
    }

    /********************************************************************************
    * @ngdoc method
    * @name getUpdateMeasurementGoal
    * @description
    * Get measurement goal to update
    ********************************************************************************/
    function getUpdateMeasurementGoal(){
        return service.measurementGoalToUpdate;
    }

}

})();
