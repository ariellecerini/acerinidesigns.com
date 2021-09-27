<template>
<section class="section">
  <div class="rowNew">
    <div class="col">
      <div class="breadcrumbs">
             <a href='../' class="back-button btn" >Portfolio</a>
 /  <a href='../design-research' class="back-button btn" >Design Research Work</a>
 </div>
      <div
        class="container border-0"
        style="padding-top: 3%;"
      >
        <div class="row">
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
              <div class="col-md-4 projSpecsMore">
                  <h6>Description</h6>
                      <p>{{ post.attributes.description }}</p>
              </div>
          
          </div>
        </div>
      </div>

      <div class="container" style="padding-top: 5%;">
             <img :src="post.attributes.featuredImage" /> 
        </div>


      <div class="container" v-for="cModule in cModules" v-bind:key="cModule.slug" :cModule="cModule" style="padding-top: 4%;">
        <h3 style="margin-bottom: 5%;"> {{cModule.header}} </h3>
        <div class="shadow" v-if="`${ cModule.item }`== 'slider'" >
            <carouselCard v-for="content in cModule.inner" v-bind:key="content.slug" :content="content" />
          </div>

        <div v-if="`${ cModule.item }`== 'pdf'" >
            <div class="shadow" v-for="content in cModule.inner" v-bind:key="content.slug" :content="content">
                <a :href="content"><embed :src="content" class = "document-pdf" type="application/pdf"></a>
              </div>
          </div>

        <div v-if="`${ cModule.item }`== 'iframe'" SameSite="Strict">
            <div style="width: fit-content; margin: auto;":class="content.class" v-for="content in cModule.inner" v-bind:key="content.slug" :content="content">
               <iframe style="padding-top: 0;" :src="content" frameborder="0" allowfullscreen></iframe>
              </div>
          </div>

        <div v-if="`${ cModule.item }`== 'buttonBoxes'" >
              <div class="flex-container">
                <div class="flex-div column" style="width: 100%;" v-for="content in cModule.inner.contents" v-bind:key="content.slug" :content="content">
                    <button :id="content.class" type="button" class="btn btn-default action-button" style="width:100%; background-color: #fafafa;" :onclick="content.link"><div :class="content.class" :id="content.id"></div><h2 class="program_name" style="text-align:center;">COVID<b><span style="color: #990000;"><span style="padding-left:2px; padding-right: 2px; font-weight: 600;">{{content.text}}</span></span></b></h2>
                    </button>
                </div>
              </div>
          </div>

         <div v-if="`${ cModule.item }`== 'button'" >
                <div style="width: 100%; padding:0;" v-for="content in cModule.inner" v-bind:key="content.slug" :content="content">
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

           <div v-if="`${ cModule.item }`== 'pdf-grid'" >
                <div v-for="content in cModule.inner.contents" v-bind:key="content.slug" :content="content">
                  <!-- <h4>{{content.header}}</h4> -->
                    <div class="rowNew flex-container" style="justify-content: space-between;">
                      <div :class="content.col" v-for="image in content.images" v-bind:key="image.slug" :image="image">
                        <a :href="image"><embed :src="image" style="padding-top: 0; padding-bottom: 0;" class = "document-pdf" type="application/pdf"></a>
                      </div>
                    </div>
                </div>
          </div> 

        
      </div>
    </div>
  </div>
 
</section>
</template>

<script>
import carouselCard from '~/components/pages/components/CarouselSection.vue'

export default {
  layout: 'arielle-cerini',
  name: 'design-research',
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

.pb-5, .py-5{
    padding-bottom: 5.5% !important;
}

#carousel{
  background: white; 
}
.breadcrumbs {
    position: fixed;
    transform: rotate(
270deg
);
    margin: 10% 0 0 -10%;
}

</style>
