'use strict';

//Primero vamos con las armas
const equipamientoFn = function (armas, armaduras) {
    //console.log(armas.cuerpo[Math.floor(Math.random() * armas.cuerpo.length)]);
    //Las dos primeras son armas cuerpo a cuerpo, la segunda es un arma a distancia
    let equipo = {
        armas: [],
        armadura: null,
    }
    equipo.armas.push(armas.cuerpo[Math.floor(Math.random() * armas.cuerpo.length)]);
    equipo.armas.push(armas.cuerpo[Math.floor(Math.random() * armas.cuerpo.length)]);
    equipo.armas.push(armas.distancia[Math.floor(Math.random() * armas.distancia.length)]);
    equipo.armadura = (armaduras[Math.floor(Math.random() * armaduras.length)]);
    
    return equipo;
}

module.exports = equipamientoFn;