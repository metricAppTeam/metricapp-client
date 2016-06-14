/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 15:53:20
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-06-14 16:57:09
*/
(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name MeasurementGoalController
* @module metricapp
* @requires $scope
* @requires $location
* @description
* Manages the MeasurementGoal.
* Realizes the control layer for `measurementgoal.view`.
************************************************************************************/

angular.module('metricapp')

.controller('MeasurementGoalController', MeasurementGoalController);

MeasurementGoalController.$inject = ['$scope', '$location','MeasurementGoalService'];

function MeasurementGoalController($scope, $location, MeasurementGoalService) {

    var vm = this;

    vm.submit = submit;
    vm.cancelSubmit = cancelSubmit;

    _init();

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Submits a MeasurementGoal.
    ********************************************************************************/
    function submitMeasurementGoal() {
        var measurementGoal = {
        	name : vm.name,
        	object : vm.object,
        	purpose : vm.purpose,
        	viewPoint : vm.viewPoint,
        	focus : vm.focus  		
        };


        MeasurementGoalService.submitMeasurementGoal(measurementGoal).then(
            function(message) {
                alert(message);
                $location.path('/');
            },
            function(message) {
                alert(message);
            }
        );
        /*
        AuthService.signup(user, profile).then(
            function(message) {
                alert(message);
                $location.path('/');
            },
            function(message) {
                alert(message);
            });*/
    }

    /********************************************************************************
    * @ngdoc method
    * @name cancelSignup
    * @description
    * Cancels the ongoing submit.
    ********************************************************************************/
    function cancelSumbit() {
        $location.path('/');
    }

    /********************************************************************************
    * @ngdoc method
    * @name _init
    * @description
    * Initializes the controller.
    ********************************************************************************/
    function _init() {
        vm.loading = false;
    }

}

})();
