(function() { 'use strict';

/************************************************************************************
* @ngdoc filter
* @name userSearch
* @module metricapp
*
* @description
* A query filter for searchboxes about users.
* This filter filters by firstname and lastname.
************************************************************************************/

angular.module('metricapp')

.filter('userSearch', userSearch);

function userSearch() {
    return function(users, query) {
        var result = [];
        if (!query) {
            return users;
        }
        query.toLowerCase();
        users.forEach(function(user) {
            if (user.firstname.toLowerCase().indexOf(query)>=0 ||
                user.lastname.toLowerCase().indexOf(query)>=0) {
                result.push(user);
            }
        });
        return result;
    };
}

})();
