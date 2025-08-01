const mongoose = require('mongoose');
const { messageDB } = require('../config');

const messageSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    subject: { type: String },
    message: { type: String },
});

const message = messageDB.model("messageData", messageSchema);
module.exports = message;