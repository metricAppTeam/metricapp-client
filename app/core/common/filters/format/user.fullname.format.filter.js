(function() { 'use strict';

/************************************************************************************
* @ngdoc filter
* @name userFullnameFormat
* @module metricapp
*
* @description
* A format filter for users fullnames.
* This filter return the fullname of a user.
************************************************************************************/

angular.module('metricapp')

.filter('userFullnameFormat', userFullnameFormat);

function userFullnameFormat() {
    return function(user) {
        if (!user) {
            return user;
        }
        var fullname = [user.firstname, user.lastname].join(' ');
        return fullname;
    };
}

})();
