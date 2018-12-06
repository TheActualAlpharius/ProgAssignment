class Spirograph {
	constructor(R, r, rho){
		this.R = R;
		this.r = r;
		this.rho = rho;
		this.y;
		this.x;
		this.updateloopc();
	}
	
	draw(){
		noFill()
		beginShape();
		for (var t = 0; t <=(2*PI*this.loopc); t += PI/40) {//draws the spirograph
			//calculates the coordinates of the spiral at t
			this.x = factor*((this.R-this.r) * cos(t) + this.rho * cos(((this.R-this.r)/this.r)*t));
			this.y = factor*((this.R-this.r) * sin(t) - this.rho * sin(((this.R-this.r)/this.r)*t));
			//converts from the graph coords to the screen coords
			var x1;
			var y1;
			x1 = map(this.x, -10,10,0,width);
			y1 = map(this.y, -10,10,0,height);
			//sets up brush
			stroke(77, 219, 255);
			strokeWeight(2);
			//draws a line from last coord to next coord
			vertex(x1,y1);
		}
		endShape();
	}
		
	updateloopc(){
		this.loopc = lcm(this.R, this.r);
		this.loopc = Math.ceil(this.loopc);
		print(this.loopc);
	}
	
	setr(r){
		this.r = r;
		this.updateloopc();
	}
	
	set(R){
		this.R = R;
		this.updateloopc();
	}
	

	
}



function lcm(a, b){
	return (a/gcd(a,b)) * b
}

function gcd(a, b){
	if (b == 0){
		return a;
	}
	return gcd(b, a % b);
	
}