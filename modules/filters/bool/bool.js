angular.module('frapontillo.ex.filters')
  .filter('bool', function() {
    return function(input, valueTrue, valueFalse) {
      return out =
        input !== true ? valueFalse : valueTrue;
    }
  }
);