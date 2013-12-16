/**
 * A collection of filters for AngularJS.
 * @version v1.0.0 - 2013-12-16
 * @author Francesco Pontillo
 * @link https://github.com/frapontillo/angular-filters
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

angular.module('frapontillo.ex.filters', []);
angular.module('frapontillo', ['ex.filters']);
'use strict';
angular.module('frapontillo.ex.filters').filter('bool', function () {
  return function (input, valueTrue, valueFalse) {
    return input !== true ? valueFalse : valueTrue;
  };
});'use strict';
angular.module('frapontillo.ex.filters').filter('default', function () {
  return function (input, value) {
    if (input !== null && input !== undefined && (input !== '' || angular.isNumber(input))) {
      return input;
    }
    return value || '';
  };
});'use strict';
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
});'use strict';
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
});'use strict';
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
});'use strict';
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