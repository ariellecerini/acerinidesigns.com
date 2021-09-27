 
<template>
    <div class="col-md-6 col-lg-4">

        <card type="blog" plain>
            <!-- <img slot="image" class="img rounded img-raised" src="img/project13.jpg"> -->
            <img
                    style="display: inline-block;"
                    :src="`/${post.attributes.image}`"
                    class="img rounded img-raised"
                />
                <div class="card-body">
                 
                    <h5 class="card-title">
                        <!-- <nuxt-link :to="`/${prefix}/${post.slug}`"> -->
                            <h6 :class="`text-${ct} display-4 text-uppercase`">
                                {{ post.attributes.title }}
                            </h6>
                        <!-- </nuxt-link> -->
                        <!-- <a href="#nuk">Stay Focused: Train Your Brain</a> -->
                    </h5>

                    <h6 class="category text-warning">
                        <i class="now-ui-icons"></i>  <span v-for="tag in tags" v-if="tags.length > 0" style ="color: #ff9195; font-size: 0.8em; padding-right: 3%;">
                    {{ tag }}
                </span>
                    </h6>
                </div>
                <div class="card-footer">
                                <a :href = "`/portfolio/${post.attributes.category}/${post.slug}`">
                                <n-button type="default"  round>
                                    View Project
                                </n-button>
                                </a>
                            </div>
                                   

        </card>
    </div>
</template> 


<script>
import { Card, Button } from '@/components';
  export default {
    components: {
      Card,
      [Button.name]: Button
    },
     props: {
        post: Object,
        prefix: String,
        ct: String
    },
    computed: {
        tags () {
           return this.post.attributes.tags ? this.post.attributes.tags.split(',') : []
        }
    }
  
  }
</script>
<style scoped>
.card-title{
    margin-bottom: 0; 
}
.card-footer{
    margin-top: 0; 
}
</style> 