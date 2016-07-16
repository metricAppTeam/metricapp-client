/*
* @Author: alessandro.fazio
* @Date:   2016-07-15 12:46:59
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-15 13:23:59
*/
(function() {'use strict';

angular.module('metricapp')

.service('MeasurementGoalModalService', MeasurementGoalModalService);

MeasurementGoalModalService.$inject = ['$window', '$uibModal'];

function MeasurementGoalModalService($window, $uibModal) {

	var service = this;
	service.openMeasurementGoalModal = openMeasurementGoalModal;

	function openMeasurementGoalModal(){
	     var modalInstance = $uibModal.open({

            templateUrl: 'dist/views/metricator/modal/modal.measurementgoal.html',
            controller: 'MeasurementGoalModalCtrl',
            controllerAs: 'vm',
            size: 'lg'
        });

        modalInstance.result.then(
            function(){
                console.log("Modal showing");
            },
            function () {
                console.log('Modal dismissed');
            });
	};

}

})();