'use strict'
var express = require('express');
var router = express.Router();
const Pnj = require('./../../models/pnj');
const jwt = require('jsonwebtoken');
const clases = require('./../../lib/tablas/characterBase');
const tablaRazas = require('./../../lib/tablas/razas');
const tablaHabilidades = require('./../../lib/tablas/skills');
const { check, validationResult } = require('express-validator');

function checkSalvaciones(salvaciones) {
    //Validaciones de las salvaciones.
    let valuesArray = Object.keys(salvaciones)
    if (valuesArray.includes('fortaleza') && valuesArray.includes('reflejos') && valuesArray.includes('voluntad') && valuesArray.length === 3) {
        if (!isNaN(parseInt(salvaciones.fortaleza)) && !isNaN(parseInt(salvaciones.reflejos)) && !isNaN(parseInt(salvaciones.voluntad))) {
            if ((parseFloat(salvaciones.fortaleza) % 1 === 0) && (parseFloat(salvaciones.reflejos) % 1 === 0) && (parseFloat(salvaciones.voluntad) % 1 === 0)) {
                return true
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}
function checkCaracteristicas(caract) {
    let valuesArray = Object.keys(caract);
    if (valuesArray.includes('Fue') && valuesArray.includes('Des') && valuesArray.includes('Con') && valuesArray.includes('Int') && valuesArray.includes('Sab') && valuesArray.includes('Car') && valuesArray.length === 6) {
        for (let i = 0; i < valuesArray.length; i++) {
            if (parseFloat(caract[valuesArray[i]][0]) % 1 === 0 && parseFloat(caract[valuesArray[i]][1]) % 1 === 0) {
                continue;
            }
            else return false
        }
        for (let i = 0; i < valuesArray.length; i++) {
            if (Math.floor((parseInt(caract[valuesArray[i]][0]) - 10) / 2) === parseInt(caract[valuesArray[i]][1])) {
                continue;
            }
            else return false
        }
        return true;
    } else {
        return false;
    }
}

function checkContainsOneClass(clase) {
    return clase.toLowerCase() in clases ? true : false;;
}

function ckeckBetween(level) {
    var nivelito = level
    if (parseInt(level) >= 1 && parseInt(level) <= 20 && parseFloat(level) % 1 === 0) {
        return true;
    } else {
        return false;
    }
}
function checkRaza(razaPj) {
    return razaPj.toLowerCase() in tablaRazas ? true : false;
}

function checkSpecial(valores, valores2) {
    let levelOfClass = clases[valores2.req.body.clase.toLowerCase()][valores2.req.body.nivel];
    if (levelOfClass.especial.length === valores.length) {
        for (let i = 0; i < valores.length; i++) {
            if (levelOfClass.especial.includes(valores[i])) {
                continue;
            } else {
                return false;
            }
        }
    } else {
        return false
    }
    return true;
}
function checkTam(valor0, valor1) {
    if (tablaRazas[valor1.req.body.raza.toLowerCase()][1] === valor0) {
        return true;
    } else {
        return false;
    }
}

function checkHabilidades(valor0, valor1) {
    let duplicidadArray = [] //Falta terminar ver los duplicados y hacer las operaciones sobre cuantos puntos tiene y cuantos debería tener.
    let trueOrFalse = false
    if (valor0.length === tablaHabilidades.length) { //Longitud comprobada
        for (let i = 0; i < valor0.length; i++) {
            trueOrFalse = false;
            for (let j = 0; j < valor0.length; j++) {
                if (tablaHabilidades[i][0].includes(valor0[j][0])) {
                    duplicidadArray.push(valor0[j][0]);
                    trueOrFalse = true;
                }
            }
            if (!trueOrFalse) {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
}
function checkEquipo(equipo) {
    if (Object.keys(equipo).length === 3) { //Hay que hacer muchas mas validaciones aqui
        return true
    } else {
        return false
    }
}

router.post('/', [
    check('authToken').isJWT(),
    check('name').isString().isLength({ max: 32, min: 3 }),
    check('clase').isString().custom((value) => {
        if (checkContainsOneClass(value)) {
            return true;
        } else {
            return false;
        }
    }),
    check('nivel').isNumeric().custom((value) => {
        if (ckeckBetween(value)) {
            return true;
        } else {
            return false;
        }
    }),
    check('raza').isString().custom((value) => {
        if (checkRaza(value)) {
            return true;
        } else {
            return false;
        }
    }),
    check('especial').isArray().custom((value, value2) => {
        if (checkSpecial(value, value2)) {
            return true;
        } else {
            return false;
        }
    }),
    check('tam').isString().custom((value, value2) => {
        if (checkTam(value, value2)) {
            return true;
        } else {
            return false;
        }
    }),
    check('habilidades').isArray().custom((value, value2) => {
        if (checkHabilidades(value, value2)) {
            return true;
        } else {
            return false;
        }
    }),
    check('salvaciones').custom((value) => {
        if (checkSalvaciones(value)) {
            return true;
        } else {
            return false;
        }
    }),
    check('caracteristicas').custom((value) => {
        if (checkCaracteristicas(value)) {
            return true;
        } else {
            return false;
        }
    }),
    check('equipo').custom((value) => { //Hay que hacer
        if (checkEquipo(value)) {
            return true;
        } else {
            return false;
        }
    }),
    check('ataqueBase').isArray(),
    check('ataques').isArray(),
    check('ca').isArray(),
    check('velocidad').isNumeric(),
    check('alineamiento').isString().isLength({ max: 2 }),
    //Falta check conjuros.
], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            let userId = jwt.verify(req.cookies.authToken, process.env.JWT_PASS);
            const todosPersonajes = await Pnj.find({ creatorId: userId._id });
            for (let i = 0; i < todosPersonajes.length; i++) {
                if (todosPersonajes[i].name === req.body.name) {
                    return res.status(422).json({ result: "Ya tienes un personaje con ese nombre" });
                } else {
                    continue;
                }
            }
            const dataToSave = req.body;
            dataToSave.creatorId = userId._id;
            dataToSave.isPublic = false;
            dataToSave.creationDate = new Date();
            const pnjToSave = new Pnj(dataToSave);
            const pnjSaved = await pnjToSave.save();
            res.status(201).json({ result: true });
        }

    }
    catch (err) {
        next(err);
    }
});

module.exports = router;