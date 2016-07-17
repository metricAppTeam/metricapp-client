(function() {'use strict';

angular.module('metricapp')

.controller('QuestionMeasurementGoalListCtrl', QuestionMeasurementGoalListCtrl);

QuestionMeasurementGoalListCtrl.$inject = ['$location', 'QuestionsCrudFactory', 'MeasurementGoalService',
 'QuestionStorageFactory', 'QuestionModalFactory', '$window', 'QuestionerMetricModalFactory'];

function QuestionMeasurementGoalListCtrl($location, QuestionsCrudFactory, MeasurementGoalService,
     QuestionStorageFactory, QuestionModalFactory, $window, QuestionerMetricModalFactory) {

    var ctrl = this;

    ctrl.questions = [];
    ctrl.metrics = [];

    ctrl.mgDialog = QuestionStorageFactory.getMeasurementGoal();
    
    _init();
    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get active metrics for a metricator.
    ********************************************************************************/
    ctrl.getQuestions = function(){
         
         var i;
         for(i=0; i<ctrl.mgDialog.questions.length; i++){

         	QuestionsCrudFactory.get([ctrl.mgDialog.questions[i].instance], ["id"]).then(
         		function(data){
         			ctrl.questions.push(data.data.questionList[0]);
         		},
         		function(data){
         			$window.alert("Error retrieving question " + ctrl.mgDialog.questions[i].instance);
         		}
     		);

         }
    };

    ctrl.getMetrics = function(){

        var i;
        for(i=0; i<ctrl.mgDialog.metrics.length; i++){

            //This will be the Metric Service for retrieveng them from the server
            QuestionsCrudFactory.getMetrics([ctrl.mgDialog.metrics[i].instance]).then(
                function(data){
                    ctrl.metrics.push(data.data.metricsDTO[0]);
                },
                function(data){
                    $window.alert("Error retrieving question " + ctrl.mgDialog.questions[i].instance);
                }
            );

        }

    };
    
    ctrl.openQuestion = function (index) {
        QuestionStorageFactory.setQuestion(ctrl.questions[index]);
        QuestionModalFactory.openQuestionModal();
    };

    ctrl.openMetric = function(index){
        QuestionStorageFactory.setMetric(ctrl.metrics[index]);
        QuestionerMetricModalFactory.openMetricModal();  
    };

    function _init(){
        //
    }

    ctrl.getMeasurementGoalData = function(mgId){
        var message = MeasurementGoalService.getWholeMeasurementGoalById(mgId);

        $window.alert(JSON.stringify(message.data));
        $window.alert(JSON.stringify(message.data.questions));
        $window.alert(JSON.stringify(message.data.metrics));

        ctrl.questions = message.questions;
        ctrl.metrics = message.metrics;
    };


    // this.getMeasurementGoalData(ctrl.mgDialog.metadata.id);
    this.getQuestions();
    this.getMetrics();
}

})();