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
  await usersDb.insertMany([
    {
      userName: 'contemplador',
      email: 'jjsue_95@hotmail.es',
      password: await usersDb.cifrado('1234'),
      codeUsed: true,
      codeDate: null,
      registerDate: new Date(),
    },
    {
      userName: 'Bardichero',
      email: 'userino@example.es',
      password: await usersDb.cifrado('1234567'),
      codeUsed: true,
      codeDate: null,
      registerDate: new Date(),
    }
  ]);
}

async function initPnjDb() {
  //await pnjDb.deleteMany();
  await pnjDb.insertMany([
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: [6, 6, 6, 6, 6, 5, 4, 4, 4, 4],
      isPublic: true,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: null,
      isPublic: false,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: [6, 6, 6, 6, 6, 5, 4, 4, 4, 4],
      isPublic: true,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: null,
      isPublic: false,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: [6, 6, 6, 6, 6, 5, 4, 4, 4, 4],
      isPublic: true,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: null,
      isPublic: false,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: [6, 6, 6, 6, 6, 5, 4, 4, 4, 4],
      isPublic: true,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: null,
      isPublic: false,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: [6, 6, 6, 6, 6, 5, 4, 4, 4, 4],
      isPublic: true,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: null,
      isPublic: false,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: [6, 6, 6, 6, 6, 5, 4, 4, 4, 4],
      isPublic: true,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: null,
      isPublic: false,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: [6, 6, 6, 6, 6, 5, 4, 4, 4, 4],
      isPublic: true,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: null,
      isPublic: false,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: [6, 6, 6, 6, 6, 5, 4, 4, 4, 4],
      isPublic: true,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: null,
      isPublic: false,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: [6, 6, 6, 6, 6, 5, 4, 4, 4, 4],
      isPublic: true,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: null,
      isPublic: false,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: [6, 6, 6, 6, 6, 5, 4, 4, 4, 4],
      isPublic: true,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: null,
      isPublic: false,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: [6, 6, 6, 6, 6, 5, 4, 4, 4, 4],
      isPublic: true,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: null,
      isPublic: false,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: [6, 6, 6, 6, 6, 5, 4, 4, 4, 4],
      isPublic: true,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
    {
      name: chance.name(),
      clase: 'Clerigo',
      nivel: 20,
      raza: 'Semiorco',
      especial: [
        "Expulsar o reprender muertos vivientes",
        "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
      ],
      tam: "med",
      salvaciones: {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
      },
      caracteristicas: {
        Sab: [
          19,
          4
        ],
        Fue: [
          18,
          4
        ],
        Car: [
          14,
          2
        ],
        Con: [
          12,
          1
        ],
        Int: [
          11,
          0
        ],
        Des: [
          11,
          0
        ]
      },
      habilidades: [
        [
          "Abrir cerraduras",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Artesania",
          "Int",
          false,
          0,
          12,
          0,
          true,
          true
        ],
        [
          "Averiguar intenciones",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Avistar",
          "Sab",
          false,
          4,
          0,
          0,
          false,
          true
        ],
        [
          "Buscar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Concentracion",
          "Con",
          false,
          1,
          8,
          0,
          true,
          true
        ],
        [
          "Conocimiento de conjuros",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Descrifrar escritura",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Diplomacia",
          "Car",
          false,
          2,
          9,
          0,
          true,
          true
        ],
        [
          "Disfrazarse",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Engañar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Equilibrio",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escapismo",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Esconderse",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Escuchar",
          "Sab",
          false,
          4,
          1,
          0,
          false,
          true
        ],
        [
          "Falsificar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Interpretar",
          "Car",
          false,
          2,
          0,
          0,
          false,
          true
        ],
        [
          "Intimidar",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Inutilizar mecanismo",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Juego de manos",
          "Des",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Montar",
          "Des",
          false,
          0,
          1,
          0,
          false,
          true
        ],
        [
          "Moverse sigilosamente",
          "Des",
          true,
          0,
          0,
          -9,
          false,
          true
        ],
        [
          "Nadar",
          "Fue",
          true,
          4,
          1,
          -18,
          false,
          true
        ],
        [
          "Oficio",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          false
        ],
        [
          "Piruetas",
          "Des",
          true,
          0,
          1,
          -9,
          false,
          false
        ],
        [
          "Reunir informacion",
          "Car",
          false,
          2,
          2,
          0,
          false,
          true
        ],
        [
          "Saber arcano",
          "Int",
          false,
          0,
          12,
          0,
          true,
          false
        ],
        [
          "Saber arquitectura e ingenieria",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber dungeons",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber geografia",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber historia",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saber local",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber los planos",
          "Int",
          false,
          0,
          8,
          0,
          true,
          false
        ],
        [
          "Saber naturaleza",
          "Int",
          false,
          0,
          1,
          0,
          false,
          false
        ],
        [
          "Saber nobleza y realeza",
          "Int",
          false,
          0,
          0,
          0,
          false,
          false
        ],
        [
          "Saber religion",
          "Int",
          false,
          0,
          9,
          0,
          true,
          false
        ],
        [
          "Saltar",
          "Fue",
          true,
          4,
          0,
          -9,
          false,
          true
        ],
        [
          "Sanar",
          "Sab",
          false,
          4,
          8,
          0,
          true,
          true
        ],
        [
          "Supervivencia",
          "Sab",
          false,
          4,
          2,
          0,
          false,
          true
        ],
        [
          "Tasacion",
          "Int",
          false,
          0,
          0,
          0,
          false,
          true
        ],
        [
          "Trato con animales",
          "Car",
          false,
          2,
          2,
          0,
          false,
          false
        ],
        [
          "Trepar",
          "Fue",
          false,
          4,
          0,
          0,
          false,
          false
        ],
        [
          "Usar objeto magico",
          "Car",
          false,
          2,
          0,
          0,
          false,
          false
        ],
        [
          "Uso de cuerdas",
          "Des",
          false,
          0,
          0,
          0,
          false,
          true
        ]
      ],
      equipo: {
        armas: [
          [
            "Lanza corta",
            "1 po",
            "1d4",
            "1d6",
            "x2",
            "20",
            3,
            "Perforante",
            false
          ],
          [
            "Maza de armas",
            "8 po",
            "1d6",
            "1d8",
            "x2",
            "-",
            6,
            "Contundente y Perforante",
            false
          ],
          [
            "Ballesta ligera",
            "35 po",
            "1d6",
            "1d8",
            "19-20/x2",
            "80",
            4,
            "Perforante",
            false
          ]
        ],
        armadura: [
          "Armadura laminada",
          "200 po",
          6,
          0,
          -7,
          40,
          20,
          15,
          45
        ],
        escudo: [
          "Escudo pesado de madera",
          "7 po",
          2,
          1000,
          -2,
          15,
          30,
          20,
          10
        ]
      },
      ataqueBase: [
        15,
        10,
        5
      ],
      "ataques": [
        [
          "Cimitarra",
          "+18 +13 +8 ",
          "1d6 + 3"
        ],
        [
          "Alfanjón",
          "+18 +13 +8 ",
          "2d4 + 4"
        ],
        [
          "Jabalina",
          "+16 +11 +6 ",
          "1d8 + 3"
        ]
      ],
      ca: [
        18,
        10,
        18
      ],
      velocidad: 20,
      pg: 110,
      alineamiento: "CB",
      conjuros: null,
      isPublic: false,
      creatorId: chance.wp8_anid2(),
      creationDate: new Date(),
    },
  ]);

}