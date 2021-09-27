<template>
    <div class="section section-plain-cards">
        
            <!--     *********    PLAIN BLOG CARDS      *********      -->
            <client-only>
              <div class="row">
                    <pcard v-for="post in posts" v-bind:key="post.slug" :prefix="prefix" :post="post" :ct="post.attributes.category"/>
                   
                </div>
            </client-only>
                
            </div>
        </div>
        <!--     *********    END PLAIN BLOG CARDS      *********      -->
       
   
</template>
<script>
    import pcard from './pcard'; 
  export default {
    components: {
      pcard
    },
     props: {
    prefix: String,
    slug: String,
    posts: Array, 
  }
  }
</script>
<style>
</style>
