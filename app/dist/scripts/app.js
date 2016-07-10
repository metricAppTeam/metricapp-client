(function() { 'use strict';

/************************************************************************************
* @ngdoc overview
* @name metricapp
* @requires ngRoute
* @requires ngCookies
* @requires ngMessage
* @requires ngMockE2E
*
* @description
* Defines the app module, giving all its dependencies.
************************************************************************************/

angular.module('metricapp',[
    'ngRoute',
    'ngCookies',
    'ngMessages',
    'ngFlash',
    'ngMockE2E'
]);

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name MESSAGE_STATE
* @module metricapp
* @description
* Defines constants related to message states.
* - READ:
* - UNREAD:
************************************************************************************/

angular.module('metricapp')

.constant('MESSAGE_STATE', {
    READ:   'READ',
    UNREAD: 'UNREAD'
});

})();

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
    LOGIN_SUCCESS:  'auth.login.success',
    LOGIN_FAILURE:  'auth.login.failure',
    LOGOUT_SUCCESS: 'auth.logout.success',
    LOGOUT_FAILURE: 'auth.logout.failure',
    NOT_AUTHORIZED: 'auth.not.authorized',
});

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name TEAM_EVENTS
* @module metricapp
* @description
* Defines events related to team management.
* - TEAM_EVENT_A:
* - TEAM_EVENT_B:
* - TEAM_EVENT_C:
************************************************************************************/

angular.module('metricapp')

.constant('TEAM_EVENTS', {
    TEAM_EVENT_A: 'team.event.a',
    TEAM_EVENT_B: 'team.event.b',
    TEAM_EVENT_C: 'team.event.c'
});

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name METRIC_EVENTS
* @module metricapp
* @description
* Defines events related to metrics.
* - METRIC_EVENT_A:
* - METRIC_EVENT_B:
* - METRIC_EVENT_C:
************************************************************************************/

angular.module('metricapp')

.constant('METRIC_EVENTS', {
    METRIC_EVENT_A: 'metric.event.a',
    METRIC_EVENT_B: 'metric.event.b',
    METRIC_EVENT_C: 'metric.event.c'
});

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name QUESTION_EVENTS
* @module metricapp
* @description
* Defines events related to questions.
* - QUESTION_EVENT_A:
* - QUESTION_EVENT_B:
* - QUESTION_EVENT_C:
************************************************************************************/

angular.module('metricapp')

.constant('QUESTION_EVENTS', {
    QUESTION_EVENT_A: 'question.event.a',
    QUESTION_EVENT_B: 'question.event.b',
    QUESTION_EVENT_C: 'question.event.c'
});

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name GOAL_EVENTS
* @module metricapp
* @description
* Defines events related to measurement goals.
* - GOAL_EVENT_A:
* - GOAL_EVENT_B:
* - GOAL_EVENT_C:
************************************************************************************/

angular.module('metricapp')

.constant('GOAL_EVENTS', {
    GOAL_EVENT_A: 'goal.event.a',
    GOAL_EVENT_B: 'goal.event.b',
    GOAL_EVENT_C: 'goal.event.c'
});

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name REST_SERVICE
* @module metricapp
* @description
* Defines constants related to REST services.
* - REST_SERVICE.DOMAIN: domain of the REST service.
* - REST_SERVICE.PORT: port of the REST service.
* - REST_SERVICE.URL: base URL for the REST service.
************************************************************************************/

angular.module('metricapp')

.constant('REST_SERVICE', {
    DOMAIN: 'metricapp.com',
    PORT: 8090,
    URL: 'metricapp.com:8090'
});

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name EXPERT_ACTIONS
* @module metricapp
* @description
* Defines constants related to Expert's actions.
* - EXPERT_ACTION_1:
* - EXPERT_ACTION_2:
* - EXPERT_ACTION_3:
************************************************************************************/

angular.module('metricapp')

.constant('EXPERT_ACTIONS', [
    {name: 'Profile',   href: '#/profile',   icon: 'user'},
    {name: 'Grid',      href: '#/grid',      icon: 'codepen'},
    {name: 'Team',      href: '#/team',      icon: 'users'},
    {name: 'Settings',  href: '#/settings',  icon: 'cog'}
]);

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name METRICATOR_ACTIONS
* @module metricapp
* @description
* Defines constants related to Metricator's actions.
* - METRICATOR_ACTION_1:
* - METRICATOR_ACTION_2:
* - METRICATOR_ACTION_3:
************************************************************************************/

angular.module('metricapp')

.constant('METRICATOR_ACTIONS', [
    {name: 'Profile', href: '#/profile'},
    {name: 'Dashboard', href: '#/metricator'},
    {name: 'Settings', href: '#/settings'},
    {name: 'Search MG', href: '#/measurementgoalsearch'}
]);

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name QUESTIONER_ACTIONS
* @module metricapp
* @description
* Defines constants related to Questioner's actions.
* - QUESTIONER_ACTION_1:
* - QUESTIONER_ACTION_2:
* - QUESTIONER_ACTION_3:
************************************************************************************/

angular.module('metricapp')

.constant('QUESTIONER_ACTIONS', [
    {name: 'Profile', href: '/#profile'},
    {name: 'QUESTIONER_ACTION_2', href: '#/questioner_action_2'},
    {name: 'Settings', href: '#/settings'}
]);

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name GENDERS
* @module metricapp
* @description
* Defines constants related to user genders.
* - MALE:
* - FEMALE:
************************************************************************************/

angular.module('metricapp')

.constant('GENDERS', {
    MALE:   'MALE',
    FEMALE: 'FEMALE'
});

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name ROLES
* @module metricapp
* @description
* Defines constants related to user roles.
* - EXPERT:
* - QUESTIONER:
* - METRICATOR:
************************************************************************************/

angular.module('metricapp')

.constant('ROLES', {
    EXPERT:     'EXPERT',
    QUESTIONER: 'QUESTIONER',
    METRICATOR: 'METRICATOR'
});

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_PROFILES
* @module metricapp
*
* @description
* Provides the simulation of the DB document `profiles`.
************************************************************************************/

angular.module('metricapp')

.value('DB_PROFILES', [
    {
        username:   'expert',
        firstname:  'Giacomo',
        lastname:   'Marciani',
        gender:     'MALE',
        birthday:   '27/06/1990',
        email:      'giacomo.marciani@domain.com',
        picture:    'uploads/profile-picture.png'
    },
    {
        username: 'questioner',
        firstname: 'Marco',
        lastname: 'Piu',
        gender:     'MALE',
        birthday:   '27/06/1990',
        email:      'marco.piu@domain.com',
        picture:    'uploads/profile-picture.png'
    },
    {
        username: 'metricator',
        firstname: 'Andrea',
        lastname: 'Gennusa',
        gender:     'MALE',
        birthday:   '27/06/1990',
        email:      'andrea.gennusa@domain.com',
        picture:    'uploads/profile-picture.png'
    }
]);

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_USERS
* @module metricapp
*
* @description
* Provides the simulation of the DB document `users`.
************************************************************************************/

angular.module('metricapp')

.value('DB_USERS', [
    {
        username: 'expert',
        password: 'password',
        role: 'EXPERT'
    },
    {
        username: 'questioner',
        password: 'password',
        role: 'QUESTIONER'
    },
    {
        username: 'metricator',
        password: 'password',
        role: 'METRICATOR'
    }
]);

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc overview
* @name config.flash
* @module metricapp
* @requires FlashProvider
*
* @description
* Defines the flash messaging behaviour for the whole app.
************************************************************************************/

angular.module('metricapp')

.config(flash);

flash.$inject = ['FlashProvider'];

