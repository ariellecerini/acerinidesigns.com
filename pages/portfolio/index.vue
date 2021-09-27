<template>

 <div class="wrapper index-page">
        <div class="main">
            

        <!-- <section class="section-profile-cover"><div class="stagger-visualizer"></div><div class="stagger-visualizer" style="margin-left: 100px"></div></section> -->
        
               <!-- <svg version="1.1" width="1000px" height="800px" viewBox="0 10 1100 800" fill="none" stroke="#000"> -->
          
           
                  <div style="max-width: 1000px; margin: auto;">
                  <h3>Portfolio Work</h3>
                  <hr/>
                                 <plain-cards prefix="portfolo" :slug="slug" :posts="posts"></plain-cards>

                  <!-- <projectslider prefix="portfolo" :slug="slug" :posts="posts" /> -->
                 
                </div> 

   
            <!-- <div class="container">
               </div>
              <div class="section1">
              <div class="quote-section" id="left">
                <h2>A true designer is not limited by the tools and systems of the present; they, instead exist, almost simultaneously, in the past, present, and future.</h2>
                </div>
                </div>

                <div class="section1">

                 <div class="quote-section" id="right">
                <h2>Design is about more than mastery of tools and systems. Systems are fleating, the need for good design is not.</h2>
                </div>

           
                </div>  -->
               
                <!-- <div class="section1">
              
                </div>

                                <div id="background"><img id="placeHere"></div> -->

     
     </div> 

    </div>
</template>
<script>
// import projects from '~/data/artwork.json'
import PlainCards from '../../components/pages/components/Cards/PlainCards'


export default {
  layout: 'arielle-cerini..vue',
  components: {
    PlainCards
   
  },
  props: ['slug'],
  
  async asyncData() {
    const resolve = require.context('~/posts/', true, /\.md$/)
    const imports = resolve
      .keys()
      .map((key) => {
        const [, slug] = key.match(/\/(.+)\.md$/)
        return Object.assign(resolve(key), { slug })
      })
      .filter((post) => post.attributes.type == 'portfolio')
    return {
      posts: imports
    }
  }, 
   method: {
    sortProj(){
      
    }
  }
  
}
</script>

<style scoped>
h3{
    color: #013b6b;
    font-size: 1.4em;
    font-weight: bold;
    text-transform: uppercase;
    font-family: Space Grotesk, sans-serif;
    margin-bottom: 0;
}


</style>

 