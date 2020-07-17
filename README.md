# Proyecto contemplador

## API

### Login

Endpoint */api/login*

Peticion post a la que tenemos que añadir dos campos.

- **email**
- **password**

Si es erroneo alguno de los campos introducidos la respuesta será un 401 con este contenido:

```
{
    "errors": "Username or password wrong"
}
```

Si todo va correctamente la respuesta será:

```
"authToken": "Hola, soy un token JWT"
"userName": "Hola, soy el nombre de usuario"
```

A la vez que se devuelve este token JWT se escribe una cookie en el navegador cuyo nombre es "authToken".

Tenemos otra cookie con el nombre de usuario, así podemos mostrarlo en el front.

A la hora de usar los puntos securizados de la API podremos logarnos bien con la cookie o bien con el token recibido.

<hr/>

### Register

Es un **POST**

```
/api/register
```

Tenemos tres parametros aquí.

- **userName**
- **email**
- **password**

Tenemos varios tipos de respuestas posibles:

El nombre de usuario ya existe en la base de datos (403):

```
{
    "error": "Username already exists"
}
```

El email ya existe en la base de datos (403):

```
{
    "error": "Email already exists"
}
```

Error semantico en el campo email (422):

```
{
    "errors": [
        {
            "value": "example",
            "msg": "Invalid value",
            "param": "email",
            "location": "body"
        }
    ]
}
```

Creado correctamente (201):

```
{
    "result": "user created"
}
```

<hr/>

### Generador de personajes

```
/api/charactergenerator
```

Tenemos que enviar 4 parametros en el body de una petición POST. Estos cuatro parametros son:
- **level**: Nivel de personaje de 1 a 20
- **class**: Clase de personaje, actualmente tenemos las clases del manual de jugador 1. En la petición habría que poner exactamente:
    - barbaro
    - bardo
    - clerigo
    - druida
    - explorador
    - guerrero
    - hechicero
    - mago
    - monje
    - paladin
    - picaro
- **race**: La raza que queremos para nuestro NPC generado aleatoriamente. Las opciones:
    - humano
    - elfo
    - enano
    - gnomo
    - mediano
    - semielfo
    - semiorco
- **dices**: El numero de dados a utilizar a la hora de hacer las tiradas de caracteristica:
    - 2d6: Modo heroico, se lanzan dos dados de seis caras y se suma 6 al resultado
    - 3d6: Modo por defecto de D&D, se lanzan tres dados de seis caras.
    - 4d6: Lanzamos 4 dados de 6 caras y quitamos el resultado mas bajo.

*Ejemplo del body de la petición:*

```
level:20
class:clerigo
race:humano
dices:2d6
```

En el caso de la petición anterior recibiremos una respuesta tal que así, voy poniendo explicaciones de cada sección tras cada doble barra "//":

<details>
<summary>Respuesta, click para expandir.</summary>

