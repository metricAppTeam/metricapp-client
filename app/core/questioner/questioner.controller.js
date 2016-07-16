(function() {'use strict';

	angular.module('metricapp')

	.controller('QuestionerCtrl', QuestionerCtrl);

	QuestionerCtrl.$inject = ['AuthService', 'QuestionStorageFactory', 'QuestionsCrudFactory', '$window'];

	function QuestionerCtrl(AuthService, QuestionStorageFactory, QuestionsCrudFactory, $window) {

	    var ctrl = this;    

	    ctrl.user = AuthService.getUser();
	    QuestionStorageFactory.setQuestioner(ctrl.user);

	    ctrl.date = new Date();

	    ctrl.messagesInbox = 12;

	    ctrl.onUpdateQuestions = -1;
	    ctrl.approvedQuestions = -1;
	    ctrl.rejectedQuestions = -1;

	    ctrl.approvedMeasurementGoals = -1;
	    ctrl.waitingForQuestionsMeasurementGoals = -1;

	    ctrl.countQuestionsOnUpdate = countQuestionsOnUpdate;
	    ctrl.countQuestionsApproved = countQuestionsApproved;
	    ctrl.countQuestionsRejected = countQuestionsRejected;

	    ctrl.countMeasurmentGoalsApproved = countMeasurmentGoalsApproved;
	    ctrl.countMeasurmentGoalsWaitingForQuestion = countMeasurmentGoalsWaitingForQuestion;

	    countQuestionsOnUpdate();
	    countQuestionsApproved();
	    countQuestionsRejected();

	    countMeasurmentGoalsWaitingForQuestion();
	    countMeasurmentGoalsApproved();

	    function countQuestionsOnUpdate(){
	        QuestionsCrudFactory.count(QuestionsCrudFactory.STATES.ONUPDATE, QuestionStorageFactory.getQuestioner().username).then( 
	            function(data) {
	                ctrl.onUpdateQuestions = data.data.count;
	                //$window.alert(JSON.stringify(ctrl.onUpdateQuestions));
	            },
	            function(data) {
	                alert('Error retrieving onUpdate Questions');
	            }
	        );
   	 	}

   	 	function countQuestionsApproved(){
	        QuestionsCrudFactory.count(QuestionsCrudFactory.STATES.APPROVED, QuestionStorageFactory.getQuestioner().username).then( 
	            function(data) {
	                ctrl.approvedQuestions = data.data.count;
	                //$window.alert(JSON.stringify(ctrl.approvedQuestions));
	            },
	            function(data) {
	                alert('Error retrieving approved Questions');
	            }
	        );
   	 	}

   	 	function countQuestionsRejected(){
	        QuestionsCrudFactory.count(QuestionsCrudFactory.STATES.REJECTED, QuestionStorageFactory.getQuestioner().username).then( 
	            function(data) {
	                ctrl.rejectedQuestions = data.data.count;
	                //$window.alert(JSON.stringify(ctrl.rejectedQuestions));
	            },
	            function(data) {
	                alert('Error retrieving rejected Questions');
	            }
	        );
   	 	}

   	 	function countMeasurmentGoalsApproved(){
   	 		
 			QuestionsCrudFactory.countMeasurementGoalsByQuestionerIdAndState(
 				QuestionStorageFactory.getQuestioner().username, QuestionsCrudFactory.STATES.APPROVED).then(
	            function(response) {
	                console.log('SUCCESS GET MEASUREMENT GOALS');
	                console.log(response);
	                ctrl.approvedMeasurementGoals = response.data.count;
	            },
	            function(response) {
	                console.log('FAILURE GET MEASUREMENT GOALS');
	                console.log(response);
	            }
	        );
   	 	}

   	 	function countMeasurmentGoalsWaitingForQuestion(){
   	 		QuestionsCrudFactory.countMeasurementGoalsByQuestionerIdAndState(
   	 			QuestionStorageFactory.getQuestioner().username, QuestionsCrudFactory.STATES.ONUPDATEWAITING).then(
	            function(response) {
	                console.log('SUCCESS GET MEASUREMENT GOALS');
	                console.log(response);
	                ctrl.waitingForQuestionsMeasurementGoals = response.data.count;
	            },
	            function(response) {
	                console.log('FAILURE GET MEASUREMENT GOALS');
	                console.log(response);
	            }
	        );
   	 	}

}

})();