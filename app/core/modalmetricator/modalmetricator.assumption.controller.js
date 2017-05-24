/*
* @Author: alessandro.fazio
* @Date:   2016-07-15 13:03:51
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 00:06:59
*/

(function() {'use strict';

angular.module('metricapp')

.controller('AssumptionModalCtrl', AssumptionModalCtrl);

AssumptionModalCtrl.$inject = ['$window', '$uibModal', 'AssumptionService', '$uibModalInstance'];

function AssumptionModalCtrl($window, $uibModal, AssumptionService, $uibModalInstance) {

	var vm = this;

	vm.assumptionDialog = AssumptionService.getAssumptionDialog();
    vm.setAssumptionDialog = setAssumptionDialog;
    //vm.addAssumptionToMeasurementGoal = setAssumptionDialog;

    vm.closeModal = function(){
        $uibModalInstance.dismiss("closing");            
    };

    function setAssumptionDialog(assumptionToAssignId){
            AssumptionService.storeAssumption(vm.externalAssumptionDialog[assumptionToAssignId]);
            AssumptionModalService.openAssumptionModal();
    }

    /*function addAssumptionToMeasurementGoal(obj){
        console.log("Adding item");
        if (MeasurementGoalService.addSomethingToMeasurementGoal('Assumption',obj)){
            $window.alert('Item added');
        }
        else {
            $window.alert('You cannot add this item');
        }
        
    }*/

    /*ctrl.editQuestion = function(question){
        $uibModalInstance.dismiss("closing");
        QuestionStorageFactory.setQuestion(question);
        $location.path('/questionUpdate');
    };*/


}

})();