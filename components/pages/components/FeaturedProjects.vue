<template>
    <div class="section" id="carousel">
        <div class="container" style="width: 100%; max-width: 100%;">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div style="max-width: 1000px; margin: auto;">

                      <h3>Featured Works</h3>
                         <hr/>
                         </div>
                    <el-carousel height="800px">
                        <el-carousel-item class="carousel-item">
                             <div class="flex-row" style="">
                                <div class="proj-category">
                                        <h4 class="projectType">UI/UX Design<br/>
                                        <span class="projectCat">Design Research</span></h4>
                                    </div>
                                <div class="projectImage"> 
                                    <img src="HEALS/heals-primary-01.png
                                        " alt="HEALS Preview">
                                        </div>
                                        </div>
                                   <div class="container" style="padding-top: 4%; width: 95%; max-width: none;">
                  
                             <div class="flex-row">
                            
                                <div class="col-md-4 projectName">
                                <div class="projectTitle">
                                <h5 class="projectName">HEALS</h5>
                                <h6>RPI-IBM HEALS PROGRAM</h6></div>
                               
                                <div class="buttonContainer">
                                     <n-button type="default" onClick="location.href='http://acerinidesigns.com/portfolio/design-research/IBMHeals'" round>View project</n-button>
                                </div>
                                 </div>
                            <div class="col-md-4 projSpecs">
                                <h6>Media</h6>
                                <p>Design Thinking, Design Research, UI/UX Design, Front-End Dev.</p>
                                <h6>Date Began</h6>
                                <p>August 2020</p>
                                <h6>Date of Completion</h6> 
                                <p>May 2021</p>

                            </div>
                            <div class="col-md-4 projSpecs">
                                <h6>Description</h6>
                                   <p>Worked to develop a health application prototype with a team of researchers. Application designed for user testing and proof of concWept. Developed and executed design research methodology to aid in UI/UX design development.</p>

                            </div>
                        
                    </div>
                   
                  
                </div>
                      </el-carousel-item>
                            <el-carousel-item class="carousel-item">
                                <div class="flex-row">

                                    <div class="proj-category">
                                            <h4 class="projectType">UI/UX Design<br/>
                                            <span class="projectCat">Design Research</span></h4>
                                        </div>
                                    <div class="projectImage shadow"> 
                                        <img src="mortalityminder-01.png
                                            " alt="Mortality Minder Preview">
                                            </div>
                                            </div>
                                    <div class="container" style="padding-top: 4%;  width: 95%; max-width: none;">
                                        
                  
                        <div class="flex-row" style="display: flex;">
                            <div class="col-md-4 projectName">
                                <div class="projectTitle">
                                <h5 class="projectName">MortalityMinder</h5>
                                <h6>RPI Data Incites</h6></div>
                                <div class="buttonContainer">
                                     <n-button type="default" onClick="location.href='http://acerinidesigns.com/portfolio/design-research/MortalityMinder'" round>View project</n-button>
                                    </div>
                            </div>
                            <div class="col-md-4 projSpecs">
                                <h6>Media</h6>
                                <p>Design Thinking, Design Research, UI/UX Design</p>
                                <h6>Date Began</h6>
                                <p>SEPTEMBER 2019</p>
                                <h6>Date of Completion</h6> 
                                <p>MAY 2020</p>

                            </div>
                            <div class="col-md-4 projSpecs">
                                <h6>Description</h6>
                                   <p>Worked as a design consultant and CSS specialist on the award winning MortalityMinder web application.</p>

                            </div>
                        
                    </div>
                   
                  
                </div>
                      </el-carousel-item>

                   <el-carousel-item class="carousel-item">
                                <div class="flex-row">

                                    <div class="proj-category">
                                            <h4 class="projectType">Research & Dev.<br/>
                                            <span class="projectCat">Doctoral Dissertation</span></h4>
                                        </div>
                                    <div class="projectImage shadow"> 
                                        <img src="dp3_1.gif
                                            " alt="Digital penmanship type that responds to you">
                                            </div>
                                            </div>
                                    <div class="container" style="padding-top: 4%;  width: 95%; max-width: none;">
                                        
                  
                        <div class="flex-row" style="display: flex;">
                            <div class="col-md-4 projectName">
                                <div class="projectTitle">
                                <h5 class="projectName">Digital Penmanship</h5>
                                <h6>Doctoral Research</h6></div>
                                <div class="buttonContainer">
                                     <n-button type="default" onClick="location.href='https://digitalpenmanship.com'" target="_blank" round>View project</n-button>
                                    </div>
                            </div>
                            <div class="col-md-4 projSpecs">
                                <h6>Code Specifications</h6>
                                <p>React/Redux using Typescript<br/>Express Server</p>
                                <h6>Libraries Used</h6>
                                 <p>D3, math.js, draft-js, styled-components, StoryBook, Webpack, lodash, axios, etc.</p>
                                <h6>API Configurations</h6>
                                <p>MongoDB<br/>Pubnub for secure message sending</p>
                                <h6>Date of Completion</h6> 
                                <p>Schedule for completion July 2021</p>

                            </div>
                            <div class="col-md-4 projSpecs">
                                <h6>Description</h6>
                                   <p>Digital Penmanship is a technology that I have been working on for the last 2+ years as part of my doctoral dissertation. The application maps a user's keystroke dynamics to a variable font in an effort to create space for the non-verbal within text-based communication systems.</p>

                            </div>
                        
                    </div>
                   
                  
                </div>
                      </el-carousel-item>
                       
                    </el-carousel>

                 
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    import { Carousel, CarouselItem } from 'element-ui'
    import {Button} from '@/components';
  export default {
    components: {
      [Carousel.name]: Carousel,
      [Button.name]: Button,
      [CarouselItem.name]: CarouselItem
    }
  }
