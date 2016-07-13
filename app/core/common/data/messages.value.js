(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_MESSAGES
* @module metricapp
*
* @description
* Provides the simulation of the DB document `messages`.
************************************************************************************/

var LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

angular.module('metricapp')

.value('DB_MESSAGES', {

    'expert-gm': {

        'questioner-mp': {
            sender:     'expert-gm',
            recipient:  'questioner-mp',
            ts_fetch:   new Date(2016, 1, 1, 13, 30, 0, 0),
            ts_update:  new Date(2016, 1, 1, 13, 45, 0, 0),
            toread: 3,
            messages: [
                {id: 1,  ts_create: new Date(2016, 1, 1, 13, 0, 0, 0),  author: 'expert-gm',        content: '1.' + LIPSUM},
                {id: 2,  ts_create: new Date(2016, 1, 1, 13, 5, 0, 0),  author: 'questioner-mp',    content: '2.' + LIPSUM},
                {id: 3,  ts_create: new Date(2016, 1, 1, 13, 10, 0, 0), author: 'expert-gm',        content: '3.' + LIPSUM},
                {id: 4,  ts_create: new Date(2016, 1, 1, 13, 15, 0, 0), author: 'questioner-mp',    content: '4.' + LIPSUM},
                {id: 5,  ts_create: new Date(2016, 1, 1, 13, 20, 0, 0), author: 'expert-gm',        content: '5.' + LIPSUM},
                {id: 6,  ts_create: new Date(2016, 1, 1, 13, 25, 0, 0), author: 'questioner-mp',    content: '6.' + LIPSUM},
                {id: 7,  ts_create: new Date(2016, 1, 1, 13, 30, 0, 0), author: 'expert-gm',        content: '7.' + LIPSUM},
                {id: 8,  ts_create: new Date(2016, 1, 1, 13, 35, 0, 0), author: 'questioner-mp',    content: '8.' + LIPSUM},
                {id: 9,  ts_create: new Date(2016, 1, 1, 13, 40, 0, 0), author: 'questioner-mp',    content: '9.' + LIPSUM},
                {id: 10, ts_create: new Date(2016, 1, 1, 13, 45, 0, 0), author: 'questioner-mp',    content: '10.' + LIPSUM}
            ]
        },

        'metricator-ag': {
            sender:     'expert-gm',
            recipient:  'metricator-ag',
            ts_fetch:   new Date(2016, 1, 1, 14, 30, 0, 0),
            ts_update:  new Date(2016, 1, 1, 14, 45, 0, 0),
            toread: 3,
            messages: [
                {id: 1,  ts_create: new Date(2016, 1, 1, 14, 0, 0, 0),  author: 'expert-gm',         content: '1.' + LIPSUM},
                {id: 2,  ts_create: new Date(2016, 1, 1, 14, 5, 0, 0),  author: 'metricator-ag',     content: '2.' + LIPSUM},
                {id: 3,  ts_create: new Date(2016, 1, 1, 14, 10, 0, 0), author: 'expert-gm',         content: '3.' + LIPSUM},
                {id: 4,  ts_create: new Date(2016, 1, 1, 14, 15, 0, 0), author: 'metricator-ag',     content: '4.' + LIPSUM},
                {id: 5,  ts_create: new Date(2016, 1, 1, 14, 20, 0, 0), author: 'expert-gm',         content: '5.' + LIPSUM},
                {id: 6,  ts_create: new Date(2016, 1, 1, 14, 25, 0, 0), author: 'metricator-ag',     content: '6.' + LIPSUM},
                {id: 7,  ts_create: new Date(2016, 1, 1, 14, 30, 0, 0), author: 'expert-gm',         content: '7.' + LIPSUM},
                {id: 8,  ts_create: new Date(2016, 1, 1, 14, 35, 0, 0), author: 'metricator-ag',     content: '8.' + LIPSUM},
                {id: 9,  ts_create: new Date(2016, 1, 1, 14, 40, 0, 0), author: 'metricator-ag',     content: '9.' + LIPSUM},
                {id: 10, ts_create: new Date(2016, 1, 1, 14, 45, 0, 0), author: 'metricator-ag',     content: '10.' + LIPSUM}
            ]
        }
    },

    'expert-mp': {

    },

    'expert-gc': {

    },

    'expert-mm': {

    },

    'questioner-mp': {

        'expert-gm': {
            sender:     'questioner-mp',
            recipient:  'expert-gm',
            ts_fetch:   new Date(2016, 1, 1, 13, 45, 0, 0),
            ts_update:  new Date(2016, 1, 1, 13, 45, 0, 0),
            toread: 0,
            messages: [
                {id: 1,  ts_create: new Date(2016, 1, 1, 13, 0, 0, 0),  author: 'expert-gm',        content: '1.' + LIPSUM},
                {id: 2,  ts_create: new Date(2016, 1, 1, 13, 5, 0, 0),  author: 'questioner-mp',    content: '2.' + LIPSUM},
                {id: 3,  ts_create: new Date(2016, 1, 1, 13, 10, 0, 0), author: 'expert-gm',        content: '3.' + LIPSUM},
                {id: 4,  ts_create: new Date(2016, 1, 1, 13, 15, 0, 0), author: 'questioner-mp',    content: '4.' + LIPSUM},
                {id: 5,  ts_create: new Date(2016, 1, 1, 13, 20, 0, 0), author: 'expert-gm',        content: '5.' + LIPSUM},
                {id: 6,  ts_create: new Date(2016, 1, 1, 13, 25, 0, 0), author: 'questioner-mp',    content: '6.' + LIPSUM},
                {id: 7,  ts_create: new Date(2016, 1, 1, 13, 30, 0, 0), author: 'expert-gm',        content: '7.' + LIPSUM},
                {id: 8,  ts_create: new Date(2016, 1, 1, 13, 35, 0, 0), author: 'questioner-mp',    content: '8.' + LIPSUM},
                {id: 9,  ts_create: new Date(2016, 1, 1, 13, 40, 0, 0), author: 'questioner-mp',    content: '9.' + LIPSUM},
                {id: 10, ts_create: new Date(2016, 1, 1, 13, 45, 0, 0), author: 'questioner-mp',    content: '10.' + LIPSUM}
            ]
        }
    },

    'questioner-dn': {

    },

    'metricator-ag': {

        'expert-gm': {
            sender:     'metricator-ag',
            recipient:  'expert-gm',
            ts_fetch:    new Date(2016, 1, 1, 14, 45, 0, 0),
            ts_update:  new Date(2016, 1, 1, 14, 45, 0, 0),
            toread: 0,
            messages: [
                {id: 1,  ts_create: new Date(2016, 1, 1, 14, 0, 0, 0),  author: 'expert-gm',         content: '1.' + LIPSUM},
                {id: 2,  ts_create: new Date(2016, 1, 1, 14, 5, 0, 0),  author: 'metricator-ag',     content: '2.' + LIPSUM},
                {id: 3,  ts_create: new Date(2016, 1, 1, 14, 10, 0, 0), author: 'expert-gm',         content: '3.' + LIPSUM},
                {id: 4,  ts_create: new Date(2016, 1, 1, 14, 15, 0, 0), author: 'metricator-ag',     content: '4.' + LIPSUM},
                {id: 5,  ts_create: new Date(2016, 1, 1, 14, 20, 0, 0), author: 'expert-gm',         content: '5.' + LIPSUM},
                {id: 6,  ts_create: new Date(2016, 1, 1, 14, 25, 0, 0), author: 'metricator-ag',     content: '6.' + LIPSUM},
                {id: 7,  ts_create: new Date(2016, 1, 1, 14, 30, 0, 0), author: 'expert-gm',         content: '7.' + LIPSUM},
                {id: 8,  ts_create: new Date(2016, 1, 1, 14, 35, 0, 0), author: 'metricator-ag',     content: '8.' + LIPSUM},
                {id: 9,  ts_create: new Date(2016, 1, 1, 14, 40, 0, 0), author: 'metricator-ag',     content: '9.' + LIPSUM},
                {id: 10, ts_create: new Date(2016, 1, 1, 14, 45, 0, 0), author: 'metricator-ag',     content: '10.' + LIPSUM}
            ]
        }
    },

    'metricator-af': {

    }

});

})();
