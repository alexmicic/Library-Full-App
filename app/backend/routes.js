// grab the models
var User = require('./models/user');
var Book = require('./models/book');

module.exports = function (app) {
    // server routes =========
    // handle things like API calls
    // authentication routes

    // simple api route
    // USER ===========
    app.get('/api/users', function (req, res) {
        // use mongoose to get all users from db
        User.find(function (err, users) {
            if (err)
                res.status(400).send(err);

            res.json(users);
        });
    });

    app.get('/api/users/:id', function (req, res) {
        // find user by id
        try {
            User.findOne({ '_id': req.params.id }, function (err, user) {
                if (err)
                    res.status(422).send(err);

                res.json(user);
            });
        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.post('/api/users', function (req, res) {
        // add new user
        try {
            new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                dateCreated: req.body.dateCreated,
                favBooks: req.body.favBooks
            }).save();

            res.json({
                "message": "New user added succesfully."
            })
        } catch (err) {
            res.send(err, 422);
        }
            
    });

    app.delete('/api/users/:id', function (req, res) {
        // find user by id
        try {
            User.findOne({ '_id': req.params.id }, function (err, user) {
                if (err)
                    res.status(422).send(err);

                // or insteand concatenating .remove().exec();
                // use this:
                // User.remove(user);

            }).remove().exec();
        } catch (err) {
            res.status(422).send(err);
        }
    });

    // BOOK ===========
    app.get('/api/books', function (req, res) {
        // use mongoose to get all books from db
        Book.find(function (err, books) {
            if (err)
                res.status(400).send(err);

            res.json(books);
        });
    });

    app.get('/api/books/:id', function (req, res) {
        // find book by id
        try {
            Book.findOne({ '_id': req.params.id }, function (err, book) {
                if (err)
                    res.status(422).send(err);

                res.json(book);
            });
        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.post('/api/books', function (req, res) {
        // add new book
        try {
            new Book({
                title: req.body.title,
                author: req.body.author,
                datePublished: req.body.datePublished,
                genre: req.body.genre
            }).save();

            res.json({
                "message": "New book added succesfully."
            })
        } catch (err) {
            res.send(err, 422);
        }

    });

    app.delete('/api/books/:id', function (req, res) {
        // find book by id
        try {
            Book.findOne({ '_id': req.params.id }, function (err, book) {
                if (err)
                    res.status(422).send(err);

                // or insteand concatenating .remove().exec();
                // use this:
                // Book.remove(books);

            }).remove().exec();
        } catch (err) {
            res.status(422).send(err);
        }
    });

    // TODO: add routes for app.put

    // frontend routes =========
    // routes to handle all angular requestes
    app.get('*', function (req, res) {
        res.sendfile('./app/frontend/index.html')
    });
};