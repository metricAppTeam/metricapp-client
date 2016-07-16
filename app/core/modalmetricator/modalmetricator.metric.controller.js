/*
* @Author: alessandro.fazio
* @Date:   2016-07-15 13:03:51
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-15 13:39:26
*/

(function() {'use strict';

angular.module('metricapp')

.controller('MetricModalCtrl', MetricModalCtrl);

MetricModalCtrl.$inject = ['$window', '$uibModal', 'MetricService', '$uibModalInstance'];

function MetricModalCtrl($window, $uibModal, MetricService, $uibModalInstance) {

	var vm = this;

	vm.metricDialog = MetricService.getMetricDialog();
	vm.closeModal = closeModal;

    function closeModal(){
        $uibModalInstance.dismiss("closing");            
    };

    /*ctrl.editQuestion = function(question){
        $uibModalInstance.dismiss("closing");
        QuestionStorageFactory.setQuestion(question);
        $location.path('/questionUpdate');
    };*/


}

})();