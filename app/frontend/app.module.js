/// <reference path="../bower_components/angular/angular.js" />

// create all the modules here
(function () {
    'use strict';

    angular
        .module('Authentication', []);

    angular
        .module('Services', []);

    angular
        .module('Book', []);

    angular
        .module('User', []);

    angular
        .module('Routes', []);

    angular
        .module('Library', [
            /* Core */
            'ui.router',
            'ngMaterial',

            /* Services */
            'Services',

            /* Main */
            'Authentication',
            'Book',
            'User',
            'Routes'
        ]);

})();