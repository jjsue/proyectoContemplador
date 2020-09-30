# Proyecto contemplador

## Licencia

Eres totalmente libre de descargar, leer y estudiar este código además de modificarlo como plazcas, sin embargo no se puede usar este código en aplicaciones de terceros, sean del tipo que sean sin el permiso del creador.

## API

### Generador de personajes D&D 3.5

```
/api/dyd35/charactergenerator
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

### Generador de trampas D&D 3.5

```
/api/dyd35/trap
```

Cuando hacemos una petición post a este endpoint nos devuelve algo tal que así:

