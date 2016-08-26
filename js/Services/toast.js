(function() {
    angular.module('App')
        .service('toastService', function($mdToast) {
            
            this.showToast = showToast;
            
            //This opens up the Toast Div
            function showToast (item) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent(item)
                        .position('top left')
                        .hideDelay(3000)
                );
            }
            
        })
})();