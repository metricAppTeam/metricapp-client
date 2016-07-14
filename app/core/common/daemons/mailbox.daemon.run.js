(function() { 'use strict';

/************************************************************************************
* @ngdoc overview
* @name mailboxDaemon
* @module metricapp
* @requires $rootScope
* @requires $interval
* @requires AuthService
* @requires MessageService
* @requires UserService
* @requires MESSAGE_EVENTS
*
* @description
* Retrieves messages as a daemon.
************************************************************************************/

angular.module('metricapp')

.run(mailboxDaemon);

mailboxDaemon.$inject = ['$rootScope', '$interval', 'AuthService', 'MessageService', 'UserService', 'MESSAGE_EVENTS'];

function mailboxDaemon($rootScope, $interval, AuthService, MessageService, UserService, MESSAGE_EVENTS) {
    $rootScope.mailbox = $rootScope.mailbox || {data:[]};
/*
    function _loadAllConversations() {
        MessageService.getAll().then(
            function(resolve) {
                var conversations = resolve.conversations;
                $rootScope.mailbox.toread = resolve.toread;
                $rootScope.mailbox.news = vm.toread;
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
                                $rootScope.mailbox.data.push(conversation);
                            }
                        }
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

    $interval(function() {
        if (AuthService.isLogged()) {
            _getAllConversations();
        }
    }, 5000);
    */
}

})();
