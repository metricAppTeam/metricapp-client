(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_SETTINGS
* @module metricapp
*
* @description
* Provides the simulation of the DB document `settings`.
************************************************************************************/

angular.module('metricapp')

.value('DB_SETTINGS', {

    'expert': {
        setting_1: 'expert_value_setting_1',
        setting_2: 'expert_value_setting_2',
        setting_3: 'expert_value_setting_3',
        setting_4: 'expert_value_setting_4',
        setting_5: 'expert_value_setting_5',
        setting_6: 'expert_value_setting_6',
    },

    'metricator': {
        setting_1: 'metricator_value_setting_1',
        setting_2: 'metricator_value_setting_2',
        setting_3: 'metricator_value_setting_3',
        setting_4: 'metricator_value_setting_4',
        setting_5: 'metricator_value_setting_5',
        setting_6: 'metricator_value_setting_6',
    },

    'questioner': {
        setting_1: 'questioner_value_setting_1',
        setting_2: 'questioner_value_setting_2',
        setting_3: 'questioner_value_setting_3',
        setting_4: 'questioner_value_setting_4',
        setting_5: 'questioner_value_setting_5',
        setting_6: 'questioner_value_setting_6',
    },

    'default': {
        setting_1: 'default_value_setting_1',
        setting_2: 'default_value_setting_2',
        setting_3: 'default_value_setting_3',
        setting_4: 'default_value_setting_4',
        setting_5: 'default_value_setting_5',
        setting_6: 'default_value_setting_6',
    }

});

})();
