(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name ChatsWidgetController
* @module metricapp
* @requires $scope
* @requires $location
* @requires MessageService
* @requires UserService
* @requires AUTH_EVENTS
*
* @description
* Realizes the control layer for `chats.widget.view`.
************************************************************************************/

angular.module('metricapp')

.controller('ChatsWidgetController', ChatsWidgetController);

ChatsWidgetController.$inject = ['$scope', '$location', 'MessageService', 'UserService', 'AUTH_EVENTS'];

function ChatsWidgetController($scope, $location, MessageService, UserService, AUTH_EVENTS) {

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
                        for (var i = 0; i < conversations.length; i++) {
                            var conversation = conversations[i];
                            var recipient = conversation.recipient;
                            conversation.recipient = angular.copy(users[recipient]);
                            if (conversation.recipient) {
                                vm.conversations.push(conversation);
                            }
                        }
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
        //_loadConversations(0, 5);
        $scope.$on(AUTH_EVENTS.LOGIN_SUCCESS, function() {
            _loadConversations(0, 5);
        });
    }

}

})();
