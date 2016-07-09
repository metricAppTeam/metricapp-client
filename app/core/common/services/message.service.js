(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name MessageService
* @module metricapp
* @requires $http
* @requires $cookies
* @requires $filter
* @requires REST_SERVICE
*
* @description
* Provides authentication services.
************************************************************************************/

angular.module('metricapp')

.service('MessageService', MessageService);

MessageService.$inject = ['$http', '$q', '$cookies', '$filter', 'REST_SERVICE', 'DB_CONVERSATIONS'];

function MessageService($http, $q, $cookies, $filter, REST_SERVICE, DB_CONVERSATIONS) {

    var service = this;

    service.getAll = getAll;
    service.getById = getById;
    service.getInArray = getInArray;
    service.getNFrom = getNFrom;

    service.getLastRecipient = getLastRecipient;

    /********************************************************************************
    * @ngdoc method
    * @name getAll
    * @description
    * Retrieves all the conversations for authuser;
    * @returns {[Conversation]|Error} On success, the conversations;
    * an error message, otherwise.
    ********************************************************************************/
    function getAll() {
        return $q(function(resolve, reject) {
            var username = $cookies.getObject('globals').user.username;
            setTimeout(function() {
                var conversations = [];
                var toread = 0;
                var INBOX = DB_CONVERSATIONS[username];
                if (INBOX) {
                    for (var recipient in INBOX) {
                        var CONVERSATION = INBOX[recipient];
                        conversations.push(CONVERSATION);
                        toread += CONVERSATION.toread;
                    }
                    resolve({conversations: conversations, toread: toread});
                } else {
                    reject({errmsg: 'Conversations not found for user ' + username});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getById
    * @description
    * Retrieves the specified conversation for authuser.
    * @param {String} recipient The username of the recipient whose conversation to
    * retrieve.
    * @param {Int} nmessages The number of last messages to retrieve.
    * @returns {Conversation|Error} On success, the specified conversation;
    * an error message, otherwise.
    ********************************************************************************/
    function getById(recipient, nmessages) {
        var username = $cookies.getObject('globals').user.username;
        setTimeout(function() {
            var INBOX = DB_CONVERSATIONS[username];
            if (INBOX) {
                var CONVERSATION = INBOX[recipient];
                if (CONVERSATION) {
                    if (nmessages < 0) {
                        resolve({conversation: CONVERSATION});
                    } else {
                        var conversation = {
                            sender: CONVERSATION.sender,
                            recipient: CONVERSATION.recipient,
                            ts_update: CONVERSATION.ts_update,
                            toread: CONVERSATION.toread
                        };
                        var MESSAGES = CONVERSATION.messages;
                        var s = Math.max(MESSAGES.length - nmessages - 1, 0);
                        conversation.messages = MESSAGES.slice(s, MESSAGES.length - 1);
                        resolve({conversation: conversation});
                    }
                } else {
                    reject({errmsg: 'Conversation not found for user ' + username + ' with recipient ' + recipient});
                }
            } else {
                reject({errmsg: 'Conversations not found for user ' + username});
            }
        }, 500);
    }

    /********************************************************************************
    * @ngdoc method
    * @name getNFrom
    * @description
    * Retrieves the specified conversations for authuser.
    * @param {Int} cnvStart First conversation index.
    * @param {Int} cnvN Number of conversations.
    * @returns {[Conversation]|Error} On success, the conversations for authuser;
    * an error message, otherwise.
    ***************************************************************************/
    function getNFrom(cnvStart, cnvN) {
        var username = $cookies.getObject('globals').user.username;
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var INBOX = DB_CONVERSATIONS[username];
                if (INBOX) {
                    var CONVERSATIONS = [];
                    var toread = 0;
                    for (var recipient in INBOX) {
                        var CONVERSATION = INBOX[recipient];
                        CONVERSATIONS.push(CONVERSATION);
                        toread += CONVERSATION.toread;
                    }
                    var S_CONVERSATIONS = $filter('orderBy')(CONVERSATIONS, '-ts_update');
                    var conversations = S_CONVERSATIONS.slice(cnvStart, cnvN);
                    resolve({conversations: conversations, toread: toread});
                } else {
                    reject({errmsg: 'Conversations not found for user ' + username});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getLastRecipient
    * @description
    * Retrieves the last recipient for authuser.
    * @returns {String|Error} On success, the username of the last recipient for authuser;
    * an error message, otherwise.
    ***************************************************************************/
    function getLastRecipient() {
        var username = $cookies.getObject('globals').user.username;
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var INBOX = DB_CONVERSATIONS[username];
                if (INBOX) {
                    var lastRecipient;
                    var ts_update = new Date(0);
                    for (var recipient in INBOX) {
                        var CONVERSATION = INBOX[recipient];
                        if (CONVERSATION.ts_update > ts_update) {
                            lastRecipient = CONVERSATION.recipient;
                        }
                    }
                    resolve({lastRecipient: lastRecipient});
                } else {
                    reject({errmsg: 'Conversations not found for user ' + username});
                }
            }, 500);
        });
    }

}

})();
