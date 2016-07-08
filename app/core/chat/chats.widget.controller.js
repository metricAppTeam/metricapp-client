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

    function _loadConversations(cnvStart, cnvN, msgStart, msgN) {
        vm.loading = true;
        vm.success = false;
        MessageService.getConversations(cnvStart, cnvN, msgStart, msgN).then(
            function(resolve) {
                vm.conversations.push(resolve.conversations);
                vm.toread = resolve.toread;
                vm.success = true;
            },
            function(reject) {
                var errmsg = reject.errmsg;
                alert('FAILURE [MessagesWidgetController._loadConversations()]: ' + errmsg);
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.conversations = [];
        vm.toread = 0;
        _loadConversations(0, 5, 0, 1);
    }

}

})();
