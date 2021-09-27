<template>
<section class="section">
  <div class="rowNew">
    <div class="col">
       <div class="breadcrumbs">
             <a href='../' class="back-button btn" >Portfolio</a>
 /  <a href='../web-design' class="back-button btn" >Graphic Design Work</a>
 </div>
      <div
        class="container border-0"
        style="padding-top: 3%;"
      >
        <div class="rowNew">
          <div class="flex-row" style="display: flex;">
              <div class="col-md-4 projectName">
                  <div class="projectTitle">
                  <h5 class="projectName">{{ post.attributes.title }}</h5>
                  <h6 class="client">{{ post.attributes.client }}</h6></div>
              </div>
              <div class="col-md-4 projSpecsMore">
                  <h6>Media</h6>
                  <p>{{ post.attributes.media }}</p>
                  <h6>Date Began</h6>
                    <p>{{ post.attributes.dateStart }}</p>
                  <h6>Date of Completion</h6>
                  <p>{{ post.attributes.dateEnd}}</p>

              </div>
          </div>
        </div>
      </div>
      <div class="container" v-for="cModule in cModules" v-bind:key="cModule.slug" :cModule="cModule" style="padding-top: 5%;">
        <h3> {{cModule.header}} </h3>
        <div class="shadow" v-if="`${ cModule.item }`== 'slider'" >
            <carouselCard v-for="content in cModule.inner" v-bind:key="content.slug" :content="content" />
          </div>

        <div v-if="`${ cModule.item }`== 'pdf'" >
            <div class="shadow" v-for="content in cModule.inner" v-bind:key="content.slug" :content="content">
                <a :href="content"><embed :src="content" class = "document-pdf" type="application/pdf"></a>
              </div>
          </div>

        <div v-if="`${ cModule.item }`== 'iframe'" SameSite="Strict">
            <div class="shadow" v-for="content in cModule.inner" v-bind:key="content.slug" :content="content">
               <iframe width="375" height="812" :src="content" frameborder="0" allowfullscreen></iframe>
              </div>
          </div>

        <div v-if="`${ cModule.item }`== 'buttonBoxes'" >
              <div class="flex-container">
                <div class="flex-div column" style="width: 100%; padding:0;" v-for="content in cModule.inner.contents" v-bind:key="content.slug" :content="content">
                    <button :id="content.class" type="button" class="btn btn-default action-button" style="width:100%; background-color: #fafafa;" :onclick="content.link"><div :class="content.class" :id="content.id"></div><h2 class="program_name" style="text-align:center;">COVID<b><span style="color: #990000;"><span style="padding-left:2px; padding-right: 2px; font-weight: 600;">{{content.text}}</span></span></b></h2>
                    </button>
                </div>
              </div>
          </div>

         <div v-if="`${ cModule.item }`== 'button'" >
                <div class="shadow" style="width: 100%; padding:0;" v-for="content in cModule.inner" v-bind:key="content.slug" :content="content">
                    <a :href="content.src" style="font-weight: 700; font-family: 'Helvetica'; letter-spacing: 0.02em; font-size: 1.2em;" class="btn" target="blank">{{content.text}}</a>
                </div>
        </div> 
          <div v-if="`${ cModule.item }`== 'image'" >
                <div class="shadow" v-for="content in cModule.inner" v-bind:key="content.slug" :content="content">
                    <img :src="content.src" style="width:100%;" />
                </div>
          </div> 


          <div v-if="`${ cModule.item }`== 'image-grid'" >
                <div v-for="content in cModule.inner.contents" v-bind:key="content.slug" :content="content">
                  <!-- <h4>{{content.header}}</h4> -->
                    <div class="rowNew flex-container" style="justify-content: space-between;">
                        <div :class="content.col"  v-for="image in content.images" v-bind:key="image.slug" :image="image">
                          <img
                              :src="image"
                              class="img-fluid shadow mb-5"
                          />
                        </div>
                      
                    </div>
                </div>
          </div> 



        <div
          class="card-body"
          v-html="post.html"
        />
      </div>
    </div>
  </div>
 
</section>
</template>

<script>
import carouselCard from '~/components/pages/components/CarouselSection.vue'

