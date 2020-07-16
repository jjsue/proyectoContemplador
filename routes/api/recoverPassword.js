'use strict'
var express = require('express');
var router = express.Router();
const User = require('./../../models/user');
const { check, validationResult } = require('express-validator');
const { transporter } = require('./../../lib/mailServiceTransport');

router.post('/', async (req, res, next) => {
    try {
        //     let message = {
        //         from: "jjsue_95@hotmail.es",
        //         to: "jjsue1995@gmail.com",
        //         subject: "Testing sendinblue",
        //         text: "Hello, this is the body of the message my friend.",
        //         html: "<p>HTML version of the message</p>"
        //     }
        //     console.log(transporter);
        //     transporter.verify(function(error, success) {
        //         if (error) {
        //           console.log(error);
        //         } else {
        //           console.log("Server is ready to take our messages");
        //         }
        //       });
        //     const sendMail = await transporter.sendMail(message);
        //     console.log(sendMail);
        const correo = req.body.mail;
        const resetCode = Math.round(Math.random() * 999999);
        console.log(resetCode);
        const userFound = await User.findOneAndUpdate({ email: correo }, { resetPassCode: resetCode, codeUsed: false, codeDate: new Date() });
        if (userFound !== null) {
            return res.json({ result: "Enviando correo" });
        } else {
            return res.status(404).json({ result: "Not found" });
        }
    }
    catch (err) {
        next(err);
    }
});
router.put('/', async (req, res, next) => {
    try {
        const correo = req.body.mail;
        const code = req.body.code;
        const userFound = await User.findOne({ email: correo });
        console.log(userFound.resetPassCode);
        console.log(code);
        if (userFound !== null) {
            if ((new Date() - userFound.codeDate) / 1000 / 60 < 10) {
                if (!userFound.codeUsed) {
                    if (parseInt(code) === parseInt(userFound.resetPassCode)) {
                        const foundAndModify = await User.findOneAndUpdate({ email: correo }, { codeUsed: true, codeDate: null, resetCode: null });
                        if (foundAndModify !== null) {
                            res.json({ result: "Contraseña modificada" });
                        } else {
                            return res.status(500).json({ result: "Error" });
                        }
                    } else {
                        return res.status(401).json({ result: "Código no válido" });
                    }
                } else {
                    return res.status(401).json({ result: "El código ya ha sido usado" });
                }
            } else {
                return res.status(401).json({ result: "Codigo expirado" });
            }
        } else {
            return res.status(404).json({ result: "Not found" });
        }
    }
    catch (err) {
        next(err);
    }
});

module.exports = router;