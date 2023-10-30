+++
title = 'Finalmente un blog'
date = 2023-10-30
author = "migtarx"
slug = "onboarderland"
translationKey = "i18n-onboarderland"
description = "¡Finalmente una forma de compartir mis experiencias y también documentar todos mis procesos! ¡Esto parece prometedor!"
draft = false
cover = "posts/img/image1.jpg"
+++
Pues tras muchos amagos, y metiendo el hocico en el mundo de los blogs, de refilon me encontre la pagina web ([apalrd.net](https://www.apalrd.net/)) de un youtuber norte americano que sigo hace tiempo [apalrd](https://www.youtube.com/@apalrdsadventures) (un geek de administrar sistemas y proxmox).

El caso es que urgando en su pagina encontre que estaba hecha con algo que se llamaba **[HUGO](https://gohugo.io/)**. 
> "Pero Miguel, que leches es **HUGO**?!"

Pues **HUGO** es un generador de sitios web estáticos de código abierto que facilita la creación de páginas web rápidas y flexibles, con una estructura simplificada basada en archivos de texto plano y plantillas personalizables. Por lo que con un simple archivo markdown es una tonteria escribir posts nuevos.

No es como un wordpress, que no tienes que saber de nada para levantar un blog y crear posts...pero lo que me mola de HUGO es lo flexible que es ante lo que yo quiera cambiar (estilos, estructura de las paginas...) y sobre todo, los trozos de codigo se ven espectaculares!

```java
  public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
  }
```
Hace que no usaba java por lo menos año y medio jaja (en realidad le he pedido a chatGPT que me haga un codigo de ejemplo), pero mas que nada porque creo que es el lenguaje que mas me permite lucir las cajas de codigo.

El caso es que con **HUGO** en un dia he aprendido a mas o menos usarlo (configurar un tema, crear posts y traducciones). Y en lo que me sobro de dia preparar un mini servidor web express (MVP) para servir los estaticos tras la build de **HUGO** y configurar el repo y los workflows de github para desplegar en mi servidor. 

Btw[^1], en otros posts hablaremos de mis workflows (son una chorrada) y sobre como tengo montado mi servidor con proxomox.


[^1]: **BTW** es una abreviacion de **By The Way** (utilizaremos mucho este tipo de abreviaciones. Las citare siempre que me acuerde)