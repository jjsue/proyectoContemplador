'use strict';

const trapTablaDesactivacion = require("./../tablas/trapTablaDesactivacion");

//Primero vamos con las armas
const trapDesactivacion = function () {
    //Esto puede ser un math.random del disparador
    const localTable = JSON.parse(JSON.stringify(trapTablaDesactivacion)) //Lo primero crear una deepcopy.
    return localTable[Math.floor(Math.random() * localTable.length)];
}

module.exports = trapDesactivacion;