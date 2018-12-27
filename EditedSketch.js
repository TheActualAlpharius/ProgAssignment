var x, y;
var R = 5;//radius of 'big circle'
var r = 2;//radius of 'small circle'
var rho = 1.5;//dist of pen from centre of small circle
var factor = 0.5;//scale
var sp;
function setup() {
	createCanvas(500, 500);
	sp = new Spirograph(R, r, rho);
}

function draw() {
	background(0);
	sp.draw();
	//sp.rho -= 0.05
}

