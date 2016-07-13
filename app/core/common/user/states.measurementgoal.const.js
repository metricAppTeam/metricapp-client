/*
* @Author: alessandro.fazio
* @Date:   2016-07-13 11:01:31
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-13 11:17:22
*/
(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name STATES
* @module metricapp
* @description
* Defines constants related to the states of a Measurement Goal.
* - CREATED:
* - ONUPDATEWAITINGQUESTIONS:
* - ONUPDATEQUESTIONSENDPOINT:
* - PENDING:
* - REJECTED:
* - SUSPENDED:
* - APPROVED:
************************************************************************************/

angular.module('metricapp')

.constant('STATES', {
    CREATED:   'Created',
    ONUPDATEWAITINGQUESTIONS: 'OnUpdatedWaitingQuestions',
    ONUPDATEQUESTIONERENDPOINT: 'OnUpdateQuestionerEndpoint',
    PENDING: 'Pending',
    REJECTED: 'Rejected',
    SUSPENDED: 'Suspended',
    APPROVED: 'Approved'
});

})();