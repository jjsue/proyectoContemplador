'use strict';
require('dotenv').config();
const mongoose = require('mongoose');

const conn = mongoose.connection;

conn.on('open', () => {
  console.log('Base de datos conectada:', conn.name);
});

conn.on('error', err => {
  console.error('Error de conexión', err);
  process.exit(1);
});

mongoose.connect(process.env.DATABASEURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

module.exports = conn;