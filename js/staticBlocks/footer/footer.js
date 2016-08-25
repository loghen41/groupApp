(function() {
angular.module('App')
    .component('footerComponent',{
       bindings: {},
        templateUrl: 'js/staticBlocks/footer/footer.html',
        controller: footerController,
        controllerAs: 'vm'
    });
    
    function footerController() {
        var vm = this;
    }
    
})();