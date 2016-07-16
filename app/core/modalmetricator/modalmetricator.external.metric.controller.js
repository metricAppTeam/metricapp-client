/*
* @Author: alessandro.fazio
* @Date:   2016-07-15 13:03:51
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-15 13:39:26
*/

(function() {'use strict';

angular.module('metricapp')

.controller('ExternalMetricModalCtrl', ExternalMetricModalCtrl);

ExternalMetricModalCtrl.$inject = ['$window', '$uibModal', 'MetricService', '$uibModalInstance', 'MetricModalService', 'MeasurementGoalService'];

function ExternalMetricModalCtrl($window, $uibModal, MetricService, $uibModalInstance, MetricModalService, MeasurementGoalService) {

	var vm = this;

	vm.externalMetricDialog = MetricService.getExternalMetricDialog();
	
	//console.log("External Metric Dialog");
	//console.log(vm.externalMetricDialog);

	vm.closeModal = closeModal;
	vm.setMetricDialog = setMetricDialog;
	vm.addMetricToMeasurementGoal = addMetricToMeasurementGoal;

	
    function closeModal(){
        $uibModalInstance.dismiss("closing");            
    };

    function setMetricDialog(metricToAssignId){
            MetricService.storeMetric(vm.externalMetricDialog[metricToAssignId]);
            MetricModalService.openMetricModal();
    }

    function addMetricToMeasurementGoal(obj){
    	console.log("Adding item");
    	if (MeasurementGoalService.addSomethingToMeasurementGoal('Metric',obj)){
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