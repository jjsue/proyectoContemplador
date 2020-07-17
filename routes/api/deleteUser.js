'use strict'
var express = require('express');
var router = express.Router();
const User = require('./../../models/user');
const Pnj = require('./../../models/pnj');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { json } = require('express');
const { findOneAndDelete } = require('./../../models/user');

router.delete('/', async (req, res, next) => {
    try {
        let userId = jwt.verify(req.cookies.authToken, process.env.JWT_PASS);
        const userName = req.body.user;
        const bodyMail = req.body.email;
        const password = req.body.password;
        const userFoundById = await User.findById(userId._id);
        const userFoundByMail = await User.findOne({ email: bodyMail });
        const userFoundByUserName = await User.findOne({ userName: userName });
        if (userFoundById !== null && userFoundByMail !== null && userFoundByUserName !== null) {
            let idArray = [];
            idArray.push(JSON.parse(JSON.stringify(userFoundById._id)));
            idArray.push(JSON.parse(JSON.stringify(userFoundByMail._id)));
            idArray.push(JSON.parse(JSON.stringify(userFoundByUserName._id)));
            if (idArray[0] === idArray[1] && idArray[0] === idArray[2]){
                // const deleteUser = await User.findByIdAndDelete()
                if (!await bcrypt.compare(password, userFoundById.password)){
                    const deleteUser = await User.findByIdAndDelete(idArray[0]);
                    const deletedPnj = await Pnj.deleteMany({creatorId: idArray[0]});
                    console.log(deleteUser);
                    console.log(deletedPnj);
                    return res.status(204).json({result: "Usuario borrado"});
                } else {
                    return res.status(401).json({ result: "Contraseña no válida" });
                }
            } else {
                return res.status(401).json({ result: "Alguno de los parametros no es correcto" });
            }
        }
        else {
            return res.status(401).json({ result: "Alguno de los parametros no es correcto" });
        }
    }
    catch (err) {
        next(err);
    }
});

module.exports = router;