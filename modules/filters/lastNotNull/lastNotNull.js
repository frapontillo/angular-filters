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