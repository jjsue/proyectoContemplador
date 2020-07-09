'use strict'

const penalizadorArmaduraHabilidadesFn = require("./penalizadorArmaduraHabilidades");

const derivadasFn = function (character, table, tablaRaza) {
    //Primero voy a calcular los ataques base y los voy a meter en un array.
    character.ataqueBase = [table.ataqueBase];
    //calculamos el resto de ataques base:
    while (character.ataqueBase[character.ataqueBase.length - 1] > 5) {
        character.ataqueBase.push(character.ataqueBase[character.ataqueBase.length - 1] - 5);
    }
    //Procedo a poner los ataques de cada arma.
    let weaponDamage = 3;
    if (tablaRaza[1] === 'peq') { //Damos por hecho que el personaje es de tamaño mediano, si fuera pequeño cambiamos el daño del arma.
        weaponDamage = 2;
    }
    //Ahora ya asignamos los ataques de las armas.
    character.ataques = [['','',''], ['','',''], ['','','']];
    console.log(character.ataques[0][0] + character.ataques[1][0], character.ataques[2][0]);
    for (let i = 0; i < character.equipo.armas.length; i++) {
        character.ataques[i][0] = character.equipo.armas[i][0];
        for (let j = 0; j < character.ataqueBase.length; j++) {
            character.ataques[i][1] = (i === 2) ? character.ataques[i][1] + '+' + (character.ataqueBase[j] + character.caracteristicas.Des[1]) + ' ' : character.ataques[i][1] + '+' + (character.ataqueBase[j] + character.caracteristicas.Fue[1]) + ' ';
        }
        //Aqui abajo ponemos el daño por cada ataque.
        if (character.equipo.armas[i][8]) { //Comprobamos si este arma se blande a dos manos para aplicarle fuerza 1.5
            character.ataques[i][2] = `${character.equipo.armas[i][weaponDamage]} + ${Math.floor(character.caracteristicas.Fue[1] * 1.5)}`;
        } else {
            character.ataques[i][2] = `${character.equipo.armas[i][weaponDamage]} + ${character.caracteristicas.Fue[1]}`;
        }
    }

    //Vamos ahora con el calculo de la CA
    // 10 + armadura + escudo + des
    character.ca = [];
    //El orden de las CA en el array va a ser exactamente el mismo que en la ficha de jugador. Total-Toque-Desprevenido

    //Comprobamos la destreza maxima de la armadura y actuamos en consecuencia:
    if (character.equipo.armadura !== null) { //Si tiene armadura usamos este bloque
        let destreza = (character.caracteristicas.Des[1] <= character.equipo.armadura[3]) ? character.caracteristicas.Des[1] : character.equipo.armadura[3];
        character.ca.push(10 + character.equipo.armadura[2] + destreza);
        character.ca.push(10 + destreza);
        character.ca.push(10 + character.equipo.armadura[2]);
        character.velocidad = (tablaRaza[2] === 30) ? character.equipo.armadura[6] : character.equipo.armadura[7]; //Dependiendo de la velocidad terrestre base tomamos la velocidad maxima de la armadura.
        //Aqui voy a meter un modulo para el penalizador de armadura.
        character.habilidades = penalizadorArmaduraHabilidadesFn(character.habilidades, character.equipo.armadura[4]);
    }
    if (character.equipo.armadura === null) { //Si no tiene armadura usamos este bloque
        let destreza = character.caracteristicas.Des[1];
        character.ca.push(10 + destreza);
        character.ca.push(10 + destreza);
        character.ca.push(10);
        character.velocidad = tablaRaza[2];
    }
    //Mismo bloque de comprobaciones ahora para el escudo.
    if (character.equipo.escudo !== null) { //Si tiene escudo usamos este bloque
        character.ca[0] = character.ca[0] + character.equipo.escudo[2];
        character.ca[2] = character.ca[2] + character.equipo.escudo[2];
        //Aqui voy a meter un modulo para el penalizador de armadura.
        character.habilidades = penalizadorArmaduraHabilidadesFn(character.habilidades, character.equipo.escudo[4]);
    }


    return character;
}

module.exports = derivadasFn;