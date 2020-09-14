'use strict';

const trapTablaRearme = require("./../tablas/trapTablaRearme");

//Primero vamos con las armas
const trapDisparador = function () {
    //Esto puede ser un math.random del disparador
    const localTable = JSON.parse(JSON.stringify(trapTablaRearme)) //Lo primero crear una deepcopy.
    return localTable[Math.floor(Math.random() * localTable.length)];
}

module.exports = trapDisparador;