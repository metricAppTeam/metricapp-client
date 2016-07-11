(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name AUTH_EVENTS
* @module metricapp
* @description
* Defines events related to user authentication.
* - LOGIN_SUCCESS:
* - LOGIN_FAILURE:
* - LOGOUT_SUCCESS:
* - LOGOUT_FAILURE:
* - NOT_AUTHORIZED:
************************************************************************************/

angular.module('metricapp')

.constant('AUTH_EVENTS', {
    LOGIN_SUCCESS:          'auth.login.success',
    LOGIN_FAILURE:          'auth.login.failure',
    LOGOUT_SUCCESS:         'auth.logout.success',
    LOGOUT_FAILURE:         'auth.logout.failure',
    PASSWORD_EDIT_SUCCESS:  'auth.password.edit.success',
    PASSWORD_EDIT_FAILURE:  'auth.password.edit.failure',
    NOT_AUTHORIZED:         'auth.not.authorized'
});

})();
