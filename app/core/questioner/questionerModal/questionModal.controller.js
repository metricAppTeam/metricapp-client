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

.controller('QuestionModalCtrl', QuestionModalCtrl);

QuestionModalCtrl.$inject = ['$location', '$uibModalInstance', '$window', 'QuestionsCrudFactory', 'QuestionStorageFactory'];

function QuestionModalCtrl($location, $uibModalInstance, $window, QuestionsCrudFactory, QuestionStorageFactory) {

        var ctrl = this;

        ctrl.questionDialog = QuestionStorageFactory.getQuestion();

        ctrl.deleteQuestion = function (questionId, index) {
        //     $uibModalInstance.dismiss("closing");
        //     QuestionsCrudFactory.delete(questionId).then(
        //         function(data, status){
        //             $window.alert("deleted " + questionId);
        //             ctrl.questions.splice(index, 1);
        //         },  
                
        //         function(data, status){
        //             $window.alert(status);
        //         }
        //     );

        };

        ctrl.closeModal = function(){
            $uibModalInstance.dismiss("closing");            
        };

        ctrl.editQuestion = function(question){
            $uibModalInstance.dismiss("closing");
            QuestionStorageFactory.setQuestion(question);
            $location.path('/questionUpdate');
        };

        ctrl.sendForApproval = function(){

            $uibModalInstance.dismiss("closing");
            if(ctrl.questionDialog.metadata.state == QuestionsCrudFactory.STATES.CREATED || 
                ctrl.questionDialog.metadata.state == QuestionsCrudFactory.STATES.ONUPDATE || 
                ctrl.questionDialog.metadata.state == QuestionsCrudFactory.STATES.REJECTED){
                
                ctrl.questionDialog.metadata.state = QuestionsCrudFactory.STATES.PENDING;

                QuestionsCrudFactory.update(ctrl.questionDialog).then(
                    function(data, status){
                        $window.alert("Question sent for approval");
                        $location.path('/questionList');
                    },
                    
                    function(data, status){
                        $window.alert("Error: status " + status);
                    }
                );

            }
            else if(ctrl.questionDialog.metadata.state == QuestionsCrudFactory.STATES.APPROVED){
                $window.alert("The question has already been approved");
            }
            else{
                $window.alert("The Question cannot be sent for approval");
            }
            

        };
            
    }

})();
