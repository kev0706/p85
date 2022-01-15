canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
greencarWidth=75;
greencarHeight=100;

greencarX=5;
greencarY=500;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

function add() {
	backgroundImagetag= new Image();
	backgroundImagetag.onload= uploadBackground;
	backgroundImagetag.src=background_image;

	greencarimagetag= new Image();
	greencarimagetag.onload= uploadgreencar;
	greencarimagetag.src= greencar_image;
}

function uploadBackground() {
	ctx.drawImage(backgroundImagetag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencarimagetag, greencarX, greencarY, greencarWidth, greencarHeight);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencarY >=0){
		greencarY= greencarY-10;
		console.log("When up arrow key is pressed,  x = " + greencarX + " | y = " +greencarY);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greencarY >=0){
		greencarY= greencarY+10;
		console.log("When down arrow key is pressed,  x = " + greencarX + " | y = " +greencarY);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(greencarX >=0){
		greencarX= greencarX-10;
		console.log("When left arrow key is pressed,  x = " + greencarX + " | y = " +greencarY);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(greencarX >=0){
		greencarX= greencarX+10;
		console.log("When right arrow key is pressed,  x = " + greencarX + " | y = " +greencarY);
		uploadBackground();
		uploadgreencar();
	}
}
