export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Introducción a la programación',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción a la programación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Historia de los lenguajes de programación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'La expansión de los lenguajes de programación',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fundamentos de algoritmo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Joyanes Aguilar, L. (2006). Programación en C++: algoritmos, estructuras de datos y objetos: (2 ed.). McGraw-Hill España.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/50088',
    },
    {
      referencia:
        'Menchaca, G. (2002) Fundamentos de programación en lenguaje C Centro de investigación en computación. Mexico',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/74076',
    },
    {
      referencia:
        'Flores, F. (2012) Programación orientada a objetos. Ecoe Ediciones',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/69236',
    },
    {
      referencia:
        'Mancilla Herrera, A. (2015). Diseño y construcción de algoritmos: ( ed.). Universidad del Norte.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/69931',
    },
    {
      referencia:
        'Casado Iglesias, C. (2015). Entornos de desarrollo: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/62495',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'secuencia ordenada de pasos lógicos para resolver un problema o realizar una tarea.',
    },
    {
      termino: 'Bug',
      significado:
        'error en un programa que provoca un comportamiento inesperado o incorrecto.',
    },
    {
      termino: 'Código fuente',
      significado:
        'conjunto de instrucciones escritas en un lenguaje de programación que definen el funcionamiento de un software.',
    },
    {
      termino: 'Compilador',
      significado:
        'programa que traduce el código fuente a lenguaje máquina para su ejecución en la computadora.',
    },
    {
      termino: 'Constante',
      significado:
        'valor fijo que no cambia durante la ejecución de un programa.',
    },
    {
      termino: 'Depuración (Debugging)',
      significado:
        'proceso de identificación y corrección de errores en un programa.',
    },
    {
      termino: 'Editor de código',
      significado:
        'herramienta para escribir y modificar código fuente, como Visual Studio Code o Sublime Text.',
    },
    {
      termino: 'Ejecutable',
      significado:
        'archivo resultante de la compilación que puede ser ejecutado directamente por la computadora.',
    },
    {
      termino: 'Entorno de Desarrollo Integrado (IDE)',
      significado:
        'software que proporciona herramientas para escribir, depurar y ejecutar programas.',
    },
    {
      termino: 'Estructura de control',
      significado:
        'instrucción que permite modificar el flujo de ejecución de un programa, como condicionales y bucles.',
    },
    {
      termino: 'Framework',
      significado:
        'conjunto de herramientas y bibliotecas que facilitan el desarrollo de aplicaciones en un lenguaje específico.',
    },
    {
      termino: 'Intérprete',
      significado:
        'herramienta que ejecuta el código línea por línea sin necesidad de compilarlo previamente.',
    },
    {
      termino: 'Lenguaje de alto nivel',
      significado:
        'lenguaje de programación con sintaxis más cercana al lenguaje humano, como Python o Java.',
    },
    {
      termino: 'Lenguaje de bajo nivel',
      significado:
        'lenguaje de programación cercano al lenguaje máquina, como el ensamblador.',
    },
    {
      termino: 'Lenguaje de programación',
      significado:
        'conjunto de reglas y sintaxis que permiten a los programadores comunicarse con una computadora.',
    },
    {
      termino: 'Lógica de programación',
      significado:
        'capacidad de diseñar algoritmos y estructurar instrucciones para resolver problemas computacionales.',
    },
    {
      termino: 'Paradigma de programación',
      significado:
        'estilo o enfoque de programación, como la programación estructurada, orientada a objetos o funcional.',
    },
    {
      termino: 'Programación',
      significado:
        'proceso de escribir instrucciones para que una computadora realice tareas específicas.',
    },
    {
      termino: 'Sintaxis',
      significado:
        'reglas que determinan cómo deben escribirse las instrucciones en un lenguaje de programación.',
    },
    {
      termino: 'Variable',
      significado:
        'espacio de memoria donde se almacenan datos que pueden cambiar durante la ejecución del programa.',
    },
  ],
}
