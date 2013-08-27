/**
 * A collection of filters for AngularJS.
 * @version v0.0.2 - 2013-08-27
 * @author Francesco Pontillo
 * @link https://github.com/frapontillo/angular-filters
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

angular.module('frapontillo.ex.filters', []);
angular.module('frapontillo', ['ex.filters']);
angular.module('frapontillo', ['ex.more']);
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