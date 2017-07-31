
### video help ###


## GIT INTRO ##

Si alguna vez se encontraton teniendo que escribir un documento relativamente largo, ya sea un enayo, trabajo practico una carta, les puede haber pasado que despues de unos intentos tengan mas de un archivo con los nombre:

  * version1.txt
  * version2.txt
  * final.txt
  * estaVezSiEsLaFinal.txt

Esto puede funcionar si estamos trabajando en un proyecto chico y trabajando solo, pero pueden imaginarse que mientras mas grande el proyecto y mas gente involucrada en el mismo, este metodo puede quedar obsoleto rapidamente.

un sistema de control de version (vcs) puede ayudar a solucionar este problema.

El control de versiones es un sistema que registra los cambios realizados sobre un archivo o un conjunto de archivos a lo largo del tiempo.

Esto te permite que puedas ver cada modificacion paso a paso, saber quien la hizo y recuperar versiones anteriores

El sistema puede ser 

### Local:

pros: bueno solo

cons: complica el trabajo en grupo

Automatiza la tarea de ordenar, copiar y tagear todas las modificaciones de archivos que vayamos haciendo. Imaginense que ustedes mismos van copiando y guardando los archivos cada vez que lo mofican, y ponen un nombre indicando la fecha y la hora del cambios, este mismo proceso, pero automatizado, es un _VCS local_.
Como se puden imaginar, este sistema funciona _bien_ para trabajar solos, pero si queremos incorporar mas personas al proyecto van a empezar a surgir problemas.

### Centralizados

pros: todos saben en que se esta trabajando
      admins pueden controlar quien trabaja sobre que

cons: toda la informacion centralizada
      unico punto de fallo

Para solventar este problema, se desarrollaron los sistemas de control de versiones centralizados (_Centralized Version Control Systems_ o __CVCSs__ en inglés). Estos sistemas, como __CVS__, __Subversion__, y __Perforce__, tienen un único servidor que contiene todos los archivos versionados, y varios clientes que descargan los archivos desde ese lugar central. Durante muchos años éste ha sido el estándar para el control de versiones.

Este sistema ofrece varias ventajas, como por ejemplo: Todo el mundo puede saber en qué están trabajando los demás colaboradores, Los administradores tienen control sobre qué archivos pueden ver/modificar cada colaborador. Pero tambien presenta _problema importante_:  que hay un __punto único de fallo__, si este server se cae, nadie puede seguir trabajando ni trackeando sus cambios. O si se rompe, y no hay backups, se pierde absolutamente _todo_ el trabajo realizado.


### Distribuido

pros todo usuario tiene el directorio entero

Ahi es donde entran los sistemas de control de versiones distribuidos. En este tipo de sistemas (como __Git__, __Mercurial__, __Bazaar__ o __Darcs__), los clientes replican completamente el directorio. Así, si un servidor muere, y estos sistemas estaban colaborando a través de él, cualquiera de los directorio de los clientes puede copiarse en el servidor para restaurarlo.

Para trabajar este sistema de versiones vamos a usar el famoso (river plate) y muy usado Git

Git esta diseñado para trackear cambios en archivos digitales en los que trabaja un equipo de personas al mismo tiempo.

## Historia de Git

Todo empieza con el núcleo de Linux, un proyecto de software open source con un alcance bastante grande. Durante la mayor parte del mantenimiento (entre 1991-2002), los cambios del software se pasaban en forma de parches y archivos. Entonces en 2002, el proyecto empezó a usar un VCS (version control system) distribuido privado: __BitKeeper__.

Al principio todo fue fantastico hasta que en 2005, la relación entre la comunidad de Linux y BitKeeper se vino abajo, y la herramienta dejó de ser ofrecida gratuitamente. Esto los impulso (y en particular a Linus Torvalds, el creador de Linux) a desarrollar su propia herramienta basadose en lo que aprendieron usando BitKeeper. Se plantearon lograr

  * Velocidad
  * Diseño sencillo
  * Fuerte apoyo al desarrollo no lineal (miles de ramas paralelas)
  * Completamente distribuido
  * Capaz de manejar grandes proyectos (como el núcleo de Linux) de manera eficiente (velocidad y tamaño de los datos)

