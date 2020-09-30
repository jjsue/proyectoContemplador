'use strict';

const trapTablaDesactivacion = require("./../tablas/trapTablaDesactivacion");

const trapDesactivacion = function () {
    const localTable = JSON.parse(JSON.stringify(trapTablaDesactivacion));
    return localTable[Math.floor(Math.random() * localTable.length)];
}

module.exports = trapDesactivacion;