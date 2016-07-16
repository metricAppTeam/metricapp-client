(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name STATES
* @module metricapp
* @description
* Defines constants related to entity states.
* - EXPERT:
* - QUESTIONER:
* - METRICATOR:
************************************************************************************/

angular.module('metricapp')

.constant('STATES', {
    CREATED:    		'Created',
    ONUPDATE: 			'OnUpdate',
    PENDING: 			'Pending',
    APPROVED:   		'Approved',
    ONUPDATEWAITING: 	'OnUpdateWaitingQuestions',
    ONUPDATEENDPOINT: 	'OnUpdateQuestionerEndpoint',  
    REJECTED:   		'Rejected', 
    SUSPENDED:  		'Suspended'
});

})();
