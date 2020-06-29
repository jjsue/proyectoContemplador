'use strict'
const penalizadorArmaduraHabilidadesFn = function (habilidades, penalizador) {
    console.log(habilidades);
    console.log(penalizador);
    for (let i = 0; i < habilidades.length; i++) {
        if (habilidades[i][2]) {
            if (habilidades[i][0] === 'Nadar') {
                habilidades[i][5] = habilidades[i][5] + penalizador * 2;
            } else {
                console.log(`Entra en ${habilidades[i][0]}`);
                habilidades[i][5] = habilidades[i][5] + penalizador;
            }
        } else {
            continue;
        }
    }
    return habilidades;
}


module.exports = penalizadorArmaduraHabilidadesFn;