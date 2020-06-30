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
                cuerpo: [armas.armasMarciales.armasUnaManoCaC.cimitarra, armas.armasMarciales.armasUnaManoCaC.martilloDeGuerra, armas.armasMarciales.armasDosManosCaC.alfanjon],
                distancia: [armas.armasMarciales.armasAtaqueDistancia.arcoCorto, armas.armasSencillas.armasAtaqueDistancia.jabalina],
            },
            posiblesArmaduras: [armaduras.armaduraLigera.acolchada, armaduras.armaduraLigera.camisoteDeMallas, armaduras.armaduraLigera.cuero, armaduras.armaduraLigera.cueroTachonado],
            posiblesEscudos: null,
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
    bardo: {
        varios: {
            dg: 6,
            alineamiento: ["NB", "NN", "NM", "CB", "CN", "CM"],
            caracteristicas: ["Car", "Des", "Int"],
            caracteristicasMenosImp: ["Fue", "Con", "Sab"],
            hc: ["Artesania", "Averiguar intenciones", "Concentracion", "Conocimiento de conjuros", "Descifrar escritura", "Diplomacia", "Disfrazarse", "Engañar", "Equilibrio", "Escapismo", "Esconderse", "Escuchar", "Interpretar", "Juego de manos", "Moverse sigilosamente", "Nadar", "Oficio", "Piruetas", "Reunir informacion", "Saber arcano", "Saber arquitectura e ingenieria", "Saber dungeons", "Saber geografia", "Saber historia", "Saber local", "Saber los planos", "Saber naturaleza", "Saber nobleza y realeza", "Saber religion", "Saltar", "Tasacion", "Trepar", "Usar objeto magico"],
            ph: 6,
            posiblesArmas: {
                cuerpo: [armas.armasMarciales.armasLigerasCaC.espadaCorta, armas.armasMarciales.armasLigerasCaC.cachiporra, armas.armasMarciales.armasUnaManoCaC.estoque, armas.armasSencillas.armasLigerasCaC.daga],
                distancia: [armas.armasMarciales.armasAtaqueDistancia.arcoCorto, armas.armasSencillas.armasAtaqueDistancia.ballestaLigera, armas.armasSencillas.armasAtaqueDistancia.ballestaPesada],
            },
            posiblesArmaduras: [armaduras.armaduraLigera.acolchada, armaduras.armaduraLigera.camisoteDeMallas, armaduras.armaduraLigera.cuero, armaduras.armaduraLigera.cueroTachonado],
            posiblesEscudos: [armaduras.escudos.rodela, armaduras.escudos.broquel],
        },
        1: {
            ataqueBase: 0,
            salvaciones: {
                fortaleza: 0,
                reflejos: 2,
                voluntad: 2,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +1", "Música de bardo"],
        },
        2: {
            ataqueBase: 1,
            salvaciones: {
                fortaleza: 0,
                reflejos: 3,
                voluntad: 3,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +1", "Música de bardo"],
        },
        3: {
            ataqueBase: 2,
            salvaciones: {
                fortaleza: 1,
                reflejos: 3,
                voluntad: 3,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +1, Música de bardo", "Infundir gran aptitud"],
        },
        4: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 1,
                reflejos: 4,
                voluntad: 4,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +1, Música de bardo", "Infundir gran aptitud"],
        },
        5: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 1,
                reflejos: 4,
                voluntad: 4,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +1, Música de bardo", "Infundir gran aptitud"],
        },
        6: {
            ataqueBase: 4,
            salvaciones: {
                fortaleza: 2,
                reflejos: 5,
                voluntad: 5,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +1, Música de bardo", "Infundir gran aptitud", "Sugestión"],
        },
        6: {
            ataqueBase: 4,
            salvaciones: {
                fortaleza: 2,
                reflejos: 5,
                voluntad: 5,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +1, Música de bardo", "Infundir gran aptitud", "Sugestión"],
        },
        7: {
            ataqueBase: 5,
            salvaciones: {
                fortaleza: 2,
                reflejos: 5,
                voluntad: 5,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +1, Música de bardo", "Infundir gran aptitud", "Sugestión"],
        },
        8: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 2,
                reflejos: 6,
                voluntad: 6,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +2, Música de bardo", "Infundir gran aptitud", "Sugestión"],
        },
        8: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 2,
                reflejos: 6,
                voluntad: 6,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +2, Música de bardo", "Infundir gran aptitud", "Sugestión"],
        },
        9: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 3,
                reflejos: 6,
                voluntad: 6,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +2, Música de bardo", "Infundir gran aptitud", "Sugestión", "Infundir grandeza"],
        },
        10: {
            ataqueBase: 7,
            salvaciones: {
                fortaleza: 3,
                reflejos: 7,
                voluntad: 7,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +2, Música de bardo", "Infundir gran aptitud", "Sugestión", "Infundir grandeza"],
        },
        11: {
            ataqueBase: 8,
            salvaciones: {
                fortaleza: 3,
                reflejos: 7,
                voluntad: 7,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +2, Música de bardo", "Infundir gran aptitud", "Sugestión", "Infundir grandeza"],
        },
        12: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 4,
                reflejos: 8,
                voluntad: 8,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +2, Música de bardo", "Infundir gran aptitud", "Sugestión", "Infundir grandeza", "Canción de libertad"],
        },
        13: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 4,
                reflejos: 8,
                voluntad: 8,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +2, Música de bardo", "Infundir gran aptitud", "Sugestión", "Infundir grandeza", "Canción de libertad"],
        },
        14: {
            ataqueBase: 10,
            salvaciones: {
                fortaleza: 4,
                reflejos: 9,
                voluntad: 9,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +3, Música de bardo", "Infundir gran aptitud", "Sugestión", "Infundir grandeza", "Canción de libertad"],
        },
        15: {
            ataqueBase: 11,
            salvaciones: {
                fortaleza: 5,
                reflejos: 9,
                voluntad: 9,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +3, Música de bardo", "Infundir gran aptitud", "Sugestión", "Infundir grandeza", "Canción de libertad", "Infundir heroicidad"],
        },
        15: {
            ataqueBase: 11,
            salvaciones: {
                fortaleza: 5,
                reflejos: 9,
                voluntad: 9,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +3, Música de bardo", "Infundir gran aptitud", "Sugestión", "Infundir grandeza", "Canción de libertad", "Infundir heroicidad"],
        },
        16: {
            ataqueBase: 12,
            salvaciones: {
                fortaleza: 5,
                reflejos: 10,
                voluntad: 10,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +3, Música de bardo", "Infundir gran aptitud", "Sugestión", "Infundir grandeza", "Canción de libertad", "Infundir heroicidad"],
        },
        17: {
            ataqueBase: 12,
            salvaciones: {
                fortaleza: 5,
                reflejos: 10,
                voluntad: 10,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +3, Música de bardo", "Infundir gran aptitud", "Sugestión", "Infundir grandeza", "Canción de libertad", "Infundir heroicidad"],
        },
        18: {
            ataqueBase: 13,
            salvaciones: {
                fortaleza: 6,
                reflejos: 11,
                voluntad: 11,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +3, Música de bardo", "Infundir gran aptitud", "Sugestión", "Sugestión en grupo", "Infundir grandeza", "Canción de libertad", "Infundir heroicidad"],
        },
        19: {
            ataqueBase: 14,
            salvaciones: {
                fortaleza: 6,
                reflejos: 11,
                voluntad: 11,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +3, Música de bardo", "Infundir gran aptitud", "Sugestión", "Sugestión en grupo", "Infundir grandeza", "Canción de libertad", "Infundir heroicidad"],
        },
        20: {
            ataqueBase: 15,
            salvaciones: {
                fortaleza: 6,
                reflejos: 12,
                voluntad: 12,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +4, Música de bardo", "Infundir gran aptitud", "Sugestión", "Sugestión en grupo", "Infundir grandeza", "Canción de libertad", "Infundir heroicidad"],
        },
    },
    clerigo: {
        varios: {
            dg: 8,
            alineamiento: ["LB", "NB", "CB", "NB", "NN", "NM", "CB", "CN", "CM"],
            caracteristicas: ["Sab", "Fue", "Car"],
            caracteristicasMenosImp: ["Con", "Int", "Des"],
            hc: ["Artesania", "Concentracion", "Conocimiento de conjuros", "Diplomacia", "Oficio", "Saber arcano", "Saber historia", "Saber los planos", "Saber religion", "Sanar"],
            ph: 4,
            posiblesArmas: {
                cuerpo: [armas.armasSencillas.armasUnaManoCaC.mazaDeArmas, armas.armasSencillas.armasUnaManoCaC.mazaPesada, armas.armasSencillas.armasUnaManoCaC.lanzaCorta],
                distancia: [armas.armasSencillas.armasAtaqueDistancia.jabalina, armas.armasSencillas.armasAtaqueDistancia.ballestaPesada, armas.armasSencillas.armasAtaqueDistancia.ballestaLigera],
            },
            posiblesArmaduras: [armaduras.armaduraPesada.armaduraLaminada, armaduras.armaduraPesada.armaduraPlacasMallas, armaduras.armaduraPesada.cotaDeBandas, armaduras.armaduraPesada.armaduraCompleta],
            posiblesEscudos: [armaduras.escudos.escudoLigeroMadera, armaduras.escudos.escudoLigeroAcero, armaduras.escudos.escudoPesadoAcero, armaduras.escudos.escudoPesadoMadera],
            caracteristicaConjuros: 'Sab',
        },
        1: {
            ataqueBase: 0,
            salvaciones: {
                fortaleza: 2,
                reflejos: 0,
                voluntad: 2,
            },
            especial: ["Expulsar o reprender muertos vivientes", "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"],
            conjuros: [3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        2: {
            ataqueBase: 1,
            salvaciones: {
                fortaleza: 3,
                reflejos: 0,
                voluntad: 3,
            },
            especial: ["Expulsar o reprender muertos vivientes"],
            conjuros: [4, 2, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        3: {
            ataqueBase: 2,
            salvaciones: {
                fortaleza: 3,
                reflejos: 1,
                voluntad: 3,
            },
            especial: ["Expulsar o reprender muertos vivientes"],
            conjuros: [4, 2, 1, 0, 0, 0, 0, 0, 0, 0],
        },
        4: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 4,
                reflejos: 1,
                voluntad: 4,
            },
            especial: ["Expulsar o reprender muertos vivientes"],
            conjuros: [5, 3, 2, 0, 0, 0, 0, 0, 0, 0],
        },
        5: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 4,
                reflejos: 1,
                voluntad: 4,
            },
            especial: ["Expulsar o reprender muertos vivientes"],
            conjuros: [5, 3, 2, 1, 0, 0, 0, 0, 0, 0],
        },
        6: {
            ataqueBase: 4,
            salvaciones: {
                fortaleza: 5,
                reflejos: 2,
                voluntad: 5,
            },
            especial: ["Expulsar o reprender muertos vivientes"],
            conjuros: [5, 3, 3, 2, 0, 0, 0, 0, 0, 0],
        },
        7: {
            ataqueBase: 5,
            salvaciones: {
                fortaleza: 5,
                reflejos: 2,
                voluntad: 5,
            },
            especial: ["Expulsar o reprender muertos vivientes"],
            conjuros: [6, 4, 3, 2, 1, 0, 0, 0, 0, 0],
        },
        8: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 6,
                reflejos: 2,
                voluntad: 6,
            },
            especial: ["Expulsar o reprender muertos vivientes"],
            conjuros: [6, 4, 3, 3, 2, 0, 0, 0, 0, 0],
        },
        9: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 6,
                reflejos: 3,
                voluntad: 6,
            },
            especial: ["Expulsar o reprender muertos vivientes"],
            conjuros: [6, 4, 4, 3, 2, 1, 0, 0, 0, 0],
        },
        10: {
            ataqueBase: 7,
            salvaciones: {
                fortaleza: 7,
                reflejos: 3,
                voluntad: 7,
            },
            especial: ["Expulsar o reprender muertos vivientes"],
            conjuros: [6, 4, 4, 3, 3, 2, 0, 0, 0, 0],
        },
        11: {
            ataqueBase: 8,
            salvaciones: {
                fortaleza: 7,
                reflejos: 3,
                voluntad: 7,
            },
            especial: ["Expulsar o reprender muertos vivientes"],
            conjuros: [6, 5, 4, 4, 3, 2, 1, 0, 0, 0],
        },
        12: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 8,
                reflejos: 4,
                voluntad: 8,
            },
            especial: ["Expulsar o reprender muertos vivientes"],
            conjuros: [6, 5, 4, 4, 3, 3, 2, 0, 0, 0],
        },
        13: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 8,
                reflejos: 4,
                voluntad: 8,
            },
            especial: ["Expulsar o reprender muertos vivientes"],
            conjuros: [6, 5, 5, 4, 3, 2, 1, 0, 0, 0],
        },
        14: {
            ataqueBase: 10,
            salvaciones: {
                fortaleza: 9,
                reflejos: 4,
                voluntad: 9,
            },
            especial: ["Expulsar o reprender muertos vivientes"],
            conjuros: [6, 5, 5, 4, 4, 3, 3, 2, 0, 0],
        },
        15: {
            ataqueBase: 11,
            salvaciones: {
                fortaleza: 9,
                reflejos: 5,
                voluntad: 9,
            },
            especial: ["Expulsar o reprender muertos vivientes"],
            conjuros: [6, 5, 5, 5, 4, 4, 3, 2, 1, 0],
        },
        16: {
            ataqueBase: 12,
            salvaciones: {
                fortaleza: 10,
                reflejos: 5,
                voluntad: 10,
            },
            especial: ["Expulsar o reprender muertos vivientes"],
            conjuros: [6, 5, 5, 5, 4, 4, 3, 3, 2, 0],
        },
        17: {
            ataqueBase: 12,
            salvaciones: {
                fortaleza: 10,
                reflejos: 5,
                voluntad: 10,
            },
            especial: ["Expulsar o reprender muertos vivientes"],
            conjuros: [6, 5, 5, 5, 5, 4, 4, 3, 2, 1],
        },
        18: {
            ataqueBase: 13,
            salvaciones: {
                fortaleza: 11,
                reflejos: 6,
                voluntad: 11,
            },
            especial: ["Expulsar o reprender muertos vivientes"],
            conjuros: [6, 5, 5, 5, 5, 4, 4, 3, 3, 2],
        },
        19: {
            ataqueBase: 14,
            salvaciones: {
                fortaleza: 11,
                reflejos: 6,
                voluntad: 11,
            },
            especial: ["Expulsar o reprender muertos vivientes"],
            conjuros: [6, 5, 5, 5, 5, 5, 4, 4, 3, 3],
        },
        20: {
            ataqueBase: 15,
            salvaciones: {
                fortaleza: 12,
                reflejos: 6,
                voluntad: 12,
            },
            especial: ["Expulsar o reprender muertos vivientes"],
            conjuros: [6, 5, 5, 5, 5, 5, 4, 4, 4, 4],
        },


    },

}
module.exports = clases;