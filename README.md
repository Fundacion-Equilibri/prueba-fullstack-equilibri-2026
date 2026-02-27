# Evaluación para Fundación Equilibri
¡Bienvenido a Equilibri! Muchas gracias por dedicarnos tu tiempo para esta tarea. 🙏

### Objetivo
En esta tarea, crearás una aplicación que consta de una API y una interfaz que llama a esa API y representa un gráfico.

El objetivo no es crear la aplicación más completa, sino comprender cómo resuelves los problemas y cómo codificas. Al entregar la aplicación, analizaremos tus soluciones, decisiones y proceso de pensamiento.

Te sugerimos no dedicar más de 2 horas, pero puedes dedicarle hasta un máximo de 3 horas. No te preocupes si te toma más tiempo. También puedes reducir el alcance de algunas partes de la tarea; eso depende de ti.

### Empezar
Este repositorio te ayudará a poner en marcha tu aplicación. Se ha configurado un backend, pero para el frontend puedes usar lo que quieras. Para Vue y React, sugerimos Vite, pero puedes usar otro. Cualquier stack que funcione.

### Instalar

Asegúrate de tener instalado Node 18 o superior.
Clona este repositorio y luego:
```bash
npm i
```

copia en `.env` la clave secreta que recibiste.

### Ejecutar
El proyecto se recarga automáticamente al cambiar el código. El backend se ejecuta en el puerto 5000.

```bash
npm start
```

### Ejecutar pruebas
Para ejecutar una prueba, el backend debe estar en ejecución (el código y las pruebas se recargan automáticamente al cambiar el código).
```bash
npm test
```

# Tareas
Lea todas las tareas con detenimiento para comprender el alcance completo de esta evaluación.

## Tarea 1: Crear una API que devuelva la emisión total por país y año
Para obtener los datos para esta nueva API, utilice la [API](https://data.footprintnetwork.org/#/api) ya configurada. Úsela de la siguiente manera:

```js
import footprintApi from './footprintApi'

// get all countries and their countryCodes
await footprintApi.getCountries()

// this will give you carbon data per year for that country
await footprintApi.getDataForCountry(countryCode)

```

El número de emisiones se representa en el json del país como carbon, este es el número que estás buscando.

Nota: hay límites de ejecución (desconocidos) en la API que deberás tomar en cuenta en tu código.


## Tarea 2: Escribir pruebas
Escriba pruebas para asegurarse de que su API funcione como se espera.

## Tarea 3: Crear un gráfico animado
Cree un gráfico según este ejemplo, pero ajústelo según el diseño de Figma. El gráfico itera por los años disponibles y muestra, para cada año, una lista de países ordenados por sus emisiones. Tenga en cuenta que algunos países no tienen datos para un año específico.
![https://miro.medium.com/max/1600/1*37uCN6y1WyLukxwCadhWRw.gif](https://miro.medium.com/max/1600/1*37uCN6y1WyLukxwCadhWRw.gif)

Obtén [este archivo Figma](https://www.figma.com/file/WJ1BvQzvFchIFxo67iIywi/Altruistiq-frontend-hiring-task) para comenzar.

La fuente utilizada es
```
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap')
```

Requisitos:
- Use componentes, DOM nativo o D3 para crear el gráfico.
- No uses bibliotecas: Ni de gráficos, css, componentes, animaciones ni caché. La idea es que demuestres tus habilidades codificando manualmente.
- El gráfico debe ser responsive, pruébelo cambiando el tamaño de la ventana.
- Calcular y mostrar las emisiones totales mundiales por año en la página (tal y como aparece en el figma).

# Entrega tu resultado
Proporciona un repositorio Git con tu código y envíanos la URL. Asegúrate de realizar los commits antes de la hora prevista.
