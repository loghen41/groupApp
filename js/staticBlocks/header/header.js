(function() {
angular.module('App')
    .component('headerComponent',{
       bindings: {
           header: "<"
       },
        templateUrl: 'js/staticBlocks/header/header.html',
        controller: headerController,
        controllerAs: 'vm'
    });
    
    function headerController() {
        var vm = this;
    }
    
})();