Desde su nacimiento Git maduró hasta su estado actual, fácil de usar y conservando las cualidades iniciales que se plantearon. Es muy rápido, y eficiente con grandes proyectos, y tiene un sistema de ramificación (tambien llamados branches) para desarrollo no lineal que es excepcional.

## Funcionamiento
Pasemos a ver un poco como es que funciona 

Git modela los datos más como un conjunto de instantáneas de un mini sistema de archivos. Cada vez que confirmas un cambio, o guardas el estado de tu proyecto, Git hace básicamente una foto del aspecto de todos tus archivos en ese momento, y guarda una referencia a esa instantánea. Para ser eficiente, si los archivos no fueron modificado, no guarda el archivo de nuevo, guarda sólo un enlace al archivo anterior que ya tiene almacenado.

### Estados

Los archivos dentro del directorio pueden estar en unos de los siguientes _estados_:
 
* __modified__: significa que has modificado el archivo pero todavía no esta listo o en una version que quieras guardar.
* __staged__: significa que la versión actual es marcada para ser guardada en el proximo commit.
* __committed__:significa que los datos están almacenados de manera segura en tu base de datos local.

Hay un archivo simple, generalmente contenido en tu directorio de Git, que almacena información acerca de lo que va a ir en tu próxima confirmación, al contenido de este archivo, o al archivo mismo se lo conoce como __staging area__.

Sabiendo esto, el flujo de trabajo básico en Git sería algo así:

* Modificas una serie de archivos en tu Working Directory. (pasan a estado modified)
* pasas los archivos al Stagin Area una vez que tus cambios son completos (estado staged)
* Commiteas o Confirmas los cambios, lo que toma los archivos tal y como están en el Stagin Area, y almacena esas instantáneas de manera permanente en tu directorio de Git tambien llamado repositorio.



## GIT LOCAL  ##

Antes que nada voy a empezar a trabajar como si todos tuvieran instalado git.
De no ser asi vayan al principio de la teoria de Git local o vean el video de instalacion de git.

con eso dicho vamos a ver como vamos a trabajar en la consola.

$ ls

tengo una pequeña carpeta con 4 archivos, un html, un css y dos js.
sobre esta carpeta vamos a trabajar.

primero inicializamos la carpeta como un repositorio de git

$ git init

esto creara una carpeta oculta .git con todos los archivos y confis propias de nuestro repositorio.

git status nos va a permitir ver el estado actual de nuestros archivos y el repositorio en si (branch y commits).

$ git status

Como ven todos los archivo estan en la tabla de untracked files, porque hasta ahora nunca le dijimos a github que los tenga en cuenta. para cambiar eso ahi entra git add

$ git add 

luego de agregar este archivo al stage (osea que esta listo para commitear) podemos ver el cambio haciendo git status

$ git status

nuevo git add

$ git add

cuando tengamos muchos archivos no queremos estar uno por uno agregandolos asi que vamos a hacer git add all

$ git add .

$ git status

Ahora que vemos que todos nuestros cambioes estan en el stagin area listos para commitear vamos a guardarlos en la base de datos local

$ git commit -m "testing commit"

el -m indica que le pasamos un mensaje que asigna al commit explicando cuales fueron los cambios, en este caso "testing commit"


para que vean todos los estados modifico alguno de los archivos para que vean el cambio a modified

$ git status

pero como me arrepenti de ese cambio y quiero volver al estado del commit anterior voy a descartar esa modificacion

$ git checkout 

o pensandolo mejor no quiero ni la version anterior de ese archivo, quiero removerlo asi que voy a usar el comando git rm

$ git rm 

$ git status

ahi aparece el nuevo cambio que hice, que implica borrarlo de la carpeta y del repositorio. agreguemoslo al stagin.

