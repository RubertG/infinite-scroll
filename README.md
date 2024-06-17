# Scroll infite 

El scroll infinito es una funcionalidad utilizada para tener un dezplazamiento infinito de contenido. A medida que el usuario desplaza la pantalla, el contenido se va cargando poco a poco.

## Ejemplo

En la siguiente aplicación se muestra un desplazamiento infinito de personajes de la serie de Rick and Morty utilizando su API. Cada vez que el usuario desplaza la pantalla y va llegando al final de la lista, se cargan 20 personajes más.

## Como se desarrolló

Al obtener la lista de personajes, se le coloca un observador al último elemento de la lista. Cada vez que el usuario desplaza la pantalla y va llegando al final de la lista donde está este elemento con el observador, se cargan 20 personajes más, se elimina el observador que tenia el elemento y se le coloca un nuevo al nuevo elemento final de la lista. 

Este proyecto esta construido con [React](https://reactjs.org/) y [Vite](https://vitejs.dev/). Para ver el proyecto en tiempo real, [vea el repositorio](https://github.com/RubertG/infinite-scroll)