var x, y;
var R = 12;//radius of 'big circle'
var r = 3;//radius of 'small circle'
var rho = 3;//dist of pen from centre of small circle
var factor = 0.5;//scale
var sp;

function setup() {
	createCanvas(500, 500);
	sp = new Spirograph(R, r, rho);
	
}

function draw() {
	background(255);
	sp.draw();
	
}


