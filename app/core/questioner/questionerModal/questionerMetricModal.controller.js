(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name PageController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the navbar for all users.
* Realizes the control layer for {navbar.view}.
************************************************************************************/

angular.module('metricapp')

.controller('QuestionerMetricModalCtrl', QuestionerMetricModalCtrl);

QuestionerMetricModalCtrl.$inject = ['$location', '$uibModalInstance', '$window', 'QuestionsCrudFactory', 'QuestionStorageFactory'];

function QuestionerMetricModalCtrl($location, $uibModalInstance, $window, QuestionsCrudFactory, QuestionStorageFactory) {

        var ctrl = this;
        ctrl.report = "";

        ctrl.metricDialog = QuestionStorageFactory.getMetric();

        ctrl.closeModal = function(){
            $uibModalInstance.dismiss("closing");            
        };

        ctrl.sendReport = function(){
            $uibModalInstance.dismiss("closing");
            ctrl.metricDialog.metadata.releaseNote = report;
            $window.alert("This should send the following report to the GQM Expert");
            $window.alert(ctrl.metricDialog.metadata.releaseNote);
            //Send Report to GQM Expert
        };

    }

})();
