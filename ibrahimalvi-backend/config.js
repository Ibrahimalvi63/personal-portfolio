const mongoose = require('mongoose');
require('dotenv').config();

const biodataDB = mongoose.createConnection(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

biodataDB.on('connected', () => console.log('Biodata DB connected'));
biodataDB.on('error', err => console.error('Biodata DB error:', err));

const messageDB = mongoose.createConnection(process.env.MESSAGE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

messageDB.on('connected', () => console.log('Message DB connected'));
messageDB.on('error', err => console.error('Message DB error:', err));

module.exports = { biodataDB, messageDB };
