## video help


# Command Line Interface

## Intro

Un **CLI** es una interfaz basada en texto que te permite interactuar con el sistema operativo.

El programa que maneja esa interaccion se llama _command language interpreter_ o _shell_.

[imagen de cli]

Aunque no es la unica interfaz que conocemos. La mas usada se llama GUI (_Graphic user interface_) y es el modelo que usa casi todo programa que conocen, una ventana con iconos, botones y menus que te permiten navegar de manera intuitiva y sin conocimientos previos.

[imagen de gui]

Pero para la vida de todo programador es muy importante el manejo de interfaces basadas en texto (CLI), porque es la mejor manera de trabajar con la mayoria de los programas que involucra nuestra profesion.

Algunas de sus ventajas son:

  * _**Velocidad**_: una vez que te familiarizado con los comandos y el flujo de trabajo, la velocidad de accion es notoriamente superior a la de un GUI
  * _**Menos recursos**_: un CLI usa muchos menos recursos para operar que un interfaz grafica entonces nos permite un mas optimo de la pc
  * _**Pocos cambios**_: la interfaz grafica de los programas suele cambiar mucho en poco tiempo y tenes que estar acostumbrandote a los nuevos UI con cada version, en cambio un CLI no suele cambiar y si cambiar es para agragar una nueva funcionalidad generalmente
  * _**Poderosos**_: Se pueden correr scripts que realicen muchas acciones a la vez.

veamos un poco de como esta formado un comando

## Anatomia de un comando

Un comando esta formado por:

[imagen ejemplo command]

| Nombre         | Ejemplo     |
| -------------- |------------:|
| prompt         | $           |
| command name   | rm          |
| options / flag | -r          |
| argument       | carpeta     |

* Se llama prompt al caracter que se muestra en el bash para indicar que esta listo para recibir una orden nueva.

> en los sistemas UNIX se usa el signo $
> en el CMD de Windows se usa el signo >

* El command name es como suponen el nombre propio del comando que vamos a usar, es unico y es como el CLI va a saber que queremos hacer

* Los flags u options son configuraciones extra que le vamos a dar a nuestro comando, empiezan siempre con uno o dos guiones medios (-) y luego una letra o palabra que represente la opcion que queremos activar

* el argument es el parametro al que queremos hacer referencia con nuestro comando

Ejemplo 

``` bash
$ cd plataforma5 // command + argument

$ ls -a // command + option

$ rm -r exampleFolder // command + option + argument
```

## Poniendolo en practica

Ahora vamos a ver un poco como acceder a esta interfaz,

si estamos en Linux podemos abrir el prompt de busqueda y seleccionar **terminal**, dependiendo en tu distro puede variar, entre la tecla super o super + space

estando en MacOS Ctrl+Space para abrir el prompt de busqueda y seleccionamos **terminal**

> Ubuntu te permite entrar con el shortcut Ctrl + Alt + T

*echo
*ls (list)
*man(manual)
*cd (change directory)
*pwd (print working directory)
