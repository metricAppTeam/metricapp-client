(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name QuestionController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $routeParams
* @requires QuestionService
*
* @description
* Realizes the control layer for `question.view` and `update-question.view`.
************************************************************************************/

angular.module('metricapp')

.controller('QuestionController', QuestionController);

QuestionController.$inject = ['$scope', '$location', '$routeParams', 'QuestionService'];

function QuestionController($scope, $location, $routeParams, QuestionService) {

    var vm = this;

    _init();

    function _loadQuestion(questionid) {
        vm.loading = true;
        vm.success = false;
        QuestionService.getById(questionid).then(
            function(resolve) {
                vm.currQuestion = angular.copy(resolve.question);
                vm.updtQuestion = angular.copy(vm.currQuestion);
                vm.success = true;
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        if (!$routeParams.questionid) {
            $location.path('/questions');
        }
        vm.currQuestion = {
            id: $routeParams.questionid
        };
        _loadQuestion(vm.currQuestion.id);
    }
}

})();
