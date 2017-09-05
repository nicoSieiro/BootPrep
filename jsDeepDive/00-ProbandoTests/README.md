
## Preparacion

Para correr los test a lo largo del prep vamos a necesitar instalar un par de programas que nos van a acompañar a lo largo del Bootcamp

### NodeJS

Node es un motor de JavaScript que nos va a permitir correrlo fuera de la consola, por ahora no se preocupen mucho por que hace, lo vamos a ver mas adelante en el bootcamp.

Para instalar Node vamos a ir [acá](https://nodejs.org/en/) y seguir las instrucciones según el sistema operativo que estés usando.

### Npm

Npm es un servicio de paquetes que nos va a permitir usar código de otras personas, al igual que Node no vamos a entrar más en detalle todavía.

Este servicio viene incluido en NodeJS.

### Testem

Testem es una pequeña librería de testeo que nos va a permitir validar fácilmente y de manera dinámica si un programa hace lo que esperamos.

para instalarlo vamos a entrar en la consola y movernos a la carpeta jsDeepDive, ahi vamos a correr el comando:

``` bash
$ npm install
```

Recuerden que el signo `$` es solo el prompt de su consola, el comando empieza en el npm.

## Estructura del Test

Como pueden ver los ejercicios se distribuyen en 4 archivos.

* Los archivo README.md son archivos de texto o mejor dicho _markdown_ que nos van a dar información del tema a trabajar.
* Los archivos `.js` que tengan la palabra Spec, en este caso `testSpec.js` es donde van a estar los test propiamente dichos.
* El otro archivo `.js`, en este caso `test.js` es donde las funciones a testear van a estar.
* Los archivos `testem.json` son archivos de configuración para el test, dejemoslos así como están.

## Corriendo Tests

Cada vez que hayamos terminado con nuestras funciones, o cuando quieran empezar a probar los test, parense en la consola, justo en la carpeta que quieran probar y corran el comando `$ testem`

[imagen comando]

Luego de un momento vamos a ver que `Waiting for runners...` aparece en nuestra pantalla, eso significa que ya tenemos el servicio de testem corriendo y lo podemos acceder entrando a `localhost:7357`. 

[imagen testem]

Una vez que todas sus funciones estén bien testeadas pueden seguir adelante con los ejercicios.