```

{
    "createdCharacter": {
        "clase": "Clerigo", //La clase
        "nivel": 20, //Nivel de personaje
        "raza": "Humano", //Raza
        "especial": [ //Especiales en array
            "Expulsar o reprender muertos vivientes",
            "Conjuro extra de dominio por cada nivel de conjuro del 1 al 9"
        ],
        "caracteristicas": { //Caracteristicas, primero base y luego modificador
            "Sab": [
                18,
                4
            ],
            "Fue": [
                17,
                3
            ],
            "Car": [
                16,
                3
            ],
            "Con": [
                12,
                1
            ],
            "Int": [
                12,
                1
            ],
            "Des": [
                9,
                -1
            ]
        },
        "habilidades": [
            [
                "Abrir cerraduras", //Nombre
                "Des", //Caracteristica asociada
                false, //Afectado por penalizador armadura
                -1, // Mod caracteristica
                1, // Rangos
                0, // Mod varios
                false, // Clasea o no
                false // Usable sin rangos o no
            ],
            [
                "Artesania",
                "Int",
                false,
                1,
                23,
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
                2,
                0,
                false,
                true
            ],
            [
                "Buscar",
                "Int",
                false,
                1,
                1,
                0,
                false,
                true
            ],
            [
                "Concentracion",
                "Con",
                false,
                1,
                9,
                0,
                true,
                true
            ],
            [
                "Conocimiento de conjuros",
                "Int",
                false,
                1,
                17,
                0,
                true,
                false
            ],
            [
                "Descrifrar escritura",
                "Int",
                false,
                1,
                1,
                0,
                false,
                false
            ],
            [
                "Diplomacia",
                "Car",
                false,
                3,
                17,
                0,
                true,
                true
            ],
            [
                "Disfrazarse",
                "Car",
                false,
                3,
                2,
                0,
                false,
                true
            ],
            [
                "Engañar",
                "Car",
                false,
                3,
                0,
                0,
                false,
                true
            ],
            [
                "Equilibrio",
                "Des",
                true,
                -1,
                3,
                -17,
                false,
                true
            ],
            [
                "Escapismo",
                "Des",
                true,
                -1,
                0,
                -17,
                false,
                true
            ],
            [
                "Esconderse",
                "Des",
                true,
                -1,
                0,
                -17,
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
                1,
                1,
                0,
                false,
                true
            ],
            [
                "Interpretar",
                "Car",
                false,
                3,
                0,
                0,
                false,
                true
            ],
            [
                "Intimidar",
                "Int",
                false,
                1,
                2,
                0,
                false,
                true
            ],
            [
                "Inutilizar mecanismo",
                "Int",
                false,
                1,
                1,
                0,
                false,
                false
            ],
            [
                "Juego de manos",
                "Des",
                false,
                -1,
                0,
                0,
                false,
                false
            ],
            [
                "Montar",
                "Des",
                false,
                -1,
                0,
                0,
                false,
                true
            ],
            [
                "Moverse sigilosamente",
                "Des",
                true,
                -1,
                0,
                -17,
                false,
                true
            ],
            [
                "Nadar",
                "Fue",
                true,
                3,
                0,
                -34,
                false,
                true
            ],
            [
                "Oficio",
                "Sab",
                false,
                4,
                22,
                0,
                true,
                false
            ],
            [
                "Piruetas",
                "Des",
                true,
                -1,
                4,
                -17,
                false,
                false
            ],
            [
                "Reunir informacion",
                "Car",
                false,
                3,
                0,
                0,
                false,
                true
            ],
            [
                "Saber arcano",
                "Int",
                false,
                1,
                10,
                0,
                true,
                false
            ],
            [
                "Saber arquitectura e ingenieria",
                "Int",
                false,
                1,
                0,
                0,
                false,
                false
            ],
            [
                "Saber dungeons",
                "Int",
                false,
                1,
                1,
                0,
                false,
                false
            ],
            [
                "Saber geografia",
                "Int",
                false,
                1,
                2,
                0,
                false,
                false
            ],
            [
                "Saber historia",
                "Int",
                false,
                1,
                14,
                0,
                true,
                false
            ],
            [
                "Saber local",
                "Int",
                false,
                1,
                2,
                0,
                false,
                false
            ],
            [
                "Saber los planos",
                "Int",
                false,
                1,
                16,
                0,
                true,
                false
            ],
            [
                "Saber naturaleza",
                "Int",
                false,
                1,
                3,
                0,
                false,
                false
            ],
            [
                "Saber nobleza y realeza",
                "Int",
                false,
                1,
                0,
                0,
                false,
                false
            ],
            [
                "Saber religion",
                "Int",
                false,
                1,
                15,
                0,
                true,
                false
            ],
            [
                "Saltar",
                "Fue",
                true,
                3,
                1,
                -17,
                false,
                true
            ],
            [
                "Sanar",
                "Sab",
                false,
                4,
                17,
                0,
                true,
                true
            ],
            [
                "Supervivencia",
                "Sab",
                false,
                4,
                0,
                0,
                false,
                true
            ],
            [
                "Tasacion",
                "Int",
                false,
                1,
                0,
                0,
                false,
                true
            ],
            [
                "Trato con animales",
                "Car",
                false,
                3,
                0,
                0,
                false,
                false
            ],
            [
                "Trepar",
                "Fue",
                false,
                3,
                3,
                0,
                false,
                false
            ],
            [
                "Usar objeto magico",
                "Car",
                false,
                3,
                2,
                0,
                false,
                false
            ],
            [
                "Uso de cuerdas",
                "Des",
                false,
                -1,
                1,
                0,
                false,
                true
            ]
        ],
        "equipo": {
            "armas": [
                [
                    "Lanza corta", // Nombre
                    "1 po", //Valor
                    "1d4", //Daño pequeño
                    "1d6", //Daño mediano
                    "x2", //Valor critico
                    "20", // Incremento de distancia
                    3, //Peso
                    "Perforante", //Tipo de daño
                    false // Dos manos o no
                ],
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
                    "Jabalina",
                    "1 po",
                    "1d6",
                    "1d8",
                    "x2",
                    "30",
                    2,
                    "Perforante",
                    false
                ]
            ],
            "armadura": [
                "Cota de bandas", // Nombre
                "250 po", // Precio
                6, // Bonificador 
                1, // Destreza maxima
                -6, // Penalizador armadura
                35, // Fallo arcano
                20, // Velocidad 30'
                15, //Velocidad 20'
                35 // Peso
            ],
            "escudo": [ //Igual a la armadura
                "Escudo pesado de acero",
                "20 po",
                2,
                1000,
                -2,
                15,
                30,
                20,
                15
            ]
        },
        "ataqueBase": [
            15,
            10,
            5
        ],
        "ataques": [ //Se elige uno de los tres para ataque completo.
            [
                "Cimitarra",
                "+18 +13 +8 ",
                "1d6 + 3"
            ],
            [
                "Cimitarra",
                "+18 +13 +8 ",
                "1d6 + 3"
            ],
            [
                "Jabalina",
                "+17 +12 +7 ",
                "1d8 + 3"
            ]
        ],
        "ca": [ // Armadura en el mismo orden que en la ficha de personaje.
            17, // Total
            9, // Toque
            18 // Desprevenido
        ],
        "velocidad": 20, //Velocidad terrestre con armadura puesta
        "pg": 112, // Puntos de golpe
        "alineamiento": "CM",
        "conjuros": [ //Conjuros en un array.
            6, // Nivel 0
            6, // Nivel 1
            6, // Nivel 2
            6, // Nivel 3
            6, // Nivel 4
            5, // Nivel 5
            4, // Nivel 6
            4, // Nivel 7
            4, // Nivel 8
            4 // Nivel 9
        ],
        "tam": "med", //Tamaño del personaje,
        "salvaciones": { //Salvaciones BASE
            "fortaleza": 9,
            "reflejos": 5,
            "voluntad": 5
        },
    }
}

```

