# Git - Trabajando con Remotos

![Git](../img/gitLogo.png)

Para poder colaborar en cualquier proyecto Git, necesitas saber cómo gestionar tus repositorios remotos. __Los repositorios remotos son versiones de tu proyecto que se encuentran alojados en Internet o en algún punto de la red__. Colaborar con otros implica gestionar estos repositorios remotos, y mandar (__push__) y recibir (__pull__) datos de ellos cuando necesites compartir cosas.

Para ver la lista de repositorios remotos en nuestro proyecto podemos hacer `gir remote -v`.

> Si hemos clonado un repo, el lugar de donde lo hayamos clonado aparecerá bajo el nombre de __origin__.

## Agregar repositorios remotos

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

## Traer datos de un repo remoto

Para traer datos del repo remoto al local, hacemos lo siguiente:

```
$ git fetch [remote-name]
```

Este comando recupera todos los datos del proyecto remoto que no tengas todavía, _pero no crea un nuevo commit en tu repo local_, sólamente trae los nuevos datos,

Si queremos __traer los datos y commitearlos automáticamente en nuestro repo local_ podemos usar `git pull`, esta forma es más común, ya que tenemos un paso menos.

## Enviando datos al Remoto

Para enviar nuestros commits al remoto hacemos: `git push [nombre-remoto][nombre-rama]`, Por ejemplo:

```
$ git push origin master
```

Este comando funciona únicamente si has clonado de un servidor en el que tienes permiso de escritura, y nadie ha enviado información mientras tanto. Si tú y otra persona clonan a la vez, y la otra persona envía su información y luego envías tú la tuya, tu envío será rechazado. Tendrás que bajarte primero su trabajo e incorporarlo en el tuyo para que se te permita hacer un envío.

## Modificando y eliminando remotos

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