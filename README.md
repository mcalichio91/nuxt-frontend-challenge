
# Talently Challenge

## Configuración

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

El reto tiene dos partes:

Primera parte:   
Crear un listado de personajes desde el API de Rick And Morty, el nombre del endpoint es `Get All Characters` y la documentación la puedes encontrar en el enlace: https://rickandmortyapi.com/documentation/#get-all-characters

Los datos que deberás mostrar en cada columna son:
- image : Foto del personaje (en el caso que no tenga foto se deberá mostrar una foto por default [como esta](https://user-images.githubusercontent.com/11076563/128429888-2e2c3104-c617-421f-826a-9782faab5106.png) 
- name: Nombre del personaje 
- status: estado del personaje
- species: especie del personaje
- gender: género del personaje
- created : fecha 
- url: esta columna abrirá una nueva pestaña. El label del link debe llamarse "Detalle" y el estilo del texto debe ser como "Manage" de la referencia)

 [Referencia Visual Desktop](https://user-images.githubusercontent.com/11076563/128431305-47488409-53b4-4a65-beb9-683e6133445e.png).    
 [Rerefencia Visual Mobile](https://user-images.githubusercontent.com/11076563/128381851-2aead969-90e5-491d-9daa-910bdee80a13.png).    
** Para la vista mobile sólo debe mostarse: image, name, specie y url.



Segunda parte:
Crear un formulario popup para agregar un nuevo personaje, el formulario debe contener los mismos campos que el listado desktop a excepción de la imagen.

Referencia del formulario
- [Referencia formulario desktop](https://user-images.githubusercontent.com/11076563/128381563-b9a6d6f8-097c-441a-adf9-376ea35700c2.png).    
- [Rerencia formulario Mobile](https://user-images.githubusercontent.com/11076563/128381629-ce4b6f53-2c15-49ce-bc9b-2e788c49557f.png)    

# Entregable o Expectativa del reto
- El reto tiene una duración de 72hrs (3 días) desde el momento que se recibe
- La limpieza y legibilidad del código será considerada.
- La validación del formulario será a criterio personal
- La eficiencia del código en cuestiones de rendimiento sumarán para esta prueba.
- Debe ser responsivo para desktop y mobile (1366 x 768) 
- Al finalizar el reto, enviar el enlace de la solución a emmanuel.barturen@talently.tech con copia a cristian@talently.tech con título "Reto Frontend- Talently 2021-08"

# Preguntas de conocimiento
** Agregar las respuestas en el correo
1. Cuál es la diferencia entre sync, await y los promesa nativas de js?
2. Cómo utilizas las injecciones en nuxt?
3. Qué hooks de nuxts implementaríamos en esta solución si quisieramos enviar una notificación al terminar de compilar?
4. Nombrame 3 escenarios donde podríamos usar middlewares para esta solución? 
