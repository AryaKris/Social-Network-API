const { connect, connection } = require('mongoose');
//always ending the connection with our specifc database
connect('mongodb://127.0.0.1:27017/userThoughts', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;
