'use strict'
var Chance = require('chance');
var chance = new Chance();
const asignarRangosFn = function (rangoInt, operacionHabilidad, raza, nivel, habilidades) {
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
        if (habilidades[i][2]) {
            poolClaseasPosition.push([i]);
        }
    }
    // console.log(poolClaseas[Math.floor(Math.random() * poolClaseas.length)]);
    // console.log(Math.floor(Math.random() * poolClaseas.length));
    let selectedPosition = 0;
    while (totalPoints !== 0) {
        let whereToPut = chance.d100()
        if (whereToPut < 80) {
            habilidades[poolClaseasPosition[Math.floor(Math.random() * poolClaseasPosition.length)]][1]++;
            totalPoints--;
        } else {
            selectedPosition = Math.floor(Math.random() * habilidades.length);
            //Ahora vemos si la habilidad es de clase o no
            if (habilidades[selectedPosition][2]){
                habilidades[selectedPosition][1]++ //Es de clase y automaticamente sumamos y continuamos el bucle
                totalPoints--;
                continue;
            } else if(totalPoints >= 2){
                habilidades[selectedPosition][1]++;
                totalPoints -= 2;
            } else{
                continue;
            }
        }
    }
    //console.log(habilidades);
}

module.exports = asignarRangosFn;