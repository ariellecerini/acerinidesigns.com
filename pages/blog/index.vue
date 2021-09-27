<template>
  <div>
    <blog prefix="blog" :slug="slug" :posts="posts" />

  </div>
</template>

<script>
import Blog from '~/components/Blog.vue'

export default {
  name: 'Blog',
  layout: 'arielle-cerini',

  components: {
  Blog
  },
  props: ['slug'],
  async asyncData() {
    const resolve = require.context('~/blog/', true, /\.md$/)
    const imports = resolve
      .keys()
      .map((key) => {
        const [, slug] = key.match(/\/(.+)\.md$/)
        return Object.assign(resolve(key), { slug })
      })
      .filter((post) => post.attributes.category == 'blog')
    return {
      posts: imports
    }
  }
}
</script>