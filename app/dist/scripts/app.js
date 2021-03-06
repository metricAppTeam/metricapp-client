(function() { 'use strict';

/************************************************************************************
* @ngdoc overview
* @name metricapp
* @requires ngRoute
* @requires ngCookies
* @requires ngMessage
* @requires ngFlash
*
* @description
* Defines the app module, giving all its dependencies.
************************************************************************************/

angular.module('metricapp',[
    'ngRoute',
    'ngCookies',
    'ngMessages',
    'ngFlash',
    'smart-table',
    'ui.ace',
    'as.sortable',
    'nvd3',
    'angular.morris-chart',
    'angular-svg-round-progress',
    'angular-bubbletree',
    'angularChart',
    'ngCytoscape',
    'ui.bootstrap'
]);

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name EXPERT_ACTIONS
* @module metricapp
* @description
* Defines constants related to Expert's actions.
* - Grids:
* - Teams:
************************************************************************************/

angular.module('metricapp')

.constant('EXPERT_ACTIONS', [
    {name: 'Grids', href: '#/grids', icon: 'codepen'},
    {name: 'Teams', href: '#/teams', icon: 'users'},
    {name: 'Metrics', 				href: '#/metrics',             icon:'fa fa-tasks'         }
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
************************************************************************************/

angular.module('metricapp')

.constant('METRICATOR_ACTIONS', [


    {name: 'MeasurementGoals', 			href: '#/metricator',     icon:'fa fa-tasks'          },
    {name: 'Metrics', 				href: '#/metrics',             icon:'fa fa-tasks'         }
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
************************************************************************************/

angular.module('metricapp')

.constant('QUESTIONER_ACTIONS', [
    {name: 'Profile', href: '#/profile', icon: 'user'},
    {name: 'Measurement Goals', href: '#/questionerMeasurementGoalList', icon: 'list'},
    {name: 'Search Questions', href: '#/questionSearch', icon: 'list'},
    {name: 'Create New Question', href: '#/questionCreation', icon: 'plus'},
    {name: 'Question list', href: '#/questionList', icon: 'list'}

]);

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name USER_ACTIONS
* @module metricapp
* @description
* Defines constants related to Expert's actions.
* - Home:
* - Profile:
* - Settings:
************************************************************************************/

angular.module('metricapp')

.constant('USER_ACTIONS', [
    {name: 'Home',          href: '#/home',         icon: 'desktop'},
    {name: 'Profile',       href: '#/profile',      icon: 'user'},
    {name: 'Organization',  href: '#/organization', icon: 'sitemap'},
    {name: 'Messages',      href: '#/messages',     icon: 'comments'}
]);

})();

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

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name TEAM_ANALYTICS
* @module metricapp
* @description
* Defines constants related to teams analytics.
* - GQM_SCORE:
* - GRIDS_TOT:
* - ARTIFACTS_TOT:
* - ACCEPTANCE_RATIO:
* - ARTIFACTS_MGOAL:
* - ARTIFACTS_RATE:
* - WORKTIME_RATIO:
* - TASKS_PROGRESS:
* - TASKS_RECORD:
************************************************************************************/

angular.module('metricapp')

.constant('TEAM_ANALYTICS', {
    GQM_SCORE:          'team.analytics.gqm.score',
    GRIDS_TOT:          'team.analytics.grids.tot',
    ARTIFACTS_TOT:      'team.analytics.artifacts.tot',
    ACCEPTANCE_RATIO:   'team.analytics.acceptance.ratio',
    ARTIFACTS_MGOAL:    'team.analytics.artifacts.mgoal',
    ARTIFACTS_RATE:     'team.analytics.artifacts.rate',
    WORKTIME_RATIO:     'team.analytics.worktime.ratio',
    TASKS_PROGRESS:     'team.analytics.tasks.progress',
    TASKS_RECORD:       'team.analytics.tasks.record'
});

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name USER_ANALYTICS
* @module metricapp
* @description
* Defines constants related to users analytics.
* - GQM_SCORE:
* - GRIDS_TOT:
* - ARTIFACTS_TOT:
* - ACCEPTANCE_RATIO:
* - ARTIFACTS_MGOAL:
* - ARTIFACTS_RATE:
* - WORKTIME_RATIO:
* - TASKS_PROGRESS:
* - TASKS_RECORD:
************************************************************************************/

angular.module('metricapp')

.constant('USER_ANALYTICS', {
    GQM_SCORE:          'user.analytics.gqm.score',
    GRIDS_TOT:          'user.analytics.grids.tot',
    ARTIFACTS_TOT:      'user.analytics.artifacts.tot',
    ACCEPTANCE_RATIO:   'user.analytics.acceptance.ratio',
    ARTIFACTS_MGOAL:    'user.analytics.artifacts.mgoal',
    ARTIFACTS_RATE:     'user.analytics.artifacts.rate',
    WORKTIME_RATIO:     'user.analytics.worktime.ratio',
    TASKS_PROGRESS:     'user.analytics.tasks.progress',
    TASKS_RECORD:       'user.analytics.tasks.record'
});

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
* @ngdoc constant
* @name AUTH_EVENTS
* @module metricapp
* @description
* Defines events related to users authentication.
* - LOGIN_SUCCESS:
* - LOGIN_FAILURE:
* - LOGOUT_SUCCESS:
* - LOGOUT_FAILURE:
* - PASSWORD_UPDATE_SUCCESS:
* - PASSWORD_UPDATE_FAILURE:
* - NOT_AUTHORIZED:
************************************************************************************/

angular.module('metricapp')

.constant('AUTH_EVENTS', {
    LOGIN_SUCCESS:              'auth.login.success',
    LOGIN_FAILURE:              'auth.login.failure',
    LOGOUT_SUCCESS:             'auth.logout.success',
    LOGOUT_FAILURE:             'auth.logout.failure',
    PASSWORD_UPDATE_SUCCESS:    'auth.password.update.success',
    PASSWORD_UPDATE_FAILURE:    'auth.password.update.failure',
    NOT_AUTHORIZED:             'auth.not.authorized'
});

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name GRID_EVENTS
* @module metricapp
* @description
* Defines events related to grids management.
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

.constant('GRID_EVENTS', {
    CREATE_SUCCESS: 'grid.create.success',
    CREATE_FAILURE: 'grid.create.failure',
    READ_SUCCESS:   'grid.read.success',
    READ_FAILURE:   'grid.read.failure',
    UPDATE_SUCCESS: 'grid.update.success',
    UPDATE_FAILURE: 'grid.update.failure',
    DELETE_SUCCESS: 'grid.delete.success',
    DELETE_FAILURE: 'grid.delete.failure'
});

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name METRIC_EVENTS
* @module metricapp
* @description
* Defines events related to metrics management.
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

.constant('METRIC_EVENTS', {
    CREATE_SUCCESS: 'metric.create.success',
    CREATE_FAILURE: 'metric.create.failure',
    READ_SUCCESS:   'metric.read.success',
    READ_FAILURE:   'metric.read.failure',
    UPDATE_SUCCESS: 'metric.update.success',
    UPDATE_FAILURE: 'metric.update.failure',
    DELETE_SUCCESS: 'metric.delete.success',
    DELETE_FAILURE: 'metric.delete.failure'
});

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name MGOAL_EVENTS
* @module metricapp
* @description
* Defines events related to measurement goals management.
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

.constant('MGOAL_EVENTS', {
    CREATE_SUCCESS: 'mgoal.create.success',
    CREATE_FAILURE: 'mgoal.create.failure',
    READ_SUCCESS:   'mgoal.read.success',
    READ_FAILURE:   'mgoal.read.failure',
    UPDATE_SUCCESS: 'mgoal.update.success',
    UPDATE_FAILURE: 'mgoal.update.failure',
    DELETE_SUCCESS: 'mgoal.delete.success',
    DELETE_FAILURE: 'mgoal.delete.failure'
});

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name NOTIFICATION_EVENTS
* @module metricapp
* @description
* Defines events related to notifications management.
* - ALL_READ:
* - SET_READ:
************************************************************************************/

angular.module('metricapp')

.constant('NOTIFICATION_EVENTS', {
    ALL_READ:              'notification.all.read',
    SET_READ:              'notification.set.read',
});

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name OGOAL_EVENTS
* @module metricapp
* @description
* Defines events related to organizational goals management.
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

.constant('OGOAL_EVENTS', {
    CREATE_SUCCESS: 'ogoal.create.success',
    CREATE_FAILURE: 'ogoal.create.failure',
    READ_SUCCESS:   'ogoal.read.success',
    READ_FAILURE:   'ogoal.read.failure',
    UPDATE_SUCCESS: 'ogoal.update.success',
    UPDATE_FAILURE: 'ogoal.update.failure',
    DELETE_SUCCESS: 'ogoal.delete.success',
    DELETE_FAILURE: 'ogoal.delete.failure'
});

})();

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

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name TEAM_EVENTS
* @module metricapp
* @description
* Defines events related to teams management.
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

.constant('TEAM_EVENTS', {
    CREATE_SUCCESS: 'team.create.success',
    CREATE_FAILURE: 'team.create.failure',
    READ_SUCCESS:   'team.read.success',
    READ_FAILURE:   'team.read.failure',
    UPDATE_SUCCESS: 'team.update.success',
    UPDATE_FAILURE: 'team.update.failure',
    DELETE_SUCCESS: 'team.delete.success',
    DELETE_FAILURE: 'team.delete.failure'
});

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name USER_EVENTS
* @module metricapp
* @description
* Defines events related to users management.
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

.constant('USER_EVENTS', {
    CREATE_SUCCESS: 'user.create.success',
    CREATE_FAILURE: 'user.create.failure',
    READ_SUCCESS:   'user.read.success',
    READ_FAILURE:   'user.read.failure',
    UPDATE_SUCCESS: 'user.update.success',
    UPDATE_FAILURE: 'user.update.failure',
    DELETE_SUCCESS: 'user.delete.success',
    DELETE_FAILURE: 'user.delete.failure'
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
* @ngdoc value
* @name DB_CONVERSATIONS
* @module metricapp
*
* @description
* Provides the simulation of the DB document `conversations`.
************************************************************************************/

var LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

angular.module('metricapp')

.value('DB_CONVERSATIONS', {

    'expert-gm': {

        'metricator-ag': {
            sender: 'expert-gm',
            recipient: 'metricator-ag',
            ts_update: new Date(2016, 1, 1, 13, 45, 0, 0),
            toread: 2,
            messages: [
                {ts_create: new Date(2016, 1, 1, 13, 0, 0, 0),  author: 'expert',         content: '0.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 13, 5, 0, 0),  author: 'metricator',     content: '1.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 13, 10, 0, 0), author: 'expert',         content: '2.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 13, 15, 0, 0), author: 'metricator',     content: '3.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 13, 20, 0, 0), author: 'expert',         content: '4.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 13, 25, 0, 0), author: 'metricator',     content: '5.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 13, 30, 0, 0), author: 'expert',         content: '6.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 13, 35, 0, 0), author: 'metricator',     content: '7.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 13, 40, 0, 0), author: 'metricator',     content: '8.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 13, 45, 0, 0), author: 'metricator',     content: '9.' + LIPSUM}
            ]
        },

        'questioner-mp': {
            sender: 'expert-gm',
            recipient: 'questioner-mp',
            ts_update: new Date(2016, 1, 1, 14, 45, 0, 0),
            toread: 3,
            messages: [
                {ts_create: new Date(2016, 1, 1, 14, 0, 0, 0),  author: 'expert',         content: '0.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 14, 5, 0, 0),  author: 'questioner',     content: '1.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 14, 10, 0, 0), author: 'expert',         content: '2.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 14, 15, 0, 0), author: 'questioner',     content: '3.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 14, 20, 0, 0), author: 'expert',         content: '4.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 14, 25, 0, 0), author: 'questioner',     content: '5.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 14, 30, 0, 0), author: 'expert',         content: '6.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 14, 35, 0, 0), author: 'questioner',     content: '7.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 14, 40, 0, 0), author: 'questioner',     content: '8.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 14, 45, 0, 0), author: 'questioner',     content: '9.' + LIPSUM}
            ]
        }

    } ,

    'metricator-ag': {

        'expert-gm': {
            sender: 'metricator-ag',
            recipient: 'expert-gm',
            ts_update: new Date(2016, 1, 1, 13, 45, 0, 0),
            toread: 0,
            messages: [
                {ts_create: new Date(2016, 1, 1, 13, 0, 0, 0),  author: 'expert',         content: '0.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 13, 5, 0, 0),  author: 'metricator',     content: '1.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 13, 10, 0, 0), author: 'expert',         content: '2.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 13, 15, 0, 0), author: 'metricator',     content: '3.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 13, 20, 0, 0), author: 'expert',         content: '4.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 13, 25, 0, 0), author: 'metricator',     content: '5.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 13, 30, 0, 0), author: 'expert',         content: '6.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 13, 35, 0, 0), author: 'metricator',     content: '7.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 13, 40, 0, 0), author: 'metricator',     content: '8.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 13, 45, 0, 0), author: 'metricator',     content: '9.' + LIPSUM}
            ]
        }

    },

    'questioner-mp': {

        'expert-gm': {
            sender: 'questioner-mp',
            recipient: 'expert-gm',
            ts_update: new Date(2016, 1, 1, 14, 45, 0, 0),
            toread: 0,
            messages: [
                {ts_create: new Date(2016, 1, 1, 14, 0, 0, 0),  author: 'expert',         content: '0.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 14, 5, 0, 0),  author: 'questioner',     content: '1.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 14, 10, 0, 0), author: 'expert',         content: '2.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 14, 15, 0, 0), author: 'questioner',     content: '3.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 14, 20, 0, 0), author: 'expert',         content: '4.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 14, 25, 0, 0), author: 'questioner',     content: '5.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 14, 30, 0, 0), author: 'expert',         content: '6.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 14, 35, 0, 0), author: 'questioner',     content: '7.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 14, 40, 0, 0), author: 'questioner',     content: '8.' + LIPSUM},
                {ts_create: new Date(2016, 1, 1, 14, 45, 0, 0), author: 'questioner',     content: '9.' + LIPSUM}
            ]
        }

    }
});

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_GRIDS
* @module metricapp
*
* @description
* Provides the simulation of the DB document `grids`.
************************************************************************************/

var LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

angular.module('metricapp')

.value('DB_GRIDS', {

    1: {
        id: 1,
        name: 'Grid-1',
        description: LIPSUM,
        expert: 'expert-gm',
        questioners: ['questioner-mp', 'questioner-dn'],
        metricators: ['metricator-ag', 'metricator-af'],
        ts_create: new Date(2016, 1, 15, 10, 10, 45, 500),
        ts_update: new Date(2016, 1, 21, 10, 40, 45, 500),
        mgoals: [101, 102, 103, 104],
        questions: [201, 202, 203, 204, 205, 206],
        metrics: [301, 302, 303, 304],
        graph: {
            101: [201, 202],
            102: [203, 204],
            103: [205],
            104: [206],
            201: [301],
            202: [301],
            203: [302],
            204: [303],
            205: [304]
        }
    },

    2: {
        id: 2,
        name: 'Grid-2',
        description: LIPSUM,
        expert: 'expert-mp',
        questioners: ['questioner-mp', 'questioner-dn'],
        metricators: ['metricator-ag', 'metricator-af'],
        ts_create: new Date(2016, 1, 16, 10, 10, 45, 500),
        ts_update: new Date(2016, 1, 22, 10, 40, 45, 500),
        mgoals: [105, 106, 107, 108],
        questions: [207, 208, 209, 210, 211, 212],
        metrics: [305, 306, 307, 308],
        graph: {
            105: [207, 208],
            106: [209, 210],
            107: [211],
            108: [212],
            207: [305],
            208: [305],
            209: [306],
            210: [307],
            211: [308]
        }
    }

});

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_METRICS
* @module metricapp
*
* @description
* Provides the simulation of the DB document `metrics`.
************************************************************************************/

var LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

angular.module('metricapp')

.value('DB_METRICS', {

    301: {
        id: 301,
        name: 'Metric-301',
        description: LIPSUM,
        grid: 1,
        expert: 'expert-gm',
        metricator: 'metricator-ag',
        status: 'METRIC_APPROVED',
        ts_create: new Date(2016, 1, 20, 10, 10, 45, 500),
        ts_update: new Date(2016, 1, 21, 10, 10, 45, 500)
    },

    302: {
        id: 302,
        name: 'Metric-302',
        description: LIPSUM,
        grid: 1,
        expert: 'expert-gm',
        metricator: 'metricator-ag',
        status: 'METRIC_RUNNING',
        ts_create: new Date(2016, 1, 20, 10, 20, 45, 500),
        ts_update: new Date(2016, 1, 21, 10, 20, 45, 500)
    },

    303: {
        id: 303,
        name: 'Metric-303',
        description: LIPSUM,
        grid: 1,
        expert: 'expert-gm',
        metricator: 'metricator-af',
        status: 'METRIC_RUNNING',
        ts_create: new Date(2016, 1, 20, 10, 30, 45, 500),
        ts_update: new Date(2016, 1, 21, 10, 30, 45, 500)
    },

    304: {
        id: 304,
        name: 'Metric-304',
        description: LIPSUM,
        grid: 1,
        expert: 'expert-gm',
        metricator: 'metricator-ag',
        status: 'METRIC_APPROVED',
        ts_create: new Date(2016, 1, 20, 10, 40, 45, 500),
        ts_update: new Date(2016, 1, 21, 10, 40, 45, 500)
    },

    305: {
        id: 305,
        name: 'Metric-305',
        description: LIPSUM,
        grid: 2,
        expert: 'expert-mp',
        metricator: 'metricator-ag',
        status: 'METRIC_APPROVED',
        ts_create: new Date(2016, 1, 21, 10, 10, 45, 500),
        ts_update: new Date(2016, 1, 22, 10, 10, 45, 500)
    },

    306: {
        id: 306,
        name: 'Metric-306',
        description: LIPSUM,
        grid: 2,
        expert: 'expert-mp',
        metricator: 'metricator-ag',
        status: 'METRIC_RUNNING',
        ts_create: new Date(2016, 1, 21, 10, 20, 45, 500),
        ts_update: new Date(2016, 1, 22, 10, 20, 45, 500)
    },

    307: {
        id: 307,
        name: 'Metric-307',
        description: LIPSUM,
        grid: 2,
        expert: 'expert-mp',
        metricator: 'metricator-af',
        status: 'METRIC_RUNNING',
        ts_create: new Date(2016, 1, 21, 10, 30, 45, 500),
        ts_update: new Date(2016, 1, 22, 10, 30, 45, 500)
    },

    308: {
        id: 308,
        name: 'Metric-308',
        description: LIPSUM,
        grid: 2,
        expert: 'expert-mp',
        metricator: 'metricator-ag',
        status: 'METRIC_APPROVED',
        ts_create: new Date(2016, 1, 21, 10, 40, 45, 500),
        ts_update: new Date(2016, 1, 22, 10, 40, 45, 500)
    }

});

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_MGOALS
* @module metricapp
*
* @description
* Provides the simulation of the DB document `mgoals`.
************************************************************************************/

var LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

angular.module('metricapp')

.value('DB_MGOALS', {

    101: {
        id: 101,
        name: 'MGoal-101',
        description: LIPSUM,
        expert: 'expert-gm',
        questioner: 'questioner-mp',
        metricator: 'metricator-ag',
        status: 'MGOAL_APPROVED',
        progress: 100,
        ts_create: new Date(2016, 1, 16, 10, 10, 45, 500),
        ts_update: new Date(2016, 1, 17, 10, 10, 45, 500)
    },

    102: {
        id: 102,
        name: 'MGoal-102',
        description: LIPSUM,
        expert: 'expert-gm',
        questioner: 'questioner-mp',
        metricator: 'metricator-af',
        status: 'MGOAL_RUNNING',
        progress: 75,
        ts_create: new Date(2016, 1, 16, 10, 20, 45, 500),
        ts_update: new Date(2016, 1, 17, 10, 20, 45, 500)
    },

    103: {
        id: 103,
        name: 'MGoal-103',
        description: LIPSUM,
        expert: 'expert-gm',
        questioner: 'questioner-dn',
        metricator: 'metricator-ag',
        status: 'MGOAL_RUNNING',
        progress: 50,
        ts_create: new Date(2016, 1, 16, 10, 30, 45, 500),
        ts_update: new Date(2016, 1, 17, 10, 30, 45, 500)
    },

    104: {
        id: 104,
        name: 'MGoal-104',
        description: LIPSUM,
        expert: 'expert-gm',
        questioner: 'questioner-dn',
        metricator: 'metricator-af',
        status: 'MGOAL_RUNNING',
        progress: 25,
        ts_create: new Date(2016, 1, 16, 10, 40, 45, 500),
        ts_update: new Date(2016, 1, 17, 10, 40, 45, 500)
    },

    105: {
        id: 105,
        name: 'MGoal-105',
        description: LIPSUM,
        expert: 'expert-mp',
        questioner: 'questioner-mp',
        metricator: 'metricator-ag',
        status: 'MGOAL_APPROVED',
        progress: 100,
        ts_create: new Date(2016, 1, 16, 10, 50, 45, 500),
        ts_update: new Date(2016, 1, 17, 10, 50, 45, 500)
    },

    106: {
        id: 106,
        name: 'MGoal-106',
        description: LIPSUM,
        expert: 'expert-mp',
        questioner: 'questioner-mp',
        metricator: 'metricator-af',
        status: 'MGOAL_RUNNING',
        progress: 75,
        ts_create: new Date(2016, 1, 16, 11, 0,  45, 500),
        ts_update: new Date(2016, 1, 17, 11, 0,  45, 500)
    },

    107: {
        id: 107,
        name: 'MGoal-107',
        description: LIPSUM,
        expert: 'expert-mp',
        questioner: 'questioner-dn',
        metricator: 'metricator-ag',
        status: 'MGOAL_RUNNING',
        progress: 50,
        ts_create: new Date(2016, 1, 16, 11, 10, 45, 500),
        ts_update: new Date(2016, 1, 17, 11, 10, 45, 500)
    },

    108: {
        id: 108,
        name: 'MGoal-108',
        description: LIPSUM,
        expert: 'expert-mp',
        questioner: 'questioner-dn',
        metricator: 'metricator-af',
        status: 'MGOAL_RUNNING',
        progress: 25,
        ts_create: new Date(2016, 1, 16, 11, 20, 45, 500),
        ts_update: new Date(2016, 1, 17, 11, 20, 45, 500)
    }

});

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_EVENTS
* @module metricapp
*
* @description
* Provides the simulation of the DB document `notifications`.
************************************************************************************/

var LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

angular.module('metricapp')

