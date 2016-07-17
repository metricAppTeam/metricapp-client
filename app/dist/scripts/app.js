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
    'ngMockE2E',
    'nvd3',
    'angular.morris-chart',
    'ui.ace',
    'ui.bootstrap',
    'smart-table'
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
    {name: 'Profile',         href: '#/profile',   	      icon: 'user'},
    {name: 'Grid',      	  href: '#/grid',      	      icon: 'codepen'},
    {name: 'Graph draft',	  href: '#/graph_draft',	  icon: 'codepen'},
    {name: 'Profile Pop-Up',  href: '#/profile_pop_up',   icon: 'user'},
    {name: 'Team',      	  href: '#/team',             icon: 'users'},
    {name: 'Settings',  	  href: '#/settings',         icon: 'cog'}
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

/*
* @Author: alessandro.fazio
* @Date:   2016-07-13 11:01:31
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-15 11:06:46
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
    ONUPDATEWAITINGQUESTIONS: 'OnUpdateWaitingQuestions',
    ONUPDATEQUESTIONERENDPOINT: 'OnUpdateQuestionerEndpoint',
    PENDING: 'Pending',
    REJECTED: 'Rejected',
    SUSPENDED: 'Suspended',
    APPROVED: 'Approved'
});

})();
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
    .when('/profile_pop_up', {
        templateUrl: 'dist/views/people/profile_pop_up.view.html'
    })
    .when('/settings', {
        templateUrl: 'dist/views/setting/settings.view.html'
    })
    .when('/grid', {
        templateUrl: 'dist/views/graph/grid/grid.view.html'
    })
    .when('/graph_draft', {
        templateUrl: 'dist/views/graph/draft/draft.view.html'
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
    .when('/measurementgoal/:measurementgoalid', {
        templateUrl: 'dist/views/measurementgoal/measurementgoal.view.html'
    })
    .when('/metricatordashboard', {
        templateUrl: 'dist/views/home/metricatordashboard/metricatordashboard.view.html'
    })
    .when('/measurementgoalsearch', {
        templateUrl: 'dist/views/measurementgoal/measurementgoalsearch.view.html'
    })
    .when('/metricator', {
        templateUrl: 'dist/views/metricator/metricator.view.html'
    })
    .when('/measurementgoalchangestate', {
        templateUrl: 'dist/views/measurementgoal/measurementgoal.sendforapproval.view.html'
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
            	if (response.measurementGoals !== null || response.metrics !==null) {
	                return response;
            	}
            	else {
            		console.log('Error404Interceptor.responseError');
	                $location.path('/404');
	                return $q.reject(response);
            	}
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

/*
* @Author: alessandro.fazio
* @Date:   2016-07-15 12:46:59
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 00:10:28
*/
(function() {'use strict';

angular.module('metricapp')

.service('AssumptionModalService', AssumptionModalService);

AssumptionModalService.$inject = ['$window', '$uibModal'];

function AssumptionModalService($window, $uibModal) {

	var service = this;
	service.openAssumptionModal = openAssumptionModal;
    service.openExternalAssumptionModal = openExternalAssumptionModal;

	function openAssumptionModal(){
	     var modalInstance = $uibModal.open({

            templateUrl: 'dist/views/metricator/modal/modal.assumption.html',
            controller: 'AssumptionModalCtrl',
            controllerAs: 'vm',
            size: 'lg'
        });

        modalInstance.result.then(
            function(){
                console.log("Modal showing");
            },
            function () {
                console.log('Modal dismissed');
            });
	};

    function openExternalAssumptionModal(){
         var modalInstance = $uibModal.open({

            templateUrl: 'dist/views/metricator/modal/modal.external.assumption.html',
            controller: 'ExternalAssumptionModalCtrl',
            controllerAs: 'vm',
            size: 'lg'
        });

        modalInstance.result.then(
            function(){
                console.log("Modal showing");
            },
            function () {
                console.log('Modal dismissed');
            });
    };

}

})();
/*
* @Author: alessandro.fazio
* @Date:   2016-07-15 12:46:59
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 00:11:05
*/
(function() {'use strict';

angular.module('metricapp')

.service('ContextFactorModalService', ContextFactorModalService);

ContextFactorModalService.$inject = ['$window', '$uibModal'];

function ContextFactorModalService($window, $uibModal) {

	var service = this;
	service.openContextFactorModal = openContextFactorModal;
    service.openExternalContextFactorModal = openExternalContextFactorModal;

	function openContextFactorModal(){
	     var modalInstance = $uibModal.open({

            templateUrl: 'dist/views/metricator/modal/modal.contextfactor.html',
            controller: 'ContextFactorModalCtrl',
            controllerAs: 'vm',
            size: 'lg'
        });

        modalInstance.result.then(
            function(){
                console.log("Modal showing");
            },
            function () {
                console.log('Modal dismissed');
            });
	};

	function openExternalContextFactorModal(){
	     var modalInstance = $uibModal.open({

            templateUrl: 'dist/views/metricator/modal/modal.external.contextfactor.html',
            controller: 'ExternalContextFactorModalCtrl',
            controllerAs: 'vm',
            size: 'lg'
        });

        modalInstance.result.then(
            function(){
                console.log("Modal showing");
            },
            function () {
                console.log('Modal dismissed');
            });
	};

}

})();
/*
* @Author: alessandro.fazio
* @Date:   2016-07-15 12:46:59
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 12:39:46
*/
(function() {'use strict';

angular.module('metricapp')

.service('MeasurementGoalModalService', MeasurementGoalModalService);

MeasurementGoalModalService.$inject = ['$window', '$uibModal'];

function MeasurementGoalModalService($window, $uibModal) {

	var service = this;
	service.openMeasurementGoalModal = openMeasurementGoalModal;

	function openMeasurementGoalModal(){
	     var modalInstance = $uibModal.open({

            templateUrl: 'dist/views/metricator/modal/modal.wrapper.measurementgoal.html',
            controller: 'MeasurementGoalModalCtrl',
            controllerAs: 'vm',
            size: 'lg'
        });

        modalInstance.result.then(
            function(){
                console.log("Modal showing");
            },
            function () {
                console.log('Modal dismissed');
            });
	};

}

})();
(function() {'use strict';

angular.module('metricapp')

.service('MetricModalService', MetricModalService);

MetricModalService.$inject = ['$window', '$uibModal'];

function MetricModalService($window, $uibModal) {

	var service = this;
	service.openMetricModal = openMetricModal;
	service.openExternalMetricModal = openExternalMetricModal;

	function openMetricModal(){
	     var modalInstance = $uibModal.open({

            templateUrl: 'dist/views/metricator/modal/modal.metric.html',
            controller: 'MetricModalCtrl',
            controllerAs: 'vm',
            size: 'lg'
        });

        modalInstance.result.then(
            function(){
                console.log("Modal showing");
            },
            function () {
                console.log('Modal dismissed');
            });
	};

	function openExternalMetricModal(){
	     var modalInstance = $uibModal.open({

            templateUrl: 'dist/views/metricator/modal/modal.external.metric.html',
            controller: 'ExternalMetricModalCtrl',
            controllerAs: 'vm',
            size: 'lg'
        });

        modalInstance.result.then(
            function(){
                console.log("Modal showing");
            },
            function () {
                console.log('Modal dismissed');
            });
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

/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 16:21:06
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 00:29:30
*/
(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name AssumptionService
* @module metricapp
* @requires $http
* @requires $rootScope
* @requires $cookies
*
* @description
* Service for Assumption.
************************************************************************************/

angular.module('metricapp')

.service('AssumptionService', AssumptionService);

AssumptionService.$inject = [
    '$http', '$rootScope', '$cookies', '$window', 'AuthService'];

function AssumptionService($http, $rootScope, $cookies, $window, AuthService) {

    var service = this;

    service.assumptionDialog = {};
    service.storeAssumption = storeAssumption;
    service.storeExternalAssumption = storeExternalAssumption;
    service.getAssumptionDialog = getAssumptionDialog;
    service.getExternalAssumptionDialog = getExternalAssumptionDialog;

    /********************************************************************************
    * @ngdoc method
    * @name storeAssumption
    * @description
    * Store Assumption
    * @param {Assumption} to store.
    ********************************************************************************/
    function storeAssumption(toUpdate){
        service.assumptionDialog = toUpdate;
    }

    /********************************************************************************
    * @ngdoc method
    * @name storeExternalAssumption
    * @description
    * Store external Assumption
    * @param {Assumption} to store.
    ********************************************************************************/
    function storeExternalAssumption(toUpdate){
        service.externalAssumptionDialog = toUpdate;
    }

    /********************************************************************************
    * @ngdoc method
    * @name getAssumption
    * @description
    * Get Assumption
    ********************************************************************************/
    function getAssumptionDialog(){
        return service.assumptionDialog;
    }

    /********************************************************************************
    * @ngdoc method
    * @name getExternalAssumptionDialog
    * @description
    * Get ExternalAssumption Dialog
    ********************************************************************************/
    function getExternalAssumptionDialog(){
        return service.externalAssumptionDialog;
    }

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
        //console.log('GET-USER cookie');
        var user = $cookies.getObject('globals').user;
        //console.log('GET-COOKIE globals.user WITH ' +
        //'username=' + user.username + ' & ' +
        //'role=' + user.role + ' & ' +
        //'authdata=' + user.authdata);
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

/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 16:21:06
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 00:14:57
*/
(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name ContextFactorService
* @module metricapp
* @requires $http
* @requires $rootScope
* @requires $cookies
*
* @description
* Service for ContextFactor.
************************************************************************************/

angular.module('metricapp')

.service('ContextFactorService', ContextFactorService);

ContextFactorService.$inject = [
    '$http', '$rootScope', '$cookies', '$window', 'AuthService'];

function ContextFactorService($http, $rootScope, $cookies, $window, AuthService) {

    var service = this;

    service.contextFactorDialog = {};
    service.storeContextFactor = storeContextFactor;
    service.getContextFactorDialog = getContextFactorDialog;
    service.getExternalContextFactorDialog = getExternalContextFactorDialog;
    service.storeExternalContextFactor = storeExternalContextFactor;

    /********************************************************************************
    * @ngdoc method
    * @name storeContextFactor
    * @description
    * Store a ContextFactor
    * @param {ContextFactor} to store.
    ********************************************************************************/
    function storeContextFactor(toUpdate){
        service.contextFactorDialog = toUpdate;
    }

    /********************************************************************************
    * @ngdoc method
    * @name storeExternalContextFactor
    * @description
    * Store external ContextFactor
    * @param {ContextFactor} to store.
    ********************************************************************************/
    function storeExternalContextFactor(toUpdate){
        service.externalContextFactorDialog = toUpdate;
    }

    /********************************************************************************
    * @ngdoc method
    * @name getContextFactorDialog
    * @description
    * Get ContextFactor Dialog
    ********************************************************************************/
    function getContextFactorDialog(){
        return service.contextFactorDialog;
    }

    /********************************************************************************
    * @ngdoc method
    * @name getExternalContextFactorDialog
    * @description
    * Get ExternalContextFactor Dialog
    ********************************************************************************/
    function getExternalContextFactorDialog(){
        return service.externalContextFactorDialog;
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
* @Last Modified time: 2016-07-17 01:57:36
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
* Service for MeasurementGoal.
************************************************************************************/

angular.module('metricapp')

.service('MeasurementGoalService', MeasurementGoalService);

MeasurementGoalService.$inject = [
    '$http', '$rootScope', '$cookies', '$window', 'AuthService'];

function MeasurementGoalService($http, $rootScope, $cookies, $window, AuthService) {

    var service = this;

    service.measurementGoalToUpdate = {};
    service.submitMeasurementGoal = submitMeasurementGoal;
    service.getMeasurementGoals = getMeasurementGoals;
    service.getMeasurementGoalsBy = getMeasurementGoalsBy;
    service.toUpdateMeasurementGoal = toUpdateMeasurementGoal;
    service.getUpdateMeasurementGoal = getUpdateMeasurementGoal;
    service.getMeasurementGoalExternals = getMeasurementGoalExternals;
    service.getExternalContextFactors = getExternalContextFactors;
    service.getExternalAssumptions = getExternalAssumptions;
    service.countMeasurementGoalsByState = countMeasurementGoalsByState;
    service.addSomethingToMeasurementGoal = addSomethingToMeasurementGoal;

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
                
        console.log("PUT MEASUREMENT GOAL");        
        console.log(JSON.stringify(measurementGoal));
        
        //TODO leave here
        return false;

        return $http.put('http://qips.sweng.uniroma2.it/metricapp-server/measurementgoal/', measurementGoal).then(
            function(response) {
                console.log('SUCCESS GET measurementGoal');
                var message = response.data;
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
    * @name countMeasurementGoalsByState
    * @description
    * Count Measurement Goals.
    ********************************************************************************/
    function countMeasurementGoalsByState(state) {
        console.log('GET Measurement Goals with userid='+AuthService.getUser().username+'&state='+state);

        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/measurementgoal/count/?userid='+AuthService.getUser().username+'&state='+state).then(
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
    * @name getMeasurementGoals
    * @description
    * Get measurement goals.
    ********************************************************************************/
    
    function getMeasurementGoals(state) {
        console.log('GET Measurement Goals with userid='+AuthService.getUser().username+'&state='+state);

        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/measurementgoal?userid='+AuthService.getUser().username+'&state='+state).then(
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
    * @name getExternalContextFactors
    * @description
    * Get external context factors.
    ********************************************************************************/
    function getExternalContextFactors() {

        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/external/contextfactor/all').then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET EXTERNAL CONTEXT FACTORS');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET EXTERNAL CONTEXT FACTORS');
                console.log(message);
                return message;
            }
        );

    }

    /********************************************************************************
    * @ngdoc method
    * @name getExternalAssumptions
    * @description
    * Get external assumptions.
    ********************************************************************************/
    function getExternalAssumptions() {

        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/external/assumption/all').then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET EXTERNAL ASSUMPTIONS');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET EXTERNAL ASSUMPTIONS');
                console.log(message);
                return message;
            }
        );

    }

    /********************************************************************************
    * @ngdoc method
    * @name getMeasurementGoalExternals
    * @description
    * Get measurement goal externals.
    ********************************************************************************/
    
    function getMeasurementGoalExternals(measurementGoalId) {
        
        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/external/measurementgoal?id='+measurementGoalId).then(
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
    * @name getMeasurementGoalsBy
    * @description
    * Get a measurement goal
    * @param {MeasurementGoal} field key.
    * @param {MeasurementGoal} field value .
    ********************************************************************************/
    function getMeasurementGoalsBy(keyword,field) {
        
        return $http.get("http://qips.sweng.uniroma2.it/metricapp-server/measurementgoal?" + field + "=" + keyword).then(
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
    * @name addSomethingToMeasurementGoal
    * @description
    * Add something to measurement goal.
    ********************************************************************************/
    function addSomethingToMeasurementGoal(typeObject, obj){

        var objId = (obj.metadata==undefined) ? obj.id : obj.metadata.id;

        var pointerBus = {
           objIdLocalToPhase : "",
           typeObj : typeObject,
           instance : objId,
           busVersion : "",
           tags: []
        };

    	switch(typeObject) {
            case 'Metric':
                if (_checkDouble(service.measurementGoalToUpdate.metrics,obj)){
                	service.measurementGoalToUpdate.metrics.push(obj);
                    service.measurementGoalToUpdate.measurementGoal.metrics.push(pointerBus);
                	return true;
                }
                else{
                	return false;
                } 
                break;
            case 'Question':
                if (_checkDouble(service.measurementGoalToUpdate.questions,obj)){
                	service.measurementGoalToUpdate.questions.push(obj);
                    service.measurementGoalToUpdate.measurementGoal.questions.push(pointerBus);
                	return true;
                }
                else{
                	return false;
                }
                break;
            case 'ContextFactor':
                if (_checkDouble(service.measurementGoalToUpdate.contextFactors,obj)){
                	service.measurementGoalToUpdate.contextFactors.push(obj);
                    service.measurementGoalToUpdate.measurementGoal.contextFactors.push(pointerBus);
                    return true;
                }
                else{
                	return false;
                }
                break;
            case 'Assumption':
            	if (_checkDouble(service.measurementGoalToUpdate.assumptions,obj)){
                	service.measurementGoalToUpdate.assumptions.push(obj);
                    service.measurementGoalToUpdate.measurementGoal.assumptions.push(pointerBus);
                    return true;
                }
                else{
                	return false;
                }
                break;
        }
    }

    function _checkDouble(toCheck, item){

        if (item.metadata == undefined){
            for (var j=0, len = toCheck.length; j<len ; j++){
                if (toCheck[j].metadata == undefined){
                    if (toCheck[j].id == item.id) return false;    
                }
                else{
                    if (toCheck[j].metadata.id == item.id) return false;                            
                }
                    
            }
        }
        else {
            for (var j=0, len = toCheck.length; j<len ; j++){   
                if (toCheck[j].metadata == undefined){
                    if (toCheck[j].id == item.id) return false;    
                }
                else{
                    if (toCheck[j].metadata.id == item.id) return false;                            
                }    
            }
        }
        
    	return true;
    }

    /********************************************************************************
    * @ngdoc method
    * @name toUpdateMeasurementGoal
    * @description
    * Update a measurement goal, when a controller asks for it to show a form
    * @param {MeasurementGoal} measurement goal to update.
    ********************************************************************************/
    function toUpdateMeasurementGoal(toUpdate){
        service.measurementGoalToUpdate = toUpdate;
    }

    /********************************************************************************
    * @ngdoc method
    * @name getUpdateMeasurementGoal
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
* @Last Modified time: 2016-07-15 23:01:16
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

MetricService.$inject = ['$http', '$window', 'AuthService'];
             
//function MetricatorService($http, $rootScope, $cookies, $window) {
function MetricService($http, $window, AuthService) {

    var service = this;
    service.metricDialog = {};
    service.externalMetricDialog = [];

    service.getMetrics = getMetrics;
    service.getApprovedMetrics = getApprovedMetrics;
    service.getMetricsById = getMetricsById;
    service.countMetricsByState = countMetricsByState;
    service.storeMetric = storeMetric;
    service.storeExternalMetric = storeExternalMetric;
    service.getMetricDialog = getMetricDialog;
    service.getExternalMetricDialog = getExternalMetricDialog;

    /********************************************************************************
    * @ngdoc method
    * @name getMetrics
    * @description
    * Get Metric by user.
    ********************************************************************************/

    function getMetrics() {
        
        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric?userid=metricator').then(
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
    * @name countMetricsByState
    * @description
    * Count metrics by state.
    ********************************************************************************/
    function countMetricsByState(state) {
        console.log('GET Metrics with userid='+AuthService.getUser().username+'&state='+state);

        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric/count?userid='+AuthService.getUser().username+'&state='+state).then(
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
    * @name getMetrics
    * @description
    * Get Metric by user.
    ********************************************************************************/

    function getMetricsById(metricId) {
        
        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric?id='+metricId).then(
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
    * @name getMetricsByMeasurementGoalId
    * @description
    * Get Metric by measurement goal.
    ********************************************************************************/

    function getMetricsByMeasurementGoalId(measurementGoalId) {
        
        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/external/measurementgoal?id='+measurementGoalId).then(
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
    * @name getMetricDialog
    * @description
    * Get Metric Dialog stored
    ********************************************************************************/
    function getMetricDialog(){
        return service.metricDialog;
    }

    /********************************************************************************
    * @ngdoc method
    * @name getExternalMetricDialog
    * @description
    * Get External Metric Dialog stored
    ********************************************************************************/
    function getExternalMetricDialog(){
        return service.externalMetricDialog;
    }

    /********************************************************************************
    * @ngdoc method
    * @name storeMetric
    * @description
    * Store a Metric
    * @param {Metric} to store.
    ********************************************************************************/
    function storeMetric(toStore){
        service.metricDialog = toStore;
    }

    /********************************************************************************
    * @ngdoc method
    * @name storeExternalMetric
    * @description
    * Store an External Metric
    * @param {Metric} to store.
    ********************************************************************************/
    function storeExternalMetric(toStore){
        service.externalMetricDialog = toStore;
    }

    /********************************************************************************
    * @ngdoc method
    * @name getApprovedMetrics
    * @description
    * Get approved metric by state.
    ********************************************************************************/

    function getApprovedMetrics() {
        
        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric?state=Approved').then(
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
      .directive('viewexpertdashboard', viewexpertdashboard);

  function viewexpertdashboard() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/home/expertdashboard/expertdashboard.view.html'
    };
  }

  angular.module('metricapp')
      .directive('viewmetricatordashboard', viewmetricatordashboard);

  function viewmetricatordashboard() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/home/metricatordashboard/metricatordashboard.view.html'
    };
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

  angular.module('metricapp')
      .directive('measurementgoalupdate', measurementgoalupdate);
  function measurementgoalupdate() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/measurementgoal/measurementgoal.update.view.html'
    };
  }

  angular.module('metricapp')
      .directive('measurementgoalread', measurementgoalread);
  function measurementgoalread() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/measurementgoal/measurementgoal.read.view.html'
    };
  }

})();

/*
* @Author: alessandro.fazio
* @Date:   2016-07-14 16:38:56
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-14 16:39:58
*/

(function () {
  'use strict';

  angular.module('metricapp')
      .directive('measurementgoalsendforapproval', metricator);

  function metricator() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/measurementgoal/measurementgoal.sendforapproval.view.html'
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
      templateUrl: 'dist/views/measurementgoal/measurementgoalsearch.view.html'
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
      .directive('questionModal', questionModal);

  function questionModal() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/metricator/modal/modal.measurementgoal.html'
    };
  }

})();
(function () {
  'use strict';

  angular.module('metricapp')
      .directive('modalmeasurementgoal', modalmeasurementgoal);

  function modalmeasurementgoal() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/metricator/modal/modal.body.measurementgoal.html'
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
            };
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
    'AuthService', 'ActionService','$filter'];

function HomeController($rootScope, $scope, $location, AuthService, ActionService,$filter) {

    var vm = this;

    vm.getActionsForRole = getActionsForRole;
    /******************************************************
    *
    *
    * EXPERT SECTION ON HOME
    *
    *
    *******************************************************/

    //Active and Inactive Users
    vm.active_questioners = 10;
    vm.active_metricators = 15;
    vm.active_experts = 1;
    vm.inactive_questioners = 3;
    vm.inactive_metricators = 2;
    vm.inactive_experts = 0;

    //Active Tasks
    vm.active_tasks = 10;

    //Active Teams
    vm.active_teams = 2;

    //Total Users
    vm.total_active_users = vm.active_questioners + vm.active_metricators + vm.active_experts;
    vm.total_inactive_users = vm.inactive_experts + vm.inactive_metricators + vm.inactive_questioners;
    vm.total_users = vm.total_inactive_users + vm.total_active_users;

    //Active Users chart
    vm.active_users_chart_data = [ 
        {label: "Metricators", value: vm.active_questioners},
        {label: "Questioners", value: vm.active_metricators},
        {label: "Experts",     value: vm.active_experts}
    ];

    vm.trend_active_users = [
        { y: "Q2/15", questioners: 19,  metricators: 29 },
        { y: "Q3/15", questioners: 30,  metricators: 35 },
        { y: "Q1/16", questioners: 55,  metricators: 45 },
        { y: "Q2/16", questioners: 78,  metricators: 80 }
    ];

    vm.teams_productivity_trend = [
        { y: "01/11", questions: 10, metrics: 12 },
        { y: "02/16", questions: 8,  metrics: 3 },
        { y: "03/16", questions: 9,  metrics: 11 },
        { y: "04/16", questions: 12,  metrics: 12 },
        { y: "05/16", questions: 14,  metrics: 13 },
        { y: "06/16", questions: 11,  metrics: 9 },
        { y: "07/16", questions: 5, metrics: 6 }
    ]

    
    vm.projects = [
        {grid_name: "ISSR Project",status: "active",progress: 30},
        {grid_name: "ISSR Project2",status: "active",progress: 70}
    ];

    //Date
    vm.date = new Date();


    /******************************************************
    *
    *
    * QUESTIONER SECTION ON HOME
    *
    *
    *******************************************************/


    /******************************************************
    *
    *
    * METRICATOR SECTION ON HOME
    *
    *
    *******************************************************/

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
* @Last Modified time: 2016-07-16 20:21:57
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

MeasurementGoalController.$inject = ['$scope', '$location','MeasurementGoalService','MetricService','$window','AuthService', 'STATES', 'MetricModalService', 'ContextFactorService', 'AssumptionService', 'ContextFactorModalService', 'AssumptionModalService', '$routeParams'];

function MeasurementGoalController($scope, $location, MeasurementGoalService, MetricService, $window, AuthService, STATES, MetricModalService, ContextFactorService, AssumptionService, ContextFactorModalService, AssumptionModalService, $routeParams) {

    var vm = this;

    vm.measurementGoals = [];

    //Initialize some transition variables
    vm.externalMetricDialog = MetricService.getExternalMetricDialog();
    vm.externalQuestionDialog = [];
    vm.externalContextFactorDialog = [];
    vm.externalAssumptionDialog = [];

    vm.submitMeasurementGoal = submitMeasurementGoal;
    vm.goToUpdateMeasurementGoal = goToUpdateMeasurementGoal;
    vm.setMetricDialog = setMetricDialog;
    vm.addTagToMeasurementGoal = addTagToMeasurementGoal;
    vm.removeTagFromMeasurementGoal = removeTagFromMeasurementGoal;
    //vm.getMetricsByMeasurementGoal = getMetricsByMeasurementGoal;
    vm.getApprovedMetrics = getApprovedMetrics;
    //vm.addMetricToMeasurementGoal = addMetricToMeasurementGoal;
    //vm.removeMetricFromMeasurementGoal = removeMetricFromMeasurementGoal;
    vm.removeSomethingFromMeasurementGoal = removeSomethingFromMeasurementGoal;
    vm.isModifiable = isModifiable;
    //vm.isSubmittable = isSubmittable;
    vm.getExternalContextFactors = getExternalContextFactors;
    vm.getExternalAssumptions = getExternalAssumptions;
    vm.getMetricsToUpdate = getMetricsToUpdate;
    vm.getContextFactorsToUpdate = getContextFactorsToUpdate;
    vm.getAssumptionsToUpdate = getAssumptionsToUpdate;
    vm.setContextFactorDialog = setContextFactorDialog;
    vm.setAssumptionDialog = setAssumptionDialog;
    vm.commitChangeState = commitChangeState;
    vm.isForApproval = isForApproval;
    vm.isToApprove = isToApprove;
    vm.isToSuspend = isToSuspend;
    vm.isToReject = isToReject;

    _init();
    _selectMeasurementGoalToView();


    /********************************************************************************
    * @ngdoc method
    * @name _selectMeasurementGoalToView
    * @description
    * This function initializes MeasurementGoalDialog
    ********************************************************************************/
    function _initMeasurementGoalDialog(){
        vm.measurementGoalDialog = MeasurementGoalService.getUpdateMeasurementGoal().measurementGoal;
        vm.metrics = MeasurementGoalService.getUpdateMeasurementGoal().metrics;
        vm.contextFactors = MeasurementGoalService.getUpdateMeasurementGoal().contextFactors;
        vm.assumptions = MeasurementGoalService.getUpdateMeasurementGoal().assumptions;
        vm.organizationalGoal = MeasurementGoalService.getUpdateMeasurementGoal().organizationalGoal;
        vm.instanceProject = MeasurementGoalService.getUpdateMeasurementGoal().instanceProject;        
    }

    /********************************************************************************
    * @ngdoc method
    * @name _selectMeasurementGoalToView
    * @description
    * This function checks that in the url there's param id.
    * If id is specified, the page is loaded with the Measurement Goal id specified.
    * Otherwise page is loaded with Measurement Goal in MeasurementGoalService
    ********************************************************************************/
    function _selectMeasurementGoalToView(){
        if (!$routeParams.measurementgoalid) {
            //Can modify
            vm.modifying = true;
            _initMeasurementGoalDialog();
        }
        else {
            //Only for readers
            vm.modifying = false;

            vm.currMeasurementGoalId = {
                id: $routeParams.measurementgoalid
            };

            //Retrieve Measurement Goal Details
            MeasurementGoalService.getMeasurementGoalsBy(vm.currMeasurementGoalId.id,'id').then(
                function(data){
                    vm.measurementGoalDialog = data.measurementGoals[0];
                    
                    //Retrieve Measurement Goal Externals
                    MeasurementGoalService.getMeasurementGoalExternals(vm.currMeasurementGoalId.id).then(
                        function (response) {
                            console.log('Success in read to get Measurement Goal Externals');
                            console.log(response);

                            vm.metrics = response.metrics;
                            vm.contextFactors = response.contextFactors;
                            vm.assumptions = response.assumptions;
                            vm.organizationalGoal = response.organizationalGoal;
                            vm.instanceProject = response.instanceProject;

                            var toUpdate = {
                                measurementGoal : vm.measurementGoalDialog,
                                metrics : response.metrics,
                                contextFactors : response.contextFactors,
                                assumptions : response.assumptions,
                                organizationalGoal : response.organizationalGoal,
                                instanceProject : response.instanceProject
                            };
                            MeasurementGoalService.toUpdateMeasurementGoal(toUpdate);
                        },
                        function (response) {
                            console.log('Failure get Measurement Goal Externals');
                            console.log(response);
                        }
                    );
                },function(data){
                    vm.error = true;
                }
            );
        }
    }


    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Submits a MeasurementGoal.
    ********************************************************************************/
    function submitMeasurementGoal(state) {

        /*var objectSubmit = (vm.object !== undefined) ? vm.object :  vm.measurementGoalDialog.object;
        var purposeSubmit = (vm.purpose !== undefined) ? vm.purpose :  vm.measurementGoalDialog.purpose;
        var viewPointSubmit = (vm.viewPoint !== undefined) ? vm.viewPoint :  vm.measurementGoalDialog.viewPoint;
        var qualityFocusSubmit = (vm.qualityFocus !== undefined) ? vm.qualityFocus :  vm.measurementGoalDialog.qualityFocus;
        //var functionJavascriptSubmit = (vm.functionJavascript !== undefined) ? vm.functionJavascript :  vm.measurementGoalDialog.interpretationModel.functionJavascript;
        var queryNoSQLSubmit = (vm.queryNoSQL !== undefined) ? vm.queryNoSQL :  vm.measurementGoalDialog.interpretationModel.queryNoSQL;
        var releaseNoteSubmit = (vm.sendMessage !== undefined) ? vm.sendMessage :  vm.measurementGoalDialog.metadata.releaseNote;
        var stateSubmit = (state != null) ? state :  vm.measurementGoalDialog.metadata.state;

        var measurementGoal = {
            userid : vm.measurementGoalDialog.userid,
        	name : vm.name,
        	object : objectSubmit,
            viewPoint : viewPointSubmit,
            qualityFocus : qualityFocusSubmit,
        	purpose : purposeSubmit,
            OrganizationalGoalId : vm.measurementGoalDialog.OrganizationalGoalId,
            metrics : vm.measurementGoalDialog.metrics,
            questions : vm.measurementGoalDialog.questions,
            metricatorId : vm.measurementGoalDialog.metricatorId,
            questionersId : vm.measurementGoalDialog.questionersId,
            contextFactors : vm.measurementGoalDialog.contextFactors,
            assumptions : vm.measurementGoalDialog.assumptions,
            interpretationModel : {
                functionJavascript : vm.measurementGoalDialog.interpretationModel.functionJavascript,
                queryNoSQL : queryNoSQLSubmit
            },
            metadata : {
                id : vm.measurementGoalDialog.metadata.id,
                version : vm.measurementGoalDialog.metadata.version,
                tags : vm.measurementGoalDialog.metadata.tags,
                creatorId : vm.measurementGoalDialog.metadata.creatorId,
                state : stateSubmit,
                releaseNote : releaseNoteSubmit,
                entityType : vm.measurementGoalDialog.metadata.entityType,
                versionBus : vm.measurementGoalDialog.metadata.versionBus,
                creationDate : vm.measurementGoalDialog.metadata.creationDate,
                lastVersionDate : vm.measurementGoalDialog.metadata.lastVersionDate
            }
        };*/

        if (state !== undefined) vm.measurementGoalDialog.metadata.state = state;

        MeasurementGoalService.submitMeasurementGoal(vm.measurementGoalDialog).then(
            function(message) {
                vm.measurementGoalDialog = message.measurementGoals[0];
                $window.alert('Measurement Goal Submitted');
                $location.path('/metricator');
            },
            function(message) {
                alert(message);
            }
        );
    }

    function getMetricsToUpdate() {
    	vm.metrics = MeasurementGoalService.getUpdateMeasurementGoal().metrics;
    }

    function getContextFactorsToUpdate() {
    	vm.contextFactors = MeasurementGoalService.getUpdateMeasurementGoal().contextFactors;
    }

    function getAssumptionsToUpdate() {
    	vm.assumptions = MeasurementGoalService.getUpdateMeasurementGoal().assumptions;
    }

    /********************************************************************************
    * @ngdoc method
    * @name commitChangeState
    * @description
    * This function commits a new state for MeasurementGoal
    ********************************************************************************/
    function commitChangeState(state) {
        switch (state) {
            case STATES.PENDING : 
                _sendForApproval();
                break;
            case STATES.APPROVED : 
                _approve();
                break;
            case STATES.REJECTED : 
                _reject();
                break;
            case STATES.SUSPENDED : 
                _suspend();
                break;
            case STATES.ONUPDATEWAITINGQUESTIONS :
                _assign();
                break;
               
        }
    }

    /********************************************************************************
    * @ngdoc method
    * @name sendForApproval
    * @description
    * Sends a MeasurementGoal for approval.
    ********************************************************************************/
    function _sendForApproval() {
        submitMeasurementGoal(STATES.PENDING);
    }

    /********************************************************************************
    * @ngdoc method
    * @name reject
    * @description
    * Reject a MeasurementGoal.
    ********************************************************************************/
    function _reject() {
        submitMeasurementGoal(STATES.REJECTED);
    }

    /********************************************************************************
    * @ngdoc method
    * @name reject
    * @description
    * Assign a MeasurementGoal.
    ********************************************************************************/
    function _assign() {
        submitMeasurementGoal(STATES.ONUPDATEWAITINGQUESTIONS);    
    }

    /********************************************************************************
    * @ngdoc method
    * @name approve
    * @description
    * Approve a MeasurementGoal.
    ********************************************************************************/
    function _approve() {
        submitMeasurementGoal(STATES.APPROVED);    
    }

    /********************************************************************************
    * @ngdoc method
    * @name suspend
    * @description
    * Suspend a MeasurementGoal.
    ********************************************************************************/
    function _suspend() {
        submitMeasurementGoal(STATES.SUSPENDED);
    }

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get active measurement goals for a metricator.
    ********************************************************************************/
    function getMeasurementGoals(){
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
        MetricService.getMetricsByMeasurementGoalId(vm.measurementGoalDialog.metadata.id).then(
                function(data) {
                    console.log('SUCCESS GET METRICS BY MEASUREMENT GOAL');
                    console.log(data.metrics);
                    vm.metricsDialog = data.metrics;
                },
                function(data) {
                    alert('Error retriving Metrics');
                }
        );        

    }

    /********************************************************************************
    * @ngdoc method
    * @name getApprovedMetrics
    * @description
    * Get approved metrics.
    ********************************************************************************/
    function getApprovedMetrics(){

    	if (vm.externalMetricDialog.length === 0){
	        MetricService.getApprovedMetrics().then(
	            function(data) {
	                console.log('SUCCESS GET APPROVED METRICS');
	                console.log(data.metricsDTO);
	                //vm.externalMetricDialog = data.metricsDTO;
	                MetricService.storeExternalMetric(data.metricsDTO);
    			    MetricModalService.openExternalMetricModal();

	                //$("#modal_large_external_metric").modal("show");
	            },
	            function(data) {
	                alert('Error retriving Metrics');
	            }
	        );
     	}
     	else {
     		MetricModalService.openExternalMetricModal();
     	}
    }

    /********************************************************************************
    * @ngdoc method
    * @name getExternalContextFactors
    * @description
    * Get external context factors.
    ********************************************************************************/
    function getExternalContextFactors(){
         MeasurementGoalService.getExternalContextFactors().then(
            function(data) {
                console.log('SUCCESS GET EXTERNAL CONTEXT FACTORS');
                console.log(data);
                //vm.externalContextFactorDialog = data;
                //$("#modal_large_external_contextfactor").modal("show");
                ContextFactorService.storeExternalContextFactor(data);
			    ContextFactorModalService.openExternalContextFactorModal();
            },
            function(data) {
                alert('Error retrieving Context Factors');
            }
        );
    }

    /********************************************************************************
    * @ngdoc method
    * @name getExternalAssumptions
    * @description
    * Get external assumptions.
    ********************************************************************************/
    function getExternalAssumptions(){
         MeasurementGoalService.getExternalAssumptions().then(
            function(data) {
                console.log('SUCCESS GET EXTERNAL ASSUMPTIONS');
                console.log(data);
                //vm.externalAssumptionDialog = data;
                //$("#modal_large_external_assumption").modal("show");
                AssumptionService.storeExternalAssumption(data);
			    AssumptionModalService.openExternalAssumptionModal();
            },
            function(data) {
                alert('Error retrieving Assumptions');
            }
        );
    }

    function setMetricDialog(metricToAssignId){
            MetricService.storeMetric(vm.metrics[metricToAssignId]);
            MetricModalService.openMetricModal();
    }

    function setContextFactorDialog(contextFactorToAssignId){
            ContextFactorService.storeContextFactor(vm.contextFactors[contextFactorToAssignId]);
            ContextFactorModalService.openContextFactorModal();
    }

    function setAssumptionDialog(assumptionToAssignId){
            AssumptionService.storeAssumption(vm.assumptions[assumptionToAssignId]);
            AssumptionModalService.openAssumptionModal();
    }

    function goToUpdateMeasurementGoal(){
        $location.path('/measurementgoal');
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
        for(var i=0; i<vm.metrics.length; i++){
            if(vm.externalMetricDialog[index].metadata.id == vm.metrics[i].metadata.id){
                $window.alert('You cannot add a metric twice!');
                return true;
            }
        }

        var pointerBus = {
           objIdLocalToPhase : "",
           typeObj : "Metric",
           instance : vm.externalMetricDialog[index].metadata.id,
           busVersion : "",
           tags: []
        };
        vm.measurementGoalDialog.metrics.push(pointerBus);
        vm.metrics.push(vm.externalMetricDialog[index]);
        $window.alert('Item added');
        console.log(vm.measurementGoalDialog);
        return false;
    }

    /********************************************************************************
    * @ngdoc method
    * @name removeMetricFromMeasurementGoal
    * @description
    * Remove metric from measurement goal.
    ********************************************************************************/
    function removeMetricFromMeasurementGoal(index){
        vm.measurementGoalDialog.metrics.splice(index, 1);
        vm.metrics.splice(index, 1);
        $window.alert('Item removed');
        console.log(vm.measurementGoalDialog);
    }

    /********************************************************************************
    * @ngdoc method
    * @name removeSomethingFromMeasurementGoal
    * @description
    * Remove something from measurement goal.
    ********************************************************************************/
    function removeSomethingFromMeasurementGoal(typeObject, index){
        
        switch(typeObject) {
            case 'Metric':
                vm.measurementGoalDialog.metrics.splice(index, 1);
                vm.metrics.splice(index, 1);
                break;
            case 'Question':
                vm.measurementGoalDialog.questions.splice(index, 1);
                vm.questions.splice(index, 1);
                break;
            case 'ContextFactor':
                vm.measurementGoalDialog.contextFactors.splice(index, 1);
                vm.contextFactors.splice(index, 1);
                break;
            case 'Assumption':
                vm.measurementGoalDialog.assumptions.splice(index, 1);
                vm.assumptions.splice(index, 1);
                break;
        }

        $window.alert('Item removed');
        console.log("MEASUREMENT GOAL AFTER REMOVE");
        console.log(vm.measurementGoalDialog);
    }

    /********************************************************************************
    * @ngdoc method
    * @name isModifiable
    * @description
    * Measurement Goal can be updated.
    ********************************************************************************/
    function isModifiable(){
        return vm.measurementGoalDialog.metricatorId == AuthService.getUser().username && !(vm.measurementGoalDialog.metadata.state == 'Pending');
    }

    /********************************************************************************
    * @ngdoc method
    * @name isSubmittable
    * @description
    * Measurement Goal can be submitted.
    ********************************************************************************/ 
    function isSubmittable(){
        return vm.measurementGoalDialog.metricatorId == AuthService.getUser().username && vm.measurementGoalDialog.metadata.state == 'OnUpdateQuestionerEndpoint';
    }

    /********************************************************************************
    * @ngdoc method
    * @name isForApproval
    * @description
    * Measurement Goal can be sent for approval.
    ********************************************************************************/ 
    function isForApproval(){
        return AuthService.getUser().role == 'METRICATOR' &&
        vm.measurementGoalDialog.metricatorId == AuthService.getUser().username && 
        vm.measurementGoalDialog.metadata.state == 'OnUpdateQuestionerEndpoint';
    }

    /********************************************************************************
    * @ngdoc method
    * @name isToReject
    * @description
    * Measurement Goal can be rejected.
    ********************************************************************************/ 
    function isToReject(){
        return AuthService.getUser().role == 'EXPERT' && 
        vm.measurementGoalDialog.metadata.state == 'Pending';
    }

    /********************************************************************************
    * @ngdoc method
    * @name isToApproved
    * @description
    * Measurement Goal can be approved.
    ********************************************************************************/ 
    function isToApprove(){
        return AuthService.getUser().role == 'EXPERT' && 
        vm.measurementGoalDialog.metadata.state == 'Pending';
    }

    /********************************************************************************
    * @ngdoc method
    * @name isToSuspend
    * @description
    * Measurement Goal can be suspended.
    ********************************************************************************/ 
    function isToSuspend(){
        return AuthService.getUser().role == 'EXPERT' && 
        vm.measurementGoalDialog.metadata.state == 'Approved'
        vm.measurementGoalDialog.metadata.state == 'Rejected';
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

(function () { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name MeasurementGoalSearchController
* @module metricapp
* @requires $scope
* @requires $location
* @description
* Manages the MeasurementGoal.
* Realizes the control layer for `measurementgoalsearch.view`.
************************************************************************************/

angular.module('metricapp')

.controller('MeasurementGoalSearchController', MeasurementGoalSearchController);

MeasurementGoalSearchController.$inject = ['$scope', '$location','MetricService','MeasurementGoalService','$window', 'MeasurementGoalModalService'];

function MeasurementGoalSearchController($scope, $location, MetricService, MeasurementGoalService, $window, MeasurementGoalModalService) {

    var vm = this;
    vm.measurementGoals = [];
    vm.metrics = [];
    vm.contextFactors = [];
    vm.assumptions = [];
    vm.organizationalGoal = {};
    vm.instanceProject = {};
    vm.measurementGoalDialog = {};
    vm.modal = "";
    
    vm.getMeasurementGoals = getMeasurementGoals;
    vm.getMetrics = getMetrics;
    vm.goToUpdateMeasurementGoal = goToUpdateMeasurementGoal;
    vm.getMeasurementGoalExternals = getMeasurementGoalExternals;
    vm.setMeasurementGoalDialog = setMeasurementGoalDialog;
    vm.getMeasurementGoalsBy = getMeasurementGoalsBy;
    
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
                vm.measurementGoals = data.measurementGoals;
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
    * Get active measurement goals for a metricator by some field.
    ********************************************************************************/
    function getMeasurementGoalsBy(keyword,field){

        if (keyword != null && field != null){
            MeasurementGoalService.getMeasurementGoalsBy(keyword,field).then(
                function(data) {
                    console.log(data.measurementGoals);
                    vm.measurementGoals = data.measurementGoals;
                    if(vm.measurementGoals.length === 0)
                        $window.alert(data.error);
                },
                function(data) {
                    alert('Error retriving Measurement Goals');
                }
            );
        }
        else
            $window.alert("You must enter keyword and field");
    }

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

    /********************************************************************************
    * @ngdoc method
    * @name getMeasurementGoalExternals
    * @description
    * Get measurement goals externals.
    ********************************************************************************/
    function getMeasurementGoalExternals(externalId){
         MeasurementGoalService.getMeasurementGoalExternals(externalId).then(
            function(data) {
                //console.log(data.measurementGoals);
                //TODO add check if variable is undefined
                vm.metrics = data.metrics;
                vm.contextFactors = data.contextFactors;
                vm.assumptions = data.assumptions;
                vm.organizationalGoal = data.organizationalGoal;
                vm.instanceProject = data.instanceProject;
                //$("#modal_large").modal("show");
            },
            function(data) {
                alert('Error retriving Metrics');
            }
        );
    };

    function setMeasurementGoalDialog(measurementGoalToAssignId){
        vm.measurementGoalDialog = vm.measurementGoals[measurementGoalToAssignId];
        getMeasurementGoalExternals(vm.measurementGoals[measurementGoalToAssignId].metadata.id);
        
        //Send to MeasurementGoalService to open a modal
        var toUpdate = {
            measurementGoal : vm.measurementGoalDialog,
            metrics : vm.metrics,
            contextFactors : vm.contextFactors,
            assumptions : vm.assumptions,
            organizationalGoal : vm.organizationalGoal,
            instanceProject : vm.instanceProject
        };

        MeasurementGoalService.toUpdateMeasurementGoal(toUpdate);
        MeasurementGoalModalService.openMeasurementGoalModal();
    };

    function goToUpdateMeasurementGoal(){

            var toUpdate = {
                measurementGoal : vm.measurementGoalDialog,
                metrics : vm.metrics,
                contextFactors : vm.contextFactors,
                assumptions : vm.assumptions,
                organizationalGoal : vm.organizationalGoal,
                instanceProject : vm.instanceProject
            };

            MeasurementGoalService.toUpdateMeasurementGoal(toUpdate);
            console.log("Going to Update Measurement Goal");
            $location.path('/measurementgoal');
            console.log($location.path('/measurementgoal'));

    }
    }


    /********************************************************************************
    * @ngdoc method
    * @name _init
    * @description
    * Initializes the controller.
    ********************************************************************************/
    function _init() {
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
* @Last Modified time: 2016-07-16 20:15:41
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

MetricatorController.$inject = ['$scope', '$location','MetricService','MeasurementGoalService','$window','STATES', 'AuthService', 'MeasurementGoalModalService'];

function MetricatorController($scope, $location, MetricService, MeasurementGoalService, $window, STATES, AuthService, MeasurementGoalModalService) {

    var vm = this;

    vm.states = [STATES.ONUPDATEQUESTIONERENDPOINT, STATES.ONUPDATEWAITINGQUESTIONS];
    vm.measurementGoals = [undefined,undefined];
    vm.metrics = [];
    vm.contextFactors = [];
    vm.assumptions = [];
    vm.organizationalGoal = {};
    vm.instanceProject = {};
    vm.measurementGoalDialog = {};
    vm.modalIds = [];

    vm.setMeasurementGoalDialog = setMeasurementGoalDialog;
    //vm.isModifiable = isModifiable;
    //vm.isSubmittable = isSubmittable;
    vm.sendForApproval = sendForApproval;
    //vm.getMeasurementGoals = getMeasurementGoals;
    vm.getMeasurementGoalsByState = getMeasurementGoalsByState;
    //vm.getMetrics = getMetrics;
    vm.goToUpdateMeasurementGoal = goToUpdateMeasurementGoal;
    vm.getMeasurementGoalExternals = getMeasurementGoalExternals;

    _getMeasurementGoals();
    _init();

    /********************************************************************************
    * @ngdoc method
    * @name _getMeasurementGoalsByState
    * @description
    * Get measurement goals by state for a metricator.
    ********************************************************************************/
    function getMeasurementGoalsByState(index){
         MeasurementGoalService.getMeasurementGoals(vm.states[index]).then(
            function(data) {
                console.log(data.measurementGoals);
                //vm.results.measurementGoals = data.measurementGoals;
                vm.measurementGoals[index] = data.measurementGoals;
            },
            function(data) {
                alert('Error retriving Measurement Goals');
            }
        );
    };

    /********************************************************************************
    * @ngdoc method
    * @name _getMeasurementGoals
    * @description
    * Get active measurement goals for a metricator.
    ********************************************************************************/
    function _getMeasurementGoals(){
        for (var i=0; i<vm.states.length; i++){
            getMeasurementGoalsByState(i);
        }
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

    /********************************************************************************
    * @ngdoc method
    * @name getMeasurementGoalExternals
    * @description
    * Get measurement goals externals.
    ********************************************************************************/
    function getMeasurementGoalExternals(externalId){

         MeasurementGoalService.getMeasurementGoalExternals(externalId).then(
            function(data) {
                vm.metrics = data.metrics;
                vm.contextFactors = data.contextFactors;
                vm.assumptions = data.assumptions;
                vm.organizationalGoal = data.organizationalGoal;
                vm.instanceProject = data.instanceProject;

	        	var toUpdate = {
	            	measurementGoal : vm.measurementGoalDialog,
	            	metrics : data.metrics,
	            	contextFactors : data.contextFactors,
	            	assumptions : data.assumptions,
	            	organizationalGoal : data.organizationalGoal,
	            	instanceProject : data.instanceProject
	        	}; 	

                vm.modalIds.push([externalId,toUpdate]);

	        	//Send to MeasurementGoalService to open a modal
        		MeasurementGoalService.toUpdateMeasurementGoal(toUpdate);
	        	MeasurementGoalModalService.openMeasurementGoalModal();
                console.log("Retrieving Externals");
            },
            function(data) {
                alert('Error retriving Externals');
        	}
        );
    };

    function setMeasurementGoalDialog(parentIndex,measurementGoalToAssignId){
        vm.measurementGoalDialog = vm.measurementGoals[parentIndex][measurementGoalToAssignId];
        var toSearchId = vm.measurementGoals[parentIndex][measurementGoalToAssignId].metadata.id;
        var doubleInCache = false;

        for (var t=0, length = vm.modalIds.length; t<length; t++){
            if (vm.modalIds[t][0] === toSearchId){
                //Send to MeasurementGoalService to open a modal
                MeasurementGoalService.toUpdateMeasurementGoal(vm.modalIds[t][1]);
                MeasurementGoalModalService.openMeasurementGoalModal();
                doubleInCache = true;
            }
        }

        if (!doubleInCache) getMeasurementGoalExternals(toSearchId);
    };

    function goToUpdateMeasurementGoal(){

        var toUpdate = {
            measurementGoal : vm.measurementGoalDialog,
            metrics : vm.metrics,
            contextFactors : vm.contextFactors,
            assumptions : vm.assumptions,
            organizationalGoal : vm.organizationalGoal,
            instanceProject : vm.instanceProject
        };

        MeasurementGoalService.toUpdateMeasurementGoal(toUpdate);
        $location.path('/measurementgoal');
    }

    /********************************************************************************
    * @ngdoc method
    * @name isModifiable
    * @description
    * Measurement Goal can be updated.
    ********************************************************************************/
    function isModifiable(){
        return vm.measurementGoalDialog.metricatorId == AuthService.getUser().username;
    }

    /********************************************************************************
    * @ngdoc method
    * @name isSubmittable
    * @description
    * Measurement Goal can be submitted.
    ********************************************************************************/ 
    function isSubmittable(){
        return vm.measurementGoalDialog.metricatorId == AuthService.getUser().username && vm.measurementGoalDialog.metadata.state == 'OnUpdateQuestionerEndpoint';
    }

    /********************************************************************************
    * @ngdoc method
    * @name sendForApproval
    * @description
    * Send Measurement Goal for approval.
    ********************************************************************************/ 
    function sendForApproval(){

        console.log("Send For Approval");
        var toUpdate = {
            measurementGoal : vm.measurementGoalDialog,
            metrics : vm.metrics,
            contextFactors : vm.contextFactors,
            assumptions : vm.assumptions,
            organizationalGoal : vm.organizationalGoal,
            instanceProject : vm.instanceProject
        };

        MeasurementGoalService.toUpdateMeasurementGoal(toUpdate);
        
        $location.path('/measurementgoal/sendforapproval');
    }
    }
    /********************************************************************************
    * @ngdoc method
    * @name _init
    * @description
    * Initializes the controller.
    ********************************************************************************/
    function _init() {
    }


})();

/*
* @Author: alessandro.fazio
* @Date:   2016-07-15 13:03:51
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 00:06:59
*/

(function() {'use strict';

angular.module('metricapp')

.controller('AssumptionModalCtrl', AssumptionModalCtrl);

AssumptionModalCtrl.$inject = ['$window', '$uibModal', 'AssumptionService', '$uibModalInstance'];

function AssumptionModalCtrl($window, $uibModal, AssumptionService, $uibModalInstance) {

	var vm = this;

	vm.assumptionDialog = AssumptionService.getAssumptionDialog();
    vm.setAssumptionDialog = setAssumptionDialog;
    //vm.addAssumptionToMeasurementGoal = setAssumptionDialog;

    vm.closeModal = function(){
        $uibModalInstance.dismiss("closing");            
    };

    function setAssumptionDialog(assumptionToAssignId){
            AssumptionService.storeAssumption(vm.externalAssumptionDialog[assumptionToAssignId]);
            AssumptionModalService.openAssumptionModal();
    }

    /*function addAssumptionToMeasurementGoal(obj){
        console.log("Adding item");
        if (MeasurementGoalService.addSomethingToMeasurementGoal('Assumption',obj)){
            $window.alert('Item added');
        }
        else {
            $window.alert('You cannot add this item');
        }
        
    }*/

    /*ctrl.editQuestion = function(question){
        $uibModalInstance.dismiss("closing");
        QuestionStorageFactory.setQuestion(question);
        $location.path('/questionUpdate');
    };*/


}

})();
/*
* @Author: alessandro.fazio
* @Date:   2016-07-15 13:03:51
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 00:06:45
*/

(function() {'use strict';

angular.module('metricapp')

.controller('ContextFactorModalCtrl', ContextFactorModalCtrl);

ContextFactorModalCtrl.$inject = ['$window', '$uibModal', 'ContextFactorService', '$uibModalInstance'];

function ContextFactorModalCtrl($window, $uibModal, ContextFactorService, $uibModalInstance) {

	var vm = this;

	vm.contextFactorDialog = ContextFactorService.getContextFactorDialog();
    console.log('vm.contextFactorDialog');
    console.log(vm.contextFactorDialog);

    vm.setContextFactorDialog = setContextFactorDialog;
    //vm.addContextFactorToMeasurementGoal = addContextFactorToMeasurementGoal;

    vm.closeModal = function(){
        $uibModalInstance.dismiss("closing");            
    };

    function setContextFactorDialog(contextFactorToAssignId){
            ContextFactorService.storeContextFactor(vm.contextFactorDialog[contextFactorToAssignId]);
            ContextFactorModalService.openContextFactorModal();
    }

    /*function addContextFactorToMeasurementGoal(obj){
        console.log("Adding item");
        if (MeasurementGoalService.addSomethingToMeasurementGoal('ContextFactor',obj)){
            $window.alert('Item added');
        }
        else {
            $window.alert('You cannot add this item');
        }
        
    }
    */

    /*ctrl.editQuestion = function(question){
        $uibModalInstance.dismiss("closing");
        QuestionStorageFactory.setQuestion(question);
        $location.path('/questionUpdate');
    };*/


}

})();
/*
* @Author: alessandro.fazio
* @Date:   2016-07-16 00:04:59
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 00:05:43
*/
/*
* @Author: alessandro.fazio
* @Date:   2016-07-15 23:57:25
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 00:03:28
*/

(function() {'use strict';

angular.module('metricapp')

.controller('ExternalAssumptionModalCtrl', ExternalAssumptionModalCtrl);

ExternalAssumptionModalCtrl.$inject = ['$window', '$uibModal', 'AssumptionService', '$uibModalInstance', 'AssumptionModalService', 'MeasurementGoalService'];

function ExternalAssumptionModalCtrl($window, $uibModal, AssumptionService, $uibModalInstance, AssumptionModalService, MeasurementGoalService) {

	var vm = this;

	vm.externalAssumptionDialog = AssumptionService.getExternalAssumptionDialog();
	
	//console.log("External Metric Dialog");
	//console.log(vm.externalAssumptionDialog);

	vm.closeModal = closeModal;
	vm.setAssumptionDialog = setAssumptionDialog;
	vm.addAssumptionToMeasurementGoal = addAssumptionToMeasurementGoal;

	
    function closeModal(){
        $uibModalInstance.dismiss("closing");            
    };

    function setAssumptionDialog(assumptionToAssignId){
            AssumptionService.storeAssumption(vm.externalAssumptionDialog[assumptionToAssignId]);
            AssumptionModalService.openAssumptionModal();
    }

    function addAssumptionToMeasurementGoal(obj){
    	console.log("Adding item");
    	if (MeasurementGoalService.addSomethingToMeasurementGoal('Assumption',obj)){
    		$window.alert('Item added');
    	}
    	else {
    		$window.alert('You cannot add this item');
    	}
    	
    }

    /*ctrl.editQuestion = function(question){
        $uibModalInstance.dismiss("closing");
        QuestionStorageFactory.setQuestion(question);
        $location.path('/questionUpdate');
    };*/


}

})();
/*
* @Author: alessandro.fazio
* @Date:   2016-07-15 23:57:25
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 00:03:28
*/

(function() {'use strict';

angular.module('metricapp')

.controller('ExternalContextFactorModalCtrl', ExternalContextFactorModalCtrl);

ExternalContextFactorModalCtrl.$inject = ['$window', '$uibModal', 'ContextFactorService', '$uibModalInstance', 'ContextFactorModalService', 'MeasurementGoalService'];

function ExternalContextFactorModalCtrl($window, $uibModal, ContextFactorService, $uibModalInstance, ContextFactorModalService, MeasurementGoalService) {

	var vm = this;

	vm.externalContextFactorDialog = ContextFactorService.getExternalContextFactorDialog();
	
	//console.log("External Metric Dialog");
	//console.log(vm.externalContextFactorDialog);

	vm.closeModal = closeModal;
	vm.setContextFactorDialog = setContextFactorDialog;
	vm.addContextFactorToMeasurementGoal = addContextFactorToMeasurementGoal;

	
    function closeModal(){
        $uibModalInstance.dismiss("closing");            
    };

    function setContextFactorDialog(contextFactorToAssignId){
            ContextFactorService.storeContextFactor(vm.externalContextFactorDialog[contextFactorToAssignId]);
            ContextFactorModalService.openContextFactorModal();
    }

    function addContextFactorToMeasurementGoal(obj){
    	console.log("Adding item");
    	if (MeasurementGoalService.addSomethingToMeasurementGoal('ContextFactor',obj)){
    		$window.alert('Item added');
    	}
    	else {
    		$window.alert('You cannot add this item');
    	}
    	
    }

    /*ctrl.editQuestion = function(question){
        $uibModalInstance.dismiss("closing");
        QuestionStorageFactory.setQuestion(question);
        $location.path('/questionUpdate');
    };*/


}

})();
/*
* @Author: alessandro.fazio
* @Date:   2016-07-15 13:03:51
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-15 13:39:26
*/

(function() {'use strict';

angular.module('metricapp')

.controller('ExternalMetricModalCtrl', ExternalMetricModalCtrl);

ExternalMetricModalCtrl.$inject = ['$window', '$uibModal', 'MetricService', '$uibModalInstance', 'MetricModalService', 'MeasurementGoalService'];

function ExternalMetricModalCtrl($window, $uibModal, MetricService, $uibModalInstance, MetricModalService, MeasurementGoalService) {

	var vm = this;

	vm.externalMetricDialog = MetricService.getExternalMetricDialog();
	
	//console.log("External Metric Dialog");
	//console.log(vm.externalMetricDialog);

	vm.closeModal = closeModal;
	vm.setMetricDialog = setMetricDialog;
	vm.addMetricToMeasurementGoal = addMetricToMeasurementGoal;

	
    function closeModal(){
        $uibModalInstance.dismiss("closing");            
    };

    function setMetricDialog(metricToAssignId){
            MetricService.storeMetric(vm.externalMetricDialog[metricToAssignId]);
            MetricModalService.openMetricModal();
    }

    function addMetricToMeasurementGoal(obj){
    	console.log("Adding item");
    	if (MeasurementGoalService.addSomethingToMeasurementGoal('Metric',obj)){
    		$window.alert('Item added');
    	}
    	else {
    		$window.alert('You cannot add this item');
    	}
    	
    }

    /*ctrl.editQuestion = function(question){
        $uibModalInstance.dismiss("closing");
        QuestionStorageFactory.setQuestion(question);
        $location.path('/questionUpdate');
    };*/


}

})();
/*
* @Author: alessandro.fazio
* @Date:   2016-07-15 13:03:51
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 19:33:26
*/

(function() {'use strict';

angular.module('metricapp')

.controller('MeasurementGoalModalCtrl', MeasurementGoalModalCtrl);

MeasurementGoalModalCtrl.$inject = ['$window', '$uibModal', 'MeasurementGoalService', '$uibModalInstance', 'AuthService', '$location'];

function MeasurementGoalModalCtrl($window, $uibModal, MeasurementGoalService, $uibModalInstance, AuthService, $location) {

	var vm = this;

	vm.measurementGoalDialog = MeasurementGoalService.getUpdateMeasurementGoal().measurementGoal;
    vm.metrics = MeasurementGoalService.getUpdateMeasurementGoal().metrics;
	vm.contextFactors = MeasurementGoalService.getUpdateMeasurementGoal().contextFactors;
	vm.assumptions = MeasurementGoalService.getUpdateMeasurementGoal().assumptions;
	vm.organizationalGoal = MeasurementGoalService.getUpdateMeasurementGoal().organizationalGoal;
	vm.instanceProject = MeasurementGoalService.getUpdateMeasurementGoal().instanceProject;
	vm.functionJavascript = vm.measurementGoalDialog.interpretationModel.functionJavascript;
	vm.isModifiable = isModifiable;
    vm.isForApproval = isForApproval;
    vm.isToReject = isToReject;
    vm.isToSuspend = isToSuspend;
    vm.isToApprove = isToApprove;
    vm.closeModal = closeModal;
    vm.goToUpdateMeasurementGoal = goToUpdateMeasurementGoal;
    vm.changeState = changeState;

    function closeModal(){
        $uibModalInstance.dismiss("closing");            
    };

    /********************************************************************************
    * @ngdoc method
    * @name isModifiable
    * @description
    * Measurement Goal can be updated.
    ********************************************************************************/
    function isModifiable(){
       
        //Check if is mine
        if (AuthService.getUser().role != 'METRICATOR' ||
            vm.measurementGoalDialog.metricatorId != AuthService.getUser().username) 
            return false;

        //Check if there's a transitional state
        if (vm.measurementGoalDialog.metadata.state == 'Created' ||
            vm.measurementGoalDialog.metadata.state == 'Pending' || 
            vm.measurementGoalDialog.metadata.state == 'Suspended')
            return false;

        return true;
    }

    /********************************************************************************
    * @ngdoc method
    * @name isForApproval
    * @description
    * Measurement Goal can be sent for approval.
    ********************************************************************************/ 
    function isForApproval(){
        return AuthService.getUser().role == 'METRICATOR' &&
        vm.measurementGoalDialog.metricatorId == AuthService.getUser().username && 
        vm.measurementGoalDialog.metadata.state == 'OnUpdateQuestionerEndpoint';
    }

    /********************************************************************************
    * @ngdoc method
    * @name isToReject
    * @description
    * Measurement Goal can be rejected.
    ********************************************************************************/ 
    function isToReject(){
        return AuthService.getUser().role == 'EXPERT' && 
        vm.measurementGoalDialog.metadata.state == 'Pending';
    }

    /********************************************************************************
    * @ngdoc method
    * @name isToApproved
    * @description
    * Measurement Goal can be approved.
    ********************************************************************************/ 
    function isToApprove(){
        return AuthService.getUser().role == 'EXPERT' && 
        vm.measurementGoalDialog.metadata.state == 'Pending';
    }

    /********************************************************************************
    * @ngdoc method
    * @name isToSuspend
    * @description
    * Measurement Goal can be suspended.
    ********************************************************************************/ 
    function isToSuspend(){
        return AuthService.getUser().role == 'EXPERT' && 
        vm.measurementGoalDialog.metadata.state == 'Approved'
        vm.measurementGoalDialog.metadata.state == 'Rejected';
    }

    /********************************************************************************
    * @ngdoc method
    * @name goToUpdateMeasurementGoal
    * @description
    * Go to update a Measurement Goal.
    ********************************************************************************/ 
    function goToUpdateMeasurementGoal(){
    	closeModal();
    	$location.path('/measurementgoal');
    }

    /********************************************************************************
    * @ngdoc method
    * @name changeState
    * @description
    * Send MeasurementGoal to change state.
    ********************************************************************************/ 
    function changeState(){
        closeModal();
        $location.path('/measurementgoalchangestate');
    }

    /*ctrl.editQuestion = function(question){
        $uibModalInstance.dismiss("closing");
        QuestionStorageFactory.setQuestion(question);
        $location.path('/questionUpdate');
    };*/


}

})();
/*
* @Author: alessandro.fazio
* @Date:   2016-07-15 13:03:51
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-15 13:39:26
*/

(function() {'use strict';

angular.module('metricapp')

.controller('MetricModalCtrl', MetricModalCtrl);

MetricModalCtrl.$inject = ['$window', '$uibModal', 'MetricService', '$uibModalInstance'];

function MetricModalCtrl($window, $uibModal, MetricService, $uibModalInstance) {

	var vm = this;

	vm.metricDialog = MetricService.getMetricDialog();
	vm.closeModal = closeModal;

    function closeModal(){
        $uibModalInstance.dismiss("closing");            
    };

    /*ctrl.editQuestion = function(question){
        $uibModalInstance.dismiss("closing");
        QuestionStorageFactory.setQuestion(question);
        $location.path('/questionUpdate');
    };*/


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
    vm.username = 'maria_bianchi';
    vm.password = 'password';
    vm.password_r = 'password';
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
* @name DraftController
* @module metricapp
* @requires $scope
*
* @description
************************************************************************************/

angular.module('metricapp')

.controller('DraftController', DraftController);

DraftController.$inject = ['$scope', '$location', 'ProfileService','FlashService', 'GENDERS'];

function DraftController($scope, $location, ProfileService, FlashService, GENDERS) 
{

    var vm = this;

    var color = d3.scale.category20();

    vm.options = {
        chart: {
            type: 'forceDirectedGraph',
            height: 300,
            radius: 10,
            linkStrength: 0.1,
            width: (function(){ return nv.utils.windowSize().width })(),
            margin:{top: 10, right: 10, bottom: 10, left: 10},
            color: function(d){
                return color(d.group)
            },
            nodeExtras: function(node) {
                node && node
                  .append("text")
                  .attr("dx", 15)
                  .attr("dy", ".60em")
                  .text(function(d) { return d.name })
                  .style('font-size', '15px');
            }
        }
    };
    
    vm.data = {
        "nodes":[
            {"name":"Adaadasdasdsadsads","group":1},
            {"name":"B","group":2,"civico":19},
            {"name":"C","group":3},
            {"name":"D","group":4},
            {"name":"E","group":5},
            {"name":"F","group":6},
            {"name":"G","group":7}
        ],
        "links":[
            {"source":1,"target":0,"value":1},
            {"source":1,"target":0,"value":2},
            {"source":1,"target":0,"value":3},
            {"source":3,"target":0,"value":4},
            {"source":4,"target":0,"value":5},
            {"source":5,"target":0,"value":6},
        ]
    };

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

/*
* @Author: alessandro.fazio
* @Date:   2016-07-12 23:08:35
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-14 21:05:03
*/

(function () { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name MetricatorDashboardController
* @module metricapp
* @requires $scope
* @requires $location
* @description
* Manages the Measurement goal and metrics by Metricator id.
* Realizes the control layer for `metricatordashboard.view`.
************************************************************************************/

angular.module('metricapp')

.controller('MetricatorDashboardController', MetricatorDashboardController);

MetricatorDashboardController.$inject = ['$scope', '$location','MetricService','MeasurementGoalService','$window', 'STATES', 'STATES_METRIC'];

function MetricatorDashboardController($scope, $location, MetricService, MeasurementGoalService, $window, STATES, STATES_METRIC) {

    var vm = this;

    //var states = [
    //	Approved = 'Approved',
    //	OnUpdate = 'OnUpdate',
    //	Pending = 'Pending'
    //];
    vm.date = new Date();

    vm.measurementGoalStates = [
    	STATES.APPROVED,
    	STATES.ONUPDATEQUESTIONERENDPOINT,
        STATES.PENDING
    ];

    //vm.measurementGoalStates = [];
    //vm.measurementGoalStates[0] = 'Approved';
    //vm.measurementGoalStates[1] = 'OnUpdateQuestionerEndpoint';
    //vm.measurementGoalStates[2] = 'Pending';
    

    vm.metricStates = [
        STATES_METRIC.APPROVED,
        STATES_METRIC.ONUPDATE,
        STATES_METRIC.PENDING
    ];

    vm.measurementGoals = {};

    vm.metrics = {};

    /*var approvedMeasurementGoals = 0;
    var onUpdateMeasurementGoals = 0;
    var pendingMeasurementGoals = 0;
    var measurementGoals = [approvedMeasurementGoals, onUpdateMeasurementGoals, pendingMeasurementGoals];

    var approvedMetrics = 0;
    var onUpdateMetrics = 0;
    var pendingMetrics = 0;
    var metrics = [approvedMetrics, onUpdateMetrics, pendingMetrics];

    vm.results = {
    	metrics : metrics,
    	measurementGoals : measurementGoals,
    }; */

    vm.getMeasurementGoals = getMeasurementGoals;
    vm.getMetrics = getMetrics;

    vm.getMeasurementGoals();
    vm.getMetrics();
    _init();

    /********************************************************************************
    * @ngdoc method
    * @name getMeasurementGoals
    * @description
    * Get measurement goals for a metricator.
    ********************************************************************************/
    function getMeasurementGoals(){
        console.log("Retrieving some informations about Measurement Goals");

        //for (var i = 0, len = vm.measurementGoalStates.length; i<len ; i++){
	    vm.measurementGoalStates.forEach(
                function getMgByState(i){ 
                    MeasurementGoalService.countMeasurementGoalsByState(i).then(
        	            function(data) {
        	                console.log(data.measurementGoals);
        	                vm.measurementGoals[i] = data.count;
                            console.log("vm.measurementGoals[" + i + "] = " + data.count);
        	            },
        	            function(data) {
        	                alert('Error retriving Measurement Goals');
        	            }
                );}
	        ,vm);
        //}

        console.log(vm.measurementGoals);
    };

    /********************************************************************************
    * @ngdoc method
    * @name getMetrics
    * @description
    * Get metrics for a metricator.
    ********************************************************************************/
    function getMetrics(){
        console.log("Retrieving some informations about Metrics");

    	//for (var i = 0; i < vm.metricStates.lenght; i++){
	    vm.metricStates.forEach(
                function getMetByState(i){ 
            MetricService.countMetricsByState(i).then(
	            function(data) {
	                console.log(data.metricsDTO);
	                vm.metrics[i] = data.count;
                    console.log("vm.metrics[" + i + "] = " + data.count);

	            },
	            function(data) {
	                alert('Error retriving Metrics');
	            }
	        );}
        ,vm);
     	//}
    };

    /********************************************************************************
    * @ngdoc method
    * @name _init
    * @description
    * Initializes the controller.
    ********************************************************************************/
    function _init() {
        
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
