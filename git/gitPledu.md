# Git

##Intro

### Version Control System

El control de versiones es un sistema que registra los cambios realizados sobre un archivo o conjunto de archivos a lo largo del tiempo, de modo que puedas recuperar versiones específicas más adelante. 

Si eres diseñador gráfico o web, y quieres mantener cada versión de una imagen o diseño (algo que sin duda quieres), un sistema de control de versiones (Version Control System o VCS en inglés) es una elección muy sabia. Te permite revertir archivos a un estado anterior, revertir el proyecto entero a un estado anterior, comparar cambios a lo largo del tiempo, ver quién modificó por última vez algo que puede estar causando un problema, quién introdujo un error y cuándo, y mucho más. Usar un VCS también significa generalmente que si rompes o pierdes archivos, puedes recuperarlos fácilmente.

Hay varios tipos de sistemas de versionado, estos puedes ser:

#### Locales

![Local](../img/local.png)

Un sistema de versionado local, automatiza  la tarea de ordenar, copiar y nombrar todas las modificaciones de archivos que vayamos haciendo. Imagínense que están trabajando con código, y ustedes mismos van copiando y guardando los archivos en otra carpeta cada vez que lo modifican, y ponen un nombre indicando la fecha y la hora del cambios, este mismo proceso, pero automatizado, es un _VCS local_.
Como se pueden imaginar, este sistema funciona _bien_ para trabajar solos, pero si queremos incorporar otra gente al equipo van a empezar a surgir problemas.

#### Centralizados

![Centralizado](../img/centralizado.png)

Para solventar este problema, se desarrollaron los sistemas de control de versiones centralizados (_Centralized Version Control Systems_ o __CVCSs__ en inglés). Estos sistemas, como __CVS__, __Subversion__, y __Perforce__, tienen un único servidor que contiene todos los archivos versionados, y varios clientes que descargan los archivos desde ese lugar central. Durante muchos años éste ha sido el estándar para el control de versiones.

Este sistema ofrece varias ventajas, como por ejemplo: Todo el mundo puede saber en qué están trabajando los demás colaboradores, Los administradores tienen control sobre qué archivos pueden ver/modificar cada colaborador. Pero también presenta _problema importante_:  que hay un __punto único de fallo__, si este servidor se cae, nadie puede seguir trabajando ni trackeando sus cambios. O si se rompe, y no hay backups, se pierde absolutamente _todo_ el trabajo realizado.

#### Distribuido

![Distribuido](../img/distribuido.png)

Es aquí donde entran los sistemas de control de versiones distribuidos (_Distributed Version Control Systems_ o __DVCSs__ en inglés). En un DVCS (como __Git__, __Mercurial__, __Bazaar__ o __Darcs__), los clientes no sólo descargan la última instantánea de los archivos: replican completamente el repositorio. Así, si un servidor muere, y estos sistemas estaban colaborando a través de él, cualquiera de los repositorios de los clientes puede copiarse en el servidor para restaurarlo.

### Historia

#### ¿Que es Git?

![Git](../img/gitLogo.png)

Git es un _sistema de control de versión_ diseñado para trackear cambios en archivos digitales y coordinar el trabajo realizado sobre esos archivos en un equipo de personas. Su mayor uso es para el desarrollo de software, aunque también es utilizado para trackear archivos de otros tipos.

#### ¿Como nacio Git?

Como muchas de las grandes cosas en esta vida, __Git__ comenzó con un poco de destrucción creativa y encendida polémica. El núcleo de Linux es un proyecto de software de código abierto con un alcance bastante grande. Durante la mayor parte del mantenimiento del núcleo de Linux (1991-2002), los cambios en el software se pasaron en forma de parches y archivos. En 2002, el proyecto del núcleo de Linux empezó a usar un DVCS propietario llamado __BitKeeper__.

En 2005, la relación entre la comunidad que desarrollaba el núcleo de Linux y la compañía que desarrollaba BitKeeper se vino abajo, y la herramienta dejó de ser ofrecida gratuitamente. Esto impulsó a la comunidad de desarrollo de Linux (y en particular a Linus Torvalds, el creador de Linux) a desarrollar su propia herramienta basada en algunas de las lecciones que aprendieron durante el uso de BitKeeper. Algunos de los objetivos del nuevo sistema fueron los siguientes:

