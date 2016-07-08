(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name ChatsController
* @module metricapp
* @requires $location
* @requires $routeParams
* @requires MessageService
* @requires UserService
*
* @description
* Realizes the control layer for `messages.view`.
************************************************************************************/

angular.module('metricapp')

.controller('ChatsController', ChatsController);

ChatsController.$inject = ['$location', '$routeParams', 'MessageService',
'UserService'];

function ChatsController($location, $routeParams, MessageService, UserService) {

    var vm = this;

    vm.conversations = [];
    vm.messages = [];
    vm.totUnreads = 0;

    vm.selectedConversations = {};
    vm.profiles = {};

    vm.myMessage = '';

    vm.getProfile = getProfile;
    vm.getFullname = getFullname;
    vm.getPicture = getPicture;
    vm.isUserOnline = isUserOnline;
    vm.getExcerpt = getExcerpt;

    vm.toggleConversation = toggleConversation;

    vm.removeSelectedConversations = removeSelectedConversations;

    vm.sendMessage = sendMessage;

    _init();

    function getProfile(username) {
        if (vm.profiles[username]) {
            var profile = vm.profiles[username];
            return profile;
        } else {
            return UserService.getProfile(username).then(
                function(response) {
                    if (response.success) {
                        var profile = response.data;
                        vm.profiles[username] = profile;
                        return profile;
                    } else {
                        var message = response.message;
                        alert('FAILURE [MessagesController.getProfile()]: ' + message);
                        return null;
                    }
                }
            );
        }
    }

    function getFullname(username) {
        var profile = vm.getProfile(username);
        var fullname = profile.firstname + ' ' + profile.lastname;
        return fullname;
    }

    function getPicture(username) {
        var profile = vm.getProfile(username);
        var picture = profile.picture;
        return picture;
    }

    function isUserOnline(username) {
        return UserService.isOnline(username).then(
            function(response) {
                if (response.success) {
                    var isOnline = response.data;
                    return isOnline;
                } else {
                    var message = response.message;
                    alert('FAILURE [MessagesController.isUserOnline()]: ' + message);
                    return false;
                }
            }
        );
    }

    function toggleConversation(username) {
        if (vm.selectedConversations[username]) {
            vm.selectedConversations[username] = false;
        } else {
            vm.selectedConversations[username] = true;
        }
    }

    function removeSelectedConversations() {
        vm.loading = true;
        var recipients = [];
        for (var recipient in vm.selectedConversations) {
            if (vm.selectedConversations[recipient]) {
                recipients.push(recipient);
            }
        }
        MessageService.removeConversations(recipients).then(
            function(response) {
                if (response.success) {
                    var message = response.message;
                    alert('SUCCESS [MessagesController.removeConversations()]: ' + message);
                    vm.selectedConversations = {};
                    vm.loading = false;
                } else {
                    var message = response.message;
                    alert('FAILURE [MessagesController.removeConversations()]: ' + message);
                    vm.selectedConversations = {};
                    vm.loading = false;
                }
            }
        );
    }

    function sendMessage() {
        vm.loading = true;
        alert('[MessagesController.sendMessage()]: not yet implemented. ' +
        'SEND TO USER ' + vm.currConversationWith + ' MESSAGE ' + vm.myMessage);
        vm.loading = false;
    }

    function _getLastRecipient() {
        return MessageService.getLastRecipient().then(function(response) {
            if (response.success) {
                var lastRecipient = response.data;
                return lastRecipient;
            } else {
                var message = response.message;
                alert('FAILURE [MessagesController._getLastRecipient()]: ' + response.message);
                return null;
            }
        });
    }

    function _loadAllConversations() {
        MessageService.getAllConversations().then(
            function(response) {
                if (response.success) {
                    var conversations = response.data;
                    var totalUnreads = 0;
                    for (var i = 0; i < conversations.length; i++) {
                        var conversation = conversations[i];
                        totalUnreads += conversation.unreads;
                    }
                    vm.conversations = conversations.slice(0);
                    vm.totalUnreads = totalUnreads;
                } else {
                    var message = response.message;
                    alert('FAILURE [MessagesController._loadAllConversations()]: ' + message);
                    vm.conversations = [];
                    vm.messages = [];
                    vm.totalUnreads = 0;
                }
            }
        );
    }

    function _loadConversation(recipient) {
        vm.loading = true;
        vm.success = false;
        MessageService.getConversation(recipient).then(
            function(resolve) {
                vm.currConversation.sender = resolve.conversation.sender;
                vm.currConversation.recipient = {};
                vm.currConversation.ts_update = resolve.conversation.ts_update;
                vm.currConversation.toread = resolve.conversation.toread;
                vm.currConversation.messages = resolve.conversation.messages;
                return UserService.getUSer(resolve.conversation.recipient).then(
                    function(resolve) {
                        for (var info in resolver.user) {
                            vm.currConversation.recipient[info] = resolve.user[info];
                        }
                        vm.success = true;
                    },
                    function(reject) {
                        vm.success = false;
                    }
                );
            },
            function(reject) {
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        if (!$routeParams.username) {
            var lastRecipient = _getLastRecipient();
            if (lastRecipient) {
                $location.path('/messages/' + _getLastRecipient());
            } else {
                alert('WARNING [MessagesController._init()]: lastRecipient undefined');
                $location.path('/home');
                // TO BE IMPLEMENTED
            }
        }

        vm.conversations = [];
        vm.toread = 0;

        vm.currConversation = {
            recipient: {username: $routeParams.username},
            ts_update: null,
            toread: null,
            messages: []
        }
        _loadConversation(vm.currConversation.recipient.username);
        _loadConversations(0, 20);
    }

}

})();
