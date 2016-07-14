/*
* @Author: alessandro.fazio
* @Date:   2016-07-14 21:02:20
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-14 21:03:48
*/

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name STATES
* @module metricapp
* @description
* Defines constants related to the states of a Measurement Goal.
* - CREATED:
* - ONUPDATE:
* - PENDING:
* - REJECTED:
* - SUSPENDED:
* - APPROVED:
************************************************************************************/

angular.module('metricapp')

.constant('STATES_METRIC', {
    CREATED: 'Created',
    ONUPDATE: 'OnUpdate',
    PENDING: 'Pending',
    REJECTED: 'Rejected',
    SUSPENDED: 'Suspended',
    APPROVED: 'Approved'
});

})();