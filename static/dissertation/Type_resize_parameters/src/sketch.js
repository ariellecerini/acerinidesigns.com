
var contents = ""; //string of text
var out = 8; //font size
var x = 50; //x- location
var y = 0; //y- location
var h = 50; //line-height

var rate = 0; //speed of typing
var total = 0; //total characters
var variance = 0; //change in font size

var letter; //character being typed
var t0 = performance.now(); //start time

var pass =0; //time passed



function setup() {
  createCanvas(800, 800);
    background(50);

}
function draw() {
  fill(255);
  textSize(out);
  rate = (total/s);

}


function keyReleased(){
  total = total +1; 
  var t1 = performance.now();

  //text(t0 - t1, x, y, 300, 300);

  pass = t1 - t0; 

  rate = (total/pass);
  


  variance = (rate)*1000;
  out = 8 + variance; 
  contents = key;
  
  letter = key; 


  if (x>750){
    x=50;
    h = h + 15;
  } else{
  x=x+out;
   h = h;
  }

  //y = h - (out-6); 
  y = y +20; 
  text(letter, 20, y, 300, 300);//key pressed
  text(t0, 50, y, 300, 300);//time at start
  text(t1, 100, y, 300, 300);//time at key press 
  text(pass, 210, y, 300, 300);//time passed
  text(total, 310, y, 300, 300);//total number of keys typed 
  text (rate, 370, y, 300, 300);//rate of typing
  text(variance, 510, y, 300, 300);//variance in font size
  text(out, 700, y, 300, 300);//variance in font size

 
}


