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

    'expert': {

        'metricator': {
            sender: 'expert',
            recipient: 'metricator',
            ts_update: new Date(2016, 01, 01, 13, 45, 0, 0),
            toread: 2,
            messages: [
                {ts_create: new Date(2016, 01, 01, 13, 00, 0, 0), author: 'expert',         content: '0.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 13, 05, 0, 0), author: 'metricator',     content: '1.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 13, 10, 0, 0), author: 'expert',         content: '2.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 13, 15, 0, 0), author: 'metricator',     content: '3.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 13, 20, 0, 0), author: 'expert',         content: '4.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 13, 25, 0, 0), author: 'metricator',     content: '5.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 13, 30, 0, 0), author: 'expert',         content: '6.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 13, 35, 0, 0), author: 'metricator',     content: '7.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 13, 40, 0, 0), author: 'metricator',     content: '8.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 13, 45, 0, 0), author: 'metricator',     content: '9.' + LIPSUM}
            ]
        },

        'questioner': {
            sender: 'expert',
            recipient: 'questioner',
            ts_update: new Date(2016, 01, 01, 14, 45, 0, 0),
            toread: 3,
            messages: [
                {ts_create: new Date(2016, 01, 01, 14, 00, 0, 0), author: 'expert',         content: '0.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 14, 05, 0, 0), author: 'questioner',     content: '1.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 14, 10, 0, 0), author: 'expert',         content: '2.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 14, 15, 0, 0), author: 'questioner',     content: '3.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 14, 20, 0, 0), author: 'expert',         content: '4.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 14, 25, 0, 0), author: 'questioner',     content: '5.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 14, 30, 0, 0), author: 'expert',         content: '6.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 14, 35, 0, 0), author: 'questioner',     content: '7.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 14, 40, 0, 0), author: 'questioner',     content: '8.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 14, 45, 0, 0), author: 'questioner',     content: '9.' + LIPSUM}
            ]
        }

    } ,

    'metricator': {

        'expert': {
            sender: 'metricator',
            recipient: 'expert',
            ts_update: new Date(2016, 01, 01, 13, 45, 0, 0),
            toread: 0,
            messages: [
                {ts_create: new Date(2016, 01, 01, 13, 00, 0, 0), author: 'expert',         content: '0.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 13, 05, 0, 0), author: 'metricator',     content: '1.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 13, 10, 0, 0), author: 'expert',         content: '2.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 13, 15, 0, 0), author: 'metricator',     content: '3.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 13, 20, 0, 0), author: 'expert',         content: '4.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 13, 25, 0, 0), author: 'metricator',     content: '5.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 13, 30, 0, 0), author: 'expert',         content: '6.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 13, 35, 0, 0), author: 'metricator',     content: '7.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 13, 40, 0, 0), author: 'metricator',     content: '8.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 13, 45, 0, 0), author: 'metricator',     content: '9.' + LIPSUM}
            ]
        },

        'questioner': {

        }

    },

    'questioner': {

        'expert': {
            sender: 'questioner',
            recipient: 'expert',
            ts_update: new Date(2016, 01, 01, 14, 45, 0, 0),
            toread: 0,
            messages: [
                {ts_create: new Date(2016, 01, 01, 14, 00, 0, 0), author: 'expert',         content: '0.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 14, 05, 0, 0), author: 'questioner',     content: '1.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 14, 10, 0, 0), author: 'expert',         content: '2.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 14, 15, 0, 0), author: 'questioner',     content: '3.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 14, 20, 0, 0), author: 'expert',         content: '4.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 14, 25, 0, 0), author: 'questioner',     content: '5.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 14, 30, 0, 0), author: 'expert',         content: '6.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 14, 35, 0, 0), author: 'questioner',     content: '7.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 14, 40, 0, 0), author: 'questioner',     content: '8.' + LIPSUM},
                {ts_create: new Date(2016, 01, 01, 14, 45, 0, 0), author: 'questioner',     content: '9.' + LIPSUM}
            ]
        },

        'metricator': {

        }

    }
});

})();
