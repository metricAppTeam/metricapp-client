(function() { 'use strict';

/************************************************************************************
* @ngdoc filter
* @name userFilter
* @module metricapp
*
* @description
* Realizes filters for users to use inside ng-repeat.
************************************************************************************/

angular.module('metricapp')

.filter('userFilterByName', userFilterByName);

function userFilterByName() {
    return function(users, query) {
        var result = [];
        if (!query) {
            return users;
        }
        query.toLowerCase();
        users.forEach(function(user) {
            if (user.fname.toLowerCase().indexOf(query)>=0 || user.lname.toLowerCase().indexOf(query)>=0) {
                result.push(user);
            }
        });
        return result;
    };
}

})();
