'use strict'
//La primera posición es para ver si aumenta o disminuyen caracteristicas, Despues el tamaño y por ultimo la velocidad terrestre.
const tablaRazas = {
    humano: [
        {
            Fue: 0,
            Des: 0,
            Con: 0,
            Int: 0,
            Sab: 0,
            Car: 0,
        },
        'med',
        30
    ],
    elfo: [
        {
            Fue: 0,
            Des: 2,
            Con: -2,
            Int: 0,
            Sab: 0,
            Car: 0,
        },
        'med',
        30
    ],
    enano: [
        {
            Fue: 0,
            Des: 0,
            Con: 2,
            Int: 0,
            Sab: 0,
            Car: -2
        },
        'med',
        20
    ],
    gnomo: [
        {
            Fue: -2,
            Des: 0,
            Con: 2,
            Int: 0,
            Sab: 0,
            Car: 0,
        },
        'peq',
        20
    ],
    mediano: [
        {
            Fue: -2,
            Des: 2,
            Con: 0,
            Int: 0,
            Sab: 0,
            Car: 0,
        },
        'peq',
        20
    ],
    semielfo: [{},],
    semiorco: [
        {
            Fue: 2,
            Des: 0,
            Con: 0,
            Int: -2,
            Sab: 0,
            Car: -2,
        },
        'med',
        30
    ],
}

module.exports = tablaRazas;