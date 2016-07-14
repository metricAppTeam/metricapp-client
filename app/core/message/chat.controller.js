(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name ChatController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $routeParams
* @requires $filter
* @requires MessageService
* @requires UserService
*
* @description
* Realizes the control layer for `chat.view`.
************************************************************************************/

angular.module('metricapp')

.controller('ChatController', ChatController);

ChatController.$inject = ['$scope', '$location', '$routeParams', '$filter', 'MessageService', 'UserService'];

function ChatController($scope, $location, $routeParams, $filter, MessageService, UserService) {

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

    function sendMessage(recipient, content) {
        vm.loading = true;
        vm.success = false;
        MessageService.sendMessage(recipient, content).then(
            function(resolve) {
                var sentMessage = resolve.sentMessage;
                vm.currConversation.messages.push(sentMessage);
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _setRead(recipient) {
        MessageService.setReadById(recipient);
        $rootScope.$broadcast(MESSAGE_EVENTS.SET_READ, recipient);
    }

    function _loadConversation(recipient) {
        vm.loading = true;
        vm.success = false;
        MessageService.getById(recipient).then(
            function(resolve) {
                vm.currConversation = angular.copy(resolve.conversation);
                return UserService.getById(vm.currConversation.recipient).then(
                    function(resolve) {
                        vm.currConversation.recipient = angular.copy(resolve.user);
                        _setRead(currConversation.recipient.username);
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
        _loadConversation(vm.currConversation.recipient.username);
    }

}

})();
