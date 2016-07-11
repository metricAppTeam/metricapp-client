(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name QuestionService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
*
* @description
* Provides question management services.
************************************************************************************/

angular.module('metricapp')

.service('QuestionService', QuestionService);

QuestionService.$inject = ['$http', '$q', 'REST_SERVICE', 'DB_QUESTIONS'];

function QuestionService($http, $q, REST_SERVICE, DB_QUESTIONS) {

    var service = this;

    service.getAll = getAll;
    service.getById = getById;
    service.getInArray = getInArray;
    service.getNFrom = getNFrom;

    service.create = create;
    service.update = update;

    /********************************************************************************
    * @ngdoc method
    * @name getAll
    * @description
    * Retrieves all the questions.
    * @returns {[Question]|Error} On success, the questions;
    * an error message, otherwise.
    ********************************************************************************/
    function getAll() {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var questions = [];
                for (var question in DB_QUESTIONS) {
                    questions.push(DB_QUESTIONS[question]);
                }
                resolve({questions: questions});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getById
    * @description
    * Retrieves the specified question.
    * @param {String} questionid The questionid of the question to retrieve.
    * @returns {Question|Error} On success, the question;
    * an error message, otherwise.
    ********************************************************************************/
    function getById(questionid) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var QUESTION = DB_QUESTIONS[questionid];
                if (QUESTION) {
                    resolve({question: QUESTION});
                } else {
                    reject({errmsg: 'Question ' + questionid + ' not found'});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getInArray
    * @description
    * Retrieves the specified questions.
    * @param {[String]} questionids Question ids of questions to retrieve.
    * @returns {{questionid:Question}|Error} On success, the list of questions;
    * an error message, otherwise.
    ********************************************************************************/
    function getInArray(questionids) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var questions = {};
                questionids.forEach(function(questionid) {
                    var QUESTION = DB_QUESTIONS[questionid];
                    if (QUESTION) {
                        questions[questionid] = QUESTION;
                    }
                });
                resolve({questions: questions});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getNFrom
    * @description
    * Retrieves the specified questions.
    * @param {Int} qstStart First question index.
    * @param {Int} qstN Number of questions.
    * @returns {[Question]|Error} On success, the list of questions;
    * an error message, otherwise.
    ********************************************************************************/
    function getNFrom(qstStart, qstN) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var questions = [];
                var numquestions =  Object.keys(DB_QUESTIONS).length;
                var end = (qstN === -1) ? numquestions : Math.min(qstStart + qstN, numquestions);
                for (var i = qstStart; i < end; i++ ) {
                    questions.push(DB_QUESTIONS[i]);
                }
                resolve({questions: questions, numquestions: numquestions});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name create
    * @description
    * Creates a new question.
    * @param {Question} question The question to create.
    * @returns {JSON|Error} On success, the questionid of the successfully created question
    * and a success message;
    * an error message, otherwise.
    ********************************************************************************/
    function create(question) {
        return $q(function(resolve, reject) {
            var questionid = question.questionid;
            setTimeout(function() {
                if (DB_QUESTIONS[questionid]) {
                    reject({errmsg: 'Question ' + questionid + ' already registered'});
                } else {
                    DB_QUESTIONS[questionid] = angular.copy(question);
                    resolve({questionid: questionid, msg: 'Thank you for creating ' + questionid});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name update
    * @description
    * Updates the authuser profile.
    * @param {Question} questionAttrs The question attributes to update.
    * @returns {JSON} Insert description here.
    ********************************************************************************/
    function update(questionAttrs) {
        return $q(function(resolve, reject) {
            var questionid = questionAttrs.questionid;
            setTimeout(function() {
                var QUESTION = DB_QUESTIONS[questionid];
                if (QUESTION) {
                    for (var attr in questionAttrs) {
                        QUESTION[attr] = questionAttrs[attr];
                    }
                    resolve({question: QUESTION});
                } else {
                    reject({errmsg: 'Question ' + questionid + ' not found'});
                }
            }, 500);
        });
    }

}

})();
