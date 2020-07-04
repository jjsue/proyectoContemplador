'use strict'
//Está siendo copiado tal y como es en el manual del jugador 1, el true or false final nos indica si es de una mano o dos manos a efectos de poner la fuerza a 1.5 en el daño
const armas = {
    armasSencillas: {
        ataquesSinArma: {
            guantelete: ['Guantelete', '2 po', '1d2', '1d3', '2', '-', 1, 'contundente', false],
            sinArma: ['Impacto sin arma', '-', '1d2', '1d3', '2', '-', '-', 'contundente', false],
        },
        armasLigerasCaC: {
            daga: ['Daga', '2 po', '1d3', '1d4', '19-20/x2', '10', 1, 'Cortante o Perforante', false],
            guanteleteArmado: ['Guantelete armado', '5 po', '1d3', '1d4', 'x2', '-', 1, 'Perforante', false],
            hoz: ['Hoz', '6 po', '1d4', '1d6', 'x2', '-', 2, 'Cortante', false],
            mazaLigera: ['Maza Ligera', '5 po', '1d4', '1d6', 'x2', '-', 4, 'Contundente', false],
            puñal: ['Puñal', '2 po', '1d3', '1d4', 'x3', '-', 1, 'Perforante', false],
        },
        armasUnaManoCaC: {
            clava: ['Clava', '-', '1d4', '1d6', 'x2', '', 4, 'Contundente', false],
            mazaDeArmas: ['Maza de armas', '8 po', '1d6', '1d8', 'x2', '-', 6, 'Contundente y Perforante', false],
            mazaPesada: ['Maza pesada', '12 po', '1d6', '1d8', 'x2', '-', 8, 'Contundente', false],
            lanzaCorta: ['Lanza corta', '1 po', '1d4', '1d6', 'x2', '20', 3, 'Perforante', false],
        },
        armasDosManosCaC: {
            baston: ['Bastón', '-', '1d4/1d4', '1d6/1d6', 'x2', '-', 3, 'Contundente', true],
            lanza: ['Lanza', '2 po', '1d6', '1d8', 'x3', '20', 6, 'Perforante', true],
            lanzaLarga: ['Lanza larga', '5 po', '1d6', '1d8', 'x3', '-', 9, 'Perforante', true],
        },
        armasAtaqueDistancia: {
            ballestaLigera: ['Ballesta ligera', '35 po', '1d6', '1d8', '19-20/x2', '80', 4, 'Perforante', false],
            ballestaPesada: ['Ballesta pesada', '50 po', '1d8', '1d10', '19-20/x2', '120', 8, 'Perforante', false],
            dardo: ['Dardo', '5 pp', '1d3', '1d4', 'x2', '20', 0.5, 'Perforante', false],
            honda: ['Honda', '35 po', '1d6', '1d8', '19-20/x2', '50', 4, 'Contundente', false],
            jabalina: ['Jabalina', '1 po', '1d6', '1d8', 'x2', '30', 2, 'Perforante', false],
        },
    },
    armasMarciales: {
        armasLigerasCaC: {
            armaduraConPuas: ['Armadura con puas', 'especial', '1d4', '1d6', 'x2', '-', 'especial', 'Perforante', false],
            cachiporra: ['Cachiporra', '1 po', '1d4[3]', '1d6[3]', 'x2', '-', 2, 'Contundente', false],
            escudoLigero: ['Escudo ligero', 'especial', '1d2', '1d3', 'x2', '-', 'especial', 'Contundente', false],
            espadaCorta: ['Espada corta', '10 po', '1d4', '1d6', '19-20/x2', '-', 2, 'Perforante', false],
            hachaArrojadiza: ['Hacha arrojadiza', '8 po', '1d4', '1d6', 'x2', '10', 2, 'Cortante', false],
            hachaDeMano: ['Hacha de mano', '6 po', '1d4', '1d6', 'x3', '-', 3, 'Cortante', false],
            kukri: ['Kukri', '8 po', '1d3', '1d4', '18-20/x2', '-', 2, 'Cortante', false],
            martilloLigero: ['Martillo ligero', '1 po', '1d3', '1d4', 'x2', '20', 2, 'Contundente', false],
            picoLigero: ['Pico ligero', '4 po', '1d3', '1d4', 'x4', '-', 3, 'Perforante', false],
        },
        armasUnaManoCaC: {
            cimitarra: ['Cimitarra', '15 po', '1d4', '1d6', '18-20/x2', '-', 4, 'Cortante', false],
            escudoPesado: ['Escudo pesado', 'especial', '1d3', '1d4', 'x2', '-', 'especial', 'Contundente', false],
            escudoPesadoConPuas: ['Escudo con puas', 'especial', '1d4', '1d6', 'x2', '-', 'especial', 'Perforante', false],
            espadaLarga: ['Espada larga', '15 po', '1d6', '1d8', '19-20/x2', '-', 4, 'Cortante', false],
            estoque: ['Estoque', '20 po', '1d4', '1d6', '18-20/x2', '-', 2, 'Perforante', false],
            hachaDeBatalla: ['Hacha de batalla', '10 po', '1d6', '1d8', 'x3', '-', 6, 'Cortante', false],
            mangual: ['Mangual', '8 po', '1d6', '1d8', 'x2', '-', 5, 'Contundente', false],
            martilloDeGuerra: ['Martillo de guerra', '12 po', '1d6', '1d8', 'x3', '-', 5, 'Contundente', false],
            picoPesado: ['Pico pesado', '8 po', '1d4', '1d6', 'x4', '-', 6, 'Perforante', false],
            tridente: ['Tridente', '15 po', '1d6', '1d8', 'x2', '10', 4, 'Perforante', false],
        },
        armasDosManosCaC: {
            alabarda: ['Alabarda', '10 po', '1d8', '1d10', 'x3', '-', 12, 'Cortante o Perforante', true],
            alfanjon: ['Alfanjón', '75 po', '1d6', '2d4', '18-20/x2', '-', 8, 'Cortante', true],
            bisarma: ['Bisarma', '9 po', '1d6', '2d4', 'x3', '-', 12, 'Cortante', true],
            espadon: ['Espadón', '50 po', '1d10', '2d6', '19-20/x2', '-', 8, 'Cortante', true],
            granClava: ['Gran clava', '5 po', '1d8', '1d10', 'x2', '-', 8, 'Contundente', true],
            granHacha: ['Gran hacha', '20 po', '1d10', '1d12', 'x3', '-', 12, 'Cortante', true],
            guadana: ['Guadaña', '18 po', '1d6', '2d4', 'x4', '-', 10, 'Cortante o Perforante', true],
            guja: ['Guja', '8 po', '1d8', '1d10', 'x3', '-', 10, 'Cortante', true],
            lanzaDeCaballeria: ['Lanza de caballería', '10 po', '1d6', '1d8', 'x3', '-', 10, 'Perforante', true],
            mangualPesado: ['Mangual pesado', '15 po', '1d8', '1d10', '19-20/x2', '-', 10, 'Contuntende', true],
            ronca: ['Ronca', '10 po', '1d6', '2d4', 'x3', '-', 12, 'Perforante', true],
        },
        armasAtaqueDistancia: {
            arcoCorto: ['Arco corto', '30 po', '1d4', '1d6', 'x3', '60', 2, 'Perforante', false],
            arcoCortoCompuesto: ['Arco corto compuesto', '75 po', '1d4', '1d6', 'x3', '70', 2, 'Perforante', false],
            arcoLargo: ['Arco largo', '75 po', '1d6', '1d8', 'x3', '100', 3, 'Perforante', false],
            arcoLargoCompuesto: ['Arco largo compuesto', '100 po', '1d6', '1d8', 'x3', '110', 3, 'Perforante', false],
        },
    },
    armasExoticas: {
        armasLigerasCaC: {
            kama: ['Kama', '2 po', '1d4', '1d6', 'x2', '-', 2, 'Cortante', false],
            nunchaku: ['Nunchaku', '2 po', '1d4', '1d6', 'x2', '-', 2, 'Contundente', false],
            sai: ['Sai', '1 po', '1d3', '1d3', 'x2', '10', 1, 'Contundente', false],
            siangham: ['Siangham', '3 po', '1d4', '1d6', 'x2', '-', 1, 'Perforante', false],
        },
        armasUnaManoCaC: {
            espadaBastarda: ['Espada Bastarda', '35 po', '1d8', '1d10', '19-20/x2', '-', 6, 'Cortante', false],
            hachaDeGuerraEnana: ['Hacha de guerra enana', '30 po', '1d8', '1d10', 'x3', '-', 8, 'Cortante', false],
            latigo: ['Latigo', '1 po', '1d2', '1d3', 'x2', '-', 2, 'Cortante', false],
        },
        armasDosManosCaC: {
            cadenaArmada: ['Cadena armada', '25 po', '1d6', '2d4', 'x2', '-', 10, 'Perforante', true],
            espadaDosHojas: ['Espada de dos hojas', '100 po', '1d6/1d6', '1d8/1d8', '19-20/x2', '-', 10, 'Cortante', true],
            hachaDobleOrca: ['Hacha doble orca', '60 po', '1d6/1d6', '1d8/1d8', 'x3', '-', 15, 'Cortante', true],
            mangualDoble: ['Mangual doble', '90 po', '1d6/1d6', '1d8/1d8', 'x2', '-', 10, 'Contundente', true],
            martilloGanchudoGnomo: ['Martillo ganchudo gnomo', '20 po', '1d6/1d4', '1d8/1d6', 'x3/x4', '-', 6, 'Contundente o Perforante', true],
            ugroshEnano: ['Ugrosh enano', '50 po', '1d6/1d4', '1d8/1d6', 'x3', '-', 12, 'Cortante o perforante', true],
        },
        armasAtaqueDistancia:{
            ballestaDeMano: ['Ballesta de mano', '100 po', '1d3', '1d4', '19-20/x2', '30', 2, 'Perforante', false],
            ballestaDeRepeticionLigera: ['Ballesta de repetición ligera', '250 po', '1d6', '1d8', '19-20/x2', '80', 6, 'Perforante', false],
            ballestaDeRepeticionPesada: ['Ballesta de repetición pesada', '400 po', '1d8', '1d10', '19-20/x2', '120', 12, 'Perforante', false],
            bolas: ['Bolas', '5 po', '1d3', '1d4', 'x2', '10', 2, 'Contundente', false],
            red: ['Red', '20 po', '-', '-', '-', '10', 6, '-', false],
            shuriken: ['Shuriken', '1 po', '1', '1d2', 'x2', '10', 0.5, 'Perforante', false],
        }
    }
}

module.exports = armas;