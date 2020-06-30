# Proyecto contemplador

## API

### Generador de personajes

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