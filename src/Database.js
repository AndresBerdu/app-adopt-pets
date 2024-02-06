const mongoose = require('mongoose');

const URI = 'mongodb://localhost/db-adopt-pets';

mongoose.connect(URI, {
    useNewUrlParse: true,
    useCreateIndex: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB us connected');
})
