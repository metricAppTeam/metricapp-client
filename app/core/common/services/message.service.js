(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name MessageService
* @module metricapp
* @requires $http
* @requires $cookies
* @requires $filter
* @requires REST_SERVICE
* @requires AuthService
* @requires UserService
*
* @description
* Provides messages management services.
************************************************************************************/

angular.module('metricapp')

.service('MessageService', MessageService);

MessageService.$inject = ['$http', '$q', '$cookies', '$filter', 'REST_SERVICE', 'AuthService', 'UserService', 'DB_MESSAGES'];

function MessageService($http, $q, $cookies, $filter, REST_SERVICE, AuthService, UserService, DB_MESSAGES) {

    var service = this;

    service.getAll = getAll;
    service.getById = getById;
    //service.getNFrom = getNFrom;

    service.setReadById = setReadById;
    service.setAllRead = setAllRead;

    service.getLastRecipient = getLastRecipient;
    service.sendMessage = sendMessage;

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
            setTimeout(function() {
                var authusername = AuthService.getUsername();
                if (authusername) {
                    var S_MAILBOX = DB_MESSAGES[authusername];
                    if (S_MAILBOX) {
                        var conversations = [];
                        var toread = 0;
                        for (var recipient in S_MAILBOX) {
                            var CONVERSATION = S_MAILBOX[recipient];
                            CONVERSATION.ts_fetch = Date.now();
                            conversations.push(CONVERSATION);
                            toread += CONVERSATION.toread;
                        }
                        resolve({conversations: conversations, toread: toread});
                    } else {
                        reject({errmsg: 'Mailbox not found for user ' + authusername});
                    }
                } else {
                    reject({errmsg: 'User not logged'});
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
    * @returns {Conversation|Error} On success, the specified conversation;
    * an error message, otherwise.
    ********************************************************************************/
    function getById(recipient) {
        alert('MessageService.getById:recipient='+angular.toJson(recipient));
        return $q(function(resolve,reject) {
            setTimeout(function() {
                var authusername = AuthService.getUsername();
                if (authusername) {
                    var S_MAILBOX = DB_MESSAGES[authusername];
                    if (S_MAILBOX) {
                        var CONVERSATION = S_MAILBOX[recipient];
                        if (CONVERSATION) {
                            CONVERSATION.ts_fetch = Date.now();
                            resolve({conversation: CONVERSATION});
                        } else {
                            var NEW_CONVERSATION = {
                                sender: authusername,
                                recipient: recipient,
                                ts_fetch: Date.now(),
                                ts_update: Date.now(),
                                to_read: 0,
                                conversation: []
                            };
                            S_MAILBOX[recipient] = angular.copy(NEW_CONVERSATION);
                            resolve({conversation: NEW_CONVERSATION});
                        }
                    } else {
                        reject({errmsg: 'Mailbox not found for user ' + authusername});
                    }
                } else {
                    reject({errmsg: 'User not logged'});
                }
            }, 500);
        });
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
    /*
    function getNFrom(cnvStart, cnvN) {
        return $q(function(resolve, reject) {
            var authusername = AuthService.getUsername();
            if (!authusername) {
                reject({errmsg: 'User not logged'});
            }
            setTimeout(function() {
                var S_MAILBOX = DB_MESSAGES[authusername];
                if (S_MAILBOX) {
                    var CONVERSATIONS = [];
                    var toread = 0;
                    for (var recipient in S_MAILBOX) {
                        var CONVERSATION = S_MAILBOX[recipient];
                        CONVERSATIONS.push(CONVERSATION);
                        toread += CONVERSATION.toread;
                    }
                    var S_CONVERSATIONS = $filter('orderBy')(CONVERSATIONS, '-ts_update');
                    var conversations = S_CONVERSATIONS.slice(cnvStart, cnvN);
                    resolve({conversations: conversations, toread: toread});
                } else {
                    reject({errmsg: 'Conversations not found for user ' + authusername});
                }
            }, 500);
        });
    }
    */

    /********************************************************************************
    * @ngdoc method
    * @name setReadById
    * @description
    * Set as read the specified conversation.
    * @param {String} recipient The recipient username.
    * @returns {Boolean|Error} On success, a message;
    * an error message, otherwise.
    ********************************************************************************/
    function setReadById(recipient) {
        //alert('MessageService.setReadById:recipient='+angular.toJson(recipient));
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var authusername = AuthService.getUsername();
                if (authusername) {
                    var S_MAILBOX = DB_MESSAGES[authusername];
                    if (S_MAILBOX) {
                        var CONVERSATION = S_MAILBOX[recipient];
                        if (CONVERSATION) {
                            CONVERSATION.toread = 0;
                            resolve({msg: 'Conversation with ' + recipient + ' marked as read'});
                        } else {
                            reject({errmsg: 'Conversation with ' + recipient + ' not found for user ' + authusername});
                        }
                    } else {
                        reject({errmsg: 'Mailbox not found for user ' + authusername});
                    }
                } else {
                    reject({errmsg: 'User not logged'});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name setAllRead
    * @description
    * Set as read all the conversations for authuser.
    * @returns {Boolean|Error} On success, a message;
    * an error message, otherwise.
    ********************************************************************************/
    function setAllRead() {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var authusername = AuthService.getUsername();
                if (authusername) {
                    var S_MAILBOX = DB_NOTIFICATIONS[authusername];
                    if (S_MAILBOX) {
                        S_MAILBOX.forEach(function(CONVERSATION) {
                            CONVERSATION.toread = 0;
                        });
                        resolve({msg: 'All conversations marked as read'});
                    } else {
                        reject({errmsg: 'Mailbox not found for user ' + authusername});
                    }
                } else {
                    reject({errmsg: 'User not logged'});
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
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var authusername = AuthService.getUsername();
                if (authusername) {
                    var S_MAILBOX = DB_MESSAGES[authusername];
                    if (S_MAILBOX) {
                        var lastRecipient;
                        var ts_update = 0;
                        for (var recipient in S_MAILBOX) {
                            var CONVERSATION = S_MAILBOX[recipient];
                            if (CONVERSATION.ts_update > ts_update) {
                                lastRecipient = CONVERSATION.recipient;
                            }
                        }
                        alert('MessageService.lastRecipient: ' + angular.toJson(lastRecipient));
                        resolve({lastRecipient: lastRecipient});
                    } else {
                        reject({lastRecipient: null, errmsg: 'Mailbox not found for user ' + authusername});
                    }
                } else {
                    reject({errmsg: 'User not logged'});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name sendMessage
    * @description
    * Sends the message content to the recipient.
    * @param {String} recipient The username of the recipient.
    * @param {String} content The message content to send.
    * @returns {Message|Error} On success, the sent message
    * an error message, otherwise.
    ***************************************************************************/
    function sendMessage(recipient, content) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var authusername = AuthService.getUsername();
                if (authusername) {
                    var S_MAILBOX = DB_MESSAGES[authusername];
                    var R_MAILBOX = DB_MESSAGES[recipient];
                    var now = Date.now();
                    if (S_MAILBOX && R_MAILBOX) {
                        S_MAILBOX[recipient] = S_MAILBOX[recipient] || {
                            sender: authusername,
                            recipient: recipient,
                            ts_fetch: now,
                            ts_update: now,
                            to_read: 0,
                            conversation: []
                        };
                        R_MAILBOX[authusername] = R_MAILBOX[authusername] || {
                            sender: recipient,
                            recipient: authusername,
                            ts_fetch: now,
                            ts_update: now,
                            to_read: 0,
                            conversation: []
                        };
                        var S_CONVERSATION = S_MAILBOX[recipient];
                        var R_CONVERSATION = R_MAILBOX[authusername];

                        var newMessage = {
                            id: null,
                            ts_create: now,
                            author: authusername,
                            content: content
                        };

                        newMessage.id = R_CONVERSATION.messages[R_CONVERSATION.messages.length - 1].id + 1;
                        R_CONVERSATION.messages.push(newMessage);
                        R_CONVERSATION.ts_update = now;

                        newMessage.id = S_CONVERSATION.messages[S_CONVERSATION.messages.length - 1].id + 1;
                        S_CONVERSATION.messages.push(newMessage);
                        S_CONVERSATION.ts_update = now;

                        resolve({sentMessage: newMessage});
                    } else {
                        reject({errmsg: 'Inbox not found for user ' + authusername});
                    }
                } else {
                    reject({errmsg: 'User not logged'});
                }
            }, 500);
        });
    }

}

})();