</details>

Como podemos ver en la petición se manejan muchos datos pero está organizado de tal forma que podamos usar en el front los que mas nos convenga en cada momento de forma sencilla.

<hr/>

### character

```
/api/character
```

#### Listado público de personajes

Es una petición de tipo **GET** en la que podremos usar varios párametros (query params) para obtener datos:
- **sort**: *recent* | *old*
- **name**: *nombre del personaje*
- **race**: *raza del personaje*
- **class**: *clase del personaje*
- **levelMax**: *nivel maximo que queremos que tenga el personaje*
- **levelMin**: *nivel minimo que queremos que tenga el personaje*
- **limit**: *limite de resultados (paginacion)*
- **skip**: *saltarse resultados (paginación)*

**Ejemplo de respuesta:**

Query string: *?sort=recent&name=L&race=semi&class=clerigo&limit=5*

```
[
    {
        "_id": "5eff0eac7223a42e046b10cb",
        "name": "Sallie Saunders",
        "clase": "Clerigo",
        "nivel": 20,
        "raza": "Semiorco"
    },
    {
        "_id": "5eff0ce62eeb3b3e60db2fe6",
        "name": "Robert Salazar",
        "clase": "Clerigo",
        "nivel": 20,
        "raza": "Semiorco"
    },
    {
        "_id": "5eff0ce62eeb3b3e60db2fe4",
        "name": "Dale Wheeler",
        "clase": "Clerigo",
        "nivel": 20,
        "raza": "Semiorco"
    },
    {
        "_id": "5eff0ce49f2b0b20e4c7d7d9",
        "name": "Etta Welch",
        "clase": "Clerigo",
        "nivel": 20,
        "raza": "Semiorco"
    },
    {
        "_id": "5eff0ac7a2a3ea1398d7d3df",
        "name": "Ollie Walsh",
        "clase": "Clerigo",
        "nivel": 20,
        "raza": "Semiorco"
    }
]
```

