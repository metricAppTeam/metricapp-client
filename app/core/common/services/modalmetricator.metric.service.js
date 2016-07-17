(function() {'use strict';

angular.module('metricapp')

.service('MetricModalService', MetricModalService);

MetricModalService.$inject = ['$window', '$uibModal'];

function MetricModalService($window, $uibModal) {

	var service = this;
	service.openMetricModal = openMetricModal;
	service.openExternalMetricModal = openExternalMetricModal;

	function openMetricModal(){
	     var modalInstance = $uibModal.open({

            templateUrl: 'dist/views/metricator/modal/modal.metric.html',
            controller: 'MetricModalCtrl',
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

	function openExternalMetricModal(){
	     var modalInstance = $uibModal.open({

            templateUrl: 'dist/views/metricator/modal/modal.external.metric.html',
            controller: 'ExternalMetricModalCtrl',
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