* Velocidad
* Diseño sencillo
* Fuerte apoyo al desarrollo no lineal (miles de ramas paralelas)
* Completamente distribuido
* Capaz de manejar grandes proyectos (como el núcleo de Linux) de manera eficiente (velocidad y tamaño de los datos)

Desde su nacimiento en 2005, Git ha evolucionado y madurado para ser fácil de usar y aún conservar estas cualidades iniciales. Es tremendamente rápido, muy eficiente con grandes proyectos, y tiene un increíble sistema de ramificación (branching) para desarrollo no lineal.

### Conceptos

Git modela sus datos más como un conjunto de instantáneas de un mini sistema de archivos. Cada vez que confirmas un cambio, o guardas el estado de tu proyecto en Git, él básicamente hace una foto del aspecto de todos tus archivos en ese momento, y guarda una referencia a esa instantánea. Para ser eficiente, si los archivos no se han modificado, Git no almacena el archivo de nuevo, sólo un enlace al archivo anterior idéntico que ya tiene almacenado.

![snapshots](../img/snapshots.png)

La mayoría de las operaciones en Git sólo necesitan archivos y recursos locales para operar. Por lo general no se necesita información de ningún otro ordenador de tu red. Como tienes toda la historia del proyecto ahí mismo, en tu disco local, la mayoría de las operaciones parecen prácticamente inmediatas (con otros sistemas el proceso involucra llamados por red, que generan retardos importantes).

### Integridad

Todo en Git es verificado mediante una suma de comprobación (__checksum__ en inglés) antes de ser almacenado, y es identificado a partir de ese momento mediante dicha suma. __Esto significa que es imposible cambiar los contenidos de cualquier archivo o directorio sin que Git lo sepa.__

El mecanismo que usa Git para generar esta suma de comprobación se conoce como hash SHA-1. Se trata de una cadena de 40 caracteres hexadecimales (0-9 y a-f), y se calcula en base a los contenidos del archivo o estructura de directorios. Un hash SHA-1 tiene esta pinta:

```
24b9da6552252987aa493b52f8696cd6d3b00373
```

Verás estos valores hash por todos lados en Git, ya que los usa con mucha frecuencia. De hecho, Git guarda todo no por nombre de archivo, sino por el valor hash de sus contenidos.

Vamos a distinguir dos directorios, primero el _directorio de git_ , que es donde almacena los metadatos y la base de datos de tu proyecto, y segundo el _directorio de trabajo_ que es una copia de una versión del proyecto en particular. Estos archivos se sacan de la base de datos comprimida en el directorio de Git, y se colocan en disco para que los puedas usar o modificar. Los archivos dentro del _directorio de trabajo_ pueden estar en unos de los siguientes _estados_:

### Estados

Git tiene tres estados principales en los que se pueden encontrar tus archivos: 
* __committed__:significa que los datos están almacenados de manera segura en tu base de datos local.
* __modified__: significa que has modificado el archivo pero todavía no lo has commiteado a tu base de datos. 
* __staged__: significa que has marcado un archivo modificado en su versión actual para que vaya en tu próxima commiteada.

![Estados](../img/estados.png)

Hay un archivo simple, generalmente contenido en tu directorio de Git, llamado que almacena información acerca de lo que va a ir en tu próxima confirmación, al contenido de este archivo, o al archivo mismo se lo conoce como __staging area__.

Sabiendo esto, el flujo de trabajo básico en Git sería algo así:

* Modificas una serie de archivos en tu _directorio de trabajo_.
* _Stageas_ los archivos, añadiéndolos a tu __staging area__ o área de preparación.
* Commiteas o Confirmas los cambios, lo que toma los archivos tal y como están en el área de preparación, y almacena esas instantáneas de manera permanente en tu directorio de Git.

> Si una versión concreta de un archivo está en el directorio de Git, se considera confirmada (__committed__). Si ha sufrido cambios desde que se obtuvo del repositorio, y ha sido añadida al área de preparación, está preparada (__staged__). Y si ha sufrido cambios desde que se obtuvo del repositorio, pero no se ha preparado (no se incluyó en el área de preparación), está modificada (__modified__).

## Local

### Setup

#### Instalación

Según el SO (Sistema Operativo) que tengan, para instalar git sigan una de las siguientes instrucciones:

