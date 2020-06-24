'use strict'
const armaduras = require('./../tablas/armaduras');
const armas = require('./../tablas/armas');
const clases = {
    barbaro: {
        varios: {
            dg: 12,
            alineamiento: ["NB", "NN", "NM", "CB", "CN", "CM"],
            caracteristicas: ["Fue", "Con", "Des"],
            caracteristicasMenosImp: ["Sab", "Car", "Int"],
            hc: ["Artesania", "Escuchar", "Intimidar", "Montar", "Nadar", "Saltar", "Supervivencia", "Trato con animales", "Trepar"],
            ph: 4,
            posiblesArmas: {
                cuerpo: [armas.armasMarciales.armasUnaManoCaC.cimitarra, armas.armasMarciales.armasUnaManoCaC.martilloDeGuerra],
                distancia: [armas.armasMarciales.armasAtaqueDistancia.arcoCorto, armas.armasSencillas.armasAtaqueDistancia.jabalina],
            },
            posiblesArmaduras: [armaduras.armaduraLigera.acolchada, armaduras.armaduraLigera.camisoteDeMallas, armaduras.armaduraLigera.cuero, armaduras.armaduraLigera.cueroTachonado],
        },
        1: {
            ataqueBase: 1,
            salvaciones: {
                fortaleza: 2,
                reflejos: 0,
                voluntad: 0,
            },
            especial: ["Analfabetismo", "Furia 1/dia", "Movimiento Rápido"],
        },
        2: {
            ataqueBase: 2,
            salvaciones: {
                fortaleza: 3,
                reflejos: 0,
                voluntad: 0,
            },
            especial: ["Analfabetismo", "Furia 1/dia", "Movimiento Rápido", "Esquiva Asombrosa"],
        },
        3: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 3,
                reflejos: 1,
                voluntad: 1,
            },
            especial: ["Analfabetismo", "Furia 1/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Sentido de las trampas +1"],
        },
        4: {
            ataqueBase: 4,
            salvaciones: {
                fortaleza: 4,
                reflejos: 1,
                voluntad: 1,
            },
            especial: ["Analfabetismo", "Furia 2/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Sentido de las trampas +1"],
        },
        5: {
            ataqueBase: 5,
            salvaciones: {
                fortaleza: 4,
                reflejos: 1,
                voluntad: 1,
            },
            especial: ["Analfabetismo", "Furia 2/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +1"],
        },
        6: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 5,
                reflejos: 2,
                voluntad: 2,
            },
            especial: ["Analfabetismo", "Furia 2/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +2"],
        },
        7: {
            ataqueBase: 7,
            salvaciones: {
                fortaleza: 5,
                reflejos: 2,
                voluntad: 2,
            },
            especial: ["Analfabetismo", "Furia 2/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +2", "Reducción del daño 1/--"],
        },
        8: {
            ataqueBase: 8,
            salvaciones: {
                fortaleza: 6,
                reflejos: 2,
                voluntad: 2,
            },
            especial: ["Analfabetismo", "Furia 3/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +2", "Reducción del daño 1/--"],
        },
        9: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 6,
                reflejos: 2,
                voluntad: 2,
            },
            especial: ["Analfabetismo", "Furia 3/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +3", "Reducción del daño 1/--"],
        },
        10: {
            ataqueBase: 10,
            salvaciones: {
                fortaleza: 7,
                reflejos: 3,
                voluntad: 3,
            },
            especial: ["Analfabetismo", "Furia 3/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +3", "Reducción del daño 2/--"],
        },
        11: {
            ataqueBase: 11,
            salvaciones: {
                fortaleza: 7,
                reflejos: 3,
                voluntad: 3,
            },
            especial: ["Analfabetismo", "Furia Mayor", "Furia 3/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +3", "Reducción del daño 2/--"],
        },
        12: {
            ataqueBase: 12,
            salvaciones: {
                fortaleza: 8,
                reflejos: 4,
                voluntad: 4,
            },
            especial: ["Analfabetismo", "Furia Mayor", "Furia 4/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +4", "Reducción del daño 2/--"],
        },
        13: {
            ataqueBase: 13,
            salvaciones: {
                fortaleza: 8,
                reflejos: 4,
                voluntad: 4,
            },
            especial: ["Analfabetismo", "Furia Mayor", "Furia 4/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +4", "Reducción del daño 3/--"],
        },
        14: {
            ataqueBase: 14,
            salvaciones: {
                fortaleza: 9,
                reflejos: 4,
                voluntad: 4,
            },
            especial: ["Analfabetismo", "Furia Mayor", "Voluntad indomable", "Furia 4/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +4", "Reducción del daño 3/--"],
        },
        15: {
            ataqueBase: 15,
            salvaciones: {
                fortaleza: 9,
                reflejos: 5,
                voluntad: 5,
            },
            especial: ["Analfabetismo", "Furia Mayor", "Voluntad indomable", "Furia 4/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +5", "Reducción del daño 3/--"],
        },
        16: {
            ataqueBase: 16,
            salvaciones: {
                fortaleza: 10,
                reflejos: 5,
                voluntad: 5,
            },
            especial: ["Analfabetismo", "Furia Mayor", "Voluntad indomable", "Furia 5/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +5", "Reducción del daño 4/--"],
        },
        17: {
            ataqueBase: 17,
            salvaciones: {
                fortaleza: 10,
                reflejos: 5,
                voluntad: 5,
            },
            especial: ["Analfabetismo", "Furia Mayor", "Voluntad indomable", "Furia Incansable", "Furia 5/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +5", "Reducción del daño 4/--"],
        },
        18: {
            ataqueBase: 18,
            salvaciones: {
                fortaleza: 11,
                reflejos: 6,
                voluntad: 6,
            },
            especial: ["Analfabetismo", "Furia Mayor", "Voluntad indomable", "Furia Incansable", "Furia 5/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +6", "Reducción del daño 4/--"],
        },
        19: {
            ataqueBase: 19,
            salvaciones: {
                fortaleza: 11,
                reflejos: 6,
                voluntad: 6,
            },
            especial: ["Analfabetismo", "Furia Mayor", "Voluntad indomable", "Furia Incansable", "Furia 5/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +6", "Reducción del daño 5/--"],
        },
        20: {
            ataqueBase: 20,
            salvaciones: {
                fortaleza: 12,
                reflejos: 6,
                voluntad: 6,
            },
            especial: ["Analfabetismo", "Furia Mayor", "Voluntad indomable", "Furia Incansable", "Furia poderosa", "Furia 6/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +6", "Reducción del daño 4/--"],
        },
    },
    guerrero: {
        varios: {
            dg: 12,
            alineamiento: ["NB", "NN", "NM", "CB", "CN", "CM"],
            caracteristicas: ["Fuerza", "Constitucion", "Destreza"],
            hc: ["Artesania", "Escuchar", "Intimidar", "Montar", "Nadar", "Saltar", "Supervivencia", "Trato con animales", "Trepar"],
            ph: 4
        },
        1: {
            ataqueBase: 1,
            salvaciones: {
                fortaleza: 2,
                reflejos: 0,
                voluntad: 0,
            },
            especial: ["Analfabetismo", "Furia 1/dia", "Movimiento Rápido"],
        },
        2: {
            ataqueBase: 2,
            salvaciones: {
                fortaleza: 3,
                reflejos: 0,
                voluntad: 0,
            },
            especial: ["Analfabetismo", "Furia 1/dia", "Movimiento Rápido", "Esquiva Asombrosa"],
        },
        3: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 3,
                reflejos: 1,
                voluntad: 1,
            },
            especial: ["Analfabetismo", "Furia 1/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Sentido de las trampas +1"],
        },
        4: {
            ataqueBase: 4,
            salvaciones: {
                fortaleza: 4,
                reflejos: 1,
                voluntad: 1,
            },
            especial: ["Analfabetismo", "Furia 2/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Sentido de las trampas +1"],
        },
        5: {
            ataqueBase: 5,
            salvaciones: {
                fortaleza: 4,
                reflejos: 1,
                voluntad: 1,
            },
            especial: ["Analfabetismo", "Furia 2/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +1"],
        },
        6: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 5,
                reflejos: 2,
                voluntad: 2,
            },
            especial: ["Analfabetismo", "Furia 2/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +2"],
        },
        7: {
            ataqueBase: 7,
            salvaciones: {
                fortaleza: 5,
                reflejos: 2,
                voluntad: 2,
            },
            especial: ["Analfabetismo", "Furia 2/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +2", "Reducción del daño 1/--"],
        },
        8: {
            ataqueBase: 8,
            salvaciones: {
                fortaleza: 6,
                reflejos: 2,
                voluntad: 2,
            },
            especial: ["Analfabetismo", "Furia 3/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +2", "Reducción del daño 1/--"],
        },
        9: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 6,
                reflejos: 2,
                voluntad: 2,
            },
            especial: ["Analfabetismo", "Furia 3/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +3", "Reducción del daño 1/--"],
        },
        10: {
            ataqueBase: 10,
            salvaciones: {
                fortaleza: 7,
                reflejos: 3,
                voluntad: 3,
            },
            especial: ["Analfabetismo", "Furia 3/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +3", "Reducción del daño 2/--"],
        },
        11: {
            ataqueBase: 11,
            salvaciones: {
                fortaleza: 7,
                reflejos: 3,
                voluntad: 3,
            },
            especial: ["Analfabetismo", "Furia Mayor", "Furia 3/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +3", "Reducción del daño 2/--"],
        },
        12: {
            ataqueBase: 12,
            salvaciones: {
                fortaleza: 8,
                reflejos: 4,
                voluntad: 4,
            },
            especial: ["Analfabetismo", "Furia Mayor", "Furia 4/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +4", "Reducción del daño 2/--"],
        },
        13: {
            ataqueBase: 13,
            salvaciones: {
                fortaleza: 8,
                reflejos: 4,
                voluntad: 4,
            },
            especial: ["Analfabetismo", "Furia Mayor", "Furia 4/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +4", "Reducción del daño 3/--"],
        },
        14: {
            ataqueBase: 14,
            salvaciones: {
                fortaleza: 9,
                reflejos: 4,
                voluntad: 4,
            },
            especial: ["Analfabetismo", "Furia Mayor", "Voluntad indomable", "Furia 4/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +4", "Reducción del daño 3/--"],
        },
        15: {
            ataqueBase: 15,
            salvaciones: {
                fortaleza: 9,
                reflejos: 5,
                voluntad: 5,
            },
            especial: ["Analfabetismo", "Furia Mayor", "Voluntad indomable", "Furia 4/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +5", "Reducción del daño 3/--"],
        },
        16: {
            ataqueBase: 16,
            salvaciones: {
                fortaleza: 10,
                reflejos: 5,
                voluntad: 5,
            },
            especial: ["Analfabetismo", "Furia Mayor", "Voluntad indomable", "Furia 5/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +5", "Reducción del daño 4/--"],
        },
        17: {
            ataqueBase: 17,
            salvaciones: {
                fortaleza: 10,
                reflejos: 5,
                voluntad: 5,
            },
            especial: ["Analfabetismo", "Furia Mayor", "Voluntad indomable", "Furia Incansable", "Furia 5/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +5", "Reducción del daño 4/--"],
        },
        18: {
            ataqueBase: 18,
            salvaciones: {
                fortaleza: 11,
                reflejos: 6,
                voluntad: 6,
            },
            especial: ["Analfabetismo", "Furia Mayor", "Voluntad indomable", "Furia Incansable", "Furia 5/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +6", "Reducción del daño 4/--"],
        },
        19: {
            ataqueBase: 19,
            salvaciones: {
                fortaleza: 11,
                reflejos: 6,
                voluntad: 6,
            },
            especial: ["Analfabetismo", "Furia Mayor", "Voluntad indomable", "Furia Incansable", "Furia 5/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +6", "Reducción del daño 5/--"],
        },
        20: {
            ataqueBase: 20,
            salvaciones: {
                fortaleza: 12,
                reflejos: 6,
                voluntad: 6,
            },
            especial: ["Analfabetismo", "Furia Mayor", "Voluntad indomable", "Furia Incansable", "Furia poderosa", "Furia 6/dia", "Movimiento Rápido", "Esquiva Asombrosa", "Esquiva Asombrosa Mejorada", "Sentido de las trampas +6", "Reducción del daño 4/--"],
        },
    },
}
module.exports = clases;