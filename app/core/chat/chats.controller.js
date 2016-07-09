(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name ChatsController
* @module metricapp
* @requires $rootScope
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

ChatsController.$inject = ['$rootScope', '$location', '$routeParams', 'MessageService', 'UserService'];

function ChatsController($rootScope, $location, $routeParams, MessageService, UserService) {

    var vm = this;

    _init();

    function _loadAllConversations() {
        vm.loading = true;
        vm.success = false;
        MessageService.getAll().then(
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
                            if (conversation.recipient) vm.data.push(conversation);
                        });
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

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.data = [];
        vm.buffer = [];
        vm.conversations = [];
        vm.idx = 0;
        vm.step = 10;
        vm.orderBy = '-ts_update';
        vm.toread = 0;
        _loadAllConversations();
        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.conversations = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });
    }

}

})();
