const { connect, connection } = require('mongoose');

connect('mongodb://mongodb://127.0.0.1:27017/postsTags', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;