$ git add

y finalmente git commit para que guarde el repositorio sin ese archivo

$ git commit


## GIT REMOTE ##

Antes de ver este video hacer una cuenta en GitHub

GitHub es una plataforma de desarrollo colaborativo, es gratuita y te permite guardar repositorios de git para trabajar de manera distribuida solo o con tu equipo.

Para ver como funciona vamos a crear un nuevo repositorio personal. *crear repo nuevo*

seleccionamos el nombre para nuesro repositorio.
todos los repositorios son publicos salvo que tengas una cuenta privada.

podemos agragar una licencia para nuestro proyecto o un .gitignore que te permite agregar un listado de archivos que quieras que git ignore a la hora de guardar tus cambios, pero no es importante que se preocupen por eso por ahora

una vez creado el repositorio, al estar vacio, git te da unas recomendaciones de como arrancar, nosotros vamos a optar por la opcion 1(?): crear un repocitorio local y vincularlo al remoto

pero primero agraguemosle un README.md, este es el archivo que se muestra si abrimos el repositorio en GitHub y se usa generalmete para expicar de que se trata el proyecto y como usar (de ser sofwtware).

$ git init

para eso vamos a agregar la direccion del servidor de git como remoto de nuestro repo local.

$ git remote add origin http://github.com/facuvelasco/test.git

"origin" representa el nombre con el que nos vamos a referir cuando querramos dirigir al servidor, podria ser cualquier nombre pero el default es "origin" 

para ver si el vinculo se produjo correctamente 

$ git remote -v

ahora que sabemos que esta correctamente vinculado podemos traer los archivos que tenga nuestro servidor de git (README.md),
vamos a usar el comando git pull haciendo referencia al repositorio remoto "origin" y luego master para especificarle que queremos la rama principal del proyecto (no se preocupen por eso ahora) 

$ git pull origin master

para poder identificar quien es el usuario que esta conectandose a github tenemos que configurar nuestra cuenta.

$ git config --global user.name username
$ git config --global user.email mail@gmail.com

y ahora finalmente tenemos nuestro repositorio local igual al repositorio remoto de GitHub.

ahora que sabemos como traer contenido mandamos nosotros un poco para alla

*cambio el archivo readme y agrego otro archivo*

$ git status

podemos ver que tenemos los cambio en el estado, pasemoslos al stagin area ya que son los cambios definitivos que quiero hacer.

$ git add .

y ahora commitiemos a nuestro repo local

$ git commit -m "add app.js && update README.md"

ahora nuestro repositorio local esta actualizado, pero no el remoto.

$ git status

si vemos bien, nuestro status dice que el repositorio local esta 1 commit adelantado del remoto, asique mandemosle nuestros cambio para balancear la situacion. para eso vamos a usar el comando git push

$ git push origin master / $ git push

ahora si paso a ver GitHub desde el browser, deberia haber actualizado los cambios.


pero no siempre empezamos nosotros un repositorio desde cero, nos vamos a encontrar con que queremos arrancar con un repositorio ya existente, para eso podemos unsar "git clone", con este comando vamos a poder generar automaticamente un repositorio local completamente igual al remoto y ya vinculados entre si. 

$ git clone

con esos comandos basicos ya podemos guardar las diferentes versiones de nuestro proyecto en un servidor remoto y no temer a que se nos pierdan los archivos. 

(Y)



## ADVANCED GIT ##

git branch

git checkout "branch"

git merge


## FINALY ##

Tenes que sentirte comodo con:

* crear un repositorio local y vincularlo a uno remoto
* poder guardar tus cambios bajo el sistema de commits de git
* poder enviar esos cambios a tu remoto
* poder traer versiones actualizadas del repositorio remoto


## MAS INFORMACION/PARA AGREGAR ##

Usfull links

* [GitHub CheatSheet](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)
* [git rebase](https://help.github.com/articles/about-git-rebase/)

Agregar 

* .gitignore
* merge conflict