
var canvas = new fabric.Canvas('myCanvas');

block_x = 10;
block_y = 10;

block_image_width = 30;
block_image_height = 30;

var block_image_object= "";

/*function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(block_image_width);
	player_object.scaleToHeight(block_image_height);
	player_object.set({ top:block_y, left:block_x });
	canvas.add(block_image_object);

	});
}*/

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img)
	{
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({ top:block_y, left:block_x });
		canvas.add(block_image_object);

	});

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
	if(keyPressed == '66')
	{
		new_image('br.png'); 
		console.log("blue ranger");
	}
	if(keyPressed == '71')
	{
		new_image('gr.png'); 
		console.log("green ranger");
	}
	if(keyPressed == '80')
	{
		new_image('pr.png'); 
		console.log("pink ranger");
	}
	if(keyPressed == '82')
	{
		new_image('rr1.png'); 
		console.log("red ranger");
	}
	if(keyPressed == '89')
	{
		new_image('yr.png'); 
		console.log("yellow ranger");
	}
	
}

