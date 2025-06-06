<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1.  Introducción a la programación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") En un mundo donde la tecnología avanza a un ritmo acelerado, la programación se ha convertido en una habilidad fundamental. Sin importar el área en la que se desempeñe, comprender cómo funcionan los programas y las aplicaciones que usas a diario le permitirá no solo interactuar con la tecnología de manera más eficiente, sino también desarrollar soluciones innovadoras a diferentes problemas.

    h2 ¿Qué es la programación?


    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.py-4

        .row.mb-5
          .col-lg-8
            .bg-color-4.p-4.mb-4(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 La programación es el proceso mediante el cual se crean instrucciones para que una computadora realice tareas específicas. Estas instrucciones se escriben en lenguajes de programación, que han evolucionado desde el código binario hasta los lenguajes de alto nivel como Python y JavaScript. Cada uno de ellos ha contribuido significativamente a la revolución digital que vivimos hoy.
        
            p(data-aos="fade-left") Cuando programas, te conviertes en el arquitecto de un mundo digital: puedes crear desde simples aplicaciones hasta complejos sistemas que automatizan procesos, gestionan datos y facilitan la comunicación global. Sin embargo, antes de escribir una sola línea de código, es fundamental comprender los principios básicos que rigen la programación.
        
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")


        h2 Principios fundamentales

        p Para desarrollar programas eficientes, necesitas entender los algoritmos, que son secuencias de pasos lógicos diseñados para resolver problemas. Los algoritmos permiten estructurar instrucciones de forma clara y eficiente, y constituyen la base de cualquier programa. Además, el uso de entornos de desarrollo (como IDEs) facilita la escritura, prueba y depuración del código, optimizando el proceso de creación de software.


        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/4.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Lenguaje de programación
              p.mb-0.text-center Sistema de notación para escribir instrucciones que una computadora puede interpretar. Ej.: Python, JavaScript.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/5.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Algoritmo
              p.mb-0.text-center Conjunto ordenado de pasos que permiten resolver un problema.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/6.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Entorno de desarrollo
              p.mb-0.text-center Herramienta que asiste en la codificación, depuración y prueba de programas. Ej.: Visual Studio Code, PyCharm.
        
    

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Historia de los lenguajes de programación


    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/7.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La programación de computadoras es una disciplina que ha evolucionado significativamente desde sus inicios. A lo largo del tiempo, los lenguajes de programación han surgido para facilitar la comunicación entre los seres humanos y las máquinas, permitiendo la creación de software cada vez más complejo y eficiente. Para comprender mejor la programación moderna, es fundamental conocer la historia y la evolución de los lenguajes que han marcado hitos en la computación. (Joyanes Aguilar, 2006)


    .row.mb-5
      .col-lg-8
        h2 Los primeros lenguajes de programación
    
        p(data-aos="fade-left").mb-4 Antes de la existencia de los lenguajes de programación modernos, las computadoras eran operadas a través de tarjetas perforadas y código de máquina. Este tipo de programación era extremadamente tediosa y propensa a errores, ya que implicaba la manipulación directa de valores binarios (0 y 1). Sin embargo, con el tiempo, se desarrollaron lenguajes de programación más accesibles para los seres humanos.
    
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Uno de los primeros lenguajes de programación fue el Lenguaje de Ensamblador, que permitía a los programadores escribir instrucciones en un formato más entendible que el código de máquina. Aunque seguía siendo de bajo nivel, el ensamblador facilitó el desarrollo de programas al reemplazar los códigos binarios con abreviaciones y nombres mnemotécnicos. (Menchaca García, 2010)
    
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")
    

    h2 Lenguajes de alto nivel: un gran avance

    p Durante la década de 1950, se crearon los primeros lenguajes de programación de alto nivel, diseñados para hacer la programación más sencilla y eficiente. Entre los primeros lenguajes de este tipo se encuentran:


    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/info1.png', alt='', style="max-width: 821px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="32%" y="64%" numero="1")
                h5 FORTRAN (1957)

                p.mb-0 Diseñado para el cálculo numérico y la computación científica. Fue uno de los primeros lenguajes en incorporar el concepto de compilación.
    
              .bg-color-white.box-shadow.p-3(x="54%" y="64%" numero="2")
                h5 LISP (1958)

                p.mb-0 Creado para la inteligencia artificial y el procesamiento de listas. Sentó las bases de la programación funcional.
    
              .bg-color-white.box-shadow.p-3(x="80%" y="64%" numero="3")
                h5 COBOL (1959)

                p.mb-0 Orientado a aplicaciones comerciales y administrativas. Se convirtió en un lenguaje fundamental para el procesamiento de datos empresariales.
    


    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Estos lenguajes marcaron el inicio de la programación moderna al permitir que los programadores se concentran en la lógica del programa sin preocuparse demasiado por los detalles del hardware.


    .bg-full-width-2.bg-fondo-3
      .px-4.px-md-5.py-4

    
    


        #t_1_2.titulo-segundo(data-aos="flip-up")
          h2 #[span 1.2] La expansión de los lenguajes de programación

        p Durante las décadas de 1960 y 1970, surgieron nuevos lenguajes que revolucionaron la forma en que se desarrollaba software:

        
        figure.bg-color-info.p-4.p-md-5.mb-5
          img(src="@/assets/curso/tema1/11.svg", data-aos="zoom-in", style="max-width: 890px").mx-auto


        h2 La revolución de la programación orientada a objetos

        p En la década de 1980, la programación orientada a objetos (POO) comenzó a ganar popularidad con lenguajes como:


        .row.justify-content-center.align-items-stretch
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/12.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Smalltalk (1980)
                p.mb-0 Introdujo el concepto de objetos, mensajes y herencia, fundamentales en la POO.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/13.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center C++ (1985)
                p.mb-0 Basado en C, incorporó la POO y se convirtió en uno de los lenguajes más utilizados en el desarrollo de software.


    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/14.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La programación orientada a objetos permite una mayor modularidad, reutilización de código y facilidad en el mantenimiento del software. (Flórez Fernández, 2012)
    
    h2 La era de internet y los lenguajes modernos

    p Con la llegada de internet en los años 90, la programación se adaptó a nuevas necesidades. Surgieron lenguajes diseñados para la web y la interactividad:


    .bg-full-width.bg-fondo-4
      .px-4.px-md-5.py-4
   


        TabsC.color-acento-contenido.mb-5
          .tabs-content.border.px-4.p-md-5.py-3(titulo="Java (1995)" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
            .row
              .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
                h4 Java (1995) 
                p Creado con la filosofía "escribe una vez, ejecuta en cualquier lugar", se convirtió en un estándar en el desarrollo de aplicaciones empresariales y móviles.
              .col-md-6.col-lg-5.col-xl-4.order-1
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/tab-1.png', alt='')
        
          .tabs-content.border.px-4.p-md-5.py-3(titulo="JavaScript (1995)" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
            .row
              .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
                h4 JavaScript (1995)
                p Diseñado para la web, permitió la creación de páginas interactivas y dinámicas.
              .col-md-6.col-lg-5.col-xl-4.order-1
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/tab-2.png', alt='')
        
          .tabs-content.border.px-4.p-md-5.py-3(titulo="PHP (1995)" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
            .row
              .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
                h4 PHP (1995)
                p Popular en el desarrollo web, facilitó la creación de sitios con contenido dinámico.
              .col-md-6.col-lg-5.col-xl-4.order-1
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/tab-3.png', alt='')
        
        

        h2 Lenguajes actuales y tendencias

        
        p En la actualidad, los lenguajes de programación continúan evolucionando con un enfoque en la facilidad de uso, la eficiencia y la seguridad. Algunos de los lenguajes más utilizados hoy en día incluyen:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/15.svg"
                alt=""
                style="height: 103px"
              )
              h5.mb-0.text-center Python
              p.mb-0.text-center Versátil y fácil de aprender, ampliamente utilizado en inteligencia artificial, ciencia de datos y desarrollo web.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/16.svg"
                alt=""
                style="height: 103px"
              )
              h5.mb-0.text-center Swift
              p.mb-0.text-center Diseñado por Apple para el desarrollo de aplicaciones iOS y macOS.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/17.svg"
                alt=""
                style="height: 103px"
              )
              h5.mb-0.text-center Kotlin
              p.mb-0.text-center Lenguaje oficial para Android, con una sintaxis más concisa que Java.
        

              
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/18.svg"
                alt=""
                style="height: 103px"
              )
              h5.mb-0.text-center Go
              p.mb-0.text-center Creado por Google, destaca por su rendimiento y facilidad de concurrencia.
        






    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/62476" target="_blank" rel="noopener noreferrer") Moreno Pérez, J. C. (2015). Programación: ( ed.). RA-MA Editorial. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=xY4xvUq-Iy0" target="_blank" rel="noopener noreferrer") DevFoss (2021, 05 de enero). Lenguajes de programación que deberías aprender en 2021.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
