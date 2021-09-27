<template>
<div class="mod-wrapper">
        <!--Guidlines Slider Card Component-->
       <div class="module-container">
         
            <div class="project-slider">
                <div class="scrollCont">
            <!--Guidlines Card Component-->
                  <div class="rowNew">
                    <slidercard v-for="post in posts" v-bind:key="post.slug" :prefix="prefix" :post="post" :ct="post.attributes.category"
                    ></slidercard>
                                        <!-- :ct="getClassType()" -->

                  </div>
                </div>
            </div>
      </div>
</div>
</template>

<script>
import slidercard from '~/components/SliderCard.vue'

export default {
  layout: 'default',
  name: 'projectslider',
  components: {
    slidercard
  },
  props: {
    prefix: String,
    slug: String,
    posts: Array, 
    ct: String
  }
}
</script>

<style>

</style>

