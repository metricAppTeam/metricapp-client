/*
* @Author: alessandro.fazio
* @Date:   2016-07-16 00:04:59
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 00:05:43
*/
/*
* @Author: alessandro.fazio
* @Date:   2016-07-15 23:57:25
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 00:03:28
*/

(function() {'use strict';

angular.module('metricapp')

.controller('ExternalAssumptionModalCtrl', ExternalAssumptionModalCtrl);

ExternalAssumptionModalCtrl.$inject = ['$window', '$uibModal', 'AssumptionService', '$uibModalInstance', 'AssumptionModalService', 'MeasurementGoalService'];

function ExternalAssumptionModalCtrl($window, $uibModal, AssumptionService, $uibModalInstance, AssumptionModalService, MeasurementGoalService) {

	var vm = this;

	vm.externalAssumptionDialog = AssumptionService.getExternalAssumptionDialog();
	
	//console.log("External Metric Dialog");
	//console.log(vm.externalAssumptionDialog);

	vm.closeModal = closeModal;
	vm.setAssumptionDialog = setAssumptionDialog;
	vm.addAssumptionToMeasurementGoal = addAssumptionToMeasurementGoal;

	
    function closeModal(){
        $uibModalInstance.dismiss("closing");            
    };

    function setAssumptionDialog(assumptionToAssignId){
            AssumptionService.storeAssumption(vm.externalAssumptionDialog[assumptionToAssignId]);
            AssumptionModalService.openAssumptionModal();
    }

    function addAssumptionToMeasurementGoal(obj){
    	console.log("Adding item");
    	if (MeasurementGoalService.addSomethingToMeasurementGoal('Assumption',obj)){
    		$window.alert('Item added');
    	}
    	else {
    		$window.alert('You cannot add this item');
    	}
    	
    }

    /*ctrl.editQuestion = function(question){
        $uibModalInstance.dismiss("closing");
        QuestionStorageFactory.setQuestion(question);
        $location.path('/questionUpdate');
    };*/


}

})();