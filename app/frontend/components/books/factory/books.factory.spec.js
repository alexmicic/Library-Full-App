// write a test for this service
describe('BooksFactory', function () {

    var BooksFactory;

    beforeEach(module('Book'));

    beforeEach(inject(function (_BooksFactory_) {
        BooksFactory = _BooksFactory_;
    }))

    describe('getBooks', function () {

        it('should call ApiService.apiRequest which creates request to get all books', inject(function ($http) {

        }));

    });

    describe('getBook', function () {

        it('should call ApiService.apiRequest which creates request to get a book', inject(function ($http) {

        }));

    });

    describe('addBook', function () {

        it('should call ApiService.apiRequest which creates request to add new book to the db', inject(function ($http) {

        }));

    });

    describe('deleteBook', function () {

        it('should call ApiService.apiRequest which creates request to delete a book', inject(function ($http) {

        }));

    });

});