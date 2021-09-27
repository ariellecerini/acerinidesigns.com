<template>
  <div>
    <exhibit prefix="web-design" :slug="slug" :posts="posts" />
  </div>
</template>

<script>
import Exhibit from '~/components/Exhibit-web.vue'

export default {
  layout: 'arielle-cerini',
  name: 'Print Materials',
  components: {
    Exhibit
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
      .filter((post) => post.attributes.category == 'print-materials')
    return {
      posts: imports
    }
  }
}
</script>