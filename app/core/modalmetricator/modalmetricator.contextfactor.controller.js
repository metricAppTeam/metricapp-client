/*
* @Author: alessandro.fazio
* @Date:   2016-07-15 13:03:51
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 00:06:45
*/

(function() {'use strict';

angular.module('metricapp')

.controller('ContextFactorModalCtrl', ContextFactorModalCtrl);

ContextFactorModalCtrl.$inject = ['$window', '$uibModal', 'ContextFactorService', '$uibModalInstance'];

function ContextFactorModalCtrl($window, $uibModal, ContextFactorService, $uibModalInstance) {

	var vm = this;

	vm.contextFactorDialog = ContextFactorService.getContextFactorDialog();
    console.log('vm.contextFactorDialog');
    console.log(vm.contextFactorDialog);

    vm.setContextFactorDialog = setContextFactorDialog;
    //vm.addContextFactorToMeasurementGoal = addContextFactorToMeasurementGoal;

    vm.closeModal = function(){
        $uibModalInstance.dismiss("closing");            
    };

    function setContextFactorDialog(contextFactorToAssignId){
            ContextFactorService.storeContextFactor(vm.contextFactorDialog[contextFactorToAssignId]);
            ContextFactorModalService.openContextFactorModal();
    }

    /*function addContextFactorToMeasurementGoal(obj){
        console.log("Adding item");
        if (MeasurementGoalService.addSomethingToMeasurementGoal('ContextFactor',obj)){
            $window.alert('Item added');
        }
        else {
            $window.alert('You cannot add this item');
        }
        
    }
    */

    /*ctrl.editQuestion = function(question){
        $uibModalInstance.dismiss("closing");
        QuestionStorageFactory.setQuestion(question);
        $location.path('/questionUpdate');
    };*/


}

})();