</script>
<style scoped>
.projectImage{
    text-align: right; 
    width: 60%;
    min-width: 300px;
    flex-shrink:0; 
}

.flex-row{
    display: flex; 
    width: 100%; 
    justify-items: space-between; 
    vertical-align: top; 
    flex-wrap: wrap;
    place-content: flex-end space-between;
      max-width: 1160px; 
      padding: 0 2%; 

    /* align-content:; */
}

img{
    width: 100%; 
    /* max-width: / */
}

h3{
    margin-bottom: 0; 
}

h6{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
    font-weight: bold; 
    font-size: 1.0em;

}

.buttonContainer{
    padding-top: 10%; 
}

h5{
    color: #ff9195;
   
    font-weight: bold; 
    font-family: Space Grotesk, sans-serif;
    margin-bottom: 0;
}

h3{
    color: #013b6b;
    font-size: 1.4em;
    font-weight: bold;
    text-transform: uppercase;
    font-family: Space Grotesk, sans-serif;
    margin-bottom: 0;
}
div.proj-category{
    width: 20%; 
    padding-top: 7%;
}

div.proj-category h4{
    text-transform: uppercase; 
    text-align: right;
    -webkit-transform: rotate(270deg);
           transform: rotate(270deg);
    
}
.projectName{
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 1.3em;
}

@media only screen and (max-width: 960px) {
div.proj-category {
   display:none;
}
 div.proj-category h4{
    text-transform: uppercase; 
    text-align: right;
    width: 100%; 
 
    -webkit-transform: rotate(360deg);
           transform: rotate(360deg);
    
}
.col-12 {
margin-top: 5%; 
}

.projSpecs{
    display: none;
}
.projectTitle{
    flex-basis: 100%/2;
}

.buttonContainer{
    flex-basis: 100%/2;
}


.flex-row{
    flex-direction: column; 
    -ms-flex-direction: column;
}
.projectImage{
    width: 100%; 
}
}


p{
    font-size: 0.95em; 
}
h4.projectType{
font-size: 1.5em;
}
</style>
