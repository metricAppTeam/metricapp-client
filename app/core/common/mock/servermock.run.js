(function() { 'use strict';

/************************************************************************************
* @ngdoc configuration
* @name servermock
* @module metricapp
* @requires $http
* @requires $httpBackend
* @requires $filter
* @requires Blob
* @requires DbMockService
* @requires REST_SERVICE

* @requires ROLES
*
* @description
* Initializes the backend simulation server for the whole application.
************************************************************************************/

angular.module('metricapp')

.run(servermock);

servermock.$inject = ['$httpBackend', '$filter', 'DbMockService', 'REST_SERVICE'];

function servermock($httpBackend, $filter, DbMockService, REST_SERVICE) {
    var ROLES = DbMockService.ROLES;
    var USERS = DbMockService.USERS;
    var CONVERSATIONS = DbMockService.CONVERSATIONS;

    /********************************************************************************
    * AUTHENTICATION: LOGIN
    ********************************************************************************/
    $httpBackend.whenPOST(REST_SERVICE.URL + '/api/login')
    .respond(function(method, url, data, headers, params) {
        var credentials = angular.fromJson(data);
        console.log('/api/login WITH ' +
        'username=' + credentials.username + ' & ' +
        'password=' + credentials.password);
        for (var i = 0; i < USERS.length; i++) {
            var user = USERS[i];
            if (user.username === credentials.username &&
                user.password === credentials.password) {
                var authuser = {
                    username: user.username,
                    password: user.password,
                    role: user.role
                };
                console.log('SUCCESS /api/login WITH ' +
                'username=' + authuser.username + ' & ' +
                'password=' + authuser.password + ' & ' +
                'role=' + authuser.role);
                USERS[i].online = true;
                return [200, authuser];
            }
        }
        console.log('FAILURE /api/login 401 WITH ' +
        'username=' + credentials.username + ' & ' +
        'password=' + credentials.password);
        return [401, {}];
    });

    /********************************************************************************
    * AUTHENTICATION: LOGOUT
    ********************************************************************************/
    $httpBackend.whenPOST(REST_SERVICE.URL + '/api/logout')
    .respond(function(method, url, data, headers, params) {
        var credentials = getCredentialsFromHeaders(headers);
        if (!credentials) {
            console.log('FAILURE /api/logout');
            return [401, {}];
        }
        console.log('/api/logout WITH ' +
        'username=' + credentials.username + ' & ' +
        'password=' + credentials.password);
        for (var i = 0; i < USERS.length; i++) {
            var user = USERS[i];
            if (user.username === credentials.username &&
                user.password === credentials.password) {
                console.log('SUCCESS /api/logout WITH ' +
                'username=' + user.username + ' & ' +
                'password=' + user.password);
                USERS[i].online = false;
                return [200, credentials.username];
            }
        }
        console.log('FAILURE /api/logout 401 WITH ' +
        'username=' + credentials.username + ' & ' +
        'password=' + credentials.password);
        return [401, credentials.username];
    });

    /********************************************************************************
    * USERS: CREATE
    ********************************************************************************/
    $httpBackend.whenPOST(REST_SERVICE.URL + '/api/users/create')
    .respond(function(method, url, data, headers, params) {
        var user = angular.fromJson(data);
        console.log('/api/users/create WITH ' +
        'username=' + user.username + ' & ' +
        'password=' + user.password + ' & ' +
        'role=' + user.role + ' & ' +
        'firstname=' + user.firstname + ' & ' +
        'lastname=' + user.lastname + ' & ' +
        'gender=' + user.gender + ' & ' +
        'birthday' + user.birthday + ' & ' +
        'email=' + user.email + ' & ' +
        'picture=' + user.picture);
        user[online] = false;
        USERS.push(user);
        console.log('SUCCESS /api/users/create WITH ' +
        'username=' + user.username + ' & ' +
        'password=' + user.password + ' & ' +
        'role=' + user.role + ' & ' +
        'firstname=' + user.firstname + ' & ' +
        'lastname=' + user.lastname + ' & ' +
        'gender=' + user.gender + ' & ' +
        'birthday' + user.birthday + ' & ' +
        'email=' + user.email + ' & ' +
        'picture=' + user.picture
        );
        var message = 'User registered';
        return [200, message];
    });

    /********************************************************************************
    * USERS: GET ALL
    ********************************************************************************/
    $httpBackend.whenGET(REST_SERVICE.URL + '/api/users')
    .respond(function(method, url, data, headers, params) {
        console.log('/api/users WITH *');
        var users = USERS.slice(0);
        console.log('SUCCESS /api/users WITH *');
        return [200, users];
    });

    /********************************************************************************
    * USERS: GET PROFILE
    ********************************************************************************/
    $httpBackend.whenPOST(REST_SERVICE.URL + '/api/users/profile')
    .respond(function(method, url, data, headers, params) {
        var username = data;
        console.log('/api/users/profile WITH ' +
        'username=' + username);
        for (var i = 0; i < USERS.length; i++) {
            var user = USERS[i];
            if (user.username === username) {
                var profile = {
                    username:   user.username,
                    role:       user.role,
                    firstname:  user.firstname,
                    lastname:   user.lastname,
                    gender:     user.gender,
                    birthday:   user.birthday,
                    email:      user.email,
                    mobile:     user.mobile,
                    picture:    user.picture,
                    online:     user.online
                }
                console.log('SUCCESS /api/users/profile WITH ' +
                'username=' + username);
                return [200, profile];
            }
        }
        console.log('FAILURE /api/users/profile WITH ' +
        'username=' + username);
        var message = 'Username ' + username + ' not found';
        return [400, message];
    });

    /********************************************************************************
    * USERS: IS ONLINE
    ********************************************************************************/
    $httpBackend.whenPOST(REST_SERVICE.URL + '/api/users/isonline')
    .respond(function(method, url, data, headers, params) {
        var username = data;
        console.log('/api/users/isonline WITH ' +
        'username=' + username);
        for (var i = 0; i < USERS.length; i++) {
            var user = USERS[i];
            if (user.username === username) {
                var isonline = user.online;
                console.log('SUCCESS /api/users/isonline WITH ' +
                'username=' + username);
                return [200, isonline];
            }
        }
        console.log('FAILURE /api/users/isonline WITH ' +
        'username=' + username);
        var message = 'Username ' + username + ' not found';
        return [400, message];
    });

    /********************************************************************************
    * USERS: EXIST WITH USERNAME
    ********************************************************************************/
    $httpBackend.whenPOST(REST_SERVICE.URL + '/api/users/exist/username')
    .respond(function(method, url, data, headers, params) {
        var username = data;
        console.log('/api/users/exist/username WITH ' +
        'username=' + username);
        for (var i = 0; i < USERS.length; i++) {
            var user = USERS[i];
            if (user.username === username) {
                console.log('SUCCESS EXIST user WITH ' +
                'username=' + username);
                return [200, {exist: true}];
            }
        }
        console.log('SUCCESS NOT EXIST user WITH ' +
        'username=' + username);
        return [200, {exist: false}];
    });

    /********************************************************************************
    * USERS: EXIST WITH EMAIL
    ********************************************************************************/
    $httpBackend.whenPOST(REST_SERVICE.URL + '/api/users/exist/email')
    .respond(function(method, url, data, headers, params) {
        var email = data;
        console.log('/api/users/exist/email WITH ' +
        'email=' + email);
        for (var i = 0; i < USERS.length; i++) {
            var user = USERS[i];
            if (user.email === email) {
                console.log('SUCCESS EXIST user WITH ' +
                'email=' + email);
                return [200, {exist: true}];
            }
        }
        console.log('SUCCESS NOT EXIST user WITH ' +
        'email=' + email);
        return [200, {exist: false}];
    });

    /********************************************************************************
    * USERS: EXIST WITH MOBILE
    ********************************************************************************/
    $httpBackend.whenPOST(REST_SERVICE.URL + '/api/users/exist/mobile')
    .respond(function(method, url, data, headers, params) {
        var mobile = data;
        console.log('/api/users/exist/mobile WITH ' +
        'mobile=' + mobile);
        for (var i = 0; i < USERS.length; i++) {
            var user = USERS[i];
            if (user.mobile === mobile) {
                console.log('SUCCESS EXIST user WITH ' +
                'mobile=' + mobile);
                return [200, {exist: true}];
            }
        }
        console.log('SUCCESS NOT EXIST user WITH ' +
        'mobile=' + mobile);
        return [200, {exist: false}];
    });

    /********************************************************************************
    * CONVERSATIONS: GET ALL
    ********************************************************************************/
    $httpBackend.whenGET(REST_SERVICE.URL + '/api/conversations')
    .respond(function(method, url, data, headers, params) {
        var credentials = getCredentialsFromHeaders(headers);
        if (!credentials) {
            console.log('FAILURE 401 /api/conversations');
            var message = 'Cannot get credentials from header';
            return [400, message]; //change to 401
        }
        var sender = credentials.username;
        console.log('/api/conversations WITH ' +
        'sender=' + sender);
        var conversations = CONVERSATIONS[sender].slice(0);
        console.log('SUCCESS /api/conversations WITH ' +
        'sender=' + sender);
        return [200, conversations];
    });

    /********************************************************************************
    * CONVERSATIONS: GET PREVIEW
    ********************************************************************************/
    $httpBackend.whenPOST(REST_SERVICE.URL + '/api/conversations/preview')
    .respond(function(method, url, data, headers, params) {
        var credentials = getCredentialsFromHeaders(headers);
        if (!credentials) {
            console.log('FAILURE 401 /api/conversations/preview');
            var message = 'Cannot get credentials from header';
            return [400, message]; //change to 401
        }
        var sender = credentials.username;
        var query = angular.fromJson(data);
        console.log('/api/conversations/preview WITH ' +
        'sender=' + sender + ' & ' +
        'start=' + query.start + ' & ' +
        'n=' + query.n);
        var previews = [];
        var conversations = CONVERSATIONS[sender];
        for (var i = query.start; i < Math.min(query.start + query.n, conversations.length); i++) {
            var conversation = conversations[i];

        }
        console.log('SUCCESS /api/conversations/preview WITH ' +
        'sender=' + sender + ' & ' +
        'start=' + query.start + ' & ' +
        'n=' + query.n);
        return [200, previews];
    });

    /********************************************************************************
    * CONVERSATIONS: GET MESSAGES
    ********************************************************************************/
    $httpBackend.whenPOST(REST_SERVICE.URL + '/api/conversations/messages')
    .respond(function(method, url, data, headers, params) {
        var credentials = getCredentialsFromHeaders(headers);
        if (!credentials) {
            console.log('FAILURE 401 /api/conversations/messages');
            var message = 'Cannot get credentials from header';
            return [400, message]; //change to 401
        }
        var sender = credentials.username;
        var recipient = angular.fromJson(data);
        console.log('/api/conversations/messages WITH ' +
        'sender=' + sender + ' & ' +
        'recipient=' + recipient);
        var messages = [];
        for (var i = 0; i < CONVERSATIONS[sender].length; i++) {
            var conversation = CONVERSATIONS[sender][i];
            if (conversation.recipient === recipient) {
                console.log('SUCCESS /api/conversations/messages WITH ' +
                'sender=' + sender + ' & ' +
                'recipient=' + recipient);
                var reads = conversation.unreads;
                CONVERSATIONS[sender][i].unreads = 0;
                var messages = conversation.messages.slice(0);
                return [200, {reads: reads, messages: messages}];
            }
        }
        console.log('FAILURE 400 /api/conversations/messages WITH ' +
        'sender=' + sender + ' & ' +
        'recipient=' + recipient);
        var message = 'Cannot find messages with recipient: ' + recipient;
        return [400, message];
    });

    /********************************************************************************
    * CONVERSATIONS: GET LAST RECIPIENT
    ********************************************************************************/
    $httpBackend.whenGET(REST_SERVICE.URL + '/api/conversations/last/recipient')
    .respond(function(method, url, data, headers, params) {
        var credentials = getCredentialsFromHeaders(headers);
        if (!credentials) {
            console.log('FAILURE 401 /api/conversations/last/recipient');
            var message = 'Cannot get credentials from header';
            return [400, message]; //change to 401
        }
        var sender = credentials.username;
        console.log('/api/conversations/last/recipient WITH ' +
        'sender=' + sender);
        var lastRecipient = CONVERSATIONS[sender][0].recipient;
        console.log('SUCCESS /api/conversations/last/recipient WITH ' +
        'sender=' + sender);
        return [200, lastRecipient];
    });

    /********************************************************************************
    * CONVERSATIONS: REMOVE
    ********************************************************************************/
    $httpBackend.whenPOST(REST_SERVICE.URL + '/api/conversations/remove')
    .respond(function(method, url, data, headers, params) {
        var credentials = getCredentialsFromHeaders(headers);
        if (!credentials) {
            console.log('FAILURE 401 /api/conversations/remove');
            var message = 'Cannot get credentials from header';
            return [400, message]; //change to 401
        }
        var sender = credentials.username;
        var recipients = angular.fromJson(data);
        var cp_recipients = recipients.slice(0);
        console.log('/api/messages/remove WITH ' +
        'sender=' + sender + ' & ' +
        'recipients=' + recipients.join(','));
        var i = 0;
        while (i < CONVERSATIONS[sender].length && usersB.length > 0) {
            var conversation = CONVERSATIONS[sender][i];
            var j = 0;
            while (j < recipients.length) {
                var recipient = recipients[j];
                if (conversation.recipient === recipient) {
                    CONVERSATIONS.splice(i, 1);
                    recipients.splice(j, 1);
                    break;
                }
                j++;
            }
            i++;
        }

        if (recipients.length == 0) {
            console.log('SUCCESS /api/messages/remove WITH ' +
            'sender=' + credentials.username + ' & ' +
            'recipients=' + cp_recipients.join(','));
            var message = 'All conversations has been removed.';
            return [200, message];
        } else {
            console.log('FAILURE /api/messages/remove WITH ' +
            'userA=' + credentials.username + ' & ' +
            'userB=' + cp_usersB.join(','));
            var message = 'Some conversations has not been removed: ' + usersB.join(',');
            return [400, message];
        }
    });

    $httpBackend.whenGET(/^dist\//).passThrough();

    function getCredentialsFromHeaders(headers) {
        var authorization = headers.Authorization;
        if (!authorization) return null;
        var authdata = authorization.split(' ')[1];
        var credentials = {
            username: authdata.split(':')[0],
            password: authdata.split(':')[1]
        };
        return credentials;
    }
}

})();
