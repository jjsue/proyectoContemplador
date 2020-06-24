'use strict'
//Tal y como viene en el manual el orden es:
//Nombre, Valor en piezas de oro, bonificador, destreza max, penalizador, fallo arcano, velocidad 30, velocidad 20, peso
const armaduras = {
    armaduraLigera: {
        acolchada: ['Acolchada','5 po', 1, 8, 0, 5, 30, 20, 10],
        cuero: ['Cuero','10 po', 2, 6, 0, 10, 30, 20, 15],
        cueroTachonado: ['Cuero tachonado','25 po', 3, 5, -1, 15, 30, 20, 20],
        camisoteDeMallas: ['Camisote de mallas','100 po', 4, 4, -2, 20, 30, 20, 25],
    },
    armaduraIntermedia: {
        pieles: ['Pieles','15 po', 3, 4, -3, 20, 20, 15, 25],
        cotaDeEscamas: ['Cota de escamas','50 po', 4, 3, -4, 25, 20, 15, 30],
        cotaDeMallas: ['Cota de mallas','150 po', 5, 2 - 5, 30, 20, 15, 40],
        coraza: ['Coraza','200 po', 5, 3, -4, 25, 20, 15, 30],
    },
    armaduraPesada: {
        armaduraLaminada: ['Armadura laminada','200 po', 6, 0, -7, 40, 20, 15, 45],
        cotaDeBandas: ['Cota de bandas','250 po', 6, 1, -6, 35, 20, 15, 35],
        armaduraPlacasMallas: ['Armadura de placas y mallas','600 po', 7, 0, -7, 40, 20, 15, 50],
        armaduraCompleta: ['Armadura completa','1500 po', 8, 1, -6, 35, 20, 15, 50],
    },
    escudos: {
        broquel: ['Broquel','15 po', 1, 1000, -1, 5, 30, 20, 5],
        rodela: ['Rodela','15 po', 1, 1000, -1, 5, 30, 20, 5],
        escudoLigeroMadera: ['Escudo ligero de madera','3 po', 1, 1000, -1, 5, 30, 20, 5],
        escudoLigeroAcero: ['Escudo ligero de acero','9 po', 1, 1000, -1, 5, 30, 20, 5],
        escudoPesadoMadera: ['Escudo pesado de madera','7 po', 2, 1000, -2, 15, 30, 20, 10],
        escudoPesadoAcero: ['Escudo pesado de acero','20 po', 2, 1000, -2, 15, 30, 20, 15],
        escudoPaves: ['Escudo pavés','30 po', 4, 2, -10, 50, 30, 20, 45],
    },
}

module.exports = armaduras;