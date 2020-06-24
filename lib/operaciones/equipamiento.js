'use strict';

const asignarRangosFn = require("./asignarRangos");
const { armasSencillas } = require("../tablas/armas");

//Primero vamos con las armas
const equipamientoFn = function (posibles) {
    //console.log(posibles.cuerpo[Math.floor(Math.random() * posibles.cuerpo.length)]);
    //Las dos primeras son armas cuerpo a cuerpo, la segunda es un arma a distancia
    let armasElegidas = {
        armas: [],
        armadura: [],
    }
    armasElegidas.armas.push(posibles.cuerpo[Math.floor(Math.random() * posibles.cuerpo.length)]);
    armasElegidas.armas.push(posibles.cuerpo[Math.floor(Math.random() * posibles.cuerpo.length)]);
    armasElegidas.armas.push(posibles.distancia[Math.floor(Math.random() * posibles.distancia.length)]);
    return armasElegidas;
}

module.exports = equipamientoFn;