/**
 * A collection of filters for AngularJS.
 * @version v0.0.2 - 2013-02-23
 * @author Francesco Pontillo
 * @link https://github.com/frapontillo/angular-filters
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

angular.module('ex.filters', []);
angular.module('ex', ['ex.filters']);
angular.module('ex.filters')
  .filter('default', function() {
    return function(input, value) {
      return out =
        input != null && input != undefined && (input != "" || angular.isNumber(input)) ?
          input : value || '';
    }
  }
);
angular.module('ex.filters')
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
angular.module('ex.filters')
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
angular.module('ex.filters')
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
angular.module('ex.filters')
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