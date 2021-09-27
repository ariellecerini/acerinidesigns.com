<template>

  <div class="rowNew">
    <div class="col">
      <div class="breadcrumbs">
             <a href='../' class="back-button btn" >Portfolio</a>
 /  <a href='../web-design' class="back-button btn" >Web Design Work</a>
 </div>

       <div
        class="container border-0"
        style="padding-top: 3%;"
      >
      <div class="row">
        <h2 class="display-2">
          {{ post.attributes.title }}
        </h2>
<!-- 
        <h3 class="display-2" style="display: block;">
          {{ post.attributes.category }}
        </h3> -->


        <h6 style="display: block; width: 100%;">
          {{ post.attributes.tags }}
        </h6>

         <p style="display: block; width: 100%;">
          {{ post.attributes.description }}
        </p>


        <!-- <a class="btn" :href="'${post.attributes.url}'" style="margin-left: 40px;
            margin-top: 10px;">View Website</a> -->


        <div
          class="card-body"
          v-html="post.html"
        />
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  layout: 'arielle-cerini',
  name: 'web-design',
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

.back-button{
  font-weight: 700;
  font-family: Helvetica;
  letter-spacing: 0.02em;
   font-size: 1em;
   background-color: transparent;
   color: rgb(255, 145, 149);

}
.breadcrumbs{
    align-self: flex-end;
    justify-self: right;
    /* display: inline-block; */
    margin: 0;
    left: 0;
    position: fixed;
    /* margin-left: auto; */
    transform: rotate(
270deg
);
        margin-top: 10%;
    margin-left: -7%;

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