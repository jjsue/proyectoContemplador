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
const pgFn = require('../../lib/operaciones/pg');
const alineamientoFn = require('../../lib/operaciones/alineamiento');
const conjurosDiariosFn = require('./../../lib/operaciones/conjurosDiarios');
router.post('/', async (req, res, next) => {
    try {
        let createdCharacter = {};
        const clase = req.body.class;
        if (!(clase in clases)) {
            return res.status(400).json({error: 'Esa clase no la tenemos'});
        }
        const nivel = parseInt(req.body.level);
        if (nivel > 20 || nivel < 1 || isNaN(nivel) ) { //Comprobacion de nivel
            return res.status(400).json({ error: 'Has introducido mal el rango de nivel' });
        }
        const raza = req.body.race;
        if (!(raza in tablaRazas)) {
            return res.status(400).json({ error: 'La raza elegida no es una de las posibles actualmente' });
        }
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
        createdCharacter.especial = characterTable.especial;
        createdCharacter.tam = tablaRazas[raza][1]; //Tamaño
        createdCharacter.salvaciones = characterTable.salvaciones; //Salvaciones añadidas

        //Colocamos los puntos de caracteristica:
        createdCharacter.caracteristicas = caracteristicasFn(characterVarios.caracteristicas.concat(characterVarios.caracteristicasMenosImp), dices, nivel, razaT);

        //Introducimos las habilidades y las marcamos como cláseas.
        createdCharacter.habilidades = marcarClasea(characterVarios.hc, JSON.parse(JSON.stringify(habilidades)));

        //Dos pools diferentes, uno con las habilidades de clase que tomaran la mayoria de los puntos y otro con las no claseas.
        createdCharacter.habilidades = asignarRangos(createdCharacter.caracteristicas.Int[1], characterVarios.ph, raza, nivel, createdCharacter.habilidades, createdCharacter.caracteristicas);

        //Ahora debería ir con el equipamiento
        createdCharacter.equipo = equipamientoFn(characterVarios.posiblesArmas, characterVarios.posiblesArmaduras, characterVarios.posiblesEscudos);

        // Ahora ya todos los atributos derivados, ataques, etc.
        createdCharacter = derivadasFn(createdCharacter, characterTable, razaT);

        //Toca algo tan sencillo como los puntos de golpe
        createdCharacter.pg = pgFn(nivel, characterVarios.dg, createdCharacter.caracteristicas.Con[1]);

        //Alineamiento
        createdCharacter.alineamiento = alineamientoFn(characterVarios.alineamiento);

        //Conjuros
        createdCharacter.conjuros = 'caracteristicaConjuros' in characterVarios ? conjurosDiariosFn(createdCharacter.caracteristicas[characterVarios.caracteristicaConjuros][0], characterTable.conjuros) : null;

        //Respuesta
        res.json({ createdCharacter });

    }
    catch (err) {
        next(err);
    }
});

module.exports = router;