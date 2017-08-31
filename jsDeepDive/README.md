# JS Deep Dive

## OBJETOS Y TIPOS DE DATOS

  ### Tipos de Datos (repaso corto)

  #### datos primitivos y datos complejos
    
    primitivos: string, number, null, undefined, boolean, symbol
    complejos: objetos(functions, arreglos, dates, etc)

  #### mutabilidad e inmutabilidad

    primitivos inmutables (ejemplo str[3]) pasados por valor
    complejos mutables (ejemplo obj.num) pasador por referencia

  ### Estructura de los Objetos (repaso corto)

  #### object literal

    estructura rapida, ejemplo

  #### keys & values

    que representa el key, condiciones del nombre (ejemplo 'key-con-guion')
    values como cualquier tipo de dato

  #### dot & bracket notation 

    ejemplo de ambos con un key
    como paso una variable
    error obj.key-con-guion > obj[key-con-guion]

## JAVASCRIPT A FONDO

  ### Syntax Parser 

    validación de sintaxis
    comportamientos extra

  ### Lexical Environment

    declaración de expresiones o staments varia el resultado según el entorno

  ### Execution Context
    
    información de donde y como se ejecuta el código

  #### contexto global

    código corre en contexto, si no especificamos entra en el global

  #### objeto global

    se crea (window en chrome) y el this(tbd)
    ejemplo window.variable y window.funcion en la consola

  #### hoisting

    lectura de código
    reserva de variables sin asignación contra funciones explicitas

  ### Execution Stack

    muchos contextos de ejecución (funciones) crea un stack
    ejemplo fn a(){b()}

  #### scopes

  ### Asincronico y no Bloqueante

    event loop, callbacks. Videito del chabon.

  ### Precedencia de Operadores y Asociatividad

  #### precedencia
    
    peso de los operadores

  #### asociatividad

    orden ante la misma precedencia

  ### Coerción de datos

    1+'1'
    1-'1'
    console.log(3 < 2 < 1) // true

## FUNCTION AND CLOSURES

  ### Funciones y Parámetros (rápido)

  #### funciones como objetos

    que es una función
    objeto invocable

  #### ejecución y parámetros

    argumentos de una funcion (fn.arguments)
    propiedades como length y name

  #### first class function

    porque se puede pasar funciones como parámetro

  #### expression vs stament

    ejemplo

  ### Operador 'this'

  #### que es this?

  #### this y el execution context

    nuevamente ejemplo window.variable y window.funcion en la consola

  #### como metodo de un objeto

    fn a(){console.log(this)}
    obj.a = a
    obj.a()
    ejemplos un poco mas complejos

  #### Call

  #### Bind

  #### Aplly

  ### Closures

  #### Immediately invoked functions expressions

    no se guarda en el hoisting
    invocacion + nuevo contexto de ejecución 

  #### closures

    nuevo contexto que guarda información
    contexto destruido al final la función
    ejemplo arr.push

  #### factory functions

    patron para crear funciones

## PROTOTYPAL INHHERITANCE

  ### Prototype Chain

  #### que es la propiedad proto

    propiedades de los objetos y donde entran los proto

  #### todo es un objeto

    ya se sabia, ahora lo mostramos con los proto
    linea de herencia hasta Object

  #### hasOwnProperty

    solo mira el objeto y no la prototype chain

  #### extend

  #### `\__proto__` != `prototype`

    Solo para funciones y distinto de proto
    prototype es un objeto con una unica propiedad constructor

  ### Constructor Functions

  #### objetivo del constructor?

    devolver un objeto nuevo

  #### estructura de la función 

    propiedades con `this`

  #### `new` keyword

    genera un objeto con las propiedades
    `instanceof`

  ### `.prototype` Methods

  #### agregar metodos al constructor

    `Object.getPrototypeOf()`
    updateamos una función y se cambia en la instancia

  #### Object.create

    constructor que 'hereda' de otro
    (tambien puede remplazar el new)

  ### Clases

  #### ES6 clases

    estructura de otro lenguaje (basado en prototypado)

  #### estructura
    
    ej constructor y funciones

  #### class extends

    herencia clasica
    super

  ### Programacion Orientada a Objetos

  #### paradigma

    introducción a paradigma

  #### que es oop?

    encapsulacion de datos en objetos e interacciones entre ellos

  #### conceptos basico

    listado de definiciones(clases, objetos, atributos, etc...)

  #### diferencias classes prototype

    cuadrito

## FUNCTIONAL PROGRAMING

  ### Paradigma Funcional

  #### funciones puras

    Solo usar argumentos, devolver un nuevo resultado(estado)
    evitas efectos secundarios

  #### datos inmutables

    !! efectos secundarios

  #### high order functions

  ### Usos

  #### ejemplo

    ejemplo hacer nuestro propio forEach

  #### metodos propios del lenguaje

    Array.map()
    Array.filter()
    Array.reduce()