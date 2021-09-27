<template>

    <div id="wrapper" class="d-flex flex-column">
      
        <header class="header-global">
            <app-header></app-header>
        </header>
        <main class="flex-fill position-relative">
        <div class="header">


            </div>  

        <div class="flexContainer">
        <div class="sidebar">
            <sidebar/>
            </div>  
            
        <div class="content">
        
           <nuxt />
             

            </div>
            </div> 

        </main>
        <!-- <img id="image1" src="image1.jpg"/> -->
    </div>
</template>

<script>
import sidebar from "~/components/arielle-cerini/sidebar";
import AppHeader from "~/components/arielle-cerini/AppHeader";

// import imageProcess from '~/plugins/image.js'
//import {$ctx} from 'vue-ctx';

export default {
  components: {
    sidebar,
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
.flexContainer{
display: flex;
flex-wrap: wrap;
}

/* .sidebar{
    order: 2; 
width: 32%; 
height: 90%; 
overflow-y: scroll; 
} */
.row .row-grid{
    margin: 0;
}
/* .content{
    order: 1; 
    flex-basis: 100%;
width: 66%; 
padding-left: 1%;
min-width: 300px; 
height: 90%; 
overflow-y: scroll;
} */

    .content{
flex: 3;
padding-left: 1%;
/* min-width: 300px;  */
height: 90%; 
overflow-y: scroll;

}

.sidebar{
flex: 1; 
height: 90%; 
overflow-y: scroll; 
}


@media (max-width: 600px) {
.flexContainer{
display: block;
}
.sidebar{
    order: 2; 
}
.content{
    order: 1; 
}


}


/* @media screen and (max-width: 600px) {
    .flexContainer{
        flex-direction: column;
    }
    .content{
    order: 1; 
padding-left: 1%;
flex-basis: 100%;
height: 90%; 
overflow-y: scroll;
}

.sidebar{
    order: 2; 
flex-basis: 100%;

height: 90%; 
overflow-y: scroll; 
}
} */

.navbar-transparent {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;
    /* background-color: #ff9195d4; */
    z-index: 300;
}

header{
    /* position: fixed;  */
    width: 100%
}

main{
    position: fixed; 
    overflow-y: hide; 
    margin-top: 10%;
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

/* body{
    background-image: url('../assets/back.gif');
    background-blend-mode: screen;
} */
</style>