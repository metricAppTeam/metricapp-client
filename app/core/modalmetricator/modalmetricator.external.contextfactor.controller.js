/*
* @Author: alessandro.fazio
* @Date:   2016-07-15 23:57:25
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 00:03:28
*/

(function() {'use strict';

angular.module('metricapp')

.controller('ExternalContextFactorModalCtrl', ExternalContextFactorModalCtrl);

ExternalContextFactorModalCtrl.$inject = ['$window', '$uibModal', 'ContextFactorService', '$uibModalInstance', 'ContextFactorModalService', 'MeasurementGoalService'];

function ExternalContextFactorModalCtrl($window, $uibModal, ContextFactorService, $uibModalInstance, ContextFactorModalService, MeasurementGoalService) {

	var vm = this;

	vm.externalContextFactorDialog = ContextFactorService.getExternalContextFactorDialog();
	
	//console.log("External Metric Dialog");
	//console.log(vm.externalContextFactorDialog);

	vm.closeModal = closeModal;
	vm.setContextFactorDialog = setContextFactorDialog;
	vm.addContextFactorToMeasurementGoal = addContextFactorToMeasurementGoal;

	
    function closeModal(){
        $uibModalInstance.dismiss("closing");            
    };

    function setContextFactorDialog(contextFactorToAssignId){
            ContextFactorService.storeContextFactor(vm.externalContextFactorDialog[contextFactorToAssignId]);
            ContextFactorModalService.openContextFactorModal();
    }

    function addContextFactorToMeasurementGoal(obj){
    	console.log("Adding item");
    	if (MeasurementGoalService.addSomethingToMeasurementGoal('ContextFactor',obj)){
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