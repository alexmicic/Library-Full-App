/// <reference path="../bower_components/angular/angular.js" />

// create all the modules here
(function () {
    'use strict';

    angular
        .module('Authentication', []);

    angular
        .module('Services', []);

    angular
        .module('Book', [
            'Services'
        ]);

    angular
        .module('User', []);

    angular
        .module('Routes', [
            'ngRoute'
        ]);

    angular
        .module('Library', [
            'Authentication',
            'Book',
            'User',
            'Routes',
            'ngRoute',
            'ngMaterial'
        ]);

})();