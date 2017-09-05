
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
