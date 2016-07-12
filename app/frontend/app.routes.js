(function () {
    'use strict';

    angular
        .module('Routes')
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
        $routeProvider
            // books page
            .when('/', {
                templateUrl: 'components/books/views/books.html',
                controller: 'BooksController',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode({ enabled: true, requireBase: false });
    };

})();
