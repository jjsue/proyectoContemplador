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
            armaduraConPuas: ['Armadura con puas', 'especial', '1d4', '1d6', 'x2', '-', 'especial', 'Perforante'],
            cachiporra: ['Cachiporra', '1 po', '1d4[3]', '1d6[3]', 'x2', '-', 2, 'Contundente'],
            escudoLigero: ['Escudo ligero', 'especial', '1d2', '1d3', 'x2', '-', 'especial', 'Contundente'],
            espadaCorta: ['Espada corta', '10 po', '1d4', '1d6', '19-20/x2', '-', 2, 'Perforante'],
            hachaArrojadiza: ['Hacha arrojadiza', '8 po', '1d4', '1d6', 'x2', '10', 2, 'Cortante'],
            hachaDeMano: ['Hacha de mano', '6 po', '1d4', '1d6', 'x3', '-', 3, 'Cortante'],
            kukri: ['Kukri', '8 po', '1d3', '1d4', '18-20/x2', '-', 2, 'Cortante'],
            martilloLigero: ['Martillo ligero', '1 po', '1d3', '1d4', 'x2', '20', 2, 'Contundente'],
            picoLigero: ['Pico ligero', '4 po', '1d3', '1d4', 'x4', '-', 3, 'Perforante'],
        },
        armasUnaManoCaC: {
            cimitarra: ['Cimitarra', '15 po', '1d4', '1d6', '18-20/x2', '-', 4, 'Cortante'],
            escudoPesado: ['Escudo pesado', 'especial', '1d3', '1d4', 'x2', '-', 'especial', 'Contundente'],
            escudoPesadoConPuas: ['Escudo con puas', 'especial', '1d4', '1d6', 'x2', '-', 'especial', 'Perforante'],
            espadaLarga: ['Espada larga', '15 po', '1d6', '1d8', '19-20/x2', '-', 4, 'Cortante'],
            estoque: ['Estoque', '20 po', '1d4', '1d6', '18-20/x2', '-', 2, 'Perforante'],
            hachaDeBatalla: ['Hacha de batalla', '10 po', '1d6', '1d8', 'x3', '-', 6, 'Cortante'],
            mangual: ['Mangual', '8 po', '1d6', '1d8', 'x2', '-', 5, 'Contundente'],
            martilloDeGuerra: ['Martillo de guerra', '12 po', '1d6', '1d8', 'x3', '-', 5, 'Contundente'],
            picoPesado: ['Pico pesado', '8 po', '1d4', '1d6', 'x4', '-', 6, 'Perforante'],
            tridente: ['Tridente', '15 po', '1d6', '1d8', 'x2', '10', 4, 'Perforante'],
        },
        armasDosManosCaC: {
            alabarda: ['Alabarda','10 po','1d8','1d10','x3','-',12,'Cortante o Perforante'],
            alfanjon: ['Alfanjón','75 po','1d6','2d4','18-20/x2','-',8,'Cortante'],
            bisarma: ['Bisarma','9 po','1d6','2d4','x3','-',12,'Cortante'],
            espadon: ['Espadón','50 po','1d10','2d6','19-20/x2','-',8,'Cortante'],
            granClava: ['Gran clava','5 po','1d8','1d10','x2','-',8,'Contundente'],
            granHacha: ['Gran hacha','20 po','1d10','1d12','x3','-',12,'Cortante'],
            guadana: ['Guadaña','18 po','1d6','2d4','x4','-',10,'Cortante o Perforante'],
            guja: ['Guja','8 po','1d8','1d10','x3','-',10,'Cortante'],
            lanzaDeCaballeria: ['Lanza de caballería','10 po','1d6','1d8','x3','-',10,'Perforante'],
            mangualPesado: ['Mangual pesado','15 po','1d8','1d10','19-20/x2','-',10,'Contuntende'],
            ronca: ['Ronca','10 po','1d6','2d4','x3','-',12,'Perforante'],
        },
        armasAtaqueDistancia: {
            arcoCorto: ['Arco corto','30 po','1d4','1d6','x3','60',2,'Perforante'],
            arcoCortoCompuesto: ['Arco corto compuesto','75 po','1d4','1d6','x3','70',2,'Perforante'],
            arcoLargo: ['Arco largo','75 po','1d6','1d8','x3','100',3,'Perforante'],
            arcoLargoCompuesto: ['Arco largo compuesto','100 po','1d6','1d8','x3','110',3,'Perforante'],
        },
    }
}

module.exports = armas;