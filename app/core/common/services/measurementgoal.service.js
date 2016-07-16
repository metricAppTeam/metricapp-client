/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 16:21:06
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 16:36:58
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
    service.countMeasurementGoalsByState = countMeasurementGoalsByState;
    service.addSomethingToMeasurementGoal = addSomethingToMeasurementGoal;

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Submits a MeasurementGoal.
    * @param {MeasurementGoal} Measurement Goal to submit.
    ********************************************************************************/
    function submitMeasurementGoal(measurementGoal, state) {
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
                
        console.log("PUT MEASUREMENT GOAL");        
        console.log(JSON.stringify(measurementGoal));
        //return false;
        //$window.alert(JSON.stringify(submit));
        //$http.post
        //submit).then(

        return $http.put('http://qips.sweng.uniroma2.it/metricapp-server/measurementgoal/', measurementGoal).then(
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
    * @name submitMeasurementGoal
    * @description
    * Get measurement goals.
    ********************************************************************************/
    
    function getMeasurementGoals(state) {
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
    * @name submitMeasurementGoal
    * @description
    * Get measurement goals.
    ********************************************************************************/
    
    function getOrganizationalGoalById(organizationalGoalId) {
        
        //return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/external/organizationalgoal?id='+organizationalGoalId).then(
        
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
    /*function addSomethingToMeasurementGoal(typeObject, id){

        var toAdd = [];
        var dialog = [];

        switch(typeObject) {
            case 'Metric':
                toAdd = vm.metrics;
                dialog = vm.externalMetricDialog;
                break;
            case 'Question':
                toAdd = vm.questions;
                dialog = vm.externalQuestionDialog;
                break;
            case 'ContextFactor':
                toAdd = vm.contextFactors;
                dialog = vm.externalContextFactorDialog;
                break;
            case 'Assumption':
                toAdd = vm.assumptions;
                dialog = vm.externalAssumptionDialog;
                break;
        }

        if (typeObject == 'Metric' || typeObject == 'Question') {
            console.log('METRIC OR QUESTION UPDATE');
            for(var i=0; i<toAdd.length; i++){
                if(dialog[index].metadata.id == toAdd[i].metadata.id){
                    $window.alert('You cannot add an item twice!');
                    return true;
                }
            }
        }
        else {
            console.log('CONTEXTFACTOR OR ASSUMPTION UPDATE');
            console.log(dialog[index]);
            for(var i=0; i<toAdd.length; i++){
                if(dialog[index].id == toAdd[i].id){
                    $window.alert('You cannot add an item twice!');
                    return true;
                }
            }
        }

        var pointerBus = {
           objIdLocalToPhase : "",
           typeObj : typeObject,
           instance : dialog[index].metadata.id,
           busVersion : "",
           tags: []
        };

        switch(typeObject) {
            case 'Metric':
                vm.measurementGoalDialog.metrics.push(pointerBus);
                vm.metrics.push(dialog[index]);
                break;
            case 'Question':
                vm.measurementGoalDialog.questions.push(pointerBus);
                vm.questions.push(dialog[index]);
                break;
            case 'ContextFactor':
                vm.measurementGoalDialog.contextFactors.push(pointerBus);
                vm.contextFactors.push(dialog[index]);
                break;
            case 'Assumption':
                vm.measurementGoalDialog.assumptions.push(pointerBus);
                vm.assumptions.push(dialog[index]);
                break;
        }
        
        $window.alert('Item added');
        console.log(vm.measurementGoalDialog);
        return false;
    }*/
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
                if (checkDouble(service.measurementGoalToUpdate.metrics,obj)){
                	service.measurementGoalToUpdate.metrics.push(obj);
                    service.measurementGoalToUpdate.measurementGoal.metrics.push(pointerBus);
                	return true;
                }
                else{
                	return false;
                } 
                break;
            case 'Question':
                if (checkDouble(service.measurementGoalToUpdate.questions,obj)){
                	service.measurementGoalToUpdate.questions.push(obj);
                    service.measurementGoalToUpdate.measurementGoal.questions.push(pointerBus);
                	return true;
                }
                else{
                	return false;
                }
                break;
            case 'ContextFactor':
                if (checkDouble(service.measurementGoalToUpdate.contextFactors,obj)){
                	service.measurementGoalToUpdate.contextFactors.push(obj);
                    service.measurementGoalToUpdate.measurementGoal.contextFactors.push(pointerBus);
                    return true;
                }
                else{
                	return false;
                }
                break;
            case 'Assumption':
            	if (checkDouble(service.measurementGoalToUpdate.assumptions,obj)){
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

    function checkDouble(toCheck, item){
    	//return (dialog.indexOf(obj) !== -1);
        
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
                    if (toCheck[j].id == item.id) return false;    
                }
                else{
                    if (toCheck[j].metadata.id == item.id) return false;                            
                }    
            }
        }
        
    	return true;
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