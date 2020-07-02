'use strict';
require('dotenv').config();
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: { type: String, unique: true, index: true },
    email: { type: String, unique: true, index: true },
    password: String,
});

const bcrypt = require('bcrypt');
userSchema.statics.cifrado = async function (passwd) {
    const result = await bcrypt.hash(passwd, parseInt(process.env.SALTROUNDS));
    return result;
}

const User = mongoose.model('usersDatabase', userSchema);

module.exports = User;