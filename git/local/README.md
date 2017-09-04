# Git Local

## Instalando Git

Según el SO que tengan, para instalar git sigan una de las siguientes instrucciones:

* [Windows](https://git-for-windows.github.io/)
* [Osx y Linux](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Configurando Git

Podemos hacer varias configuraciones iniciales a Git, en general la más importante es configurar nuestra identidad, para eso hacemos:

```
$ git config --global user.name "Juan Perez"
$ git config --global user.email juan@perez.com
```

> Pueden ver más configuraciones iniciales [aquí](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup).

## Operaciones Básicas

__Crear un repo nuevo__: Para inicializar un directorio como un repo de git, tenemos que posicionarnos en el directorio deseado (generalmente vamos a crear una carpeta nueva), y ahí hacer el siguiente comando:

```
git init
```

Esto crea un nuevo subdirectorio llamado .git que contiene todos los archivos necesarios para la creación del repositorio. Todavía no hay nada en tu proyecto que esté bajo seguimiento.

Cuando queremos _copiar_ un repositorio en funcionamiento, decimos que lo __clonamos__, de hecho, git _copia_ todo el contenido en nuestro disco local. Para hacerlo hacemos:

```
git clone /path/to/repository
```

### __Conociendo el estado de cada archivos__

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

Todos nuestros archivos están en estado _Unmodified_, por ejemplo cuando recién clonamos un repo:

```
$ git status
# On branch master
nothing to commit, working directory clean
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
nothing added to commit but untracked files present (use "git add" to track)
```

### __Trackeando archivos__

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
$ vim  benchmarks.rb  <-- modificamos el archivo y guardamos 
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

### __Commiteando los cambios__

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

### __Eliminando archivos__

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
