/**
 * defualts out an array to the minimum size specified.
 * if variable is undefined it is initialised as an array
 * sets the length to the count specified & initialised any new / null elements to an object
 */

/*globals angular, console*/
angular.module('frapontillo.ex.filters')
    .filter('ensure', function () {
        'use strict';

        return function (data, minCount) {
            if (!angular.isArray(data)) {
                return;
            }

            // < undefined will eval to false
            if (data.length < minCount) {
                data.length = minCount;
            }

            var i, item;
            for (i = 0; i < data.length; i++) {
                item = data[i];
                if (typeof (item) === 'undefined' || item === null) {
                    data[i] = {};
                }
            }

            return data;
        };
    });
