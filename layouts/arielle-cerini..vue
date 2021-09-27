<template>
    <div class="bodyOverlay">

    <div id="wrapper" class="d-flex flex-column">
      
            <header class="header-global">
                <app-header></app-header>
            </header>
            <main class="flex-fill position-relative">
            <nuxt />
                

            </main>
            <!-- <img id="image1" src="image1.jpg"/> -->
        </div>
    </div>
</template>

<script>
import AppHeader from "~/components/arielle-cerini/AppHeader";

//import {$ctx} from 'vue-ctx';

export default {
  components: {
    AppHeader
  }
//   mounted() {   
//      var imageData = [];
//      let m =  document.getElementById("image1"); 
//      imageData.push({
//          src: m.src, 
//          width: m.width
//      });
//      console.log(imageData);
//      let newImg = new Image();
//      var imgData= this.imageProcess(imageData, 0);
//     m.remove();
// }
}
</script>
<style>
.navbar-transparent {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;
    /* background-color: #ff9195d4; */
    z-index: 300;
}

header{
    position: fixed; 
    width: 100%
}
img {
    max-width: 100%;
}
.card-body {
    max-width: 100%;
}

.company-name {
    font-weight: 800;
}

.main{
    background: transparent; 
    background-color: transparent; 
}
</style>