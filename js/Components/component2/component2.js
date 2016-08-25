(function () {
    angular.module('App')
        .component('component2', {
            bindings: {},
            templateUrl: 'js/Components/component2/component2.html',
            controller: component2Controller,
            controllerAs: 'vm'
        });

    function component2Controller(databaseService, toastService) {
        var vm = this;

    }

})();