'use strict';

const trapTablaDisparador = require("./../tablas/trapTablaDisparador");

const trapDisparador = function () {
    const localTable = JSON.parse(JSON.stringify(trapTablaDisparador))
    return localTable[Math.floor(Math.random() * localTable.length)];
}

module.exports = trapDisparador;