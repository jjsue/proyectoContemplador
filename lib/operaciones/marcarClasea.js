'use strict'

const MarcarClasea = function (claseas, habilidades) {
    let counter = 0;
    for (let i = 0; i < habilidades.length; i++) {
        for (let j = 0; j < claseas.length; j++) {
            if (habilidades[i][0] === claseas[j]){
                habilidades[i][2] = true;
                counter++;
                console.log(counter);
            } else {
                continue;
            }
        }
    }
    return habilidades;
}

module.exports = MarcarClasea;