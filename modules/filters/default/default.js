angular.module('ex.filters')
    .filter('default', function() {
        return function(input, value) {
            return out = input != null && input != undefined ? input : value || "";
        }
    }
);