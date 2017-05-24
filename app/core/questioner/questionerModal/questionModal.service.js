(function() {'use strict';


var services = angular.module('metricapp');


services.factory('QuestionModalFactory', ['$window', '$uibModal', function($window, $uibModal){
	var factory = {};

	factory.openQuestionModal = function(){
	     var modalInstance = $uibModal.open({

            templateUrl: 'dist/views/questioner/questionerModal/questionModal.view.html',
            controller: 'QuestionModalCtrl',
            controllerAs: 'qstModal',
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