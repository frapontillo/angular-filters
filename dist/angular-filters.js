/**
 * A collection of filters for AngularJS.
 * @version v1.0.1 - 2013-12-16
 * @author Francesco Pontillo
 * @link https://github.com/frapontillo/angular-filters
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

'use strict';
// Source: common/module.js
angular.module('frapontillo.ex.filters', []);
angular.module('frapontillo', ['ex.filters']);
// Source: dist/.temp/filters/bool/bool.js
angular.module('frapontillo.ex.filters').filter('bool', function () {
  return function (input, valueTrue, valueFalse) {
    return input !== true ? valueFalse : valueTrue;
  };
});
// Source: dist/.temp/filters/default/default.js
angular.module('frapontillo.ex.filters').filter('default', function () {
  return function (input, value) {
    if (input !== null && input !== undefined && (input !== '' || angular.isNumber(input))) {
      return input;
    }
    return value || '';
  };
});
// Source: dist/.temp/filters/firstNotNull/firstNotNull.js
angular.module('frapontillo.ex.filters').filter('firstNotNull', function () {
  return function (input) {
    if (input) {
      var l = input.length - 1;
      for (var i = 0; i <= l; i++) {
        if (input[i] !== undefined && input[i] !== null) {
          return input[i];
        }
      }
    }
  };
});
// Source: dist/.temp/filters/lastNotNull/lastNotNull.js
angular.module('frapontillo.ex.filters').filter('lastNotNull', function () {
  return function (input) {
    if (input) {
      var l = input.length - 1;
      for (var i = l; i >= 0; i--) {
        if (input[i] !== undefined) {
          return input[i];
        }
      }
    }
  };
});
// Source: dist/.temp/filters/max/max.js
angular.module('frapontillo.ex.filters').filter('max', function () {
  return function (input) {
    var out;
    if (input) {
      for (var i in input) {
        if (input[i] > out || out === undefined || out === null) {
          out = input[i];
        }
      }
    }
    return out;
  };
});
// Source: dist/.temp/filters/min/min.js
angular.module('frapontillo.ex.filters').filter('min', function () {
  return function (input) {
    var out;
    if (input) {
      for (var i in input) {
        if (input[i] < out || out === undefined || out === null) {
          out = input[i];
        }
      }
    }
    return out;
  };
});