function flash(FlashProvider) {

    FlashProvider.setTimeout(5000);

    FlashProvider.setShowClose(true);

    FlashProvider.setOnDismiss(function() {
        alert('flash message dismissed');
    });

    //var template = `<div class="my-flash">{{ flash.text }}</div>`;

    //FlashProvider.setTemplate(template);
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc overview
* @name config.interceptors
* @module metricapp
* @requires $httpProvider
*
* @description
* Defines the HTTP interceptors for the whole app.
************************************************************************************/

angular.module('metricapp')

.config(interceptors);

interceptors.$inject = ['$httpProvider'];

function interceptors($httpProvider) {

    $httpProvider.interceptors.push('Error401Interceptor');

    $httpProvider.interceptors.push('Error404Interceptor');

    $httpProvider.interceptors.push('Error500Interceptor');
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc overview
* @name config.routes
* @module metricapp
* @requires $routeProvider
* @requires $locationProvider
*
* @description
* Defines the routing configuration for the whole app.
************************************************************************************/

angular.module('metricapp')

.config(routes);

routes.$inject = ['$routeProvider', '$locationProvider'];

function routes($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        redirectTo: '/home'
    })
    .when('/signup', {
        templateUrl: 'dist/views/authentication/signup.view.html'
    })
    .when('/login', {
        templateUrl: 'dist/views/authentication/login.view.html'
    })
    .when('/home', {
        templateUrl: 'dist/views/home/home.view.html'
    })
    .when('/notifications', {
        templateUrl: 'dist/views/notification/notifications.view.html'
    })
    .when('/messages', {
        templateUrl: 'dist/views/message/messages.view.html'
    })
    .when('/profile', {
        templateUrl: 'dist/views/people/profile.view.html'
    })
    .when('/settings', {
        templateUrl: 'dist/views/setting/settings.view.html'
    })
    .when('/grid', {
        templateUrl: 'dist/views/graph/grid/grid.view.html'
    })
    .when('/team', {
        templateUrl: 'dist/views/team/team.view.html'
    })
    .when('/401', {
        templateUrl: 'dist/views/error/error401.view.html'
    })
    .when('/404', {
        templateUrl: 'dist/views/error/error404.view.html'
    })
    .when('/500', {
        templateUrl: 'dist/views/error/error500.view.html'
    })
    .when('/measurementgoal', {
        templateUrl: 'dist/views/measurementgoal/measurementgoal.view.html'
    })
    .when('/measurementgoalsearch', {
        templateUrl: 'dist/views/measurementgoal/measurementgoalsearch.view.html'
    })
    .when('/metricator', {
        templateUrl: 'dist/views/metricator/metricator.view.html'
    })
    .otherwise({
        redirectTo: '/404'
    });
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name Error401Interceptor
* @module metricapp
* @requires $q
* @requires $location
*
* @description
* Defines the HTTP interceptor to handle error 401.
************************************************************************************/

angular.module('metricapp')

.factory('Error401Interceptor', Error401Interceptor);

Error401Interceptor.$inject = ['$q', '$location'];

function Error401Interceptor($q, $location) {
    return {
        response: function(response) {
                return response;
        },

        responseError: function(response) {            
            if (response.status === 401) {
                console.log('Error401Interceptor.responseError');
                $location.path('/401');
                return $q.reject(response);
            }
            return $q.reject(response);
        }
    };
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name Error404Interceptor
* @module metricapp
* @requires $q
* @requires $location
*
* @description
* Defines the HTTP interceptor to handle error 404.
************************************************************************************/

angular.module('metricapp')

.factory('Error404Interceptor', Error404Interceptor);

Error404Interceptor.$inject = ['$q', '$location'];

function Error404Interceptor($q, $location) {
    return {
        response: function(response) {
                return response;
        },

        responseError: function(response) {            
            if (response.status === 404) {
                console.log('Error404Interceptor.responseError');
                $location.path('/404');
                return $q.reject(response);
            }
            return $q.reject(response);
        }
    };
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name Error500Interceptor
* @module metricapp
* @requires $q
* @requires $location
*
* @description
* Defines the HTTP interceptor to handle error 500.
************************************************************************************/

angular.module('metricapp')

.factory('Error500Interceptor', Error500Interceptor);

Error500Interceptor.$inject = ['$q', '$location'];

function Error500Interceptor($q, $location) {
    return {
        response: function(response) {
            return response;
        },

        responseError: function(rejection) {            
            if (rejection.status === 500) {
                console.log('Error500Interceptor.responseError');
                $location.path('/500');
                return $q.reject(rejection);
            }
            return $q.reject(rejection);
        }
    };
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name DbMockService
* @module metricapp
* @requires ROLES
* @requires DB_USERS
* @requires DB_PROFILES
*
* @description
* Provides DB backend simulated data.
************************************************************************************/

angular.module('metricapp')

.service('DbMockService', DbMockService);

DbMockService.$inject = ['ROLES', 'GENDERS', 'DB_USERS', 'DB_PROFILES'];

function DbMockService(ROLES, GENDERS, DB_USERS, DB_PROFILES) {
    var service = this;

    service.ROLES = ROLES;
    service.GENDERS = GENDERS;
    service.USERS = DB_USERS;
    service.PROFILES = DB_PROFILES;

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name ActionService
* @module metricapp
* @requires EXPERT_ACTIONS
* @requires METRICATOR_ACTIONS
* @requires QUESTIONER_ACTIONS
*
* @description
* Provides actions reference according to user roles.
************************************************************************************/

angular.module('metricapp')

.service('ActionService', ActionService);

ActionService.$inject = [
    'EXPERT_ACTIONS',
    'METRICATOR_ACTIONS',
    'QUESTIONER_ACTIONS'
];

function ActionService(EXPERT_ACTIONS, METRICATOR_ACTIONS, QUESTIONER_ACTIONS) {

    var service = this;

    service.DASHBOARDS = {
        EXPERT: '/dashboardExpert',
        METRICATOR: '/dashboardMetricator',
        QUESTIONER: '/dashboardQuestioner'
    };

    service.ACTIONS = {
        EXPERT: EXPERT_ACTIONS,
        METRICATOR: METRICATOR_ACTIONS,
        QUESTIONER: QUESTIONER_ACTIONS
    };

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name AuthService
* @module metricapp
* @requires $http
* @requires $rootScope
* @requires $cookies
* @requires UserService
* @requires REST_SERVICE
* @requires ROLES
*
* @description
* Provides authentication services.
************************************************************************************/

angular.module('metricapp')

.service('AuthService', AuthService);

AuthService.$inject = [
    '$http', '$rootScope', '$cookies',
    'UserService', 'REST_SERVICE', 'ROLES'];

function AuthService($http, $rootScope, $cookies, UserService, REST_SERVICE, ROLES) {

    var service = this;

    service.ROLES = ROLES;

    service.login = login;
    service.logout = logout;
    service.getUser = getUser;
    service.setUser = setUser;
    service.clearUser = clearUser;

    /********************************************************************************
    * @ngdoc method
    * @name login
    * @description
    * Autheticates with the specified credentials.
    * @param {Credentials} credentials The user credentials.
    * @returns {User} On success, the authenticated User; null otherwise.
    ***************************************************************************/
    function login(credentials) {
        console.log('LOGIN user WITH ' +
        'username=' + credentials.username + ' & ' +
        'password=' + credentials.password);
        return $http.post(REST_SERVICE.URL + '/api/login', credentials).then(
            function(response) {
                var authuser = response.data;
                console.log('SUCCESS LOGIN user WITH ' +
                'username=' + authuser.username + ' & ' +
                'password=' + authuser.password + ' & ' +
                'role=' + authuser.role);
                return authuser;
            },
            function(response) {
                console.log('FAILURE LOGIN user WITH ' +
                'username=' + credentials.username + ' & ' +
                'password=' + credentials.password);
                return null;
            }
        );
    }

    /********************************************************************************
    * @ngdoc method
    * @name logout
    * @description
    * Deautheticates user with the specified credentials.
    * @param {Credentials} credentials The user credentials.
    * @returns {Response} Insert description here.
    ********************************************************************************/
    function logout() {
        console.log('LOGOUT user');
        return $http.post(REST_SERVICE.URL + '/api/logout').then(
            function(response) {
                var username = response.data;
                console.log('SUCCESS LOGOUT user WITH ' +
                'username=' + username);
                return username;
            },
            function(response) {
                var username = response.data;
                console.log('FAILURE LOGOUT user WITH ' +
                'username=' + username);
                var errmsg = 'Cannot logout ' + username;
                return errmsg;
            }
        );
    }

    /********************************************************************************
    * @ngdoc method
    * @name getUser
    * @description
    * Retrieves user stored into the cookie.
    * @returns {User} THe authuser stored into the cookie.
    ********************************************************************************/
    function getUser() {
        console.log('GET-USER cookie');
        var user = $cookies.getObject('globals').user;
        console.log('GET-COOKIE globals.user WITH ' +
        'username=' + user.username + ' & ' +
        'role=' + user.role + ' & ' +
        'authdata=' + user.authdata);
        return user;
    }

    /********************************************************************************
    * @ngdoc method
    * @name setUser
    * @description
    * Stores the current user into a cookie.
    * @param {User} user Insert description here.
    * @returns {String} Insert description here.
    ********************************************************************************/
    function setUser(authuser) {
        console.log('SET-USER cookie WITH ' +
        'username=' + authuser.username + ' & ' +
        'password=' + authuser.password + ' & ' +
        'role=' + authuser.role);

        var authdata = authuser.username + ':' + authuser.password + ':' + authuser.role;

        $rootScope.globals = {
            user: {
                username: authuser.username,
                role: authuser.role,
                authdata: authdata
            }
        };

        $cookies.putObject('globals', $rootScope.globals);
        console.log('PUT-COOKIE globals.user WITH ' +
        'username=' + $rootScope.globals.user.username + ' & ' +
        'role=' + $rootScope.globals.user.role + ' & ' +
        'authdata=' + $rootScope.globals.user.authdata);

        $http.defaults.headers.common.Authorization = 'Basic ' + authdata;
        console.log('SET-HEADER common WITH ' +
        'Authorization=' + $http.defaults.headers.common.Authorization);
    }

    /********************************************************************************
    * @ngdoc method
    * @name clearUser
    * @description
    * Removes the user stored ito the cookie.
    ********************************************************************************/
    function clearUser() {
        console.log('CLEAR-USER cookie');
        $rootScope.globals = {};
        $cookies.remove('globals');
        console.log('REMOVE-COOKIE globals');
        $http.defaults.headers.common.Authorization = 'Basic';
        console.log('SET-HEADER common WITH ' +
        'Authorization=' + $http.defaults.headers.common.Authorization);
    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name CryptoService
* @module metricapp
*
* @description
* Provides cryptography services (i.e., string encription/decription).
************************************************************************************/

angular.module('metricapp')

.service('CryptoService', CryptoService);

function CryptoService() {

    var service = this;

    service.encode = encode;
    service.decode = decode;

    /********************************************************************************
    * @ngdoc method
    * @name encode
    * @description
    * Encodes a string using MD5 encryption.
    * @param {String} string The input string to encode.
    * @returns {String} The encoded string.
    ********************************************************************************/
    function encode(string) {
        return string;
    }

    /********************************************************************************
    * @ngdoc method
    * @name decode
    * @description
    * Decodes a string previously encoded in MD5 encryption.
    * @param {String} string The encoded string to decode.
    * @returns {String} The decoded string.
    ********************************************************************************/
    function decode(string) {
        return string;
    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name FlashService
* @module metricapp
* @requires Flash
*
* @description
* Provides flash messaging services.
************************************************************************************/

angular.module('metricapp')

.service('FlashService', FlashService);

FlashService.$inject = ['Flash'];

function FlashService(Flash) {

    var service = this;

    service.success = success;
    service.info = info;
    service.warning = warning;
    service.danger = danger;

    /********************************************************************************
    * @ngdoc method
    * @name success
    * @description
    * Shows a success flash message.
    * @param {String} message The message to flash.
    ***************************************************************************/
    function success(message) {
        Flash.create('success', message, 0, {class: 'custom-class', id: 'custom-id'}, true);
    }

    /********************************************************************************
    * @ngdoc method
    * @name info
    * @description
    * Shows a info flash message.
    * @param {String} message The message to flash.
    ***************************************************************************/
    function info(message) {
        Flash.create('info', message, 0, {class: 'custom-class', id: 'custom-id'}, true);
    }

    /********************************************************************************
    * @ngdoc method
    * @name warning
    * @description
    * Shows a warning flash message.
    * @param {String} message The message to flash.
    ***************************************************************************/
    function warning(message) {
        Flash.create('warning', message, 0, {class: 'custom-class', id: 'custom-id'}, true);
    }

    /********************************************************************************
    * @ngdoc method
    * @name danger
    * @description
    * Shows a danger flash message.
    * @param {String} message The message to flash.
    ***************************************************************************/
    function danger(message) {
        Flash.create('danger', message, 0, {class: 'custom-class', id: 'custom-id'}, true);
    }

}

})();

/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 16:21:06
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-10 16:14:25
*/
(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name MeasurementGoalService
* @module metricapp
* @requires $http
* @requires $rootScope
* @requires $cookies
*
* @description
* Submits a MeasurementGoal.
************************************************************************************/

angular.module('metricapp')

.service('MeasurementGoalService', MeasurementGoalService);

MeasurementGoalService.$inject = [
    '$http', '$rootScope', '$cookies', '$window'];

function MeasurementGoalService($http, $rootScope, $cookies, $window) {

    var service = this;

    service.measurementGoalToUpdate = {};
    service.submitMeasurementGoal = submitMeasurementGoal;
    service.getMeasurementGoals = getMeasurementGoals;
    service.getMeasurementGoalsBy = getMeasurementGoalsBy;
    service.toUpdateMeasurementGoal = toUpdateMeasurementGoal;
    service.getUpdateMeasurementGoal = getUpdateMeasurementGoal;
    service.getOrganizationalGoalById = getOrganizationalGoalById;

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Submits a MeasurementGoal.
    * @param {MeasurementGoal} Measurement Goal to submit.
    ********************************************************************************/
    function submitMeasurementGoal(measurementGoal) {
        console.log('SUBMIT measurementGoal WITH ' +
        'name= '  + measurementGoal.name + ' & ' +	
        'object=' + measurementGoal.object + ' & ' +
        'purpose=' + measurementGoal.purpose + ' & ' +
        'viewPoint=' + measurementGoal.viewPoint + ' & ' +
        'focus=' + measurementGoal.focus);

        var metadata = {
        	tags:['saassad','sadsadsad','sadsadsad'],
  			creatorId:'3',
      		state:'Created',
      		releaseNote:'sakjbsakjabskjsa'
        };

        var submit = {
        	userId: '26',
        	name: 'name',
        	object: measurementGoal.object,
        	purpose: measurementGoal.purpose,
        	viewPoint: measurementGoal.viewPoint,
        	focus: measurementGoal.focus,
        	metadata: metadata};
                
        $window.alert(JSON.stringify(submit));

        return $http.post('http://localhost:8080/metricapp-server-gitlab/measurementgoal/', submit).then(
            function(response) {
                var message = "Success!, id: "+ angular.fromJson(response.data).measurementGoals[0].metadata.id;
                console.log('SUCCESS GET measurementGoal');
                return message;
            },
            function(response) {
                var message = response.data;
                console.log('FAILURE GET measurementGoal');
                return message;
            }
        );

    }


    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get measurement goals.
    ********************************************************************************/
    
    function getMeasurementGoals() {
        
        return $http.get('http://localhost:8080/metricapp-server-gitlab/measurementgoal?userid=metricator').then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET MEASUREMENT GOALS');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET MEASUREMENT GOALS');
                console.log(message);
                return message;
            }
        );

    }

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get measurement goals.
    ********************************************************************************/
    
    function getOrganizationalGoalById(organizationalGoalId) {
        
        //return $http.get('http://localhost:8080/metricapp-server-gitlab/external/organizationalgoal?id='+organizationalGoalId).then(
        
        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/external/organizationalgoal?id=1').then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET ORGANIZATIONAL GOAL');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET ORGANIZATIONAL GOAL');
                console.log(message);
                return message;
            }
        );

    }


    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get a measurement goal
    * @param {MeasurementGoal} field key.
    * @param {MeasurementGoal} field value .
    ********************************************************************************/
    
    function getMeasurementGoalsBy(keyword,field) {
        
        return $http.get("http://localhost:8080/metricapp-server-gitlab/measurementgoal?" + field + "=" + keyword).then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET MEASUREMENT GOALS');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET MEASUREMENT GOALS');
                console.log(message);
                return message;
            }
        );

    }

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Update a measurement goal, when a controller asks for it to show a form
    * @param {MeasurementGoal} measurement goal to update.
    ********************************************************************************/
    function toUpdateMeasurementGoal(toUpdate){
        service.measurementGoalToUpdate = toUpdate;
    }

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get measurement goal to update
    ********************************************************************************/
    function getUpdateMeasurementGoal(){
        return service.measurementGoalToUpdate;
    }

}

})();
/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 16:21:06
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-10 18:46:38
*/
(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name MetricService
* @module metricapp
* @requires $http
* @requires $window
* @requires $cookies
*
* @description
* Get Metrics.
************************************************************************************/

angular.module('metricapp')

.service('MetricService', MetricService);

//MetricatorService.$inject = [
//    '$http', '$rootScope', '$cookies', '$window'];

MetricService.$inject = ['$http', '$window'];
             
//function MetricatorService($http, $rootScope, $cookies, $window) {
function MetricService($http, $window) {

    var service = this;

    service.getMetrics = getMetrics;
    service.getApprovedMetrics = getApprovedMetrics;
    service.getMetricsById = getMetricsById;

    /********************************************************************************
    * @ngdoc method
    * @name getMetrics
    * @description
    * Get Metric by user.
    ********************************************************************************/

    function getMetrics() {
        
        return $http.get('http://localhost:8080/metricapp-server-gitlab/metric?userid=metricator').then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET METRICS');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET METRICS');
                console.log(message);
                return message;
            }
        );

    }

    /********************************************************************************
    * @ngdoc method
    * @name getMetrics
    * @description
    * Get Metric by user.
    ********************************************************************************/

    function getMetricsById(metricId) {
        
        return $http.get('http://localhost:8080/metricapp-server-gitlab/metric?id='+metricId).then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET METRICS');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET METRICS');
                console.log(message);
                return message;
            }
        );

    }

    /********************************************************************************
    * @ngdoc method
    * @name getApprovedMetrics
    * @description
    * Get approved metric by state.
    ********************************************************************************/

    function getApprovedMetrics() {
        
        return $http.get('http://localhost:8080/metricapp-server-gitlab/metric?state=Approved').then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET METRICS BY APPROVED VERSION');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET METRICS');
                console.log(message);
                return message;
            }
        );

    }

}

})();
(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name ProfileService
* @module metricapp
* @requires $http
*
* @description
* Provides public profile management services.
************************************************************************************/

angular.module('metricapp')

.service('ProfileService', ProfileService);

ProfileService.$inject = ['$http'];

function ProfileService($http) {

    var service = this;

    service.foo = foo;

    /********************************************************************************
    * @ngdoc method
    * @name foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @return {type} Insert here return description.
    ********************************************************************************/
    function foo(a, b, c) {

    }

    /********************************************************************************
    * @ngdoc method
    * @name _foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @return {type} Insert here return description.
    ********************************************************************************/
    function _foo(a, b, c) {

    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name SignupService
* @module metricapp
* @requires $http
* @requires $rootScope
* @requires $cookies
* @requires UserService
* @requires REST_SERVICE
* @requires ROLES
*
* @description
* Provides authentication and registration services.
************************************************************************************/

angular.module('metricapp')

.service('SignupService', SignupService);

SignupService.$inject = [
    '$http', '$rootScope', '$cookies',
    'UserService',
    'REST_SERVICE', 'ROLES'];

function SignupService($http, $rootScope, $cookies, UserService, REST_SERVICE, ROLES) {

    var service = this;

    service.ROLES = ROLES;

    service.signup = signup;

    /********************************************************************************
    * @ngdoc method
    * @name signup
    * @description
    * Registers a new user with the specified profile.
    * @param {User} user The user to register.
    * @param {Profile} profile The user profile.
    ********************************************************************************/
    function signup(user, profile) {
        console.log('SIGN-UP user WITH ' +
        'username=' + user.username + ' & ' +
        'password=' + user.password + ' & ' +
        'role=' + user.role + ' & ' +
        'firstname=' + profile.firstname + ' & ' +
        'lastname=' + profile.lastname + ' & ' +
        'gender=' + profile.gender + ' & ' +
        'birthday=' + profile.birthday + ' & ' +
        'email=' + profile.email + ' & ' +
        'picture=' + profile.picture);
        var registration = {user: user, profile: profile};
        return $http.post(REST_SERVICE.URL + '/api/signup', registration).then(
            function(response) {
                var message = response.data;
                console.log('SUCCESS SIGN-UP user WITH ' +
                'username=' + user.username + ' & ' +
                'password=' + user.password + ' & ' +
                'role=' + user.role);
                return {success: true, message: message};
            },
            function(response) {
                var message = response.data;
                console.log('FAILURE SIGN-UP user WITH ' +
                'username=' + credentials.username + ' & ' +
                'password=' + credential.username);
                return {success: false, message: message};
            }
        );

    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name UserService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
*
* @description
* Realizes a user DAO.
************************************************************************************/

angular.module('metricapp')

.service('UserService', UserService);

UserService.$inject = ['$http', 'REST_SERVICE'];

function UserService($http, REST_SERVICE) {

    var service = this;

    service.getAll = getAll;
    service.getByUsername = getByUsername;
    service.create = create;
    service.remove = remove;

    /********************************************************************************
    * @ngdoc method
    * @name getAll
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @returns {JSON} Insert description here.
    ********************************************************************************/
    function getAll() {
        return $http.get(REST_SERVICE + '/api/users').then(
            function(response) {
                return response.data;
            },
            function(error) {
                return { success: false, message: error };
            }
        );
    }

    /********************************************************************************
    * @ngdoc method
    * @name getByUsername
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {String} username Insert description here.
    * @returns {JSON} Insert description here.
    ********************************************************************************/
    function getByUsername(username) {
        var query = { filter: 'username', value: username };
        return $http.get(REST_SERVICE + '/api/users', query).then(
            function(response) {
                return response.data;
            },
            function(error) {
                return { success: false, message: error };
            }
        );
    }

    /********************************************************************************
    * @ngdoc method
    * @name create
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {User} user Insert description here.
    * @returns {JSON} Insert description here.
    ********************************************************************************/
    function create(user) {
        return $http.post(REST_SERVICE + '/api/users/create', user).then(
            function(response) {
                return response.data;
            },
            function(error) {
                return { success: false, message: error };
            }
        );
    }

    /********************************************************************************
    * @ngdoc method
    * @name remove
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {User} user Insert description here.
    * @returns {JSON} Insert description here.
    ********************************************************************************/
    function remove(user) {
        return $http.post(REST_SERVICE + '/api/users/remove', user).then(
            function(response) {
                return response.data;
            },
            function(error) {
                return { success: false, message: error };
            }
        );
    }

}

})();

(function () {
  'use strict';

  angular.module('metricapp')
      .directive('measurementgoal', metricator);

  function metricator() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/measurementgoal/measurementgoal.view.html'
    };
  }

})();

(function () {
  'use strict';

  angular.module('metricapp')
      .directive('measurementgoalsearch', metricator);

  function metricator() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/measurementgoal/measurementgoal.view.html'
    };
  }

})();
(function () {
  'use strict';

  angular.module('metricapp')
      .directive('metricator', metricator);

  function metricator() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/metricator/metricator.view.html'
    };
  }

})();

