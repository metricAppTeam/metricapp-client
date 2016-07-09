(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name ChatsWidgetController
* @module metricapp
* @requires $location
* @requires MessageService
* @requires UserService
*
* @description
* Realizes the control layer for `chats.widget.view`.
************************************************************************************/

angular.module('metricapp')

.controller('ChatsWidgetController', ChatsWidgetController);

ChatsWidgetController.$inject = ['$location', 'MessageService', 'UserService'];

function ChatsWidgetController($location, MessageService, UserService) {

    var vm = this;

    _init();

    function _loadConversations(cnvStart, cnvN) {
        vm.loading = true;
        vm.success = false;
        MessageService.getNFrom(cnvStart, cnvN).then(
            function(resolve) {
                var conversations = resolve.conversations;
                vm.toread = resolve.toread;
                var recipients = [];
                conversations.forEach(function(conversation) {
                    recipients.push(conversation.recipient);
                });
                return UserService.getInArray(recipients).then(
                    function(resolve) {
                        var users = resolve.users;
                        conversations.forEach(fuction(conversation) {
                            var recipient = conversation.recipient;
                            conversation.recipient = angular.copy(users[recipient]);
                            if (conversation.recipient) vm.conversations.push(conversation);
                        });
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
        vm.conversations = [];
        vm.toread = 0;
        _loadConversations(0, 5);
    }

}

})();
