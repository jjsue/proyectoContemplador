'use strict'
var Chance = require('chance');
var chance = new Chance();

const pgFn = function (nivel, dg, modCon) {
    let pgToReturn = dg + modCon;
    for (let i = 1; i < nivel; i++) {
        pgToReturn += chance.rpg(`1d${dg}`)[0] + modCon;
    }

    return pgToReturn;
}

module.exports = pgFn;