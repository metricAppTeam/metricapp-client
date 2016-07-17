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

.controller('QuestionSearchCtrl', QuestionSearchCtrl);

QuestionSearchCtrl.$inject = ['$location', '$window', 'QuestionsCrudFactory', 'QuestionStorageFactory', 'QuestionModalFactory'];

function QuestionSearchCtrl($location, $window, QuestionsCrudFactory, QuestionStorageFactory, QuestionModalFactory) {

        var ctrl = this;

        // QuestionsCrudFactory.getAll().then(
        //     function(data, status){
        //         ctrl.questions = data.data.questionList;
        //     },
            
        //     function(data, status){
        //         $window.alert(data.data.error);
        //         ctrl.questions = null;
        //     }
        // );
        

        ctrl.searchBy = function(keyword, searchField){
            QuestionsCrudFactory.get([keyword], [searchField]).then(
                function(data, status){
                    ctrl.questions = data.data.questionList;
                },

                function(data, status){
                    $window.alert(status);
                }
            );
        };

        ctrl.open = function (index) {

            QuestionStorageFactory.setQuestion(ctrl.questions[index]);
            QuestionModalFactory.openQuestionModal();

        };

    }

})();
