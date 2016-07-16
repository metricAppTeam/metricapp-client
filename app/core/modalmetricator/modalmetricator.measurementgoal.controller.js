/*
* @Author: alessandro.fazio
* @Date:   2016-07-15 13:03:51
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-15 13:39:26
*/

(function() {'use strict';

angular.module('metricapp')

.controller('MeasurementGoalModalCtrl', MeasurementGoalModalCtrl);

MeasurementGoalModalCtrl.$inject = ['$window', '$uibModal', 'MeasurementGoalService', '$uibModalInstance', 'AuthService', '$location'];

function MeasurementGoalModalCtrl($window, $uibModal, MeasurementGoalService, $uibModalInstance, AuthService, $location) {

	var vm = this;

	vm.measurementGoalDialog = MeasurementGoalService.getUpdateMeasurementGoal().measurementGoal;
    vm.metrics = MeasurementGoalService.getUpdateMeasurementGoal().metrics;
	vm.contextFactors = MeasurementGoalService.getUpdateMeasurementGoal().contextFactors;
	vm.assumptions = MeasurementGoalService.getUpdateMeasurementGoal().assumptions;
	vm.organizationalGoal = MeasurementGoalService.getUpdateMeasurementGoal().organizationalGoal;
	vm.instanceProject = MeasurementGoalService.getUpdateMeasurementGoal().instanceProject;
	vm.functionJavascript = vm.measurementGoalDialog.interpretationModel.functionJavascript;
	vm.isModifiable = isModifiable;
    vm.isSubmittable = isSubmittable;
    vm.closeModal = closeModal;
    vm.goToUpdateMeasurementGoal = goToUpdateMeasurementGoal;

    function closeModal(){
        $uibModalInstance.dismiss("closing");            
    };

    /********************************************************************************
    * @ngdoc method
    * @name isModifiable
    * @description
    * Measurement Goal can be updated.
    ********************************************************************************/
    function isModifiable(){
       return vm.measurementGoalDialog.metricatorId == AuthService.getUser().username && !(vm.measurementGoalDialog.metadata.state == 'Pending');
    }

    /********************************************************************************
    * @ngdoc method
    * @name isSubmittable
    * @description
    * Measurement Goal can be submitted.
    ********************************************************************************/ 
    function isSubmittable(){
        return vm.measurementGoalDialog.metricatorId == AuthService.getUser().username && vm.measurementGoalDialog.metadata.state == 'OnUpdateQuestionerEndpoint';
    }

    /********************************************************************************
    * @ngdoc method
    * @name goToUpdateMeasurementGoal
    * @description
    * Go to update a Measurement Goal.
    ********************************************************************************/ 
    function goToUpdateMeasurementGoal(){
    	closeModal();
    	$location.path('/measurementgoal');
    }

    /*ctrl.editQuestion = function(question){
        $uibModalInstance.dismiss("closing");
        QuestionStorageFactory.setQuestion(question);
        $location.path('/questionUpdate');
    };*/


}

})();