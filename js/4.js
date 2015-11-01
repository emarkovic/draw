var canvas = document.createElement("canvas");
var winW = window.innerWidth;
var winH = window.innerHeight;
document.body.appendChild(canvas);

var shape = "ellipse";
var col1 = 0;
var col2 = 0;
var col3 = 0;
var size = 10;

$("#ellipse").click(function() {
	shape = "ellipse";
});

$("#triangle").click(function() {
	shape = "triangle";
});

$("#rect").click(function() {
	shape = "rect";
});

$("#eraser").click(function() {
	shape = "eraser";
});

$("#green").click(function() {
	col1 = 46;
	col2 = 64;
	col3 = 69;
});
$("#blue").click(function() {
	col1 = 131;
	col2 = 173;
	col3 = 181;
});
$("#lpurp").click(function() {
	col1 = 199;
	col2 = 187;
	col3 = 201;
});
$("#dpurp").click(function() {
	col1 = 94;
	col2 = 60;
	col3 = 88;
});
$("#tan").click(function() {
	col1 = 191;
	col2 = 181;
	col3 = 178;
});

$("#plus").click(function() {
	if (size < 100) {
		size += 5;
	};
	console.log("current size = " + size);
});
$("#minus").click(function() {
	if (size > 5) {
		size -= 5;
	};
	console.log("current size = " + size);
});

$("#save").click(function() {
	var dataURL = canvas.toDataURL();
	$(this).attr("href", dataURL);
});

new Processing(canvas, function(p) {

	p.setup = function () {
		p.size(winW, winH);
		p.background(255, 255, 255);
		p.cursor(p.CROSS);
	};

	var draw = function() {
		p.stroke(col1, col2, col3);
		p.fill(255, 255, 255);

		switch(shape) {
			case "ellipse":
				p.ellipse(p.mouseX, p.mouseY, size, size);
				break;

			case "triangle":
				var middle = Math.sqrt((size * size)
							- ((size / 2) * (size / 2))) / 2;

				p.triangle(p.mouseX - (size / 2), p.mouseY + middle, 
						p.mouseX + (size / 2), p.mouseY + middle, 
						p.mouseX, p.mouseY - middle);
				break;

			case "rect":
				p.rect(p.mouseX - (size / 2), p.mouseY - (size / 2), size, size);
				break;

			case "eraser":
				p.fill(255, 255, 255);
				p.stroke(255, 255, 255);
				p.ellipse(p.mouseX, p.mouseY, 50, 50);
				break;
		};
	};

	p.mouseDragged = function() {
		draw();
	};

	p.mouseClicked = function() {
		draw();
	};
	

});












































