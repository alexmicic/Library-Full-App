/// <reference path="../bower_components/angular/angular.js" />
/// <reference path="../../../app.module.js" />
/// <reference path="../../../app.factory.js" />

// create books controller
(function () {
    'use strict';

    angular
        .module('Book')
        .factory('BooksFactory', BooksFactory);

    BooksFactory.$inject = ['ApiService'];

    function BooksFactory(ApiService) {
        var service = {
            getBooks: getBooks,
            getBook: getBook,
            addBook: addBook,
            deleteBook: deleteBook
        };

        return service;

        //////////////

        function getBooks(callback) {
            ApiService.apiRequest('GET', '/api/books', '', callback);
        };

        function getBook(id, callback) {
            ApiService.apiRequest('GET', '/api/books/' + id, '', callback);
        };

        function addBook(book, callback) {
            ApiService.apiRequest('POST', '/api/books', book, callback);
        };

        function deleteBook(id, callback) {
            ApiService.apiRequest('DELETE', '/api/books/' + id, '', callback);
        };
    };

})();