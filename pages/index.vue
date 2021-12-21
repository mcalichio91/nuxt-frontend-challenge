<template>
  <div class="main-container">
    <div class="aside">
      <sideMenu />
    </div>
    <div class="header">
      <navMenu />
    </div>
    <div class="list">
      <CardCharacter />
    </div>
    <Modal />
  </div>
</template>

<script>

import CardCharacter from '../components/CardCharacter.vue'
import sideMenu from '../components/sideMenu.vue'
import navMenu from '../components/navMenu.vue'

export default {
  components: { CardCharacter, sideMenu, navMenu },
  }
</script>

<style lang="scss">
@mixin main-container-template {
  background-color: white;
  height: 100%;
  width: 100%;
  min-height: fit-content;
}

  * {
    padding: 0;
    margin:0;
    font-family: sans-serif;
  }

  

  .main-container {
    @include main-container-template();
    
    .aside {
      width: 5%;
      position: relative;
    }

    .list {
      width: 95%;
      position: relative;
      float: right;
    }

    .header {
      width: 95%;
      position: relative;
      float: right;
    }
  }

  /* Condicion breakpoint para la vista responsive */
    $breakpoint: 768px;

    @media (max-width: $breakpoint){
        .main-container .aside {
            display: none;
        }

        .main-container .aside,
        .main-container .list,
        .main-container .header {
          width: 100%;
        }
    }
  
</style>