(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name ChatController
* @module metricapp
* @requires $rootScope
* @requires $scope
* @requires $location
* @requires $routeParams
* @requires MessageService
* @requires UserService
*
* @description
* Realizes the control layer for `chat.view`.
************************************************************************************/

angular.module('metricapp')

.controller('ChatController', ChatController);

ChatController.$inject = ['$rootScope', '$scope', '$location', '$routeParams', 'MessageService', 'UserService'];

function ChatController($rootScope, $scope, $location, $routeParams, MessageService, UserService) {

    var vm = this;

    vm.loadMore = loadMore
    vm.sendMessage = sendMessage;

    _init();

    function loadMore() {
        /*
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.conversation.messages = vm.conversation.messages.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
        */
    }

    function sendMessage(content) {
        var message = {
            ts_create: new Date(),
            author: $rootScope.globals.user.username,
            content: content
        };
        vm.currConversation.messages.push(message);
    }

    function _loadConversation(recipient) {
        vm.loading = true;
        vm.success = false;
        MessageService.getById(recipient, -1).then(
            function(resolve) {
                vm.currConversation = angular.copy(resolve.conversation);
                return UserService.getUser(vm.currConversation.recipient).then(
                    function(resolve) {
                        vm.currConversation.recipient = angular.copy(resolve.user);
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
        }
        /*
        vm.data = [];
        vm.buffer = [];
        vm.currConversation[messages] = [];
        vm.idx = 0;
        vm.step = 10;
        vm.orderBy = 'ts_create';
        */
        _loadConversation(vm.currConversation.recipient.username);
        /*
        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.currConversation.messages = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });
        */
    }

}

})();
