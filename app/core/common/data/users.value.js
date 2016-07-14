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
        bio:        'MSc Student in Computer Science Engineering at University of Rome Tro Vergata.',
        website:    'http://gmarciani.com',
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
        bio:        'MSc Student in Computer Science Engineering at University of Rome Tor Vergata.',
        website:    'http://gmarciani.com',
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
        bio:        'Full Professor in Computer Science Engineering at University of Rome Tor Vergata.',
        website:    'http://gmarciani.com',
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
        bio:        'Associate Professor in Computer Science Engineering at University of Rome Tor Vergata.',
        website:    'http://gmarciani.com',
        online:     false
    },

    'metricator-ag': {
        username:   'metricator-ag',
        password:   'password',
        role:       'METRICATOR',
        firstname:  'Andrea',
        lastname:   'Gennusa',
        gender:     'MALE',
        birthday:   new Date(1990,6, 27),
        email:      'andrea.gennusa@domain.com',
        mobile:     '+39 12345678',
        picture:    'uploads/users/metricator-ag.svg',
        bio:        'MSc Student in Computer Science Engineering at University of Rome Tor Vergata.',
        website:    'http://gmarciani.com',
        online:     true
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
        bio:        'MSc Student in Computer Science Engineering at University of Rome Tor Vergata.',
        website:    'http://gmarciani.com',
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
        bio:        'MSc Student in Computer Science Engineering at University of Rome Tor Vergata.',
        website:    'http://gmarciani.com',
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
        bio:        'MSc Student in Computer Science Engineering at University of Rome Tor Vergata.',
        website:    'http://gmarciani.com',
        online:     false
    }

});

})();
