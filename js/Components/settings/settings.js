(function() {
angular.module('App')
    .component('settings',{
       bindings: {},
        templateUrl: 'js/Components/settings/settings.html',
        controller: settingsController,
        controllerAs: 'vm'
    });
    
    function settingsController(settingsService, toastService) {
        vm = this;
      
    }
    
})();