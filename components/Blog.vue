
<template>
<section :class="`section pb-0`">
  <div class="container">
    <div class="rowNew" v-for="i in Math.ceil(posts.length / 2)" :key="i">
      <blog-post v-for="post in posts.slice((i - 1) * 2, i * 2)" v-bind:key="post.slug" :prefix="prefix" :post="post" :ct="ct"></blog-post>
   <!-- :ct="getClassType()" -->
    </div>
  </div>
</section>
</template>

<script>
import PostCard from '~/components/blog-post.vue'

export default {
  layout: 'arielle-cerini',
  name: 'Blog',
  components: {
    PostCard
  },
  props: {
    prefix: String,
    slug: String,
    posts: Array, 
    ct: String
  }
}
</script>

<style scoped>
.container {
  margin-top: 6%;
  padding-bottom: 6%;
}
</style>