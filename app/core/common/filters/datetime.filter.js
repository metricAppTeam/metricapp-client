(function() { 'use strict';

/************************************************************************************
* @ngdoc filter
* @name datetimeFilter
* @module metricapp
*
* @description
* Realizes filters for datetime display.
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

    return function(dateObj,mode) {
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
