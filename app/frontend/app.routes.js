(function () {
    'use strict';

    angular
        .module('Routes')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            // books page
            .state('home', {
                url: '/',
                templateUrl: 'components/books/views/books.html',
                controller: 'BooksController',
                controllerAs: 'vm'
            })

        $urlRouterProvider.otherwise('/');
    };

})();
