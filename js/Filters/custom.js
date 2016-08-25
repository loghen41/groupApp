/**
 * Created by loganhendricks on 7/26/16.
 */

(function(){
angular.module('App')
    .filter('custom', function() {

        return function(input) {
                
                return input;
            
        }

    });

})();