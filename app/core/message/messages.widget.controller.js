(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name MessagesWidgetController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the message-based conversation between users.
* Realizes the control layer for:
* - widgets about messages.
************************************************************************************/

angular.module('metricapp')

.controller('MessagesWidgetController', MessagesWidgetController);

MessagesWidgetController.$inject = ['$scope', '$location'];

function MessagesWidgetController($scope, $location) {

    var vm = this;

    _init();

    vm.getNumberOfMessages = getNumberOfMessages;
    vm.getNumberOfUnreadMessages = getNumberOfUnreadMessages;
    vm.getMessagesSlice = getMessagesSlice;
    vm.getMessageExcerpt = getMessageExcerpt;

    function getNumberOfMessages() {
        return vm.messages.length;
    }

    function getNumberOfUnreadMessages() {
        var unreads = 0;
        for (var i = 0; i < vm.messages.length; i++) {
            var msg = vm.messages[i];
            if (!msg.read) unreads++;
        }
        return unreads;
    }

    function getMessagesSlice(user, i, j) {
        return vm.messages.slice(i, j);
    }

    function getMessageExcerpt(text, chars, suspension) {
        var suspstr = (suspension && chars < text.length) ? '...' : '';
        return text.substring(0, chars) + ' ' + suspstr;
    }

    function _init() {
        var lipsum =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

        vm.messages = [
            {author: {username: 'giacomo.marciani', firstname: 'Giacomo',    lastname: 'Marciani'}, date: '01/01/2016', time: '1:00PM', content: lipsum, read: false},
            {author: {username: 'michele.porretta', firstname: 'Michele',    lastname: 'Porretta'}, date: '01/01/2016', time: '1:00PM', content: lipsum, read: false},
            {author: {username: 'andrea.gennusa',   firstname: 'Andrea',     lastname: 'Gennusa'},  date: '01/01/2016', time: '1:00PM', content: lipsum, read: true},
            {author: {username: 'alessandro.fazio', firstname: 'Alessandro', lastname: 'Fazio'},    date: '01/01/2016', time: '1:00PM', content: lipsum, read: true},
            {author: {username: 'marco.piu',        firstname: 'Marco',      lastname: 'Piu'},      date: '01/01/2016', time: '1:00PM', content: lipsum, read: true},
            {author: {username: 'davide.nanni',     firstname: 'Davide',     lastname: 'Nanni'},    date: '01/01/2016', time: '1:00PM', content: lipsum, read: true}
        ];
    }

}

})();
