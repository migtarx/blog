+++
title = 'Finalmente un blog'
date = 2023-11-01
author = "migtarx"
slug = "onboarderland"
translationKey = "i18n-onboarderland"
description = "¡Finalmente una forma de compartir mis experiencias y también documentar todos mis procesos! ¡Esto parece prometedor!"
draft = false
cover = "img/image1.jpg"
useRelativeCover = true
+++
Pues tras muchos intentos, y adentrándome en el mundo de los blogs, de refilón me encontré la página web ([apalrd.net](https://www.apalrd.net/)) de un youtuber norteamericano que sigo desde hace tiempo [apalrd](https://www.youtube.com/@apalrdsadventures) (un aficionado a administrar sistemas y Proxmox).

El caso es que, husmeando en su página, descubrí que estaba hecha con algo que se llamaba **[HUGO](https://gohugo.io/)**.
- "Pero Miguel, qué demonios es **HUGO**?!"

Pues **HUGO** es un generador de sitios web estáticos de código abierto que facilita la creación de páginas web rápidas y flexibles, con una estructura simplificada basada en archivos de texto plano y plantillas personalizables. Por lo que con un simple archivo markdown es pan comido redactar posts nuevos.

No es como un WordPress, donde no es necesario saber nada para levantar un blog y crear posts... pero lo que me encanta de HUGO es lo flexible que es ante los cambios que deseo hacer (estilos, estructura de las páginas...) y sobre todo, los fragmentos de código se ven espectaculares!

```java
  public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
  }
```
Hace que no usaba Java por lo menos año y medio jaja (en realidad le he pedido a ChatGPT que me haga un código de ejemplo), pero más que nada porque creo que es el lenguaje que más me permite lucir las cajas de código.

El caso es que con **HUGO** en un día he aprendido a más o menos usarlo (configurar un tema, crear posts y traducciones). Y en lo que me sobró del día preparé un mini servidor web Express (MVP[^1]) para servir los estáticos tras la build de **HUGO** y configurar el repo y los workflows de GitHub para desplegar en mi servidor.

> En otros posts hablaremos de mis workflows (son una chorrada) y sobre cómo tengo montado mi servidor con Proxmox.

La única pega que le encuentro a HUGO es que para interactuar con tus lectores te toca ingeniar algo. En mi caso, a pesar de que HUGO genere archivos estáticos, se pueden seguir incluyendo llamadas fetch o XHR al backend que sirve los estáticos (en mi caso Express), así que algo me ingeniaré para organizar votaciones de nuevos posts y una especie de newsletter.

La verdad es que no sé qué más contaros. Creo que como primera entrada no está mal. Tengo un montón de ganas de compartir mis conocimientos y experiencias con vosotros. Aun estoy pensando de qué será mi próximo post...

Quién sabe, igual sobre mi transición de ser un HATER DE APPLE a que todos mis dispositivos de mi día a día sean de ellos. O sobre workflows en GitHub?

[^1]: MVP: Minimum Viable Product en español Producto mínimo viable.