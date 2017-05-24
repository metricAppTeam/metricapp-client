/*
* @Author: alessandro.fazio
* @Date:   2016-07-15 12:46:59
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 00:11:05
*/
(function() {'use strict';

angular.module('metricapp')

.service('ContextFactorModalService', ContextFactorModalService);

ContextFactorModalService.$inject = ['$window', '$uibModal'];

function ContextFactorModalService($window, $uibModal) {

	var service = this;
	service.openContextFactorModal = openContextFactorModal;
    service.openExternalContextFactorModal = openExternalContextFactorModal;

	function openContextFactorModal(){
	     var modalInstance = $uibModal.open({

            templateUrl: 'dist/views/metricator/modal/modal.contextfactor.html',
            controller: 'ContextFactorModalCtrl',
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

	function openExternalContextFactorModal(){
	     var modalInstance = $uibModal.open({

            templateUrl: 'dist/views/metricator/modal/modal.external.contextfactor.html',
            controller: 'ExternalContextFactorModalCtrl',
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