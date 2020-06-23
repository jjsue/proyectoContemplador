'use strict'
var Chance = require('chance');
var chance = new Chance();


const caracteristicasFn = function (important, dices) {
    //En el array nos llegan todas las caracteristicas ordenadas de mayor a menor importancia, y lo que vamos a hacer es tirar los dados para ver que caracteristicas les ponemos.
    //Lo primero el tipo de dado:
    let tiradas = [];
    let tiradaActual = [];
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
    console.log(tiradas);
    return 0;
}

module.exports = caracteristicasFn;