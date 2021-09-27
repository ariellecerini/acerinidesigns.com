<template>
    <section class="projectFooter">
        <div class="details-holder">
            <div class="title-section">
                <h3>{{ post.attributes.title }}</h3>
                <h5>{{ post.attributes.client }}</h5>
            </div>

            <div class="details"> 
                <div class="details-item" id="media">
                    <p><b>Media:</b></p>
                    <p>
                    {{ post.attributes.media }}
                    </p>
                </div> 

                <div class="details-item" id="date">
                    <p><b>Date Began:</b></p>
                    <p>
                    {{ post.attributes.startdate }}</p>
                </div> 

                <div class="details-item" id="date">
                    <p v-if="Date.now() < new Date({post.attributes.enddate})"><b>Expected Date of Completion:</b></p>
                    <p v-if="Date.now() > new Date('2020-01-01')">Date of Completion</p>
                    {{ post.attributes.enddate }}
                </div> 
            </div>

            <div class="description">
                <p><b>Description</b></p>
                <p>{{post.attribbutes.description}}</p>
            </div>    
        </div>
    </section>
<template> 


<script>
    
export default {
name: 'projectDesc',
props: {
    prefix: String,
    slug: String,
    posts: Array
  },
mounted(){
    var date1 = new Date(); 
    var date2 = new Date(2019 - 08 - 03); 
    var result = (date1.getTime() >= date2.getTime())?'completed':'true';
    console.log( result );
}
}
</script>