(function () {
  'use strict';

  angular.module('metricapp')
      .directive('page', page);

  function page() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/page/page.view.html'
    };
  }

})();
(function () {
  'use strict';

  angular.module('metricapp')
      .directive('viewabout', viewabout);

  function viewabout() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/people/viewpersonalprofile/viewabout.view.html'
    };
  }

  angular.module('metricapp')
      .directive('viewprojects', viewprojects);

  function viewprojects() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/people/viewpersonalprofile/viewprojects.view.html'
    };
  }

  angular.module('metricapp')
      .directive('viewstatistics', viewstatistics);

  function viewstatistics() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/people/viewpersonalprofile/viewstatistics.view.html'
    };
  }

  angular.module('metricapp')
      .directive('vieweditprofile', vieweditprofile);

  function vieweditprofile() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/people/viewpersonalprofile/vieweditprofile.view.html'
    };
  }

  angular.module('metricapp')
      .directive('vieweditcredentials', vieweditcredentials);

  function vieweditcredentials() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/people/viewpersonalprofile/vieweditcredentials.view.html'
    };
  }

})();
(function() { 'use strict';

/************************************************************************************
* @ngdoc directive
* @name mMatch
* @module metricapp
* @restrict A
*
* @description
* Matches the equality of current model value against the specified expression.
* If unmatching, the validation model.$error.match is set to true.
*
* @example
*   <input ng-model="vm.fieldOne"/>
*   <input ng-model="vm.fieldTwo" m-match="{{vm.fieldOne}}"/>
************************************************************************************/

angular.module('metricapp')

.directive('mMatch', mMatch);

function mMatch() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.match = function(modelValue, viewValue) {
                return attributes.mMatch === modelValue;
            };
        }
    };
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc directive
* @name mUnique
* @module metricapp
* @requires $http
* @requires $q
* @restrict A
*
* @description
* Checks the unicity of the current model value against the specified REST
* service.
* If existing, the validation model.$error.unique is set to true.
*
* @example
*   <input ng-model="vm.fieldTwo" m-match="{{vm.fieldOne}}"/>
************************************************************************************/

