<template>
  <div>
      <div class="characters-row-container">

          <div class="card-row-action">
            <div class="title"><h1>List of Rick & Morty Characters</h1></div>
            <div class="button">
                <button @click="showModal"> 
                    + Nuevo
                </button>
            </div>
          </div>

          <ul class="card-row-titles">
                <li class="character-img-title"></li>
                <li>
                    <p>Name</p>
                </li>
                <li>
                    <p>Specie</p>
                </li>
                <li class="character-img-gender">
                    <p>Gender</p>
                </li>
                <li class="character-created-title">
                    <p>Created</p>
                </li>
                <li>
                    <p>Url</p>
                </li>
          </ul>

          <ul class="card-row-items" v-for="(character, key) in characters" :key="key">
                <li class="character-img">
                      <img :src="character.image">
                </li>
                <li class="character-data">
                    <p>
                        <strong>{{character.name}}</strong>
                    </p>
                    <p id="character-status">{{character.status}}</p>
                </li>
                <li class="character-specie">
                    <p>{{character.species}}</p>
                </li>
                <li class="character-gender">
                    <p>{{character.gender}}</p>
                </li>
                <li class="character-created">
                    <p>{{character.created.slice(0,10)}}</p>
                </li>
                <li class="character-url">
                    <a :href="character.url" target="_blank">Detalle</a>
                </li>
          </ul>
      </div>
    <Modal />
  </div>
</template>

<script>
import Modal from '../components/Modal.vue'
export default {
 name: "card-characters",
 components: {Modal},
 data() {
     return {
         characters: [],
         toggle: false
     }
 },
 methods: {
     showModal() {
         let data = true;
         this.$nuxt.$emit('toggle', data)
     }
 },
 created() {
     this.$axios.$get('https://rickandmortyapi.com/api/character').then((response) => {
         
         /* asignacion de la respuesta de la API y limitacion del alcance de esta a solo dentro de la funcion*/ 

         let res = response;

         /* Para evitar la persistencia de las propiedades que no se van a utilizar y reducir el costo por iteracion en el futuro. 
         creo un array nuevo a partir de la respuesta con el metodo map de manera implicita con solo aquellas propiedades requeridas y asi adicionalmente 
         no tocar el array de respuesta original. */

         this.characters = res.results.map(mapresponse => ({
             image:mapresponse.image , 
             name:mapresponse.name, 
             status:mapresponse.status,
             species:mapresponse.species,
             gender:mapresponse.gender,
             created:mapresponse.created,
             url:mapresponse.url
            }))


        })

        // Inicializo el evento newcharacter a la espera de datos
        this.$nuxt.$on('newcharacter', (data) => {
             this.characters.unshift(data)
        })
    }
}
</script>

<style lang="scss" scoped>
$card-background: rgb(243,246,252);

@mixin card-row {
    width: 100%;
    max-width: 1366px;
    display: flex;
    flex:  1 1;
    flex-direction: row;
    padding: .5em;
    margin: 0 auto;
    background-color: #f4f6fc;
}

@mixin card-li-item ($background: white, $margin: .20em 0, $height: 80px) {
    display: flex;
    flex: 1;
    flex-direction:row;
    align-items: center;
    padding: 1em;
    width: 100%;
    height: $height;
    margin: $margin;
    background: $background;
}

/* propiedades del main wrapper */
.characters-row-container {
    padding-top: 3rem;
    width: 100%;
    min-height: 100%;
    background-color: $card-background;

/*Estilo de la seccion titulo y boton agregar nuevo */
    .card-row-action {
        
        @include card-row();
        align-items: center;
        .title {
            margin-right: auto;
            font-size: 24px;
            font-weight: 600;
            color: gray;

        }
        .button button {
            margin-left: auto;
            padding: .33em .5em;
            width: 150px;
            background: #2f5bff;
            color: white;
            text-align: center;
            border-radius: 10px;
            font-size: 18px;
        }

        .button button:hover {
            background: #587cff;
        }

    }

/* Estilo de los titulos del listado */
    ul.card-row-titles {
        @include card-row();

        li {
            @include card-li-item($background: transparent, $margin: 0, $height: 20px);

            p {
                width: 100%;
                text-align: left;
                font-size: 14px;
                color: lightslategray;
            }
        }

        li.character-img-title {
            max-width: 80px;
        }
    }

/* Estilo de  cada uno de los card */
    ul.card-row-items {
        @include card-row();
        li {
            @include card-li-item();
            a {
                color: #1544ff ;
                font-weight: 600;
            }
        }
        li.character-img {
            max-width: max-content;
            img {
                width:50px;
                height: 50px;
                border-radius: 50px;
            }
        }
        li.character-data {
            width: 100%;
            flex-direction: column;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            p {
                width: 100%;
                max-width: 300px;
                margin: auto;
                strong {
                    max-width: 100%;
                    text-align: left;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
}

/* Condicion breakpoint para la vista responsive */
$breakpoint: 768px;

@media (max-width: $breakpoint){
    .characters-row-container ul.card-row-titles li.character-img-gender,
    .characters-row-container ul.card-row-titles li.character-created-title,
    .characters-row-container ul.card-row-titles li.character-img-gender,
    .characters-row-container ul.card-row-items li.character-created,
    .characters-row-container ul.card-row-items li.character-data p#character-status,
    .characters-row-container ul.card-row-items li.character-gender {
        display: none;
    }

    .characters-row-container {
        padding: 1em;
    }
}

</style>