.value('DB_NOTIFICATIONS', {

    'expert-gm': {
        news: 4,
        notifications: [
            {
                id: 1,
                scope: 'grids',
                artifact_id: 1,
                name: 'Created new organizational goal',
                author:  'expert-gc',
                ts_create: new Date(2016, 1, 15, 13, 30, 45, 500),
                read: false
            },
            {
                id: 2,
                scope: 'mgoals',
                artifact_id: 101,
                name: 'Created new measurement goal',
                author:  'expert-gc',
                ts_create: new Date(2016, 1, 15, 14, 30, 45, 500),
                read: false
            },
            {
                id: 3,
                scope: 'questions',
                artifact_id: 201,
                name: 'Created new question',
                author:  'questioner-mp',
                ts_create: new Date(2016, 1, 15, 15, 30, 45, 500),
                read: false
            },
            {
                id: 4,
                scope: 'metrics',
                artifact_id: 301,
                name: 'Created new metric',
                author:  'metricator-ag',
                ts_create: new Date(2016, 1, 15, 16, 30, 45, 500),
                read: false
            }
        ]
    },

    'expert-mp': {
        news: 0,
        notifications: []
    },

    'expert-gc': {
        news: 0,
        notifications: []
    },

    'expert-mm': {
        news: 0,
        notifications: []
    },

    'metricator-ag': {
        news: 0,
        notifications: []
    },

    'metricator-af': {
        news: 0,
        notifications: []
    },

    'questioner-mp': {
        news: 0,
        notifications: []
    },

    'questioner-dn': {
        news: 0,
        notifications: []
    },

});

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_QUESTIONS
* @module metricapp
*
* @description
* Provides the simulation of the DB document `questions`.
************************************************************************************/

var LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

angular.module('metricapp')

.value('DB_QUESTIONS', {

    201: {
        id: 201,
        name: 'Question-201',
        description: LIPSUM,
        expert: 'expert-gm',
        grid: 1, // grd di appartenenza
        questioner: 'questioner-mp',
        ts_create: new Date(2016, 1, 18, 10, 10, 45, 500),
        ts_update: new Date(2016, 1, 19, 10, 10, 45, 500)
    },

    202: {
        id: 202,
        name: 'Question-202',
        description: LIPSUM,
        expert: 'expert-gm',
        questioner: 'questioner-mp',
        ts_create: new Date(2016, 1, 18, 10, 20, 45, 500),
        ts_update: new Date(2016, 1, 19, 10, 20, 45, 500)
    },

    203: {
        id: 203,
        name: 'Question-203',
        description: LIPSUM,
        expert: 'expert-gm',
        questioner: 'questioner-mp',
        ts_create: new Date(2016, 1, 18, 10, 30, 45, 500),
        ts_update: new Date(2016, 1, 19, 10, 30, 45, 500)
    },

    204: {
        id: 204,
        name: 'Question-204',
        description: LIPSUM,
        expert: 'expert-gm',
        questioner: 'questioner-mp',
        ts_create: new Date(2016, 1, 18, 10, 40, 45, 500),
        ts_update: new Date(2016, 1, 19, 10, 40, 45, 500)
    },

    205: {
        id: 205,
        name: 'Question-205',
        description: LIPSUM,
        expert: 'expert-gm',
        questioner: 'questioner-dn',
        ts_create: new Date(2016, 1, 18, 10, 50, 45, 500),
        ts_update: new Date(2016, 1, 19, 10, 50, 45, 500)
    },

    206: {
        id: 206,
        name: 'Question-206',
        description: LIPSUM,
        expert: 'expert-gm',
        questioner: 'questioner-dn',
        ts_create: new Date(2016, 1, 18, 11, 0,  45, 500),
        ts_update: new Date(2016, 1, 19, 11, 0,  45, 500)
    },

    207: {
        id: 207,
        name: 'Question-207',
        description: LIPSUM,
        grid: 2,
        expert: 'expert-mp',
        questioner: 'questioner-mp',
        ts_create: new Date(2016, 1, 19, 10, 10, 45, 500),
        ts_update: new Date(2016, 1, 20, 10, 10, 45, 500)
    },

    208: {
        id: 208,
        name: 'Question-208',
        description: LIPSUM,
        grid: 2,
        expert: 'expert-mp',
        questioner: 'questioner-mp',
        ts_create: new Date(2016, 1, 19, 10, 20, 45, 500),
        ts_update: new Date(2016, 1, 20, 10, 20, 45, 500)
    },

    209: {
        id: 209,
        name: 'Question-209',
        description: LIPSUM,
        grid: 2,
        expert: 'expert-mp',
        questioner: 'questioner-mp',
        ts_create: new Date(2016, 1, 19, 10, 30, 45, 500),
        ts_update: new Date(2016, 1, 20, 10, 30, 45, 500)
    },

    210: {
        id: 210,
        name: 'Question-210',
        description: LIPSUM,
        grid: 2,
        expert: 'expert-mp',
        questioner: 'questioner-mp',
        ts_create: new Date(2016, 1, 19, 10, 40, 45, 500),
        ts_update: new Date(2016, 1, 20, 10, 40, 45, 500)
    },

    211: {
        id: 211,
        name: 'Question-211',
        description: LIPSUM,
        grid: 2,
        expert: 'expert-mp',
        questioner: 'questioner-dn',
        ts_create: new Date(2016, 1, 19, 10, 50, 45, 500),
        ts_update: new Date(2016, 1, 20, 10, 50, 45, 500)
    },

    212: {
        id: 212,
        name: 'Question-212',
        description: LIPSUM,
        grid: 2,
        expert: 'expert-mp',
        questioner: 'questioner-dn',
        ts_create: new Date(2016, 1, 19, 11, 0,  45, 500),
        ts_update: new Date(2016, 1, 20, 11, 0,  45, 500)
    }

});

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_TEAMS
* @module metricapp
*
* @description
* Provides the simulation of the DB document `teams`.
************************************************************************************/

angular.module('metricapp')

.value('DB_TEAMS', {

    1: {
        id: 1,
        name: 'Team-Grid-1',
        expert: 'expert-gm',
        questioners: ['questioner-mp', 'questioner-dn'],
        metricators: ['metricator-ag', 'metricator-af'],
        ts_create: new Date(2016, 1, 15, 10, 10, 45, 500),
        ts_update: new Date(2016, 1, 15, 10, 10, 45, 500),
    },

    2: {
        id: 2,
        name: 'Team-Grid-2',
        expert: 'expert-mp',
        questioners: ['questioner-mp', 'questioner-dn'],
        metricators: ['metricator-ag', 'metricator-af'],
        ts_create: new Date(2016, 1, 16, 10, 10, 45, 500),
        ts_update: new Date(2016, 1, 16, 10, 10, 45, 500),
    }

});

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

