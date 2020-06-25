'use strict'


const derivadasFn = function (character, table, tablaRaza) {
    //Primero voy a calcular los ataques base y los voy a meter en un array.
    character.ataqueBase = [table.ataqueBase];
    //calculamos el resto de ataques base:
    console.log
    while (character.ataqueBase[character.ataqueBase.length - 1] > 5) {
        character.ataqueBase.push(character.ataqueBase[character.ataqueBase.length - 1] - 5);
    }
    //Procedo a poner los ataques de cada arma.
    let weaponDamage = 3;
    if (tablaRaza[1] === 'peq') { //Damos por hecho que el personaje es de tamaño mediano, si fuera pequeño cambiamos el daño del arma.
        weaponDamage = 2;
    }
    //Ahora ya asignamos los ataques del arma.
    character.ataques = [];
    for (let i = 0; i < character.equipo.armas.length; i++) {
        character.ataques.push(character.equipo.armas[i][0]);
        for (let j = 0; j< character.ataqueBase.length; j++){
            character.ataques.push(character.ataqueBase[j] + character.caracteristicas.Fue[1]);
        }
        //Aqui abajo ponemos el daño por cada ataque.
        character.ataques.push(`${character.equipo.armas[i][weaponDamage]} + ${character.caracteristicas.Fue[1]}`);
    }

    //Vamos ahora con el calculo de la CA
    // 10 + armadura + escudo + des
    character.ca = [];
    //El orden de las CA en el array va a ser exactamente el mismo que en la ficha de jugador. Total-Toque-Desprevenido

    //Comprobamos la destreza maxima de la armadura y actuamos en consecuencia:
    let destreza = (character.caracteristicas.Des[1] <= character.equipo.armadura[3]) ? character.caracteristicas.Des[1] : character.equipo.armadura[3];
    console.log(destreza);
    character.ca.push(10 + character.equipo.armadura[2] + destreza);
    character.ca.push(10 + destreza);
    character.ca.push(10 + character.equipo.armadura[2]);
}

module.exports = derivadasFn;