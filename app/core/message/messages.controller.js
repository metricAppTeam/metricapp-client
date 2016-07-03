(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name MessagesController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $routeParams
*
* @description
* Manages the message-based conversation between users.
* Realizes the control layer for:
* - `messages.view`
* - widgets about messages.
************************************************************************************/

angular.module('metricapp')

.controller('MessagesController', MessagesController);

MessagesController.$inject = ['$scope', '$location', '$routeParams'];

function MessagesController($scope, $location, $routeParams) {

    var vm = this;

    _init();

    vm.getAllConversations = getAllConversations;
    vm.getMessageExcerpt = getMessageExcerpt;
    vm.getUserProfilePicture = getUserProfilePicture;
    vm.getNumberOfUnreadMessagesInConversation = getNumberOfUnreadMessagesInConversation;

    function getAllConversations(user) {
        return vm.conversations;
    }

    function getMessageExcerpt(text, chars, suspension) {
        var suspstr = (suspension && chars < text.length) ? '...' : '';
        return text.substring(0, chars) + ' ' + suspstr;
    }

    function getUserProfilePicture(username) {
        return 'uploads/profile-picture.png';
    }

    function getNumberOfUnreadMessagesInConversation(username) {
        if (username==='giacomo.marciani') {
            return 5;
        }
        return 0;
    }

    function _init() {
        var lipsum =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

        vm.conversations = [
            {author: {username: 'giacomo.marciani', firstname: 'Giacomo',    lastname: 'Marciani'}, date: '01/01/2016', time: '1:00PM', messages: [lipsum,lipsum,lipsum], read: false},
            {author: {username: 'michele.porretta', firstname: 'Michele',    lastname: 'Porretta'}, date: '01/01/2016', time: '1:00PM', messages: [lipsum,lipsum,lipsum], read: false},
            {author: {username: 'andrea.gennusa',   firstname: 'Andrea',     lastname: 'Gennusa'},  date: '01/01/2016', time: '1:00PM', messages: [lipsum,lipsum,lipsum], read: true},
            {author: {username: 'alessandro.fazio', firstname: 'Alessandro', lastname: 'Fazio'},    date: '01/01/2016', time: '1:00PM', messages: [lipsum,lipsum,lipsum], read: true},
            {author: {username: 'marco.piu',        firstname: 'Marco',      lastname: 'Piu'},      date: '01/01/2016', time: '1:00PM', messages: [lipsum,lipsum,lipsum], read: true},
            {author: {username: 'davide.nanni',     firstname: 'Davide',     lastname: 'Nanni'},    date: '01/01/2016', time: '1:00PM', messages: [lipsum,lipsum,lipsum], read: true}
        ];

        var currentConversationAuthor = ($routeParams.author) ? $routeParams.author : vm.conversations[0].author.username;
        vm.currentConversation = {
            author: currentConversationAuthor
        };
    }

}

})();
