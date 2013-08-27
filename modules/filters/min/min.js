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