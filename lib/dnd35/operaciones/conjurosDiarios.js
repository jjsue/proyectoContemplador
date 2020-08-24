'use strict'
const conjurosDiariosTabla = require("../tablas/conjurosDiariosTabla");

const conjurosDiariosFn = function (numCaracteristica, conjuros) {
    for (let i = 0; i<conjuros.length; i++){
        if (conjuros[i] === false){
            conjuros[i] = 0;
        } else {
            conjuros[i] += conjurosDiariosTabla[numCaracteristica][i];
        }
    }
    return conjuros;
}

module.exports = conjurosDiariosFn;