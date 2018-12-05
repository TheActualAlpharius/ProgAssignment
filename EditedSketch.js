var x, y;
var R = 1.95;//radius of 'big circle'
var r = 1.2;//radius of 'small circle'
var rho = 1;//dist of pen from centre of small circle
var factor = 3;//scale

function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(0);
	noFill()
	beginShape();
	for (var t = 0; t <=(16*PI); t += PI/40) {//draws the spirograph
		//calculates the coordinates of the spiral at t
		x = factor*((R-r) * cos(t) + rho * cos(((R-r)/r)*t));
		y = factor*((R-r) * sin(t) - rho * sin(((R-r)/r)*t));
		//converts from the graph coords to the screen coords
		var x1;
		var y1;
		x1 = map(x, -10,10,0,width);
		y1 = map(y, -10,10,0,height);
		//sets up brush
		stroke(77, 219, 255);
		strokeWeight(2);
		//draws a line from last coord to next coord
		vertex(x1,y1);
	}
	endShape();
	//change the position of the pen
	//r = map(mouseY,0,height,1,1.25);
	//rho = map(mouseX,0,width,-2.5,2.5);
	rho -=0.01;
	if(rho <= -2.5){
		rho = 2.5;
	}
}