#### Obtener un solo personaje

En el body debemos enviar:

```
id: idPersonaje
```

Tenemos que hacer al mismo endpoint una petición **POST**. Si no tenemos permiso para ver el personaje nos devuelve un **401**:

```
{
    "result": "No tienes permiso para ver este personaje"
}
```

Si tenemos exito consiguiendo ver nuestro personaje obtendremos un **200**.

El cuerpo es un JSON tal que:

```
{
    Toda la informacion del personaje tal y como en createdCharacter pero SIN nombre en el objeto raiz.
}
```

#### Obtener mis propios personajes

Se hace una petición identica a la explicada antes pero sin nada en el body.

El back se encargará de tomar la cookie de sesión para devolver los personajes pertenecientes a ese usuario. Ejemplo de respuesta:

```
{
    "characterArray": [
        {
            "_id": "5f1185ba3490521fd8733cac",
            "name": "Ricardo Milos",
            "clase": "Barbaro",
            "nivel": 1,
            "raza": "Humano"
        },
        {
            "_id": "5f1185b23490521fd8733cab",
            "name": "Manolete",
            "clase": "Barbaro",
            "nivel": 1,
            "raza": "Humano"
        }
    ],
    "user": "Nombre usuario"
}
```

<hr/>

### savecharacter

```
/api/savecharacter
```

Es un endpoint de tipo **post** que que en el body se le devuelven todos los párametros que nos da el endpoint characterGenerator.

Un ejemplo de peticion que hacemos a este endpoint es:
<details>
<summary>Respuesta, click para expandir.</summary>

