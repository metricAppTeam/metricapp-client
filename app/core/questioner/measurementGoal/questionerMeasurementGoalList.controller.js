(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name PageController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the navbar for all users.
* Realizes the control layer for {navbar.view}.
************************************************************************************/

angular.module('metricapp')

.controller('QuestionerMeasurementGoalListCtrl', QuestionerMeasurementGoalListCtrl);

QuestionerMeasurementGoalListCtrl.$inject = ['$location', '$window', 'MeasurementGoalService', 
	'QuestionStorageFactory', 'QuestionerMeasurementGoalModalFactory'];

function QuestionerMeasurementGoalListCtrl($location, $window, MeasurementGoalService, QuestionStorageFactory, MeasurementGoalModalFactory) {

    var ctrl = this;

    ctrl.getMeasurementGoals = function(){
       MeasurementGoalService.getMeasurementGoalsBy(QuestionStorageFactory.getQuestioner().username, "questionerId").then(
            function(data) {
                console.log(data);
                ctrl.measurementGoals = data.measurementGoals;
            },
            function(data) {
                alert('Error retrieving Measurement Goals');
            }
        );
    };

    ctrl.open = function (index) {
        QuestionStorageFactory.setMeasurementGoal(ctrl.measurementGoals[index]);
        MeasurementGoalModalFactory.openMeasurementGoalModal();
    };

	this.getMeasurementGoals();
    

}

})();