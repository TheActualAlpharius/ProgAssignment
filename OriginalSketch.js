var x, y, num, val, holdX, holdY, incr;
var t = 0;
var R = 1.95;
var r = 1.2;
var rho = 2.5;
var factor = 3;


function setup() {
  createCanvas(500, 500);
}

function draw() {
  
   background(0);
  
  for (var t = 0; t <=(16*PI); t += PI/40) {
    x = factor*((R-r) * cos(t) + rho * cos( ((R-r)/r)*t )); 
    y = factor*((R-r) * sin(t) - rho * sin( ((R-r)/r)*t ));
    var x1;
    var y1;
    x1 = map(x, -10,10,0,width);
    y1 = map(y, -10,10,0,height);
    stroke(77, 219, 255);
    strokeWeight(2);
    beginShape();
    vertex(holdX,holdY);
    vertex(x1,y1);
    endShape();
    holdX = x1;
    holdY = y1;
  }
  
  //r = map(mouseY,0,height,1,1.25);
  //rho = map(mouseX,0,width,-2.5,2.5);
  rho -=0.01;
  
  if(rho <= -2.5){
  rho = 2.5;
  }
  
}