```
{
    "name": "Manuel ramirez",
    "clase": "Barbaro",
    "nivel": 15,
    "raza": "Humano",
    "especial": [
        "Analfabetismo",
        "Furia Mayor",
        "Voluntad indomable",
        "Furia 4/dia",
        "Movimiento Rápido",
        "Esquiva Asombrosa",
        "Esquiva Asombrosa Mejorada",
        "Sentido de las trampas +5",
        "Reducción del daño 3/--"
    ],
    "tam": "med",
    "salvaciones": {
        "fortaleza": 9,
        "reflejos": 5,
        "voluntad": 5
    },
    "caracteristicas": {
        "Fue": [
            17,
            3
        ],
        "Con": [
            15,
            2
        ],
        "Des": [
            15,
            2
        ],
        "Sab": [
            14,
            2
        ],
        "Car": [
            12,
            1
        ],
        "Int": [
            10,
            0
        ]
    },
    "habilidades": [
        [
            "Artesania",
            "Int",
            false,
            0,
            5,
            0,
            true,
            true
        ],
        [
            "Abrir cerraduras",
            "Des",
            false,
            2,
            0,
            0,
            false,
            false
        ],
        [
            "Averiguar intenciones",
            "Sab",
            false,
            2,
            1,
            0,
            false,
            true
        ],
        [
            "Avistar",
            "Sab",
            false,
            2,
            0,
            0,
            false,
            true
        ],
        [
            "Concentracion",
            "Con",
            false,
            2,
            0,
            0,
            false,
            true
        ],
        [
            "Conocimiento de conjuros",
            "Int",
            false,
            0,
            1,
            0,
            false,
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
            1,
            2,
            0,
            false,
            true
        ],
        [
            "Disfrazarse",
            "Car",
            false,
            1,
            0,
            0,
            false,
            true
        ],
        [
            "Engañar",
            "Car",
            false,
            1,
            0,
            0,
            false,
            true
        ],
        [
            "Equilibrio",
            "Des",
            true,
            2,
            0,
            -1,
            false,
            true
        ],
        [
            "Escapismo",
            "Des",
            true,
            2,
            0,
            -1,
            false,
            true
        ],
        [
            "Buscar",
            "Int",
            false,
            0,
            1,
            0,
            false,
            true
        ],
        [
            "Esconderse",
            "Des",
            true,
            2,
            1,
            -1,
            false,
            true
        ],
        [
            "Escuchar",
            "Sab",
            false,
            2,
            5,
            0,
            true,
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
            1,
            1,
            0,
            false,
            true
        ],
        [
            "Intimidar",
            "Int",
            false,
            0,
            4,
            0,
            true,
            true
        ],
        [
            "Inutilizar mecanismo",
            "Int",
            false,
            0,
            0,
            0,
            false,
            false
        ],
        [
            "Juego de manos",
            "Des",
            false,
            2,
            0,
            0,
            false,
            false
        ],
        [
            "Montar",
            "Des",
            false,
            2,
            9,
            0,
            true,
            true
        ],
        [
            "Moverse sigilosamente",
            "Des",
            true,
            2,
            0,
            -1,
            false,
            true
        ],
        [
            "Nadar",
            "Fue",
            true,
            3,
            10,
            -2,
            true,
            true
        ],
        [
            "Oficio",
            "Sab",
            false,
            2,
            0,
            0,
            false,
            false
        ],
        [
            "Piruetas",
            "Des",
            true,
            2,
            0,
            -1,
            false,
            false
        ],
        [
            "Reunir informacion",
            "Car",
            false,
            1,
            1,
            0,
            false,
            true
        ],
        [
            "Saber arcano",
            "Int",
            false,
            0,
            0,
            0,
            false,
            false
        ],
        [
            "Saber arquitectura e ingenieria",
            "Int",
            false,
            0,
            0,
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
            0,
            0,
            false,
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
            0,
            0,
            false,
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
            2,
            0,
            false,
            false
        ],
        [
            "Saltar",
            "Fue",
            true,
            3,
            5,
            -1,
            true,
            true
        ],
        [
            "Sanar",
            "Sab",
            false,
            2,
            0,
            0,
            false,
            true
        ],
        [
            "Supervivencia",
            "Sab",
            false,
            2,
            6,
            0,
            true,
            true
        ],
        [
            "Tasacion",
            "Int",
            false,
            0,
            3,
            0,
            false,
            true
        ],
        [
            "Trato con animales",
            "Car",
            false,
            1,
            9,
            0,
            true,
            false
        ],
        [
            "Trepar",
            "Fue",
            false,
            3,
            6,
            0,
            true,
            false
        ],
        [
            "Usar objeto magico",
            "Car",
            false,
            1,
            3,
            0,
            false,
            false
        ],
        [
            "Uso de cuerdas",
            "Des",
            false,
            2,
            0,
            0,
            false,
            true
        ]
    ],
    "equipo": {
        "armas": [
            [
                "Alfanjón",
                "75 po",
                "1d6",
                "2d4",
                "18-20/x2",
                "-",
                8,
                "Cortante",
                true
            ],
            [
                "Cimitarra",
                "15 po",
                "1d4",
                "1d6",
                "18-20/x2",
                "-",
                4,
                "Cortante",
                false
            ],
            [
                "Arco corto",
                "30 po",
                "1d4",
                "1d6",
                "x3",
                "60",
                2,
                "Perforante",
                false
            ]
        ],
        "armadura": [
            "Cuero tachonado",
            "25 po",
            3,
            5,
            -1,
            15,
            30,
            20,
            20
        ],
        "escudo": null
    },
    "ataqueBase": [
        15,
        10,
        5
    ],
    "ataques": [
        [
            "Alfanjón",
            "+18 +13 +8 ",
            "2d4 + 4"
        ],
        [
            "Cimitarra",
            "+18 +13 +8 ",
            "1d6 + 3"
        ],
        [
            "Arco corto",
            "+17 +12 +7 ",
            "1d6 + 3"
        ]
    ],
    "ca": [
        15,
        12,
        13
    ],
    "velocidad": 30,
    "pg": 118,
    "alineamiento": "CB",
    "conjuros": null
}
```

