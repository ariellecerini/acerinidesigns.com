<template>
  <div>
    <exhibit prefix="email-design" :slug="slug" :posts="posts" />
  </div>
</template>

<script>
import Exhibit from '~/components/Exhibit.vue'

export default {
  layout: 'arielle-cerini',
  name: 'Email Design',
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
      .filter((post) => post.attributes.category == 'email-design')
    return {
      posts: imports
    }
  }
}
</script>