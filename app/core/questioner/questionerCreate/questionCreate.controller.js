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

angular.module("metricapp")
.controller("QuestionCreationCtrl", QuestionCreationCtrl);

QuestionCreationCtrl.$inject = ['$window', '$http', 'QuestionsCrudFactory', 'QuestionStorageFactory', 
    'QuestionModalFactory', '$location'];

function QuestionCreationCtrl($window, $http, QuestionsCrudFactory, QuestionStorageFactory, 
    QuestionModalFactory, $location) {

    var ctrl = this;

    ctrl.question = {
        description: null,
        focus: null,
        subject: null,
        questionerId: QuestionStorageFactory.getQuestioner().username,
        metadata: {
            id: null,
            creatorId: null,
            creationDate: null,
            lastVersionDate: null,
            releaseNote: null,
            state: QuestionsCrudFactory.STATES.CREATED,
            entityType: "Question",
            tags: []
        }
    };

    ctrl.clearForm = function() {
        ctrl.question = {
            description: null,
            focus: null,
            subject: null,
            questionerId: QuestionStorageFactory.getQuestioner().username,
            metadata: {
                id: null,
                creatorId: null,
                creationDate: null,
                lastVersionDate: null,
                releaseNote: null,
                state: QuestionsCrudFactory.STATES.CREATED,
                entityType: "Question",
                tags: []
            }
        };            

        //ctrl.question.creatorId = QuestionStorageFactory.getQuestioner().username;
    };
    
    // callback for ng-click 'createNewQuestion':
    ctrl.createNewQuestion = function () {
        QuestionsCrudFactory.create(ctrl.question).then(
            function(data, status){
                $window.alert("Question Submitted!");
                QuestionStorageFactory.setQuestion(data.data.questionList[0]);
                QuestionModalFactory.openQuestionModal();
                $location.path("/home");
            },
            
            function(data, status){
                alert("Error in submitting Question");
            }
        );

    };

    ctrl.getTags = function(){
        return ctrl.question.metadata.tags.join();
    };

    ctrl.addTagToQuestion = function() {
        ctrl.question.metadata.tags.push(ctrl.newTag);
    };

    ctrl.removeTagFromQuestion = function(index){
        ctrl.question.metadata.tags.splice(index, 1);
    };
};

})();
