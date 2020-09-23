'use strict'
//Si en los conjuros viene un false es que todavia no puede aprender conjuros de ese nivel aunque le llegue la caracteristica.
const armaduras = require('./../tablas/armaduras');
const armas = require('./../tablas/armas');
const clases = {
    barbaro: {
        varios: {
            dg: 12,
            alineamiento: ["CB", "CN", "CM"],
            caracteristicas: ["Fue", "Con", "Des"],
            caracteristicasMenosImp: ["Sab", "Car", "Int"],
            hc: ["Artesania", "Escuchar", "Intimidar", "Montar", "Nadar", "Saltar", "Supervivencia", "Trato con animales", "Trepar"],
            ph: 4,
            posiblesArmas: {
                cuerpo: [armas.armasSencillas.armasLigerasCaC.daga, armas.armasSencillas.armasLigerasCaC.guanteleteArmado, armas.armasSencillas.armasLigerasCaC.hoz, armas.armasSencillas.armasLigerasCaC.mazaLigera, armas.armasSencillas.armasLigerasCaC.puñal, armas.armasSencillas.armasUnaManoCaC.clava, armas.armasSencillas.armasUnaManoCaC.mazaDeArmas, armas.armasSencillas.armasUnaManoCaC.mazaPesada, armas.armasSencillas.armasUnaManoCaC.lanzaCorta, armas.armasSencillas.armasDosManosCaC.baston, armas.armasSencillas.armasDosManosCaC.lanza, armas.armasSencillas.armasDosManosCaC.lanzaLarga, armas.armasMarciales.armasLigerasCaC.armaduraConPuas, armas.armasMarciales.armasLigerasCaC.cachiporra, armas.armasMarciales.armasLigerasCaC.espadaCorta, armas.armasMarciales.armasLigerasCaC.hachaArrojadiza, armas.armasMarciales.armasLigerasCaC.hachaDeMano, armas.armasMarciales.armasLigerasCaC.kukri, armas.armasMarciales.armasLigerasCaC.martilloLigero, armas.armasMarciales.armasLigerasCaC.picoLigero, armas.armasMarciales.armasUnaManoCaC.cimitarra, armas.armasMarciales.armasUnaManoCaC.espadaLarga, armas.armasMarciales.armasUnaManoCaC.estoque, armas.armasMarciales.armasUnaManoCaC.hachaDeBatalla, armas.armasMarciales.armasUnaManoCaC.mangual, armas.armasMarciales.armasUnaManoCaC.martilloDeGuerra, armas.armasMarciales.armasUnaManoCaC.picoPesado, armas.armasMarciales.armasUnaManoCaC.tridente, armas.armasMarciales.armasDosManosCaC.alabarda, armas.armasMarciales.armasDosManosCaC.alfanjon, armas.armasMarciales.armasDosManosCaC.bisarma, armas.armasMarciales.armasDosManosCaC.espadon, armas.armasMarciales.armasDosManosCaC.granClava, armas.armasMarciales.armasDosManosCaC.granHacha, armas.armasMarciales.armasDosManosCaC.guadana, armas.armasMarciales.armasDosManosCaC.guja, armas.armasMarciales.armasDosManosCaC.lanzaDeCaballeria, armas.armasMarciales.armasDosManosCaC.mangualPesado, armas.armasMarciales.armasDosManosCaC.ronca],
                distancia: [armas.armasSencillas.armasAtaqueDistancia.ballestaLigera, armas.armasSencillas.armasAtaqueDistancia.ballestaPesada, armas.armasSencillas.armasAtaqueDistancia.dardo, armas.armasSencillas.armasAtaqueDistancia.honda, armas.armasSencillas.armasAtaqueDistancia.jabalina, armas.armasMarciales.armasAtaqueDistancia.arcoCorto, armas.armasMarciales.armasAtaqueDistancia.arcoCortoCompuesto, armas.armasMarciales.armasAtaqueDistancia.arcoLargo, armas.armasMarciales.armasAtaqueDistancia.arcoLargoCompuesto],
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
            alineamiento: ["LB", "LN", "LM", "NB", "NN", "NM", "CB", "CN", "CM"],
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
            alineamiento: ["NB", "NN", "NM"],
            caracteristicas: ["Sab", "Car", "Des"],
            caracteristicasMenosImp: ["Con", "Fue", "Int"],
            hc: ["Artesania", "Avistar", "Concentracion", "Conocimiento de conjuros", "Diplomacia", "Escuchar", "Montar", "Nadar", "Oficio", "Saber naturaleza", "Sanar", "Supervivencia", "Trato con animales"],
            ph: 4,
            posiblesArmas: {
                cuerpo: [armas.armasSencillas.armasDosManosCaC.baston, armas.armasMarciales.armasUnaManoCaC.cimitarra, armas.armasSencillas.armasUnaManoCaC.clava, armas.armasSencillas.armasLigerasCaC.daga, armas.armasSencillas.armasLigerasCaC.hoz, armas.armasSencillas.armasUnaManoCaC.lanzaCorta, armas.armasSencillas.armasDosManosCaC.lanza],
                distancia: [armas.armasSencillas.armasAtaqueDistancia.dardo, armas.armasSencillas.armasAtaqueDistancia.honda, armas.armasSencillas.armasAtaqueDistancia.ballestaLigera],
            },
            posiblesArmaduras: [armaduras.armaduraLigera.acolchada, armaduras.armaduraLigera.cuero, armaduras.armaduraIntermedia.pieles],
            posiblesEscudos: [armaduras.escudos.escudoLigeroMadera, armaduras.escudos.escudoPesadoMadera],
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
            alineamiento: ["LB", "LN", "LM", "NB", "NN", "NM", "CB", "CN", "CM"],
            caracteristicas: ["Des", "Fue", "Sab"],
            caracteristicasMenosImp: ["Int", "Con", "Car"],
            hc: ["Artesania", "Avistar", "Buscar", "Concentracion", "Esconderse", "Escuchar", "Montar", "Moverse sigilosamente", "Nadar", "Oficio", "Saber dungeons", "Saber geografia", "Saber naturaleza", "Saltar", "Sanar", "Supervivencia", "Trato con animales", "Trepar", "Uso de cuerdas"],
            ph: 6,
            posiblesArmas: {
                cuerpo: [armas.armasSencillas.armasLigerasCaC.daga, armas.armasSencillas.armasLigerasCaC.guanteleteArmado, armas.armasSencillas.armasLigerasCaC.hoz, armas.armasSencillas.armasLigerasCaC.mazaLigera, armas.armasSencillas.armasLigerasCaC.puñal, armas.armasSencillas.armasUnaManoCaC.clava, armas.armasSencillas.armasUnaManoCaC.mazaDeArmas, armas.armasSencillas.armasUnaManoCaC.mazaPesada, armas.armasSencillas.armasUnaManoCaC.lanzaCorta, armas.armasSencillas.armasDosManosCaC.baston, armas.armasSencillas.armasDosManosCaC.lanza, armas.armasSencillas.armasDosManosCaC.lanzaLarga, armas.armasMarciales.armasLigerasCaC.armaduraConPuas, armas.armasMarciales.armasLigerasCaC.cachiporra, armas.armasMarciales.armasLigerasCaC.espadaCorta, armas.armasMarciales.armasLigerasCaC.hachaArrojadiza, armas.armasMarciales.armasLigerasCaC.hachaDeMano, armas.armasMarciales.armasLigerasCaC.kukri, armas.armasMarciales.armasLigerasCaC.martilloLigero, armas.armasMarciales.armasLigerasCaC.picoLigero, armas.armasMarciales.armasUnaManoCaC.cimitarra, armas.armasMarciales.armasUnaManoCaC.espadaLarga, armas.armasMarciales.armasUnaManoCaC.estoque, armas.armasMarciales.armasUnaManoCaC.hachaDeBatalla, armas.armasMarciales.armasUnaManoCaC.mangual, armas.armasMarciales.armasUnaManoCaC.martilloDeGuerra, armas.armasMarciales.armasUnaManoCaC.picoPesado, armas.armasMarciales.armasUnaManoCaC.tridente, armas.armasMarciales.armasDosManosCaC.alabarda, armas.armasMarciales.armasDosManosCaC.alfanjon, armas.armasMarciales.armasDosManosCaC.bisarma, armas.armasMarciales.armasDosManosCaC.espadon, armas.armasMarciales.armasDosManosCaC.granClava, armas.armasMarciales.armasDosManosCaC.granHacha, armas.armasMarciales.armasDosManosCaC.guadana, armas.armasMarciales.armasDosManosCaC.guja, armas.armasMarciales.armasDosManosCaC.lanzaDeCaballeria, armas.armasMarciales.armasDosManosCaC.mangualPesado, armas.armasMarciales.armasDosManosCaC.ronca],
                distancia: [armas.armasSencillas.armasAtaqueDistancia.ballestaLigera, armas.armasSencillas.armasAtaqueDistancia.ballestaPesada, armas.armasSencillas.armasAtaqueDistancia.dardo, armas.armasSencillas.armasAtaqueDistancia.honda, armas.armasSencillas.armasAtaqueDistancia.jabalina, armas.armasMarciales.armasAtaqueDistancia.arcoCorto, armas.armasMarciales.armasAtaqueDistancia.arcoCortoCompuesto, armas.armasMarciales.armasAtaqueDistancia.arcoLargo, armas.armasMarciales.armasAtaqueDistancia.arcoLargoCompuesto],
            },
            posiblesArmaduras: [armaduras.armaduraLigera.acolchada, armaduras.armaduraLigera.cuero, armaduras.armaduraLigera.cueroTachonado, armaduras.armaduraLigera.camisoteDeMallas],
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
    },
    guerrero: {
        varios: {
            dg: 10,
            alineamiento: ["LB", "LN", "LM", "NB", "NN", "NM", "CB", "CN", "CM"],
            caracteristicas: ["Fue", "Con", "Des"],
            caracteristicasMenosImp: ["Car", "Int", "Sab"],
            hc: ["Artesania", "Intimidar", "Montar", "Nadar", "Saltar", "Trato con animales", "Trepar"],
            ph: 2,
            posiblesArmas: {
                cuerpo: [armas.armasSencillas.armasLigerasCaC.daga, armas.armasSencillas.armasLigerasCaC.guanteleteArmado, armas.armasSencillas.armasLigerasCaC.hoz, armas.armasSencillas.armasLigerasCaC.mazaLigera, armas.armasSencillas.armasLigerasCaC.puñal, armas.armasSencillas.armasUnaManoCaC.clava, armas.armasSencillas.armasUnaManoCaC.mazaDeArmas, armas.armasSencillas.armasUnaManoCaC.mazaPesada, armas.armasSencillas.armasUnaManoCaC.lanzaCorta, armas.armasSencillas.armasDosManosCaC.baston, armas.armasSencillas.armasDosManosCaC.lanza, armas.armasSencillas.armasDosManosCaC.lanzaLarga, armas.armasMarciales.armasLigerasCaC.armaduraConPuas, armas.armasMarciales.armasLigerasCaC.cachiporra, armas.armasMarciales.armasLigerasCaC.espadaCorta, armas.armasMarciales.armasLigerasCaC.hachaArrojadiza, armas.armasMarciales.armasLigerasCaC.hachaDeMano, armas.armasMarciales.armasLigerasCaC.kukri, armas.armasMarciales.armasLigerasCaC.martilloLigero, armas.armasMarciales.armasLigerasCaC.picoLigero, armas.armasMarciales.armasUnaManoCaC.cimitarra, armas.armasMarciales.armasUnaManoCaC.espadaLarga, armas.armasMarciales.armasUnaManoCaC.estoque, armas.armasMarciales.armasUnaManoCaC.hachaDeBatalla, armas.armasMarciales.armasUnaManoCaC.mangual, armas.armasMarciales.armasUnaManoCaC.martilloDeGuerra, armas.armasMarciales.armasUnaManoCaC.picoPesado, armas.armasMarciales.armasUnaManoCaC.tridente, armas.armasMarciales.armasDosManosCaC.alabarda, armas.armasMarciales.armasDosManosCaC.alfanjon, armas.armasMarciales.armasDosManosCaC.bisarma, armas.armasMarciales.armasDosManosCaC.espadon, armas.armasMarciales.armasDosManosCaC.granClava, armas.armasMarciales.armasDosManosCaC.granHacha, armas.armasMarciales.armasDosManosCaC.guadana, armas.armasMarciales.armasDosManosCaC.guja, armas.armasMarciales.armasDosManosCaC.lanzaDeCaballeria, armas.armasMarciales.armasDosManosCaC.mangualPesado, armas.armasMarciales.armasDosManosCaC.ronca],
                distancia: [armas.armasSencillas.armasAtaqueDistancia.ballestaLigera, armas.armasSencillas.armasAtaqueDistancia.ballestaPesada, armas.armasSencillas.armasAtaqueDistancia.dardo, armas.armasSencillas.armasAtaqueDistancia.honda, armas.armasSencillas.armasAtaqueDistancia.jabalina, armas.armasMarciales.armasAtaqueDistancia.arcoCorto, armas.armasMarciales.armasAtaqueDistancia.arcoCortoCompuesto, armas.armasMarciales.armasAtaqueDistancia.arcoLargo, armas.armasMarciales.armasAtaqueDistancia.arcoLargoCompuesto],
            },
            posiblesArmaduras: [armaduras.armaduraPesada.armaduraLaminada, armaduras.armaduraPesada.armaduraPlacasMallas, armaduras.armaduraPesada.cotaDeBandas, armaduras.armaduraPesada.armaduraCompleta, armaduras.armaduraIntermedia.pieles, armaduras.armaduraIntermedia.cotaDeEscamas, armaduras.armaduraIntermedia.cotaDeMallas, armaduras.armaduraIntermedia.coraza],
            posiblesEscudos: [armaduras.escudos.escudoLigeroMadera, armaduras.escudos.escudoLigeroAcero, armaduras.escudos.escudoPesadoAcero, armaduras.escudos.escudoPesadoMadera, armaduras.escudos.escudoPaves],
        },
        1: {
            ataqueBase: 1,
            salvaciones: {
                fortaleza: 2,
                reflejos: 0,
                voluntad: 0,
            },
            especial: ["1 dote aticional"],
        },
        2: {
            ataqueBase: 2,
            salvaciones: {
                fortaleza: 3,
                reflejos: 0,
                voluntad: 0,
            },
            especial: ["2 dotes adicionales"],
        },
        3: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 3,
                reflejos: 1,
                voluntad: 1,
            },
            especial: ["2 dotes adicionales"],
        },
        4: {
            ataqueBase: 4,
            salvaciones: {
                fortaleza: 4,
                reflejos: 1,
                voluntad: 1,
            },
            especial: ["3 dotes adicionales"],
        },
        5: {
            ataqueBase: 5,
            salvaciones: {
                fortaleza: 4,
                reflejos: 1,
                voluntad: 1,
            },
            especial: ["3 dotes adicionales"],
        },
        6: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 5,
                reflejos: 2,
                voluntad: 2,
            },
            especial: ["4 dotes adicionales"],
        },
        7: {
            ataqueBase: 7,
            salvaciones: {
                fortaleza: 5,
                reflejos: 2,
                voluntad: 2,
            },
            especial: ["4 dotes adicionales"],
        },
        8: {
            ataqueBase: 8,
            salvaciones: {
                fortaleza: 6,
                reflejos: 2,
                voluntad: 2,
            },
            especial: ["5 dotes adicionales"],
        },
        9: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 6,
                reflejos: 3,
                voluntad: 3,
            },
            especial: ["5 dotes adicionales"],
        },
        10: {
            ataqueBase: 10,
            salvaciones: {
                fortaleza: 7,
                reflejos: 3,
                voluntad: 3,
            },
            especial: ["6 dotes adicionales"],
        },
        11: {
            ataqueBase: 11,
            salvaciones: {
                fortaleza: 7,
                reflejos: 3,
                voluntad: 3,
            },
            especial: ["6 dotes adicionales"],
        },
        12: {
            ataqueBase: 12,
            salvaciones: {
                fortaleza: 8,
                reflejos: 4,
                voluntad: 4,
            },
            especial: ["7 dotes adicionales"],
        },
        13: {
            ataqueBase: 13,
            salvaciones: {
                fortaleza: 8,
                reflejos: 4,
                voluntad: 4,
            },
            especial: ["7 dotes adicionales"],
        },
        14: {
            ataqueBase: 14,
            salvaciones: {
                fortaleza: 9,
                reflejos: 4,
                voluntad: 4,
            },
            especial: ["8 dotes adicionales"],
        },
        15: {
            ataqueBase: 15,
            salvaciones: {
                fortaleza: 9,
                reflejos: 5,
                voluntad: 5,
            },
            especial: ["8 dotes adicionales"],
        },
        16: {
            ataqueBase: 16,
            salvaciones: {
                fortaleza: 10,
                reflejos: 5,
                voluntad: 5,
            },
            especial: ["9 dotes adicionales"],
        },
        17: {
            ataqueBase: 17,
            salvaciones: {
                fortaleza: 10,
                reflejos: 5,
                voluntad: 5,
            },
            especial: ["9 dotes adicionales"],
        },
        18: {
            ataqueBase: 18,
            salvaciones: {
                fortaleza: 11,
                reflejos: 6,
                voluntad: 6,
            },
            especial: ["10 dotes adicionales"],
        },
        19: {
            ataqueBase: 19,
            salvaciones: {
                fortaleza: 11,
                reflejos: 6,
                voluntad: 6,
            },
            especial: ["10 dotes adicionales"],
        },
        20: {
            ataqueBase: 20,
            salvaciones: {
                fortaleza: 12,
                reflejos: 6,
                voluntad: 6,
            },
            especial: ["11 dotes adicionales"],
        },
    },
    hechicero: {
        varios: {
            dg: 4,
            alineamiento: ["LB", "LN", "LM", "NB", "NN", "NM", "CB", "CN", "CM"],
            caracteristicas: ["Car", "Des", "Con"],
            caracteristicasMenosImp: ["Int", "Sab", "Fue"],
            hc: ["Artesania", "Concentracion", "Conocimiento de conjuros", "Engañar", "Oficio", "Saber arcano"],
            ph: 2,
            posiblesArmas: {
                cuerpo: [armas.armasSencillas.armasLigerasCaC.daga, armas.armasSencillas.armasLigerasCaC.guanteleteArmado, armas.armasSencillas.armasLigerasCaC.hoz, armas.armasSencillas.armasLigerasCaC.mazaLigera, armas.armasSencillas.armasLigerasCaC.puñal, armas.armasSencillas.armasUnaManoCaC.clava, armas.armasSencillas.armasUnaManoCaC.mazaDeArmas, armas.armasSencillas.armasUnaManoCaC.mazaPesada, armas.armasSencillas.armasUnaManoCaC.lanzaCorta, armas.armasSencillas.armasDosManosCaC.baston, armas.armasSencillas.armasDosManosCaC.lanza, armas.armasSencillas.armasDosManosCaC.lanzaLarga],
                distancia: [armas.armasSencillas.armasAtaqueDistancia.ballestaLigera, armas.armasSencillas.armasAtaqueDistancia.ballestaPesada, armas.armasSencillas.armasAtaqueDistancia.dardo, armas.armasSencillas.armasAtaqueDistancia.honda, armas.armasSencillas.armasAtaqueDistancia.jabalina],
            },
            posiblesArmaduras: null,
            posiblesEscudos: null,
            caracteristicaConjuros: 'Car',
        },
        1: {
            ataqueBase: 0,
            salvaciones: {
                fortaleza: 0,
                reflejos: 0,
                voluntad: 2,
            },
            especial: ["Convocar a un familiar"],
            conjuros: [5, 3, false, false, false, false, false, false, false, false],
        },
        2: {
            ataqueBase: 1,
            salvaciones: {
                fortaleza: 0,
                reflejos: 0,
                voluntad: 3,
            },
            especial: ["Convocar a un familiar"],
            conjuros: [6, 4, false, false, false, false, false, false, false, false],
        },
        3: {
            ataqueBase: 1,
            salvaciones: {
                fortaleza: 1,
                reflejos: 1,
                voluntad: 3,
            },
            especial: ["Convocar a un familiar"],
            conjuros: [6, 5, false, false, false, false, false, false, false, false],
        },
        4: {
            ataqueBase: 2,
            salvaciones: {
                fortaleza: 1,
                reflejos: 1,
                voluntad: 4,
            },
            especial: ["Convocar a un familiar"],
            conjuros: [6, 6, 3, false, false, false, false, false, false, false],
        },
        5: {
            ataqueBase: 2,
            salvaciones: {
                fortaleza: 1,
                reflejos: 1,
                voluntad: 4,
            },
            especial: ["Convocar a un familiar"],
            conjuros: [6, 6, 4, false, false, false, false, false, false, false],
        },
        6: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 2,
                reflejos: 2,
                voluntad: 5,
            },
            especial: ["Convocar a un familiar"],
            conjuros: [6, 6, 5, 3, false, false, false, false, false, false],
        },
        7: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 2,
                reflejos: 2,
                voluntad: 5,
            },
            especial: ["Convocar a un familiar"],
            conjuros: [6, 6, 6, 4, false, false, false, false, false, false],
        },
        8: {
            ataqueBase: 4,
            salvaciones: {
                fortaleza: 2,
                reflejos: 2,
                voluntad: 6,
            },
            especial: ["Convocar a un familiar"],
            conjuros: [6, 6, 6, 5, 3, false, false, false, false, false],
        },
        9: {
            ataqueBase: 4,
            salvaciones: {
                fortaleza: 3,
                reflejos: 3,
                voluntad: 6,
            },
            especial: ["Convocar a un familiar"],
            conjuros: [6, 6, 6, 6, 4, false, false, false, false, false],
        },
        10: {
            ataqueBase: 5,
            salvaciones: {
                fortaleza: 3,
                reflejos: 3,
                voluntad: 7,
            },
            especial: ["Convocar a un familiar"],
            conjuros: [6, 6, 6, 6, 5, 3, false, false, false, false],
        },
        11: {
            ataqueBase: 5,
            salvaciones: {
                fortaleza: 3,
                reflejos: 3,
                voluntad: 7,
            },
            especial: ["Convocar a un familiar"],
            conjuros: [6, 6, 6, 6, 6, 4, false, false, false, false],
        },
        12: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 4,
                reflejos: 4,
                voluntad: 8,
            },
            especial: ["Convocar a un familiar"],
            conjuros: [6, 6, 6, 6, 6, 5, 3, false, false, false],
        },
        13: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 4,
                reflejos: 4,
                voluntad: 8,
            },
            especial: ["Convocar a un familiar"],
            conjuros: [6, 6, 6, 6, 6, 6, 4, false, false, false],
        },
        14: {
            ataqueBase: 7,
            salvaciones: {
                fortaleza: 4,
                reflejos: 4,
                voluntad: 9,
            },
            especial: ["Convocar a un familiar"],
            conjuros: [6, 6, 6, 6, 6, 6, 5, 3, false, false],
        },
        15: {
            ataqueBase: 7,
            salvaciones: {
                fortaleza: 5,
                reflejos: 5,
                voluntad: 9,
            },
            especial: ["Convocar a un familiar"],
            conjuros: [6, 6, 6, 6, 6, 6, 6, 4, false, false],
        },
        16: {
            ataqueBase: 8,
            salvaciones: {
                fortaleza: 5,
                reflejos: 5,
                voluntad: 10,
            },
            especial: ["Convocar a un familiar"],
            conjuros: [6, 6, 6, 6, 6, 6, 6, 5, 3, false],
        },
        17: {
            ataqueBase: 8,
            salvaciones: {
                fortaleza: 5,
                reflejos: 5,
                voluntad: 10,
            },
            especial: ["Convocar a un familiar"],
            conjuros: [6, 6, 6, 6, 6, 6, 6, 6, 4, false],
        },
        18: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 6,
                reflejos: 6,
                voluntad: 11,
            },
            especial: ["Convocar a un familiar"],
            conjuros: [6, 6, 6, 6, 6, 6, 6, 6, 5, 3],
        },
        19: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 6,
                reflejos: 6,
                voluntad: 11,
            },
            especial: ["Convocar a un familiar"],
            conjuros: [6, 6, 6, 6, 6, 6, 6, 6, 6, 4],
        },
        20: {
            ataqueBase: 10,
            salvaciones: {
                fortaleza: 6,
                reflejos: 6,
                voluntad: 12,
            },
            especial: ["Convocar a un familiar"],
            conjuros: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        },
    },
    mago: {
        varios: {
            dg: 4,
            alineamiento: ["LB", "LN", "LM", "NB", "NN", "NM", "CB", "CN", "CM"],
            caracteristicas: ["Int", "Des", "Con"],
            caracteristicasMenosImp: ["Sab", "Car", "Fue"],
            hc: ["Artesania", "Concentracion", "Conocimiento de conjuros", "Descifrar escritura", "Oficio", "Saber arcano", "Saber arquitectura e ingenieria", "Saber dungeons", "Saber geografia", "Saber historia", "Saber local", "Saber los planos", "Saber naturaleza", "Saber nobleza y realeza", "Saber religion"],
            ph: 2,
            posiblesArmas: {
                cuerpo: [armas.armasSencillas.armasDosManosCaC.baston, armas.armasSencillas.armasLigerasCaC.daga, armas.armasSencillas.armasUnaManoCaC.clava],
                distancia: [armas.armasSencillas.armasAtaqueDistancia.ballestaPesada, armas.armasSencillas.armasAtaqueDistancia.ballestaLigera],
            },
            posiblesArmaduras: null,
            posiblesEscudos: null,
            caracteristicaConjuros: 'Int',
        },
        1: {
            ataqueBase: 0,
            salvaciones: {
                fortaleza: 0,
                reflejos: 0,
                voluntad: 2,
            },
            especial: ["Convocar a un familiar", "Inscribir rollo de pergamino"],
            conjuros: [3, 1, false, false, false, false, false, false, false, false],
        },
        2: {
            ataqueBase: 1,
            salvaciones: {
                fortaleza: 0,
                reflejos: 0,
                voluntad: 3,
            },
            especial: ["Convocar a un familiar", "Inscribir rollo de pergamino"],
            conjuros: [4, 2, false, false, false, false, false, false, false, false],
        },
        3: {
            ataqueBase: 1,
            salvaciones: {
                fortaleza: 1,
                reflejos: 1,
                voluntad: 3,
            },
            especial: ["Convocar a un familiar", "Inscribir rollo de pergamino"],
            conjuros: [4, 2, 1, false, false, false, false, false, false, false],
        },
        4: {
            ataqueBase: 2,
            salvaciones: {
                fortaleza: 1,
                reflejos: 1,
                voluntad: 4,
            },
            especial: ["Convocar a un familiar", "Inscribir rollo de pergamino"],
            conjuros: [4, 3, 2, false, false, false, false, false, false, false],
        },
        5: {
            ataqueBase: 2,
            salvaciones: {
                fortaleza: 1,
                reflejos: 1,
                voluntad: 4,
            },
            especial: ["Convocar a un familiar", "Inscribir rollo de pergamino", "1 dote aticional"],
            conjuros: [4, 3, 2, 1, false, false, false, false, false, false],
        },
        6: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 2,
                reflejos: 2,
                voluntad: 5,
            },
            especial: ["Convocar a un familiar", "Inscribir rollo de pergamino", "1 dote aticional"],
            conjuros: [4, 3, 3, 2, false, false, false, false, false, false],
        },
        7: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 2,
                reflejos: 2,
                voluntad: 5,
            },
            especial: ["Convocar a un familiar", "Inscribir rollo de pergamino", "1 dote aticional"],
            conjuros: [4, 4, 3, 2, 1, false, false, false, false, false],
        },
        8: {
            ataqueBase: 4,
            salvaciones: {
                fortaleza: 2,
                reflejos: 2,
                voluntad: 6,
            },
            especial: ["Convocar a un familiar", "Inscribir rollo de pergamino", "1 dote aticional"],
            conjuros: [4, 4, 3, 3, 2, false, false, false, false, false],
        },
        9: {
            ataqueBase: 4,
            salvaciones: {
                fortaleza: 3,
                reflejos: 3,
                voluntad: 6,
            },
            especial: ["Convocar a un familiar", "Inscribir rollo de pergamino", "1 dote aticional"],
            conjuros: [4, 4, 4, 3, 2, 1, false, false, false, false],
        },
        10: {
            ataqueBase: 5,
            salvaciones: {
                fortaleza: 3,
                reflejos: 3,
                voluntad: 7,
            },
            especial: ["Convocar a un familiar", "Inscribir rollo de pergamino", "2 dotes adicionales"],
            conjuros: [4, 4, 4, 3, 3, 2, false, false, false, false],
        },
        11: {
            ataqueBase: 5,
            salvaciones: {
                fortaleza: 3,
                reflejos: 3,
                voluntad: 7,
            },
            especial: ["Convocar a un familiar", "Inscribir rollo de pergamino", "2 dotes adicionales"],
            conjuros: [4, 4, 4, 4, 3, 2, 1, false, false, false],
        },
        12: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 4,
                reflejos: 4,
                voluntad: 8,
            },
            especial: ["Convocar a un familiar", "Inscribir rollo de pergamino", "2 dotes adicionales"],
            conjuros: [4, 4, 4, 4, 3, 3, 2, false, false, false],
        },
        13: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 4,
                reflejos: 4,
                voluntad: 8,
            },
            especial: ["Convocar a un familiar", "Inscribir rollo de pergamino", "2 dotes adicionales"],
            conjuros: [4, 4, 4, 4, 4, 3, 2, 1, false, false],
        },
        14: {
            ataqueBase: 7,
            salvaciones: {
                fortaleza: 4,
                reflejos: 4,
                voluntad: 9,
            },
            especial: ["Convocar a un familiar", "Inscribir rollo de pergamino", "2 dotes adicionales"],
            conjuros: [4, 4, 4, 4, 4, 3, 3, 2, false, false],
        },
        15: {
            ataqueBase: 7,
            salvaciones: {
                fortaleza: 5,
                reflejos: 5,
                voluntad: 9,
            },
            especial: ["Convocar a un familiar", "Inscribir rollo de pergamino", "3 dotes adicionales"],
            conjuros: [4, 4, 4, 4, 4, 4, 3, 2, 1, false],
        },
        16: {
            ataqueBase: 8,
            salvaciones: {
                fortaleza: 5,
                reflejos: 5,
                voluntad: 10,
            },
            especial: ["Convocar a un familiar", "Inscribir rollo de pergamino", "3 dotes adicionales"],
            conjuros: [4, 4, 4, 4, 4, 4, 3, 3, 2, false],
        },
        17: {
            ataqueBase: 8,
            salvaciones: {
                fortaleza: 5,
                reflejos: 5,
                voluntad: 10,
            },
            especial: ["Convocar a un familiar", "Inscribir rollo de pergamino", "3 dotes adicionales"],
            conjuros: [4, 4, 4, 4, 4, 4, 4, 3, 2, 1],
        },
        18: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 6,
                reflejos: 6,
                voluntad: 11,
            },
            especial: ["Convocar a un familiar", "Inscribir rollo de pergamino", "3 dotes adicionales"],
            conjuros: [4, 4, 4, 4, 4, 4, 4, 3, 3, 2],
        },
        19: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 6,
                reflejos: 6,
                voluntad: 11,
            },
            especial: ["Convocar a un familiar", "Inscribir rollo de pergamino", "3 dotes adicionales"],
            conjuros: [4, 4, 4, 4, 4, 4, 4, 4, 3, 3],
        },
        20: {
            ataqueBase: 10,
            salvaciones: {
                fortaleza: 6,
                reflejos: 6,
                voluntad: 12,
            },
            especial: ["Convocar a un familiar", "Inscribir rollo de pergamino", "4 dotes adicionales"],
            conjuros: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        },
    },
    monje: {
        varios: {
            dg: 8,
            alineamiento: ["LB", "LN", "LM"],
            caracteristicas: ["Sab", "Des", "Fue"],
            caracteristicasMenosImp: ["Con", "Int", "Car"],
            hc: ["Artesania", "Averiguar intenciones", "Avistar", "Concentracion", "Diplomacia", "Equilibrio", "Escapismo", "Esconderse", "Escuchar", "Interpretar", "Moverse sigilosamente", "Nadar", "Oficio", "Piruetas", "Saber arcano", "Saber religion", "Saltar", "Trepar"],
            ph: 4,
            posiblesArmas: {
                cuerpo: [armas.armasSencillas.armasDosManosCaC.baston, armas.armasSencillas.armasLigerasCaC.daga, armas.armasSencillas.armasUnaManoCaC.clava, armas.armasMarciales.armasLigerasCaC.hachaDeMano, armas.armasExoticas.armasLigerasCaC.kama, armas.armasExoticas.armasLigerasCaC.nunchaku, armas.armasExoticas.armasLigerasCaC.sai, armas.armasExoticas.armasLigerasCaC.siangham],
                distancia: [armas.armasSencillas.armasAtaqueDistancia.ballestaPesada, armas.armasSencillas.armasAtaqueDistancia.ballestaLigera, armas.armasSencillas.armasAtaqueDistancia.honda, armas.armasSencillas.armasAtaqueDistancia.jabalina, armas.armasExoticas.armasAtaqueDistancia.shuriken],
            },
            posiblesArmaduras: null,
            posiblesEscudos: null,
        },
        1: {
            ataqueBase: 0,
            salvaciones: {
                fortaleza: 2,
                reflejos: 2,
                voluntad: 2,
            },
            especial: ["Rafaga de golpes: -2/-2", "Impacto sin arma", "Dote adicional"],
            dmgSinArma: "1d6",
            bonificadorArmadura: 0,
            bonificadorVelocidad: 0
        },
        2: {
            ataqueBase: 1,
            salvaciones: {
                fortaleza: 3,
                reflejos: 3,
                voluntad: 3,
            },
            especial: ["Rafaga de golpes: -1/-1", "Impacto sin arma", "Dote adicional", "Dote adicional", "Evasion"],
            dmgSinArma: "1d6",
            bonificadorArmadura: 0,
            bonificadorVelocidad: 0
        },
        3: {
            ataqueBase: 2,
            salvaciones: {
                fortaleza: 3,
                reflejos: 3,
                voluntad: 3,
            },
            especial: ["Rafaga de golpes: +0/+0", "Impacto sin arma", "Dote adicional", "Dote adicional", "Evasion", "Mente en calma"],
            dmgSinArma: "1d6",
            bonificadorArmadura: 0,
            bonificadorVelocidad: 10
        },
        4: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 4,
                reflejos: 4,
                voluntad: 4,
            },
            especial: ["Rafaga de golpes: +1/+1", "Impacto sin arma", "Dote adicional", "Dote adicional", "Evasion", "Mente en calma", "Impacto KI (Magico)", "Ralentizar caída 20'"],
            dmgSinArma: "1d8",
            bonificadorArmadura: 0,
            bonificadorVelocidad: 10
        },
        5: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 4,
                reflejos: 4,
                voluntad: 4,
            },
            especial: ["Rafaga de golpes: +2/+2", "Impacto sin arma", "Dote adicional", "Dote adicional", "Evasion", "Mente en calma", "Impacto KI (Magico)", "Ralentizar caída 20'", "Pureza Corporal"],
            dmgSinArma: "1d8",
            bonificadorArmadura: 1,
            bonificadorVelocidad: 10
        },
        6: {
            ataqueBase: 4,
            salvaciones: {
                fortaleza: 5,
                reflejos: 5,
                voluntad: 5,
            },
            especial: ["Rafaga de golpes: +3/+3", "Impacto sin arma", "3 dotes adicionales", "Evasion", "Mente en calma", "Impacto KI (Magico)", "Ralentizar caída 30'", "Pureza Corporal"],
            dmgSinArma: "1d8",
            bonificadorArmadura: 1,
            bonificadorVelocidad: 20
        },
        7: {
            ataqueBase: 5,
            salvaciones: {
                fortaleza: 5,
                reflejos: 5,
                voluntad: 5,
            },
            especial: ["Rafaga de golpes: +4/+4", "Impacto sin arma", "3 dotes adicionales", "Evasion", "Mente en calma", "Impacto KI (Magico)", "Ralentizar caída 30'", "Pureza Corporal", "Plenitud corporal"],
            dmgSinArma: "1d8",
            bonificadorArmadura: 1,
            bonificadorVelocidad: 20
        },
        8: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 6,
                reflejos: 6,
                voluntad: 6,
            },
            especial: ["Rafaga de golpes: +5/+5/+0", "Impacto sin arma", "3 dotes adicionales", "Evasion", "Mente en calma", "Impacto KI (Magico)", "Ralentizar caída 40'", "Pureza Corporal", "Plenitud corporal"],
            dmgSinArma: "1d10",
            bonificadorArmadura: 1,
            bonificadorVelocidad: 20
        },
        9: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 6,
                reflejos: 6,
                voluntad: 6,
            },
            especial: ["Rafaga de golpes: +6/+6/+1", "Impacto sin arma", "3 dotes adicionales", "Evasion mejorada", "Mente en calma", "Impacto KI (Magico)", "Ralentizar caída 40'", "Pureza Corporal", "Plenitud corporal"],
            dmgSinArma: "1d10",
            bonificadorArmadura: 1,
            bonificadorVelocidad: 30
        },
        10: {
            ataqueBase: 7,
            salvaciones: {
                fortaleza: 7,
                reflejos: 7,
                voluntad: 7,
            },
            especial: ["Rafaga de golpes: +7/+7/+2", "Impacto sin arma", "3 dotes adicionales", "Evasion mejorada", "Mente en calma", "Impacto KI (Magico) (Legal)", "Ralentizar caída 50'", "Pureza Corporal", "Plenitud corporal"],
            dmgSinArma: "1d10",
            bonificadorArmadura: 2,
            bonificadorVelocidad: 30
        },
        11: {
            ataqueBase: 8,
            salvaciones: {
                fortaleza: 7,
                reflejos: 7,
                voluntad: 7,
            },
            especial: ["Rafaga de golpes: +8/+8/+3", "Impacto sin arma", "3 dotes adicionales", "Evasion mejorada", "Mente en calma", "Impacto KI (Magico) (Legal)", "Ralentizar caída 50'", "Pureza Corporal", "Plenitud corporal", "Cuerpo diamantino", "Rafaga mayor"],
            dmgSinArma: "1d10",
            bonificadorArmadura: 2,
            bonificadorVelocidad: 30
        },
        12: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 8,
                reflejos: 8,
                voluntad: 8,
            },
            especial: ["Rafaga de golpes: +9/+9/+4", "Impacto sin arma", "3 dotes adicionales", "Evasion mejorada", "Mente en calma", "Impacto KI (Magico) (Legal)", "Ralentizar caída 60'", "Pureza Corporal", "Plenitud corporal", "Cuerpo diamantino", "Rafaga mayor", "Paso abundante"],
            dmgSinArma: "2d6",
            bonificadorArmadura: 2,
            bonificadorVelocidad: 40
        },
        13: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 8,
                reflejos: 8,
                voluntad: 8,
            },
            especial: ["Rafaga de golpes: +9/+9/+4", "Impacto sin arma", "3 dotes adicionales", "Evasion mejorada", "Mente en calma", "Impacto KI (Magico) (Legal)", "Ralentizar caída 60'", "Pureza Corporal", "Plenitud corporal", "Cuerpo diamantino", "Rafaga mayor", "Paso abundante", "Alma diamnantina"],
            dmgSinArma: "2d6",
            bonificadorArmadura: 2,
            bonificadorVelocidad: 40
        },
        14: {
            ataqueBase: 10,
            salvaciones: {
                fortaleza: 9,
                reflejos: 9,
                voluntad: 9,
            },
            especial: ["Rafaga de golpes: +10/+10/+10/+5", "Impacto sin arma", "3 dotes adicionales", "Evasion mejorada", "Mente en calma", "Impacto KI (Magico) (Legal)", "Ralentizar caída 70'", "Pureza Corporal", "Plenitud corporal", "Cuerpo diamantino", "Rafaga mayor", "Paso abundante", "Alma diamnantina"],
            dmgSinArma: "2d6",
            bonificadorArmadura: 2,
            bonificadorVelocidad: 40
        },
        15: {
            ataqueBase: 11,
            salvaciones: {
                fortaleza: 9,
                reflejos: 9,
                voluntad: 9,
            },
            especial: ["Rafaga de golpes: +11/+11/+11/+6/+1", "Impacto sin arma", "3 dotes adicionales", "Evasion mejorada", "Mente en calma", "Impacto KI (Magico) (Legal)", "Ralentizar caída 70'", "Pureza Corporal", "Plenitud corporal", "Cuerpo diamantino", "Rafaga mayor", "Paso abundante", "Alma diamnantina", "Palma temblorosa"],
            dmgSinArma: "2d6",
            bonificadorArmadura: 3,
            bonificadorVelocidad: 50
        },
        16: {
            ataqueBase: 12,
            salvaciones: {
                fortaleza: 10,
                reflejos: 10,
                voluntad: 10,
            },
            especial: ["Rafaga de golpes: +12/+12/+12/+7/+2", "Impacto sin arma", "3 dotes adicionales", "Evasion mejorada", "Mente en calma", "Impacto KI (Magico) (Legal) (Adamantino)", "Ralentizar caída 80'", "Pureza Corporal", "Plenitud corporal", "Cuerpo diamantino", "Rafaga mayor", "Paso abundante", "Alma diamnantina", "Palma temblorosa"],
            dmgSinArma: "2d8",
            bonificadorArmadura: 3,
            bonificadorVelocidad: 50
        },
        17: {
            ataqueBase: 12,
            salvaciones: {
                fortaleza: 10,
                reflejos: 10,
                voluntad: 10,
            },
            especial: ["Rafaga de golpes: +12/+12/+12/+7/+2", "Impacto sin arma", "3 dotes adicionales", "Evasion mejorada", "Mente en calma", "Impacto KI (Magico) (Legal) (Adamantino)", "Ralentizar caída 80'", "Pureza Corporal", "Plenitud corporal", "Cuerpo diamantino", "Rafaga mayor", "Paso abundante", "Alma diamnantina", "Palma temblorosa", "Cuerpo eterno", "Lengua del sol y la luna"],
            dmgSinArma: "2d8",
            bonificadorArmadura: 3,
            bonificadorVelocidad: 50
        },
        18: {
            ataqueBase: 13,
            salvaciones: {
                fortaleza: 11,
                reflejos: 11,
                voluntad: 11,
            },
            especial: ["Rafaga de golpes: +13/+13/+13/+8/+3", "Impacto sin arma", "3 dotes adicionales", "Evasion mejorada", "Mente en calma", "Impacto KI (Magico) (Legal) (Adamantino)", "Ralentizar caída 90'", "Pureza Corporal", "Plenitud corporal", "Cuerpo diamantino", "Rafaga mayor", "Paso abundante", "Alma diamnantina", "Palma temblorosa", "Cuerpo eterno", "Lengua del sol y la luna"],
            dmgSinArma: "2d8",
            bonificadorArmadura: 3,
            bonificadorVelocidad: 60
        },
        19: {
            ataqueBase: 14,
            salvaciones: {
                fortaleza: 11,
                reflejos: 11,
                voluntad: 11,
            },
            especial: ["Rafaga de golpes: +14/+14/+14/+9/+4", "Impacto sin arma", "3 dotes adicionales", "Evasion mejorada", "Mente en calma", "Impacto KI (Magico) (Legal) (Adamantino)", "Ralentizar caída 90'", "Pureza Corporal", "Plenitud corporal", "Cuerpo diamantino", "Rafaga mayor", "Paso abundante", "Alma diamnantina", "Palma temblorosa", "Cuerpo eterno", "Lengua del sol y la luna", "Cuerpo vacío"],
            dmgSinArma: "2d8",
            bonificadorArmadura: 3,
            bonificadorVelocidad: 60
        },
        20: {
            ataqueBase: 15,
            salvaciones: {
                fortaleza: 12,
                reflejos: 12,
                voluntad: 12,
            },
            especial: ["Rafaga de golpes: +15/+15/+15/+10/+5", "Impacto sin arma", "3 dotes adicionales", "Evasion mejorada", "Mente en calma", "Impacto KI (Magico) (Legal) (Adamantino)", "Ralentizar caída Infinito", "Pureza Corporal", "Plenitud corporal", "Cuerpo diamantino", "Rafaga mayor", "Paso abundante", "Alma diamnantina", "Palma temblorosa", "Cuerpo eterno", "Lengua del sol y la luna", "Cuerpo vacío", "Yo perfecto"],
            dmgSinArma: "2d10",
            bonificadorArmadura: 4,
            bonificadorVelocidad: 60
        },
    },
    paladin: {
        varios: {
            dg: 10,
            alineamiento: ["LB"],
            caracteristicas: ["Sab", "Car", "Fue"],
            caracteristicasMenosImp: ["Con", "Des", "Int"],
            hc: ["Artesania", "Averiguar intenciones", "Concentracion", "Diplomacia", "Montar", "Oficio", "Saber nobleza y realeza", "Saber religion", "Sanar", "Trato con animales"],
            ph: 2,
            posiblesArmas: {
                cuerpo: [armas.armasSencillas.armasLigerasCaC.daga, armas.armasSencillas.armasLigerasCaC.guanteleteArmado, armas.armasSencillas.armasLigerasCaC.hoz, armas.armasSencillas.armasLigerasCaC.mazaLigera, armas.armasSencillas.armasLigerasCaC.puñal, armas.armasSencillas.armasUnaManoCaC.clava, armas.armasSencillas.armasUnaManoCaC.mazaDeArmas, armas.armasSencillas.armasUnaManoCaC.mazaPesada, armas.armasSencillas.armasUnaManoCaC.lanzaCorta, armas.armasSencillas.armasDosManosCaC.baston, armas.armasSencillas.armasDosManosCaC.lanza, armas.armasSencillas.armasDosManosCaC.lanzaLarga, armas.armasMarciales.armasLigerasCaC.armaduraConPuas, armas.armasMarciales.armasLigerasCaC.cachiporra, armas.armasMarciales.armasLigerasCaC.espadaCorta, armas.armasMarciales.armasLigerasCaC.hachaArrojadiza, armas.armasMarciales.armasLigerasCaC.hachaDeMano, armas.armasMarciales.armasLigerasCaC.kukri, armas.armasMarciales.armasLigerasCaC.martilloLigero, armas.armasMarciales.armasLigerasCaC.picoLigero, armas.armasMarciales.armasUnaManoCaC.cimitarra, armas.armasMarciales.armasUnaManoCaC.espadaLarga, armas.armasMarciales.armasUnaManoCaC.estoque, armas.armasMarciales.armasUnaManoCaC.hachaDeBatalla, armas.armasMarciales.armasUnaManoCaC.mangual, armas.armasMarciales.armasUnaManoCaC.martilloDeGuerra, armas.armasMarciales.armasUnaManoCaC.picoPesado, armas.armasMarciales.armasUnaManoCaC.tridente, armas.armasMarciales.armasDosManosCaC.alabarda, armas.armasMarciales.armasDosManosCaC.alfanjon, armas.armasMarciales.armasDosManosCaC.bisarma, armas.armasMarciales.armasDosManosCaC.espadon, armas.armasMarciales.armasDosManosCaC.granClava, armas.armasMarciales.armasDosManosCaC.granHacha, armas.armasMarciales.armasDosManosCaC.guadana, armas.armasMarciales.armasDosManosCaC.guja, armas.armasMarciales.armasDosManosCaC.lanzaDeCaballeria, armas.armasMarciales.armasDosManosCaC.mangualPesado, armas.armasMarciales.armasDosManosCaC.ronca],
                distancia: [armas.armasSencillas.armasAtaqueDistancia.ballestaLigera, armas.armasSencillas.armasAtaqueDistancia.ballestaPesada, armas.armasSencillas.armasAtaqueDistancia.dardo, armas.armasSencillas.armasAtaqueDistancia.honda, armas.armasSencillas.armasAtaqueDistancia.jabalina, armas.armasMarciales.armasAtaqueDistancia.arcoCorto, armas.armasMarciales.armasAtaqueDistancia.arcoCortoCompuesto, armas.armasMarciales.armasAtaqueDistancia.arcoLargo, armas.armasMarciales.armasAtaqueDistancia.arcoLargoCompuesto],
            },
            posiblesArmaduras: [armaduras.armaduraPesada.armaduraLaminada, armaduras.armaduraPesada.armaduraPlacasMallas, armaduras.armaduraPesada.cotaDeBandas, armaduras.armaduraPesada.armaduraCompleta, armaduras.armaduraIntermedia.pieles, armaduras.armaduraIntermedia.cotaDeEscamas, armaduras.armaduraIntermedia.cotaDeMallas, armaduras.armaduraIntermedia.coraza],
            posiblesEscudos: [armaduras.escudos.escudoLigeroMadera, armaduras.escudos.escudoLigeroAcero, armaduras.escudos.escudoPesadoAcero, armaduras.escudos.escudoPesadoMadera, armaduras.escudos.broquel, armaduras.escudos.rodela],
            caracteristicaConjuros: 'Sab',
        },
        1: {
            ataqueBase: 1,
            salvaciones: {
                fortaleza: 2,
                reflejos: 0,
                voluntad: 0,
            },
            especial: ["Castigar al mal", "Aura de bien", "Detectar el mal"],
            conjuros: [false, false, false, false, false, false, false, false, false, false],
        },
        2: {
            ataqueBase: 2,
            salvaciones: {
                fortaleza: 3,
                reflejos: 0,
                voluntad: 0,
            },
            especial: ["Castigar al mal", "Aura de bien", "Detectar el mal", "Imposición de manos", "Gracia divina"],
            conjuros: [false, false, false, false, false, false, false, false, false, false],
        },
        3: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 3,
                reflejos: 1,
                voluntad: 1,
            },
            especial: ["Castigar al mal", "Aura de bien", "Detectar el mal", "Imposición de manos", "Gracia divina", "Aura de valor", "Salud divina"],
            conjuros: [false, false, false, false, false, false, false, false, false, false],
        },
        4: {
            ataqueBase: 4,
            salvaciones: {
                fortaleza: 4,
                reflejos: 1,
                voluntad: 1,
            },
            especial: ["Castigar al mal", "Aura de bien", "Detectar el mal", "Imposición de manos", "Gracia divina", "Aura de valor", "Salud divina", "Expulsar muertos vivientes"],
            conjuros: [0, false, false, false, false, false, false, false, false, false],
        },
        5: {
            ataqueBase: 5,
            salvaciones: {
                fortaleza: 4,
                reflejos: 1,
                voluntad: 1,
            },
            especial: ["Castigar al mal 2/dia", "Aura de bien", "Detectar el mal", "Imposición de manos", "Gracia divina", "Aura de valor", "Salud divina", "Expulsar muertos vivientes", "Montura especial"],
            conjuros: [0, false, false, false, false, false, false, false, false, false],
        },
        6: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 5,
                reflejos: 2,
                voluntad: 2,
            },
            especial: ["Castigar al mal 2/dia", "Quitar enfermedad 1/semana", "Aura de bien", "Detectar el mal", "Imposición de manos", "Gracia divina", "Aura de valor", "Salud divina", "Expulsar muertos vivientes", "Montura especial"],
            conjuros: [1, false, false, false, false, false, false, false, false, false],
        },
        7: {
            ataqueBase: 7,
            salvaciones: {
                fortaleza: 5,
                reflejos: 2,
                voluntad: 2,
            },
            especial: ["Castigar al mal 2/dia", "Quitar enfermedad 1/semana", "Aura de bien", "Detectar el mal", "Imposición de manos", "Gracia divina", "Aura de valor", "Salud divina", "Expulsar muertos vivientes", "Montura especial"],
            conjuros: [1, false, false, false, false, false, false, false, false, false],
        },
        8: {
            ataqueBase: 8,
            salvaciones: {
                fortaleza: 6,
                reflejos: 2,
                voluntad: 2,
            },
            especial: ["Castigar al mal 2/dia", "Quitar enfermedad 1/semana", "Aura de bien", "Detectar el mal", "Imposición de manos", "Gracia divina", "Aura de valor", "Salud divina", "Expulsar muertos vivientes", "Montura especial"],
            conjuros: [1, 0, false, false, false, false, false, false, false, false],
        },
        9: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 6,
                reflejos: 3,
                voluntad: 3,
            },
            especial: ["Castigar al mal 2/dia", "Quitar enfermedad 2/semana", "Aura de bien", "Detectar el mal", "Imposición de manos", "Gracia divina", "Aura de valor", "Salud divina", "Expulsar muertos vivientes", "Montura especial"],
            conjuros: [1, 0, false, false, false, false, false, false, false, false],
        },
        10: {
            ataqueBase: 10,
            salvaciones: {
                fortaleza: 7,
                reflejos: 3,
                voluntad: 3,
            },
            especial: ["Castigar al mal 3/dia", "Quitar enfermedad 2/semana", "Aura de bien", "Detectar el mal", "Imposición de manos", "Gracia divina", "Aura de valor", "Salud divina", "Expulsar muertos vivientes", "Montura especial"],
            conjuros: [1, 1, false, false, false, false, false, false, false, false],
        },
        11: {
            ataqueBase: 11,
            salvaciones: {
                fortaleza: 7,
                reflejos: 3,
                voluntad: 3,
            },
            especial: ["Castigar al mal 3/dia", "Quitar enfermedad 2/semana", "Aura de bien", "Detectar el mal", "Imposición de manos", "Gracia divina", "Aura de valor", "Salud divina", "Expulsar muertos vivientes", "Montura especial"],
            conjuros: [1, 1, 0, false, false, false, false, false, false, false],
        },
        12: {
            ataqueBase: 12,
            salvaciones: {
                fortaleza: 8,
                reflejos: 4,
                voluntad: 4,
            },
            especial: ["Castigar al mal 3/dia", "Quitar enfermedad 3/semana", "Aura de bien", "Detectar el mal", "Imposición de manos", "Gracia divina", "Aura de valor", "Salud divina", "Expulsar muertos vivientes", "Montura especial"],
            conjuros: [1, 1, 1, false, false, false, false, false, false, false],
        },
        13: {
            ataqueBase: 13,
            salvaciones: {
                fortaleza: 8,
                reflejos: 4,
                voluntad: 4,
            },
            especial: ["Castigar al mal 3/dia", "Quitar enfermedad 3/semana", "Aura de bien", "Detectar el mal", "Imposición de manos", "Gracia divina", "Aura de valor", "Salud divina", "Expulsar muertos vivientes", "Montura especial"],
            conjuros: [1, 1, 1, false, false, false, false, false, false, false],
        },
        14: {
            ataqueBase: 14,
            salvaciones: {
                fortaleza: 9,
                reflejos: 4,
                voluntad: 4,
            },
            especial: ["Castigar al mal 3/dia", "Quitar enfermedad 3/semana", "Aura de bien", "Detectar el mal", "Imposición de manos", "Gracia divina", "Aura de valor", "Salud divina", "Expulsar muertos vivientes", "Montura especial"],
            conjuros: [2, 1, 1, 0, false, false, false, false, false, false],
        },
        15: {
            ataqueBase: 15,
            salvaciones: {
                fortaleza: 9,
                reflejos: 5,
                voluntad: 5,
            },
            especial: ["Castigar al mal 4/dia", "Quitar enfermedad 4/semana", "Aura de bien", "Detectar el mal", "Imposición de manos", "Gracia divina", "Aura de valor", "Salud divina", "Expulsar muertos vivientes", "Montura especial"],
            conjuros: [2, 1, 1, 1, false, false, false, false, false, false],
        },
        16: {
            ataqueBase: 16,
            salvaciones: {
                fortaleza: 10,
                reflejos: 5,
                voluntad: 5,
            },
            especial: ["Castigar al mal 4/dia", "Quitar enfermedad 4/semana", "Aura de bien", "Detectar el mal", "Imposición de manos", "Gracia divina", "Aura de valor", "Salud divina", "Expulsar muertos vivientes", "Montura especial"],
            conjuros: [2, 2, 1, 1, false, false, false, false, false, false],
        },
        17: {
            ataqueBase: 17,
            salvaciones: {
                fortaleza: 10,
                reflejos: 5,
                voluntad: 5,
            },
            especial: ["Castigar al mal 4/dia", "Quitar enfermedad 4/semana", "Aura de bien", "Detectar el mal", "Imposición de manos", "Gracia divina", "Aura de valor", "Salud divina", "Expulsar muertos vivientes", "Montura especial"],
            conjuros: [2, 2, 2, 1, false, false, false, false, false, false],
        },
        18: {
            ataqueBase: 18,
            salvaciones: {
                fortaleza: 11,
                reflejos: 6,
                voluntad: 6,
            },
            especial: ["Castigar al mal 4/dia", "Quitar enfermedad 5/semana", "Aura de bien", "Detectar el mal", "Imposición de manos", "Gracia divina", "Aura de valor", "Salud divina", "Expulsar muertos vivientes", "Montura especial"],
            conjuros: [3, 2, 2, 1, false, false, false, false, false, false],
        },
        19: {
            ataqueBase: 19,
            salvaciones: {
                fortaleza: 11,
                reflejos: 6,
                voluntad: 6,
            },
            especial: ["Castigar al mal 4/dia", "Quitar enfermedad 5/semana", "Aura de bien", "Detectar el mal", "Imposición de manos", "Gracia divina", "Aura de valor", "Salud divina", "Expulsar muertos vivientes", "Montura especial"],
            conjuros: [3, 3, 3, 1, false, false, false, false, false, false],
        },
        20: {
            ataqueBase: 20,
            salvaciones: {
                fortaleza: 12,
                reflejos: 6,
                voluntad: 6,
            },
            especial: ["Castigar al mal 5/dia", "Quitar enfermedad 5/semana", "Aura de bien", "Detectar el mal", "Imposición de manos", "Gracia divina", "Aura de valor", "Salud divina", "Expulsar muertos vivientes", "Montura especial"],
            conjuros: [3, 3, 3, 3, false, false, false, false, false, false],
        },
    },
    picaro: {
        varios: {
            dg: 6,
            alineamiento: ["LB", "LN", "LM", "NB", "NN", "NM", "CB", "CN", "CM"],
            caracteristicas: ["Des", "Int", "Sab"],
            caracteristicasMenosImp: ["Fue", "Car", "Con"],
            hc: ["Abrir cerraduras", "Artesania", "Averiguar intenciones", "Avistar", "Buscar", "Descifrar escritura", "Diplomacia", "Disfrazarse", "Engañar", "Equilibrio", "Escapismo", "Esconderse", "Escuchar", "Falsificar", "Interpretar", "Intimidar", "Inutilizar mecanismo", "Juego de manos", "Moverse sigilosamente", "Nadar", "Oficio", "Piruetas", "Reunir informacion", "Saber local", "Saltar", "Tasacion", "Trepar", "Usar objeto magico", "Uso de cuerdas"],
            ph: 8,
            posiblesArmas: {
                cuerpo: [armas.armasSencillas.armasLigerasCaC.daga, armas.armasSencillas.armasLigerasCaC.guanteleteArmado, armas.armasSencillas.armasLigerasCaC.hoz, armas.armasSencillas.armasLigerasCaC.mazaLigera, armas.armasSencillas.armasLigerasCaC.puñal, armas.armasSencillas.armasUnaManoCaC.clava, armas.armasSencillas.armasUnaManoCaC.mazaDeArmas, armas.armasSencillas.armasUnaManoCaC.mazaPesada, armas.armasSencillas.armasUnaManoCaC.lanzaCorta, armas.armasSencillas.armasDosManosCaC.baston, armas.armasSencillas.armasDosManosCaC.lanza, armas.armasSencillas.armasDosManosCaC.lanzaLarga, armas.armasMarciales.armasLigerasCaC.espadaCorta, armas.armasMarciales.armasUnaManoCaC.estoque],
                distancia: [armas.armasSencillas.armasAtaqueDistancia.ballestaLigera, armas.armasSencillas.armasAtaqueDistancia.ballestaPesada, armas.armasSencillas.armasAtaqueDistancia.dardo, armas.armasSencillas.armasAtaqueDistancia.honda, armas.armasSencillas.armasAtaqueDistancia.jabalina, armas.armasMarciales.armasAtaqueDistancia.arcoCorto, armas.armasExoticas.armasAtaqueDistancia.ballestaDeMano],
            },
            posiblesArmaduras: [armaduras.armaduraLigera.acolchada, armaduras.armaduraLigera.cuero, armaduras.armaduraLigera.cueroTachonado, armaduras.armaduraLigera.camisoteDeMallas],
            posiblesEscudos: null,
        },
        1: {
            ataqueBase: 0,
            salvaciones: {
                fortaleza: 0,
                reflejos: 2,
                voluntad: 0,
            },
            especial: ["Ataque furtivo +1d6", "Encontrar trampas"],
        },
        2: {
            ataqueBase: 1,
            salvaciones: {
                fortaleza: 0,
                reflejos: 3,
                voluntad: 0,
            },
            especial: ["Ataque furtivo +1d6", "Encontrar trampas", "Evasión"],
        },
        3: {
            ataqueBase: 2,
            salvaciones: {
                fortaleza: 1,
                reflejos: 3,
                voluntad: 1,
            },
            especial: ["Ataque furtivo +2d6", "Encontrar trampas", "Evasión", "Sentido de las trampas +1"],
        },
        4: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 1,
                reflejos: 4,
                voluntad: 1,
            },
            especial: ["Ataque furtivo +2d6", "Encontrar trampas", "Evasión", "Sentido de las trampas +1", "Esquiva asombrosa"],
        },
        5: {
            ataqueBase: 3,
            salvaciones: {
                fortaleza: 1,
                reflejos: 4,
                voluntad: 1,
            },
            especial: ["Ataque furtivo +3d6", "Encontrar trampas", "Evasión", "Sentido de las trampas +1", "Esquiva asombrosa"],
        },
        6: {
            ataqueBase: 4,
            salvaciones: {
                fortaleza: 2,
                reflejos: 5,
                voluntad: 2,
            },
            especial: ["Ataque furtivo +3d6", "Encontrar trampas", "Evasión", "Sentido de las trampas +2", "Esquiva asombrosa"],
        },
        7: {
            ataqueBase: 5,
            salvaciones: {
                fortaleza: 2,
                reflejos: 5,
                voluntad: 2,
            },
            especial: ["Ataque furtivo +4d6", "Encontrar trampas", "Evasión", "Sentido de las trampas +2", "Esquiva asombrosa"],
        },
        8: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 2,
                reflejos: 6,
                voluntad: 2,
            },
            especial: ["Ataque furtivo +4d6", "Encontrar trampas", "Evasión", "Sentido de las trampas +2", "Esquiva asombrosa mejorada"],
        },
        9: {
            ataqueBase: 6,
            salvaciones: {
                fortaleza: 3,
                reflejos: 6,
                voluntad: 3,
            },
            especial: ["Ataque furtivo +5d6", "Encontrar trampas", "Evasión", "Sentido de las trampas +3", "Esquiva asombrosa mejorada"],
        },
        10: {
            ataqueBase: 7,
            salvaciones: {
                fortaleza: 3,
                reflejos: 7,
                voluntad: 3,
            },
            especial: ["Ataque furtivo +5d6", "Encontrar trampas", "Evasión", "Sentido de las trampas +3", "Esquiva asombrosa mejorada", "Aptitud especial"],
        },
        11: {
            ataqueBase: 8,
            salvaciones: {
                fortaleza: 3,
                reflejos: 7,
                voluntad: 3,
            },
            especial: ["Ataque furtivo +6d6", "Encontrar trampas", "Evasión", "Sentido de las trampas +3", "Esquiva asombrosa mejorada", "Aptitud especial"],
        },
        12: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 4,
                reflejos: 8,
                voluntad: 4,
            },
            especial: ["Ataque furtivo +6d6", "Encontrar trampas", "Evasión", "Sentido de las trampas +4", "Esquiva asombrosa mejorada", "Aptitud especial"],
        },
        13: {
            ataqueBase: 9,
            salvaciones: {
                fortaleza: 4,
                reflejos: 8,
                voluntad: 4,
            },
            especial: ["Ataque furtivo +7d6", "Encontrar trampas", "Evasión", "Sentido de las trampas +4", "Esquiva asombrosa mejorada", "Aptitud especial"],
        },
        14: {
            ataqueBase: 10,
            salvaciones: {
                fortaleza: 4,
                reflejos: 9,
                voluntad: 4,
            },
            especial: ["Ataque furtivo +7d6", "Encontrar trampas", "Evasión", "Sentido de las trampas +4", "Esquiva asombrosa mejorada", "Aptitud especial"],
        },
        15: {
            ataqueBase: 11,
            salvaciones: {
                fortaleza: 5,
                reflejos: 9,
                voluntad: 5,
            },
            especial: ["Ataque furtivo +8d6", "Encontrar trampas", "Evasión", "Sentido de las trampas +5", "Esquiva asombrosa mejorada", "Aptitud especial"],
        },
        16: {
            ataqueBase: 12,
            salvaciones: {
                fortaleza: 5,
                reflejos: 10,
                voluntad: 5,
            },
            especial: ["Ataque furtivo +8d6", "Encontrar trampas", "Evasión", "Sentido de las trampas +5", "Esquiva asombrosa mejorada", "Aptitud especial", "Aptitud especial"],
        },
        17: {
            ataqueBase: 12,
            salvaciones: {
                fortaleza: 5,
                reflejos: 10,
                voluntad: 5,
            },
            especial: ["Ataque furtivo +9d6", "Encontrar trampas", "Evasión", "Sentido de las trampas +5", "Esquiva asombrosa mejorada", "Aptitud especial", "Aptitud especial"],
        },
        18: {
            ataqueBase: 13,
            salvaciones: {
                fortaleza: 6,
                reflejos: 11,
                voluntad: 6,
            },
            especial: ["Ataque furtivo +9d6", "Encontrar trampas", "Evasión", "Sentido de las trampas +6", "Esquiva asombrosa mejorada", "Aptitud especial", "Aptitud especial"],
        },
        19: {
            ataqueBase: 14,
            salvaciones: {
                fortaleza: 6,
                reflejos: 11,
                voluntad: 6,
            },
            especial: ["Ataque furtivo +10d6", "Encontrar trampas", "Evasión", "Sentido de las trampas +6", "Esquiva asombrosa mejorada", "Aptitud especial", "Aptitud especial", "Aptitud especial"],
        },
        20: {
            ataqueBase: 15,
            salvaciones: {
                fortaleza: 6,
                reflejos: 12,
                voluntad: 6,
            },
            especial: ["Ataque furtivo +10d6", "Encontrar trampas", "Evasión", "Sentido de las trampas +6", "Esquiva asombrosa mejorada", "Aptitud especial", "Aptitud especial", "Aptitud especial"],
        },
    },
}
module.exports = clases;