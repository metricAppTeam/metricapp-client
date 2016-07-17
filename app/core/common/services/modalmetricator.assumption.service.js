/*
* @Author: alessandro.fazio
* @Date:   2016-07-15 12:46:59
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 00:10:28
*/
(function() {'use strict';

angular.module('metricapp')

.service('AssumptionModalService', AssumptionModalService);

AssumptionModalService.$inject = ['$window', '$uibModal'];

function AssumptionModalService($window, $uibModal) {

	var service = this;
	service.openAssumptionModal = openAssumptionModal;
    service.openExternalAssumptionModal = openExternalAssumptionModal;

	function openAssumptionModal(){
	     var modalInstance = $uibModal.open({

            templateUrl: 'dist/views/metricator/modal/modal.assumption.html',
            controller: 'AssumptionModalCtrl',
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

    function openExternalAssumptionModal(){
         var modalInstance = $uibModal.open({

            templateUrl: 'dist/views/metricator/modal/modal.external.assumption.html',
            controller: 'ExternalAssumptionModalCtrl',
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