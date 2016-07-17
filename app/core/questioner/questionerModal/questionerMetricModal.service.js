(function() {'use strict';


var services = angular.module('metricapp');


services.factory('QuestionerMetricModalFactory', ['$window', '$uibModal', function($window, $uibModal){
	var factory = {};

	factory.openMetricModal = function(){
	     var modalInstance = $uibModal.open({

            templateUrl: 'dist/views/questioner/questionerModal/metricModal.view.html',
            controller: 'QuestionerMetricModalCtrl',
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

	return factory;

}]);
})();