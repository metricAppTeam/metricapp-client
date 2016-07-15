(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name MessagesController
* @module metricapp
* @requires $scope
* @requires $rootScope
* @requires $location
* @requires $filter
* @requires $routeParams
* @requires $filter
* @requires MessageService
* @requires UserService
* @requires MESSAGE_EVENTS
*
* @description
* Realizes the control layer for `messages.view`.
************************************************************************************/

angular.module('metricapp')

.controller('MessagesController', MessagesController);

MessagesController.$inject = ['$scope', '$rootScope', '$location', '$routeParams', '$filter', 'MessageService', 'UserService', 'MESSAGE_EVENTS'];

function MessagesController($scope, $rootScope, $location, $routeParams, $filter, MessageService, UserService, MESSAGE_EVENTS) {

    var vm = this;

    vm.loadMore = loadMore;
    vm.search = search;

    vm.setRead = setRead;
    vm.setAllRead = setAllRead;
    vm.removeNews = removeNews;

    vm.removeConversation = removeConversation;

    _init();

    function loadMore() {
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.conversations = vm.conversations.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
    }

    function search(query) {
        vm.buffer = $filter('orderBy')($filter('filter')(vm.data, query), vm.orderBy);
    }

    function setRead(recipient) {
        for (var i = 0; i < vm.buffer.length; i++) {
            var conversation = vm.buffer[i];
            if (conversation.recipient.username === recipient) {
                if (conversation.toread > 0) {
                    vm.toread -= conversation.toread;
                    conversation.toread = 0;
                }
            }
        }
        MessageService.setReadById(recipient);
        $rootScope.$broadcast(MESSAGE_EVENTS.SET_READ, recipient);
    }

    function setAllRead() {
        vm.buffer.forEach(function(conversation) {
            conversation.toread = 0;
        });
        vm.toread = 0;
        vm.news = 0;
        MessageService.setAllRead();
        $rootScope.$broadcast(MESSAGE_EVENTS.ALL_READ);
    }

    function removeNews() {
        vm.news = 0;
    }

    function removeConversation(recipient) {
        vm.loading = true;
        vm.success = false;
        MessageService.removeConversation(recipient).then(
            function(resolve) {
                _broadcastConversationRemoved(recipient);
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

    function _loadAllConversations() {
        vm.loading = true;
        vm.success = false;
        MessageService.getAll().then(
            function(resolve) {
                var conversations = angular.copy(resolve.conversations);
                vm.toread = resolve.toread;
                var recipients = [];
                conversations.forEach(function(conversation) {
                    recipients.push(conversation.recipient);
                });
                return UserService.getInArray(recipients).then(
                    function(resolve) {
                        var users = angular.copy(resolve.users);
                        for (var i = 0; i < conversations.length; i++) {
                            var conversation = conversations[i];
                            var recipient = conversation.recipient;
                            conversation.recipient = angular.copy(users[recipient]);
                            if (conversation.recipient) {
                                vm.data.push(conversation);
                            }
                        }
                        vm.buffer = $filter('orderBy')(vm.data, vm.orderBy);
                        vm.success = true;
                        _broadcastNoNews();
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

    function _getConversation(recipient) {
        vm.loading = true;
        vm.success = false;
        MessageService.getById(recipient).then(
            function(resolve) {
                var conversation = angular.copy(resolve.conversation);
                return UserService.getById(conversation.recipient).then(
                    function(resolve) {
                        conversation.recipient = angular.copy(resolve.user);
                        vm.data.push(conversation);
                        vm.buffer = $filter('orderBy')(vm.data, vm.orderBy);
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

    /********************************************************************************
    * BROADCASTERS
    ********************************************************************************/

    function _broadcastNoNews() {
        $rootScope.$broadcast(MESSAGE_EVENTS.NO_NEWS);
    }

    function _broadcastConversationRemoved(recipient) {
        $rootScope.$broadcast(MESSAGE_EVENTS.CONVERSATION_REMOVED, recipient);
    }

    /********************************************************************************
    * INITIALIZER
    ********************************************************************************/
    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.data = [];
        vm.buffer = [];
        vm.conversations = [];
        vm.idx = 0;
        vm.step = 1;
        vm.query = '';
        vm.orderBy = '-ts_update';
        vm.toread = 0;

        if (!$routeParams.username) {
            MessageService.getLastRecipient().then(
                function(resolve) {
                    var lastRecipient = resolve.lastRecipient;
                    if (lastRecipient) {
                        $location.path('/messages/' + lastRecipient);
                        vm.success = true;
                    }
                },
                function(reject) {
                    vm.errmsg = reject.errmsg;
                    vm.success = false;
                }
            ).finally(function() {
                vm.loading = false;
            });
            return;
        }

        UserService.isUser($routeParams.username).then(
            function(resolve) {
                vm.currConversation = {
                    recipient: {username: $routeParams.username}
                };

                _loadAllConversations();
            },
            function(reject) {
                $location.path('/404');
            }
        );

        /****************************************************************************
        * WATCHERS
        ****************************************************************************/

        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.conversations = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });

        /****************************************************************************
        * LISTENERS
        ****************************************************************************/

        $scope.$on(MESSAGE_EVENTS.MESSAGE_SENT, function(event, recipient, message) {
            for (var i = 0; i < vm.data.length; i++) {
                var conversation = vm.data[i];
                if (conversation.recipient.username === recipient) {
                    conversation.messages.push(message);
                    conversation.ts_update = message.ts_create;
                    vm.buffer = $filter('orderBy')(vm.data, vm.orderBy);
                    return;
                }
            }
            _getConversation(recipient);
        });

        $scope.$on(MESSAGE_EVENTS.ALL_READ, function() {
            vm.buffer.forEach(function(notification) {
                notification.read = true;
            });
            vm.toread = 0;
        });

        $scope.$on(MESSAGE_EVENTS.SET_READ, function(event, recipient) {
            for (var i = 0; i < vm.data.length; i++) {
                var conversation = vm.data[i];
                if (conversation.recipient.username === recipient) {
                    if (conversation.toread > 0) {
                        vm.toread -= conversation.toread;
                        conversation.toread = 0;
                        vm.buffer = $filter('orderBy')(vm.data, vm.orderBy);
                    }
                }
            }
        });
    }

}

})();
