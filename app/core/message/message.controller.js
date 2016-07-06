(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name MessageController
* @module metricapp
* @requires $scope
* @requires $location
* @requires MESSAGE_STATE
*
* @description
* Manages the message-based conversation between users.
* Realizes the control layer for:
* - `messages.view`
* - widgets about messages.
************************************************************************************/

angular.module('metricapp')

.controller('MessageController', MessageController);

MessageController.$inject = ['$scope', '$location', 'MESSAGE_STATE'];

function MessageController($scope, $location, MESSAGE_STATE) {

    var vm = this;

    _init();

    vm.getNumberOfMessages = getNumberOfMessages;
    vm.getNumberOfUnreadMessages = getNumberOfUnreadMessages;

    function getNumberOfMessages() {
        return vm.messages.length;
    }

    function getNumberOfUnreadMessages() {
        var unreads = 0;
        for (var i = 0; i < vm.messages.length; i++) {
            var msg = vm.messages[i];
            if (msg.state === MESSAGE_STATE.UNREAD) {
                unreads++;
            }
        }
        return unreads;
    }

    function _init() {
        vm.messages = [
            {author: 'giacomo.marciani', content: 'Lorem ipsum dolor sit amet.', state: MESSAGE_STATE.UNREAD},
            {author: 'michele.porretta', content: 'Lorem ipsum dolor sit amet.', state: MESSAGE_STATE.UNREAD},
            {author: 'marco.piu',        content: 'Lorem ipsum dolor sit amet.', state: MESSAGE_STATE.READ},
        ];
    }

}

})();
