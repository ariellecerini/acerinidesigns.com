<template>
  <div class="container border">
    <div class="d-flex justify-content-center" id="p5Canvas"></div>
  </div>
</template>

<script>
import Exhibit from '~/components/Exhibit.vue'

export default {
  layout: 'arielle-cerini',
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
    return {
      posts: imports
    }
  },
  methods: {
   Particle(x, y, targetX, targetY, maxForce, s, b) {
  
  this.pos = new p5.Vector(x, y);
  this.vel = new p5.Vector(0, 0);
  this.acc = new p5.Vector(0, 0);
	this.target = new p5.Vector(targetX, targetY);
  this.maxForce = maxForce * random(0.8, 1.2);
	this.sat = s;
	this.bright = b;
  
  this.move = function() {
    let distThreshold = 20;
    
    let steer = new p5.Vector(this.target.x, this.target.y);
    let distance = dist(this.pos.x, this.pos.y, this.target.x, this.target.y);
		if (distance > 0.5) {
			steer.sub(this.pos);
			steer.normalize();
			steer.mult(map(min(distance, distThreshold), 0, distThreshold, 0, this.maxForce));
			this.acc.add(steer);
		}
    
		let mouseDistance = dist(this.pos.x, this.pos.y, mouseX, mouseY);
		if (mouseDistance < repulsionRadius) {
			let repulse = new p5.Vector(this.pos.x, this.pos.y);
			repulse.sub(mouseX, mouseY);
			repulse.mult(map(mouseDistance, 100, 0, 0, 0.5));
			this.acc.add(repulse);
		}
		
    this.vel.mult(0.95);
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  
  this.display = function() {
    strokeWeight(1);
    stroke(0, 100);
    line(this.target.x, this.target.y, this.pos.x, this.pos.y);
    
    strokeWeight(6);
    stroke(140, this.sat, this.bright);
    point(this.pos.x, this.pos.y);
  }
}
  },
 mounted() {   
    const script = function (p5) {    
    var count = 500;
    var spacing = 6;
    var repulsionRadius = 100;
    var particles = [];

    // NOTE: Set up is here   
    p5.setup = _ => {      
        p5.createCanvas(500, 500);      
        p5.ellipse(p5.width / 2, p5.height / 2, 500, 500);    
        }     
    // NOTE: Draw is here
    p5.draw = _ => {      
        p5.background(0);
    //     for (let i = 0; i < particles.length; i++) {
	// 	particles[i].move();
	// 	particles[i].display();
	// }
        const degree = p5.frameCount * 3;      
        const y = p5.sin(p5.radians(degree)) * 50;
    
        p5.push();
        p5.translate(0, p5.height / 2);
        p5.ellipse(posX, y, 50, 50);
        p5.pop();
        posX += speed;
      
        if (posX > p5.width || posX < 0) {    
            speed *= -1;      
        }

        
    }  
 }   
 // NOTE: Use p5 as an instance mode
 const P5 = require('p5');
 new P5(script)
}
}
</script>
<style>

</style>
 