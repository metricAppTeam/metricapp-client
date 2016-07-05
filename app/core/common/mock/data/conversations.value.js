(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_CONVERSATIONS
* @module metricapp
*
* @description
* Provides the simulation of the DB document `conversations`.
************************************************************************************/

angular.module('metricapp')

.value('DB_CONVERSATIONS', {

    'expert': {

        'metricator': {
            sender: 'expert',
            recipient: 'metricator',
            lastUpdate: new Date(2016, 01, 01, 14, 30, 0, 0),
            toread: 1,
            messages: [
                {timestamp: new Date(2016, 01, 01, 14, 30, 0, 0), author: 'metricator',  content: '9.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 14, 20, 0, 0), author: 'metricator',  content: '8.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 14, 10, 0, 0), author: 'expert',      content: '7.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 14, 00, 0, 0), author: 'metricator',  content: '6.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 13, 50, 0, 0), author: 'expert',      content: '5.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 13, 40, 0, 0), author: 'metricator',  content: '4.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 13, 30, 0, 0), author: 'expert',      content: '3.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 13, 20, 0, 0), author: 'metricator',  content: '2.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 13, 10, 0, 0), author: 'expert',      content: '1.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 13, 00, 0, 0), author: 'metricator',  content: '0.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            ]
        },

        'questioner': {
            sender: 'expert',
            recipient: 'questioner',
            lastUpdate: new Date(2016, 01, 01, 15, 30, 0, 0),
            toread: 4,
            messages: [
                {timestamp: new Date(2016, 01, 01, 15, 30, 0, 0), author: 'questioner',  content: '9.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 15, 20, 0, 0), author: 'questioner',  content: '8.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 15, 10, 0, 0), author: 'questioner',  content: '7.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 15, 00, 0, 0), author: 'questioner',  content: '6.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 14, 50, 0, 0), author: 'expert',      content: '5.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 14, 40, 0, 0), author: 'questioner',  content: '4.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 14, 30, 0, 0), author: 'expert',      content: '3.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 14, 20, 0, 0), author: 'questioner',  content: '2.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 14, 10, 0, 0), author: 'expert',      content: '1.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 14, 00, 0, 0), author: 'questioner',  content: '0.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            ]
        }

    } ,

    'metricator': {

        'expert': {
            sender: 'metricator',
            recipient: 'expert',
            lastUpdate: new Date(2016, 01, 01, 14, 30, 0, 0),
            toread: 0,
            messages: [
                {timestamp: new Date(2016, 01, 01, 14, 30, 0, 0), author: 'metricator',  content: '9.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 14, 20, 0, 0), author: 'metricator',  content: '8.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 14, 10, 0, 0), author: 'expert',      content: '7.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 14, 00, 0, 0), author: 'metricator',  content: '6.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 13, 50, 0, 0), author: 'expert',      content: '5.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 13, 40, 0, 0), author: 'metricator',  content: '4.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 13, 30, 0, 0), author: 'expert',      content: '3.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 13, 20, 0, 0), author: 'metricator',  content: '2.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 13, 10, 0, 0), author: 'expert',      content: '1.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 13, 00, 0, 0), author: 'metricator',  content: '0.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            ]
        },

        'questioner': {

        }

    },

    'questioner': {

        'expert': {
            sender: 'questioner',
            recipient: 'expert',
            lastUpdate: new Date(2016, 01, 01, 15, 30, 0, 0),
            toread: 0,
            messages: [
                {timestamp: new Date(2016, 01, 01, 15, 30, 0, 0), author: 'questioner',  content: '9.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 15, 20, 0, 0), author: 'questioner',  content: '8.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 15, 10, 0, 0), author: 'questioner',  content: '7.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 15, 00, 0, 0), author: 'questioner',  content: '6.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 14, 50, 0, 0), author: 'expert',      content: '5.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 14, 40, 0, 0), author: 'questioner',  content: '4.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 14, 30, 0, 0), author: 'expert',      content: '3.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 14, 20, 0, 0), author: 'questioner',  content: '2.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 14, 10, 0, 0), author: 'expert',      content: '1.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {timestamp: new Date(2016, 01, 01, 14, 00, 0, 0), author: 'questioner',  content: '0.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            ]
        },

        'metricator': {

        }

    }
});

})();
