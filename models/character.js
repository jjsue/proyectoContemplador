'use strict ';

const mongoose = require('mongoose');

const pnjSchema = mongoose.Schema({
    name: { type: String, index: true },
    clase: String,
    nivel: Number,
    raza: String,
    especial: Array,
    caracteristicas: Object,
    habilidades: Array,
    equipo: Object,
    ataqueBase: Array,
    ataques: Array,
    ca: Array,
    velocidad: Number,
    pg: Number,
    alineamiento: String,
    conjuros: Array
});

pnjSchema.statics.lista = function (filter, sort, skip, limit, fields) {
    var query = Pnj.find(filter);
    query.sort(sort);
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    return query.exec();
}

const Pnj = mongoose.model('pnj', pnjSchema);

module.exports = Pnj;