<template>
<section :class="section">
  <div class="rowNew">
    <div class="col">
      <div
        class="container border-0"
        style="padding-top: 3%;"
      >
      <div class="row">
        <h2 class="display-2">
          {{ post.attributes.title }}
        </h2>
        <h6 style="display: block; width: 100%;">
          {{ post.attributes.tags }}
        </h6>

         <p style="display: block; width: 100%;">
          {{ post.attributes.description }}
        </p>

        <div
          class="card-body"
          v-html="post.html"
        />
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>

export default {
  layout: 'arielle-cerini',
  name: 'artwork',
  async asyncData({ params }) {
    try {
      let post = await import(`~/posts/${params.slug}.md`)
      return {
        post
      }
    } catch (err) {
      return false
    }
  }
}
</script>

<style scoped>
.container .card .card-lift--hover .shadow .border-0 .mt-5{
  border: none; 
  margin-top: 15% !important;
  padding: 0 !important;
}
.card-body{
    padding: 0 !important;

}

.m-5{
  padding: 0 !important; 
  padding-bottom: 3% !important;  
  margin: 0;
}

.display-2{ 
    color: #013b6b;
    font-size: 1.8em;
}
</style>