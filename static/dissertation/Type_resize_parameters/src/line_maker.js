var STATE = {
	FORWARD: 1,
	LOOP_LEFT: 2,
	LOOP_RIGHT: 3
}

class Friend {
	constructor(canvas){
		this.position = { x: Math.random() * canvas.width, y: Math.random() * canvas.height };
		this.colors = [{ r:255, g: 0, b: 0 }, { r: 0, g: 255, b: 0 }, { r: 0, g: 0, b: 255 }, { r:255, g: 255, b: 255 }]
		this.color = { r: 255, g: 255, b: 255 }
		this.nextColor = 0;
		this.force = {
			x: Math.random() * 2 - 1,
			y: Math.random() * 2 - 1
		}
		this.lastPoints = []
		this.topSpeed = 1;
		this.canvas = canvas;

		this.state = STATE.FORWARD; 
	}

	draw(){
		fill(color(this.color.r, this.color.g, this.color.b));
		stroke(color(this.color.r, this.color.g, this.color.b));
		ellipse(this.position.x, this.position.y, 1);

		this.lastPoints.push(JSON.parse(JSON.stringify(this.position)))

		this.position.x += this.force.x;
		this.position.x = (this.position.x > this.canvas.width ? this.canvas.width : this.position.x)
		this.position.x = (this.position.x < 0 ? 0 : this.position.x)

		this.position.y += this.force.y;
		this.position.y = (this.position.y > this.canvas.height ? this.canvas.height : this.position.y)
		this.position.y = (this.position.y < 0 ? 0 : this.position.y)

		this.color.r += (this.color.r < this.colors[this.nextColor].r ? 1 : (this.color.r === this.colors[this.nextColor].r ? 0 : -1));
		this.color.g += (this.color.g < this.colors[this.nextColor].g ? 1 : (this.color.g === this.colors[this.nextColor].g ? 0 : -1));
		this.color.b += (this.color.b < this.colors[this.nextColor].b ? 1 : (this.color.b === this.colors[this.nextColor].b ? 0 : -1));

		if(this.color.r === this.colors[this.nextColor].r && this.color.g === this.colors[this.nextColor].g && this.color.b === this.colors[this.nextColor].b){
			this.nextColor += 1;
			this.nextColor = (this.nextColor < this.colors.length - 1 ? this.nextColor : 0);
		}

		// if(this.lastPoints.length > 2)
		// 	this.lastPoints.splice(0,1);

		if(this.lastPoints.length >= 2)
			this.updateForces()
	}

	updateForces(){
		var curr = this.lastPoints.length - 1;
		var prev = this.lastPoints.length - 2;

		var normalized = normalize({x: this.lastPoints[curr].x - this.lastPoints[prev].x, y: this.lastPoints[curr].y - this.lastPoints[prev].y});

		var xTilt = Math.random();
		var yTilt = Math.random();
		var xFactor = 0;
		var yFactor = 0;

		if(xTilt < 0.05)
			xFactor = -1;
		else if(xTilt < 0.1)
			xFactor = 0.25;
		else if(xTilt < 0.25)
			xFactor = 0.5;
		else if(xTilt < 0.4)
			xFactor = .75;
		else if(xTilt < 0.75)
			xFactor = 1;
		else if(xTilt < 0.85)
			xFactor = 1.5;
		else if(xTilt < 0.95)
			xFactor = 2;
		else if(xTilt <= 1)
			xFactor = 4;

		if(yTilt < 0.05)
			yFactor = -1;
		else if(yTilt < 0.1)
			yFactor = 0.25;
		else if(yTilt < 0.25)
			yFactor = 0.5;
		else if(yTilt < 0.4)
			yFactor = .75;
		else if(yTilt < 0.75)
			yFactor = 1;
		else if(yTilt < 0.85)
			yFactor = 1.5;
		else if(yTilt < 0.95)
			yFactor = 2;
		else if(yTilt <= 1)
			yFactor = 4;

		this.force.x = (xFactor === 4 ? Math.random() * 2 - 1 : normalized.x * xFactor * this.topSpeed);
		this.force.y = (yFactor === 4 ? Math.random() * 2 - 1 :normalized.y * yFactor * this.topSpeed);
		this.topSpeed = Math.random() * 2 + 1;
	}
}

function normalize (xy) {
	var length = Math.sqrt((xy.x * xy.x) + (xy.y * xy.y));
	return {x: xy.x / length, y: xy.y / length};
}
