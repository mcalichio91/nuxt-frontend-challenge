<template>
  <div class="nav-container">
      <nav>
          <img src="https://img.icons8.com/plasticine/100/000000/rick-sanchez.png" class="brand"/>
          <div class="user-options">
              <ul class="list-item">
                  <li class="item"></li>
                  <li class="item"></li>
                  <li class="item"></li>
              </ul>
          </div>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.nav-container {
    width: 100%;
    height: 180px;
    background: cornflowerblue;
    display: flex;
    align-items: center;
    nav img.brand {
        margin-left: 3rem;
        width: 80px;
        height: 80px;
    }
}


</style>