angular.module('metricapp')

.directive('mUnique', mUnique);

mUnique.$inject = ['$http', '$q'];

function mUnique($http, $q) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attributes, ngModel) {
            var restService = attributes.mUnique;
            ngModel.$asyncValidators.unique = function(modelValue, viewValue) {
                var value = viewValue;
                console.log('m-unique WITH value=' + value);
                var deferred = $q.defer();
                $http.post(restService, value).then(function(response) {
                    if (response.data.exist) {
                        deferred.reject();
                    } else {
                        deferred.resolve();
                    }
                });
                return deferred.promise;
            }
        }
    };
}

})();

(function () { 'use strict';

angular.module('metricapp')

.directive('sidebar', sidebar);

function sidebar() {
    return {
      restrict: 'E',
      scope: false,
      controller: 'SidebarController as vm',
      templateUrl: 'dist/views/navigation/sidebar/sidebar.view.html'
    };
}

})();

(function () { 'use strict';

angular.module('metricapp')

.directive('topbar', topbar);

function topbar() {
    return {
      restrict: 'E',
      scope: false,
      controller: 'TopbarController as vm',
      templateUrl: 'dist/views/navigation/topbar/topbar.view.html'
    };
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name LoginController
* @requires $rootScope
* @requires $location
* @requires AuthService
* @requires AUTH_EVENTS
*
* @description
* Manages the user login.
* Realizes the control layer for `login.view`.
************************************************************************************/

angular.module('metricapp')

.controller('LoginController', LoginController);

LoginController.$inject = ['$rootScope', '$location', 'AuthService', 'AUTH_EVENTS'];

function LoginController($rootScope, $location, AuthService, AUTH_EVENTS) {

    var vm = this;

    vm.loading = false;

    vm.login = login;

    /********************************************************************************
    * @ngdoc method
    * @name login
    * @description
    * Authenticates the user, by its username and password.
    ********************************************************************************/
    function login() {
        vm.loading = true;

        var credentials = {
            username: vm.username,
            password: vm.password
        };

        AuthService.login(credentials).then(function(authuser) {
            if (authuser) {
                AuthService.setUser(authuser);
                $rootScope.$broadcast(AUTH_EVENTS.LOGIN_SUCCESS);
                $location.path('/home');
            } else {
                alert('Invalid username or password');
                $rootScope.$broadcast(AUTH_EVENTS.LOGIN_FAILURE);

            }
        });

        vm.loading = false;

    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name LogoutController
* @requires $rootScope
* @requires $location
* @requires AuthService
* @requires AUTH_EVENTS
*
* @description
* Manages the user logout.
* Realizes the control layer for `logout.view`.
************************************************************************************/

angular.module('metricapp')

.controller('LogoutController', LogoutController);

LogoutController.$inject = ['$rootScope', '$location', 'AuthService', 'AUTH_EVENTS'];

function LogoutController($rootScope, $location, AuthService, AUTH_EVENTS) {

    var vm = this;

    vm.loading = false;

    vm.logout = logout;

    /********************************************************************************
    * @ngdoc method
    * @name logout
    * @description
    * Deauthenticates the user, via its local cookie.
    ********************************************************************************/
    function logout() {
        vm.loading = true;
        AuthService.logout().then(
            function(username) {
                AuthService.clearUser();
                $rootScope.$broadcast(AUTH_EVENTS.LOGOUT_SUCCESS);
                vm.loading = false;
                $location.path('/');
            },
            function(errmsg) {
                alert(errmsg);
                $rootScope.$broadcast(AUTH_EVENTS.LOGIN_FAILURE);
                vm.loading = false;
            }
        );
    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name SignupController
* @module metricapp
* @requires $scope
* @requires $location
* @requires SignupService
* @requires FlashService
* @requires ROLES
* @requires GENDERS
*
* @description
* Manages the user registration.
* Realizes the control layer for `signup.view`.
************************************************************************************/

angular.module('metricapp')

.controller('SignupController', SignupController);

SignupController.$inject = [
    '$scope', '$location',
    'SignupService', 'FlashService',
    'ROLES', 'GENDERS'
];

function SignupController($scope, $location, SignupService, FlashService, ROLES, GENDERS) {

    var vm = this;

    vm.ROLES = ROLES;
    vm.GENDERS = GENDERS;

    vm.signup = signup;
    vm.cancelSignup = cancelSignup;

    _init();

    /********************************************************************************
    * @ngdoc method
    * @name signup
    * @description
    * Registers a new user.
    ********************************************************************************/
    function signup() {

        var user = {
            username: vm.username,
            password: vm.password,
            role: vm.role
        };

        var profile = {
            firstname: vm.firstname,
            lastname: vm.lastname,
            gender: vm.gender,
            birthday: vm.birthday,
            email: vm.email,
            picture: vm.picture
        };

        SignupService.signup(user, profile).then(
            function(response) {
                if (response.success) {
                    FlashService.success(response.message);
                    $location.path('/');
                } else {
                    FlashService.success(response.message);
                }
            }
        );
    }

    /********************************************************************************
    * @ngdoc method
    * @name cancelSignup
    * @description
    * Cancels the ongoing user registration.
    ********************************************************************************/
    function cancelSignup() {
        $location.path('/');
    }

    /********************************************************************************
    * @ngdoc method
    * @name _init
    * @description
    * Initializes the controller.
    ********************************************************************************/
    function _init() {
        vm.loading = false;
    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name CommentController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the comment-based conversation between users.
* Realizes the control layer for `comment.view`.
************************************************************************************/

angular.module('metricapp')

.controller('CommentController', CommentController);

CommentController.$inject = ['$scope', '$location'];

function CommentController($scope, $location) {

    var vm = this;

    vm.foo = foo;

    /********************************************************************************
    * @ngdoc method
    * @name foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @returns {type} Insert here return description.
    ********************************************************************************/
    function foo(a, b, c) {

    }

    /********************************************************************************
    * @ngdoc method
    * @name _foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @returns {type} Insert here return description.
    ********************************************************************************/
    function _foo(a, b, c) {

    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name Error401Controller
* @requires $location
* @requires AuthService
*
* @description
* Handles the 401 error.
* Realizes the control layer for `401.view`.
************************************************************************************/

angular.module('metricapp')

.controller('Error401Controller', Error401Controller);

Error401Controller.$inject = ['$window', '$location'];

function Error401Controller($window, $location) {

    var vm = this;

    vm.goHome = goHome;
    vm.goBack = goBack;

    /********************************************************************************
    * @ngdoc method
    * @name goHome
    * @description
    * Changes `$location` to the Home.
    ********************************************************************************/
    function goHome() {
        $location.path('/home');
    }

    /********************************************************************************
    * @ngdoc method
    * @name goBack
    * @description
    * Changes `$location` to the previous page in history.
    ********************************************************************************/
    function goBack() {
        $window.history.back();
    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name Error404Controller
* @requires $location
* @requires AuthService
*
* @description
* Handles the 404 error.
* Realizes the control layer for `404.view`.
************************************************************************************/

angular.module('metricapp')

.controller('Error404Controller', Error404Controller);

Error404Controller.$inject = ['$window', '$location'];

function Error404Controller($window, $location) {

    var vm = this;

    vm.goHome = goHome;
    vm.goBack = goBack;

    /********************************************************************************
    * @ngdoc method
    * @name goHome
    * @description
    * Changes `$location` to the Home.
    ********************************************************************************/
    function goHome() {
        $location.path('/home');
    }

    /********************************************************************************
    * @ngdoc method
    * @name goBack
    * @description
    * Changes `$location` to the previous page in history.
    ********************************************************************************/
    function goBack() {
        $window.history.back();
    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name Error500Controller
* @requires $location
* @requires AuthService
*
* @description
* Handles the 500 error.
* Realizes the control layer for `500.view`.
************************************************************************************/

angular.module('metricapp')

.controller('Error500Controller', Error500Controller);

Error500Controller.$inject = ['$window', '$location'];

function Error500Controller($window, $location) {

    var vm = this;

    vm.goHome = goHome;
    vm.goBack = goBack;

    /********************************************************************************
    * @ngdoc method
    * @name goHome
    * @description
    * Changes `$location` to the Home.
    ********************************************************************************/
    function goHome() {
        $location.path('/home');
    }

    /********************************************************************************
    * @ngdoc method
    * @name goBack
    * @description
    * Changes `$location` to the previous page in history.
    ********************************************************************************/
    function goBack() {
        $window.history.back();
    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name HomeController
* @module metricapp
* @requires $rootScope
* @requires $scope
* @requires $location
* @requires AuthService
* @requires ActionService
*
* @description
* Manages the Home dashboard for all the users.
* Realizes the control layer for `home.view`.
************************************************************************************/

angular.module('metricapp')

.controller('HomeController', HomeController);

HomeController.$inject = [
    '$rootScope', '$scope', '$location',
    'AuthService', 'ActionService'];

function HomeController($rootScope, $scope, $location, AuthService, ActionService) {

    var vm = this;

    vm.getActionsForRole = getActionsForRole;

    _init();

    /********************************************************************************
    * @ngdoc method
    * @name getActionsForRole
    * @description
    * Returns the list of actions for the specified user role.
    * @param {String} rolename The name of the user role.
    * @return {List[Action]} The list of actions provided for the specified role.
    ********************************************************************************/
    function getActionsForRole(role) {
        return ActionService.ACTIONS[role];
    }

    /********************************************************************************
    * @ngdoc method
    * @name _init
    * @description
    * Initializes the controller:
    * - initialization 1.
    * - initialization 2.
    * - initialization 3.
    ********************************************************************************/
    function _init() {

    }
}

})();

/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 15:53:20
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-10 18:56:29
*/
(function () { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name MeasurementGoalController
* @module metricapp
* @requires $scope
* @requires $location
* @description
* Manages the MeasurementGoal.
* Realizes the control layer for `measurementgoal.view`.
************************************************************************************/

angular.module('metricapp')

.controller('MeasurementGoalController', MeasurementGoalController);

MeasurementGoalController.$inject = ['$scope', '$location','MeasurementGoalService','MetricService','$window'];

function MeasurementGoalController($scope, $location, MeasurementGoalService, MetricService, $window) {

    var vm = this;

    vm.measurementGoals = [];
    vm.measurementGoalDialog = MeasurementGoalService.getUpdateMeasurementGoal();
    vm.organizationalGoalDialog = {};
    vm.metricsDialog = [];
    vm.externalMetricDialog = [];
    vm.submitMeasurementGoal = submitMeasurementGoal;
    vm.cancelSubmit = cancelSubmit;
    vm.getMeasurementGoalsBy = getMeasurementGoalsBy;
    vm.getOrganizationalGoalById = getOrganizationalGoalById;
    vm.goToUpdateMeasurementGoal = goToUpdateMeasurementGoal;
    vm.setMeasurementGoalDialog = setMeasurementGoalDialog;
    vm.setOrganizationalGoalDialog = setOrganizationalGoalDialog;
    vm.initOrganizationalGoalDialog = initOrganizationalGoalDialog;
    vm.addTagToMeasurementGoal = addTagToMeasurementGoal;
    vm.removeTagFromMeasurementGoal = removeTagFromMeasurementGoal;
    vm.getMetricsByMeasurementGoal = getMetricsByMeasurementGoal;
    vm.getApprovedMetrics = getApprovedMetrics;
    vm.addMetricToMeasurementGoal = addMetricToMeasurementGoal;

    initOrganizationalGoalDialog();
    getMetricsByMeasurementGoal();
    _init();

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Submits a MeasurementGoal.
    ********************************************************************************/
    function submitMeasurementGoal() {
        var measurementGoal = {
            userid : vm.measurementGoalDialog.userid,
        	name : vm.name,
        	object : vm.object,
        	purpose : vm.purpose,
        	viewPoint : vm.viewPoint,
        	focus : vm.focus,
            OrganizationalGoalId : vm.measurementGoalDialog.OrganizationalGoalId,
            metricIdList : vm.measurementGoalDialog.metricIdList,
            questionIdList : vm.measurementGoalDialog.questionIdList,
            metricatorId : vm.measurementGoalDialog.metricatorId,
            contextFactorIdList : vm.measurementGoalDialog.contextFactorIdList,
            assumptionIdList : vm.measurementGoalDialog.assumptionIdList,
            interpretationModel : {
                functionJavascript : vm.functionJavascript,
                queryNoSQL : vm.queryNoSQL
            },
            metadata : {
                tags : vm.measurementGoalDialog.metadata.tags,
                state : vm.measurementGoalDialog.metadata.state,
                releaseNote : vm.measurementGoalDialog.metadata.releaseNote
            }
        };
        MeasurementGoalService.submitMeasurementGoal(measurementGoal).then(
            function(message) {
                alert(message);
                //$location.path('/measurementgoal');
            },
            function(message) {
                alert(message);
            }
        );
        /*
        AuthService.signup(user, profile).then(
            function(message) {
                alert(message);
                $location.path('/');
            },
            function(message) {
                alert(message);
            });*/
    }

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get active measurement goals for a metricator.
    ********************************************************************************/
    function getMeasurementGoals(){
        //TODO add method to retrieve last approved measurementGoal
        //TODO add method to send for approval
         MeasurementGoalService.getMeasurementGoals().then(
            function(data) {
                console.log(data.measurementGoals);
                vm.measurementGoals = data.measurementGoals;
            },
            function(data) {
                alert('Error retriving Measurement Goals');
            }
        );
    }

    /********************************************************************************
    * @ngdoc method
    * @name getMetricsByMeasurementGoal
    * @description
    * Get approved metrics by measurement goal.
    ********************************************************************************/
    function getMetricsByMeasurementGoal(){

        for(var i=0; i<vm.measurementGoalDialog.metrics.length;i++){ 
            MetricService.getMetricsById(vm.measurementGoalDialog.metrics[i].instance).then(
                function(data) {
                    console.log('SUCCESS GET METRICS BY MEASUREMENT GOAL');
                    console.log(data.metricsDTO);
                    vm.metricsDialog = data.metricsDTO;
                },
                function(data) {
                    alert('Error retriving Metrics');
                }
            );
        }
    }

    /********************************************************************************
    * @ngdoc method
    * @name getApprovedMetrics
    * @description
    * Get approved metrics.
    ********************************************************************************/
    function getApprovedMetrics(){
         MetricService.getApprovedMetrics().then(
            function(data) {
                console.log('SUCCESS GET APPROVED METRICS');
                console.log(data.metricsDTO);
                vm.externalMetricDialog = data.metricsDTO;

            },
            function(data) {
                alert('Error retriving Metrics');
            }
        );
    }

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get active measurement goals for a metricator by some field.
    ********************************************************************************/
    function getMeasurementGoalsBy(keyword,field){
         MeasurementGoalService.getMeasurementGoalsBy(keyword,field).then(
            function(data) {
                console.log(data.measurementGoals);
                vm.measurementGoals = data.measurementGoals;
            },
            function(data) {
                alert('Error retriving Measurement Goals');
            }
        );
    }

    /********************************************************************************
    * @ngdoc method
    * @name getOrganizationalGoal
    * @description
    * Get organizational goal.
    ********************************************************************************/
    function getOrganizationalGoalById(id){
         MeasurementGoalService.getOrganizationalGoalById(id).then(
            function(data) {
                console.log("getOrganizationalGoalDialog");
                console.log(data);
                vm.organizationalGoalDialog = data;
                //return data;//vm.organizationalGoalDialog;
            },
            function(data) {
                alert('Error retriving Measurement Goals by state');
            }
        );
    }

    /********************************************************************************
    * @ngdoc method
    * @name cancelSignup
    * @description
    * Cancels the ongoing submit.
    ********************************************************************************/
    function cancelSubmit() {
        $location.path('/measurementgoal');
    }

    function setMeasurementGoalDialog(measurementGoalToAssignId){
            vm.measurementGoalDialog = vm.measurementGoals[measurementGoalToAssignId];

            if(vm.measurementGoalDialog !== null){
                setOrganizationalGoalDialog(vm.measurementGoalDialog.organizatoinalGoalId);
            }
    }

    function setOrganizationalGoalDialog(organizationalGoalToAssignId){
            if(organizationalGoalToAssignId !== null){
                //vm.organizationalGoalDialog = 
                getOrganizationalGoalById(organizationalGoalToAssignId);
                console.log(vm.organizationalGoalDialog);
            }
    }

    function initOrganizationalGoalDialog(){
        if(vm.measurementGoalDialog !== null){
            setOrganizationalGoalDialog('1');//vm.measurementGoalDialog.organizatoinalGoalId);
        }
    }

    function goToUpdateMeasurementGoal(){
        MeasurementGoalService.toUpdateMeasurementGoal(vm.measurementGoalDialog);
        $location.path('/measurementgoal');
        console.log($location.path('/measurementgoal'));
    }

    /********************************************************************************
    * @ngdoc method
    * @name addTagToMeasurementGoal
    * @description
    * Add tag to a measurement goal.
    ********************************************************************************/
    function addTagToMeasurementGoal(){
         vm.measurementGoalDialog.metadata.tags.push(vm.newTag);
    }

    /********************************************************************************
    * @ngdoc method
    * @name addTagToMeasurementGoal
    * @description
    * Remove tag from a measurement goal.
    ********************************************************************************/
    function removeTagFromMeasurementGoal(index){
        vm.measurementGoalDialog.metadata.tags.splice(index, 1);
    }

    /********************************************************************************
    * @ngdoc method
    * @name addMetricToMeasurementGoal
    * @description
    * Add metric to measurement goal.
    ********************************************************************************/
    function addMetricToMeasurementGoal(index){
        for(var i=0; i<vm.metricsDialog.length; i++){
            if(vm.externalMetricDialog[index].metadata.id == vm.metricsDialog[i].metadata.id){
                $window.alert('You cannot add a metric twice!');
                return true;
            }
        }
        $window.alert('Item added');
        return false;
    }

    /********************************************************************************
    * @ngdoc method
    * @name _init
    * @description
    * Initializes the controller.
    ********************************************************************************/
    function _init() {
        vm.loading = false;
    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name MessageController
* @module metricapp
* @requires $scope
* @requires $location
* @requires MESSAGE_STATE
*
* @description
* Manages the message-based conversation between users.
* Realizes the control layer for:
* - `messages.view`
* - widgets about messages.
************************************************************************************/

angular.module('metricapp')

.controller('MessageController', MessageController);

MessageController.$inject = ['$scope', '$location', 'MESSAGE_STATE'];

function MessageController($scope, $location, MESSAGE_STATE) {

    var vm = this;

    _init();

    vm.getNumberOfMessages = getNumberOfMessages;
    vm.getNumberOfUnreadMessages = getNumberOfUnreadMessages;

    function getNumberOfMessages() {
        return vm.messages.length;
    }

    function getNumberOfUnreadMessages() {
        var unreads = 0;
        for (var i = 0; i < vm.messages.length; i++) {
            var msg = vm.messages[i];
            if (msg.state === MESSAGE_STATE.UNREAD) {
                unreads++;
            }
        }
        return unreads;
    }

    function _init() {
        vm.messages = [
            {author: 'giacomo.marciani', content: 'Lorem ipsum dolor sit amet.', state: MESSAGE_STATE.UNREAD},
            {author: 'michele.porretta', content: 'Lorem ipsum dolor sit amet.', state: MESSAGE_STATE.UNREAD},
            {author: 'marco.piu',        content: 'Lorem ipsum dolor sit amet.', state: MESSAGE_STATE.READ},
        ];
    }

}

})();

/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 15:53:20
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-07 22:46:59
*/
(function () { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name MetricatorController
* @module metricapp
* @requires $scope
* @requires $location
* @description
* Manages the MetricatorGoal.
* Realizes the control layer for `metricator.view`.
************************************************************************************/

angular.module('metricapp')

.controller('MetricatorController', MetricatorController);

MetricatorController.$inject = ['$scope', '$location','MetricService','MeasurementGoalService','$window'];

function MetricatorController($scope, $location, MetricService, MeasurementGoalService, $window) {

    var vm = this;

    vm.getMeasurementGoals = getMeasurementGoals;
    vm.getMetrics = getMetrics;
    vm.goToUpdateMeasurementGoal = goToUpdateMeasurementGoal;

    vm.results = {
        measurementGoals : [],
        metrics : [],
        questions : []
    };

    vm.measurementGoalDialog = null;
    vm.metricDialog = null;

    vm.modal = "";

    /*
    vm.measurementGoalDialog = {
            name: "",
            focus : "",
            object : "",
            purpose : "",
            viewPoint : "",
        };*/

    vm.setMeasurementGoalDialog = setMeasurementGoalDialog;
    
    vm.getMeasurementGoals();
    vm.getMetrics();
    _init();

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get active measurement goals for a metricator.
    ********************************************************************************/
    function getMeasurementGoals(){
        //TODO add method to retrieve last approved measurementGoal
        //TODO add method to send for approval
         MeasurementGoalService.getMeasurementGoals().then(
            function(data) {
                console.log(data.measurementGoals);
                vm.results.measurementGoals = data.measurementGoals;
            },
            function(data) {
                alert('Error retriving Measurement Goals');
            }
        );
    };

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get active metrics for a metricator.
    ********************************************************************************/
    function getMetrics(){
         MetricService.getMetrics().then(
            function(data) {
                console.log(data.metricsDTO);
                vm.results.metrics = data.metricsDTO;
            },
            function(data) {
                alert('Error retriving Metrics');
            }
        );
    };

    /*
    function setMeasurementGoalDialog(measurementGoalToAssign){
        vm.measurementGoalDialog.name = measurementGoalToAssign.name;
        vm.measurementGoalDialog.purpose = measurementGoalToAssign.purpose;
        vm.measurementGoalDialog.object = measurementGoalToAssign.object;
        vm.measurementGoalDialog.viewPoint = measurementGoalToAssign.viewPoint;
        vm.measurementGoalDialog.focus = measurementGoalToAssign.focus;
    };*/
    
    function setMeasurementGoalDialog(modalId,measurementGoalToAssignId){
        switch (modalId) {
            case 0:
                //$('#modal_button').attr('data-target','#modal_measurementGoal');
                vm.modal = 'measurementGoal';
                vm.measurementGoalDialog = vm.results.measurementGoals[measurementGoalToAssignId];
                break;
            case 1:
                //$('#modal_button').attr('data-target','#modal_metric');
                vm.modal = 'metric';
                vm.metricDialog = vm.results.metrics[measurementGoalToAssignId];
                break;
            case 2:
                vm.modal = 'question';
                //$('#modal_button').attr('data-target','#modal_question');
                break;
            default:
                //$('#modal_button').attr('data-target','#modal_measurementGoal');
                vm.modal = 'metric';
                vm.measurementGoalDialog = vm.results.measurementGoals[measurementGoalToAssignId];
                break;
        }
    };

    function goToUpdateMeasurementGoal(){
        MeasurementGoalService.toUpdateMeasurementGoal(vm.measurementGoalDialog);
        console.log("Going to Update Measurement Goal");
        $location.path('/measurementgoal');
        console.log($location.path('/measurementgoal'));

    }

    /*
    function getMeasurementGoals() {
        
        /*var measurementGoal = {
            id: mtc.id,
        	name : mtc.name,
        	creationDate : mtc.creationDate,
        	lastVersionDate : mtc.lastVersionDate,
        	releaseNote : mtc.releaseNote,
        	state : mtc.state 		
        };
        MetricatorService.getMeasurementGoals().then(
            function(data) {
            
                measurementGoal.id = data.id;
                measurementGoal.name = data.name;
                measurementGoal.creationDate = data.creationDate;
                measurementGoal.lastVersionDate = data.lastVersionDate;
                measurementGoal.releaseNote = data.releaseNote;
                measurementGoal.state = data.state;
                $location.path('/measurementgoal');
                
                return data.measurementGoals;
                
                
            },
            function(message) {
                alert('Error retriving Measurement Goals');
            }
        );*/
        
    }


    /********************************************************************************
    * @ngdoc method
    * @name _init
    * @description
    * Initializes the controller.
    ********************************************************************************/
    function _init() {
        //mtc.loading = false;
        /*MetricatorService.getMeasurementGoals().then(
            function(message) {
                return message.measurementGoals;
                 },
            function(message) {
                alert('Error retriving Measurement Goals');
            }
        );*/
    
        //mtc.getMeasurementGoals();
    }

})();

(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name NotificationController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the notifications for users.
* Realizes the control layer for:
* - `notifications.view`
* - widgets about notifications.
************************************************************************************/

angular.module('metricapp')

.controller('NotificationController', NotificationController);

NotificationController.$inject = ['$scope', '$location'];

function NotificationController($scope, $location) {

    var vm = this;

    vm.getNumberOfUnreadNotifications = getNumberOfUnreadNotifications;

    _init();

    function getNumberOfUnreadNotifications() {
        return 10;
    }

    function _init() {
        
    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name PageController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the navbar for all users.
* Realizes the control layer for {navbar.view}.
************************************************************************************/

angular.module('metricapp')

.controller('PageController', PageController);

PageController.$inject = ['$scope', '$location', 'AuthService'];

function PageController($scope, $location, AuthService) {

    var vm = this;

    /********************************************************************************
    * @ngdoc method
    * @name foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @returns {type} Insert here return description.
    ********************************************************************************/
    function foo(a, b, c) {

    }

    /********************************************************************************
    * @ngdoc method
    * @name _foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @returns {type} Insert here return description.
    ********************************************************************************/
    function _foo(a, b, c) {

    }
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name ProfileController
* @module metricapp
* @requires $scope
* @requires $location
* @requires ProfileService
*
* @description
* Manages the profile visualization and editing.
* Realizes the control layer for `profile.view`.
************************************************************************************/

angular.module('metricapp')

.controller('ProfileController', ProfileController);

ProfileController.$inject = ['$scope', '$location', 'ProfileService','FlashService', 'GENDERS'];

function ProfileController($scope, $location, ProfileService, FlashService, GENDERS) 
{

    var vm = this;

    //Section.show
    vm.show=1;

    vm.GENDERS = GENDERS;

    //load picture
    vm.picture = 'assets/images/users/user2.jpg';

    //dati da pubblicare
    vm.userFullName = 'Maria Bianchi';
    vm.workRole = 'Metricator';

    vm.firstname = 'Maria';
    vm.lastname = 'Bianchi';
    vm.email = 'mariabianchi@gmail.com';
    vm.phone = '+39 38376 6284';
    vm.role = 'Metricator';
    vm.birthday = '01/01/1990';
    vm.gender = 'Female';
    vm.url = 'www.mariabianchi.it';
    vm.biography = 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    /********************************************************************************
    * @ngdoc method
    * @name editing
    * @description
    * Editing profile data
    ********************************************************************************/
    function editProfile() 
    {
        var profile = {
            firstname: vm.firstname,
            lastname: vm.lastname,
            gender: vm.gender,
            birthday: vm.birthday,
            url: vm.url,
            phone: vm.phone,
            biography: vm.biography,
            email: vm.email,
            picture: vm.picture
        };

        //manca il servizio di storage delle modifiche ai dati del profilo
    }

    /********************************************************************************
    * @ngdoc method
    * @name editing
    * @description
    * Editing Credentials data
    ********************************************************************************/
    function editCredentials() 
    {

        var user = {
            username: vm.username,
            password: vm.password,
        };

        //manca il servizio di storage delle modifiche alle credenziali
    }

    /********************************************************************************
    * @ngdoc method
    * @name foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @returns {type} Insert here return description.
    ********************************************************************************/
    function foo(a, b, c) {

    }

    /********************************************************************************
    * @ngdoc method
    * @name _foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @return {type} Insert here return description.
    ********************************************************************************/
    function _foo(a, b, c) {

    }
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name SettingsController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the whole app settings.
* Realizes the control layer for {settings.view}.
************************************************************************************/

angular.module('metricapp')

.controller('SettingsController', SettingsController);

SettingsController.$inject = ['$scope', '$location', 'AuthService'];

function SettingsController($scope, $location, AuthService) {

    var vm = this;

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name TeamController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the team.
* Realizes the control layer for {team.view}.
************************************************************************************/

angular.module('metricapp')

.controller('TeamController', TeamController);

TeamController.$inject = ['$scope', '$location', 'AuthService'];

function TeamController($scope, $location, AuthService) {

    var vm = this;

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name GoalController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the Home dashboard for all the users.
* Realizes the control layer for `goal.view`.
************************************************************************************/

angular.module('metricapp')

.controller('GoalController', GoalController);

GoalController.$inject = ['$scope', '$location'];

function GoalController($scope, $location) {

    var vm = this;

    /********************************************************************************
    * @ngdoc method
    * @name foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @returns {type} Insert here return description.
    ********************************************************************************/
    function foo(a, b, c) {

    }

    /********************************************************************************
    * @ngdoc method
    * @name _foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @returns {type} Insert here return description.
    ********************************************************************************/
    function _foo(a, b, c) {

    }
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name GridController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the Grid.
* Realizes the control layer for `grid.view`.
************************************************************************************/

angular.module('metricapp')

.controller('GridController', GridController);

GridController.$inject = ['$scope', '$location'];

function GridController($scope, $location) {

    var vm = this;

    /********************************************************************************
    * @ngdoc method
    * @name foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @returns {type} Insert here return description.
    ********************************************************************************/
    function foo(a, b, c) {

    }

    /********************************************************************************
    * @ngdoc method
    * @name _foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @returns {type} Insert here return description.
    ********************************************************************************/
    function _foo(a, b, c) {

    }
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name MetricController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the Home dashboard for all the users.
* Realizes the control layer for `metric.view`.
************************************************************************************/

angular.module('metricapp')

.controller('MetricController', MetricController);

MetricController.$inject = ['$scope', '$location'];

function MetricController($scope, $location) {

    var vm = this;

    /********************************************************************************
    * @ngdoc method
    * @name foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @returns {type} Insert here return description.
    ********************************************************************************/
    function foo(a, b, c) {

    }

    /********************************************************************************
    * @ngdoc method
    * @name _foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @returns {type} Insert here return description.
    ********************************************************************************/
    function _foo(a, b, c) {

    }
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name QuestionController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the Home dashboard for all the users.
* Realizes the control layer for `question.view`.
************************************************************************************/

angular.module('metricapp')

.controller('QuestionController', QuestionController);

QuestionController.$inject = ['$scope', '$location'];

function QuestionController($scope, $location) {

    var vm = this;

    /********************************************************************************
    * @ngdoc method
    * @name foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @returns {type} Insert here return description.
    ********************************************************************************/
    function foo(a, b, c) {

    }

    /********************************************************************************
    * @ngdoc method
    * @name _foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @returns {type} Insert here return description.
    ********************************************************************************/
    function _foo(a, b, c) {

    }
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name SidebarController
* @module metricapp
* @requires $scope
* @requires $location
* @requires ActionService
*
* @description
* Manages the sidebar for all users.
* Realizes the control layer for {sidebar.directive}.
************************************************************************************/

angular.module('metricapp')

.controller('SidebarController', SidebarController);

SidebarController.$inject = ['$scope', '$location','ActionService'];

function SidebarController($scope, $location, ActionService) {

    var vm = this;

    vm.getDashboardForRole = getDashboardForRole;
    vm.getActionsForRole = getActionsForRole;

    _init();

    /********************************************************************************
    * @ngdoc method
    * @name getDashboardForRole
    * @description
    * Returns the dashboard href for the specified user role.
    * @param {String} rolename The name of the user role.
    * @return {String} The Dashboard href for the specified role.
    ********************************************************************************/
    function getDashboardForRole(role) {
        return ActionService.DASHBOARDS[role];
    }

    /********************************************************************************
    * @ngdoc method
    * @name getActionsForRole
    * @description
    * Returns the list of actions for the specified user role.
    * @param {String} rolename The name of the user role.
    * @return {List[Action]} The list of actions provided for the specified role.
    ********************************************************************************/
    function getActionsForRole(role) {
        return ActionService.ACTIONS[role];
    }

    /********************************************************************************
    * @ngdoc method
    * @name _init
    * @description
    * Initializes the controller:
    * - initialization 1.
    * - initialization 2.
    * - initialization 3.
    ********************************************************************************/
    function _init() {

    }
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name TopbarController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the topbar for all users.
* Realizes the control layer for {topbar.directive}.
************************************************************************************/

angular.module('metricapp')

.controller('TopbarController', TopbarController);

TopbarController.$inject = ['$scope', '$location', 'AuthService'];

function TopbarController($scope, $location, AuthService) {

    var vm = this;

}

})();

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

servermock.$inject = [
    '$httpBackend', '$filter',
    'DbMockService',
    'REST_SERVICE'];

function servermock($httpBackend, $filter, DbMockService, REST_SERVICE) {
    var ROLES = DbMockService.ROLES;
    var USERS = DbMockService.USERS;
    var PROFILES = DbMockService.PROFILES;

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
                return [200, authuser, {}];
            }
        }
        console.log('FAILURE /api/login 401 WITH ' +
        'username=' + credentials.username + ' & ' +
        'password=' + credentials.password);
        return [401, {}, {}];
    });

    /********************************************************************************
    * AUTHENTICATION: LOGOUT
    ********************************************************************************/
    $httpBackend.whenPOST(REST_SERVICE.URL + '/api/logout')
    .respond(function(method, url, data, headers, params) {
        var authorization = headers.Authorization;
        var authdata = authorization.split(' ')[1];
        console.log('authdata=' + authdata);
        var credentials = {
            username: authdata.split(':')[0],
            password: authdata.split(':')[1]
        };
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
                return [200, credentials.username, {}];
            }
        }
        console.log('FAILURE /api/logout 401 WITH ' +
        'username=' + credentials.username + ' & ' +
        'password=' + credentials.password);
        return [401, credentials.username, {}];
    });

    
     /********************************************************************************
    * SUBMIT MEASUREMENT GOAL
    *********************************************************************************/
    $httpBackend.whenPOST('http://localhost:8080/metricapp-server-gitlab/measurementgoal/').passThrough();/*
    .respond(function(method, url, data, headers, params) {
        var registration = angular.fromJson(data);
        var message = 'Submit Success!';
        return [200, message, {}];
    });*/
    
     /********************************************************************************
    * GET MEASUREMENT GOALS
    *********************************************************************************/
    $httpBackend.whenGET('http://localhost:8080/metricapp-server-gitlab/measurementgoal?userid=metricator').passThrough();
    
    /********************************************************************************
    * GET ORGANIZATIONAL GOALS
    *********************************************************************************/
    $httpBackend.whenGET('http://qips.sweng.uniroma2.it/metricapp-server/external/organizationalgoal?id=1').passThrough();
 
     /********************************************************************************
    * GET APPROVED METRICS
    *********************************************************************************/
    $httpBackend.whenGET('http://localhost:8080/metricapp-server-gitlab/metric?state=Approved').passThrough();

     /********************************************************************************
    * GET METRICS
    *********************************************************************************/
    $httpBackend.whenGET('http://localhost:8080/metricapp-server-gitlab/metric?userid=metricator').passThrough();

    /********************************************************************************
    * AUTHENTICATION: SIGN-UP
    ********************************************************************************/
    $httpBackend.whenPOST(REST_SERVICE.URL + '/api/signup')
    .respond(function(method, url, data, headers, params) {
        var registration = angular.fromJson(data);
        var user = registration.user;
        var profile = registration.profile;
        console.log('/api/signup WITH ' +
        'username=' + user.username + ' & ' +
        'password=' + user.password + ' & ' +
        'role=' + user.role + ' & ' +
        'firstname=' + profile.firstname + ' & ' +
        'lastname=' + profile.lastname + ' & ' +
        'gender=' + profile.gender + ' & ' +
        'birthday' + profile.birthday + ' & ' +
        'email=' + profile.email + ' & ' +
        'picture=' + profile.picture
        );
        profile.username = user.username;
        USERS.push(user);
        PROFILES.push(profile);
        console.log('SUCCESS /api/signup WITH ' +
        'username=' + user.username + ' & ' +
        'password=' + user.password + ' & ' +
        'role=' + user.role + ' & ' +
        'firstname=' + profile.firstname + ' & ' +
        'lastname=' + profile.lastname + ' & ' +
        'gender=' + profile.gender + ' & ' +
        'birthday' + profile.birthday + ' & ' +
        'email=' + profile.email + ' & ' +
        'picture=' + profile.picture
        );
        var message = 'User registered';
        return [200, message, {}];
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
                return [200, {exist: true}, {}];
            }
        }
        console.log('SUCCESS NOT EXIST user WITH ' +
        'username=' + username);
        return [200, {exist: false}, {}];
    });

    /********************************************************************************
    * USERS: EXIST WITH EMAIL
    ********************************************************************************/
    $httpBackend.whenPOST(REST_SERVICE.URL + '/api/users/exist/email')
    .respond(function(method, url, data, headers, params) {
        var email = data;
        console.log('/api/users/exist/email WITH ' +
        'email=' + email);
        for (var i = 0; i < PROFILES.length; i++) {
            var profile = PROFILES[i];
            if (profile.email === email) {
                console.log('SUCCESS EXIST user WITH ' +
                'email=' + email);
                return [200, {exist: true}, {}];
            }
        }
        console.log('SUCCESS NOT EXIST user WITH ' +
        'email=' + email);
        return [200, {exist: false}, {}];
    });

    /********************************************************************************
    * UTIL: UPLOAD
    ********************************************************************************/
    /*
    $httpBackend.whenPOST(REST_SERVICE.URL + '/api/upload')
    .respond(function(method, url, data, headers, params) {
        var content = data;
        console.log('/api/upload');
        var file = new Blob([content], { type: 'text/plain;charset=utf-8' });
        var serverPath = 'uploads/file.png';
        FileSaver.saveAs(file, serverPath);
        if (true) {
            var resdata = {
                localPath: 'local-file-path',
                remotePath: 'server-file-path'
            }
            return [200, resdata, {}];
        } else {
            var resdata = {
                localPath: 'local-file-path',
                remotePath: 'none',
                errmsg: 'some error occurred'
            }
            return [501, resdata, {}];
        }
    });
    */

    $httpBackend.whenGET(/^dist\//).passThrough();
    $httpBackend.whenGET(/.*/).passThrough();
    $httpBackend.whenPOST(/.*/).passThrough();
    $httpBackend.whenPUT(/.*/).passThrough();
    $httpBackend.whenDELETE(/.*/).passThrough();
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc overview
* @name authcheck
* @module metricapp
* @requires $rootScope
* @requires $location
*
* @description
* Retrieves authentication cookie, if exists.
* Automatically login, if requested.
* Checks authentication during location changes.
************************************************************************************/

angular.module('metricapp')

.run(authcheck);

authcheck.$inject = ['$rootScope', '$cookies', '$http', '$location'];

function authcheck($rootScope, $cookies, $http, $location) {
    var openLocations = ['/login', '/signup', '/401', '/404', '/500'];
    var homeLocation = '/';
    var failoverLocation = '/login';

    $rootScope.globals = $cookies.getObject('globals') || {};
    //$rootScope.globals = $cookies.get('globals') || {};
    if ($rootScope.globals.user) {
        $http.defaults.headers.common.Authorization =
        'Basic ' + $rootScope.globals.user.authdata;
    }

    // INSERT HERE AUTOLOGIN

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        var restrict = $.inArray($location.path(), openLocations) === -1;
        var loggedIn = $rootScope.globals.user;
        if (restrict && !loggedIn) {
            $location.path(failoverLocation);
        }
    });
}

})();