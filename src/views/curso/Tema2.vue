<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Fundamentos de algoritmo'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Para dar inicio a los fundamentos de algoritmos lo primero que se debe revisar es que es un algoritmo, lo cuál es la base de la programación y de todo el contenido que se verá a continuación.
      
          .bg-color-4.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Un algoritmo es una secuencia finita de pasos lógicos y ordenados que permiten resolver un problema o realizar una tarea específica. En el ámbito de la programación, los algoritmos son esenciales, ya que sirven como base para el desarrollo de software y la solución de problemas computacionales. Comprender su estructura y funcionamiento te permitirá diseñar programas eficientes y optimizados. (Mancilla Herrera, 2015)
      
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")


      h2 Características de un Algoritmo
      p Para que una secuencia de instrucciones sea considerada un algoritmo, debe cumplir con ciertas características fundamentales:

      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/3.png", alt="").mb-4.mb-lg-0
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="Definido")
              p Cada paso del algoritmo debe estar claramente especificado y no debe generar ambigüedades.

            .div(titulo="Preciso")
              p Debe indicar claramente las acciones a seguir en cada paso.

            .div(titulo="Finito")
              p Debe terminar después de un número determinado de pasos.

            .div(titulo="Eficiente")
              p Debe ejecutarse en el menor tiempo y con el menor uso de recursos posible.

            .div(titulo="General")
              p Debe poder aplicarse a diferentes conjuntos de datos y escenarios similares.
      
      p.mb-4 Por ejemplo, si se quiere hacer un algoritmo para una actividad común como prender un bombillo, se debe revisar todas las posibles secuencias que se puedan presentar.

      .bg-full-width.bg-color-6.mb-5
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src="@/assets/curso/tema2/4.svg" alt="" style="max-width: 505px;").mx-auto.mb-4.mb-lg-0
            .col-lg
              p Una secuencia sería:
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | Inicio
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | Revisar si el bombillo está conectado en el foco o plafón
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | Si tiene bombillo revisar si está encendido o no
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Si tiene bombillo y no está encendido se enciende y se finaliza
      

      p.mb-4 Todos los posibles caminos y revisiones son más claras en una representación gráfica que se llama diagrama de flujo.


      .bg-full-width-2.bg-fondo-5
        .px-4.px-md-5.py-4

          .titulo-figura.mb-2
            h5 Figura 1. 
            span Algoritmo encender bombillo
          
          figure.bg-color-info.p-4.p-md-5.mb-5
            img(src="@/assets/curso/tema2/f1.png", data-aos="zoom-in", style="max-width: 864px").mx-auto
          
          h2 Representación de algoritmos

          p.mb-4 Los algoritmos pueden representarse de distintas maneras, siendo las más comunes:

          div.row.justify-content-center.align-items-stretch
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/5.svg"
                  alt=""
                  style="width: 90px"
                )
                h5.mb-0.text-center Lenguaje natural
                p.mb-0.text-center Descripción en palabras de los pasos a seguir.

            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/6.svg"
                  alt=""
                  style="width: 90px"
                )
                h5.mb-0.text-center Pseudocódigo
                p.mb-0.text-center Representación estructurada en un lenguaje similar a la programación pero más entendible para los humanos.
          
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/7.svg"
                  alt=""
                  style="width: 90px"
                )
                h5.mb-0.text-center Diagramas de flujo
                p.mb-0.text-center Representación gráfica que ilustra la secuencia de pasos utilizando símbolos específicos.
          

      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 La figura 1 muestra una representación de un algoritmo a través de diagrama de flujo. Los diagramas de flujo tienen unas características y se van a explicar al igual que el pseudocódigo como formas de representar un algoritmo.
      
          .bg-color-1.p-4.py-lg-5(data-aos="fade-left")
            p.mb-3 #[strong Representación de un algoritmo: Pseudocódigo.]
            p.mb-0 El pseudocódigo es una forma de representar algoritmos utilizando un lenguaje similar al natural, pero con una estructura clara y ordenada que facilita su posterior traducción a un lenguaje de programación.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")


      p Las reglas básicas del pseudocódigo son: 




      
      .bg-full-width.bg-color-6.mb-5
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src="@/assets/curso/tema2/9.svg" alt="" style="max-width: 505px;").mx-auto.mb-4.mb-lg-0
            .col-lg

              ul.lista-ul--color
                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | Usar palabras clave como #[b INICIO], #[b FIN], #[b LEER], #[b ESCRIBIR], #[b SI...ENTONCES...SI NO...FIN SI], #[b MIENTRAS...HACER...FIN MIENTRAS], #[b PARA...HASTA...HACER...FIN PARA].

                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | Seguir una estructura secuencial, condicional o repetitiva según el caso.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Mantener una sintaxis clara y comprensible.

      p.mb-4 A continuación se presenta un ejemplo sencillo de pseudocódigo que ilustra cómo diseñar un algoritmo para sumar dos números ingresados por el usuario. Este tipo de ejercicios permite familiarizarse con la estructura lógica básica de un programa antes de implementarlo en un lenguaje de programación específico.


      .titulo-figura.mb-2
        h5 Figura 2. 
        span Algoritmo para sumar dos números
      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema2/f2.png", data-aos="zoom-in", style="max-width: 610px").mx-auto


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")
        .col-lg-8

          p(data-aos="fade-left").mb-4 Este ejemplo muestra cómo el pseudocódigo utiliza palabras del lenguaje natural combinadas con términos clave que indican las acciones del algoritmo. La palabra ESCRIBIR señala que se desplegará un mensaje en pantalla para guiar al usuario sobre lo que debe hacer o cómo interactuar. Por su parte, la palabra LEER indica que el sistema recibirá un dato que el usuario ingresará y lo almacenará en la variable correspondiente.
      
          .bg-color-4.p-4(data-aos="fade-left").mb-4
            p.mb-0 El pseudocódigo cumple un papel clave en la programación, ya que permite estructurar algoritmos de forma clara antes de traducirlos a un lenguaje de programación. Esto facilita la comprensión del problema, organiza la solución y disminuye errores al momento de codificar.

          p Por ello, comprender los fundamentos de los algoritmos es una habilidad esencial para toda persona que se inicia en la programación. A lo largo del aprendizaje, estos conceptos se aplicarán en diversos lenguajes y permitirán resolver situaciones reales con mayor claridad y precisión.
      
      
      h2.mb-5 Representación de un algoritmo: Diagrama de flujo


      .row.align-items-center.mb-5
        .col-lg
          p Los diagramas de flujo son representaciones gráficas de un algoritmo mediante símbolos estandarizados. Facilitan la visualización del proceso y la identificación de posibles errores antes de la implementación en código.

          p.mb-0 #[strong Los principales símbolos utilizados en diagramas de flujo son:]


        .col-lg-auto
          img(src="@/assets/curso/tema2/11.svg", style="max-width: 400px").mx-auto


      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-1.png")
              .col-lg-7
                h4 Óvalo
                p Representa el inicio y el fin del algoritmo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-2.png")
              .col-lg-7
                h4 Paralelogramo
                p Indica entrada o salida de datos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-3.png")
              .col-lg-7
                h4 Rectángulo
                p Representa un proceso o una operación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-4.png")
              .col-lg-7
                h4 Rombo
                p Indica una decisión que puede tener dos caminos (sí o no).
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-5.png")
              .col-lg-7
                h4 Flechas
                p Muestran el flujo del algoritmo.
      

      
      p.mb-4 La siguiente figura representa un diagrama de flujo que describe, paso a paso, un algoritmo básico para sumar dos números. En él se emplean símbolos convencionales que permiten identificar con facilidad las entradas, procesos y salidas del algoritmo, facilitando su comprensión visual y lógica.

      .titulo-figura.mb-2
        h5 Figura 3. 
        span Diagrama de flujo sumar 2 números

      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema2/f3.png", data-aos="zoom-in", style="max-width: 920px").mx-auto
      
  
      h2 Tipos de algoritmos

      p Existen distintos tipos de algoritmos según su estructura y lógica de ejecución:

      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/12.png", alt="").mb-4.mb-lg-0
        .col-lg-8
      
          AcordionA(tipo="b")#Acordion2
            .div(titulo="Secuencial")
              p Se ejecuta en un #[b orden específico], instrucción tras instrucción, sin tomar decisiones.

            .div(titulo="Condicional")
              p Incluye #[b estructuras de decisión] que permiten ejecutar distintas acciones según condiciones.

            .div(titulo="Iterativo")
              p Utiliza #[b bucles o repeticiones] para ejecutar instrucciones hasta cumplir una condición.

            .div(titulo="Recursivo")
              p Se #[b llama a sí mismo] durante la ejecución para resolver problemas de forma repetitiva.
      

      h2 Importancia de los algoritmos en la programación

      p Los algoritmos son la base de la programación, ya que permiten:


      .bg-full-width.bg-color-6
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg

              ul.lista-ul--color
                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | Optimizar recursos: reduciendo el tiempo de ejecución y el uso de memoria.

                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | Estandarizar soluciones: aplicando principios estructurados para resolver problemas.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Facilitar la depuración y mantenimiento: gracias a su diseño lógico y bien documentado.
            .col-lg-auto
              figure
                img(src="@/assets/curso/tema2/13.svg" alt="" style="max-width: 505px;").mx-auto.mb-4.mb-lg-0


      .bg-full-width.bg-color-7
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/14.png', alt='')
      
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Entornos de desarrollo
              p.mb-4(data-aos="fade-right") Se invita a leer el documento #[strong Entornos de desarrollo], donde se aborda la importancia de los entornos de desarrollo como herramientas clave en la programación. Este material ofrece explicaciones detalladas, ejemplos de herramientas populares y reflexiones sobre tendencias actuales, con el fin de comprender los distintos tipos de entornos, sus componentes, y su impacto en la industria del #[em software]. 
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Entornos de desarrollo
      
      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/69236" target="_blank" rel="noopener noreferrer") Flórez Fernández, H. A. (2012). Programación orientada a objetos usando java: ( ed.). Ecoe Ediciones. 
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=U3CGMyjzlvM" target="_blank" rel="noopener noreferrer") Magic Marhers.  (2015, 21 de julio). ¿Qué es un algoritmo?
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes opciones describe mejor un entorno de desarrollo integrado (IDE)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Un sistema operativo especializado para programadores.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Un conjunto de herramientas que facilitan la programación.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Un servidor para ejecutar programas en la nube.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Un lenguaje de programación de alto nivel.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Respuesta correcta: b) Un conjunto de herramientas que facilitan la programación.\nRetroalimentación: Un IDE proporciona un editor de código, depurador y otras herramientas que optimizan el desarrollo de software.',
            mensaje_incorrecto:
              'Respuesta incorrecta. Revisa la definición de IDE.',
          },
          {
            id: 2,
            texto:
              '¿Qué ventaja tienen los entornos de desarrollo en la nube frente a los locales?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'No requieren instalación y permiten trabajar desde cualquier lugar.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Son más lentos y menos eficientes.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'No permiten compartir código con otros desarrolladores.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Son incompatibles con lenguajes de programación modernos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Los entornos en la nube permiten la accesibilidad remota y colaboración sin necesidad de configuraciones locales complejas.',
            mensaje_incorrecto:
              'Revisa las ventajas de los entornos en la nube.',
          },
          {
            id: 3,
            texto: '¿Qué es un depurador en un entorno de desarrollo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Una herramienta para mejorar la velocidad del código.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Un sistema de almacenamiento en la nube.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Un software que permite detectar y corregir errores en el código.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Un compilador avanzado.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Los depuradores permiten analizar y corregir errores de programación, facilitando el desarrollo de software de calidad.',
            mensaje_incorrecto: 'Revisa la función de un depurador.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de los siguientes lenguajes de programación fue uno de los primeros en la historia y aún es utilizado en ciertos ámbitos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Java',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Python',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'COBOL',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Swift',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'COBOL fue desarrollado en 1959 y todavía se usa en sistemas bancarios y gubernamentales.',
            mensaje_incorrecto:
              'Revisa la historia de los lenguajes de programación.',
          },
          {
            id: 5,
            texto:
              '¿Qué tipo de algoritmo se usa comúnmente para ordenar datos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Algoritmo de búsqueda binaria.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Algoritmo de ordenamiento rápido (QuickSort).',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Algoritmo de encriptación.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Algoritmo de compresión de datos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'QuickSort es uno de los algoritmos más eficientes para ordenar grandes volúmenes de datos.',
            mensaje_incorrecto: 'Revisa los algoritmos de ordenamiento.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
