var x, y;
var R = 1.95;//radius of 'big circle'
var r = 1.2;//radius of 'small circle'
var rho = 1;//dist of pen from centre of small circle
var factor = 3;//scale
var sp;
function setup() {
	createCanvas(500, 500);
	sp = new Spirograph(R, r, rho);
}

function draw() {
	background(0);
	sp.draw();
	//sp.r -= 0.0001;
	if(sp.r <= -1.5){
		sp.r = 1.5;
	}
}

