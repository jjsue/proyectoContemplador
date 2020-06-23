'use strict'

const MarcarClasea = function (claseas, habilidades) {
    for (let i = 0; i < habilidades.length; i++) {
        for (let j = 0; j < claseas.length; j++) {
            if (habilidades[i][0] === claseas[j]){
                habilidades[i][2] = true;
            } else {
                continue;
            }
        }
    }
    return habilidades;
}

module.exports = MarcarClasea;