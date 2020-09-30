'use strict';

const trapTablaDisparador = require("./../tablas/trapTablaEfecto");

const trapEfecto = function () {
    const localTable = JSON.parse(JSON.stringify(trapTablaDisparador));
    return localTable[Math.floor(Math.random() * localTable.length)];
}

module.exports = trapEfecto;