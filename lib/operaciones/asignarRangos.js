'use strict'
var Chance = require('chance');
var chance = new Chance();
const asignarRangosFn = function (rangoInt, operacionHabilidad, raza, nivel, habilidades, caracteristicas) {
    //Lo primero que hay que hacer aquí es determinar los puntos de habilidad que tenemos
    let primerNivel = ((operacionHabilidad + rangoInt) * 4)
    if (primerNivel < 4) { //El minimo siempre debe ser 4
        primerNivel = 4
    }
    let subsiguientes = operacionHabilidad + rangoInt
    if (subsiguientes < 1) {
        subsiguientes = 1;
    }
    //Comprobamos si es humano, si lo es hay que añadir los puntos correspondientes.
    if (raza === 'humano') {
        primerNivel += 4;
        subsiguientes += 1;
    }
    let totalPoints = primerNivel + (subsiguientes * nivel);
    //Ahora que tenemos el total de puntos hay que empezar a repartir, como dije quiero hacer 3 pools y que se reparta de forma porcentual entre esos 3 pools.
    //Voy a sacar el primer pool, el de las habilidades claseas.
    let poolClaseasPosition = [];
    for (let i = 0; i < habilidades.length; i++) {
        if (habilidades[i][6]) {
            poolClaseasPosition.push([i]);
        }
    }

    let selectedPosition = 0;
    while (totalPoints !== 0) {
        let whereToPut = chance.d100()
        let claseaPosition = poolClaseasPosition[Math.floor(Math.random() * poolClaseasPosition.length)]
        if (whereToPut < 80 && habilidades[claseaPosition][4] < nivel + 3){
            habilidades[claseaPosition][4]++;
            totalPoints--;
            continue;
        } else {
            selectedPosition = Math.floor(Math.random() * habilidades.length);
            //Ahora vemos si la habilidad es de clase o no, además de comprobar el límite maximo permitido por el juego según el nivel
            if (habilidades[selectedPosition][6] && habilidades[selectedPosition][4] < nivel + 3){
                habilidades[selectedPosition][4]++ //Es de clase y automaticamente sumamos y continuamos el bucle
                totalPoints--;
                continue;
            } else if(totalPoints >= 2 && habilidades[selectedPosition][4] <= Math.floor((nivel + 3) / 2)){
                habilidades[selectedPosition][4]++;
                totalPoints -= 2;
                continue;
            } else{
                continue;
            }
        }
    }
    //Añadimos por ultimo los modificadores de caracteristica.
    for (let i = 0; i < habilidades.length; i++){
        habilidades[i][3] = caracteristicas[habilidades[i][1]][1];
    }
    return habilidades;
}

module.exports = asignarRangosFn;