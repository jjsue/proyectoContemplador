'use strict'
//Está siendo copiado tal y como es en el manual del jugador 1
const armas = {
    armasSencillas: {
        ataquesSinArma: {
            guantelete: ['Guantelete', '2 po', '1d2', '1d3', '2', '-', 1, 'contundente'],
            sinArma: ['Impacto sin arma', '-', '1d2', '1d3', '2', '-', '-', 'contundente'],
        },
        armasLigerasCaC: {
            daga: ['Daga', '2 po', '1d3', '1d4', '19-20/x2', '10', 1, 'Cortante o Perforante'],
            guanteleteArmado: ['Guantelete armado', '5 po', '1d3', '1d4', 'x2', '-', 1, 'Perforante'],
            hoz: ['Hoz', '6 po', '1d4', '1d6', 'x2', '-', 2, 'Cortante'],
            mazaLigera: ['Maza Ligera', '5 po', '1d4', '1d6', 'x2', '-', 4, 'Contundente'],
            puñal: ['Puñal', '2 po', '1d3', '1d4', 'x3', '-', 1, 'Perforante'],
        },
        armasUnaManoCaC: {
            clava: ['Clava', '-', '1d4', '1d6', 'x2', '', 4, 'Contundente'],
            mazaDeArmas: ['Maza de armas', '8 po', '1d6', '1d8', 'x2', '-', 6, 'Contundente y Perforante'],
            mazaPesada: ['Maza pesada', '12 po', '1d6', '1d8', 'x2', '-', 8, 'Contundente'],
            lanzaCorta: ['Lanza corta', '1 po', '1d4', '1d6', 'x2', '20', 3, 'Perforante'],
        },
        armasDosManosCaC: {
            baston: ['Bastón', '-', '1d4/1d4', '1d6/1d6', 'x2', '-', 3, 'Contundente'],
            lanza: ['Lanza', '2 po', '1d6', '1d8', 'x3', '20', 6, 'Perforante'],
            lanzaLarga: ['Lanza larga', '5 po', '1d6', '1d8', 'x3', '-', 9, 'Perforante'],
        },
        armasAtaqueDistancia: {
            ballestaLigera: ['Ballesta ligera', '35 po', '1d6', '1d8', '19-20/x2', '80', 4, 'Perforante'],
            ballestaPesada: ['Ballesta pesada', '50 po', '1d8', '1d10', '19-20/x2', '120', 8, 'Perforante'],
            dardo: ['Dardo', '5 pp', '1d3', '1d4', 'x2', '20', 0.5, 'Perforante'],
            honda: ['Honda', '35 po', '1d6', '1d8', '19-20/x2', '50', 4, 'Contundente'],
            jabalina: ['Jabalina', '1 po', '1d6', '1d8', 'x2', '30', 2, 'Perforante'],
        },
    },
    armasMarciales: {
        armasLigerasCaC: {
            armaduraConPuas: ['Armadura con puas','especial','1d4','1d6','x2','-','especial','Perforante'],
            cachiporra: ['Cachiporra','1 po','1d4[3]','1d6[3]','x2','-',2,'Contundente'],
            escudoLigero: ['Escudo ligero','especial','1d2','1d3','x2','-','especial','Contundente'],
            espadaCorta: [],
            hachaArrojadiza: [],
            hachaDeMano: [],
            kukri: [],
            martilloLigero: [],
            picoLigero: [],
        },
        armasUnaManoCaC: {
            cimitarra: [],
            escudoPesado: [],
            escudoPesadoConPuas: [],
            espadaLarga:[],
            estoque:[],
            hachaDeBatalla:[],
            mangual:[],
            martilloDeGuerra:[],
            picoPesado:[],
            tridente: [],
        },
        armasDosManosCaC:{
            alabarda: [],
            alfanjon: [],
            bisarma: [],
            espadon: [],
            granClava: [],
            granHacha: [],
            guadana: [],
            guja: [],
            lanzaDeCaballeria: [],
            mangualPesado: [],
            ronca: [],
        },
        armasAtaqueDistancia:{
            arcoCorto: [],
            arcoCortoCompuesto: [],
            arcoLargo: [],
            arcoLargoCompuesto: [],
        },
    }
}

module.exports = armas;