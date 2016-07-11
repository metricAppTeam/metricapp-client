/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 16:21:06
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-10 22:41:13
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
    '$http', '$rootScope', '$cookies', '$window'];

function MeasurementGoalService($http, $rootScope, $cookies, $window) {

    var service = this;

    service.measurementGoalToUpdate = {};
    service.submitMeasurementGoal = submitMeasurementGoal;
    service.getMeasurementGoals = getMeasurementGoals;
    service.getMeasurementGoalsBy = getMeasurementGoalsBy;
    service.toUpdateMeasurementGoal = toUpdateMeasurementGoal;
    service.getUpdateMeasurementGoal = getUpdateMeasurementGoal;
    service.getOrganizationalGoalById = getOrganizationalGoalById;

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
<<<<<<< HEAD
        	metadata: metadata};

=======
        	metadata: metadata};*/
                
>>>>>>> 6b0ce4bf8b822ede89b2058f2f75839d5a47f20b
        $window.alert(JSON.stringify(submit));
        //$http.post
        //submit).then(

<<<<<<< HEAD
        return $http.post('http://localhost:8080/metricapp-server/measurementgoal/', submit).then(
=======
        return $http.put('http://localhost:8080/metricapp-server-gitlab/measurementgoal/', measurementGoal).then(
>>>>>>> 6b0ce4bf8b822ede89b2058f2f75839d5a47f20b
            function(response) {
                var message = "Success!, id: "+ angular.fromJson(response.data).measurementGoals[0].metadata.id;
                console.log('SUCCESS GET measurementGoal');
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

    function getMeasurementGoals() {
<<<<<<< HEAD

        return $http.get('http://localhost:8080/metricapp-server/measurementgoal?userid=metricator').then(
=======
        
        return $http.get('http://localhost:8080/metricapp-server-gitlab/measurementgoal?userid=metricator').then(
>>>>>>> 6b0ce4bf8b822ede89b2058f2f75839d5a47f20b
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

        return $http.get("http://localhost:8080/metricapp-server/measurementgoal?" + field + "=" + keyword).then(
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
