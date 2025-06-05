<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.py-4


        .row.mb-5.align-items-stretch
          .col-lg-4.mb-4.mb-lg-0
            .bg-color-1.p-4.brounded.h-100
              p Vivimos en una era digital donde la programación se ha convertido en una herramienta fundamental para el desarrollo de tecnología e innovación. Desde aplicaciones móviles hasta sistemas automatizados y análisis de datos, la capacidad de escribir código permite resolver problemas de manera eficiente y estructurada. Sin embargo, para entender cómo funciona la programación, es necesario conocer sus orígenes, los fundamentos que la rigen y las herramientas que facilitan su desarrollo.


          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/intro/1.png", data-aos="zoom-in", style="max-width: 400px").mx-auto
            
          .col-lg-4
            .bg-color-2.p-4.brounded.h-100
              p En esta unidad, se explicará la historia de los lenguajes de programación, analizando su evolución desde los primeros lenguajes ensambladores hasta las tecnologías modernas. Luego, abordaremos los fundamentos de los algoritmos, que son la base lógica de cualquier programa y nos permiten diseñar soluciones eficientes. Finalmente, conoceremos los entornos de desarrollo, herramientas clave que facilitan la escritura, prueba y ejecución de código.

        p Al finalizar esta unidad, los estudiantes serán capaces de:

        .row.justify-content-center.align-items-stretch
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/intro/2.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Comprender la evolución y relevancia de los lenguajes de programación.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/intro/3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Explicar los fundamentos de los algoritmos y su importancia en la resolución de problemas computacionales.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/intro/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Identificar y utilizar entornos de desarrollo adecuados para la programación.
        






</template>
