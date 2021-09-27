<template>
  <div>
    <h1 style="text-align: center; font-size: 3.0;">Email Design / Coding</h1>

    <exhibit prefix="email-design" :slug="slug" :posts="posts"/>
              <img id="image1" src="image1.jpg"/>

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