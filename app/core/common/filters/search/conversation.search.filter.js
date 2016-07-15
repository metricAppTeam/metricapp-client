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
    return function(users, query) {
        var result = [];
        if (!query) {
            return users;
        }
        query.toLowerCase();
        users.forEach(function(user) {
            if (user.firstname.toLowerCase().indexOf(query)>=0 || user.lastname.toLowerCase().indexOf(query)>=0) {
                result.push(user);
            }
        });
        return result;
    };
}

angular.module('metricapp')

.filter('userFullname', userFullname);

function userFullname() {
    return function(user) {
        if (!user) {
            return user;
        }
        var fullname = [user.firstname, user.lastname].join(' ');
        return fullname;
    };
}

})();
