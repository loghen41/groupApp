(function () {
    var app = angular.module('App',
        [
            'ui.router',
            'ngStorage',
            'pascalprecht.translate',
            'ngAnimate',
            'ngMaterial',
            'firebase'
        ])
        .config(function ($stateProvider, $urlRouterProvider, $translateProvider) {

            $urlRouterProvider.otherwise('/login');

            $stateProvider
                .state('component1', {
                    url: '/component1',
                    template: '<component1></component1>'
                })
                .state('about', {
                    url: '/about',
                    template: '<about></about>'
                })
                .state('component2', {
                    url: '/component2',
                    template: '<component2></component2>'
                })
                .state('settings', {
                    url: '/settings',
                    template: '<settings></settings>'
                })
                .state('login', {
                    url: '/login',
                    template: '<login></login>'
                });


            $translateProvider.translations('en', {

            });
            
            $translateProvider.translations('es', {

            });
            
            $translateProvider.translations('fr', {

            });
            
            $translateProvider.preferredLanguage('en');

        })

})();