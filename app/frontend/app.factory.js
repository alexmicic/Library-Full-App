/// <reference path="../bower_components/angular/angular.js" />
/// <reference path="../../../app.module.js" />

// create books controller
(function () {
    'use strict';

    angular
        .module('Services')
        .factory('ApiService', ApiService);

    ApiService.$inject = ['$http'];

    function ApiService($http) {
        var service = {
            apiRequest: apiRequest,
            apiRequestAuthorize: apiRequestAuthorize
        };

        return service;

        //////////////

        function apiRequest(method, url, data, callback) {
            $http({
                method: method,
                url: url,
                data: data
            }).then(callback);
        };

        function apiRequestAuthorize(method, url, data, callback) {
            // TODO: build this method
        };
    };

})();