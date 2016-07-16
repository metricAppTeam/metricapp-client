(function() {'use strict';


var services = angular.module('metricapp');


services.factory('QuestionerMeasurementGoalModalFactory', ['$window', '$uibModal', function($window, $uibModal){
	var factory = {};

	factory.openMeasurementGoalModal = function(){

	     var modalInstance = $uibModal.open({

            templateUrl: 'dist/views/questioner/questionerModal/measurementGoalModal.view.html',
            controller: 'QuestionerMeasurementGoalModalCtrl',
            controllerAs: 'mgModal',
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
