<template>
  <div class="modal-main-wrapper" v-if="toggle">
      <div class="modal-content-wrapper">
        <div class="modal-title">
            <div class="title">Crear nuevo personajea continuación</div>
            <span @click="toggle = !toggle"></span>
        </div>
        <div class="modal-body">
            <div class="row">
                <p>Utiliza el formulario a continuacion para crear un personaje nuevo. Have Fun!</p>
            </div>
            <div class="row">
                <div class="column">
                    <label for="character-name">Escribe el nombre de tu personaje</label>
                    <input name="character-name" v-model="newCharacter.name" type="text" class="custom-input" placeholder="Nombre del personaje">
                </div>
                <div class="column">
                    <label for="character-status">Asigna el status del personaje</label>
                    <select name="character-status" v-model="newCharacter.status" id="character-status" class="custom-input">
                        <option value="Alive" selected>Alive</option>
                        <option value="Death">Death</option>
                        <option value="Unknown">Unknown</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <label for="character-species">¿ A que especie pertenece ?</label>
                    <select name="character-species" v-model="newCharacter.species" id="character-species" class="custom-input">
                        <option value="Human" selected>Human</option>
                        <option value="Alien">Alien</option>
                        <option value="Unknown">Unknown</option>
                    </select>
                </div>
                <div class="column">
                    <label for="character-gender">¿ Cual es su genero ?</label>
                    <select name="character-gender" v-model="newCharacter.gender" id="character-gender" class="custom-input">
                        <option value="Male" selected>Male</option>
                        <option value="Female">Female</option>
                        <option value="Unknown">Unknown</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <label for="character-created">¿ Cuando es su cumpleaños ?</label>
                    <input name="character-created" v-model="newCharacter.created" type="date" class="custom-input" default="01/01/2021">
                </div>
                <div class="column">
                    <label for="character-url">Asigna la url de tu personaje</label>
                    <input name="character-url" v-model="newCharacter.url" type="text" class="custom-input" placeholder="Url del personaje">
                </div>
            </div>
        </div>
        <div class="modal-actions">
            <button class="save-action" @click="saveNewCharacter">Guardar</button>
        </div>
      </div>
  </div>
</template>

<script>
import defaultimg from '@/static/images/default.png'

export default {
    data() {
        return {
            img: defaultimg,
            toggle: false,
            newCharacter: []
        }
    },
    computed: {
        modalToggle() {
            //Evento toggle aca se recibe el dato necesario para manejar el modal desde ambos componentes
            this.$nuxt.$on('toggle', (data) => {
                this.toggle = data
            })
        }
    },
    methods: {
        saveNewCharacter () {
            this.newCharacter.image = this.img; // Añado al array la imagen por defecto
            let newCharacter = this.newCharacter; // Igual la variable con el dato original a una del alcance de la funcion


            this.$nuxt.$emit('newcharacter', newCharacter) //Creo el evento que se encargara de hacer el delivery dela informacion
            this.toggle = false // Cierro la ventana
            this.newCharacter = [] // Limpio el array original para que no vuelvan a aparecer los datos al abrir la ventana
        }
    },
    mounted() {
        this.modalToggle // Inicialico el evento de escucha
    }
}
</script>

<style lang="scss" scoped>
@mixin row () {
    width: 100%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    padding: 0 .66em;
    flex-direction: row;
    flex: 1 1;
}


@mixin column() {
    display: flex;
    flex: 1 1;
    flex-direction: column;
    margin: .33em;
}

@mixin custom-input() {
    background-color: rgb(223, 223, 223);
    width: 100%;
    height: 50px;
    padding: 0 .33em;
    border-radius: 10px;
    border: 1px solid lightgray;
}

/* Condicion breakpoint para la vista responsive */
$breakpoint: 768px;

@media (max-width: $breakpoint){
    .row {
        flex-direction: column!important;
    }

    .modal-main-wrapper {
        position: inherit;
    }

    .modal-main-wrapper .modal-content-wrapper {
        height: 1000px!important;
        top: 0!important;
        bottom: auto!important; 
        margin: 0!important;
    }
}

.modal-main-wrapper {
    position: fixed;
    z-index: 999;
    height: 100%;
    width: 100%;
    background: rgba($color: #000000, $alpha: 0.5);

    .modal-content-wrapper {
        position: absolute;
        top: 0; 
        left: 0; 
        bottom: 0; 
        right: 0;
        margin: auto;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        max-height: 100vh;
        background-color: rgb(238, 238, 238);

            /* Inicio del modal-title*/
            .modal-title {
                width: 100%;
                height: 10%;
                display: flex;
                flex: 1 1;
                align-items: center;
                background-color: white;
                border-bottom: 1px solid lightgray;

                .title {
                    margin-left: .66em;
                    font-size: 24px;
                    font-weight: 600;
                }

                span {
                    margin-left: auto;
                    padding: 0 1em;
                }
                span::after {
                    content: "X";
                    font-size: 2em;
                    color: black;
                    cursor: pointer;
                }
            }
            /* Fin del modal-title*/

            /* Inicio del modal-body*/
            .modal-body {
                width: 100%;
                height: 80%;
                padding: 2rem 0;
                background-color: white;
                margin: auto;

                .row{
                    @include row();

                    .column {
                        @include column();

                        .custom-input {
                            @include custom-input()
                        }
                    }
                }
            }
            /* Fin del modal-body*/

            /* Inicio del modal actions */
            .modal-actions {
                width: 100%;
                height: 10%;
                display: flex;
                border-top: 1px solid lightgray;
                justify-content: flex-end;
                background-color: white;

                .save-action {
                    margin: auto 10px;
                    width: 200px;
                    height: 50px;
                    line-height: 1;
                    border-radius: 10px;
                    background: rgb(0, 177, 0);
                    color: white;
                }
            }
            /* Fin del modal actions */
    }
}
</style>