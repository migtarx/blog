+++
title = 'Finalmente un blog'
date = 2023-10-30
author = "migtarx"
slug = "onboarderland"
translationKey = "i18n-onboarderland"
description = "¡Finalmente una forma de compartir mis experiencias y documentar todos mis procesos! ¡Esto parece prometedor!"
draft = false
cover = "posts/img/image1.jpg"
+++
Pues, tras muchos intentos y adentrarme en el mundo de los blogs, de reojo me encontré con la página web ([apalrd.net](https://www.apalrd.net/)) de un youtuber norteamericano que sigo desde hace tiempo, [apalrd](https://www.youtube.com/@apalrdsadventures) (un experto en la administración de sistemas y Proxmox).

Resulta que investigando en su página, descubrí que estaba hecha con algo llamado **[HUGO](https://gohugo.io/)**.
- "Pero Miguel, ¿qué es exactamente **HUGO**?"

Pues **HUGO** es un generador de sitios web estáticos de código abierto que facilita la creación de páginas web rápidas y flexibles, con una estructura simplificada basada en archivos de texto plano y plantillas personalizables. De esta forma, con un simple archivo markdown es pan comido redactar nuevos posts.

No es como WordPress, donde no necesitas saber nada para crear un blog y publicar posts... pero lo que me gusta de HUGO es su flexibilidad para adaptarse a los cambios que desee hacer (estilos, estructura de las páginas...) ¡y sobre todo, los fragmentos de código se ven espectaculares!

```java
  public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
  }
```
Hace que no usara Java por lo menos año y medio jaja (en realidad le pedí a ChatGPT que me hiciera un código de ejemplo), pero más que nada porque creo que es el lenguaje que más me permite resaltar las cajas de código.

El caso es que con **HUGO** en un día he aprendido más o menos a usarlo (configurar un tema, crear posts y traducciones). Y en lo que me sobró del día, preparé un mini servidor web Express (MVP) para servir los estáticos tras la construcción de **HUGO** y configurar el repositorio y los flujos de trabajo de GitHub para desplegar en mi servidor.

> En otros posts hablaré de mis flujos de trabajo (son una chorrada) y sobre cómo tengo montado mi servidor con Proxmox.

La única pega que le encuentro a HUGO es que para interactuar con tus lectores te toca ingeniar algo. En mi caso, a pesar de que HUGO genere archivos estáticos, se pueden seguir incluyendo llamadas fetch o XHR al backend que sirve los estáticos (en mi caso, Express), así que algo me ingeniaré para organizar votaciones de nuevos posts y una especie de newsletter.

La verdad es que no sé qué más contarles. Creo que como primera entrada no está mal. Tengo muchas ganas de compartir mis conocimientos y experiencias con ustedes. Aún estoy pensando en cuál será mi próximo post...

Quién sabe, quizás sobre mi transición de ser un HATER DE APPLE a que todos mis dispositivos de mi día a día sean de ellos. ¿O sobre flujos de trabajo en GitHub?
