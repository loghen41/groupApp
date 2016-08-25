/**
 * Created by loganhendricks on 8/25/16.
 */
(function () {
    angular.module('App')
        .service('authenticationService', function ($firebaseAuth, $q) {

            var vm = this;
            vm.login = login;
            vm.logout = logout;


            //This is how the user credentials are authenticated
            function login (provider) {
                var auth = $firebaseAuth();
                var promise = $q.defer();
                auth.$signInWithPopup(provider)
                    .then(function(firebaseUser){
                        user = firebaseUser;
                        promise.resolve(user)
                    }).catch(function(error) {
                    promise.reject(error);
                });
                return promise.promise;
            }

            //This is how the user logs out of the database
            function logout () {
                var auth = $firebaseAuth();
                auth.$signOut();
                user = undefined;
                return user;
            }


        });
})();