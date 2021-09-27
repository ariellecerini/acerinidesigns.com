<template>
    <div class="section" id="carousel">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <el-carousel height="550px">
                        <el-carousel-item class="carousel-item" 
                        v-for="slide in slides" 
                        v-bind:key="slide.slug"
                        >
                        <div style="height: max-content">
                            <img class="d-block" 
                            :src="`${slide.image}`" 
                            alt="First slide">
                            <div class="carousel-caption d-none d-md-block">
                                <h5 style="font-size: 1.2em;">{{slide.desc}}</h5>
                            </div>
                            </div>
                        </el-carousel-item>
                       
                       
                    </el-carousel>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
  import { Carousel, CarouselItem } from 'element-ui'

  export default {
    components: {
      [Carousel.name]: Carousel,
      [CarouselItem.name]: CarouselItem
    },
    name: 'carouselCard',
    props: {
        content: Object,
    },
    computed: {
      slides() {
          return this.content
        }
    }
  }
</script>
<style>
</style>
