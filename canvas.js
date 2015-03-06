// This file belongs to canvas.html
//=====================================

function Tools() {
	this.getRandomInt = function(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}
}

function drawInitialize(canvas) {
	var c = document.getElementById(canvas);
	var ctx = c.getContext("2d");
}

function drawOneLine(canvas) {
	drawClear(canvas);
	drawLine(canvas);
}

function drawLine(canvas) {
	var c = document.getElementById(canvas);
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.moveTo($.getRandomInt(0,200),0);
	ctx.lineTo(c.width,$.getRandomInt(0,c.height));
	ctx.stroke();
}

function testLine(canvas) {
	var c = document.getElementById(canvas);
	var ctx = c.getContext("2d");

	var mango = 0;

	for(var x = 32; x < c.width; x += 32) {
		ctx.moveTo(x,0);
		ctx.lineTo(x,c.height);
	}

	for(var y = 32; y < c.height; y += 32) {
		ctx.moveTo(0,y);
		ctx.lineTo(c.width,y);		
	}

	while(mango < c.width) {
		ctx.moveTo(mango,0);
		ctx.lineTo(c.width,c.height);
		mango++;
	}
		ctx.stroke();
}

function drawClear(canvas) {
	var c = document.getElementById(canvas);
	var ctx = c.getContext("2d");

	ctx.clearRect(0,0,c.width,c.height);
}