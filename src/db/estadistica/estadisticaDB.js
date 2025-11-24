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
    pregunta: "Observa la siguiente tabla bidimensional de frecuencias relativas (ver imagen). Según la tabla, ¿qué proporción del total corresponde a mujeres que prefieren el color azul?",
    imagen: "/frecuencias_relativas_bidimensionales.png",
    respuestas: [
      "0,20",
      "0,30",
      "0,40",
      "Ninguna de las anteriores"
    ],
    respuestaCorrecta: 1,
    explicacion: "En la intersección de la fila 'Mujer' y la columna 'Azul' aparece el valor 30%, que equivale a 0,30."
  }, 
    {
    id: 9,
    pregunta: "¿Qué es la media (o promedio) de un conjunto de datos?",
    respuestas: [
      "El valor que más se repite en el conjunto de datos",
      "El valor central cuando los datos están ordenados",
      "El resultado de sumar todos los valores y dividir por la cantidad de datos",
      "Ninguna de las anteriores"
    ],
    respuestaCorrecta: 2,
    explicacion: "La media se calcula sumando todos los datos y dividiendo por el número total de datos. Es una medida de tendencia central que representa un valor de equilibrio."
  },
  {
    id: 10,
    pregunta: "En un grupo de cinco personas, las edades son: 21, 24, 23, 21 y 37 años. ¿Cuál es la media de estas edades?",
    respuestas: [
      "23,2 años",
      "25,2 años",
      "26 años",
      "Ninguna de las anteriores"
    ],
    respuestaCorrecta: 1,
    explicacion: "Se calcula la media como (21 + 24 + 23 + 21 + 37) / 5 = 126 / 5 = 25,2 años."
  },
  {
    id: 11,
    pregunta: "¿Cuál de las siguientes afirmaciones sobre la media es correcta?",
    respuestas: [
      "Solo se puede calcular para variables cualitativas.",
      "Un conjunto de datos puede tener varias medias distintas.",
      "La media puede no coincidir con ninguno de los valores observados.",
      "Ninguna de las anteriores"
    ],
    respuestaCorrecta: 2,
    explicacion: "La media es única para un conjunto de datos y puede resultar en un valor que no aparezca literalmente en los datos (por ejemplo, 25,2 años). Además, solo tiene sentido para variables cuantitativas."
  },
  {
    id: 12,
    pregunta: "Considere las utilidades (en millones de pesos) de un almacén: 2,1; 3,2; 2,8; 4,2; 3,2; 3,5; 2,9. La utilidad promedio es aproximadamente:",
    respuestas: [
      "3,1 millones",
      "3,3 millones",
      "3,5 millones",
      "Ninguna de las anteriores"
    ],
    respuestaCorrecta: 0,
    explicacion: "La media es (2,1 + 3,2 + 2,8 + 4,2 + 3,2 + 3,5 + 2,9) / 7 = 21,9 / 7 ≈ 3,13, que se aproxima a 3,1 millones."
  },
  {
    id: 13,
    pregunta: "¿Qué es la mediana de un conjunto de datos?",
    respuestas: [
      "El valor que más se repite en el conjunto de datos",
      "El valor central cuando los datos están ordenados de menor a mayor",
      "El promedio de todos los valores",
      "Ninguna de las anteriores"
    ],
    respuestaCorrecta: 1,
    explicacion: "La mediana es el valor que ocupa la posición central cuando los datos se ordenan de menor a mayor. Divide al conjunto en dos mitades: una con valores menores y otra con valores mayores."
  },
  {
    id: 14,
    pregunta: "Las edades de un grupo de personas son: 21, 24, 23, 21 y 37 años. Ordenando los datos de menor a mayor se obtiene: 21, 21, 23, 24, 37. ¿Cuál es la mediana?",
    respuestas: [
      "21 años",
      "23 años",
      "24 años",
      "Ninguna de las anteriores"
    ],
    respuestaCorrecta: 1,
    explicacion: "Al tener 5 datos, la mediana es el valor que queda en la tercera posición del orden: 21, 21, 23, 24, 37. Por lo tanto, la mediana es 23 años."
  },
  {
    id: 15,
    pregunta: "Si se agregara una sexta persona al grupo anterior con 20 años, quedando las edades: 21, 24, 23, 21, 37, 20. Ordenando: 20, 21, 21, 23, 24, 37. ¿Cómo se calcula la mediana ahora?",
    respuestas: [
      "Es el valor 21, porque aparece dos veces",
      "Es el promedio de 21 y 23, es decir, 22",
      "Es el valor 23, porque está más cerca del centro",
      "Ninguna de las anteriores"
    ],
    respuestaCorrecta: 1,
    explicacion: "Con 6 datos, la mediana es el promedio de los dos valores centrales (tercera y cuarta posición). Es (21 + 23) / 2 = 22."
  },
  
  {
  id: 16,
  pregunta: "¿Para qué sirve un gráfico de dispersión?",
  imagen: "/grafico_dispersion.png",
  respuestas: [
    "Para ordenar datos",
    "Para ver la relación entre dos variables",
    "Para calcular promedios",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 1,
  explicacion: "El gráfico de dispersión permite visualizar la relación entre dos variables cuantitativas."
},
{
  id: 17,
  pregunta: "Si los puntos de un gráfico de dispersión suben hacia la derecha, la relación es:",
  respuestas: [
    "Inversa",
    "Directa",
    "Nula",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 1,
  explicacion: "Cuando los puntos suben, la relación es directa (a mayor X, mayor Y)."
},
{
  id: 18,
  pregunta: "¿Qué indica el signo de la covarianza?",
  respuestas: [
    "La fuerza de la relación",
    "Si la relación es directa o inversa",
    "El tamaño de la muestra",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 1,
  explicacion: "El signo (+ o -) indica si la relación es directa o inversa."
},
{
  id: 19,
  pregunta: "Si la covarianza es negativa, ¿qué significa?",
  respuestas: [
    "Las variables aumentan juntas",
    "Las variables se relacionan de forma inversa",
    "No hay relación",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 1,
  explicacion: "Covarianza negativa indica relación inversa."
},
{
  id: 20,
  pregunta: "¿Entre qué valores puede estar el coeficiente de correlación (r)?",
  respuestas: [
    "Entre 0 y 10",
    "Entre -1 y 1",
    "Entre -100 y 100",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 1,
  explicacion: "El coeficiente de correlación siempre está entre -1 y 1."
},
{
  id: 21,
  pregunta: "Si r = 0, ¿qué significa?",
  respuestas: [
    "Relación positiva perfecta",
    "Relación negativa perfecta",
    "No hay relación lineal",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 2,
  explicacion: "Si r es cercano a 0, no existe relación lineal entre las variables."
},
{
  id: 22,
  pregunta: "Si r = 0,9, la relación es:",
  respuestas: [
    "Débil",
    "Negativa",
    "Fuerte y positiva",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 2,
  explicacion: "Un valor cercano a 1 indica correlación positiva fuerte."
},
{
  id: 23,
  pregunta: "¿Qué significa que el coeficiente de correlación sea r = -0,8?",
  respuestas: [
    "Existe una relación positiva fuerte entre las variables",
    "Existe una relación negativa fuerte entre las variables",
    "No existe relación entre las variables",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 1,
  explicacion: "Un valor cercano a -1 indica una correlación negativa fuerte: cuando una variable aumenta, la otra tiende a disminuir."
},
{
  id: 24,
  pregunta: "Si r = -1, ¿qué tipo de relación existe entre las variables?",
  respuestas: [
    "Relación positiva perfecta",
    "Relación negativa perfecta",
    "Relación débil",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 1,
  explicacion: "r = -1 indica una correlación negativa perfecta."
},
{
  id: 25,
  pregunta: "Si r = 0,8, podemos decir que la relación es:",
  respuestas: [
    "Negativa y fuerte",
    "Positiva y fuerte",
    "Nula",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 1,
  explicacion: "Un valor cercano a 1 indica correlación positiva fuerte."
},
{
  id: 26,
  pregunta: "¿Cuál de los siguientes valores representa una correlación negativa fuerte?",
  respuestas: [
    "r = 0,2",
    "r = -0,1",
    "r = -0,9",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 2,
  explicacion: "Cuanto más cerca está r de -1, más fuerte es la correlación negativa."
},
{
  id: 27,
  pregunta: "Si r = -0,3, ¿cómo se interpreta?",
  respuestas: [
    "Relación negativa débil",
    "Relación positiva fuerte",
    "Relación nula",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 0,
  explicacion: "r cercano a 0 indica relación débil. Al ser negativo, es débil e inversa."
},
{
  id: 28,
  pregunta: "Si r = 0, ¿qué se puede concluir?",
  respuestas: [
    "Existe relación positiva perfecta",
    "Existe relación negativa perfecta",
    "No existe relación lineal entre las variables",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 2,
  explicacion: "r = 0 indica ausencia de relación lineal."
},
{
  id: 29,
  pregunta: "Si r = -0,95, la relación es:",
  respuestas: [
    "Positiva débil",
    "Negativa débil",
    "Negativa fuerte",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 2,
  explicacion: "Valores muy cercanos a -1 indican relación inversa fuerte."
},
{
  id: 30,
  pregunta: "Verdadero o Falso: Un valor r = -0,8 indica que cuando una variable aumenta, la otra tiende a disminuir.",
  respuestas: [
    "Verdadero",
    "Falso"
  ],
  respuestaCorrecta: 0,
  explicacion: "Un valor negativo indica relación inversa."
},
{
  id: 31,
  pregunta: "¿Qué indica el signo de la covarianza?",
  respuestas: [
    "La cantidad de datos",
    "Si la relación entre variables es directa o inversa",
    "El promedio de las variables",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 1,
  explicacion: "El signo de la covarianza indica si la relación es directa (positiva) o inversa (negativa)."
},
{
  id: 32,
  pregunta: "Si la covarianza entre dos variables es positiva, significa que:",
  respuestas: [
    "Cuando una variable aumenta, la otra también tiende a aumentar",
    "Cuando una variable aumenta, la otra disminuye",
    "No existe relación",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 0,
  explicacion: "Covarianza positiva indica relación directa: ambas variables tienden a moverse en el mismo sentido."
},
{
  id: 33,
  pregunta: "Si la covarianza es negativa, ¿qué sucede con las variables?",
  respuestas: [
    "Aumentan juntas",
    "Una aumenta mientras la otra disminuye",
    "No tienen relación",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 1,
  explicacion: "Una covarianza negativa indica relación inversa."
},
{
  id: 34,
  pregunta: "Si Cov(X,Y) = 0, ¿qué se puede afirmar?",
  respuestas: [
    "Existe relación positiva",
    "Existe relación negativa",
    "No existe relación lineal",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 2,
  explicacion: "Una covarianza cercana a 0 indica ausencia de relación lineal."
},
{
  id: 35,
  pregunta: "¿Cuál de las siguientes opciones representa una covarianza positiva?",
  respuestas: [
    "-120",
    "0",
    "85",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 2,
  explicacion: "Un número positivo indica covarianza positiva."
},
{
  id: 36,
  pregunta: "¿Cuál de los siguientes valores indica relación inversa entre variables?",
  respuestas: [
    "Cov = 150",
    "Cov = -75",
    "Cov = 0",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 1,
  explicacion: "Un valor negativo indica relación inversa."
},
{
  id: 37,
  pregunta: "Verdadero o Falso: Una covarianza grande en valor absoluto indica una relación más fuerte entre las variables.",
  respuestas: [
    "Verdadero",
    "Falso"
  ],
  respuestaCorrecta: 0,
  explicacion: "Mientras mayor sea el valor absoluto de la covarianza, más fuerte es la relación."
},
{
  id: 38,
  pregunta: "Si la covarianza entre 'Horas de estudio' y 'Nota obtenida' es 200, ¿qué se puede interpretar?",
  respuestas: [
    "A más horas de estudio, mayor nota",
    "A más horas de estudio, menor nota",
    "No hay relación",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 0,
  explicacion: "Covarianza positiva indica que ambas variables tienden a aumentar juntas."
},
{
  id: 39,
  pregunta: "Si la covarianza entre 'Temperatura' y 'Venta de bebidas' es -50, ¿qué significa?",
  respuestas: [
    "A mayor temperatura, más bebidas se venden",
    "A mayor temperatura, menos bebidas se venden",
    "No existe relación",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 1,
  explicacion: "La covarianza negativa indica que cuando una variable sube, la otra baja."
},
{
  id: 40,
  pregunta: "¿Qué diferencia principal existe entre covarianza y correlación?",
  respuestas: [
    "La covarianza indica dirección y magnitud, la correlación estandariza el resultado",
    "Ambas son exactamente lo mismo",
    "La correlación solo sirve para una variable",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 0,
  explicacion: "La covarianza muestra dirección y magnitud, mientras que la correlación está normalizada entre -1 y 1."
},
{
  id: 41,
  pregunta: "¿Qué es un modelo de regresión lineal?",
  respuestas: [
    "Un tipo de gráfico circular",
    "Una fórmula que relaciona dos variables mediante una línea recta",
    "Una tabla de frecuencias",
    "Un tipo de promedio"
  ],
  respuestaCorrecta: 1,
  explicacion: "El modelo de regresión lineal es una fórmula que describe la relación entre dos variables usando una línea recta."
},
{
  id: 42,
  pregunta: "¿Cuál es la forma general de un modelo de regresión lineal?",
  respuestas: [
    "y = x² + n",
    "y = mx + n",
    "y = m + x",
    "y = x / n"
  ],
  respuestaCorrecta: 1,
  explicacion: "La fórmula más común de la regresión lineal es y = mx + n."
},
{
  id: 43,
  pregunta: "En la ecuación y = mx + n, ¿qué representa la letra “m”?",
  respuestas: [
    "El punto de corte con el eje X",
    "La pendiente de la recta",
    "El valor máximo de y",
    "El número total de datos"
  ],
  respuestaCorrecta: 1,
  explicacion: "La letra m representa la pendiente, es decir, cuánto cambia y cuando x aumenta en una unidad."
},
{
  id: 44,
  pregunta: "En la ecuación y = mx + n, ¿qué representa la letra “n”?",
  respuestas: [
    "La pendiente de la recta",
    "El valor inicial de y cuando x = 0",
    "El valor máximo de x",
    "La media de los datos"
  ],
  respuestaCorrecta: 1,
  explicacion: "El término n representa el punto donde la recta corta al eje Y, cuando x es 0."
},
{
  id: 45,
  pregunta: "Si m es positiva en un modelo de regresión lineal, ¿qué significa?",
  respuestas: [
    "La recta es horizontal",
    "La relación entre las variables es inversa",
    "La recta es creciente",
    "No hay relación entre las variables"
  ],
  respuestaCorrecta: 2,
  explicacion: "Cuando m es positiva, la recta sube hacia la derecha, indicando una relación directa."
},
{
  id: 46,
  pregunta: "¿Para qué se utiliza un modelo de regresión lineal?",
  respuestas: [
    "Para ordenar datos",
    "Para calcular la moda",
    "Para estimar el valor de una variable a partir de otra",
    "Para construir gráficos circulares"
  ],
  respuestaCorrecta: 2,
  explicacion: "La regresión lineal se usa para hacer predicciones o estimaciones."
},
{
  id: 47,
  pregunta: "Si la ecuación es y = 3x + 2, ¿cuánto vale y cuando x = 2?",
  respuestas: [
    "6",
    "8",
    "5",
    "10"
  ],
  respuestaCorrecta: 1,
  explicacion: "Se reemplaza x = 2: y = 3(2)+2 = 6+2 = 8."
},
{
  id: 48,
  pregunta: "En regresión lineal, la variable X se llama:",
  respuestas: [
    "Variable dependiente",
    "Variable independiente",
    "Variable aleatoria",
    "Variable cualitativa"
  ],
  respuestaCorrecta: 1,
  explicacion: "X es la variable independiente, es decir, la que se usa para explicar o predecir a Y."
},
{
  id: 49,
  pregunta: "En regresión lineal, la variable Y se llama:",
  respuestas: [
    "Variable independiente",
    "Variable discreta",
    "Variable dependiente",
    "Variable categórica"
  ],
  respuestaCorrecta: 2,
  explicacion: "Y es la variable dependiente, ya que su valor depende de X."
},
{
  id: 50,
  pregunta: "Si un modelo es y = -2x + 10, ¿qué indica el signo negativo de la pendiente?",
  respuestas: [
    "Que no hay relación",
    "Que la relación es directa",
    "Que la relación es inversa",
    "Que la recta es horizontal"
  ],
  respuestaCorrecta: 2,
  explicacion: "Una pendiente negativa indica que cuando X aumenta, Y disminuye."
},
{
  id: 51,
  pregunta: "¿Qué permite hacer un modelo de regresión lineal?",
  respuestas: [
    "Clasificar datos cualitativos",
    "Predecir valores futuros",
    "Calcular frecuencias acumuladas",
    "Ordenar datos alfabéticamente"
  ],
  respuestaCorrecta: 1,
  explicacion: "La regresión lineal se usa principalmente para hacer predicciones."
},
{
  id: 52,
  pregunta: "Si un modelo es y = 5x - 3, ¿cuál es el valor de n?",
  respuestas: [
    "5",
    "-3",
    "3",
    "8"
  ],
  respuestaCorrecta: 1,
  explicacion: "El valor de n es el término independiente: -3."
}, 
{
  id: 53,
  pregunta: "¿Qué representa el coeficiente de determinación R² en un modelo de regresión?",
  respuestas: [
    "La pendiente de la recta",
    "El porcentaje de variabilidad de Y explicado por X",
    "El valor inicial de la variable dependiente",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 1,
  explicacion: "R² indica qué porcentaje de la variabilidad de la variable dependiente (y) es explicado por el modelo de regresión."
},
{
  id: 54,
  pregunta: "Si un modelo tiene R² = 0,80, ¿cómo se interpreta?",
  respuestas: [
    "El 80% de los datos son incorrectos",
    "El 80% de la variabilidad de Y es explicada por X",
    "La relación entre las variables es negativa",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 1,
  explicacion: "Un R² de 0,80 significa que el 80% de la variabilidad de Y es explicada por la variable X."
},
{
  id: 55,
  pregunta: "Un valor de R² cercano a 1 indica que:",
  respuestas: [
    "El modelo se ajusta mal a los datos",
    "No existe relación entre las variables",
    "El modelo se ajusta muy bien a los datos",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 2,
  explicacion: "Cuando R² está cerca de 1, el modelo explica muy bien los datos observados."
},
{
  id: 56,
  pregunta: "Un valor de R² cercano a 0 indica que:",
  respuestas: [
    "El modelo explica muy bien la variabilidad",
    "El modelo tiene un ajuste deficiente a los datos",
    "La pendiente de la recta es positiva",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 1,
  explicacion: "Un R² cercano a 0 significa que el modelo casi no explica la variabilidad de los datos."
},
{
  id: 57,
  pregunta: "Si un modelo tiene R² = 0,95, ¿qué se puede decir sobre su ajuste?",
  respuestas: [
    "Es un ajuste débil",
    "Es un ajuste moderado",
    "Es un ajuste muy fuerte",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 2,
  explicacion: "Un R² = 0,95 indica que el modelo tiene un ajuste muy fuerte a los datos."
},
{
  id: 58,
  pregunta: "¿Qué variable ayuda a explicar el R² en un modelo lineal?",
  respuestas: [
    "Solo la variable dependiente (Y)",
    "Solo la variable independiente (X)",
    "La relación entre X e Y",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 2,
  explicacion: "R² se basa en qué tan bien X logra explicar los cambios en Y."
},
{
  id: 59,
  pregunta: "Si R² = 0,60, entonces el modelo explica:",
  respuestas: [
    "El 6% de la variabilidad de Y",
    "El 40% de la variabilidad de Y",
    "El 60% de la variabilidad de Y",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 2,
  explicacion: "R² = 0,60 significa que el 60% de la variabilidad de la variable Y es explicada por el modelo."
},
{
  id: 60,
  pregunta: "Verdadero o Falso: Un R² alto garantiza que el modelo predice perfectamente todos los valores.",
  respuestas: [
    "Verdadero",
    "Falso"
  ],
  respuestaCorrecta: 1,
  explicacion: "Aunque R² sea alto, no garantiza predicciones perfectas, solo indica buen nivel de ajuste."
}, 
{
  id: 61,
  pregunta: "¿Cuál es el rango de valores que puede tomar una probabilidad?",
  respuestas: [
    "De -1 a 1",
    "De 0 a 10",
    "De 0 a 1 (o de 0% a 100%)",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 2,
  explicacion: "Por definición, una probabilidad siempre está entre 0 y 1, incluyendo ambos extremos."
},
{
  id: 62,
  pregunta: "Si un suceso tiene probabilidad 0, esto significa que:",
  respuestas: [
    "Es un suceso seguro",
    "Es un suceso imposible",
    "Ocurre la mitad de las veces",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 1,
  explicacion: "Probabilidad 0 indica que el suceso no puede ocurrir; es imposible en ese experimento."
},
{
  id: 63,
  pregunta: "Si un suceso tiene probabilidad 1, esto significa que:",
  respuestas: [
    "Es un suceso seguro",
    "Es un suceso imposible",
    "Es muy poco probable",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 0,
  explicacion: "Probabilidad 1 indica que el suceso ocurrirá siempre; es un suceso seguro."
},
{
  id: 64,
  pregunta: "¿Cuál es la probabilidad de obtener cara al lanzar una moneda justa?",
  respuestas: [
    "0,25",
    "0,5",
    "0,75",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 1,
  explicacion: "La moneda tiene 2 resultados posibles (cara o sello) y 1 favorable a cara, por lo que P(cara) = 1/2 = 0,5."
},
{
  id: 65,
  pregunta: "Un dado tiene 6 caras numeradas del 1 al 6. ¿Cuál es la probabilidad de obtener un número impar?",
  respuestas: [
    "1/6",
    "1/2",
    "2/3",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 1,
  explicacion: "Hay 3 números impares (1, 3, 5) de 6 posibles, entonces P(impar) = 3/6 = 1/2."
},
{
  id: 66,
  pregunta: "En un dado honesto, ¿cuál es la probabilidad de obtener un número mayor que 4?",
  respuestas: [
    "1/6",
    "2/6",
    "3/6",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 1,
  explicacion: "Los números mayores que 4 son 5 y 6: 2 casos favorables de 6 posibles, por lo que P = 2/6 = 1/3."
},
{
  id: 67,
  pregunta: "Si P(A) = 0,3, ¿cuál es la probabilidad del complemento de A (Aᶜ)?",
  respuestas: [
    "0,3",
    "0,5",
    "0,7",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 2,
  explicacion: "El complemento cumple P(A) + P(Aᶜ) = 1, por lo que P(Aᶜ) = 1 - 0,3 = 0,7."
},
{
  id: 68,
  pregunta: "En una bolsa hay 4 pelotas rojas y 6 azules. Si se extrae una al azar, ¿cuál es la probabilidad de sacar una roja?",
  respuestas: [
    "4/6",
    "4/10",
    "6/10",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 1,
  explicacion: "Hay 4 casos favorables (rojas) de un total de 10 pelotas, entonces P(roja) = 4/10 = 0,4."
},
{
  id: 69,
  pregunta: "¿Cuál de las siguientes opciones describe mejor un experimento aleatorio?",
  respuestas: [
    "Calcular 2 + 2",
    "Lanzar un dado y observar el número obtenido",
    "Saber la fecha de ayer",
    "Leer un número fijo escrito en una hoja"
  ],
  respuestaCorrecta: 1,
  explicacion: "En un experimento aleatorio el resultado no se conoce de antemano; lanzar un dado cumple esa condición."
},
{
  id: 70,
  pregunta: "¿Cuál es el espacio muestral al lanzar un dado de 6 caras numeradas del 1 al 6?",
  respuestas: [
    "{par, impar}",
    "{1, 2, 3, 4, 5, 6}",
    "{cara, sello}",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 1,
  explicacion: "El espacio muestral es el conjunto de todos los resultados posibles: {1, 2, 3, 4, 5, 6}."
},
{
  id: 71,
  pregunta: "Si al lanzar un dado definimos el suceso A = 'obtener un número par', ¿cuántos casos favorables tiene A?",
  respuestas: [
    "1",
    "2",
    "3",
    "Ninguna de las anteriores"
  ],
  respuestaCorrecta: 2,
  explicacion: "Los números pares en un dado son 2, 4 y 6, por lo que hay 3 casos favorables."
},
{
  id: 72,
  pregunta: "Verdadero o Falso: La suma de las probabilidades de todos los resultados posibles de un experimento aleatorio es igual a 1.",
  respuestas: [
    "Verdadero",
    "Falso"
  ],
  respuestaCorrecta: 0,
  explicacion: "Las probabilidades de todos los resultados del espacio muestral deben sumar 1 (o 100%)."
}, 
{
  id: 73,
  pregunta: "En una bolsa hay 5 pelotas rojas, 3 verdes y 2 azules. ¿Cuál es la probabilidad de sacar una pelota verde?",
  respuestas: [
    "3/10",
    "5/10",
    "2/10",
    "1/3"
  ],
  respuestaCorrecta: 0,
  explicacion: "Hay 3 pelotas verdes de un total de 10, por lo tanto P(verde) = 3/10."
},
{
  id: 74,
  pregunta: "Se lanza un dado de 6 caras. ¿Cuál es la probabilidad de obtener un número menor que 3?",
  respuestas: [
    "1/6",
    "2/6",
    "3/6",
    "4/6"
  ],
  respuestaCorrecta: 1,
  explicacion: "Los números menores que 3 son 1 y 2: 2 casos favorables de 6, P = 2/6."
},
{
  id: 75,
  pregunta: "En una caja hay 8 lápices negros y 4 lápices rojos. ¿Cuál es la probabilidad de sacar un lápiz rojo?",
  respuestas: [
    "4/12",
    "8/12",
    "1/2",
    "2/3"
  ],
  respuestaCorrecta: 0,
  explicacion: "Hay 4 lápices rojos de un total de 12, entonces P(rojo) = 4/12."
},
{
  id: 76,
  pregunta: "Se lanza una moneda 1 vez. ¿Cuál es la probabilidad de que NO salga cara?",
  respuestas: [
    "0,25",
    "0,5",
    "1",
    "0"
  ],
  respuestaCorrecta: 1,
  explicacion: "La probabilidad del complemento es 1 - P(cara) = 1 - 0,5 = 0,5."
},
{
  id: 77,
  pregunta: "En una rifa hay 20 boletos, de los cuales 5 son ganadores. ¿Cuál es la probabilidad de ganar?",
  respuestas: [
    "5/20",
    "15/20",
    "1/20",
    "20/5"
  ],
  respuestaCorrecta: 0,
  explicacion: "Hay 5 boletos ganadores de 20 en total, por lo tanto P = 5/20."
},
{
  id: 78,
  pregunta: "Una caja contiene 6 pelotas amarillas y 4 pelotas negras. ¿Cuál es la probabilidad de NO sacar una pelota negra?",
  respuestas: [
    "4/10",
    "6/10",
    "2/10",
    "1/10"
  ],
  respuestaCorrecta: 1,
  explicacion: "No sacar negra es sacar amarilla: 6 pelotas amarillas de 10, P = 6/10."
},
{
  id: 79,
  pregunta: "Un dado es lanzado. ¿Cuál es la probabilidad de obtener un múltiplo de 2?",
  respuestas: [
    "1/6",
    "2/6",
    "3/6",
    "4/6"
  ],
  respuestaCorrecta: 2,
  explicacion: "Los múltiplos de 2 son 2, 4 y 6: 3 casos favorables de 6."
},
{
  id: 80,
  pregunta: "En una clase hay 12 hombres y 18 mujeres. Si se elige una persona al azar, ¿cuál es la probabilidad de que sea mujer?",
  respuestas: [
    "12/30",
    "18/30",
    "1/2",
    "2/3"
  ],
  respuestaCorrecta: 1,
  explicacion: "Hay 18 mujeres de un total de 30 personas, por lo tanto P(mujer) = 18/30."
},
{
  id: 81,
  pregunta: "Una bolsa contiene 7 canicas verdes y 3 rojas. ¿Cuál es la probabilidad de sacar una canica roja?",
  respuestas: [
    "7/10",
    "3/10",
    "1/7",
    "1/3"
  ],
  respuestaCorrecta: 1,
  explicacion: "Hay 3 canicas rojas de un total de 10, entonces P(roja) = 3/10."
},
{
  id: 82,
  pregunta: "Se lanza un dado. ¿Cuál es la probabilidad de obtener un número mayor o igual que 5?",
  respuestas: [
    "1/6",
    "2/6",
    "3/6",
    "4/6"
  ],
  respuestaCorrecta: 1,
  explicacion: "Los números mayores o iguales que 5 son 5 y 6: 2 casos favorables de 6."
}










];


export default estadisticaDB;