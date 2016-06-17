/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 15:53:20
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-06-14 16:57:09
*/
(function () { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name MetricatorController
* @module metricapp
* @requires $scope
* @requires $location
* @description
* Manages the MetricatorGoal.
* Realizes the control layer for `metricator.view`.
************************************************************************************/

angular.module('metricapp')

.controller('MetricatorController', MetricatorController);

MetricatorController.$inject = ['$scope', '$location','MetricatorService','$window'];

function MetricatorController($scope, $location, MetricatorService, $window) {

    var vm = this;
    
    vm.measurementGoals = []; 
    
    vm.getMeasurementGoals = getMeasurementGoals;
    
    vm.getMeasurementGoals();
    _init();

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Submits a MeasurementGoal.
    ********************************************************************************/
    function getMeasurementGoals(){
         MetricatorService.getMeasurementGoals().then(
            function(data) {
                console.log(data.measurementGoals);
                vm.measurementGoals = data.measurementGoals;
            },
            function(data) {
                alert('Error retriving Measurement Goals');
            }
        );
    };
    
    
    /*
    function getMeasurementGoals() {
        
        /*var measurementGoal = {
            id: mtc.id,
        	name : mtc.name,
        	creationDate : mtc.creationDate,
        	lastVersionDate : mtc.lastVersionDate,
        	releaseNote : mtc.releaseNote,
        	state : mtc.state 		
        };
        MetricatorService.getMeasurementGoals().then(
            function(data) {
            
                measurementGoal.id = data.id;
                measurementGoal.name = data.name;
                measurementGoal.creationDate = data.creationDate;
                measurementGoal.lastVersionDate = data.lastVersionDate;
                measurementGoal.releaseNote = data.releaseNote;
                measurementGoal.state = data.state;
                $location.path('/measurementgoal');
                
                return data.measurementGoals;
                
                
            },
            function(message) {
                alert('Error retriving Measurement Goals');
            }
        );*/
        
    }


    /********************************************************************************
    * @ngdoc method
    * @name _init
    * @description
    * Initializes the controller.
    ********************************************************************************/
    function _init() {
        //mtc.loading = false;
        /*MetricatorService.getMeasurementGoals().then(
            function(message) {
                return message.measurementGoals;
                 },
            function(message) {
                alert('Error retriving Measurement Goals');
            }
        );*/
    
        //mtc.getMeasurementGoals();
    }

})();
