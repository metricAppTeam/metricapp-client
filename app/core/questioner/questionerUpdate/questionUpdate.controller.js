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

.controller("QuestionUpdateCtrl", QuestionUpdateCtrl);

QuestionUpdateCtrl.$inject = ['$window', '$location', 'QuestionStorageFactory', 'QuestionsCrudFactory'];

function QuestionUpdateCtrl($window, $location, QuestionStorageFactory, QuestionsCrudFactory){

    var ctrl = this;
    
    ctrl.question = angular.copy(QuestionStorageFactory.getQuestion());
    ctrl.isCommitted = false;

    ctrl.reset = function(){
        ctrl.question = angular.copy(QuestionStorageFactory.getQuestion());   
    };

    ctrl.updateQuestion = function(){

        if(ctrl.question.metadata.state == QuestionsCrudFactory.STATES.CREATED){
            ctrl.question.metadata.state = QuestionsCrudFactory.STATES.ONUPDATE;
        }
        else if(ctrl.question.metadata.state == QuestionsCrudFactory.STATES.REJECTED){
            ctrl.question.meteadata.state = QuestionsCrudFactory.STATES.ONUPDATE;
        }

        $window.alert(ctrl.question.metadata.state);
        QuestionsCrudFactory.update(ctrl.question).then(
            function(data, status){
                QuestionStorageFactory.setQuestion(data.data.questionList[0]);
                ctrl.question = angular.copy(QuestionStorageFactory.getQuestion());
                $window.alert("update committed");
                ctrl.isCommitted = true;
            },
            
            function(data, status){
                $window.alert("Error: status " + status);
            }
        );
    };

    // ctrl.finalizeQuestion = function(){

    //     if(ctrl.question.metadata.state == QuestionsCrudFactory.STATES.CREATED || !ctrl.isCommitted){
    //         $window.alert("You have to commit the update first!");
    //         return;
    //     }
    //     else if(ctrl.question.metadata.state == QuestionsCrudFactory.STATES.ONUPDATE){
    //         ctrl.question.metadata.state = QuestionsCrudFactory.STATES.PENDING;
    //     }
        
    //     QuestionsCrudFactory.update(ctrl.question).then(
    //         function(data, status){
    //             $window.alert("Question Finalized");
    //             $location.path('/dashboardQuestioner');
    //         },
            
    //         function(data, status){
    //             $window.alert("Error: status " + status);
    //         }
    //     );
    // };

    ctrl.getTags = function(){
        return ctrl.question.metadata.tags.join();
    };

    ctrl.addTagToQuestion = function() {
        ctrl.question.metadata.tags.push(ctrl.newTag);
    };

    ctrl.removeTagFromQuestion = function(index){
        ctrl.question.metadata.tags.splice(index, 1);
    };

    ctrl.getStates = function(){
        return QuestionsCrudFactory.STATES;
    };
}

})();
