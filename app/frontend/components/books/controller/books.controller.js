/// <reference path="../bower_components/angular/angular.js" />
/// <reference path="../../../app.module.js" />
/// <reference path="../factory/books.factory.js" />

// create books controller
(function () {
    'use strict';

    angular
        .module('Book')
        .controller('BooksController', BooksController);

    BooksController.$inject = ['$location', 'BooksFactory'];

    function BooksController($location, BooksFactory) {
        var vm = this;

        vm.addBook = addBook;
        vm.books = [];
        vm.title = 'Our Books';
        
        /////////////////////

        // get all books
        BooksFactory.getBooks(function (response) {
            vm.books = response.data;
        });

        // TEST: call addBook() to add test book
        //addBook();

        function addBook() {
            // TODO: handles click event
            // For now just add test book to the db
            var book = {
                title: "Gratitude",
                author: "Oliver Sacks",
                genre: "Memoir"
            };

            BooksFactory.addBook(book, function (response) {
                console.log('Book added')
            });
        }

    };

})();