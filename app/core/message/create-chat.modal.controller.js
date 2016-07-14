(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name ChatCreateController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $filter
* @requires UserService
* @requires MessageService
*
* @description
* Realizes the control layer for `chat.create.modal.view`.
************************************************************************************/

angular.module('metricapp')

.controller('ChatCreateController', ChatCreateController);

ChatCreateController.$inject = ['$scope', '$location', '$filter', 'UserService', 'MessageService'];

function ChatCreateController($scope, $location, $filter, UserService, MessageService) {

    var vm = this;

    vm.loadMore = loadMore;
    vm.search = search;

    vm.toggleSelectedUser = toggleSelectedUser;
    vm.createConversation = createConversation;
    vm.close = close;

    _init();

    function loadMore() {
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.users = vm.users.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
    }

    function search(query) {
        vm.buffer = $filter('orderBy')($filter('filter')(vm.data, query), vm.orderBy);
    }

    function toggleSelectedUser(user) {
        if (!vm.selectedUser) {
            vm.selectedUser = user;
        } else {
            if (vm.selectedUser.username === user.username) {
                vm.selectedUser = null;
            } else {
                vm.selectedUser = user;
            }
        }
    }

    function createConversation(user) {
        vm.loading = true;
        vm.success = false;
        MessageService.createConversation(user.username).then(
            function(resolve) {
                var username = resolve.username;
                vm.success = true;
                $location.path('/messages/' + username);
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        )
        .finally(function() {
            vm.loading = false;
        });
    }

    function close() {
        vm.selectedUser = null;
    }

    function _loadAllUsers() {
        vm.loading = true;
        vm.success = false;
        UserService.getAll().then(
            function(resolve) {
                vm.data = angular.copy(resolve.users);
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
        vm.users = [];
        vm.idx = 0;
        vm.step = 4;
        vm.query = '';
        vm.orderBy = 'firstname';
        vm.selectedUser = null;
        _loadAllUsers();
        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.users = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });
    }

}

})();
