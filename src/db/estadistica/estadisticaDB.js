const estadisticaDB = [
  {
    id: 1,
    pregunta: "¿Cuál es el objetivo principal de una tabla de frecuencia?",
    imagen: "/tabla_frecuencias_1.png",
    respuestas: [
      "Ordenar los datos al azar",
      "Resumir cuántas veces aparece cada dato",
      "Calcular directamente la media de los datos",
      "Ninguna de las anteriores"
    ],
    respuestaCorrecta: 1,
    explicacion: "Una tabla de frecuencia sirve para resumir cuántas veces aparece cada valor o categoría en los datos."
  },
  {
    id: 2,
    pregunta: "La frecuencia absoluta representa:",
    respuestas: [
      "El porcentaje de datos",
      "El número de veces que aparece un dato",
      "La suma total de los datos",
      "Ninguna de las anteriores"
    ],
    respuestaCorrecta: 1,
    explicacion: "La frecuencia absoluta (fi) es la cantidad de veces que aparece un valor en el conjunto de datos."
  },
  {
    id: 3,
    pregunta: "Verdadero o Falso: La frecuencia relativa siempre se expresa como porcentaje.",
    respuestas: [
      "Verdadero",
      "Falso"
    ],
    respuestaCorrecta: 1,
    explicacion: "La frecuencia relativa puede expresarse como decimal o como porcentaje, no necesariamente solo como porcentaje."
  },
  {
    id: 4,
    pregunta: "¿Cómo se calcula la frecuencia relativa (hi)?",
    imagen: "/tabla_frecuencias_1.png",
    respuestas: [
      "Dividiendo la frecuencia absoluta por el tamaño de la muestra",
      "Multiplicando la frecuencia absoluta por 100",
      "Sumando todas las frecuencias absolutas",
      "Ninguna de las anteriores"
    ],
    respuestaCorrecta: 0,
    explicacion: "La frecuencia relativa se obtiene dividiendo fi entre el total de datos."
  },
  {
    id: 5,
    pregunta: "Si la frecuencia absoluta de un valor es 5 y el total de datos es 20, ¿cuál es su frecuencia relativa?",
    respuestas: [
      "0,25",
      "0,5",
      "0,05",
      "Ninguna de las anteriores"
    ],
    respuestaCorrecta: 0,
    explicacion: "5 ÷ 20 = 0,25 (equivale al 25%)."
  },
  {
    id: 6,
    pregunta: "La suma de todas las frecuencias relativas debe ser:",
    imagen: "/tabla_frecuencias_1.png",
    respuestas: [
      "Igual al tamaño de la muestra",
      "Igual a 1 o al 100%",
      "Mayor que 1",
      "Ninguna de las anteriores"
    ],
    respuestaCorrecta: 1,
    explicacion: "Las frecuencias relativas representan proporciones del total, por lo que deben sumar 1 o 100%."
  },
  {
    id: 7,
    pregunta: "¿Qué es la frecuencia relativa?",
    respuestas: [
      "El número total de datos en una muestra",
      "La cantidad de veces que aparece un dato",
      "La proporción que representa un dato respecto del total de datos",
      "Ninguna de las anteriores"
    ],
    respuestaCorrecta: 2,
    explicacion: "La frecuencia relativa es la proporción que representa un dato respecto del total de observaciones. Se calcula como fi / N."
  },
  {
    id: 8,
    pregunta: "Observa la siguiente tabla bidimensional de frecuencias relativas (los valores están en proporción respecto del total):\n\n             Azul   Rojo   Total\nHombre      0,20   0,10   0,30\nMujer       0,30   0,10   0,40\nTotal       0,50   0,20   0,70\n\nSegún la tabla, ¿qué proporción del total corresponde a mujeres que prefieren el color azul?",
    respuestas: [
      "0,20",
      "0,30",
      "0,40",
      "Ninguna de las anteriores"
    ],
    respuestaCorrecta: 1,
    explicacion: "En la intersección de la fila 'Mujer' y la columna 'Azul' se encuentra el valor 0,30, que representa la proporción de mujeres que prefieren el color azul respecto del total."
  }



];


export default estadisticaDB;