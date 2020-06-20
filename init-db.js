'use strict';

const conn = require('./lib/connectDatabase');
// const anuncio = require('./models/anuncio.js');
// const tagDb = require('./models/tag.js');
// const usersDb = require('./models/user.js');
const usersDb = require('./models/user');

conn.once('open', async () => {
  try {
    await initUsersDb();
    conn.close();

  } catch (err) {
    console.error('Hubo un error:', err);
    process.exit(1);
  }
});



async function initUsersDb() {
  await usersDb.deleteMany();
  await usersDb.insertMany([
    {userName: 'contemplador', email:'user@example.es', password: "1234"},
    {userName: 'Bardichero', email:'userino@example.es', password: "12345"}
  ]);
}