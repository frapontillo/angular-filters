angular.module('frapontillo.ex.filters')
  .filter('default', function() {
    return function(input, value) {
      return out =
        input != null && input != undefined && (input != "" || angular.isNumber(input)) ?
          input : value || '';
    }
  }
);