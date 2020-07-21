'use strict'
var express = require('express');
var router = express.Router();
const User = require('./../../models/user');
const { check, validationResult } = require('express-validator');
//const nodemailer = require('nodemailer');
const transport = require('./../../lib/mailServiceTransport');

router.post('/', async (req, res, next) => {
    try {
        const correo = req.body.mail;
        const resetCode = Math.round(Math.random() * 999999);
        const userFound = await User.findOneAndUpdate({ email: correo }, { resetPassCode: resetCode, codeUsed: false, codeDate: new Date() });
        transport.verify(function(error, success) {
            if (error) {
              console.log(error);
            } else {
              console.log("Server is ready to take our messages");
            }
          });
        if (userFound !== null) {
            let message = {
                from: "equipopassword@proyectocontemplador.es",
                to: correo,
                subject: "Reseteo de contraseña",
                text: `Tu código de reseteo es: ${resetCode}.
                Este codigo tiene un tiempo de expiración de diez minutos`,
            }
            transport.sendMail(message, (err, info) => {
                if (err === null) {
                    return res.json({ result: "Correo enviado" });
                }
                else {
                    return res.status(500).json({ result: "Error en el envio de correo" });
                }
            });
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
        const newPassword = req.body.password;
        if (userFound !== null) {
            if ((new Date() - userFound.codeDate) / 1000 / 60 < 10) {
                if (!userFound.codeUsed) {
                    if (parseInt(code) === parseInt(userFound.resetPassCode)) {
                        const foundAndModify = await User.findOneAndUpdate({ email: correo }, { codeUsed: true, codeDate: null, resetCode: null, password: await User.cifrado(newPassword) });
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