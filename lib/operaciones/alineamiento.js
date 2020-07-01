'use strict'

const alineamientoFn = function (alineamientos) {
    let alineamiento = alineamientos[Math.floor(Math.random() * alineamientos.length)];
    return alineamiento;
}

module.exports = alineamientoFn