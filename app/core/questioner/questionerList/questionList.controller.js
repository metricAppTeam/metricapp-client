(function() {'use strict';

angular.module('metricapp')

.controller('QuestionListCtrl', QuestionListCtrl);

QuestionListCtrl.$inject = ['AuthService', '$location', 'QuestionsCrudFactory',
 'QuestionStorageFactory', 'QuestionModalFactory', '$window'];

function QuestionListCtrl(AuthService, $location, QuestionsCrudFactory,
     QuestionStorageFactory, QuestionModalFactory, $window) {

    var ctrl = this;    

    ctrl.getQuestions = getQuestions;
    ctrl.questions = [];

    ctrl.questionDialog = null;

    ctrl.getQuestions();
    _init();

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get active metrics for a metricator.
    ********************************************************************************/
    function getQuestions(){
         QuestionsCrudFactory.get([QuestionStorageFactory.getQuestioner().username], ["questionerId"]).then(
            function(data) {
                console.log(data.data.questionList);
                ctrl.questions = data.data.questionList;
            },
            function(data) {
                alert('Error retrieving Questions');
            }
        );
    }

    // function countOnUpdate(){
    //     QuestionsCrudFactory.count(QuestionsCrudFactory.STATES.ONUPDATE, QuestionStorageFactory.getQuestioner().username).then( 
    //         function(data) {
    //             ctrl.count = data.data.count;
    //             $window.alert(ctrl.count);
    //         },
    //         function(data) {
    //             alert('Error retrieving Questions');
    //         }
    //     );
    // }

    ctrl.open = function (index) {
        QuestionStorageFactory.setQuestion(ctrl.questions[index]);
        QuestionModalFactory.openQuestionModal();
    };

    function _init(){
        //
    }

}

})();