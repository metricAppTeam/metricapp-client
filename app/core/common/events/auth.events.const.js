(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name AUTH_EVENTS
* @module metricapp
* @description
* Defines events related to users authentication.
* - LOGIN_SUCCESS:
* - LOGIN_FAILURE:
* - LOGOUT_SUCCESS:
* - LOGOUT_FAILURE:
* - PASSWORD_UPDATE_SUCCESS:
* - PASSWORD_UPDATE_FAILURE:
* - NOT_AUTHORIZED:
************************************************************************************/

angular.module('metricapp')

.constant('AUTH_EVENTS', {
    LOGIN_SUCCESS:              'auth.login.success',
    LOGIN_FAILURE:              'auth.login.failure',
    LOGOUT_SUCCESS:             'auth.logout.success',
    LOGOUT_FAILURE:             'auth.logout.failure',
    PASSWORD_UPDATE_SUCCESS:    'auth.password.update.success',
    PASSWORD_UPDATE_FAILURE:    'auth.password.update.failure',
    NOT_AUTHORIZED:             'auth.not.authorized'
});

})();
