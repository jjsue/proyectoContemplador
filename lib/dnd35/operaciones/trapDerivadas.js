'use strict';

const trapTablaDisparador = require("./../tablas/trapTablaDisparador");
const trapTablaDesactivacion = require("./../tablas/trapTablaDesactivacion");
const armas = require('./../tablas/armas');
const trapTablaEfecto = require("./../tablas/trapTablaEfecto");
//Primero lo modificable que es el valor de desafio, segundo y tercero el rango de la CD.
const cdBuscar = {
    "-1": [0, 15],
    "0": [16, 24],
    "1": [25, 29],
    "2": [30, 35],
};
const cdInutilizar = {
    "-1": [0, 15],
    "0": [16, 24],
    "1": [25, 29],
    "2": [30, 35],
};
const salvacionDeReflejos = {
    "-1": [0, 15],
    "0": [16, 24],
    "1": [25, 29],
    "2": [30, 35],
};
const bonificadorDeAtaque = {
    "-2": [-5, 0],
    "-1": [1, 5],
    "0": [6, 14],
    "1": [15, 19],
    "2": [20, 24],
};
const activacionRetardada = { //El segundo número hace referencia a los asaltos que tarda en activarse.
    "-1": 1,
    "1": 2,
    "2": 3,
    "3": 4,
};
const ataqueDeToque = {
    "1": "Ataque de toque",
};
const blancoMultiple = {
    "1": "Blancos múltiples",
};
const estacasEnFoso = {
    "1": "Estacas en foso",
};
const liquido = {
    "5": "Estancia se inunda",
};
const veneno = {
    "1": ["aceite de sangreverde", "hiñito azul", "líquido cerebral de carroñero reptante", "raíz sanguinaria", "veneno de ciempiés pequeño", "veneno de víbora negra"],
    "2": ["veneno de araña mediana"],
    "3": ["esencia de sombra", "pasta de raíz viraguia", "polvo de ungol", "residuo de hoija cativera", "veneno de avispa gigante", "veneno de escorpión grande"],
    "4": ["bruma de la demencia", "veneno de gusano púrpura", "vomicalia"],
    "5": ["hoja mortal", "raíz de terinav", "veneno de draco"],
    "6": ["efluvios somarreros", "bilis de dragón"],
    "8": ["extracto de loto negro"],
};

function valorDesafioCuerpoCuerpo(trap) {

}

const trapDerivadas = function (generatedTrap) { //Hay que tener en cuenta el daño medio
    var trapToModify = JSON.parse(JSON.stringify(generatedTrap));
    if (generatedTrap.efecto[0] === trapTablaEfecto[1][0]) {
        trapToModify = valorDesafioCuerpoCuerpo(trapToModify);
    }
    return trapToModify;
}

module.exports = trapDerivadas;