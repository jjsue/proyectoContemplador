'use strict'
var express = require('express');
var router = express.Router();
const User = require('./../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

router.post('/', async (req, res, next) => {
    try {
        let userId = jwt.verify(req.cookies.authToken, process.env.JWT_PASS);
        res.clearCookie("userName");
        res.clearCookie("authToken");
        res.status(204).send("ok");
    }
    catch (err) {
        if (err.message === "jwt must be provided") {
            return res.status(400).json({ result: "No estás logado" });
        }
        else {
            next(err);
        }
    }
});

module.exports = router;