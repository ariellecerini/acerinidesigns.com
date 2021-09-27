<template>

 <div style="max-width: 1000px; margin: auto;">
                  <h3>Website Design</h3>
                  <hr/>
                                 <plain-cards prefix="web-design" :slug="slug" :posts="posts"  ></plain-cards>

                  <!-- <projectslider prefix="portfolo" :slug="slug" :posts="posts" /> -->
                </div> 
  
</template>

<script>
import PlainCards from '../../../components/pages/components/Cards/PlainCards'

export default {
  layout: 'arielle-cerini',
  name: 'Website Design',
  components: {
    PlainCards,
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
      .filter((post) => post.attributes.category == 'web-design')
    return {
      posts: imports
    }
  }
   
}
</script>






