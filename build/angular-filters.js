/**
 * A collection of filters for AngularJS.
 * @version v1.0.0 - 2013-11-27
 * @author Francesco Pontillo
 * @link https://github.com/frapontillo/angular-filters
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

angular.module('frapontillo.ex.filters', []);
angular.module('frapontillo', ['ex.filters']);
angular.module('frapontillo.ex.filters')
  .filter('bool', function() {
    return function(input, valueTrue, valueFalse) {
      return out =
        input !== true ? valueFalse : valueTrue;
    }
  }
);
angular.module('frapontillo.ex.filters')
  .filter('default', function() {
    return function(input, value) {
      return out =
        input != null && input != undefined && (input != "" || angular.isNumber(input)) ?
          input : value || '';
    }
  }
);
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

angular.module('frapontillo.ex.filters')
  .filter('firstNotNull', function() {
    return function(input) {
      var out = undefined;
      if (input) {
        var l = input.length - 1;
        for (i = 0; i <= l; i++) {
          if (input[i] != undefined) return input[i];
        }
      }
      return out;
    }
  }
);
angular.module('frapontillo.ex.filters')
  .filter('lastNotNull', function() {
    return function(input) {
      var out = undefined;
      if (input) {
        var l = input.length - 1;
        for (i = l; i >= 0; i--) {
          if (input[i] != undefined) return input[i];
        }
      }
      return out;
    }
  }
);
angular.module('frapontillo.ex.filters')
  .filter('max', function() {
    return function(input) {
      var out = undefined;
      if (input) {
        for (var i in input)
          if (input[i] > out || out == undefined) out = input[i];
      }
      return out;
    }
  }
);
angular.module('frapontillo.ex.filters')
  .filter('min', function() {
    return function(input) {
      var out = undefined;
      if (input) {
        for (var i in input)
          if (input[i] < out || out == undefined) out = input[i];
      }
      return out;
    }
  }
);