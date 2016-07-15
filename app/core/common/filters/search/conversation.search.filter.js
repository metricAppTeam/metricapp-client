(function() { 'use strict';

/************************************************************************************
* @ngdoc filter
* @name conversationSearch
* @module metricapp
*
* @description
* A query filter for searchboxes about conversations.
************************************************************************************/

angular.module('metricapp')

.filter('conversationSearch', conversationSearch);

function conversationSearch() {
    return function(conversations, query) {
        var result = [];
        if (!query) {
            return conversations;
        }
        query.toLowerCase();
        conversations.forEach(function(conversation) {
            if (conversation.recipient.firstname.toLowerCase().indexOf(query)>=0 ||
                conversation.recipient.lastname.toLowerCase().indexOf(query)>=0) {
                result.push(conversation);
            }
        });
        return result;
    };
}

})();
