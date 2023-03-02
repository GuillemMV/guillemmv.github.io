---
layout: "../../layouts/BlogPost.astro"
title: "¿Que es un Singleton?"
description: "Uno de los patrones más utilizados"
pubDate: "Mar 1 2023"
heroImage: ""
---

Un Singleton és un patrón de diseño (o mejor dicho antipatrón).

Cuando oímos la palabra patrón pensamos en algo repetitivo y complejo, pero aunque el Singleton esté considerado un patrón, realmente es todo lo contrario. Esto se dice porque aunque nos soluciona un problema, nos puede traer algunos otros, como añadir sin necesidad más restricciones, o añadir globalidad (Y por lo tanto inseguridad) a nuestro programa.

El Singleton se utiliza en entornos en los que queremos que solamente haya una instancia global de la clase con la que estamos trabajando,

![Singleton](guillemmv.github.io/public/singleton.png "Singleton")

### ¿Para qué querríamos una sola instacia?
Por ejemplo, nos podría ser útil en el caso de utilizásemos hilos en nuestro programa. Si por algún motivo dos hilos intentan, a la vez, instanciar la clase a la cual hemos aplicado este patrón, solo uno debería poder hacerlo.
Los recursos compartidos como bases de datos, archivos o elementos de hardware a los que solo puede acceder un proceso de forma simultánea,  són una buena razón para utilizar este famoso patrón.


### ¿Como funciona?
Por defecto el constructor de una clase nos permite crear __nuevas__ instancias, así que lo tendremos que poner privado para que deje de ser accesible para el resto del programa. En su lugar tenemos *getInstance()* que será nuestro nuevo constructor público y estático.
Este método comprobará si tenemos guardada en memoria alguna instancia de la clase, y en caso negativo se creará una nueva y se devolverá.

```java
public final class Singleton {
	
    private static Singleton instance;
    private String info = "Atributos de la clase";
    
  	//Constructor privado y vacío.
    private Singleton() {        
    }
    
	//Nuevo constructor.
    public static ClassSingleton getInstance() {

	//Si no tenemos ninguna instancia existente, creamos una.
        if(instance == null) {
            instance = new ClassSingleton();
        }
        return instance;
    }

    //Getters y setters.
}
```

