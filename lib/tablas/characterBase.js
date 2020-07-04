'use strict'
//Si en los conjuros viene un false es que todavia no puede aprender conjuros de ese nivel aunque le llegue la caracteristica.
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
            caracteristicaConjuros: 'Car',
        },
        1: {
            ataqueBase: 0,
            salvaciones: {
                fortaleza: 0,
                reflejos: 2,
                voluntad: 2,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +1", "Música de bardo"],
            conjuros: [2, false, false, false, false, false, false, false, false, false],
        },
        2: {
            ataqueBase: 1,
            salvaciones: {
                fortaleza: 0,
                reflejos: 3,
                voluntad: 3,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +1", "Música de bardo"],
            conjuros: [3, 0, false, false, false, false, false, false, false, false],
        },
        3: {
            ataqueBase: 2,
            salvaciones: {
                fortaleza: 1,
                reflejos: 3,
                voluntad: 3,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +1, Música de bardo", "Infundir gran aptitud"],
            conjuros: [3, 1, false, false, false, false, false, false, false, false],
        },
        4: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 1,
                reflejos: 4,
                voluntad: 4,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +1, Música de bardo", "Infundir gran aptitud"],
            conjuros: [3, 2, 0, false, false, false, false, false, false, false],
        },
        5: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 1,
                reflejos: 4,
                voluntad: 4,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +1, Música de bardo", "Infundir gran aptitud"],
            conjuros: [3, 3, 1, false, false, false, false, false, false, false],
        },
        6: {
            ataqueBase: 4,
            salvaciones: {
                fortaleza: 2,
                reflejos: 5,
                voluntad: 5,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +1, Música de bardo", "Infundir gran aptitud", "Sugestión"],
            conjuros: [3, 3, 2, false, false, false, false, false, false, false],
        },
        7: {
            ataqueBase: 5,
            salvaciones: {
                fortaleza: 2,
                reflejos: 5,
                voluntad: 5,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +1, Música de bardo", "Infundir gran aptitud", "Sugestión"],
            conjuros: [3, 3, 2, 0, false, false, false, false, false, false],
        },
        8: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 2,
                reflejos: 6,
                voluntad: 6,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +2, Música de bardo", "Infundir gran aptitud", "Sugestión"],
            conjuros: [3, 3, 3, 1, false, false, false, false, false, false],
        },
        9: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 3,
                reflejos: 6,
                voluntad: 6,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +2, Música de bardo", "Infundir gran aptitud", "Sugestión", "Infundir grandeza"],
            conjuros: [3, 3, 3, 2, false, false, false, false, false, false],
        },
        10: {
            ataqueBase: 7,
            salvaciones: {
                fortaleza: 3,
                reflejos: 7,
                voluntad: 7,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +2, Música de bardo", "Infundir gran aptitud", "Sugestión", "Infundir grandeza"],
            conjuros: [3, 3, 3, 2, 0, false, false, false, false, false],
        },
        11: {
            ataqueBase: 8,
            salvaciones: {
                fortaleza: 3,
                reflejos: 7,
                voluntad: 7,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +2, Música de bardo", "Infundir gran aptitud", "Sugestión", "Infundir grandeza"],
            conjuros: [3, 3, 3, 3, 1, false, false, false, false, false],
        },
        12: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 4,
                reflejos: 8,
                voluntad: 8,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +2, Música de bardo", "Infundir gran aptitud", "Sugestión", "Infundir grandeza", "Canción de libertad"],
            conjuros: [3, 3, 3, 3, 2, false, false, false, false, false],
        },
        13: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 4,
                reflejos: 8,
                voluntad: 8,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +2, Música de bardo", "Infundir gran aptitud", "Sugestión", "Infundir grandeza", "Canción de libertad"],
            conjuros: [3, 3, 3, 3, 2, 0, false, false, false, false],
        },
        14: {
            ataqueBase: 10,
            salvaciones: {
                fortaleza: 4,
                reflejos: 9,
                voluntad: 9,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +3, Música de bardo", "Infundir gran aptitud", "Sugestión", "Infundir grandeza", "Canción de libertad"],
            conjuros: [4, 3, 3, 3, 3, 1, false, false, false, false],
        },
        15: {
            ataqueBase: 11,
            salvaciones: {
                fortaleza: 5,
                reflejos: 9,
                voluntad: 9,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +3, Música de bardo", "Infundir gran aptitud", "Sugestión", "Infundir grandeza", "Canción de libertad", "Infundir heroicidad"],
            conjuros: [4, 4, 3, 3, 3, 2, false, false, false, false],
        },
        16: {
            ataqueBase: 12,
            salvaciones: {
                fortaleza: 5,
                reflejos: 10,
                voluntad: 10,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +3, Música de bardo", "Infundir gran aptitud", "Sugestión", "Infundir grandeza", "Canción de libertad", "Infundir heroicidad"],
            conjuros: [4, 4, 4, 3, 3, 2, 0, false, false, false],
        },
        17: {
            ataqueBase: 12,
            salvaciones: {
                fortaleza: 5,
                reflejos: 10,
                voluntad: 10,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +3, Música de bardo", "Infundir gran aptitud", "Sugestión", "Infundir grandeza", "Canción de libertad", "Infundir heroicidad"],
            conjuros: [4, 4, 4, 4, 3, 3, 1, false, false, false],
        },
        18: {
            ataqueBase: 13,
            salvaciones: {
                fortaleza: 6,
                reflejos: 11,
                voluntad: 11,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +3, Música de bardo", "Infundir gran aptitud", "Sugestión", "Sugestión en grupo", "Infundir grandeza", "Canción de libertad", "Infundir heroicidad"],
            conjuros: [4, 4, 4, 4, 4, 3, 2, false, false, false],
        },
        19: {
            ataqueBase: 14,
            salvaciones: {
                fortaleza: 6,
                reflejos: 11,
                voluntad: 11,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +3, Música de bardo", "Infundir gran aptitud", "Sugestión", "Sugestión en grupo", "Infundir grandeza", "Canción de libertad", "Infundir heroicidad"],
            conjuros: [4, 4, 4, 4, 4, 4, 3, false, false, false],
        },
        20: {
            ataqueBase: 15,
            salvaciones: {
                fortaleza: 6,
                reflejos: 12,
                voluntad: 12,
            },
            especial: ["Conocimiento de bardo", "Contraoda", "Fascinar", "Infundir valor +4, Música de bardo", "Infundir gran aptitud", "Sugestión", "Sugestión en grupo", "Infundir grandeza", "Canción de libertad", "Infundir heroicidad"],
            conjuros: [4, 4, 4, 4, 4, 4, 4, false, false, false],
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
            conjuros: [3, 1, false, false, false, false, false, false, false, false],
        },
        2: {
            ataqueBase: 1,
            salvaciones: {
                fortaleza: 3,
                reflejos: 0,
                voluntad: 3,
            },
            especial: ["Expulsar o reprender muertos vivientes", "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"],
            conjuros: [4, 2, false, false, false, false, false, false, false, false],
        },
        3: {
            ataqueBase: 2,
            salvaciones: {
                fortaleza: 3,
                reflejos: 1,
                voluntad: 3,
            },
            especial: ["Expulsar o reprender muertos vivientes", "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"],
            conjuros: [4, 2, 1, false, false, false, false, false, false, false],
        },
        4: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 4,
                reflejos: 1,
                voluntad: 4,
            },
            especial: ["Expulsar o reprender muertos vivientes", "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"],
            conjuros: [5, 3, 2, false, false, false, false, false, false, false],
        },
        5: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 4,
                reflejos: 1,
                voluntad: 4,
            },
            especial: ["Expulsar o reprender muertos vivientes", "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"],
            conjuros: [5, 3, 2, 1, false, false, false, false, false, false],
        },
        6: {
            ataqueBase: 4,
            salvaciones: {
                fortaleza: 5,
                reflejos: 2,
                voluntad: 5,
            },
            especial: ["Expulsar o reprender muertos vivientes", "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"],
            conjuros: [5, 3, 3, 2, false, false, false, false, false, false],
        },
        7: {
            ataqueBase: 5,
            salvaciones: {
                fortaleza: 5,
                reflejos: 2,
                voluntad: 5,
            },
            especial: ["Expulsar o reprender muertos vivientes", "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"],
            conjuros: [6, 4, 3, 2, 1, false, false, false, false, false],
        },
        8: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 6,
                reflejos: 2,
                voluntad: 6,
            },
            especial: ["Expulsar o reprender muertos vivientes", "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"],
            conjuros: [6, 4, 3, 3, 2, false, false, false, false, false],
        },
        9: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 6,
                reflejos: 3,
                voluntad: 6,
            },
            especial: ["Expulsar o reprender muertos vivientes", "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"],
            conjuros: [6, 4, 4, 3, 2, 1, false, false, false, false],
        },
        10: {
            ataqueBase: 7,
            salvaciones: {
                fortaleza: 7,
                reflejos: 3,
                voluntad: 7,
            },
            especial: ["Expulsar o reprender muertos vivientes", "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"],
            conjuros: [6, 4, 4, 3, 3, 2, false, false, false, false],
        },
        11: {
            ataqueBase: 8,
            salvaciones: {
                fortaleza: 7,
                reflejos: 3,
                voluntad: 7,
            },
            especial: ["Expulsar o reprender muertos vivientes", "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"],
            conjuros: [6, 5, 4, 4, 3, 2, 1, false, false, false],
        },
        12: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 8,
                reflejos: 4,
                voluntad: 8,
            },
            especial: ["Expulsar o reprender muertos vivientes", "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"],
            conjuros: [6, 5, 4, 4, 3, 3, 2, false, false, false],
        },
        13: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 8,
                reflejos: 4,
                voluntad: 8,
            },
            especial: ["Expulsar o reprender muertos vivientes", "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"],
            conjuros: [6, 5, 5, 4, 3, 2, 1, false, false, false],
        },
        14: {
            ataqueBase: 10,
            salvaciones: {
                fortaleza: 9,
                reflejos: 4,
                voluntad: 9,
            },
            especial: ["Expulsar o reprender muertos vivientes", "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"],
            conjuros: [6, 5, 5, 4, 4, 3, 3, 2, false, false],
        },
        15: {
            ataqueBase: 11,
            salvaciones: {
                fortaleza: 9,
                reflejos: 5,
                voluntad: 9,
            },
            especial: ["Expulsar o reprender muertos vivientes", "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"],
            conjuros: [6, 5, 5, 5, 4, 4, 3, 2, 1, false],
        },
        16: {
            ataqueBase: 12,
            salvaciones: {
                fortaleza: 10,
                reflejos: 5,
                voluntad: 10,
            },
            especial: ["Expulsar o reprender muertos vivientes", "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"],
            conjuros: [6, 5, 5, 5, 4, 4, 3, 3, 2, false],
        },
        17: {
            ataqueBase: 12,
            salvaciones: {
                fortaleza: 10,
                reflejos: 5,
                voluntad: 10,
            },
            especial: ["Expulsar o reprender muertos vivientes", "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"],
            conjuros: [6, 5, 5, 5, 5, 4, 4, 3, 2, 1],
        },
        18: {
            ataqueBase: 13,
            salvaciones: {
                fortaleza: 11,
                reflejos: 6,
                voluntad: 11,
            },
            especial: ["Expulsar o reprender muertos vivientes", "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"],
            conjuros: [6, 5, 5, 5, 5, 4, 4, 3, 3, 2],
        },
        19: {
            ataqueBase: 14,
            salvaciones: {
                fortaleza: 11,
                reflejos: 6,
                voluntad: 11,
            },
            especial: ["Expulsar o reprender muertos vivientes", "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"],
            conjuros: [6, 5, 5, 5, 5, 5, 4, 4, 3, 3],
        },
        20: {
            ataqueBase: 15,
            salvaciones: {
                fortaleza: 12,
                reflejos: 6,
                voluntad: 12,
            },
            especial: ["Expulsar o reprender muertos vivientes", "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"],
            conjuros: [6, 5, 5, 5, 5, 5, 4, 4, 4, 4],
        },


    },
    druida: {
        varios: {
            dg: 8,
            alineamiento: ["NB", "NB", "NN", "NM", "CN"],
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
            especial: ["Compañero animal", "Empatia salvaje", "Sentido de la naturaleza"],
            conjuros: [3, 1, false, false, false, false, false, false, false, false],
        },
        2: {
            ataqueBase: 1,
            salvaciones: {
                fortaleza: 3,
                reflejos: 0,
                voluntad: 3,
            },
            especial: ["Compañero animal", "Empatia salvaje", "Sentido de la naturaleza", "Zancada forestal"],
            conjuros: [4, 2, false, false, false, false, false, false, false, false],
        },
        3: {
            ataqueBase: 2,
            salvaciones: {
                fortaleza: 3,
                reflejos: 1,
                voluntad: 3,
            },
            especial: ["Compañero animal", "Empatia salvaje", "Sentido de la naturaleza", "Zancada forestal", "Pisada sin rastro"],
            conjuros: [4, 2, 1, false, false, false, false, false, false, false],
        },
        4: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 4,
                reflejos: 1,
                voluntad: 4,
            },
            especial: ["Compañero animal", "Empatia salvaje", "Sentido de la naturaleza", "Zancada forestal", "Pisada sin rastro", "Resistir la atracción de la naturaleza"],
            conjuros: [5, 3, 2, false, false, false, false, false, false, false],
        },
        5: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 4,
                reflejos: 1,
                voluntad: 4,
            },
            especial: ["Compañero animal", "Empatia salvaje", "Sentido de la naturaleza", "Zancada forestal", "Pisada sin rastro", "Resistir la atracción de la naturaleza", "Forma salvaje 1/dia"],
            conjuros: [5, 3, 2, 1, false, false, false, false, false, false],
        },
        6: {
            ataqueBase: 4,
            salvaciones: {
                fortaleza: 5,
                reflejos: 2,
                voluntad: 5,
            },
            especial: ["Compañero animal", "Empatia salvaje", "Sentido de la naturaleza", "Zancada forestal", "Pisada sin rastro", "Resistir la atracción de la naturaleza", "Forma salvaje 2/dia"],
            conjuros: [5, 3, 3, 2, false, false, false, false, false, false],
        },
        7: {
            ataqueBase: 5,
            salvaciones: {
                fortaleza: 5,
                reflejos: 2,
                voluntad: 5,
            },
            especial: ["Compañero animal", "Empatia salvaje", "Sentido de la naturaleza", "Zancada forestal", "Pisada sin rastro", "Resistir la atracción de la naturaleza", "Forma salvaje 3/dia"],
            conjuros: [6, 4, 3, 2, 1, false, false, false, false, false],
        },
        8: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 6,
                reflejos: 2,
                voluntad: 6,
            },
            especial: ["Compañero animal", "Empatia salvaje", "Sentido de la naturaleza", "Zancada forestal", "Pisada sin rastro", "Resistir la atracción de la naturaleza", "Forma salvaje 3/dia", "Forma salvaje grande"],
            conjuros: [6, 4, 3, 3, 2, false, false, false, false, false],
        },
        9: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 6,
                reflejos: 3,
                voluntad: 6,
            },
            especial: ["Compañero animal", "Empatia salvaje", "Sentido de la naturaleza", "Zancada forestal", "Pisada sin rastro", "Resistir la atracción de la naturaleza", "Forma salvaje 3/dia", "Forma salvaje grande", "Inmunidad al veneno"],
            conjuros: [6, 4, 4, 3, 2, 1, false, false, false, false],
        },
        10: {
            ataqueBase: 7,
            salvaciones: {
                fortaleza: 7,
                reflejos: 3,
                voluntad: 7,
            },
            especial: ["Compañero animal", "Empatia salvaje", "Sentido de la naturaleza", "Zancada forestal", "Pisada sin rastro", "Resistir la atracción de la naturaleza", "Forma salvaje 4/dia", "Forma salvaje grande", "Inmunidad al veneno"],
            conjuros: [6, 4, 4, 3, 3, 2, false, false, false, false],
        },
        11: {
            ataqueBase: 8,
            salvaciones: {
                fortaleza: 7,
                reflejos: 3,
                voluntad: 7,
            },
            especial: ["Compañero animal", "Empatia salvaje", "Sentido de la naturaleza", "Zancada forestal", "Pisada sin rastro", "Resistir la atracción de la naturaleza", "Forma salvaje 4/dia", "Forma salvaje grande", "Forma salvaje menuda", "Inmunidad al veneno"],
            conjuros: [6, 5, 4, 4, 3, 2, 1, false, false, false],
        },
        12: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 8,
                reflejos: 4,
                voluntad: 8,
            },
            especial: ["Forma salvaje 4/dia", "Forma salvaje grande", "Forma salvaje menuda", "Forma salvaje planta", "Compañero animal", "Empatia salvaje", "Sentido de la naturaleza", "Zancada forestal", "Pisada sin rastro", "Resistir la atracción de la naturaleza", "Inmunidad al veneno"],
            conjuros: [6, 5, 4, 4, 3, 3, 2, false, false, false],
        },
        13: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 8,
                reflejos: 4,
                voluntad: 8,
            },
            especial: ["Forma salvaje 4/dia", "Forma salvaje grande", "Forma salvaje menuda", "Forma salvaje planta", "Compañero animal", "Empatia salvaje", "Sentido de la naturaleza", "Zancada forestal", "Pisada sin rastro", "Resistir la atracción de la naturaleza", "Inmunidad al veneno", "Las mil caras"],
            conjuros: [6, 5, 5, 4, 4, 3, 2, 1, false, false],
        },
        14: {
            ataqueBase: 10,
            salvaciones: {
                fortaleza: 9,
                reflejos: 4,
                voluntad: 9,
            },
            especial: ["Forma salvaje 5/dia", "Forma salvaje grande", "Forma salvaje menuda", "Forma salvaje planta", "Compañero animal", "Empatia salvaje", "Sentido de la naturaleza", "Zancada forestal", "Pisada sin rastro", "Resistir la atracción de la naturaleza", "Inmunidad al veneno", "Las mil caras"],
            conjuros: [6, 5, 5, 4, 4, 3, 3, 2, false, false],
        },
        15: {
            ataqueBase: 11,
            salvaciones: {
                fortaleza: 9,
                reflejos: 5,
                voluntad: 9,
            },
            especial: ["Forma salvaje 5/dia", "Forma salvaje grande", "Forma salvaje enorme", "Forma salvaje menuda", "Forma salvaje planta", "Compañero animal", "Empatia salvaje", "Sentido de la naturaleza", "Zancada forestal", "Pisada sin rastro", "Resistir la atracción de la naturaleza", "Inmunidad al veneno", "Las mil caras", "Cuerpo eterno"],
            conjuros: [6, 5, 5, 4, 4, 4, 3, 2, 1, false],
        },
        16: {
            ataqueBase: 12,
            salvaciones: {
                fortaleza: 10,
                reflejos: 5,
                voluntad: 10,
            },
            especial: ["Forma salvaje 5/dia", "Forma salvaje grande", "Forma salvaje enorme", "Forma salvaje menuda", "Forma salvaje planta", "Forma salvaje elemental 1/dia", "Compañero animal", "Empatia salvaje", "Sentido de la naturaleza", "Zancada forestal", "Pisada sin rastro", "Resistir la atracción de la naturaleza", "Inmunidad al veneno", "Las mil caras", "Cuerpo eterno"],
            conjuros: [6, 5, 5, 5, 4, 4, 3, 3, 2, false],
        },
        17: {
            ataqueBase: 12,
            salvaciones: {
                fortaleza: 10,
                reflejos: 5,
                voluntad: 10,
            },
            especial: ["Forma salvaje 5/dia", "Forma salvaje grande", "Forma salvaje enorme", "Forma salvaje menuda", "Forma salvaje planta", "Forma salvaje elemental 1/dia", "Compañero animal", "Empatia salvaje", "Sentido de la naturaleza", "Zancada forestal", "Pisada sin rastro", "Resistir la atracción de la naturaleza", "Inmunidad al veneno", "Las mil caras", "Cuerpo eterno"],
            conjuros: [6, 5, 5, 5, 5, 4, 4, 3, 2, 1],
        },
        18: {
            ataqueBase: 13,
            salvaciones: {
                fortaleza: 11,
                reflejos: 6,
                voluntad: 11,
            },
            especial: ["Forma salvaje 6/dia", "Forma salvaje grande", "Forma salvaje enorme", "Forma salvaje menuda", "Forma salvaje planta", "Forma salvaje elemental 2/dia", "Compañero animal", "Empatia salvaje", "Sentido de la naturaleza", "Zancada forestal", "Pisada sin rastro", "Resistir la atracción de la naturaleza", "Inmunidad al veneno", "Las mil caras", "Cuerpo eterno"],
            conjuros: [6, 5, 5, 5, 5, 4, 4, 3, 3, 2],
        },
        19: {
            ataqueBase: 14,
            salvaciones: {
                fortaleza: 11,
                reflejos: 6,
                voluntad: 11,
            },
            especial: ["Forma salvaje 6/dia", "Forma salvaje grande", "Forma salvaje enorme", "Forma salvaje menuda", "Forma salvaje planta", "Forma salvaje elemental 2/dia", "Compañero animal", "Empatia salvaje", "Sentido de la naturaleza", "Zancada forestal", "Pisada sin rastro", "Resistir la atracción de la naturaleza", "Inmunidad al veneno", "Las mil caras", "Cuerpo eterno"],
            conjuros: [6, 5, 5, 5, 5, 5, 4, 4, 3, 3],
        },
        20: {
            ataqueBase: 15,
            salvaciones: {
                fortaleza: 12,
                reflejos: 6,
                voluntad: 12,
            },
            especial: ["Forma salvaje 6/dia", "Forma salvaje grande", "Forma salvaje enorme", "Forma salvaje menuda", "Forma salvaje planta", "Forma salvaje elemental 3/dia", "Forma salvaje elemental enorme", "Compañero animal", "Empatia salvaje", "Sentido de la naturaleza", "Zancada forestal", "Pisada sin rastro", "Resistir la atracción de la naturaleza", "Inmunidad al veneno", "Las mil caras", "Cuerpo eterno"],
            conjuros: [6, 5, 5, 5, 5, 5, 4, 4, 4, 4],
        },
    },
    explorador: {
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
            ataqueBase: 1,
            salvaciones: {
                fortaleza: 2,
                reflejos: 2,
                voluntad: 0,
            },
            especial: ["Empatia salvaje", "1 enemigo predilecto", "Rastrear"],
            conjuros: [false, false, false, false, false, false, false, false, false, false],
        },
        2: {
            ataqueBase: 2,
            salvaciones: {
                fortaleza: 3,
                reflejos: 3,
                voluntad: 0,
            },
            especial: ["Empatia salvaje", "1 enemigo predilecto", "Rastrear", "Estilo de combate"],
            conjuros: [false, false, false, false, false, false, false, false, false, false],
        },
        3: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 3,
                reflejos: 3,
                voluntad: 1,
            },
            especial: ["Empatia salvaje", "1 enemigo predilecto", "Rastrear", "Estilo de combate", "Aguante"],
            conjuros: [false, false, false, false, false, false, false, false, false, false],
        },
        4: {
            ataqueBase: 4,
            salvaciones: {
                fortaleza: 4,
                reflejos: 4,
                voluntad: 1,
            },
            especial: ["Empatia salvaje", "1 enemigo predilecto", "Rastrear", "Estilo de combate", "Aguante", "Compañero animal"],
            conjuros: [0, false, false, false, false, false, false, false, false, false],
        },
        5: {
            ataqueBase: 5,
            salvaciones: {
                fortaleza: 4,
                reflejos: 4,
                voluntad: 1,
            },
            especial: ["Empatia salvaje", "2 enemigos predilectos", "Rastrear", "Estilo de combate", "Aguante", "Compañero animal"],
            conjuros: [0, false, false, false, false, false, false, false, false, false],
        },
        6: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 5,
                reflejos: 5,
                voluntad: 2,
            },
            especial: ["Empatia salvaje", "2 enemigos predilectos", "Rastrear", "Estilo de combate", "Aguante", "Compañero animal", "Estilo de combate mejorado"],
            conjuros: [1, false, false, false, false, false, false, false, false, false],
        },
        7: {
            ataqueBase: 7,
            salvaciones: {
                fortaleza: 5,
                reflejos: 5,
                voluntad: 2,
            },
            especial: ["Empatia salvaje", "2 enemigos predilectos", "Rastrear", "Estilo de combate", "Aguante", "Compañero animal", "Estilo de combate mejorado", "Zancada forestal"],
            conjuros: [1, false, false, false, false, false, false, false, false, false],
        },
        8: {
            ataqueBase: 8,
            salvaciones: {
                fortaleza: 6,
                reflejos: 6,
                voluntad: 2,
            },
            especial: ["Empatia salvaje", "2 enemigos predilectos", "Rastrear", "Estilo de combate", "Aguante", "Compañero animal", "Estilo de combate mejorado", "Zancada forestal", "Rastreador veloz"],
            conjuros: [1, 0, false, false, false, false, false, false, false, false],
        },
        9: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 6,
                reflejos: 6,
                voluntad: 3,
            },
            especial: ["Empatia salvaje", "2 enemigos predilectos", "Rastrear", "Estilo de combate", "Aguante", "Compañero animal", "Estilo de combate mejorado", "Zancada forestal", "Rastreador veloz", "Evasión"],
            conjuros: [1, 0, false, false, false, false, false, false, false, false],
        },
        10: {
            ataqueBase: 10,
            salvaciones: {
                fortaleza: 7,
                reflejos: 7,
                voluntad: 3,
            },
            especial: ["Empatia salvaje", "3 enemigos predilectos", "Rastrear", "Estilo de combate", "Aguante", "Compañero animal", "Estilo de combate mejorado", "Zancada forestal", "Rastreador veloz", "Evasión"],
            conjuros: [1, 1, false, false, false, false, false, false, false, false],
        },
        11: {
            ataqueBase: 11,
            salvaciones: {
                fortaleza: 7,
                reflejos: 7,
                voluntad: 3,
            },
            especial: ["Empatia salvaje", "3 enemigos predilectos", "Rastrear", "Estilo de combate", "Aguante", "Compañero animal", "Estilo de combate mejorado", "Zancada forestal", "Rastreador veloz", "Evasión", "Maestria con el estilo de combate"],
            conjuros: [1, 1, 0, false, false, false, false, false, false, false],
        },
        12: {
            ataqueBase: 12,
            salvaciones: {
                fortaleza: 8,
                reflejos: 8,
                voluntad: 4,
            },
            especial: ["Empatia salvaje", "3 enemigos predilectos", "Rastrear", "Estilo de combate", "Aguante", "Compañero animal", "Estilo de combate mejorado", "Zancada forestal", "Rastreador veloz", "Evasión", "Maestria con el estilo de combate"],
            conjuros: [1, 1, 1, false, false, false, false, false, false, false],
        },
        13: {
            ataqueBase: 13,
            salvaciones: {
                fortaleza: 8,
                reflejos: 8,
                voluntad: 4,
            },
            especial: ["Empatia salvaje", "3 enemigos predilectos", "Rastrear", "Estilo de combate", "Aguante", "Compañero animal", "Estilo de combate mejorado", "Zancada forestal", "Rastreador veloz", "Evasión", "Maestria con el estilo de combate", "Camuflaje"],
            conjuros: [1, 1, 1, false, false, false, false, false, false, false],
        },
        14: {
            ataqueBase: 14,
            salvaciones: {
                fortaleza: 9,
                reflejos: 9,
                voluntad: 4,
            },
            especial: ["Empatia salvaje", "3 enemigos predilectos", "Rastrear", "Estilo de combate", "Aguante", "Compañero animal", "Estilo de combate mejorado", "Zancada forestal", "Rastreador veloz", "Evasión", "Maestria con el estilo de combate", "Camuflaje"],
            conjuros: [2, 1, 1, 0, false, false, false, false, false, false],
        },
        15: {
            ataqueBase: 15,
            salvaciones: {
                fortaleza: 9,
                reflejos: 9,
                voluntad: 5,
            },
            especial: ["Empatia salvaje", "4 enemigos predilectos", "Rastrear", "Estilo de combate", "Aguante", "Compañero animal", "Estilo de combate mejorado", "Zancada forestal", "Rastreador veloz", "Evasión", "Maestria con el estilo de combate", "Camuflaje"],
            conjuros: [2, 1, 1, 1, false, false, false, false, false, false],
        },
        16: {
            ataqueBase: 16,
            salvaciones: {
                fortaleza: 10,
                reflejos: 10,
                voluntad: 5,
            },
            especial: ["Empatia salvaje", "4 enemigos predilectos", "Rastrear", "Estilo de combate", "Aguante", "Compañero animal", "Estilo de combate mejorado", "Zancada forestal", "Rastreador veloz", "Evasión", "Maestria con el estilo de combate", "Camuflaje"],
            conjuros: [2, 2, 1, 1, false, false, false, false, false, false],
        },
        17: {
            ataqueBase: 17,
            salvaciones: {
                fortaleza: 10,
                reflejos: 10,
                voluntad: 5,
            },
            especial: ["Empatia salvaje", "4 enemigos predilectos", "Rastrear", "Estilo de combate", "Aguante", "Compañero animal", "Estilo de combate mejorado", "Zancada forestal", "Rastreador veloz", "Evasión", "Maestria con el estilo de combate", "Camuflaje", "Esconderse a plena vista"],
            conjuros: [2, 2, 2, 1, false, false, false, false, false, false],
        },
        18: {
            ataqueBase: 18,
            salvaciones: {
                fortaleza: 11,
                reflejos: 11,
                voluntad: 6,
            },
            especial: ["Empatia salvaje", "4 enemigos predilectos", "Rastrear", "Estilo de combate", "Aguante", "Compañero animal", "Estilo de combate mejorado", "Zancada forestal", "Rastreador veloz", "Evasión", "Maestria con el estilo de combate", "Camuflaje", "Esconderse a plena vista"],
            conjuros: [3, 2, 2, 1, false, false, false, false, false, false],
        },
        19: {
            ataqueBase: 19,
            salvaciones: {
                fortaleza: 11,
                reflejos: 11,
                voluntad: 6,
            },
            especial: ["Empatia salvaje", "4 enemigos predilectos", "Rastrear", "Estilo de combate", "Aguante", "Compañero animal", "Estilo de combate mejorado", "Zancada forestal", "Rastreador veloz", "Evasión", "Maestria con el estilo de combate", "Camuflaje", "Esconderse a plena vista"],
            conjuros: [3, 3, 3, 2, false, false, false, false, false, false],
        },
        20: {
            ataqueBase: 20,
            salvaciones: {
                fortaleza: 12,
                reflejos: 12,
                voluntad: 6,
            },
            especial: ["Empatia salvaje", "4 enemigos predilectos", "Rastrear", "Estilo de combate", "Aguante", "Compañero animal", "Estilo de combate mejorado", "Zancada forestal", "Rastreador veloz", "Evasión", "Maestria con el estilo de combate", "Camuflaje", "Esconderse a plena vista"],
            conjuros: [3, 3, 3, 3, false, false, false, false, false, false],
        },
    }, //Final
}
module.exports = clases;