(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name ChatController
* @module metricapp
* @requires $scope
* @requires $rootScope
* @requires $location
* @requires $routeParams
* @requires $filter
* @requires MessageService
* @requires UserService
* @requires MESSAGE_EVENTS
*
* @description
* Realizes the control layer for `chat.view`.
************************************************************************************/

angular.module('metricapp')

.controller('ChatController', ChatController);

ChatController.$inject = ['$scope', '$rootScope', '$location', '$routeParams', '$filter', 'MessageService', 'UserService', 'MESSAGE_EVENTS'];

function ChatController($scope, $rootScope, $location, $routeParams, $filter, MessageService, UserService, MESSAGE_EVENTS) {

    var vm = this;

    vm.loadMore = loadMore;
    vm.sendMessage = sendMessage;

    _init();

    function loadMore() {
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.conversation.messages = vm.conversation.messages.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
    }

    function sendMessage() {
        vm.loading = true;
        vm.success = false;
        MessageService.sendMessage(vm.currConversation.recipient, vm.myMessage).then(
            function(resolve) {
                var sentMessage = resolve.sentMessage;
                vm.currConversation.messages.push(sentMessage);
                vm.success = true;
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.myMessage = '';
            vm.loading = false;
        });
    }

    function _setRead(recipient) {
        //var recipientUsername = recipient.username || recipient;
        alert('ChatController._setRead:recipient=' + angular.toJson(recipient));
        MessageService.setReadById(recipient);
        $rootScope.$broadcast(MESSAGE_EVENTS.SET_READ, recipient);
    }

    function _loadConversation(recipient) {
        //var recipientUsername = recipient.username || recipient;
        alert('ChatController._loadConversation:recipient=' + angular.toJson(recipient));
        vm.loading = true;
        vm.success = false;
        MessageService.getById(recipient).then(
            function(resolve) {
                vm.currConversation = angular.copy(resolve.conversation);
                return UserService.getById(vm.currConversation.recipient.username).then(
                    function(resolve) {
                        vm.currConversation.recipient = angular.copy(resolve.user);
                        _setRead(vm.currConversation.recipient.username);
                        vm.success = true;
                    },
                    function(reject) {
                        vm.errmsg = reject.errmsg;
                        vm.success = false;
                    }
                );
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
        if (!$routeParams.username) {
            return;
        }
        vm.currConversation = {
            recipient: {username: $routeParams.username}
        };
        alert('ChatController._init(): vm.currConversation.recipient.username=' + vm.currConversation.recipient.username);
        _loadConversation(vm.currConversation.recipient.username);
    }

}

})();
