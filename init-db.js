'use strict';

const conn = require('./lib/connectDatabase');
const usersDb = require('./models/user');
const pnjDb = require('./models/pnj');

var Chance = require('chance');
var chance = new Chance();

conn.once('open', async () => {
  try {
    await initUsersDb();
    await initPnjDb();
    conn.close();

  } catch (err) {
    console.error('Hubo un error:', err);
    process.exit(1);
  }
});



async function initUsersDb() {
  await usersDb.deleteMany();
}

async function initPnjDb() {
  await pnjDb.deleteMany();
}