* [Windows](https://git-for-windows.github.io/)
* [Osx y Linux](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

#### Configuración

Podemos hacer varias configuraciones iniciales a Git, en general la más importante es configurar nuestra identidad, para eso hacemos:

```
$ git config --global user.name "Juan Perez"
$ git config --global user.email juan@perez.com
```

> Pueden ver más configuraciones iniciales [aquí](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup).

### Operaciones Básicas

#### __Crear un repo nuevo__

Para inicializar un directorio como un repositorio de git, tenemos que posicionarnos en el directorio deseado (generalmente vamos a crear una carpeta nueva), y ahí hacer el siguiente comando:

```
git init
```

Esto crea un nuevo subdirectorio llamado .git que contiene todos los archivos necesarios para la creación del repositorio. Todavía no hay nada en tu proyecto que esté bajo seguimiento.

Cuando queremos _copiar_ un repositorio en funcionamiento, decimos que lo __clonamos__, de hecho, git _copia_ todo el contenido en nuestro disco local. Para hacerlo hacemos:

```
git clone /path/to/repository
```

#### __Conociendo el estado de cada archivos__

Para conocer el _estado actual_ de todos los archivos vamos a usar el comando:

```
git status
```

Un archivo puede pasar por alguno de estos estados del ciclo de vida:

![lifecycle](../img/lifecycle.png)

* __Untracked__: Son archivos nuevos, que no están en ningún snapshot anterior (o sea que nunca fueron comiteados), ni están en el área de preparación (no fueron stageados).
* __Unmodified__: Son archivos que estaban en el snapshot anterior, pero que no sufieron cambios todavía.
* __Modified__: Si modificamos un archivo que estaba en _unmodified_ git lo detectará y lo marcará como _modificado_.
* __Staged__: Si marcamos al archivo modificado como staged, este pasa al área de preparación.

> Cualquier archivo que este en un estado _unmodified_, _modified_ o _stages_, decimos que es un archivo que está __trackeado__.

Ejemplos:

Todos nuestros archivos están en estado _Unmodified_, por ejemplo cuando recién clonamos un repositorio:

```
$ git status
# On branch master
# nothing to commit, working directory clean
```

Creamos un archivo nuevo llamado `Readme`. El estado que tiene es `untracked`:

```
$ vim README     <- creamos un archivo y lo guardamos
$ git status
# On branch master
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
#   README
# nothing added to commit but untracked files present (use "git add" to track)
```

### Add

#### __Trackeando archivos__

Para empezar el seguimiento de un nuevo archivo se usa el comando `git add`. El comando git add recibe la ruta de un archivo o de un directorio; si es un directorio, añade todos los archivos que contenga de manera recursiva.

Por ejemplo, Iniciaremos el seguimiento del archivo README ejecutando esto:

```
$ git add README

$ git status
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#   new file:   README
#
```

Ahora el archivo aparece como `changes to be committed`.

### __Stageando archivos modificados__

Cuando tenemos un archivo _trackeado_ y lo modificamos, este pasa al estado _modificado_. Por ejemplo, si modificamos el archivo ` benchmarks.rb`:

```
$ vim benchmarks.rb  <-- modificamos el archivo y guardamos 
$ git status
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#   new file:   README
#
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#
#   modified:   benchmarks.rb
```

Vemos que aparece en `changes not staged for commit`. Para pasar este archivo al área de preparación o siplemente a `staging` usamos también `git add`:

```
$ git add benchmarks.rb
$ git status
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#   new file:   README
#   modified:   benchmarks.rb
#
```

Ambos archivos están ahora preparados y se incluirán en tu próxima confirmación. Supón que en este momento recuerdas que tenías que hacer una pequeña modificación en benchmarks.rb antes de confirmarlo. Lo vuelves abrir, haces ese pequeño cambio, y ya estás listo para confirmar. Sin embargo, si vuelves a ejecutar git status verás lo siguiente:

```
$ vim benchmarks.rb
$ git status
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#   new file:   README
#   modified:   benchmarks.rb
#
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#
#   modified:   benchmarks.rb
#
```

¿Pero qué...? Ahora benchmarks.rb aparece listado como preparado y como no preparado. ¿Cómo es posible? Resulta que Git prepara un archivo tal y como era en el momento de ejecutar el comando git add. Si haces git commit ahora, la versión de benchmarks.rb que se incluirá en la confirmación será la que fuese cuando ejecutaste el comando git add, no la versión que estás viendo ahora en tu directorio de trabajo. Si modificas un archivo después de haber ejecutado git add, tendrás que volver a ejecutar git add para preparar la última versión del archivo:

```
$ git add benchmarks.rb
$ git status
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#   new file:   README
#   modified:   benchmarks.rb
#
```

### Commit

#### __Commiteando los cambios__

Ahora que tenemos los archivos que queremos en `staging`, para pasarlos al estado _committed_, vamos a usar el comando:

```
git commit -m '{mensaje del commit}'
```

Cada `commit` nos obliga a ingresar un mensaje, este debería ser descriptivo sobre qué cambios se introdujeron en ese commit, de tal manera que en el caso que quieras volver atrás puedas hacerlo rápidamente.

```
$ git commit -m "Story 182: Fix benchmarks for speed"
[master]: created 463dc4f: "Fix benchmarks for speed"
 2 files changed, 3 insertions(+), 0 deletions(-)
 create mode 100644 README
```

Podemos ver que el comando `commit` nos devuelve cierta información: a qué rama has confirmado (master), cuál es su suma de comprobación SHA-1 de la confirmación (463dc4f), cuántos archivos se modificaron, y estadísticas acerca de cuántas líneas se han añadido y cuántas se han eliminado.

### Remove

#### __Eliminando archivos__

En el caso que querramos dejar de trackear un archivos, vamos a utilizar el comando:

```
git rm
```

Por ejemplo:

```
$ rm grit.gemspec
$ git status
# On branch master
#
# Changes not staged for commit:
#   (use "git add/rm <file>..." to update what will be committed)
#
#       deleted:    grit.gemspec
#
```

## Remoto

### ¿A que nos referimos con remoto?

![Git](../img/gitLogo.png)

Para poder colaborar en cualquier proyecto Git, necesitas saber cómo gestionar tus repositorios remotos. __Los repositorios remotos son versiones de tu proyecto que se encuentran alojados en Internet o en algún punto de la red__. Colaborar con otros implica gestionar estos repositorios remotos, y mandar (__push__) y recibir (__pull__) datos de ellos cuando necesites compartir cosas.

Para ver la lista de repositorios remotos en nuestro proyecto podemos hacer `git remote -v`.

> Si hemos clonado un repo, el lugar de donde lo hayamos clonado aparecerá bajo el nombre de __origin__.

### Agregar repositorios remotos

Para agregar un nuevo repositorio Git remoto y asignarle un nombre con el que referenciarlo fácilmente, hacemos:
  
```
$ git remote add [nombre] [url]
```

Por ejemplo:

```
$ git remote
origin
$ git remote add pb git://github.com/paulboone/ticgit.git
$ git remote -v
origin  git://github.com/schacon/ticgit.git
pb  git://github.com/paulboone/ticgit.git
```

### Traer datos de un remoto

Para traer datos del repositorio remoto al local, hacemos lo siguiente:

```
$ git fetch [remote-name]
```

Este comando recupera todos los datos del proyecto remoto que no tengas todavía, _pero no crea un nuevo commit en tu repo local_, sólamente trae los nuevos datos,

Si queremos __traer los datos y commitearlos automáticamente en nuestro repo local_ podemos usar `git pull`, esta forma es más común, ya que tenemos un paso menos.

### Enviando datos al Remoto

Para enviar nuestros commits al remoto hacemos: `git push [nombre-remoto][nombre-rama]`, Por ejemplo:

```
$ git push origin master
```

Este comando funciona únicamente si has clonado de un servidor en el que tienes permiso de escritura, y nadie ha enviado información mientras tanto. Si tú y otra persona clonan a la vez, y la otra persona envía su información y luego envías tú la tuya, tu envío será rechazado. Tendrás que bajarte primero su trabajo e incorporarlo en el tuyo para que se te permita hacer un envío.

### Modificando y eliminando remotos

Si quieres renombrar una referencia a un repositorio remoto, en versiones recientes de Git puedes ejecutar git remote rename. Por ejemplo, si quieres renombrar pb a paul, puedes hacerlo de la siguiente manera:

```
$ git remote rename pb paul
$ git remote
origin
paul
```

Si por algún motivo quieres eliminar una referencia —has movido el servidor o ya no estás usando un determinado mirror, o quizás un contribuidor ha dejado de contribuir— puedes usar el comando git remote rm:

```
$ git remote rm paul
$ git remote
origin
```