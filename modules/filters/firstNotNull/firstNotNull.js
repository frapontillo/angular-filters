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