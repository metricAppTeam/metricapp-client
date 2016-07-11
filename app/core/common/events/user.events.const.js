(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name USER_EVENTS
* @module metricapp
* @description
* Defines events related to user authentication.
* - PROFILE_EDIT_SUCCESS:
* - PROFILE_EDIT_FAILURE:
* - CREDENTIALS_EDIT_SUCCESS:
* - CREDENTIALS_EDIT_FAILURE:
************************************************************************************/

angular.module('metricapp')

.constant('USER_EVENTS', {
    PROFILE_EDIT_SUCCESS:       'user.profile.edit.success',
    PROFILE_EDIT_FAILURE:       'user.profile.edit.failure'
});

})();
