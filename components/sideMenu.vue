<template>
  <div class="main-container">
      <div class="items-container">
          <ul class="list-items">
              <li class="active">
                  <img src="https://img.icons8.com/carbon-copy/100/000000/rick-sanchez.png"/>
              </li>
              <li>
                  <img src="https://img.icons8.com/carbon-copy/100/000000/morty-smith.png"/>
              </li>
              <li>
                  <img src="https://img.icons8.com/carbon-copy/100/000000/summer-smith.png"/>
              </li>
              <li>
                  <img src="https://img.icons8.com/carbon-copy/100/000000/jerry-smith.png"/>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .main-container {
        height: 100%; 
        width: 80px; 
        position: fixed; 
        z-index: 1; 
        background-color: white;
        overflow-x: hidden;
        padding-top: 60px;
        transition: 0.5s;

        .items-container {
            position: fixed;
            display: flex;
            min-height: 100%;
            margin: auto;

            ul.list-items {
                margin-top: 7.4rem;
                display: flex;
                flex-direction: column;
                width: 80px;
                li {
                    padding: .33em;
                    display: flex;
                    justify-content: center;
                    transition: ease-in 0.3s;
                    margin: 0;
                    img {
                        width: 50px;
                        height: 50px;
                    }
                }

                li.active {
                    background: cornflowerblue;
                    border-left: 6px solid #002096;
                    width: 80px;
                    img {
                        filter: invert(1);
                    }
                }

                li:hover {
                    background: cornflowerblue;
                    border-left: 6px solid #002096;
                    width: 95px;
                    img:hover {
                        filter: invert(1);
                    }
                }
            }
        }
    }
</style>