/*
* @Author: alessandro.fazio
* @Date:   2016-07-15 13:03:51
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 19:33:26
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
    vm.isForApproval = isForApproval;
    vm.isToReject = isToReject;
    vm.isToSuspend = isToSuspend;
    vm.isToApprove = isToApprove;
    vm.closeModal = closeModal;
    vm.goToUpdateMeasurementGoal = goToUpdateMeasurementGoal;
    vm.changeState = changeState;

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
       
        //Check if is mine
        if (AuthService.getUser().role != 'METRICATOR' ||
            vm.measurementGoalDialog.metricatorId != AuthService.getUser().username) 
            return false;

        //Check if there's a transitional state
        if (vm.measurementGoalDialog.metadata.state == 'Created' ||
            vm.measurementGoalDialog.metadata.state == 'Pending' || 
            vm.measurementGoalDialog.metadata.state == 'Suspended')
            return false;

        return true;
    }

    /********************************************************************************
    * @ngdoc method
    * @name isForApproval
    * @description
    * Measurement Goal can be sent for approval.
    ********************************************************************************/ 
    function isForApproval(){
        return AuthService.getUser().role == 'METRICATOR' &&
        vm.measurementGoalDialog.metricatorId == AuthService.getUser().username && 
        vm.measurementGoalDialog.metadata.state == 'OnUpdateQuestionerEndpoint';
    }

    /********************************************************************************
    * @ngdoc method
    * @name isToReject
    * @description
    * Measurement Goal can be rejected.
    ********************************************************************************/ 
    function isToReject(){
        return AuthService.getUser().role == 'EXPERT' && 
        vm.measurementGoalDialog.metadata.state == 'Pending';
    }

    /********************************************************************************
    * @ngdoc method
    * @name isToApproved
    * @description
    * Measurement Goal can be approved.
    ********************************************************************************/ 
    function isToApprove(){
        return AuthService.getUser().role == 'EXPERT' && 
        vm.measurementGoalDialog.metadata.state == 'Pending';
    }

    /********************************************************************************
    * @ngdoc method
    * @name isToSuspend
    * @description
    * Measurement Goal can be suspended.
    ********************************************************************************/ 
    function isToSuspend(){
        return AuthService.getUser().role == 'EXPERT' && 
        vm.measurementGoalDialog.metadata.state == 'Approved'
        vm.measurementGoalDialog.metadata.state == 'Rejected';
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

    /********************************************************************************
    * @ngdoc method
    * @name changeState
    * @description
    * Send MeasurementGoal to change state.
    ********************************************************************************/ 
    function changeState(){
        closeModal();
        $location.path('/measurementgoalchangestate');
    }

    /*ctrl.editQuestion = function(question){
        $uibModalInstance.dismiss("closing");
        QuestionStorageFactory.setQuestion(question);
        $location.path('/questionUpdate');
    };*/


}

})();