</details>

Mucho ojo, los valores se validan en el back para este endpoint, es decir, si por ejemplo nuestra fuerza es 16 el modificador no puede ser 1, por tanto nos dará un error como este con estatus **422**:

```
{
    "errors": [
        {
            "value": {
                "Fue": [
                    17,
                    2
                ],
                "Con": [
                    15,
                    2
                ],
                "Des": [
                    15,
                    2
                ],
                "Sab": [
                    14,
                    2
                ],
                "Car": [
                    12,
                    1
                ],
                "Int": [
                    10,
                    0
                ]
            },
            "msg": "Invalid value",
            "param": "caracteristicas",
            "location": "body"
        }
    ]
}
```

Si todo va bien recibimos un **201**:

```
{
    "result": true
}
```

Por defecto los personajes guardados en base de datos son privados.

### Makepublic

```
/api/makepublic
```

En este endpoint vamos a tener 3 funciones diferentes disponibles, vamos a empezar por la mas obvia

#### Hacer un personaje publico/privado

Es una petición **PUT**

En el body deben ir 2 únicos párametros, uno es *public* que tiene un valor de *yes/no* y es autoexplicativo, si public: yes entonces haremos el personaje público. El otro parametro es *character* donde tendrémos que enviar el id del personaje a cambiar de privado a público. Ejemplo de petición:

```
public:yes
character:5f0db9ea92d2c208e8d666af
```

Si todo va bien recibimos un **201**:

```
{
    "result": "Personaje publico"
}
```

Errores:

Por equivocarnos en el parametro public **400**:

```
{
    "result": "Ni lo uno ni lo otro"
}
```

Por tocar un personaje para el que no tenemos permiso **401**:

```
{
    "result": "No autorizado"
}
```

#### Saber si nuestro personaje es público o privado

Es una petición **POST**

En el body tenemos que meter un párametro *character*, en el cual indicamos un ID de personaje.

La respuesta si todo va bien es **200**:

```
{
    "result": true | false
}
```

Si nos devuelve true es que es público, si nos devuelve false es que es privado.

Tambien podemos recibir **401**

```
{
    "result": "No autorizado"
}
```

#### Borrar un personaje

Es una petición **DELETE**

En el body tenemos que meter un párametro *character*, en el cual indicamos un ID de personaje.

La respuesta si todo va bien es **204**.

Si no estamos autorizados **401**:

```
{
    "result": "No autorizado"
}
```

<hr/>

### Logout

```
/api/logout
```

Es un **POST** vacío que nos borra las cookies de sesión.

En caso de respuesta afirmativa nos devuelve un **204**.

En caso de error por no estar logados nos dará un **400**

```
{
    "result": "No estás logado"
}
```
<hr/>

### Recover

```
/api/recover
```

En este endpoint tenemos dos procedimientos.

#### Codigo de recuperación de contraseña

**POST** que nos sirve para recibir un correo electrónico con un código para recuperar la contraseña.

Si todo va bien recibiremos **200**:

```
{
    "result": "Correo enviado"
}
```

Si no se encuentra el correo **404**:

```
{
    "result": "Not found"
}
```

#### Recuperación de contraseña

Es una petición de tipo **PUT**.

Los párametros a enviar son los siguientes:

```
mail: Correo electronico
code: Codigo recibido por correo electronico
password: Contraseña nueva
```

Si todo va bien recibimos **200**:

```
{
    "result": "Contraseña modificada"
}
```

Si algo va mal recibimos un **401** con información relevante al respecto:

```
{
    "result": "Codigo expirado"
}
```

El mensaje variará en función de donde tengamos el fallo.

<hr/>

### Deleteuser

```
/api/deleteuser
```

En el body tenemos que introducir 3 parámetros

```
user: Usuario
email: Correo
password: Contraseña
```

Además de estos 3 parámetros debemos estar logados.

Si el borrado tiene éxito recibimos un **204**

Si el borrado falla obtenemos un **401** con mas información al respecto:

```
{
    "result": "Contraseña no válida"
}
```