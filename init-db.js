'use strict';

const conn = require('./lib/connectDatabase');
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
    {userName: 'contemplador', email:'user@example.es', password: await usersDb.cifrado('1234')},
    {userName: 'Bardichero', email:'userino@example.es', password: await usersDb.cifrado('1234567')}
  ]);
}