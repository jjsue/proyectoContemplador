'use strict';

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
});

const User = mongoose.model('user', userSchema);

module.exports = User;