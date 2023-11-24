---
layout: "../../layouts/BlogPost.astro"
title: Comandos básicos.
pubDate: "Mar 14 2023"
description: "Linux"
---

Para poder ***crear, modificar, o navegar entre archivos*** de forma cómoda en cualquier distribucion de Linux, deberemos conocer una serie de comandos. En este post voy a explicar como utilizar cada uno de estos comandos, y mostraré algún caso de uso.

### [Algunos de los comandos que más utilizo en mi dia a dia:]()

- SUDO
- MAN
- MKDIR, LS, CD
- RM
- NANO, VIM
- CAT, MORE, LESS

### [SUDO]()

El comando sudo (___super user do___) es uno de los comandos que más utilizaremos y que debemos conocer desde un principio. Su función és hacer un llamado al archivo **sudoers**, ubicado en el /etc de nuestro sistema y que contiene los permisos de cada usuario, incluido el que utilizamos en ese instante.

El primer usuario que se crea en cualquier distribución de Linux es el usuario raíz o mejor llamado ___root___.

Os pongo varios ejemplos de uso:

```bash
sudo mkdir carpeta #creamos directorio.

sudo nano fichero.md #editamos el archivo de texto.

sudo rm -rf fichero.md #eliminanos el fichero.
```

Es decir, lo colocamos al principio de nuestra linea, para que el intérprete ejecute los comandos posteriores con permisos de administrador. Si esto no fuese así, nos devolvería un error.

### [MAN]()

___man___ (manual) es el comando al que podremos asistir cuando no sepamos como utilizar cualquier funcion del shell. Utilizarlo es tan sencillo que solo tenemos que pasarle la linea de esta manera:

~ man [comando que queremos consultar]

Por ejemplo podríamos hacer un man al propio man:

```bash
man man

```

O a sudo, que lo hemos visto anteriormente:

```bash
man sudo
```

Y en el caso de "man man" los resultados serían los siguientes:

### [CD, MKDIR, LS]()

Imaginemos que tenemos que dirigirnos al escritorio, y crear una carpeta llamada "documentos_personales".
Pues lo que haremos, es dirigirnos al escritorio con el comando **cd** (change directory), que sirve para movernos entre directorios dando uso a las rutas. De la siguiente forma:

cd [ruta que nos interesa]

Ejemplo:

```bash
cd home/Usuario/Escritorio
```
Una vez en la ruta deseada, con **mkdir** (make directories) lo que hacemos es crear directorios. Con la correspondiente sintaxis:

mkdir [nombre del directorio]

```bash
mkdir documentos_personales
```

Finalmente podremos comprobar que se ha creado correctamente listando todos los archivos y carpetas internas del directorio. Esto lo hacemos con **ls** (list). 

```bash
ls
```

Proceso completo:

Algunos de los parámetros que debemos tener presentes👇👇👇

|      ___LS___      |
|---------------|
|**-a** | Muestra archivos y directorios ocultos|
|**-l** | Formato lista larga|
|**-p** | Solo lista directorios|

