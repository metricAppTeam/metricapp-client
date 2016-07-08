(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name NewConversationController
* @module metricapp
* @requires $rootScope
* @requires $scope
* @requires $location
* @requires MessageService
* @requires UserService
*
* @description
* Manages the creation of a new conversation.
* Realizes the control layer for:
* - `new-conversation.dialog.view`
************************************************************************************/

angular.module('metricapp')

.controller('NewConversationController', NewConversationController);

NewConversationController.$inject = [
    '$rootScope', '$scope', '$location',
    'MessageService', 'UserService'
];

function NewConversationController($rootScope, $scope, $location, MessageService, UserService) {

    var vm = this;

    vm.selectedUsers = [];

    vm.getAllUsers = getAllUsers;
    vm.createConversation = createConversation;
    vm.close = close;

    _init();

    function getAllUsers() {
        vm.loading = true;
        var currentUser = $rootScope.globals.user;
        UserService.getAll().then(function(response) {
            if (response.success) {
                var users = response.data;
                var i = 0;
                while (i < users.length) {
                    var u = users[i];
                    if (u.username === currentUser.username) {
                        users.splice(i, 1);
                    }
                    i++;
                }
                vm.users = users;
                vm.loading = false;
            } else {
                var message = response.message;
                alert(message);
                vm.users = [];
                vm.loading = false;
            }
        });
    }

    function createConversation() {
        alert('New conversation with: ' + vm.selectedUsers.join(','));
    }

    function close() {
        vm.selectedUsers = [];
    }

    function _init() {
        vm.selectedUsers = [];
        vm.users = [];
        vm.loading = false;
        vm.getAllUsers();
    }

}

})();
