'use strict'
var Chance = require('chance');
var chance = new Chance();


const caracteristicasFn = function (important, dices, nivel, raza) {
    //En el array nos llegan todas las caracteristicas ordenadas de mayor a menor importancia, y lo que vamos a hacer es tirar los dados para ver que caracteristicas les ponemos.
    //Lo primero el tipo de dado:
    let tiradas = [];
    let tiradaActual = [];
    let caracteristicas = {};
    switch (dices) {
        case '3d6': //Metodo por defecto D&D
            for (let i = 0; i < 6; i++) {
                tiradas.push(chance.rpg('3d6', { sum: true }));
            }
            break;
        case '4d6': //Método homebrew, 4d6 drop lowest
            for (let i = 0; i < 6; i++) {
                tiradaActual = chance.rpg('4d6');
                tiradaActual.sort(function (a, b) { //Ordenamos de mayor a menor, tal y como tenemos la importancia.
                    return b - a;
                });
                //Cortamos el último número:
                tiradaActual.pop();
                tiradas.push(tiradaActual.reduce((a, b) => a + b, 0));
            }
            break;
        case '2d6': //Metodo homebrew llamado heroico. 2d6 + 6
            tiradas.push(chance.rpg('2d6', { sum: true }) + 6);
            for (let i = 0; i < 6; i++) {
                tiradaActual = (chance.rpg('2d6', { sum: true }));
                tiradaActual += 6;
                tiradas[i] = tiradaActual;
            }
            break;
        default: //Como default usamos el método por defecto de D&D
            for (let i = 0; i < 6; i++) {
                tiradas.push(chance.rpg('3d6', { sum: true }));
            }
    }
    tiradas.sort(function (a, b) { //Ordenamos de mayor a menor, tal y como tenemos la importancia.
        return b - a;
    });
    //Añadimos los beneficios dependientes del nivel a las 3 habilidades principales.
    let dependOnLevel = Math.floor(nivel / 4);
    let dependOnPosition = 0;
    while (dependOnLevel > 0) {
        tiradas[dependOnPosition]++;
        if (dependOnPosition === 2) {
            dependOnPosition = 0;
        }
        dependOnPosition++;
        dependOnLevel--;
    }
    console.log(tiradas);
    //En este punto solo hay que hacer un objeto que contenga las tiradas de caracteristicas ademas de los modificadores de habilidad
    for (let i = 0; i < important.length; i++) {
            caracteristicas[important[i]] = [tiradas[i] + raza[0][important[i]], Math.floor((tiradas[i] + raza[0][important[i]] - 10) / 2)];
    }
    return caracteristicas;
}

module.exports = caracteristicasFn;