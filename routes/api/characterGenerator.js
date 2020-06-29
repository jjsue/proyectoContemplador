'use strict'
var express = require('express');
var router = express.Router();
const habilidades = require('./../../lib/tablas/skills');
const clases = require('./../../lib/tablas/characterBase');
const tablaRazas = require('./../../lib/tablas/razas');
const caracteristicasFn = require('./../../lib/operaciones/caracteristicas');
const marcarClasea = require('./../../lib/operaciones/marcarClasea');
const asignarRangos = require('./../../lib/operaciones/asignarRangos');
const equipamientoFn = require('./../../lib/operaciones/equipamiento');
const derivadasFn = require('./../../lib/operaciones/derivadas');
router.post('/', async (req, res, next) => {
    try {
        let createdCharacter = {};
        const clase = req.body.class;
        const nivel = parseInt(req.body.level);
        const raza = req.body.race;
        const razaT = tablaRazas[raza];
        const dices = req.body.dices;
        //Tomamos la tabla del nivel del personaje
        const characterTable = clases[clase][nivel];
        const characterVarios = clases[clase].varios;
        //Comenzamos a trabajar con nuestro nuevo NPC
        //Lo primero que vamos a añadir es el nombre de la clase en mayuscula:
        createdCharacter.clase = clase.charAt(0).toUpperCase() + clase.slice(1);
        createdCharacter.nivel = nivel; //Añado nivel
        createdCharacter.raza = raza.charAt(0).toUpperCase() + raza.slice(1); //Añado raza con la primera en mayuscula
        //Colocamos los puntos de caracteristica:
        createdCharacter.caracteristicas = caracteristicasFn(characterVarios.caracteristicas.concat(characterVarios.caracteristicasMenosImp), dices, nivel, razaT);
        //Introducimos las habilidades y las marcamos como cláseas.
        createdCharacter.habilidades = marcarClasea(characterVarios.hc, habilidades);
        //Dos pools diferentes, uno con las habilidades de clase que tomaran la mayoria de los puntos y otro con las no claseas.
        createdCharacter.habilidades = asignarRangos(createdCharacter.caracteristicas.Int[1], characterVarios.ph, raza, nivel, createdCharacter.habilidades, createdCharacter.caracteristicas);
        //Ahora debería ir con el equipamiento
        createdCharacter.equipo = equipamientoFn(characterVarios.posiblesArmas, characterVarios.posiblesArmaduras, characterVarios.posiblesEscudos);
        // Ahora ya todos los atributos derivados, ataques, etc.
        createdCharacter = derivadasFn(createdCharacter, characterTable, razaT);
        res.json({ createdCharacter });

    }
    catch (err) {
        next(err);
    }
});

module.exports = router;