(function() {'use strict';

angular.module('metricapp')

.controller('QuestionMeasurementGoalAddCtrl', QuestionMeasurementGoalAddCtrl);

QuestionMeasurementGoalAddCtrl.$inject = ['$location', 'QuestionsCrudFactory', 'MeasurementGoalService',
 'QuestionStorageFactory', 'QuestionModalFactory', '$window'];

function QuestionMeasurementGoalAddCtrl($location, QuestionsCrudFactory, MeasurementGoalService,
     QuestionStorageFactory, QuestionModalFactory, $window) {

    var ctrl = this;

    ctrl.questions = [];

    ctrl.mgDialog = QuestionStorageFactory.getMeasurementGoal();
    
    _init();
    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get active metrics for a metricator.
    ********************************************************************************/
    ctrl.getQuestions = function(){
         
     	QuestionsCrudFactory.get([QuestionsCrudFactory.STATES.APPROVED], ["state"]).then(
     		function(data){
     			ctrl.questions = data.data.questionList;
     		},
     		function(data){
     			$window.alert("Error retrieving question " + ctrl.mgDialog.questions[i].instance);
     		}
 		);

    };
    
    ctrl.open = function (index) {
        QuestionStorageFactory.setQuestion(ctrl.questions[index]);
        QuestionModalFactory.openQuestionModal();
    };

    ctrl.addToMeasurementGoal = function(index){

    	var i;
    	for(i=0; i<ctrl.mgDialog.questions.length; i++){
    		if(ctrl.questions[index].metadata.id == ctrl.mgDialog.questions[i].instance){
    			$window.alert("The question is already present in the Measurement Goal");
    			return; 
    		}
    	}

        var questionInstance = {
            busVersion : "",
            instance : ctrl.questions[index].metadata.id,
            objIdLocalToPhase : "",
            tags: ctrl.questions[index].metadata.tags,
            typeObj: "Question"
        };

        $window.alert("this should insert the question in the MG");
        ctrl.mgDialog.questions.push(questionInstance);
        $window.alert(JSON.stringify(ctrl.mgDialog));
        var message = MeasurementGoalService.submitMeasurementGoal(ctrl.mgDialog);

        
    };


    function _init(){
        //
    }

    this.getQuestions();
}

})();