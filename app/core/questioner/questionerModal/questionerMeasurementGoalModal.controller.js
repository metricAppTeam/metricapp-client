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

.controller('QuestionerMeasurementGoalModalCtrl', QuestionerMeasurementGoalModalCtrl);

QuestionerMeasurementGoalModalCtrl.$inject = ['$location', '$uibModalInstance', '$window', 'MeasurementGoalService', 'QuestionStorageFactory', 
    'QuestionsCrudFactory'];

function QuestionerMeasurementGoalModalCtrl($location, $uibModalInstance, $window, MeasurementGoalService, QuestionStorageFactory, 
    QuestionsCrudFactory) {

        var ctrl = this;

        ctrl.mgDialog = QuestionStorageFactory.getMeasurementGoal();
        ctrl.stateIsWaiting = ctrl.mgDialog.metadata.state == QuestionsCrudFactory.STATES.ONUPDATEWAITING;
        ctrl.showReleaseNote = false;

        ctrl.closeModal = function(){
            $uibModalInstance.dismiss("closing");            
            ctrl.mgDialog.metadata.releaseNote = ctrl.oldReleaseNote;
        };

        ctrl.showQuestions = function(){
        	$uibModalInstance.dismiss("closing"); 
        	QuestionStorageFactory.setMeasurementGoal(ctrl.mgDialog);
        	$location.path('/measurementGoalQuestionList');
        };

        ctrl.addExistingQuestion = function(){
        	$uibModalInstance.dismiss("closing");
        	QuestionStorageFactory.setMeasurementGoal(ctrl.mgDialog); 
        	$location.path('/measurementGoalAddExistingQuestion');
        };

        ctrl.askForQuestionEndpoint = function(){
            ctrl.mgDialog.metadata.state = QuestionsCrudFactory.STATES.ONUPDATEENDPOINT;
            MeasurementGoalService.submitGoalService(ctrl.mgDialog);
            ctrl.oldReleaseNote = ctrl.mgDialog.metadata.releaseNote;
            ctrl.stateIsWaiting = false;
            ctrl.showReleaseNote = false;
        };

        ctrl.inputReleaseNote = function(){
            ctrl.showReleaseNote = true;
            ctrl.oldReleaseNote = angular.copy(ctrl.mgDialog.metadata.releaseNote);
        };

    }

})();