export default {
  layout: 'arielle-cerini',
  name: 'graphic-design',
  components: {
      carouselCard
    },
  async asyncData({ params }) {
    try {
      let post = await import(`~/posts/${params.slug}.md`)
      return {
        post
      }
    } catch (err) {
      return false
    }
  },
  computed: {
        cModules() {
          return this.post.attributes.cModules
        },
        tags () {
           return this.post.attributes.media ? this.post.attributes.media.split('|') : []
        }
    }
}
</script>


<style scoped>
p{
  font-size: 0.95em;
}

.card{
    background: transparent; 
    border: 6px solid #172735; 

}
.back-button{
  font-weight: 700;
  font-family: Helvetica;
  letter-spacing: 0.02em;
   font-size: 1em;
   background-color: transparent;
   color: rgb(255, 145, 149);

}
.breadcrumbs{
    align-self: flex-end;
    justify-self: right;
    /* display: inline-block; */
    margin: 0;
    left: 0;
    position: fixed;
    /* margin-left: auto; */
    transform: rotate(
270deg
);
        margin-top: 10%;
    margin-left: -10%;

}

.content-container{
    padding-left: 5%;
    padding-right: 5%;
}

.display-4{
    margin-top: 5px; 
    font-size: 1.45em;
    color: #172735; 
}
.display-4:hover{
color: #929eab; 
font-family: "Recursive"; 
font-variation-settings: 'MONO' 0.12, 'CASL' 0.56, 'wght' 440, 'slnt' 0, 'CRSV' 1;
}

.pb-5, .py-5{
    padding-bottom: 5.5% !important;
}

.photos {
  display: flex;
  background-color: #000;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
  padding: 0;
  max-width: 980px;
}
.colFour{
  background-color: transparent;
}

.colFour img{
  background-color: transparent;
}

@media screen and (min-width: 1120px) {
  .colTwo {
    width: calc(100%/2);
    padding: 2%;
  }
  .colThree {
    width: calc(100%/3);
    padding: 2%;
  }
  .colFour {
    width: calc(100%/4);
    padding: 2%;
  }
   main{
  padding-top: 0 !important;
}
}

@media screen and (min-width: 769px) and (max-width: 1120px) {
  .colTwo {
    width: calc(100%/2);
    padding: 2%;
  }
  .colThree {
    width: calc(100%/2);
    padding: 2%;
  }
  .colFour {
    width: calc(100%/4);
    padding: 2%;
  }
  main{
  padding-top: 0 !important;
}
  .breadcrumbs{
    align-self: flex-end;
    justify-self: right;
    /* display: inline-block; */
    margin: 0;
    left: 0;
    position: relative;
    /* margin-left: auto; */
    transform: none;
        margin-top: 0;
    margin-left: 0;
}
}

@media screen and (min-width: 481px) and (max-width: 768px) {
 .colTwo {
    width: calc(100%/1);
    padding: 2%;
  }
  .colThree {
    width: calc(100%/1);
    padding: 2%;
  }
  .colFour {
    width: calc(100%/2);
    padding: 2%;
  }

  .breadcrumbs{
    align-self: flex-end;
    justify-self: right;
    /* display: inline-block; */
    margin: 0;
    left: 0;
    position: relative;
    /* margin-left: auto; */
    transform: none;
        margin-top: 0;
    margin-left: 0;
}
main{
  padding-top: 0 !important;
}

}

@media screen and (min-width: 321px) and (max-width: 480px) {
  .colTwo{
    width: calc(100%/1);
    padding: 2%;
  }
  .colThree {
    width: calc(100%/1);
    padding: 2%;
  }
  .colFour {
    width: calc(100%/2);
    padding: 2%;
  }
main{
  padding-top: 10% !important;
}
  .breadcrumbs{
    align-self: flex-end;
    justify-self: right;
    /* display: inline-block; */
    margin: 0;
    left: 0;
    position: relative;
    /* margin-left: auto; */
    transform: none;
        margin-top: 0;
    margin-left: 0;
}
}

@media screen  and (max-width: 320px) {
  .colTwo {
    width: 100%;
    padding: 2%;
  }
  .colThree {
    width: calc(100%/1);
    padding: 2%;
  }
  .colFour {
    width: calc(100%/2);
    padding: 2%;
  }

main{
  padding-top: 10% !important;
}
  .breadcrumbs{
    align-self: flex-end;
    justify-self: right;
    /* display: inline-block; */
    margin: 0;
    left: 0;
    position: relative;
    /* margin-left: auto; */
    transform: none;
        margin-top: 0;
    margin-left: 0;
}
}




</style>