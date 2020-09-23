'use strict';
var Chance = require('chance');
var chance = new Chance();
const armas = require('./../tablas/armas');

function fosoDamage() {
    const sinMulti = chance.rpg('1d20');
    const profundidadEnPies = sinMulti[0] * 10;
    const totalDamage = (`${sinMulti[0]}d6`);
    return [`${profundidadEnPies}' profundidad`, totalDamage];
}
function danoCuerpoCuerpo() {
    const weaponType = ['armasSencillas', 'armasMarciales', 'armasExoticas'];
    const weaponSection = ['armasLigerasCaC', 'armasUnaManoCaC', 'armasDosManosCaC']
    const selectedWeaponType = weaponType[Math.floor(Math.random() * weaponType.length)];
    const selectedWeaponSection = weaponSection[Math.floor(Math.random() * weaponSection.length)]
    const weaponKeys = Object.keys(armas[selectedWeaponType][selectedWeaponSection]);
    const selectedWeaponKey = weaponKeys[Math.floor(Math.random() * weaponKeys.length)];
    return [armas[selectedWeaponType][selectedWeaponSection][selectedWeaponKey][0],armas[selectedWeaponType][selectedWeaponSection][selectedWeaponKey][3], armas[selectedWeaponType][selectedWeaponSection][selectedWeaponKey][4]]
}
function danoDistancia() {
    const weaponType = ['armasSencillas', 'armasMarciales', 'armasExoticas'];
    const selectedWeaponType = weaponType[Math.floor(Math.random() * weaponType.length)];
    const selectedWeaponSection = 'armasAtaqueDistancia'
    const weaponKeys = Object.keys(armas[selectedWeaponType][selectedWeaponSection]);
    const selectedWeaponKey = weaponKeys[Math.floor(Math.random() * weaponKeys.length)];
    return [armas[selectedWeaponType][selectedWeaponSection][selectedWeaponKey][0],armas[selectedWeaponType][selectedWeaponSection][selectedWeaponKey][3], armas[selectedWeaponType][selectedWeaponSection][selectedWeaponKey][4]]
}
function danoEspecial() {
    const posibles = ["la sala se llena de agua", "veneno"]
    return posibles[Math.floor(Math.random() * posibles.length)];
}

const trapDano = function (efecto) {
    console.log(efecto);
    if (efecto === 'foso') {
        return fosoDamage();
    }
    else if (efecto === 'ataque a distancia') {
        return danoDistancia();
    }
    else if (efecto === 'ataque cuerpo a cuerpo') {
        return danoCuerpoCuerpo()
    }
    else if (efecto === 'especial') {
        return danoEspecial()
    }
}

module.exports = trapDano;