.value('DB_USERS', {

    'expert-gm': {
        username:   'expert-gm',
        password:   'password',
        role:       'EXPERT',
        firstname:  'Giacomo',
        lastname:   'Marciani',
        gender:     'MALE',
        birthday:   new Date(1990,6, 27),
        email:      'giacomo.marciani@domain.com',
        mobile:     '+39 12345678',
        picture:    'uploads/users/expert-gm.svg',
        bio:  'MSc Student in Computer Science Engineering at University of Rome Tro Vergata.',
        online:     false
    },

    'expert-mp': {
        username:   'expert-mp',
        password:   'password',
        role:       'EXPERT',
        firstname:  'Michele',
        lastname:   'Porretta',
        gender:     'MALE',
        birthday:   new Date(1990,6, 27),
        email:      'michele.porretta@domain.com',
        mobile:     '+39 12345678',
        picture:    'uploads/users/expert-mp.svg',
        bio:  'MSc Student in Computer Science Engineering at University of Rome Tor Vergata.',
        online:     false
    },

    'expert-gc': {
        username:   'expert-gc',
        password:   'password',
        role:       'EXPERT',
        firstname:  'Giovanni',
        lastname:   'Cantone',
        gender:     'MALE',
        birthday:   new Date(1990,6, 27),
        email:      'giovanni.cantone@domain.com',
        mobile:     '+39 12345678',
        picture:    'uploads/users/expert-gc.svg',
        bio:  'Full Professor in Computer Science Engineering at University of Rome Tor Vergata.',
        online:     false
    },

    'expert-mm': {
        username:   'expert-mm',
        password:   'password',
        role:       'EXPERT',
        firstname:  'Manuel',
        lastname:   'Mastrofini',
        gender:     'MALE',
        birthday:   new Date(1990,6, 27),
        email:      'manuel.mastrofini@domain.com',
        mobile:     '+39 12345678',
        picture:    'uploads/users/expert-mm.svg',
        bio:  'Associate Professor in Computer Science Engineering at University of Rome Tor Vergata.',
        online:     false
    },

    'metricator': {
        username:   'metricator',
        password:   'password',
        role:       'METRICATOR',
        firstname:  'Andrea',
        lastname:   'Gennusa',
        gender:     'MALE',
        birthday:   new Date(1990,6, 27),
        email:      'andrea.gennusa@domain.com',
        mobile:     '+39 12345678',
        picture:    'uploads/users/metricator-ag.svg',
        bio:  'MSc Student in Computer Science Engineering at University of Rome Tor Vergata.',
        online:     false
    },

    'metricator-af': {
        username:   'metricator-af',
        password:   'password',
        role:       'METRICATOR',
        firstname:  'Alessandro',
        lastname:   'Fazio',
        gender:     'MALE',
        birthday:   new Date(1990,6, 27),
        email:      'alessandro.fazio@domain.com',
        mobile:     '+39 12345678',
        picture:    'uploads/users/metricator-af.svg',
        bio:  'MSc Student in Computer Science Engineering at University of Rome Tor Vergata.',
        online:     false
    },

    'questioner-mp': {
        username:   'questioner-mp',
        password:   'password',
        role:       'QUESTIONER',
        firstname:  'Marco',
        lastname:   'Piu',
        gender:     'MALE',
        birthday:   new Date(1990,6, 27),
        email:      'marco.piu@domain.com',
        mobile:     '+39 12345678',
        picture:    'uploads/users/questioner-mp.svg',
        bio:  'MSc Student in Computer Science Engineering at University of Rome Tor Vergata.',
        online:     false
    },

    'questioner-dn': {
        username:   'questioner-dn',
        password:   'password',
        role:       'QUESTIONER',
        firstname:  'Davide',
        lastname:   'Nanni',
        gender:     'MALE',
        birthday:   new Date(1990,6, 27),
        email:      'davide.nanni@domain.com',
        mobile:     '+39 12345678',
        picture:    'uploads/users/questioner-dn.svg',
        bio:  'MSc Student in Computer Science Engineering at University of Rome Tor Vergata.',
        online:     false
    }

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
        birthday:   '06/05/1993',
        email:      'andrea.gennusa@gmail.com',
        picture:    'uploads/profile-picture.png'
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

    // MAIN
    .when('/', {
        redirectTo: '/home'
    })
    .when('/home', {
        templateUrl: 'dist/views/home/home.view.html'
    })

    // AUTHENTICATION
    .when('/login', {
        templateUrl: 'dist/views/authentication/login.view.html'
    })
    .when('/signup', {
        templateUrl: 'dist/views/authentication/signup.view.html'
    })

    // USER
    .when('/profile', {
        templateUrl: 'dist/views/user/profile.view.html'
    })
    .when('/profile/:username', {
        templateUrl: 'dist/views/user/profile.view.html'
    })
    .when('/profile/:username/analytics', {
        templateUrl: 'dist/views/user/analytics.view.html'
    })

    // ORGANIZATION
    .when('/organization', {
        templateUrl: 'dist/views/organization/organization.view.html'
    })

    // MESSAGES
    .when('/messages', {
        templateUrl: 'dist/views/chat/messages.view.html'
    })
    .when('/messages/:username', {
        templateUrl: 'dist/views/chat/messages.view.html'
    })

    // NOTIFICATIONS
    .when('/notifications', {
        templateUrl: 'dist/views/notification/notifications.view.html'
    })

    // GRIDS
    .when('/grids', {
        templateUrl: 'dist/views/grid/grids.view.html'
    })
    .when('/grids/:gridid', {
        templateUrl: 'dist/views/grid/grid.view.html'
    })
    .when('/grids/:gridid/analytics', {
        templateUrl: 'dist/views/grid/analytics.view.html'
    })

    // TEAMS
    .when('/teams', {
        templateUrl: 'dist/views/team/teams.view.html'
    })
    .when('/teams/:teamid', {
        templateUrl: 'dist/views/team/team.view.html'
    })
    .when('/teams/:teamid/analytics', {
        templateUrl: 'dist/views/team/analytics.view.html'
    })

    // MIC'S VERSION OF GRID
    /*
    .when('/graph', {
        templateUrl: 'dist/views/graph/grids/graph.view.html'
    })
    .when('/grids', {
        templateUrl: 'dist/views/graph/grids/grids.view.html'
    })
    .when('/graph_draft', {
        templateUrl: 'dist/views/graph/draft/draft.view.html'
    })
    .when('/analytics', {
        templateUrl: 'dist/views/graph/analytics/analytics.view.html'
    })
    .when('/teams', {
        templateUrl: 'dist/views/teams/teams.view.html'
    })

    */

    // MEASUREMENT GOALS
    .when('/mgoals', {
        templateUrl: 'dist/views/mgoal/mgoals.view.html'
    })
    .when('/mgoals/:goalid', {
        templateUrl: 'dist/views/mgoal/mgoal.view.html'
    })

    // QUESTIONS
    .when('/questions', {
        templateUrl: 'dist/views/question/questions.view.html'
    })
    .when('/questions/:questionid', {
        templateUrl: 'dist/views/question/question.view.html'
    })

	// QUESTIONER
	.when('/questionCreation', {
        templateUrl: 'dist/views/questioner/questionerCreate/questionCreation.view.html'
    })
    .when('/questionSearch', {
        templateUrl: 'dist/views/questioner/questionerSearch/questionSearch.view.html'
    })
    .when('/questionUpdate', {
        templateUrl: 'dist/views/questioner/questionerUpdate/questionUpdate.view.html'
    })
    .when('/questionList', {
        templateUrl: 'dist/views/questioner/questionerList/questionList.view.html'
    })
    .when('/questions/:questionId', {
        templateUrl: 'dist/views/questioner/questionDetails.view.html'  
    })
    .when('/measurementGoalQuestionList', {
        templateUrl: 'dist/views/questioner/measurementGoal/measurementGoalQuestionsList.view.html'
    })
    .when('/measurementGoalAddExistingQuestion', {
        templateUrl: 'dist/views/questioner/measurementGoal/measurementGoalAddExistingQuestion.view.html'
    })
    .when('/questionerMeasurementGoalList', {
        templateUrl: 'dist/views/questioner/measurementGoal/measurementGoalList.view.html'
    })

    // METRICS
    .when('/metrics', {
        templateUrl: 'dist/views/metric/metrics.view.html'
    })
    .when('/metrics/:metricid', {
        templateUrl: 'dist/views/metric/metricpage.view.html'
    })
    
    //MEASUREMENT GOALS
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

    // ERRORS


    .when('/401', {
        templateUrl: 'dist/views/error/error401.view.html'
    })
    .when('/404', {
        templateUrl: 'dist/views/error/error404.view.html'
    })
    .when('/500', {
        templateUrl: 'dist/views/error/error500.view.html'
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
            	if (response.measurementGoals !== null || response.metrics !==null || response.questions !== null) {
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

(function() {'use strict';

/* Services */

/*
 http://docs.angularjs.org/api/ngResource.$resource

 Default ngResources are defined as

 'get':    {method:'GET'},
 'save':   {method:'POST'},
 'query':  {method:'GET', isArray:true},
 'remove': {method:'DELETE'},
 'delete': {method:'DELETE'}

 */

var services = angular.module('metricapp');

services.factory('QuestionsCrudFactory', ['$http', '$window', 'STATES', function($http, $window, STATES){
	var factory = {};
	
	factory.STATES = STATES;

	factory.create = function(question){
		//var questionJSON = JSON.stringify(question);			
		return $http.post("http://localhost:8080/question", question);
	};

	factory.update = function(question){
		return $http.put("http://localhost:8080/question?id=" + question.metadata.id, question);
	};

	factory.delete = function(questionId){
		return $http.delete("http://localhost:8080/question?id=" + questionId);
	};

	factory.getAll = function(){

		var config = {
			params: {
				id: "all"
			}
		};
		return $http.get("http://localhost:8080/question", config);
	};

	factory.getRecent = function(questioner){

		var config = {
			params: {
				questionerId: questioner,
				recent: "true"
			}
		};
		//$window.alert("Getting all questions in repository");
		return $http.get("http://localhost:8080/question", config);
	};

	factory.get = function(keyword, field){ 

		var url = "http://localhost:8080/question?" + field[0] + "=" + keyword[0]; 
		var i = 0;
		for (i=1; i<field.length; i++){
			url += + "&" + field[i] + "=" + keyword[i];
		}
		
		return $http.get(url);
	};

	factory.getInArray = function(questions){
         
         var i;
         var response = [];
         for(i=0; i<questions.length; i++){

         	factory.get([questions[i].metadata.id], ["id"]).then(
         		function(data){
         			response.push(data.data.questionList[0]);
         		},
         		function(data){
         			$window.alert("Error retrieving question " + questions[i].metadata.id);
         		}
     		);

         }

         return response;
    };

	factory.getMetrics = function(id){
		return $http.get("http://localhost:8080/metric?id=" + id);
	};

	factory.count = function(state, questioner){

		var config = {
			params: {
				userid: questioner,
				state: state
			}
		};

		return $http.get("http://localhost:8080/question/count", config);

	};

	factory.countMeasurementGoalsByQuestionerIdAndState = function(questionerId, state){
        var url = "http://localhost:8080/measurementgoal/count?questionerId=" + questionerId + "&state=" + state;
        return $http.get(url);
    }

	return factory;
}]);
})();
(function() {'use strict';


var services = angular.module('metricapp');


services.factory('QuestionStorageFactory', ['$window', function($window){
	var factory = {};
	var savedQuestion = {};
	var savedQuestioner = {};
	var savedMetric = {};
	var savedMG = {};

	factory.setQuestioner = function(questioner){
		savedQuestioner = questioner;
	};

	factory.getQuestioner = function(){
		return savedQuestioner;
	};

	factory.setQuestion = function(question){
		savedQuestion = question;
	};

	factory.getQuestion = function(){
		return savedQuestion;
	};

	factory.getMeasurementGoal = function(){
		return savedMG;
	};

	factory.setMeasurementGoal = function(MG){
		savedMG = MG;
	};

	factory.setMetric = function(metric){
		savedMetric = metric;
	};

	factory.getMetric = function(metric){
		return savedMetric;
	};

	return factory;

}]);
})();
(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name ActionService
* @module metricapp
* @requires USER_ACTIONS
* @requires EXPERT_ACTIONS
* @requires METRICATOR_ACTIONS
* @requires QUESTIONER_ACTIONS
*
* @description
* Provides actions reference according to user roles.
************************************************************************************/

angular.module('metricapp')

.service('ActionService', ActionService);

ActionService.$inject = ['USER_ACTIONS', 'EXPERT_ACTIONS', 'METRICATOR_ACTIONS', 'QUESTIONER_ACTIONS'];

function ActionService(USER_ACTIONS, EXPERT_ACTIONS, METRICATOR_ACTIONS, QUESTIONER_ACTIONS) {

    var service = this;

    service.ACTIONS = {
        USER: USER_ACTIONS,
        EXPERT: EXPERT_ACTIONS,
        METRICATOR: METRICATOR_ACTIONS,
        QUESTIONER: QUESTIONER_ACTIONS
    };

    service.getActionsForRole = getActionsForRole;

    function getActionsForRole(role) {
        var userActions = service.ACTIONS.USER;
        var roleActions = service.ACTIONS[role];
        var actions = userActions.concat(roleActions);
        return actions;
    }

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
* @requires REST_SERVICE
* @requires ROLES
*
* @description
* Provides authentication services.
************************************************************************************/

angular.module('metricapp')

.service('AuthService', AuthService);

AuthService.$inject = ['$http', '$rootScope', '$cookies', '$q', 'REST_SERVICE', 'ROLES', 'DB_USERS'];

function AuthService($http, $rootScope, $cookies, $q, REST_SERVICE, ROLES, DB_USERS) {

    var service = this;

    service.ROLES = ROLES;

    service.login = login;
    service.logout = logout;
    service.getUser = getUser;
    service.setUser = setUser;
    service.clearUser = clearUser;
    service.getUsername = getUsername;
    service.isLogged = isLogged;

    service.editPassword = editPassword;

    /********************************************************************************
    * @ngdoc method
    * @name login
    * @description
    * Autheticates with the specified credentials.
    * @param {Credentials} credentials The user credentials.
    * @returns {User|Error} On success, the authuser;
    * an error message, otherwise.
    ***************************************************************************/
    function login(credentials) {
        var username = credentials.username;
        var password = credentials.password;
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var USER = DB_USERS[username];
                if (USER) {
                    if (USER.password === password) {
                        USER.online = true;
                        resolve({authuser: USER});
                    } else {
                        reject({errmsg: 'Wrong password for: ' + username});
                    }
                } else {
                    reject({errmsg: 'Wrong username for: ' + username});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name logout
    * @description
    * Deautheticates user with the specified credentials.
    * @param {Credentials} credentials The user credentials.
    * @returns {} Insert description here.
    ********************************************************************************/
    function logout() {
        var username = $cookies.getObject('globals').user.username;
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var USER = DB_USERS[username];
                if (USER) {
                    USER.online = false;
                    clearUser();
                    resolve({username: username});
                } else {
                    reject({errmsg: 'Wrong username for: ' + username});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getUser
    * @description
    * Retrieves user stored into the cookie.
    * @returns {User} THe authuser stored into the cookie.
    ********************************************************************************/
    function getUser() {
        var globals = $cookies.getObject('globals');
        if (globals) {
            var user = globals.user;
            if (user) {
                return user;
            }
        }
        return null;
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
        var authdata = authuser.username + ':' + authuser.password + ':' + authuser.role;

        $rootScope.globals = {
            user: {}
        };
        $rootScope.globals.user = angular.copy(authuser);
        $rootScope.globals.user.authdata = authdata;



        $cookies.putObject('globals', $rootScope.globals);

        $http.defaults.headers.common.Authorization = 'Basic ' + authdata;
    }

    /********************************************************************************
    * @ngdoc method
    * @name clearUser
    * @description
    * Removes the user stored ito the cookie.
    ********************************************************************************/
    function clearUser() {
        $rootScope.globals = {};
        $cookies.remove('globals');
        $http.defaults.headers.common.Authorization = 'Basic';
    }

    /********************************************************************************
    * @ngdoc method
    * @name getUsername
    * @description
    * Retrieves the username of authuser, stored into the cookie.
    * @returns {String} The username of the authuser, if exists;
    * null, otherwise.
    ********************************************************************************/
    function getUsername() {
        var globals = $cookies.getObject('globals');
        if (globals) {
            var user = globals.user;
            if (user) {
                return user.username;
            }
        }
        return null;
    }

    /********************************************************************************
    * @ngdoc method
    * @name isLogged
    * @description
    * Check if the user is logged.
    * @returns {Boolean} True, if the user is logged;
    * false, otherwise.
    ********************************************************************************/
    function isLogged() {
        var globals = $cookies.getObject('globals');
        if (globals) {
            var user = globals.user;
            if (user) {
                return true;
            }
        }
        return false;
    }

    /********************************************************************************
    * @ngdoc method
    * @name editPassword
    * @description
    * Changes the password for authuser and deauthenticates it.
    * @param {String} oldPassword The user old password.
    * @param {String} newPassword The user new password.
    * @returns {String|Error} On success, the username for the authuser and a success
    * message;
    * an error message, otherwise.
    ********************************************************************************/
    function editPassword(oldPassword, newPassword) {
        var username = $cookies.getObject('globals').user.username;
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var USER = DB_USERS[username];
                if (USER) {
                    if (USER.password === oldPassword) {
                        USER.password = newPassword;
                        // other deauthentication actions.
                        resolve({username: username, msg:'Successfully changed password for user ' + username});
                    } else {
                        reject({errmsg: 'Wrong old password for user ' + username});
                    }
                    USER.online = false;
                    resolve({username: username});
                } else {
                    reject({errmsg: 'User ' + username + ' not found'});
                }
            }, 500);
        });
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

(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name GridService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
* @requires AuthService
*
* @description
* Provides grids management services.
************************************************************************************/

angular.module('metricapp')

.service('GridService', GridService);

GridService.$inject = ['$http', '$q', 'REST_SERVICE', 'AuthService', 'DB_GRIDS'];

function GridService($http, $q, REST_SERVICE, AuthService, DB_GRIDS) {

    var service = this;

    service.getAll = getAll;
    service.getById = getById;

    service.create = create;
    service.update = update;

    function _getNextId() {
        var lastId = Object.keys(DB_GRIDS).reduce(function(a, b) {
            return DB_GRIDS[a] > DB_GRIDS[b] ? a : b;
        });
        return lastId + 1;
    }

    /********************************************************************************
    * @ngdoc method
    * @name getAll
    * @description
    * Retrieves all the grids for authuser.
    * @returns {[Grid]|Error} On success, the grids for authuser;
    * an error message, otherwise.
    ********************************************************************************/
    function getAll() {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var username = AuthService.getUsername();
                if (username) {
                    var grids = [];
                    for (var gridid in DB_GRIDS) {
                        var GRID = DB_GRIDS[gridid];
                        if (GRID.expert === username) {
                            // start computes progress
                            var progress = Math.floor((Math.random() * 100) + 0);
                            // end compute progress
                            GRID.progress = progress;
                            grids.push(GRID);
                        }
                    }
                    resolve({grids: grids});
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
    * Retrieves the specified grid for authuser.
    * @param {Int} gridid The id of the grid to retrieve.
    * @returns {Grid|Error} On success, the specified grid;
    * an error message, otherwise.
    ********************************************************************************/
    function getById(gridid) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var username = AuthService.getUsername();
                if (username) {
                    var GRID = DB_GRIDS[gridid];
                    if (GRID) {
                        if (GRID.expert === username) {
                            // start computes progress
                            var progress = Math.floor((Math.random() * 100) + 0);
                            // end compute progress
                            GRID.progress = progress;
                            resolve({grid: GRID});
                        } else {
                            reject({errmsg: 'Grid ' + gridid + ' not readable for user ' + username});
                        }
                    } else {
                        reject({errmsg: 'Grid ' + gridid + ' not found'});
                    }
                } else {
                    reject({errmsg: 'User not logged'});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name create
    * @description
    * Creates a new grid.
    * @param {Grid} grid The grid to create.
    * @returns {Int|Error} On success, the gridid of the successfully created grid
    * and a success message;
    * an error message, otherwise.
    ********************************************************************************/
    function create(grid) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var gridid = _getNextId();
                grid.id = gridid;
                grid.ts_create = Date.now();
                grid.ts_update = Date.now();
                DB_GRIDS[gridid] = angular.copy(grid);
                resolve({gridid: gridid, msg: 'Thank you for creating grid ' + gridid});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name update
    * @description
    * Updates the grid with the specified grid attributes.
    * @param {GridAttrs} gridAttrs The grid attributes to update.
    * @returns {JSON} Insert description here.
    ********************************************************************************/
    function update(gridAttrs) {
        return $q(function(resolve, reject) {
            var gridid = userAttrs.gridid;
            setTimeout(function() {
                var GRID = DB_GRIDS[gridid];
                if (GRID) {
                    for (var attr in gridAttrs) {
                        GRID[attr] = angular.copy(gridAttrs[attr]);
                    }
                    // start computes progress
                    var progress = Math.floor((Math.random() * 100) + 0);
                    // end compute progress
                    GRID.progress = progress;
                    resolve({grid: GRID});
                } else {
                    reject({errmsg: 'Grid ' + gridid + ' not found'});
                }
            }, 500);
        });
    }

}

})();

/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 16:21:06
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-17 17:45:26
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
    service.getMeasurementGoalsByState = getMeasurementGoalsByState;
    service.getMeasurementGoalsBy = getMeasurementGoalsBy;
    service.getMyMeasurementGoals = getMyMeasurementGoals;
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
    * @name getMeasurementGoalsByState
    * @description
    * Get measurement goals by state.
    ********************************************************************************/
    function getMeasurementGoalsByState(state) {
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
    * @name getMyMeasurementGoals
    * @description
    * Get measurement goals by user.
    ********************************************************************************/
    function getMyMeasurementGoals() {
        console.log('GET Measurement Goals with userid='+AuthService.getUser().username);

        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/measurementgoal?userid='+AuthService.getUser().username).then(
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
                    if (toCheck[j].id == item.metadata.id) return false;    
                }
                else{
                    if (toCheck[j].metadata.id == item.metadata.id) return false;                            
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
*
* @description
* Provides authentication services.
************************************************************************************/

angular.module('metricapp')

.service('MessageService', MessageService);

MessageService.$inject = ['$http', '$q', '$cookies', '$filter', 'REST_SERVICE', 'AuthService', 'DB_CONVERSATIONS'];

function MessageService($http, $q, $cookies, $filter, REST_SERVICE, AuthService, DB_CONVERSATIONS) {

    var service = this;

    service.getAll = getAll;
    service.getById = getById;
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
            var authusername = AuthService.getUsername();
            if (!authusername) {
                reject({errmsg: 'User not logged'});
            }
            setTimeout(function() {
                var conversations = [];
                var toread = 0;
                var INBOX = DB_CONVERSATIONS[authusername];
                if (INBOX) {
                    for (var recipient in INBOX) {
                        var CONVERSATION = INBOX[recipient];
                        conversations.push(CONVERSATION);
                        toread += CONVERSATION.toread;
                    }
                    resolve({conversations: conversations, toread: toread});
                } else {
                    reject({errmsg: 'Conversations not found for user ' + authusername});
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
        return $q(function(resolve,reject) {
            var authusername = AuthService.getUsername();
            if (!authusername) {
                reject({errmsg: 'User not logged'});
            }
            setTimeout(function() {
                var INBOX = DB_CONVERSATIONS[authusername];
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
                        reject({errmsg: 'Conversation not found for user ' + authusername + ' with recipient ' + recipient});
                    }
                } else {
                    reject({errmsg: 'Conversations not found for user ' + authusername});
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
    function getNFrom(cnvStart, cnvN) {
        return $q(function(resolve, reject) {
            var authusername = AuthService.getUsername();
            if (!authusername) {
                reject({errmsg: 'User not logged'});
            }
            setTimeout(function() {
                var INBOX = DB_CONVERSATIONS[authusername];
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
                    reject({errmsg: 'Conversations not found for user ' + authusername});
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
            var authusername = AuthService.getUsername();
            if (!authusername) {
                reject({errmsg: 'User not logged'});
            }
            setTimeout(function() {
                var INBOX = DB_CONVERSATIONS[authusername];
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
                    reject({errmsg: 'Conversations not found for user ' + authusername});
                }
            }, 500);
        });
    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name MetricService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
* @requires AuthService
*
* @description
* Provides metric management services.
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
MetricService.$inject = ['$http', '$q', 'REST_SERVICE', 'AuthService', 'DB_METRICS', '$window', 'FlashService'];
             
//function MetricatorService($http, $rootScope, $cookies, $window) {
//=======
//function MetricatorService($http, $rootScope, $cookies, $window) {
function MetricService($http,  $q, REST_SERVICE, AuthService, DB_METRICS,$window,FlashService) {

    var service = this;
    service.getAll =getAll;
    service.getById =getById;
    service.update=update;
    service.changeState=changeState;
    service.create=create;
    service.getAllMine=getAllMine;
    service.getByUser=getByUser;
    service.getAllApproved=getAllApproved;
    service.getByStateAndUser=getByStateAndUser;
    service.getMineByState=getMineByState;
    service.getByState=getByState;
    //service.getMetrics = getMetrics;
    //service.getApprovedMetrics = getApprovedMetrics;
    //service.getMetricsById = getMetricsById;
    service.countMetricsByState = countMetricsByState;
    service.storeMetric = storeMetric;
    service.storeExternalMetric = storeExternalMetric;
    service.getMetricDialog = getMetricDialog;
    service.getExternalMetricDialog = getExternalMetricDialog;

    service.metricDialog = {};
    service.externalMetricDialog = [];


/********************************************************************************
* @ngdoc method
* @name getAll
* @description
* Retrieves all the metrics.
* @returns {[Metric]|Error} On success, the metrics;
* an error message, otherwise.
********************************************************************************/
function getAll() {

          return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric').then(
               function(response) {
                   var message = angular.fromJson(response.data);
                   console.log('SUCCESS GET ALL METRICS');
                   return message;
               },
               function(response) {
                   var message = angular.fromJson(response.data);
                   console.log('FAILURE GET ALL METRICS');
                   FlashService.danger('Error in retrieving Metrics');
                   return message;
               }
           );


}
/********************************************************************************
* @ngdoc method
* @name getAll
* @description
* Retrieves all the metrics.
* @returns {[Metric]|Error} On success, the metrics;
* an error message, otherwise.
********************************************************************************/
function getAllApproved() {
          return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric?bus=true').then(
               function(response) {
                   var message = angular.fromJson(response.data);
                   console.log('SUCCESS GET METRICS');
                   console.log(message);
                   return message;
               },
               function(response) {
                   var message = angular.fromJson(response.data);
                   console.log('FAILURE GET METRICS');
                   FlashService.danger('Error in retrieving Metrics');
                   return message;
               }
           );
    }



/********************************************************************************
* @ngdoc method
* @name getInArray
* @description
* Retrieves the specified metrics.
* @param {[String]} metricids Usernames of metrics to retrieve.
* @returns {{metricid:Metric}|Error} On success, the list of metrics;
* an error message, otherwise.
********************************************************************************/
function getInArray(metricids) {
    return $q(function(resolve, reject) {
        setTimeout(function() {
            var metrics = {};
            metricids.forEach(function(metricid) {
                var METRIC = DB_METRICS[metricid];
                if (METRIC) {
                    metrics[metricid] = METRIC;
                }
            });
            resolve({metrics: metrics});
        }, 500);
    });}
//giacomo fine

    function update(metric){
      return $http.put('http://qips.sweng.uniroma2.it/metricapp-server/metric/', metric).then(
          function(response) {
               //var message = "Success!, id: "+ angular.fromJson(response.data).measurementGoals[0].metadata.id;
               console.log('SUCCESS PUT metric');
               var message = response.data;
               FlashService.success('Metric updated: '+message.metricsDTO[0].name);
               return message;
          },
          function(response) {
               var message = response.data;
               console.log('FAILURE PUT metric');
               FlashService.danger('Error in updating Metric');
               return message;
          }
     );
   }

   function changeState(metric){
     return $http.put('http://qips.sweng.uniroma2.it/metricapp-server/metric?onlychangestate=true', metric).then(
         function(response) {
              //var message = "Success!, id: "+ angular.fromJson(response.data).measurementGoals[0].metadata.id;
              console.log('SUCCESS PUT metric');
              var message = response.data;
              FlashService.success('Metric updated');
              return message;
         },
         function(response) {
              var message = response.data;
              console.log('FAILURE PUT metric');
              FlashService.danger('Error in updating Metric');
              return message;
         }
    );
  }


   function create(){
      var metric = {description:null, hasMax:false, hasMin:false, hasUserDefinedList:false,isOrdered:false,max:0,metadata:{creationDate:null,creatorId:AuthService.getUser().username,entityType:'Metric',id:null,lastVersionDate:null,releaseNote:null,state:'Created',tags:[],version:'0',versionBus:null},metricatorId:AuthService.getUser().username,min:0,name:null,scaleType:'ordinalScale',set:'integers',unit:null,userDefinedList:[]};
     return $http.post('http://qips.sweng.uniroma2.it/metricapp-server/metric/', metric).then(
         function(response) {
              //var message = "Success!, id: "+ angular.fromJson(response.data).measurementGoals[0].metadata.id;
              console.log('SUCCESS POST metric');
              var message = response.data;
              mmetric = message.metricsDTO[0];
              FlashService.success('Metric created!');
              return message;
         },
         function(response) {
              var message = response.data;
              console.log('FAILURE POST metric');
              FlashService.danger('Error in creating Metrics');
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
    function getAllMine() {
        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric?userid='+AuthService.getUser().username).then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET METRICS');
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET METRICS');
                FlashService.danger('Error in retrieving Metrics');
                return message;
            }
        );

    }


    function getById(id) {

        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric?id='+id).then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET METRIC');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET METRIC');
                console.log(message);
                FlashService.danger('Error in retrieving Metrics');
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

        function getByUser(username) {

            return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric?userid='+username).then(
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
                    FlashService.danger('Error in retrieving Metrics');
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
    * Get Metric by id
    ********************************************************************************/
    function getById(metricId) {
        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric?id='+metricId).then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET METRIC BY ID');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET METRICS BY ID');
                console.log(message);
                FlashService.danger('Error in retrieving Metrics');
                return message;
            }
        );

    }

    /********************************************************************************
    * @ngdoc method
    * @name getNFrom
    * @description
    * Retrieves the specified metrics.
    * @param {Int} mtrStart First metric index.
    * @param {Int} mtrN Number of metrics.
    * @returns {[Metric]|Error} On success, the list of metrics;
    * an error message, otherwise.
    ********************************************************************************/
    function getNFrom(mtrStart, mtrN) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var metrics = [];
                var nummetrics =  Object.keys(DB_METRICS).length;
                var end = (mtrN === -1) ? nummetrics : Math.min(mtrStart + mtrN, nummetrics);
                for (var i = mtrStart; i < end; i++ ) {
                    metrics.push(DB_METRICS[i]);
                }
                resolve({metrics: metrics, nummetrics: nummetrics});
            }, 500);
        });
    }

    function getByStateAndUser(state,user) {
        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric?userid='+user+'&state='+state).then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET METRICS BY State and User VERSION');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET METRICS');
                console.log(message);
                FlashService.danger('Error in retrieving Metrics');
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
    * @name getByState
    * @description
    * Get Metrics by state.
    ********************************************************************************/
    function getByState(state) {
        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric?state='+state).then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET METRICS BY State and User VERSION');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET METRICS');
                console.log(message);
                FlashService.danger('Error in retrieving Metrics');
                return message;
            }
        );

    }

    function getMineByState(state) {
        return $http.get('http://qips.sweng.uniroma2.it/metricapp-server/metric?userid='+AuthService.getUser().username+'&state='+state).then(
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('SUCCESS GET METRICS BY State and User VERSION');
                console.log(message);
                return message;
            },
            function(response) {
                var message = angular.fromJson(response.data);
                console.log('FAILURE GET METRICS');
                console.log(message);
                FlashService.danger('Error in retrieving Metrics');
                return message;
            }
        );
    }
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name MGoalService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
* @requires AuthService
*
* @description
* Provides measurement goal management services.
************************************************************************************/

angular.module('metricapp')

.service('MGoalService', MGoalService);

MGoalService.$inject = ['$http', '$q', 'REST_SERVICE', 'AuthService', 'DB_MGOALS'];

function MGoalService($http, $q, REST_SERVICE, AuthService, DB_MGOALS) {

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
    * Retrieves all the mgoals.
    * @returns {[MGoal]|Error} On success, the measurement goals;
    * an error message, otherwise.
    ********************************************************************************/
    function getAll() {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var mgoals = [];
                for (var mgoal in DB_MGOALS) {
                    mgoals.push(DB_MGOALS[mgoal]);
                }
                resolve({mgoals: mgoals});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getById
    * @description
    * Retrieves the specified mgoal.
    * @param {String} goalid The goalid of the mgoal to retrieve.
    * @returns {MGoal|Error} On success, the mgoal;
    * an error message, otherwise.
    ********************************************************************************/
    function getById(goalid) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var MGOAL = DB_MGOALS[goalid];
                if (MGOAL) {
                    resolve({mgoal: MGOAL});
                } else {
                    reject({errmsg: 'MGoal ' + goalid + ' not found'});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getInArray
    * @description
    * Retrieves the specified mgoals.
    * @param {[String]} goalids Usernames of mgoals to retrieve.
    * @returns {{goalid:MGoal}|Error} On success, the list of mgoals;
    * an error message, otherwise.
    ********************************************************************************/
    function getInArray(goalids) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var mgoals = {};
                goalids.forEach(function(goalid) {
                    var MGOAL = DB_MGOALS[goalid];
                    if (MGOAL) {
                        mgoals[goalid] = MGOAL;
                    }
                });
                resolve({mgoals: mgoals});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getNFrom
    * @description
    * Retrieves the specified mgoals.
    * @param {Int} mglStart First mgoal index.
    * @param {Int} mglN Number of mgoals.
    * @returns {[MGoal]|Error} On success, the list of mgoals;
    * an error message, otherwise.
    ********************************************************************************/
    function getNFrom(mglStart, mglN) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var mgoals = [];
                var nummgoals =  Object.keys(DB_MGOALS).length;
                var end = (mglN === -1) ? nummgoals : Math.min(mglStart + mglN, nummgoals);
                for (var i = mglStart; i < end; i++ ) {
                    mgoals.push(DB_MGOALS[i]);
                }
                resolve({mgoals: mgoals, nummgoals: nummgoals});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name create
    * @description
    * Creates a new mgoal.
    * @param {MGoal} mgoal The mgoal to create.
    * @returns {JSON|Error} On success, the goalid of the successfully created mgoal
    * and a success message;
    * an error message, otherwise.
    ********************************************************************************/
    function create(mgoal) {
        return $q(function(resolve, reject) {
            var goalid = mgoal.goalid;
            setTimeout(function() {
                if (DB_MGOALS[goalid]) {
                    reject({errmsg: 'MGoal ' + goalid + ' already registered'});
                } else {
                    DB_MGOALS[goalid] = angular.copy(mgoal);
                    resolve({goalid: goalid, msg: 'Thank you for creating ' + goalid});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name update
    * @description
    * Updates the mgoal
    * @param {MGoal} mgoalAttrs The mgoal attributes to update.
    * @returns {JSON} Insert description here.
    ********************************************************************************/
    function update(mgoalAttrs) {
        return $q(function(resolve, reject) {
            var goalid = mgoalAttrs.goalid;
            setTimeout(function() {
                var MGOAL = DB_MGOALS[goalid];
                if (MGOAL) {
                    for (var attr in mgoalAttrs) {
                        MGOAL[attr] = angular.copy(mgoalAttrs[attr]);
                    }
                    resolve({mgoal: MGOAL});
                } else {
                    reject({errmsg: 'MGoal ' + goalid + ' not found'});
                }
            }, 500);
        });
    }

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
* @name NotificationService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
* @requires AuthService
*
* @description
* Provides notifications management services.
************************************************************************************/

angular.module('metricapp')

.service('NotificationService', NotificationService);

NotificationService.$inject = ['$http', '$q', 'REST_SERVICE', 'AuthService', 'DB_NOTIFICATIONS'];

function NotificationService($http, $q, REST_SERVICE, AuthService, DB_NOTIFICATIONS) {

    var service = this;

    service.getAll = getAll;
    service.getById = getById;
    service.getNFrom = getNFrom;

    service.setReadById = setReadById;
    service.setAllRead = setAllRead;

    /********************************************************************************
    * @ngdoc method
    * @name getAll
    * @description
    * Retrieves all the notifications for authuser;
    * @returns {[Notification]|Error} On success, the notifications;
    * an error message, otherwise.
    ********************************************************************************/
    function getAll() {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var authusername = AuthService.getUsername();
                if (authusername) {
                    var INBOX = DB_NOTIFICATIONS[authusername];
                    if (INBOX) {
                        var NOTIFICATIONS = INBOX.notifications;
                        var NEWS = INBOX.news;
                        var toread = 0;
                        NOTIFICATIONS.forEach(function(NOTIFICATION) {
                            if (!NOTIFICATION.read) {
                                toread++;
                            }
                        });
                        resolve({notifications: NOTIFICATIONS, news: NEWS, toread: toread});
                    } else {
                        reject({errmsg: 'Notifications not found for user ' + authusername});
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
    * Retrieves the specified notification for authuser.
    * @param {Int} notificationid The id of the notification to retrieve
    * @returns {Notification|Error} On success, the specified notification;
    * an error message, otherwise.
    ********************************************************************************/
    function getById(notificationid) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var authusername = AuthService.getUsername();
                if (authusername) {
                    var INBOX = DB_NOTIFICATIONS[authusername];
                    if (INBOX) {
                        var NOTIFICATIONS = INBOX.notifications;
                        var NEWS = INBOX.news;
                        NOTIFICATIONS.forEach(function(NOTIFICATION) {
                            if (NOTIFICATION.id === notificationid) {
                                resolve({notification: NOTIFICATION, new: NEWS});
                                return;
                            }
                        });
                        reject({errmsg: 'Notification ' + notificationid + ' not found for user ' + authusername});
                    } else {
                        reject({errmsg: 'Notifications not found for user ' + authusername});
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
    * Retrieves the specified notifications for authuser.
    * @param {Int} ntfStart First notification index.
    * @param {Int} ntfN Number of notifications.
    * @returns {[Notification]|Error} On success, the notifications for authuser;
    * an error message, otherwise.
    ***************************************************************************/
    function getNFrom(ntfStart, ntfN) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var authusername = AuthService.getUsername();
                if (authusername) {
                    var INBOX = DB_NOTIFICATIONS[authusername];
                    if (INBOX) {
                        var news = INBOX.news;
                        var NOTIFICATIONS = INBOX.notifications;
                        var notifications = [];
                        var toread = 0;
                        var end = (ntfN === -1) ? NOTIFICATIONS.length : Math.min(ntfStart + ntfN, NOTIFICATIONS.length);
                        for (var i = ntfStart; i < end; i++) {
                          notifications.push(NOTIFICATIONS[i]);
                          if (!NOTIFICATIONS[i].read) {
                              toread++;
                          }
                        }
                        resolve({notifications: notifications, news: news, toread: toread});
                    } else {
                        reject({errmsg: 'Notifications not found for user ' + authusername});
                    }
                } else {
                    reject({errmsg: 'User not logged'});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name setReadById
    * @description
    * Set as read the specified notification.
    * @param {Int} notificationid The id of the notification to set read.
    * @returns {Boolean|Error} On success, a messagen;
    * an error message, otherwise.
    ********************************************************************************/
    function setReadById(notificationid) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var authusername = AuthService.getUsername();
                if (authusername) {
                    var INBOX = DB_NOTIFICATIONS[authusername];
                    if (INBOX) {
                        var NOTIFICATIONS = INBOX.notifications;
                        var i = NOTIFICATIONS.indexOf(function(NOTIFICATION) {
                            return NOTIFICATION.id === notificationid;
                        });
                        if (i >= 0) {
                            NOTIFICATIONS[i].read = true;
                            resolve({msg: 'Notification ' + notificationid + ' marked as read'});
                        } else {
                            reject({errmsg: 'Notification ' + notificationid + ' not found for user ' + authusername});
                        }
                    } else {
                        reject({errmsg: 'Notifications not found for user ' + authusername});
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
    * Set as read all the ontifications for authuser.
    * @returns {Boolean|Error} On success, a message;
    * an error message, otherwise.
    ********************************************************************************/
    function setAllRead() {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var authusername = AuthService.getUsername();
                if (authusername) {
                    var INBOX = DB_NOTIFICATIONS[authusername];
                    if (INBOX) {
                        var NOTIFICATIONS = INBOX.notifications;
                        NOTIFICATIONS.forEach(function(NOTIFICATION) {
                            NOTIFICATION.read = true;
                        });
                        resolve({msg: 'All notifications marked as read'});
                    } else {
                        reject({errmsg: 'Notifications not found for user ' + authusername});
                    }
                } else {
                    reject({errmsg: 'User not logged'});
                }
            }, 500);
        });
    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name QuestionService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
* @requires AuthService
*
* @description
* Provides question management services.
************************************************************************************/

angular.module('metricapp')

.service('QuestionService', QuestionService);

QuestionService.$inject = ['$http', '$q', 'REST_SERVICE', 'AuthService', 'DB_QUESTIONS'];

function QuestionService($http, $q, REST_SERVICE, AuthService, DB_QUESTIONS) {

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
                        QUESTION[attr] = angular.copy(questionAttrs[attr]);
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

(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name TeamAnalyticsService
* @module metricapp
* @requires $http
* @requires $cookies
* @requires REST_SERVICE
* @requires TEAM_ANALYTICS
*
* @description
* Realizes the team analytics DAO.
************************************************************************************/

angular.module('metricapp')

.service('TeamAnalyticsService', TeamAnalyticsService);

TeamAnalyticsService.$inject = ['$http', '$q', '$cookies', 'REST_SERVICE', 'TEAM_ANALYTICS', 'DB_TEAMS'];

function TeamAnalyticsService($http, $q, $cookies, REST_SERVICE, TEAM_ANALYTICS, DB_TEAMS) {

    var service = this;

    service.getAll = getAll;

    /********************************************************************************
    * @ngdoc method
    * @name getAll
    * @description
    * Retrieves all the analytics for the specified team.
    * @param {Int} teamid The id of the team whose analytics to retrieve.
    * @returns {Analytics|Error} On success, the team analytics;
    * an error message, otherwise.
    ********************************************************************************/
    function getAll(teamid) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var TEAM = DB_TEAMS[teamid];
                if (TEAM) {
                    var analytics = {};
                    // start compute analytics
                    var gqmScore = Math.floor((Math.random() * 100) + 0);
                    var gridsTot = Math.floor((Math.random() * 100) + 0);
                    var artifactsTot = Math.floor((Math.random() * 100) + 0);
                    var acceptanceRatio = Math.floor((Math.random() * 100) + 0);
                    var artifactsMGoal = Math.floor((Math.random() * 100) + 0);
                    var artifactsRate = Math.floor((Math.random() * 100) + 0);
                    var worktimeRatio = Math.floor((Math.random() * 100) + 0);
                    var tasksProgress = Math.floor((Math.random() * 100) + 0);

                    var tasksRecord = [];
                    for (var i = 0; i < 30; i++) {
                        var ts = new Date(2016, 1, i, 12, 30, 0, 0);
                        var assigned = Math.floor((Math.random() * 10) + 0);
                        var submitted = Math.floor((Math.random() * 10) + 0);
                        var accepted = Math.floor((Math.random() * 10) + 0);
                        var record = {ts: ts, assigned: assigned, submitted: submitted, accepted: accepted};
                        tasksRecord.push(record);
                    }
                    //end compute analytics

                    analytics[TEAM_ANALYTICS.GQM_SCORE] = gqmScore;
                    analytics[TEAM_ANALYTICS.GRIDS_TOT] = gridsTot;
                    analytics[TEAM_ANALYTICS.ARTIFACTS_TOT] = artifactsTot;
                    analytics[TEAM_ANALYTICS.ACCEPTANCE_RATIO] = acceptanceRatio;
                    analytics[TEAM_ANALYTICS.ARTIFACTS_MGOAL] = artifactsMGoal;
                    analytics[TEAM_ANALYTICS.ARTIFACTS_RATE] = artifactsRate;
                    analytics[TEAM_ANALYTICS.WORKTIME_RATIO] = worktimeRatio;
                    analytics[TEAM_ANALYTICS.TASKS_PROGRESS] = tasksProgress;
                    analytics[TEAM_ANALYTICS.TASKS_RECORD] = tasksRecord;

                    resolve({analytics: analytics, teamid: teamid});
                } else {
                    reject({errmsg: 'Team ' + teamid + ' not found'});
                }
            }, 500);
        });
    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name TeamService
* @module metricapp
* @requires $http
* @requires $cookies
* @requires REST_SERVICE
* @requires AuthService
*
* @description
* Provides team management services.
************************************************************************************/

angular.module('metricapp')

.service('TeamService', TeamService);

TeamService.$inject = ['$http', '$q', '$cookies', 'REST_SERVICE', 'AuthService', 'DB_TEAMS'];

function TeamService($http, $q, $cookies, REST_SERVICE, AuthService, DB_TEAMS) {

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
    * Retrieves all the teams.
    * @returns {[Team]|Error} On success, the teams;
    * an error message, otherwise.
    ********************************************************************************/
    function getAll() {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var authusername = AuthService.getUsername();
                if (authusername) {
                    var teams = [];
                    for (var teamid in DB_TEAMS) {
                        var TEAM = DB_TEAMS[teamid];
                        if (TEAM.expert === authusername) {
                            teams.push(TEAM);
                        }
                    }
                    resolve({teams: teams});
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
    * Retrieves the specified team.
    * @param {String} teamid The id of the team to retrieve.
    * @returns {Team|Error} On success, the team;
    * an error message, otherwise.
    ********************************************************************************/
    function getById(teamid) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var TEAM = DB_TEAMS[teamid];
                if (TEAM) {
                    resolve({team: TEAM});
                } else {
                    reject({errmsg: 'Team ' + teamid + ' not found'});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getInArray
    * @description
    * Retrieves the specified teams.
    * @param {[String]} teamids Usernames of teams to retrieve.
    * @returns {{teamid:Team}|Error} On success, the list of teams;
    * an error message, otherwise.
    ********************************************************************************/
    function getInArray(teamids) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var teams = {};
                teamids.forEach(function(teamid) {
                    var TEAM = DB_TEAMS[teamid];
                    if (TEAM) {
                        teams[teamid] = TEAM;
                    }
                });
                resolve({teams: teams});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getNFrom
    * @description
    * Retrieves the specified teams.
    * @param {Int} tmStart First team index.
    * @param {Int} tmN Number of teams.
    * @returns {[Team]|Error} On success, the list of teams;
    * an error message, otherwise.
    ********************************************************************************/
    function getNFrom(tmStart, tmN) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var teams = [];
                var numteams =  Object.keys(DB_TEAMS).length;
                var end = (tmN === -1) ? numteams : Math.min(tmStart + tmN, numteams);
                for (var i = tmStart; i < end; i++ ) {
                    teams.push(DB_TEAMS[i]);
                }
                resolve({teams: teams, numteams: numteams});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name create
    * @description
    * Creates a new team.
    * @param {Team} team The team to create.
    * @returns {JSON|Error} On success, the teamid of the successfully created team
    * and a success message;
    * an error message, otherwise.
    ********************************************************************************/
    function create(team) {
        return $q(function(resolve, reject) {
            var teamid = team.teamid;
            setTimeout(function() {
                if (DB_TEAMS[teamid]) {
                    reject({errmsg: 'Team ' + teamid + ' already registered'});
                } else {
                    DB_TEAMS[teamid] = angular.copy(team);
                    resolve({teamid: teamid, msg: 'Thank you for creating team ' + teamid});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name update
    * @description
    * Updates the team.
    * @param {TeamAttrs} teamAttrs The team attributes to update.
    * @returns {String|Error} On success, the teamid of the updated team;
    * an error message, otherwise.
    ********************************************************************************/
    function update(teamAttrs) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var authusername = AuthService.getUsername();
                if (authusername) {
                    var teamid = teamAttrs.teamid;
                    var TEAM = DB_TEAMS[teamid];
                    if (TEAM) {
                        if (TEAM.expert === authusername) {
                            for (var attr in teamAttrs) {
                                TEAM[attr] = angular.copy(teamAttrs[attr]);
                            }
                            resolve({team: TEAM});
                        } else {
                            reject({errmsg: 'The current user ' + authusername + ' cannot update team ' + teamid});
                        }

                    } else {
                        reject({errmsg: 'Team ' + teamid + ' not found'});
                    }
                } else {
                    reject({errmsg: 'User not logged'});
                }   
            }, 500);
        });
    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name UserAnalyticsService
* @module metricapp
* @requires $http
* @requires $cookies
* @requires REST_SERVICE
* @requires USER_ANALYTICS
*
* @description
* Realizes the user analytics DAO.
************************************************************************************/

angular.module('metricapp')

.service('UserAnalyticsService', UserAnalyticsService);

UserAnalyticsService.$inject = ['$http', '$q', '$cookies', 'REST_SERVICE', 'USER_ANALYTICS', 'DB_USERS'];

function UserAnalyticsService($http, $q, $cookies, REST_SERVICE, USER_ANALYTICS, DB_USERS) {

    var service = this;

    service.getAll = getAll;

    /********************************************************************************
    * @ngdoc method
    * @name getAll
    * @description
    * Retrieves all the analytics for the specified user.
    * @param {String} username The username of the user whose analytics to retrieve.
    * @returns {Analytics|Error} On success, the user analytics;
    * an error message, otherwise.
    ********************************************************************************/
    function getAll(username) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var USER = DB_USERS[username];
                if (USER) {
                    var analytics = {};
                    // start compute analytics
                    var gqmScore = Math.floor((Math.random() * 100) + 0);
                    var gridsTot = Math.floor((Math.random() * 100) + 0);
                    var artifactsTot = Math.floor((Math.random() * 100) + 0);
                    var acceptanceRatio = Math.floor((Math.random() * 100) + 0);
                    var artifactsMGoal = Math.floor((Math.random() * 100) + 0);
                    var artifactsRate = Math.floor((Math.random() * 100) + 0);
                    var worktimeRatio = Math.floor((Math.random() * 100) + 0);
                    var tasksProgress = Math.floor((Math.random() * 100) + 0);

                    var tasksRecord = [];
                    for (var i = 0; i < 30; i++) {
                        var ts = new Date(2016, 1, i, 12, 30, 0, 0);
                        var assigned = Math.floor((Math.random() * 10) + 0);
                        var submitted = Math.floor((Math.random() * 10) + 0);
                        var accepted = Math.floor((Math.random() * 10) + 0);
                        var record = {ts: ts, assigned: assigned, submitted: submitted, accepted: accepted};
                        tasksRecord.push(record);
                    }
                    //end compute analytics

                    analytics[USER_ANALYTICS.GQM_SCORE] = gqmScore;
                    analytics[USER_ANALYTICS.GRIDS_TOT] = gridsTot;
                    analytics[USER_ANALYTICS.ARTIFACTS_TOT] = artifactsTot;
                    analytics[USER_ANALYTICS.ACCEPTANCE_RATIO] = acceptanceRatio;
                    analytics[USER_ANALYTICS.ARTIFACTS_MGOAL] = artifactsMGoal;
                    analytics[USER_ANALYTICS.ARTIFACTS_RATE] = artifactsRate;
                    analytics[USER_ANALYTICS.WORKTIME_RATIO] = worktimeRatio;
                    analytics[USER_ANALYTICS.TASKS_PROGRESS] = tasksProgress;
                    analytics[USER_ANALYTICS.TASKS_RECORD] = tasksRecord;

                    resolve({analytics: analytics, username: username});
                } else {
                    reject({errmsg: 'User ' + username + ' not found'});
                }
            }, 500);
        });
    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name UserService
* @module metricapp
* @requires $http
* @requires $cookies
* @requires REST_SERVICE
* @requires AuthService
* @requires ROLES
*
* @description
* Provides users management services.
************************************************************************************/

angular.module('metricapp')

.service('UserService', UserService);

UserService.$inject = ['$http', '$q', '$cookies', 'REST_SERVICE', 'AuthService', 'ROLES', 'DB_USERS'];

function UserService($http, $q, $cookies, REST_SERVICE, AuthService, ROLES, DB_USERS) {

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
    * Retrieves all the users.
    * @returns {[User]|Error} On success, the users;
    * an error message, otherwise.
    ********************************************************************************/
    function getAll() {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var users = [];
                for (var user in DB_USERS) {
                    users.push(DB_USERS[user]);
                }
                resolve({users: users});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getById
    * @description
    * Retrieves the specified user.
    * @param {String} username The username of the user to retrieve.
    * @returns {User|Error} On success, the user;
    * an error message, otherwise.
    ********************************************************************************/
    function getById(username) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var USER = DB_USERS[username];
                if (USER) {
                    resolve({user: USER});
                } else {
                    reject({errmsg: 'User ' + username + ' not found'});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getInArray
    * @description
    * Retrieves the specified users.
    * @param {[String]} usernames Usernames of users to retrieve.
    * @returns {{username:User}|Error} On success, the list of users;
    * an error message, otherwise.
    ********************************************************************************/
    function getInArray(usernames) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var users = {};
                usernames.forEach(function(username) {
                    var USER = DB_USERS[username];
                    if (USER) {
                        users[username] = USER;
                    }
                });
                resolve({users: users});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getNFrom
    * @description
    * Retrieves the specified users.
    * @param {Int} usrStart First user index.
    * @param {Int} usrN Number of users.
    * @returns {[User]|Error} On success, the list of users;
    * an error message, otherwise.
    ********************************************************************************/
    function getNFrom(usrStart, usrN) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var users = [];
                var numusers =  Object.keys(DB_USERS).length;
                var end = (usrN === -1) ? numusers : Math.min(usrStart + usrN, numusers);
                for (var i = usrStart; i < end; i++ ) {
                    users.push(DB_USERS[i]);
                }
                resolve({users: users, numusers: numusers});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name create
    * @description
    * Creates a new user.
    * @param {User} user The user to create.
    * @returns {JSON|Error} On success, the username of the successfully created user
    * and a success message;
    * an error message, otherwise.
    ********************************************************************************/
    function create(user) {
        return $q(function(resolve, reject) {
            var username = user.username;
            setTimeout(function() {
                if (DB_USERS[username]) {
                    reject({errmsg: 'User ' + username + ' already registered'});
                } else {
                    DB_USERS[username] = angular.copy(user);
                    DB_USERS[username].online = false;
                    resolve({username: username, msg: 'Thank you for signing up ' + username});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name update
    * @description
    * Updates the authuser profile.
    * @param {UserAttrs} userAttrs The user attributes to update.
    * @returns {String|Error} On success, the username of the updated user;
    * an error message, otherwise.
    ********************************************************************************/
    function update(userAttrs) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var authusername = AuthService.getUsername();
                if (authusername) {
                    var username = userAttrs.username;
                    if (authusername === username) {
                        var USER = DB_USERS[username];
                        if (USER) {
                            for (var attr in userAttrs) {
                                USER[attr] = angular.copy(userAttrs[attr]);
                            }
                            resolve({user: USER});
                        } else {
                            reject({errmsg: 'User ' + username + ' not found'});
                        }
                    } else {
                        reject({errmsg: 'The current user ' + authusername + ' cannot update user ' + username});
                    }
                } else {
                    reject({errmsg: 'User not logged'});
                }                
            }, 500);
        });
    }

}

})();

(function() {'use strict';


var services = angular.module('metricapp');


services.factory('QuestionModalFactory', ['$window', '$uibModal', function($window, $uibModal){
	var factory = {};

	factory.openQuestionModal = function(){
	     var modalInstance = $uibModal.open({

            templateUrl: 'dist/views/questioner/questionerModal/questionModal.view.html',
            controller: 'QuestionModalCtrl',
            controllerAs: 'qstModal',
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

	return factory;

}]);
})();
(function() {'use strict';


var services = angular.module('metricapp');


services.factory('QuestionerMeasurementGoalModalFactory', ['$window', '$uibModal', function($window, $uibModal){
	var factory = {};

	factory.openMeasurementGoalModal = function(){

	     var modalInstance = $uibModal.open({

            templateUrl: 'dist/views/questioner/questionerModal/measurementGoalModal.view.html',
            controller: 'QuestionerMeasurementGoalModalCtrl',
            controllerAs: 'mgModal',
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

	return factory;

}]);
})();

(function() {'use strict';


var services = angular.module('metricapp');


services.factory('QuestionerMetricModalFactory', ['$window', '$uibModal', function($window, $uibModal){
	var factory = {};

	factory.openMetricModal = function(){
	     var modalInstance = $uibModal.open({

            templateUrl: 'dist/views/questioner/questionerModal/metricModal.view.html',
            controller: 'QuestionerMetricModalCtrl',
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

	return factory;

}]);
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

(function () {
  'use strict';

  angular.module('metricapp')
      .directive('metricPage', metricator);

  function metricator() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/metric/metricpage.view.html'
    };
  }

  angular.module('metricapp')
      .directive('metricupdate', metricupdate);
  function metricupdate() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/metric/metricupdate.view.html'
    };
  }

  angular.module('metricapp')
      .directive('metricread', metricread);
  function metricread() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/metric/metricread.view.html'
    };
  }


})();

(function () {
  'use strict';

  angular.module('metricapp')
      .directive('metrics', metrics);

  function metrics() {
    return {
      restrict: 'E',
      templateUrl: 'dist/metric/metrics.view.html'
    };
  }

  angular.module('metricapp')
      .directive('widget', widget);

  function widget() {
    return {
      restrict: 'E',
      templateUrl: 'dist/metric/metric.view.html'
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
      .directive('questionerDashboard', questionerDashboard);

  function questionerDashboard() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/questioner/questionerDashboard.view.html'
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
      templateUrl: 'dist/views/user/viewuserprofile/viewabout.view.html'
    };
  }

  angular.module('metricapp')
      .directive('viewprojects', viewprojects);

  function viewprojects() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/user/viewuserprofile/viewprojects.view.html'
    };
  }

  angular.module('metricapp')
      .directive('viewstatistics', viewstatistics);

  function viewstatistics() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/user/viewuserprofile/viewstatistics.view.html'
    };
  }

  angular.module('metricapp')
      .directive('vieweditprofile', vieweditprofile);

  function vieweditprofile() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/user/viewuserprofile/vieweditprofile.view.html'
    };
  }

  angular.module('metricapp')
      .directive('vieweditcredentials', vieweditcredentials);

  function vieweditcredentials() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/user/viewuserprofile/vieweditcredentials.view.html'
    };
  }

})();
(function() { 'use strict';

/************************************************************************************
* @ngdoc directive
* @name mFallbackSrc
* @module metricapp
* @restrict A
*
* @description
* If necessary, retrieves the specified resource as fallback resource.
*
* @example
*   <img ng-src="path/to/unexistent/image" m-fallback-src="path/to/existent/image" />
*
************************************************************************************/

angular.module('metricapp')

.directive('mFallbackSrc', mFallbackSrc);

function mFallbackSrc() {
	return {
        restrict: 'A',
        link: function(scope, element, attrs) {
    		element.bind('error', function() {
				element.attr('src', attrs.mFallbackSrc);
    		});
        }
    };
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc directive
* @name mWhenScrollBottom
* @module metricapp
* @restrict A
*
* @description
* Executes the specified callback when a scrollable element reaches its bottom.
*
* @example
*   <div style="width:400px;heigth:100px;overflow-y:scroll;"
*   m-when-scroll-bottom="vm.callback()">
*   <!-- your elements -->
*   </div>
*
************************************************************************************/

angular.module('metricapp')

.directive('mWhenScrollBottom', mWhenScrollBottom);

function mWhenScrollBottom() {
    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
        var scroller = elem[0];
        var func = attrs.mWhenScrollBottom;
        $(scroller).bind('scroll', function() {
          if (scroller.scrollTop + scroller.offsetHeight >= scroller.scrollHeight) {
            scope.$apply(func);
          }
        });
      }
    };
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc directive
* @name mWhenScrollTop
* @module metricapp
* @restrict A
*
* @description
* Executes the specified callback when a scrollable element reaches its bottom.
*
* @example
*   <div style="width:400px;heigth:100px;overflow-y:scroll;"
*   m-when-scroll-top="vm.callback()">
*   <!-- your elements -->
*   </div>
*
************************************************************************************/

angular.module('metricapp')

.directive('mWhenScrollTop', mWhenScrollTop);

function mWhenScrollTop() {
    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
        var scroller = elem[0];
        var func = attrs.mWhenScrollTop;
        $(scroller).bind('scroll', function() {
          if (scroller.scrollTop + scroller.offsetHeight >= scroller.scrollHeight) {
            scope.$apply(func);
          }
        });
      }
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

(function () {
  'use strict';

  angular.module('metricapp')
      .directive('questionCreate', questionCreate);

  function questionCreate() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/questioner/questionCreation.view.html'
    };
  }

})();
(function () {
  'use strict';

  angular.module('metricapp')
      .directive('questionList', questionList);

  function questionList() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/questioner/questionList.view.html'
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
      templateUrl: 'dist/views/questioner/questionModal.view.html'
    };
  }

})();
(function () {
  'use strict';

  angular.module('metricapp')
      .directive('questionSearch', questionSearch);

  function questionSearch() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/questioner/questionSearch.view.html'
    };
  }

})();
(function () {
  'use strict';

  angular.module('metricapp')
      .directive('questionUpdate', questionUpdate);

  function questionUpdate() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/questioner/questionUpdate.view.html'
    };
  }

})();
(function() { 'use strict';

/************************************************************************************
* @ngdoc filter
* @name datetimeFilter
* @module metricapp
*
* @description
* Formats Date object display.
************************************************************************************/

angular.module('metricapp')

.filter('datetimeFilter', datetimeFilter);

function datetimeFilter() {
    function _normal(dateObj) {
        var now = new Date();
        var day = dateObj.getDate();
        var month = dateObj.getMonth();
        switch(month) {
            case 1:
                month = 'Jan';
                break;
            case 2:
                month = 'Feb';
                break;
            case 3:
                month = 'Mar';
                break;
            case 4:
                month = 'Apr';
                break;
            case 5:
                month = 'May';
                break;
            case 6:
                month = 'Jun';
                break;
            case 7:
                month = 'Jul';
                break;
            case 8:
                month = 'Aug';
                break;
            case 9:
                month = 'Sep';
                break;
            case 10:
                month = 'Oct';
                break;
            case 11:
                month = 'Nov';
                break;
            case 12:
                month = 'Dec';
                break;
            default:
                month = 'Unknown';
                break;
        }

        var year = dateObj.getFullYear();
        if (year === now.getFullYear()) {
            year = '';
        }

        var hours = dateObj.getHours();
        var minutes = dateObj.getMinutes();

        var dateStr = 'on ' + [day,month,year].join(' ');
        var timeStr = 'at ' + [hours,minutes].join(':');

        var datetimeStr = [dateStr,timeStr].join(' ');

        return datetimeStr;
    }

    function _ago(dateObj) {
        var now = new Date();
        if (dateObj.getDate() === now.getDate()) {
            if (dateObj.getHours() === now.getHours()) {
                var minutesAgo = now.getMinutes() - dateObj.getMinutes();
                if (minutesAgo === 0) {
                    return 'now';
                } else {
                    return minutesAgo + 'm' + ((minutesAgo > 1)?'s':'');
                }
            } else {
                var hoursAgo = now.getHours() - dateObj.getHours();
                return hoursAgo + 'h' + ((hoursAgo > 1)?'s':'');
            }
        } else if (dateObj.getDate() === new Date(now - 86400000)) {
            var hours = dateObj.getHours();
            var minutes = dateObj.getMinutes();
            return 'Yesterday at ' + [hours,minutes].join(':');
        } else {
            return _normal(dateObj);
        }
    }

    return function(dateObj, mode) {
        if (!angular.isDate(dateObj)) {
            return dateObj;
        }
        if (mode === 'normal') {
            return _normal(dateObj);
        } else if (mode === 'ago') {
            return _ago(dateObj);
        } else {
            return _normal(dateObj);
        }
    };
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc filter
* @name textFallback
* @module metricapp
*
* @description
* Realizes string fallback for null content.
************************************************************************************/

angular.module('metricapp')

.filter('textFallback', textFallback);

function textFallback() {
    return function(obj, fallbackString) {
        if (!obj) {
            return fallbackString;
        }
    };
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc filter
* @name userFilter
* @module metricapp
*
* @description
* Realizes filters for users to use inside ng-repeat and composite attributes.
************************************************************************************/

angular.module('metricapp')

.filter('userFilterByName', userFilterByName);

function userFilterByName() {
    return function(users, query) {
        var result = [];
        if (!query) {
            return users;
        }
        query.toLowerCase();
        users.forEach(function(user) {
            if (user.fname.toLowerCase().indexOf(query)>=0 || user.lname.toLowerCase().indexOf(query)>=0) {
                result.push(user);
            }
        });
        return result;
    };
}

angular.module('metricapp')

.filter('userFullname', userFullname);

function userFullname() {
    return function(user) {
        if (!user) {
            return user;
        }
        var fullname = [user.firstname, user.lastname].join(' ');
        return fullname;
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
* Realizes the control layer for `login.view`.
************************************************************************************/

angular.module('metricapp')

.controller('LoginController', LoginController);

LoginController.$inject = ['$rootScope', '$location', 'AuthService', 'AUTH_EVENTS'];

function LoginController($rootScope, $location, AuthService, AUTH_EVENTS) {

    var vm = this;

    vm.login = login;

    /********************************************************************************
    * @ngdoc method
    * @name login
    * @description
    * Authenticates the user, by its username and password.
    ********************************************************************************/
    function login(credentials) {
        vm.loading = true;
        vm.success = false;

        AuthService.login(credentials).then(
            function(resolve) {
                var authuser = resolve.authuser;
                AuthService.setUser(authuser);
                vm.success = true;
                $rootScope.$broadcast(AUTH_EVENTS.LOGIN_SUCCESS);
                $location.path('/home');
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                alert(vm.errmsg);
                vm.success = false;
                $rootScope.$broadcast(AUTH_EVENTS.LOGIN_FAILURE);
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = false;
        vm.success = false;
        vm.errmsg = null;
        vm.credentials = {
            username: null,
            password: null
        };
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
* Realizes the control layer for `logout.view`.
************************************************************************************/

angular.module('metricapp')

.controller('LogoutController', LogoutController);

LogoutController.$inject = ['$rootScope', '$location', 'AuthService', 'AUTH_EVENTS'];

function LogoutController($rootScope, $location, AuthService, AUTH_EVENTS) {

    var vm = this;

    vm.logout = logout;

    _init();

    /********************************************************************************
    * @ngdoc method
    * @name logout
    * @description
    * Deauthenticates the user, via its local cookie.
    ********************************************************************************/
    function logout() {
        vm.loading = true;
        AuthService.logout().then(
            function(resolve) {
                vm.success = true;
                $rootScope.$broadcast(AUTH_EVENTS.LOGOUT_SUCCESS);               
                $location.path('/');
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                alert(vm.errmsg);
                vm.success = false;
                $rootScope.$broadcast(AUTH_EVENTS.LOGOUT_FAILURE);
                $location.path('/');
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = false;
        vm.success = false;
        vm.errmsg = null;
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
* @requires UserService
* @requires FlashService
* @requires ROLES
* @requires GENDERS
*
* @description
* Realizes the control layer for `signup.view`.
************************************************************************************/

angular.module('metricapp')

.controller('SignupController', SignupController);

SignupController.$inject = ['$scope', '$location', 'UserService', 'FlashService',
'ROLES', 'GENDERS'];

function SignupController($scope, $location, UserService, FlashService, ROLES, GENDERS) {

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
    function signup(user) {
        vm.loading = true;
        vm.success = false;

        UserService.create(user).then(
            function(resolve) {
                var msg = resolve.msg;
                vm.success = true;
                alert(msg);
                //FlashService.success(msg);
                $location.path('/');
            },
            function(reject) {
                var errmsg = reject.errmsg;
                alert(errmsg);
                vm.success = false;
                //FlashService.danger(errmsg);
            }
        ).finally(function() {
            vm.loading = false;
        });
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
        vm.success = false;
        vm.errmsg = null;
        /*vm.user = {
            username: null,
            password: null,
            role: null,
            firstname: null,
            lastname: null,
            gender: null,
            birthday: new Date(),
            email: null,
            mobile: null,
            picture: null

        };
        */
    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name ChatController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $routeParams
* @requires $filter
* @requires MessageService
* @requires UserService
*
* @description
* Realizes the control layer for `chat.view`.
************************************************************************************/

angular.module('metricapp')

.controller('ChatController', ChatController);

ChatController.$inject = ['$scope', '$location', '$routeParams', '$filter', 'MessageService', 'UserService'];

function ChatController($scope, $location, $routeParams, $filter, MessageService, UserService) {

    var vm = this;

    vm.loadMore = loadMore;
    vm.sendMessage = sendMessage;

    _init();

    function loadMore() {
        /*
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.conversation.messages = vm.conversation.messages.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
        */
    }

    function sendMessage(content) {
        var message = {
            ts_create: new Date(),
            author: $rootScope.globals.user.username,
            content: content
        };
        vm.currConversation.messages.push(message);
    }

    function _loadConversation(recipient) {
        vm.loading = true;
        vm.success = false;
        MessageService.getById(recipient, -1).then(
            function(resolve) {
                vm.currConversation = angular.copy(resolve.conversation);
                return UserService.getUser(vm.currConversation.recipient).then(
                    function(resolve) {
                        vm.currConversation.recipient = angular.copy(resolve.user);
                        vm.success = true;
                    },
                    function(reject) {
                        vm.errmsg = reject.errmsg;
                        vm.success = false;
                    }
                );
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        if (!$routeParams.username) {
            return;
        }
        vm.currConversation = {
            recipient: {username: $routeParams.username}
        };
        _loadConversation(vm.currConversation.recipient.username);
    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name ChatsController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $routeParams
* @requires $filter
* @requires MessageService
* @requires UserService
*
* @description
* Realizes the control layer for `messages.view`.
************************************************************************************/

angular.module('metricapp')

.controller('ChatsController', ChatsController);

ChatsController.$inject = ['$scope', '$location', '$routeParams', '$filter', 'MessageService', 'UserService'];

function ChatsController($scope, $location, $routeParams, $filter, MessageService, UserService) {

    var vm = this;

    vm.loadMore = loadMore;

    _init();

    function loadMore() {
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.conversations = vm.conversations.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
    }

    function _loadAllConversations() {
        vm.loading = true;
        vm.success = false;
        MessageService.getAll().then(
            function(resolve) {
                var conversations = resolve.conversations;
                vm.toread = resolve.toread;
                var recipients = [];
                conversations.forEach(function(conversation) {
                    recipients.push(conversation.recipient);
                });
                return UserService.getInArray(recipients).then(
                    function(resolve) {
                        var users = resolve.users;
                        for (var i = 0; i < conversations.length; i++) {
                            var conversation = conversations[i];
                            var recipient = conversation.recipient;
                            conversation.recipient = angular.copy(users[recipient]);
                            if (conversation.recipient) {
                                vm.data.push(conversation);
                            }
                        }
                        vm.buffer = $filter('orderBy')(vm.data, vm.orderBy);
                        vm.success = true;
                    },
                    function(reject) {
                        vm.errmsg = reject.errmsg;
                        vm.success = false;
                    }
                );
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.data = [];
        vm.buffer = [];
        vm.conversations = [];
        vm.idx = 0;
        vm.step = 10;
        vm.orderBy = '-ts_update';
        vm.toread = 0;
        _loadAllConversations();
        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.conversations = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });
    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name ChatsWidgetController
* @module metricapp
* @requires $scope
* @requires $location
* @requires MessageService
* @requires UserService
* @requires AuthService
* @requires AUTH_EVENTS
*
* @description
* Realizes the control layer for `chats.widget.view`.
************************************************************************************/

angular.module('metricapp')

.controller('ChatsWidgetController', ChatsWidgetController);

ChatsWidgetController.$inject = ['$scope', '$location', 'MessageService', 'UserService', 'AuthService', 'AUTH_EVENTS'];

function ChatsWidgetController($scope, $location, MessageService, UserService, AuthService, AUTH_EVENTS) {

    var vm = this;

    _init();

    function _loadConversations(cnvStart, cnvN) {
        vm.loading = true;
        vm.success = false;
        MessageService.getNFrom(cnvStart, cnvN).then(
            function(resolve) {
                var conversations = resolve.conversations;
                vm.toread = resolve.toread;
                var recipients = [];
                conversations.forEach(function(conversation) {
                    recipients.push(conversation.recipient);
                });
                return UserService.getInArray(recipients).then(
                    function(resolve) {
                        var users = resolve.users;
                        for (var i = 0; i < conversations.length; i++) {
                            var conversation = conversations[i];
                            var recipient = conversation.recipient;
                            conversation.recipient = angular.copy(users[recipient]);
                            if (conversation.recipient) {
                                vm.conversations.push(conversation);
                            }
                        }
                        vm.success = true;
                    },
                    function(reject) {
                        vm.errmsg = reject.errmsg;
                        vm.success = false;
                    }
                );
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.conversations = [];
        vm.toread = 0;
        if (AuthService.isLogged()) {
            _loadConversations(0, 5);
        }
        $scope.$on(AUTH_EVENTS.LOGIN_SUCCESS, function() {
            _loadConversations(0, 5);
        });
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

(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name GridAnalyticsController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $routeParams
* @requires GridService
*
* @description
* Realizes the control layer for `grid.analytics.view`.
************************************************************************************/

angular.module('metricapp')

.controller('GridAnalyticsController', GridAnalyticsController);

GridAnalyticsController.$inject = ['$scope', '$location', '$routeParams', 'GridService'];

function GridAnalyticsController($scope, $location, $routeParams, GridService) {

    var vm = this;

    _init();

    function _loadGrid(gridid) {
        vm.loading = true;
        vm.success = false;
        GridService.getById(gridid).then(
            function(resolve) {
                vm.currGrid = angular.copy(resolve.grid);
                vm.success = true;
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.currGrid = {
            id: $routeParams.gridid
        };
        _loadGrid(vm.currGrid.id);
    }

}

})();

(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name CreateGridController
* @module metricapp
* @requires $scope
* @requires $location
* @requires GridService
* @requires UserService
* @requires AuthService
*
* @description
* Realizes the control layer for `create-grid.modal.view`.
************************************************************************************/

angular.module('metricapp')

.controller('CreateGridController', CreateGridController);

CreateGridController.$inject = ['$scope', '$location', 'GridService', 'UserService', 'AuthService'];

function CreateGridController($scope, $location, GridService, UserService, AuthService) {

    var vm = this;

    vm.createGrid = createGrid;

    _init();

    function createGrid(grid) {
        vm.loading = true;
        vm.success = false;
        GridService.create(grid).then(
            function(resolve) {
                var gridid = resolve.gridid;
                var msg = resolve.msg;
                vm.success = true;
                $location.path('/grids/' + gridid);
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = false;
        vm.success = true;
        vm.errmsg = null;
        vm.currUser = AuthService.getUser();
        vm.grid = {
            id: null,
            name: null,
            description: null,
            expert: vm.currUser.username,
            questioners: [],
            metricators: [],
            ts_create: null,
            ts_update: null,
            mgoals: [],
            questions: [],
            metrics: [],
            graph: {}
        };
    }

}

})();

(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name GridController
* @module metricapp
* @requires $scope
* @requires $rootScope
* @requires $location
* @requires $routeParams
* @requires $q
* @requires GridService
* @requires MGoalService
* @requires QuestionService
* @requires MetricService
* @requires UserService
* @requires ROLES
* @requires GRID_EVENTS
*
* @description
* Realizes the control layer for `grid.view`.
************************************************************************************/

angular.module('metricapp')

.controller('GridController', GridController);

GridController.$inject = ['$scope', '$rootScope', '$location', '$routeParams', '$q',
'GridService', 'MGoalService', 'QuestionService', 'MetricService', 'UserService', 'ROLES', 'GRID_EVENTS','cytoData'];

function GridController($scope, $rootScope, $location, $routeParams, $q,
    GridService, MGoalService, QuestionService, MetricService, UserService, ROLES, GRID_EVENTS,cytoData) {

    var vm = this;

    vm.updateGrid = updateGrid;
    vm.removeMember = removeMember;
    
    _init();

    function updateGrid(grid) {
        vm.loading = true;
        vm.success = false;
        GridService.update(grid).then(
            function(resolve) {
                vm.currGrid = angular.copy(resolve.grid);
                var gridid = resolve.grid.gridid;
                vm.success = true;
                $location.path('/grids/' + gridid);
                $rootScope.$broadcast(GRID_EVENTS.UPDATE_SUCCESS);
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
                $rootScope.$broadcast(GRID_EVENTS.UPDATE_FAILURE);
            }
        )
        .finally(function(){
            vm.loading = false;
        });
    }

    function removeMember(username, role) {
        if (role === ROLES.QUESTIONER) {
            delete vm.updtGrid.questioners[username];
        } else if (role === ROLES.METRICATOR) {
            delete vm.updtGrid.metricator[username];
        }
    }

    function _loadGrid(gridid) {
        vm.loading = true;
        vm.success = false;
        GridService.getById(gridid).then(
            function(resolve) {
                vm.currGrid = angular.copy(resolve.grid);
                var meta={
                    expert:UserService.getById(vm.currGrid.expert),
                    questioners:UserService.getInArray(vm.currGrid.questioners),
                    metricators:UserService.getInArray(vm.currGrid.metricators),
                    mgoals:MGoalService.getInArray(vm.currGrid.mgoals),
                    questions:QuestionService.getInArray(vm.currGrid.questions),
                    metrics:MetricService.getInArray(vm.currGrid.metrics)
                };
                return $q.all(meta).then(
                    function(resolve){
                        vm.currGrid.expert=angular.copy(resolve.expert.user);
                        vm.currGrid.questioners=angular.copy(resolve.questioners.users);
                        vm.currGrid.metricators=angular.copy(resolve.metricators.users);
                        vm.currGrid.mgoals=angular.copy(resolve.mgoals.mgoals);
                        vm.currGrid.questions=angular.copy(resolve.questions.questions);
                        vm.currGrid.metrics=angular.copy(resolve.metrics.metrics);
                        vm.updtGrid = angular.copy(vm.currGrid);
                        vm.num_questions = Object.keys(vm.currGrid.questions).length;
                        vm.num_mgoals = Object.keys(vm.currGrid.mgoals).length;
                        vm.num_metrics = Object.keys(vm.currGrid.metrics).length;
                        vm.success=true;
                    },
                    function(reject){
                        vm.errmsg = reject.errmsg;
                        alert(vm.errmsg);
                        vm.success = false;
                    }
                );
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.currGrid = {
            id: $routeParams.gridid
        };
        _loadGrid(vm.currGrid.id);
    }
    
    $scope.vm.options = {
        textureOnViewport:true,
        pixelRatio: 'auto',
        motionBlur: false,
        hideEdgesOnViewport:true
       };

    $scope.vm.layout = {name: 'circle'};

    $scope.vm.elements = 
    {
        n1:{ group: 'nodes', data:{ weight: 30,   color: 'orange' ,     name: 'Metric 1'   }  },
        n2:{ group: 'nodes', data:{ weight: 30,   color: 'red'    ,     name: 'MG 2'       }  },
        n3:{ group: 'nodes', data:{ weight: 30,   color: 'blue'   ,     name: 'Question 1' }  },
        n4:{ group: 'nodes', data:{ weight: 30,   color: 'green'  ,     name: 'Org. Goal 1'}  },

        e1:{ group: 'edges', data:{ target: 'n1', source: 'n1' } },
        e2:{ group: 'edges', data:{ target: 'n1', source: 'n2' } },
        e3:{ group: 'edges', data:{ target: 'n1', source: 'n3' } },
        e4:{ group: 'edges', data:{ target: 'n1', source: 'n1' } }
    };
        
    $scope.vm.style = 
    [
        {
            selector: 'node',
            style: {
                'height': 'data(weight)',
                'width': 'data(weight)',
                'shape': 'ellipse',
                'border-width': 0,
                'background-color': 'data(color)',
            } 
        }
    ];


    $scope.node_name = '';
    $scope.node_description = '';
    $scope.node_creation ='';
    $scope.node_update = '';

    $scope.$on('cy:node:mouseover', function(ng,cy){
        $scope.event.name = 'cy:node:mouseover';
        var node = cy.cyTarget;
        //$scope.node_name = (node.data());
        $scope.node_name = 'eddaicazzo..';
        $scope.$apply();
    });

    $scope.$on('cy:node:mouseout', function(ng,cy){
        $scope.event.name = 'cy:node:mouseout';
        var node = cy.cyTarget;
        //$scope.node_name = (node.data());
        $scope.node_name = 'eddaicazzo..';
        $scope.$apply();
    });

    $scope.$on('cy:node:mousedown', function(ng,cy){
        $scope.event.name = 'cy:node:mousedown';
        var node = cy.cyTarget;
        //$scope.node_name = (node.data());
        $scope.node_name = 'eddaicazzo..';
        $scope.$apply();
    });

    $scope.$on('cy:node:mouseup', function(ng,cy){
        $scope.event.name = 'cy:node:mouseup';
        var node = cy.cyTarget;
        //$scope.node_name = (node.data());
        $scope.node_name = 'eddaicazzo..';
        $scope.$apply();
    });

    $scope.$on('cy:node:click', function(ng,cy){
        $scope.event.name = 'cy:node:click';
        var node = cy.cyTarget;
        //$scope.node_name = (node.data());
        $scope.node_name = 'eddaicazzo..';
        $scope.$apply();
    });    

}

})();

(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name GridsController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $filter
* @requires GridService
* @requires UserService
* @requires ROLES
*
* @description
* Realizes the control layer for `grids.view`.
************************************************************************************/

angular.module('metricapp')

.controller('GridsController', GridsController);

GridsController.$inject = ['$scope', '$location', '$filter', 'GridService', 'UserService', 'ROLES'];

function GridsController($scope, $location, $filter, GridService, UserService, ROLES) {

    var vm = this;

    vm.ROLES = ROLES;

    vm.loadMore = loadMore;
    vm.search = search;

    _init();

    function loadMore() {
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.grids = vm.grids.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
    }

    function search(query) {
        vm.buffer = $filter('orderBy')($filter('filter')(vm.data, query), vm.orderBy);
    }

    function _loadAllGrids() {
        vm.loading = true;
        vm.success = false;
        GridService.getAll().then(
            function(resolve) {
                vm.data = angular.copy(resolve.grids);
                vm.buffer = $filter('orderBy')(vm.data, vm.orderBy);
                vm.success = true;
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.data = [];
        vm.buffer = [];
        vm.grids = [];
        vm.idx = 0;
        vm.step = 1;
        vm.query = '';
        vm.orderBy = 'name';
        _loadAllGrids();
        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.grids = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });
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
*
* @description
* Realizes the control layer for `home.view`.
************************************************************************************/

angular.module('metricapp')

.controller('HomeController', HomeController);

HomeController.$inject = ['$rootScope', '$scope', '$location', '$timeout', 'AuthService'];

function HomeController($rootScope, $scope, $location, $timeout, AuthService) {

    var vm = this;

    _init();

    function _loadHome() {
        vm.loading = true;
        vm.success = false;
        vm.currUser = AuthService.getUser();
        vm.success = true;
        vm.loading = false;
    }

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
        {label: 'Metricators', value: vm.active_questioners},
        {label: 'Questioners', value: vm.active_metricators},
        {label: 'Experts',     value: vm.active_experts}
    ];

    //Active Users Trend Chart
    vm.trend_active_users = [
        { y: 'Q2/15', questioners: 19,  metricators: 29 },
        { y: 'Q3/15', questioners: 30,  metricators: 35 },
        { y: 'Q1/16', questioners: 55,  metricators: 45 },
        { y: 'Q2/16', questioners: 78,  metricators: 80 }
    ];

    //Projects Box
    vm.projects = [
        {name: 'ISSR Project',status: 'active',progress: 30},
        {name: 'ISSR Project2',status: 'active',progress: 70}
    ];

    //Date() for clock
    vm.date = new Date();

    vm.exportDataXLS = function () {
        var blob = new Blob([document.getElementById('exportable').innerHTML], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'
        });
        saveAs(blob, 'Report.xls');
    };

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


    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        _loadHome();
    }
}

})();

/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 15:53:20
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-17 17:59:23
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

    //Initialize some transition variables
    vm.externalMetricDialog = MetricService.getExternalMetricDialog();
    vm.externalContextFactorDialog = [];
    vm.externalAssumptionDialog = [];

    vm.submitMeasurementGoal = submitMeasurementGoal;
    vm.goToUpdateMeasurementGoal = goToUpdateMeasurementGoal;
    vm.addTagToMeasurementGoal = addTagToMeasurementGoal;
    vm.removeTagFromMeasurementGoal = removeTagFromMeasurementGoal;
    vm.getApprovedMetrics = getApprovedMetrics;
    vm.removeSomethingFromMeasurementGoal = removeSomethingFromMeasurementGoal;
    vm.isModifiable = isModifiable;
    vm.getExternalContextFactors = getExternalContextFactors;
    vm.getExternalAssumptions = getExternalAssumptions;
    vm.getMetricsToUpdate = getMetricsToUpdate;
    vm.setMetricDialog = setMetricDialog;
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
            case STATES.ONUPDATEWAITING :
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
        submitMeasurementGoal(STATES.ONUPDATEWAITING);    
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
    * @name getApprovedMetrics
    * @description
    * Get approved metrics.
    ********************************************************************************/
    function getApprovedMetrics(){

    	if (vm.externalMetricDialog.length === 0){
	        MetricService.getAllApproved().then(
	            function(data) {
	                console.log('SUCCESS GET APPROVED METRICS');
	                console.log(data.metricsDTO);
	                //vm.externalMetricDialog = data.metricsDTO;
	                MetricService.storeExternalMetric(data.metricsDTO);
    			    MetricModalService.openExternalMetricModal();
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

        if (vm.externalContextFactorDialog.length === 0){
            MeasurementGoalService.getExternalContextFactors().then(
                function(data) {
                    console.log('SUCCESS GET EXTERNAL CONTEXT FACTORS');
                    console.log(data);
                    //vm.externalContextFactorDialog = data;
                    ContextFactorService.storeExternalContextFactor(data);
    			    ContextFactorModalService.openExternalContextFactorModal();
                },
                function(data) {
                    alert('Error retrieving Context Factors');
                }
            );
        }
        else {
            ContextFactorModalService.openExternalContextFactorModal();
        }
    }

    /********************************************************************************
    * @ngdoc method
    * @name getExternalAssumptions
    * @description
    * Get external assumptions.
    ********************************************************************************/
    function getExternalAssumptions(){
        if (vm.externalAssumptionDialog.length === 0){
            MeasurementGoalService.getExternalAssumptions().then(
                function(data) {
                    console.log('SUCCESS GET EXTERNAL ASSUMPTIONS');
                    console.log(data);
                    //vm.externalAssumptionDialog = data;
                    AssumptionService.storeExternalAssumption(data);
    			    AssumptionModalService.openExternalAssumptionModal();
                },
                function(data) {
                    alert('Error retrieving Assumptions');
                }
            );
        }
        else {
            AssumptionModalService.openExternalAssumptionModal();
        }
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
* @name Metric update
* @module metricapp
* @requires $scope
* @requires $location
* @description
*
* Realizes the control layer for `metric.view`.
************************************************************************************/
angular.module('metricapp')

.controller('MetricPageController', MetricPageController);

MetricPageController.$inject = ['$scope','$filter','$routeParams', '$location','MetricService','AuthService','$window','FlashService'];

function MetricPageController($scope,$filter,$routeParams, $location, MetricService,AuthService, $window,FlashService) {
   var vm = this;
   // this is for the scrolling
   $('body').removeClass('modal-open');

   vm.loading = true;
   vm.modifying = false;

   vm.canIUpdateVar = false;
   vm.isExpert= false;
   vm.canIApprove=false;
   vm.canIRequestChange=false;
   vm.canISendForApproval=false;


   vm.listOfSet=[{value:'integers', option:'Integers'},{value:'reals',option:'Reals'}];
   vm.listOfScaleType = [{value:'nominalScale', option:'Nominal Scale'},{value:'ordinalScale',option:'Ordinal Scale'},{value:'intervalScale',option:'Interval Scale'},{value:'ratioScale',option:'Ratio Scale'},{value:'absoluteScale',option:'Absolute Scale'}];

   vm.labelsForState = [
      {state:'OnUpdate',label: "label label-primary label-form"},
      {state:'Pending',label: "label label-default label-form"},
      {state:'Created',label: "label label-default label-form"},
      {state:'Approved',label: "label label-warning label-form"},
      {state:'Rejected',label: "label label-danger label-form"}];




      vm.copyDialogToModel=copyDialogToModel;
      vm.pushIfNotExists=pushIfNotExists;
      vm.submitMetric=submitMetric;
      vm.setLabelState = setLabelState;
      vm.setRights = setRights;
      vm.goToRead = goToRead;
      vm.goToModify = goToModify;
      vm.sendForApproval = sendForApproval;
      vm.changeRequest = changeRequest;
      vm.approve = approve;
      vm.reject = reject;

      _selectMetricToView();



      /********************************************************************************
      * @ngdoc method
      * @name initMetric
      * @description
      * This function triggers other function when a metric is loaded
      ********************************************************************************/
      function initMetric(){
         vm.modifying=false;
         vm.copyDialogToModel();
         vm.setLabelState();
         vm.setRights();
      }

      /********************************************************************************
      * @ngdoc method
      * @name _selectMetricToView
      * @description
      * This function checks that in the url there's param id.
      *If id is specified, the page is loaded with the metric with id specified.
      * Otherwise page is loaded with metric in MetricService
      ********************************************************************************/
      function _selectMetricToView(){
         if (!$routeParams.metricid) {
             $location.path('/metrics');
         }
         vm.currMetricId = {
             id: $routeParams.metricid
         };
            MetricService.getById(vm.currMetricId.id).then(
               function(data){
                  vm.loadedMetric = data.metricsDTO[0];
                  vm.loading=false;

                  initMetric();
               },function(data){
                  vm.error = true;
               }
            );

      }



      function copyDialogToModel(){
         vm.newMetric =angular.copy(vm.loadedMetric);

      }
      /********************************************************************************
      * @ngdoc method
      * @name pushIfNotExists
      * @description
      * This function takes an element el, typically a string.
      * Firstly it checks that el is not null and el is not already in array.
      * Then, if it is not too long or too short it pushes el to array.
      ********************************************************************************/
      function pushIfNotExists(el, array){
         if(array.indexOf(el)==-1 && !angular.isUndefined(el)){
            if(el.length>1 && el.length<31){
               array.push(el);
            }
         }
      }

      function setLabelState(){
         vm.stateLabel = $filter('filter')(vm.labelsForState, function (d) {return d.state == vm.newMetric.metadata.state;})[0].label;
      }





      /********************************************************************************
      * @ngdoc method
      * @name submit
      * @description
      * Check if the metric in vm.dialog has metricatorId field of the logged user
      ********************************************************************************/
      function setRights(){
         vm.canIUpdateVar = false;
         vm.isExpert= false;
         vm.canIApprove=false;
         vm.canIRequestChange=false;
         vm.canISendForApproval=false;
         if(angular.isUndefined(vm.newMetric)){
            return;
         }
         var metric = vm.newMetric;

         if(metric.metricatorId == AuthService.getUser().username && AuthService.getUser().role=='METRICATOR'){
            if(metric.metadata.state=='OnUpdate'){
               vm.canIUpdateVar = true;
               vm.canISendForApproval=true;
            }
            if(metric.metadata.state=='Rejected'){
               vm.canIUpdateVar = true;
            }
            if(metric.metadata.state=='Created'){
               vm.canIUpdateVar = true;
            }
            return;
         }

         if(AuthService.getUser().role=='EXPERT'){
            vm.isExpert = true;
            if(metric.metadata.state=='OnUpdate'){
               vm.canIUpdateVar = true;
               vm.canISendForApproval=true;
            }
            if(metric.metadata.state=='Created'){
               vm.canIUpdateVar = true;
            }
            if(metric.metadata.state=='Pending'){
               vm.canIApprove = true;
            }
            if(metric.metadata.state=='Approved'){
               vm.canIRequestChange = true;
            }
            if(metric.metadata.state=='Rejected'){
               vm.canIUpdateVar = true;
            }
         }
      }

      /********************************************************************************
      * @ngdoc method
      * @name submitMetric
      * @description
      * Submits a Metric
      ********************************************************************************/
      function submitMetric(metric) {
         console.log(metric);
         if(metric.metadata.state=='Rejected' || metric.metadata.state=='Created'){
            metric.metadata.state='OnUpdate';
         }
         MetricService.update(metric).then(
            function(message) {

               vm.newMetric = undefined;
               _selectMetricToView();

            },
            function(message) {
               vm.newMetric = undefined;
               _selectMetricToView();
            }
         );
      }

      function goToRead(){
         console.log("Go to read");
         vm.modifying=false;
         _selectMetricToView();
      }

      function goToModify(){
         console.log("Go to modify");
         vm.modifying=true;
      }

      function sendForApproval(){
         console.log("Send for approval");
         vm.newMetric.metadata.state='Pending';
         MetricService.changeState(vm.newMetric).then(
            function(message) {
               vm.goToRead();
            },
            function(message) {
               vm.goToRead();
            }
         );
      }

      function changeRequest(){
         console.log("Change Request");
         //TODO add release note
         vm.newMetric.metadata.state='OnUpdate';
         MetricService.changeState(vm.newMetric).then(
            function(message) {
               vm.goToRead();
            },
            function(message) {
               vm.goToRead();
            }
         );
      }

      function approve(){
         console.log("Approve");
         //TODO add release note
         vm.newMetric.metadata.state='Approved';
         MetricService.changeState(vm.newMetric).then(
            function(message) {
               vm.goToRead();
            },
            function(message) {
               vm.goToRead();
            }
         );
      }

      function reject(){
         console.log("Reject");
         //TODO add release note
         vm.newMetric.metadata.state='Rejected';
         MetricService.changeState(vm.newMetric).then(
            function(message) {
               vm.goToRead();
            },
            function(message) {
               vm.goToRead();
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
         MetricService.getApprovedMetrics().then(
            function(data) {
               console.log('SUCCESS GET APPROVED METRICS');
               console.log(data.metricsDTO);
               vm.externalloadedMetric = data.metricsDTO;

            },
            function(data) {
            }
         );
      }


      function cancelSubmit() {
         $location.path('/measurementgoal');
      }

      function setMeasurementGoalDialog(measurementGoalToAssignId){
         vm.measurementGoalDialog = vm.measurementGoals[measurementGoalToAssignId];

         if(vm.measurementGoalDialog !== null){
            setOrganizationalGoalDialog(vm.measurementGoalDialog.organizatoinalGoalId);
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





   }

})();

(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name MetricsController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $filter
* @requires MetricService
*
* @description
* Realizes the control layer for `metrics.view`.
************************************************************************************/

angular.module('metricapp')

.controller('MetricsController', MetricsController);

MetricsController.$inject = ['$scope', '$location', '$filter', 'MetricService','AuthService'];

function MetricsController($scope, $location, $filter, MetricService,AuthService) {

    var vm = this;

    vm.loadMore = loadMore;
    vm.search = search;
    vm.reset=reset;
    vm.update=update;
    vm.create=create;
    vm.openModal=openModal;
    vm.goToRead=goToRead;
    vm.getLabelState = getLabelState;

    vm.labelsForState = [
       {state:'OnUpdate',label: "label label-primary label-form"},
       {state:'Pending',label: "label label-default label-form"},
       {state:'Created',label: "label label-default label-form"},
       {state:'Approved',label: "label label-warning label-form"},
       {state:'Rejected',label: "label label-danger label-form"}];

    _init();

    function loadMore() {
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.metrics = vm.metrics.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
    }

    function goToRead(id){
      console.log('go to '+'#/metrics/'+id);
      $location.path('#/metrics/'+id);
   }

    function search(query) {
        vm.buffer = $filter('orderBy')($filter('filter')(vm.data, query), vm.orderBy,true);
    }

    function reset(){
      _init();
   }


       function openModal(metric){
         vm.metricDialog=metric;
         vm.modal=true;
      }

   function _load(){
      if(vm.mine){
         if(!vm.approved){
         _loadMyMetrics();
      }else{
         _loadMyApprovedMetrics();
      }
      }
      else{
         if(!vm.approved){
         _loadAllMetrics();
      }else{
         _loadAllApprovedMetrics();
      }
      }
   }

    function _loadAllMetrics() {
        vm.loading = true;
        vm.success = false;
        MetricService.getAll().then(
            function(resolve) {
                vm.data = angular.copy(resolve.metricsDTO);
                vm.buffer = $filter('orderBy')(vm.data, vm.orderBy,true);
                vm.success = true;
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;}
        );
  }

  function _loadMyMetrics() {
     vm.loading = true;
     vm.success = false;
     MetricService.getAllMine().then(
          function(resolve) {
              vm.data = angular.copy(resolve.metricsDTO);
              vm.buffer = $filter('orderBy')(vm.data, vm.orderBy,true);
              vm.success = true;
          },
          function(reject) {
              vm.errmsg = reject.errmsg;
              vm.success = false;
          }
     ).finally(function() {
          vm.loading = false;
     });
}

function _loadAllApprovedMetrics() {
    vm.loading = true;
    vm.success = false;
    MetricService.getAllApproved().then(
        function(resolve) {
            vm.data = [];
            vm.data = angular.copy(resolve.metricsDTO);
            vm.buffer = $filter('orderBy')(vm.data, vm.orderBy,true);
            vm.success = true;
        },
        function(reject) {
            vm.errmsg = reject.errmsg;
            vm.success = false;
        }
    ).finally(function() {
        vm.loading = false;
    });
}

function _loadMyApprovedMetrics() {
 vm.loading = true;
 vm.success = false;
 MetricService.getAllApproved().then(
      function(resolve) {
         vm.data = [];
          var temp = angular.copy(resolve.metricsDTO);
          for (var m in temp){
             if (temp[m].metricatorId == vm.user){
                vm.data.push(angular.copy(temp[m]));
             }
          }
          vm.buffer = $filter('orderBy')(vm.data, vm.orderBy,true);
          vm.success = true;
      },
      function(reject) {
          vm.errmsg = reject.errmsg;
          vm.success = false;
      }
 ).finally(function() {
      vm.loading = false;
 });
}

function create() {
 MetricService.create().then(
      function(resolve) {

      },
      function(reject) {

      }
 ).finally(function() {
      vm.update();
 });
}


  function update(){
     _load();
     vm.search(vm.query);
 }

    function _init() {
        vm.userId = AuthService.getUser().username;
        vm.role = AuthService.getUser().role;
        vm.metricator=false;
        if(vm.role == 'METRICATOR'){
           vm.metricator=true;
        }
        vm.loading = true;
        vm.success = true;
        vm.errmsg = null;
        vm.data = [];
        vm.buffer = [];
        vm.metrics = [];
        vm.mine=false;
        vm.modal=false;
        vm.idx = 0;
        vm.step = 9;
        vm.query = '';
        vm.approved=false;
        vm.orderBy = 'metadata.lastVersionDate';
        if(vm.role=='METRICATOR'){
           vm.mine=true;
        }
        _load();
        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.metrics = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });
    }

    function getLabelState(state){
      return $filter('filter')(vm.labelsForState, function (d) {return d.state == state;})[0].label;
    }

}

})();

/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 15:53:20
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-17 17:28:36
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

    vm.states = [STATES.ONUPDATEENDPOINT, STATES.ONUPDATEWAITING];
    //vm.measurementGoals = [undefined,undefined];
    vm.measurementGoals = [];
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
    //vm.sendForApproval = sendForApproval;
    //vm.getMeasurementGoals = getMeasurementGoals;
    //vm.getMeasurementGoalsByState = getMeasurementGoalsByState;
    vm.getMeasurementGoalsBy = getMeasurementGoalsBy;
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
    /*function getMeasurementGoalsByState(index){
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
    };*/

    /********************************************************************************
    * @ngdoc method
    * @name _getMeasurementGoals
    * @description
    * Get active measurement goals for a metricator.
    ********************************************************************************/
    function _getMeasurementGoals(){
        //for (var i=0; i<vm.states.length; i++){
        //    getMeasurementGoalsByState(i);
        //}
        MeasurementGoalService.getMyMeasurementGoals().then(
            function(data) {
                console.log(data.measurementGoals);
                //vm.results.measurementGoals = data.measurementGoals;
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
        vm.loading = true;
        console.log("Inside getMeasurementGoalsBy");
        if (keyword != null && field != null){
            MeasurementGoalService.getMeasurementGoalsBy(keyword,field).then(
                function(data) {
                    console.log(data.measurementGoals);
                    vm.measurementGoals = data.measurementGoals;
                    if(vm.measurementGoals.length === 0)
                        $window.alert(data.error);
                    vm.loading = false;
                },
                function(data) {
                    alert('Error retriving Measurement Goals');
                    vm.loading = false;
                }
            );
        }
        else
            $window.alert("You must enter keyword and field");
            vm.loading = false;
    }

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get active metrics for a metricator.
    ********************************************************************************/
    /*function getMetrics(){
         MetricService.getMetrics().then(
            function(data) {
                console.log(data.metricsDTO);
                vm.results.metrics = data.metricsDTO;
            },
            function(data) {
                alert('Error retriving Metrics');
            }
        );
    };*/

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

    function setMeasurementGoalDialog(measurementGoalToAssignId){
        //vm.measurementGoalDialog = vm.measurementGoals[parentIndex][measurementGoalToAssignId];
        vm.measurementGoalDialog = vm.measurementGoals[measurementGoalToAssignId];
        //var toSearchId = vm.measurementGoals[parentIndex][measurementGoalToAssignId].metadata.id;
        var toSearchId = vm.measurementGoals[measurementGoalToAssignId].metadata.id;
        var doubleInCache = false;

        for (var t=0, length = vm.modalIds.length; t<length; t++){
            if (vm.modalIds[t][0] === toSearchId){
                //Send to MeasurementGoalService to open a modal
                MeasurementGoalService.toUpdateMeasurementGoal(vm.modalIds[t][1]);
                MeasurementGoalModalService.openMeasurementGoalModal();
                doubleInCache = true;
                break;
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
    /*function sendForApproval(){

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
    }*/

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
* @name MGoalController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $routeParams
* @requires MGoalService
*
* @description
* Realizes the control layer for `mgoal.view` and `update-mgoal.view`.
************************************************************************************/

angular.module('metricapp')

.controller('MGoalController', MGoalController);

MGoalController.$inject = ['$scope', '$location', '$routeParams', 'MGoalService'];

function MGoalController($scope, $location, $routeParams, MGoalService) {

    var vm = this;

    _init();

    function _loadMGoal(goalid) {
        vm.loading = true;
        vm.success = false;
        MGoalService.getById(goalid).then(
            function(resolve) {
                vm.currMGoal = angular.copy(resolve.mgoal);
                vm.updtMGoal = angular.copy(vm.currMGoal);
                vm.success = true;
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        if (!$routeParams.goalid) {
            $location.path('/mgoals');
            return;
        }
        vm.currMGoal = {
            id: $routeParams.goalid
        };
        _loadMGoal(vm.currMGoal.id);
    }
}

})();

(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name MGoalsController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $filter
* @requires MGoalService
*
* @description
* Realizes the control layer for `mgoals.view`.
************************************************************************************/

angular.module('metricapp')

.controller('MGoalsController', MGoalsController);

MGoalsController.$inject = ['$scope', '$location', '$filter', 'MGoalService'];

function MGoalsController($scope, $location, $filter, MGoalService) {

    var vm = this;

    vm.loadMore = loadMore;
    vm.search = search;

    _init();

    function loadMore() {
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.mgoals = vm.mgoals.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
    }

    function search(query) {
        vm.buffer = $filter('orderBy')($filter('filter')(vm.data, query), vm.orderBy);
    }

    function _loadAllMGoals() {
        vm.loading = true;
        vm.success = false;
        MGoalService.getAll().then(
            function(resolve) {
                vm.data = angular.copy(resolve.mgoals);
                vm.buffer = $filter('orderBy')(vm.data, vm.orderBy);
                vm.success = true;
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
  }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.data = [];
        vm.buffer = [];
        vm.mgoals = [];
        vm.idx = 0;
        vm.step = 4;
        vm.query = '';
        vm.orderBy = 'name';
        _loadAllMGoals();
        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.mgoals = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });
    }

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
* @Last Modified time: 2016-07-17 15:09:27
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
* @name NotificationsController
* @module metricapp
* @requires $scope
* @requires $rootScope
* @requires $location
* @requires $filter
* @requires NotificationService
* @requires UserService
* @requires NOTIFICATION_EVENTS
*
* @description
* Realizes the control layer for `notifications.view`.
************************************************************************************/

angular.module('metricapp')

.controller('NotificationsController', NotificationsController);

NotificationsController.$inject = ['$scope', '$rootScope', '$location', '$filter', 'NotificationService', 'UserService', 'AuthService', 'NOTIFICATION_EVENTS', 'AUTH_EVENTS'];

function NotificationsController($scope, $rootScope, $location, $filter, NotificationService, UserService, AuthService, NOTIFICATION_EVENTS, AUTH_EVENTS) {

    var vm = this;

    vm.loadMore = loadMore;
    vm.search = search;

    vm.setRead = setRead;
    vm.setAllRead = setAllRead;
    vm.removeNews = removeNews;

    _init();

    function setRead(notificationid) {
        for (var i = 0; i < vm.buffer.length; i++) {
            var notification = vm.buffer[i];
            if (notification.id === notificationid) {
                if (!notification.read) {
                    notification.read = true;
                    vm.toread --;
                }
            }
        }
        NotificationService.setReadById(notificationid);
        $rootScope.$broadcast(NOTIFICATION_EVENTS.SET_READ, notificationid);
    }

    function setAllRead() {
        vm.buffer.forEach(function(notification) {
            notification.read = true;
        });
        vm.toread = 0;
        vm.news = 0;
        NotificationService.setAllRead();
        $rootScope.$broadcast(NOTIFICATION_EVENTS.ALL_READ);
    }

    function removeNews() {
        vm.news = 0;
    }

    function loadMore() {
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.notifications = vm.notifications.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
    }

    function search(query) {
        vm.buffer = $filter('orderBy')($filter('filter')(vm.data, query), vm.orderBy);
    }

    function _loadAllNotifications() {
        vm.loading = true;
        vm.success = false;
        NotificationService.getAll().then(
            function(resolve) {
                var notifications = resolve.notifications;
                vm.toread = resolve.toread;
                vm.news = resolve.news;
                notifications.forEach(function(notification) {
                    vm.data.push(notification);
                });
                vm.buffer = $filter('orderBy')(vm.data, vm.orderBy);
                vm.success = true;
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.data = [];
        vm.buffer = [];
        vm.notifications = [];
        vm.idx = 0;
        vm.step = 2;
        vm.query = '';
        vm.orderBy = '-ts_create';
        _loadAllNotifications();
        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.notifications = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });
        $scope.$on(NOTIFICATION_EVENTS.ALL_READ, function() {
            vm.buffer.forEach(function(notification) {
                notification.read = true;
            });
            vm.toread = 0;
        });
        $scope.$on(NOTIFICATION_EVENTS.SET_READ, function(event, notificationid) {
            for (var i = 0; i < vm.buffer.length; i++) {
                var notification = vm.buffer[i];
                if (notification.id === notificationid) {
                    if (!notification.read) {
                        notification.read = true;
                        vm.toread --;
                    }
                }
            }
        });
    }

}

})();

(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name NotificationsWidgetController
* @module metricapp
* @requires $scope
* @requires $rootScope
* @requires $location
* @requires $filter
* @requires NotificationService
* @requires UserService
* @requires AuthService
* @requires AUTH_EVENTS
* @requires NOTIFICATION_EVENTS
*
* @description
* Realizes the control layer for `notifications.widget.view`.
************************************************************************************/

angular.module('metricapp')

.controller('NotificationsWidgetController', NotificationsWidgetController);

NotificationsWidgetController.$inject = ['$scope', '$rootScope', '$location', '$filter', 'NotificationService', 'UserService', 'AuthService', 'AUTH_EVENTS', 'NOTIFICATION_EVENTS'];

function NotificationsWidgetController($scope, $rootScope, $location, $filter, NotificationService, UserService, AuthService, AUTH_EVENTS, NOTIFICATION_EVENTS) {

    var vm = this;

    vm.loadMore = loadMore;
    vm.search = search;

    vm.setRead = setRead;
    vm.setAllRead = setAllRead;
    vm.removeNews = removeNews;

    _init();

    function setRead(notificationid) {
        for (var i = 0; i < vm.buffer.length; i++) {
            var notification = vm.buffer[i];
            if (notification.id === notificationid) {
                if (!notification.read) {
                    notification.read = true;
                    vm.toread --;
                }
            }
        }
        NotificationService.setReadById(notificationid);
        $rootScope.$broadcast(NOTIFICATION_EVENTS.SET_READ, notificationid);
    }

    function setAllRead() {
        vm.buffer.forEach(function(notification) {
            notification.read = true;
        });
        vm.toread = 0;
        vm.news = 0;
        NotificationService.setAllRead();
        $rootScope.$broadcast(NOTIFICATION_EVENTS.ALL_READ);
    }

    function removeNews() {
        vm.news = 0;
    }

    function loadMore() {
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.notifications = vm.notifications.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
    }

    function search(query) {
        vm.buffer = $filter('orderBy')($filter('filter')(vm.data, query), vm.orderBy);
    }

    function _loadAllNotifications() {
        vm.loading = true;
        vm.success = false;
        NotificationService.getAll().then(
            function(resolve) {
                var notifications = resolve.notifications;
                vm.toread = resolve.toread;
                vm.news = resolve.news;
                var authors = [];
                notifications.forEach(function(notification) {
                    authors.push(notification.author);
                });
                return UserService.getInArray(authors).then(
                    function(resolve) {
                        var users = resolve.users;
                        notifications.forEach(function(notification) {
                            var author = notification.author;
                            notification.author = angular.copy(users[author]);
                            if (notification.author) {
                                vm.data.push(notification);
                            }
                        });
                        vm.buffer = $filter('orderBy')(vm.data, vm.orderBy);
                        vm.success = true;
                    },
                    function(reject) {
                        vm.errmsg = reject.errmsg;
                        vm.success = false;
                    }
                );
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.data = [];
        vm.buffer = [];
        vm.notifications = [];
        vm.idx = 0;
        vm.step = 3;
        vm.query = '';
        vm.orderBy = '-ts_create';
        if (AuthService.isLogged()) {
            _loadAllNotifications();
        }
        $scope.$on(AUTH_EVENTS.LOGIN_SUCCESS, function() {
            _loadAllNotifications();
        });
        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.notifications = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });
        $scope.$on(NOTIFICATION_EVENTS.ALL_READ, function() {
            vm.buffer.forEach(function(notification) {
                notification.read = true;
            });
            vm.toread = 0;
            vm.news = 0;
        });
        $scope.$on(NOTIFICATION_EVENTS.SET_READ, function(event, notificationid) {
            for (var i = 0; i < vm.buffer.length; i++) {
                var notification = vm.buffer[i];
                if (notification.id === notificationid) {
                    if (!notification.read) {
                        notification.read = true;
                        vm.toread --;
                    }
                }
            }
        });
    }

}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name OrganizationController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $filter
* @requires UserService
*
* @description
* Realizes the control layer for `organization.view`.
************************************************************************************/

angular.module('metricapp')

.controller('OrganizationController', OrganizationController);

OrganizationController.$inject = ['$scope', '$location', '$filter', 'UserService'];

function OrganizationController($scope, $location, $filter, UserService) {

    var vm = this;

    vm.loadMore = loadMore;
    vm.search = search;

    _init();

    function loadMore() {
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.users = vm.users.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
    }

    function search(query) {
        vm.buffer = $filter('orderBy')($filter('filter')(vm.data, query), vm.orderBy);
    }

    function _loadAllUsers() {
        vm.loading = true;
        vm.success = false;
        UserService.getAll().then(
            function(resolve) {
                vm.data = angular.copy(resolve.users);
                vm.buffer = $filter('orderBy')(vm.data, vm.orderBy);
                vm.success = true;
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
  }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.data = [];
        vm.buffer = [];
        vm.users = [];
        vm.idx = 0;
        vm.step = 4;
        vm.query = '';
        vm.orderBy = 'firstname';
        _loadAllUsers();
        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.users = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });
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
* @requires $routeParams
* @requires QuestionService
*
* @description
* Realizes the control layer for `question.view` and `update-question.view`.
************************************************************************************/

angular.module('metricapp')

.controller('QuestionController', QuestionController);

QuestionController.$inject = ['$scope', '$location', '$routeParams', 'QuestionService'];

function QuestionController($scope, $location, $routeParams, QuestionService) {

    var vm = this;

    _init();

    function _loadQuestion(questionid) {
        vm.loading = true;
        vm.success = false;
        QuestionService.getById(questionid).then(
            function(resolve) {
                vm.currQuestion = angular.copy(resolve.question);
                vm.updtQuestion = angular.copy(vm.currQuestion);
                vm.success = true;
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        if (!$routeParams.questionid) {
            $location.path('/questions');
        }
        vm.currQuestion = {
            id: $routeParams.questionid
        };
        _loadQuestion(vm.currQuestion.id);
    }
}

})();

(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name QuestionsController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $filter
* @requires QuestionService
*
* @description
* Realizes the control layer for `questions.view`.
************************************************************************************/

angular.module('metricapp')

.controller('QuestionsController', QuestionsController);

QuestionsController.$inject = ['$scope', '$location', '$filter', 'QuestionService'];

function QuestionsController($scope, $location, $filter, QuestionService) {

    var vm = this;

    vm.loadMore = loadMore;
    vm.search = search;

    _init();

    function loadMore() {
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.questions = vm.questions.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
    }

    function search(query) {
        vm.buffer = $filter('orderBy')($filter('filter')(vm.data, query), vm.orderBy);
    }

    function _loadAllUsers() {
        vm.loading = true;
        vm.success = false;
        QuestionService.getAll().then(
            function(resolve) {
                vm.data = angular.copy(resolve.questions);
                vm.buffer = $filter('orderBy')(vm.data, vm.orderBy);
                vm.success = true;
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
  }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.data = [];
        vm.buffer = [];
        vm.questions = [];
        vm.idx = 0;
        vm.step = 4;
        vm.query = '';
        vm.orderBy = 'name';
        _loadAllQuestions();
        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.questions = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });
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

.controller('QuestionDetailsCtrl', QuestionDetailsCtrl);

QuestionDetailsCtrl.$inject = ['$location', '$window', 'QuestionStorageFactory', 'QuestionsCrudFactory', '$routeParams'];

function QuestionDetailsCtrl($location, $window, QuestionStorageFactory, QuestionsCrudFactory, $routeParams) {

        var ctrl = this;
        ctrl.questionDialog = {};

        QuestionsCrudFactory.get([$routeParams.questionId], ["id"]).then(
        		function(data){
        			console.log(data);
        			ctrl.questionDialog = data.data.questionList[0];
        		},

        		function(data){
        			$window.alert("Error retrieving question");
        		}
        	);
            
    }

})();

(function() {'use strict';

	angular.module('metricapp')

	.controller('QuestionerCtrl', QuestionerCtrl);

	QuestionerCtrl.$inject = ['AuthService', 'QuestionStorageFactory', 'QuestionsCrudFactory', '$window'];

	function QuestionerCtrl(AuthService, QuestionStorageFactory, QuestionsCrudFactory, $window) {

	    var ctrl = this;    

	    ctrl.user = AuthService.getUser();
	    QuestionStorageFactory.setQuestioner(ctrl.user);

	    ctrl.date = new Date();

	    ctrl.messagesInbox = 12;

	    ctrl.onUpdateQuestions = -1;
	    ctrl.approvedQuestions = -1;
	    ctrl.rejectedQuestions = -1;

	    ctrl.approvedMeasurementGoals = -1;
	    ctrl.waitingForQuestionsMeasurementGoals = -1;

	    ctrl.countQuestionsOnUpdate = countQuestionsOnUpdate;
	    ctrl.countQuestionsApproved = countQuestionsApproved;
	    ctrl.countQuestionsRejected = countQuestionsRejected;

	    ctrl.countMeasurmentGoalsApproved = countMeasurmentGoalsApproved;
	    ctrl.countMeasurmentGoalsWaitingForQuestion = countMeasurmentGoalsWaitingForQuestion;

	    countQuestionsOnUpdate();
	    countQuestionsApproved();
	    countQuestionsRejected();

	    countMeasurmentGoalsWaitingForQuestion();
	    countMeasurmentGoalsApproved();

	    function countQuestionsOnUpdate(){
	        QuestionsCrudFactory.count(QuestionsCrudFactory.STATES.ONUPDATE, QuestionStorageFactory.getQuestioner().username).then( 
	            function(data) {
	                ctrl.onUpdateQuestions = data.data.count;
	                //$window.alert(JSON.stringify(ctrl.onUpdateQuestions));
	            },
	            function(data) {
	                alert('Error retrieving onUpdate Questions');
	            }
	        );
   	 	}

   	 	function countQuestionsApproved(){
	        QuestionsCrudFactory.count(QuestionsCrudFactory.STATES.APPROVED, QuestionStorageFactory.getQuestioner().username).then( 
	            function(data) {
	                ctrl.approvedQuestions = data.data.count;
	                //$window.alert(JSON.stringify(ctrl.approvedQuestions));
	            },
	            function(data) {
	                alert('Error retrieving approved Questions');
	            }
	        );
   	 	}

   	 	function countQuestionsRejected(){
	        QuestionsCrudFactory.count(QuestionsCrudFactory.STATES.REJECTED, QuestionStorageFactory.getQuestioner().username).then( 
	            function(data) {
	                ctrl.rejectedQuestions = data.data.count;
	                //$window.alert(JSON.stringify(ctrl.rejectedQuestions));
	            },
	            function(data) {
	                alert('Error retrieving rejected Questions');
	            }
	        );
   	 	}

   	 	function countMeasurmentGoalsApproved(){
   	 		
 			QuestionsCrudFactory.countMeasurementGoalsByQuestionerIdAndState(
 				QuestionStorageFactory.getQuestioner().username, QuestionsCrudFactory.STATES.APPROVED).then(
	            function(response) {
	                console.log('SUCCESS GET MEASUREMENT GOALS');
	                console.log(response);
	                ctrl.approvedMeasurementGoals = response.data.count;
	            },
	            function(response) {
	                console.log('FAILURE GET MEASUREMENT GOALS');
	                console.log(response);
	            }
	        );
   	 	}

   	 	function countMeasurmentGoalsWaitingForQuestion(){
   	 		QuestionsCrudFactory.countMeasurementGoalsByQuestionerIdAndState(
   	 			QuestionStorageFactory.getQuestioner().username, QuestionsCrudFactory.STATES.ONUPDATEWAITING).then(
	            function(response) {
	                console.log('SUCCESS GET MEASUREMENT GOALS');
	                console.log(response);
	                ctrl.waitingForQuestionsMeasurementGoals = response.data.count;
	            },
	            function(response) {
	                console.log('FAILURE GET MEASUREMENT GOALS');
	                console.log(response);
	            }
	        );
   	 	}

}

})();
(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name TeamAnalyticsController
* @module metricapp
* @requires $location
* @requires $routeParams
* @requires TeamService
* @requires TeamAnalyticsService
*
* @description
* Realizes the control layer for `team/analytics.view`.
************************************************************************************/

angular.module('metricapp')

.controller('TeamAnalyticsController', TeamAnalyticsController);

TeamAnalyticsController.$inject = ['$location', '$routeParams', 'TeamService', 'TeamAnalyticsService','TEAM_ANALYTICS'];

function TeamAnalyticsController($location, $routeParams, TeamService, TeamAnalyticsService,TEAM_ANALYTICS) {

    var vm = this;

    vm.TEAM_ANALYTICS = TEAM_ANALYTICS;

    _init();

    function _loadTeamAnalytics(teamid) {
        vm.loading = true;
        vm.success = false;
        TeamService.getById(teamid).then(
            function(resolve) {
                vm.currTeam = angular.copy(resolve.team);
                return TeamAnalyticsService.getAll(teamid).then(
                    function(resolve) {
                        vm.currTeam.analytics = angular.copy(resolve.analytics);
                        vm.success = true;
                    },
                    function(reject) {
                        vm.errmsg = reject.errmsg;
                        vm.success = false;
                    }
                );
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.currTeam = {
            id: $routeParams.teamid
        };
        _loadTeamAnalytics(vm.currTeam.id);
    }

}

})();

(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name TeamController
* @module metricapp
* @requires $scope
* @requires $rootScope
* @requires $location
* @requires $routeParams
* @requires $q
* @requires TeamService
* @requires UserService
* @requires ROLES
* @requires TEAM_EVENTS
*
* @description
* Realizes the control layer for `team.view`.
************************************************************************************/

angular.module('metricapp')

.controller('TeamController', TeamController);

TeamController.$inject = ['$scope', '$rootScope', '$location', '$routeParams', '$q',
'TeamService', 'UserService', 'ROLES', 'TEAM_EVENTS'];

function TeamController($scope, $rootScope, $location, $routeParams, $q,
    TeamService, UserService, ROLES, TEAM_EVENTS) {

    var vm = this;

    vm.updateTeam = updateTeam;
    vm.removeMember = removeMember;

    _init();

    function updateTeam(team) {
        vm.loading = true;
        vm.success = false;
        TeamService.update(team).then(
            function(resolve) {
                vm.currTeam = angular.copy(resolve.team);
                var teamid = resolve.team.teamid;
                vm.success = true;
                $location.path('/teams/' + teamid);
                $rootScope.$broadcast(TEAM_EVENTS.UPDATE_SUCCESS);
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
                $rootScope.$broadcast(TEAM_EVENTS.UPDATE_FAILURE);
            }
        )
        .finally(function(){
            vm.loading = false;
        });
    }

    function removeMember(username, role) {
        if (role === ROLES.QUESTIONER) {
            delete vm.updtTeam.questioners[username];
        } else if (role === ROLES.METRICATOR) {
            delete vm.updtTeam.metricator[username];
        }
    }

    function _loadTeam(teamid) {
        vm.loading = true;
        vm.success = false;
        TeamService.getById(teamid).then(
            function(resolve) {
                vm.currTeam = angular.copy(resolve.team);
                var meta={
                    expert:UserService.getById(vm.currTeam.expert),
                    questioners:UserService.getInArray(vm.currTeam.questioners),
                    metricators:UserService.getInArray(vm.currTeam.metricators)
                };
                return $q.all(meta).then(
                    function(resolve){
                        vm.currTeam.expert=angular.copy(resolve.expert.user);
                        vm.currTeam.questioners=angular.copy(resolve.questioners.users);
                        vm.currTeam.metricators=angular.copy(resolve.metricators.users);
                        vm.updtTeam = angular.copy(vm.currTeam);
                        vm.num_questioners = Object.keys(vm.currTeam.questioners).length;
                        vm.num_metricators = Object.keys(vm.currTeam.metricators).length;
                        vm.success=true;
                    },
                    function(reject){
                        vm.errmsg = reject.errmsg;
                        vm.success = false;
                    }
                );
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.orderBy = 'firstname';
        vm.currTeam = {
            id: $routeParams.teamid
        };
        _loadTeam(vm.currTeam.id);
    }

}

})();

(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name TeamsController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $filter
* @requires TeamService
* @requires UserService
*
* @description
* Realizes the control layer for `teams.view`.
************************************************************************************/

angular.module('metricapp')

.controller('TeamsController', TeamsController);

TeamsController.$inject = ['$scope', '$location', '$filter', 'TeamService', 'UserService'];

function TeamsController($scope, $location, $filter, TeamService, UserService) {

    var vm = this;

    _init();

    vm.loadMore = loadMore;
    vm.search = search;

    _init();

    function loadMore() {
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.teams = vm.teams.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
    }

    function search(query) {
        vm.buffer = $filter('orderBy')($filter('filter')(vm.data, query), vm.orderBy);
    }

    function _loadAllTeams() {
        vm.loading = true;
        vm.success = false;
        TeamService.getAll().then(
            function(resolve) {
                vm.data = angular.copy(resolve.teams);
                vm.buffer = $filter('orderBy')(vm.data, vm.orderBy);
                vm.success = true;
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.data = [];
        vm.buffer = [];
        vm.teams = [];
        vm.idx = 0;
        vm.step = 1;
        vm.query = '';
        vm.orderBy = 'name';
        _loadAllTeams();
        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.teams = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });
    }
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name UserAnalyticsController
* @module metricapp
* @requires $location
* @requires $routeParams
* @requires UserService
* @requires UserAnalyticsService
*
* @description
* Realizes the control layer for `user/analytics.view`.
************************************************************************************/

angular.module('metricapp')

.controller('UserAnalyticsController', UserAnalyticsController);

UserAnalyticsController.$inject = ['$location', '$routeParams', 'UserService', 'UserAnalyticsService','USER_ANALYTICS'];

function UserAnalyticsController($location, $routeParams, UserService, UserAnalyticsService,USER_ANALYTICS) {

    var vm = this;

    vm.USER_ANALYTICS = USER_ANALYTICS;

    _init();

    function _loadUserAnalytics(username) {
        vm.loading = true;
        vm.success = false;
        UserService.getById(username).then(
            function(resolve) {
                vm.currUser = angular.copy(resolve.user);
                return UserAnalyticsService.getAll(username).then(
                    function(resolve) {
                        vm.currUser.analytics = angular.copy(resolve.analytics);
                        _loadChartData();
                        vm.success = true;
                    },
                    function(reject) {
                        vm.errmsg = reject.errmsg;
                        vm.success = false;
                    }
                );
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.currUser = {
            username: $routeParams.username
        };
        _loadUserAnalytics(vm.currUser.username);
    }

    vm.chart_data = '';

    function _loadChartData() {
        vm.chart_data = vm.currUser.analytics[vm.USER_ANALYTICS.TASKS_RECORD];
    }
}

})();

(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name ProfileController
* @module metricapp
* @requires $scope
* @requires $rootScope
* @requires $location
* @requires $routeParams
* @requires UserService
* @requires AuthService
* @requires GENDERS
* @requires USER_EVENTS
* @requires AUTH_EVENTS
*
* @description
* Realizes the control layer for `profile.view` and `update-profile.view`
************************************************************************************/

angular.module('metricapp')

.controller('ProfileController', ProfileController);

ProfileController.$inject = ['$scope', '$rootScope', '$location', '$routeParams', 'UserService', 'AuthService', 'GENDERS', 'USER_EVENTS', 'AUTH_EVENTS'];

function ProfileController($scope, $rootScope, $location, $routeParams, UserService, AuthService, GENDERS, USER_EVENTS, AUTH_EVENTS) {

    var vm = this;

    vm.GENDERS = GENDERS;

    vm.show = 1;

    vm.updateProfile = updateProfile;
    vm.updatePassword = updatePassword;

    vm.projects = [
        {name: 'ISSR Project1', description:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',status: 'active',progress: 30},
        {name: 'ISSR Project2', description:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',status: 'active',progress: 65}
    ];

    _init();

    function updateProfile(user) {
        vm.loading = true;
        vm.success = false;
        UserService.update(user).then(
            function(resolve) {
                vm.currUser = angular.copy(resolve.user);
                var username = resolve.user.username;
                vm.success = true;
                $location.path('/profile/' + username);
                $rootScope.$broadcast(USER_EVENTS.UPDATE_SUCCESS, vm.currUser);
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
                $rootScope.$broadcast(USER_EVENTS.UPDATE_FAILURE);
            }
        )
        .finally(function(){
            vm.loading = false;
        });
    }

    function updatePassword(oldPassword, newPassword) {
        vm.loading = true;
        vm.success = false;
        AuthService.editPassword(oldPassword, newPassword).then(
            function(resolve) {
                $rootScope.$broadcast(AUTH_EVENTS.PASSWORD_UPDATE_SUCCESS);
                return AuthService.logout().then(
                    function(resolve) {
                        vm.success = true;
                        $rootScope.$broadcast(AUTH_EVENTS.LOGOUT_SUCCESS);
                        $location.path('/');
                    },
                    function(reject) {
                        vm.errmsg = reject.errmsg;
                        vm.success = false;
                        $rootScope.$broadcast(AUTH_EVENTS.LOGOUT_FAILURE);
                        $location.path('/');
                    }
                );
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                alert(vm.errmsg);
                $rootScope.$broadcast(AUTH_EVENTS.PASSWORD_UPDATE_FAILURE);
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _loadUser(username) {
        vm.loading = true;
        vm.success = false;
        UserService.getById(username).then(
            function(resolve) {
                vm.currUser = angular.copy(resolve.user);
                vm.updtUser = angular.copy(vm.currUser);
                vm.success = true;
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                alert(vm.errmsg);
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        if (!$routeParams.username) {
            var authuser = AuthService.getUser();
            if (authuser) {
                $location.path('/profile/' + authuser.username);
            } else {
                $location.path('/');
            }
            return;
        }
        vm.currUser = {
            username: $routeParams.username
        };
        _loadUser(vm.currUser.username);
        $scope.$on(USER_EVENTS.UPDATE_SUCCESS, function(event, user) {
            alert('ProfileController:USER_EVENTS.UPDATE_SUCCESS');
            vm.currUser = angular.copy(user);
        });
        $scope.$on(USER_EVENTS.UPDATE_FAILURE, function(event) {
            alert('ProfileController:USER_EVENTS.UPDATE_FAILURE');
            _loadUser(vm.currUser.username);
        });
    }

}

})();

/*
* @Author: alessandro.fazio
* @Date:   2016-07-12 23:08:35
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-17 17:59:58
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

MetricatorDashboardController.$inject = ['$scope', '$location','MetricService','MeasurementGoalService','$window', 'STATES'];

function MetricatorDashboardController($scope, $location, MetricService, MeasurementGoalService, $window, STATES) {

    var vm = this;
    
    vm.date = new Date();

    vm.measurementGoalStates = [
    	STATES.APPROVED,
    	STATES.ONUPDATEENDPOINT,
        STATES.PENDING
    ];

    vm.metricStates = [
        STATES.APPROVED,
        STATES.ONUPDATE,
        STATES.PENDING
    ];

    vm.measurementGoals = {};

    vm.metrics = {};

    _getMeasurementGoals();
    _getMetrics();
    _init();

    /********************************************************************************
    * @ngdoc method
    * @name getMeasurementGoals
    * @description
    * Get measurement goals for a metricator.
    ********************************************************************************/
    function _getMeasurementGoals(){
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
    function _getMetrics(){
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
* @requires $rootScope
* @requires $scope
* @requires $location
* @requires ActionService
* @requires AUTH_EVENTS
*
* @description
* Realizes the control layer for `sidebar.directive`.
************************************************************************************/

angular.module('metricapp')

.controller('SidebarController', SidebarController);

SidebarController.$inject = ['$rootScope', '$scope', '$location','ActionService', 'AUTH_EVENTS'];

function SidebarController($rootScope, $scope, $location, ActionService, AUTH_EVENTS) {

    var vm = this;

    _init();

    function _render() {
        if ($rootScope.globals && $rootScope.globals.user) {
            vm.actions = ActionService.getActionsForRole($rootScope.globals.user.role);
        } else {
            vm.actions = [];
        }
    }

    function _init() {
        _render();
        $scope.$on(AUTH_EVENTS.LOGIN_SUCCESS, _render);
        $scope.$on(AUTH_EVENTS.LOGOUT_SUCCESS, _render);
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
* @requires AUTH_EVENTS
*
* @description
* Manages the topbar for all users.
* Realizes the control layer for {topbar.directive}.
************************************************************************************/

angular.module('metricapp')

.controller('TopbarController', TopbarController);

TopbarController.$inject = ['$scope', '$location', 'AuthService', 'AUTH_EVENTS'];

function TopbarController($scope, $location, AuthService, AUTH_EVENTS) {

    var vm = this;

    function _render() {
        if ($rootScope.globals && $rootScope.globals.user) {
            //
        } else {
            //
        }
    }

    function _init() {
        _render();
        $scope.$on(AUTH_EVENTS.LOGIN_SUCCESS, _render);
        $scope.$on(AUTH_EVENTS.LOGOUT_SUCCESS, _render);
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

.controller('QuestionerMeasurementGoalListCtrl', QuestionerMeasurementGoalListCtrl);

QuestionerMeasurementGoalListCtrl.$inject = ['$location', '$window', 'MeasurementGoalService', 
	'QuestionStorageFactory', 'QuestionerMeasurementGoalModalFactory'];

function QuestionerMeasurementGoalListCtrl($location, $window, MeasurementGoalService, QuestionStorageFactory, MeasurementGoalModalFactory) {

    var ctrl = this;

    ctrl.getMeasurementGoals = function(){
       MeasurementGoalService.getMeasurementGoalsBy(QuestionStorageFactory.getQuestioner().username, "questionerId").then(
            function(data) {
                console.log(data);
                ctrl.measurementGoals = data.measurementGoals;
            },
            function(data) {
                alert('Error retrieving Measurement Goals');
            }
        );
    };

    ctrl.open = function (index) {
        QuestionStorageFactory.setMeasurementGoal(ctrl.measurementGoals[index]);
        MeasurementGoalModalFactory.openMeasurementGoalModal();
    };

	this.getMeasurementGoals();
    

}

})();
(function() {'use strict';

angular.module('metricapp')

.controller('QuestionMeasurementGoalAddCtrl', QuestionMeasurementGoalAddCtrl);

QuestionMeasurementGoalAddCtrl.$inject = ['$location', 'QuestionsCrudFactory', 'MeasurementGoalService',
 'QuestionStorageFactory', 'QuestionModalFactory', '$window'];

function QuestionMeasurementGoalAddCtrl($location, QuestionsCrudFactory, MeasurementGoalService,
     QuestionStorageFactory, QuestionModalFactory, $window) {

    var ctrl = this;

    ctrl.questions = [];

    ctrl.mgDialog = QuestionStorageFactory.getMeasurementGoal();
    
    _init();
    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get active metrics for a metricator.
    ********************************************************************************/
    ctrl.getQuestions = function(){
         
     	QuestionsCrudFactory.get([QuestionsCrudFactory.STATES.APPROVED], ["state"]).then(
     		function(data){
     			ctrl.questions = data.data.questionList;
     		},
     		function(data){
     			$window.alert("Error retrieving question " + ctrl.mgDialog.questions[i].instance);
     		}
 		);

    };
    
    ctrl.open = function (index) {
        QuestionStorageFactory.setQuestion(ctrl.questions[index]);
        QuestionModalFactory.openQuestionModal();
    };

    ctrl.addToMeasurementGoal = function(index){

    	var i;
    	for(i=0; i<ctrl.mgDialog.questions.length; i++){
    		if(ctrl.questions[index].metadata.id == ctrl.mgDialog.questions[i].instance){
    			$window.alert("The question is already present in the Measurement Goal");
    			return; 
    		}
    	}

        var questionInstance = {
            busVersion : "",
            instance : ctrl.questions[index].metadata.id,
            objIdLocalToPhase : "",
            tags: ctrl.questions[index].metadata.tags,
            typeObj: "Question"
        };

        $window.alert("this should insert the question in the MG");
        ctrl.mgDialog.questions.push(questionInstance);
        $window.alert(JSON.stringify(ctrl.mgDialog));
        var message = MeasurementGoalService.submitMeasurementGoal(ctrl.mgDialog);

        
    };


    function _init(){
        //
    }

    this.getQuestions();
}

})();
(function() {'use strict';

angular.module('metricapp')

.controller('QuestionMeasurementGoalListCtrl', QuestionMeasurementGoalListCtrl);

QuestionMeasurementGoalListCtrl.$inject = ['$location', 'QuestionsCrudFactory', 'MeasurementGoalService',
 'QuestionStorageFactory', 'QuestionModalFactory', '$window', 'QuestionerMetricModalFactory'];

function QuestionMeasurementGoalListCtrl($location, QuestionsCrudFactory, MeasurementGoalService,
     QuestionStorageFactory, QuestionModalFactory, $window, QuestionerMetricModalFactory) {

    var ctrl = this;

    ctrl.questions = [];
    ctrl.metrics = [];

    ctrl.mgDialog = QuestionStorageFactory.getMeasurementGoal();
    
    _init();
    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get active metrics for a metricator.
    ********************************************************************************/
    ctrl.getQuestions = function(){
         
         var i;
         for(i=0; i<ctrl.mgDialog.questions.length; i++){

         	QuestionsCrudFactory.get([ctrl.mgDialog.questions[i].instance], ["id"]).then(
         		function(data){
         			ctrl.questions.push(data.data.questionList[0]);
         		},
         		function(data){
         			$window.alert("Error retrieving question " + ctrl.mgDialog.questions[i].instance);
         		}
     		);

         }
    };

    ctrl.getMetrics = function(){

        var i;
        for(i=0; i<ctrl.mgDialog.metrics.length; i++){

            //This will be the Metric Service for retrieveng them from the server
            QuestionsCrudFactory.getMetrics([ctrl.mgDialog.metrics[i].instance]).then(
                function(data){
                    ctrl.metrics.push(data.data.metricsDTO[0]);
                },
                function(data){
                    $window.alert("Error retrieving question " + ctrl.mgDialog.questions[i].instance);
                }
            );

        }

    };
    
    ctrl.openQuestion = function (index) {
        QuestionStorageFactory.setQuestion(ctrl.questions[index]);
        QuestionModalFactory.openQuestionModal();
    };

    ctrl.openMetric = function(index){
        QuestionStorageFactory.setMetric(ctrl.metrics[index]);
        QuestionerMetricModalFactory.openMetricModal();  
    };

    function _init(){
        //
    }

    ctrl.getMeasurementGoalData = function(mgId){
        var message = MeasurementGoalService.getWholeMeasurementGoalById(mgId);

        $window.alert(JSON.stringify(message.data));
        $window.alert(JSON.stringify(message.data.questions));
        $window.alert(JSON.stringify(message.data.metrics));

        ctrl.questions = message.questions;
        ctrl.metrics = message.metrics;
    };


    // this.getMeasurementGoalData(ctrl.mgDialog.metadata.id);
    this.getQuestions();
    this.getMetrics();
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

angular.module("metricapp")
.controller("QuestionCreationCtrl", QuestionCreationCtrl);

QuestionCreationCtrl.$inject = ['$window', '$http', 'QuestionsCrudFactory', 'QuestionStorageFactory', 
    'QuestionModalFactory', '$location'];

function QuestionCreationCtrl($window, $http, QuestionsCrudFactory, QuestionStorageFactory, 
    QuestionModalFactory, $location) {

    var ctrl = this;

    ctrl.question = {
        description: null,
        focus: null,
        subject: null,
        questionerId: QuestionStorageFactory.getQuestioner().username,
        metadata: {
            id: null,
            creatorId: null,
            creationDate: null,
            lastVersionDate: null,
            releaseNote: null,
            state: QuestionsCrudFactory.STATES.CREATED,
            entityType: "Question",
            tags: []
        }
    };

    ctrl.clearForm = function() {
        ctrl.question = {
            description: null,
            focus: null,
            subject: null,
            questionerId: QuestionStorageFactory.getQuestioner().username,
            metadata: {
                id: null,
                creatorId: null,
                creationDate: null,
                lastVersionDate: null,
                releaseNote: null,
                state: QuestionsCrudFactory.STATES.CREATED,
                entityType: "Question",
                tags: []
            }
        };            

        //ctrl.question.creatorId = QuestionStorageFactory.getQuestioner().username;
    };
    
    // callback for ng-click 'createNewQuestion':
    ctrl.createNewQuestion = function () {
        QuestionsCrudFactory.create(ctrl.question).then(
            function(data, status){
                $window.alert("Question Submitted!");
                QuestionStorageFactory.setQuestion(data.data.questionList[0]);
                QuestionModalFactory.openQuestionModal();
                $location.path("/home");
            },
            
            function(data, status){
                alert("Error in submitting Question");
            }
        );

    };

    ctrl.getTags = function(){
        return ctrl.question.metadata.tags.join();
    };

    ctrl.addTagToQuestion = function() {
        ctrl.question.metadata.tags.push(ctrl.newTag);
    };

    ctrl.removeTagFromQuestion = function(index){
        ctrl.question.metadata.tags.splice(index, 1);
    };
};

})();

(function() {'use strict';

angular.module('metricapp')

.controller('QuestionListCtrl', QuestionListCtrl);

QuestionListCtrl.$inject = ['AuthService', '$location', 'QuestionsCrudFactory',
 'QuestionStorageFactory', 'QuestionModalFactory', '$window'];

function QuestionListCtrl(AuthService, $location, QuestionsCrudFactory,
     QuestionStorageFactory, QuestionModalFactory, $window) {

    var ctrl = this;    

    ctrl.getQuestions = getQuestions;
    ctrl.questions = [];

    ctrl.questionDialog = null;

    ctrl.getQuestions();
    _init();

    /********************************************************************************
    * @ngdoc method
    * @name submitMeasurementGoal
    * @description
    * Get active metrics for a metricator.
    ********************************************************************************/
    function getQuestions(){
         QuestionsCrudFactory.get([QuestionStorageFactory.getQuestioner().username], ["questionerId"]).then(
            function(data) {
                console.log(data.data.questionList);
                ctrl.questions = data.data.questionList;
            },
            function(data) {
                alert('Error retrieving Questions');
            }
        );
    }

    // function countOnUpdate(){
    //     QuestionsCrudFactory.count(QuestionsCrudFactory.STATES.ONUPDATE, QuestionStorageFactory.getQuestioner().username).then( 
    //         function(data) {
    //             ctrl.count = data.data.count;
    //             $window.alert(ctrl.count);
    //         },
    //         function(data) {
    //             alert('Error retrieving Questions');
    //         }
    //     );
    // }

    ctrl.open = function (index) {
        QuestionStorageFactory.setQuestion(ctrl.questions[index]);
        QuestionModalFactory.openQuestionModal();
    };

    function _init(){
        //
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

.controller('QuestionModalCtrl', QuestionModalCtrl);

QuestionModalCtrl.$inject = ['$location', '$uibModalInstance', '$window', 'QuestionsCrudFactory', 'QuestionStorageFactory'];

function QuestionModalCtrl($location, $uibModalInstance, $window, QuestionsCrudFactory, QuestionStorageFactory) {

        var ctrl = this;

        ctrl.questionDialog = QuestionStorageFactory.getQuestion();

        ctrl.deleteQuestion = function (questionId, index) {
        //     $uibModalInstance.dismiss("closing");
        //     QuestionsCrudFactory.delete(questionId).then(
        //         function(data, status){
        //             $window.alert("deleted " + questionId);
        //             ctrl.questions.splice(index, 1);
        //         },  
                
        //         function(data, status){
        //             $window.alert(status);
        //         }
        //     );

        };

        ctrl.closeModal = function(){
            $uibModalInstance.dismiss("closing");            
        };

        ctrl.editQuestion = function(question){
            $uibModalInstance.dismiss("closing");
            QuestionStorageFactory.setQuestion(question);
            $location.path('/questionUpdate');
        };

        ctrl.sendForApproval = function(){

            $uibModalInstance.dismiss("closing");
            if(ctrl.questionDialog.metadata.state == QuestionsCrudFactory.STATES.CREATED || 
                ctrl.questionDialog.metadata.state == QuestionsCrudFactory.STATES.ONUPDATE || 
                ctrl.questionDialog.metadata.state == QuestionsCrudFactory.STATES.REJECTED){
                
                ctrl.questionDialog.metadata.state = QuestionsCrudFactory.STATES.PENDING;

                QuestionsCrudFactory.update(ctrl.questionDialog).then(
                    function(data, status){
                        $window.alert("Question sent for approval");
                        $location.path('/questionList');
                    },
                    
                    function(data, status){
                        $window.alert("Error: status " + status);
                    }
                );

            }
            else if(ctrl.questionDialog.metadata.state == QuestionsCrudFactory.STATES.APPROVED){
                $window.alert("The question has already been approved");
            }
            else{
                $window.alert("The Question cannot be sent for approval");
            }
            

        };
            
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

.controller('QuestionerMeasurementGoalModalCtrl', QuestionerMeasurementGoalModalCtrl);

QuestionerMeasurementGoalModalCtrl.$inject = ['$location', '$uibModalInstance', '$window', 'MeasurementGoalService', 'QuestionStorageFactory', 
    'QuestionsCrudFactory'];

function QuestionerMeasurementGoalModalCtrl($location, $uibModalInstance, $window, MeasurementGoalService, QuestionStorageFactory, 
    QuestionsCrudFactory) {

        var ctrl = this;

        ctrl.mgDialog = QuestionStorageFactory.getMeasurementGoal();
        ctrl.stateIsWaiting = ctrl.mgDialog.metadata.state == QuestionsCrudFactory.STATES.ONUPDATEWAITING;
        ctrl.showReleaseNote = false;

        ctrl.closeModal = function(){
            $uibModalInstance.dismiss("closing");            
            ctrl.mgDialog.metadata.releaseNote = ctrl.oldReleaseNote;
        };

        ctrl.showQuestions = function(){
        	$uibModalInstance.dismiss("closing"); 
        	QuestionStorageFactory.setMeasurementGoal(ctrl.mgDialog);
        	$location.path('/measurementGoalQuestionList');
        };

        ctrl.addExistingQuestion = function(){
        	$uibModalInstance.dismiss("closing");
        	QuestionStorageFactory.setMeasurementGoal(ctrl.mgDialog); 
        	$location.path('/measurementGoalAddExistingQuestion');
        };

        ctrl.askForQuestionEndpoint = function(){
            ctrl.mgDialog.metadata.state = QuestionsCrudFactory.STATES.ONUPDATEENDPOINT;
            MeasurementGoalService.submitGoalService(ctrl.mgDialog);
            ctrl.oldReleaseNote = ctrl.mgDialog.metadata.releaseNote;
            ctrl.stateIsWaiting = false;
            ctrl.showReleaseNote = false;
        };

        ctrl.inputReleaseNote = function(){
            ctrl.showReleaseNote = true;
            ctrl.oldReleaseNote = angular.copy(ctrl.mgDialog.metadata.releaseNote);
        };

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

.controller('QuestionerMetricModalCtrl', QuestionerMetricModalCtrl);

QuestionerMetricModalCtrl.$inject = ['$location', '$uibModalInstance', '$window', 'QuestionsCrudFactory', 'QuestionStorageFactory'];

function QuestionerMetricModalCtrl($location, $uibModalInstance, $window, QuestionsCrudFactory, QuestionStorageFactory) {

        var ctrl = this;
        ctrl.report = "";

        ctrl.metricDialog = QuestionStorageFactory.getMetric();

        ctrl.closeModal = function(){
            $uibModalInstance.dismiss("closing");            
        };

        ctrl.sendReport = function(){
            $uibModalInstance.dismiss("closing");
            ctrl.metricDialog.metadata.releaseNote = report;
            $window.alert("This should send the following report to the GQM Expert");
            $window.alert(ctrl.metricDialog.metadata.releaseNote);
            //Send Report to GQM Expert
        };

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

.controller('QuestionSearchCtrl', QuestionSearchCtrl);

QuestionSearchCtrl.$inject = ['$location', '$window', 'QuestionsCrudFactory', 'QuestionStorageFactory', 'QuestionModalFactory'];

function QuestionSearchCtrl($location, $window, QuestionsCrudFactory, QuestionStorageFactory, QuestionModalFactory) {

        var ctrl = this;

        // QuestionsCrudFactory.getAll().then(
        //     function(data, status){
        //         ctrl.questions = data.data.questionList;
        //     },
            
        //     function(data, status){
        //         $window.alert(data.data.error);
        //         ctrl.questions = null;
        //     }
        // );
        

        ctrl.searchBy = function(keyword, searchField){
            QuestionsCrudFactory.get([keyword], [searchField]).then(
                function(data, status){
                    ctrl.questions = data.data.questionList;
                },

                function(data, status){
                    $window.alert(status);
                }
            );
        };

        ctrl.open = function (index) {

            QuestionStorageFactory.setQuestion(ctrl.questions[index]);
            QuestionModalFactory.openQuestionModal();

        };

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

.controller("QuestionUpdateCtrl", QuestionUpdateCtrl);

QuestionUpdateCtrl.$inject = ['$window', '$location', 'QuestionStorageFactory', 'QuestionsCrudFactory'];

function QuestionUpdateCtrl($window, $location, QuestionStorageFactory, QuestionsCrudFactory){

    var ctrl = this;
    
    ctrl.question = angular.copy(QuestionStorageFactory.getQuestion());
    ctrl.isCommitted = false;

    ctrl.reset = function(){
        ctrl.question = angular.copy(QuestionStorageFactory.getQuestion());   
    };

    ctrl.updateQuestion = function(){

        if(ctrl.question.metadata.state == QuestionsCrudFactory.STATES.CREATED){
            ctrl.question.metadata.state = QuestionsCrudFactory.STATES.ONUPDATE;
        }
        else if(ctrl.question.metadata.state == QuestionsCrudFactory.STATES.REJECTED){
            ctrl.question.meteadata.state = QuestionsCrudFactory.STATES.ONUPDATE;
        }

        $window.alert(ctrl.question.metadata.state);
        QuestionsCrudFactory.update(ctrl.question).then(
            function(data, status){
                QuestionStorageFactory.setQuestion(data.data.questionList[0]);
                ctrl.question = angular.copy(QuestionStorageFactory.getQuestion());
                $window.alert("update committed");
                ctrl.isCommitted = true;
            },
            
            function(data, status){
                $window.alert("Error: status " + status);
            }
        );
    };

    // ctrl.finalizeQuestion = function(){

    //     if(ctrl.question.metadata.state == QuestionsCrudFactory.STATES.CREATED || !ctrl.isCommitted){
    //         $window.alert("You have to commit the update first!");
    //         return;
    //     }
    //     else if(ctrl.question.metadata.state == QuestionsCrudFactory.STATES.ONUPDATE){
    //         ctrl.question.metadata.state = QuestionsCrudFactory.STATES.PENDING;
    //     }
        
    //     QuestionsCrudFactory.update(ctrl.question).then(
    //         function(data, status){
    //             $window.alert("Question Finalized");
    //             $location.path('/dashboardQuestioner');
    //         },
            
    //         function(data, status){
    //             $window.alert("Error: status " + status);
    //         }
    //     );
    // };

    ctrl.getTags = function(){
        return ctrl.question.metadata.tags.join();
    };

    ctrl.addTagToQuestion = function() {
        ctrl.question.metadata.tags.push(ctrl.newTag);
    };

    ctrl.removeTagFromQuestion = function(index){
        ctrl.question.metadata.tags.splice(index, 1);
    };

    ctrl.getStates = function(){
        return QuestionsCrudFactory.STATES;
    };
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
    
    if ($rootScope.globals.user) {
        $http.defaults.headers.common.Authorization =
        'Basic ' + $rootScope.globals.user.authdata;
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        var restrict = $.inArray($location.path(), openLocations) === -1;
        var loggedIn = $rootScope.globals.user;
        if (restrict && !loggedIn) {
            $location.path(failoverLocation);
        }
    });
}

})();
