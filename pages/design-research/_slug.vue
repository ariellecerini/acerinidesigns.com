<template>
<section :class="`section pb-0 bg-gradient-${this.getClassType()}`">
  <div class="row row-grid">
    <div class="col">
      <div
        class="container card card-lift--hover shadow border-0 mt-5"
      >
      <div class="row">
        <h2 class="display-2 m-5">
          {{ post.attributes.title }}
        </h2>
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
  name: 'design-research',
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