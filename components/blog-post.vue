<template>
<div class="col-lg-6">
    <div class="card card-list--hover shadow border-0">
        <div class="card-body py-5">
            <div class="post-container">
                <img
                    style="display: inline-block;"
                    :src="`/${post.attributes.image}`"
                    class="img-fluid shadow mb-5"
                />
            </div>

            <div class="content-container">
            <nuxt-link :to="`/${prefix}/${post.slug}`">
                <h6 :class="`text-${ct} display-4 text-uppercase`">
                    {{ post.attributes.title }}
                </h6>
            </nuxt-link>
         
            <div>
                <span v-for="tag in tags" v-if="tags.length > 0"
                    :class="`badge badge-pill badge-${ct}`">
                    {{ tag }}
                </span>
            </div>
            <nuxt-link :to="`/${prefix}/${post.slug}`">
                <div :class="`btn btn-${prefix} mt-4`">
                    View
                </div>
            </nuxt-link>
        </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    layout: 'arielle-cerini',
    name: 'blogpost',
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
.card{
    background: transparent; 
    border: 6px solid #172735; 

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

.post-container{
    height: 35vh;
    min-height: 220px; 
    overflow-y: clip;
}

</style>