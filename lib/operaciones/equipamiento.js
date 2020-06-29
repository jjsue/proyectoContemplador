'use strict';

//Primero vamos con las armas
const equipamientoFn = function (armas, armaduras, escudos) {
    //console.log(armas.cuerpo[Math.floor(Math.random() * armas.cuerpo.length)]);
    //Las dos primeras son armas cuerpo a cuerpo, la segunda es un arma a distancia
    let equipo = {
        armas: [],
        armadura: null,
        escudo: null,
    }
    equipo.armas.push(armas.cuerpo[Math.floor(Math.random() * armas.cuerpo.length)]);
    equipo.armas.push(armas.cuerpo[Math.floor(Math.random() * armas.cuerpo.length)]);
    equipo.armas.push(armas.distancia[Math.floor(Math.random() * armas.distancia.length)]);
    if (armaduras !== null) {
        equipo.armadura = (armaduras[Math.floor(Math.random() * armaduras.length)]);
    }
    if (escudos !== null) {
        equipo.escudo = (escudos[Math.floor(Math.random() * escudos.length)]);
    }

    return equipo;
}

module.exports = equipamientoFn;