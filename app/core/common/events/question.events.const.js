(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name QUESTION_EVENTS
* @module metricapp
* @description
* Defines events related to questions management.
* - CREATE_SUCCESS:
* - CREATE_FAILURE:
* - READ_SUCCESS:
* - READ_FAILURE:
* - UPDATE_SUCCESS:
* - UPDATE_FAILURE:
* - DELETE_SUCCESS:
* - DELETE_FAILURE:
************************************************************************************/

angular.module('metricapp')

.constant('QUESTION_EVENTS', {
    CREATE_SUCCESS: 'question.create.success',
    CREATE_FAILURE: 'question.create.failure',
    READ_SUCCESS:   'question.read.success',
    READ_FAILURE:   'question.read.failure',
    UPDATE_SUCCESS: 'question.update.success',
    UPDATE_FAILURE: 'question.update.failure',
    DELETE_SUCCESS: 'question.delete.success',
    DELETE_FAILURE: 'question.delete.failure'
});

})();
