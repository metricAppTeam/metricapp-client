(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name QuestionsController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $filter
* @requires QuestionService
*
* @description
* Realizes the control layer for `questions.view`.
************************************************************************************/

angular.module('metricapp')

.controller('QuestionsController', QuestionsController);

QuestionsController.$inject = ['$scope', '$location', '$filter', 'QuestionService'];

function QuestionsController($scope, $location, $filter, QuestionService) {

    var vm = this;

    vm.loadMore = loadMore;
    vm.search = search;

    _init();

    function loadMore() {
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.questions = vm.questions.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
    }

    function search(query) {
        vm.buffer = $filter('orderBy')($filter('filter')(vm.data, query), vm.orderBy);
    }

    function _loadAllUsers() {
        vm.loading = true;
        vm.success = false;
        QuestionService.getAll().then(
            function(resolve) {
                vm.data = angular.copy(resolve.questions);
                vm.buffer = $filter('orderBy')(vm.data, vm.orderBy);
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
        vm.data = [];
        vm.buffer = [];
        vm.questions = [];
        vm.idx = 0;
        vm.step = 4;
        vm.query = '';
        vm.orderBy = 'name';
        _loadAllQuestions();
        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.questions = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });
    }

}

})();
