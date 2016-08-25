(function () {
    angular.module('App')
        .component('component1', {
            bindings: {},
            templateUrl: 'js/Components/component1/component1.html',
            controller: component1Controller,
            controllerAs: 'vm'
        });

    function component1Controller(databaseService, toastService) {
        var vm = this;
        


        
    }

})();