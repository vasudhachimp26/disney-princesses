// Create canvas variable
var canvas = new fabric.Canvas("myCanvas");

block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
    // to upload images
    fabric.Image.fromURL(get_image, function(Img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({

    top:block_y,
    left:block_x
    });
    canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == '83') // add appropriate keycode
   {
       block_x = 850;
       block_y = 100;
       // upload red ranger
       new_image("snow_white.png");
       console.log("you have uploaded snow white!");
   }
   if(keyPressed == '65')
   {
     block_x = 650;
     block_y = 100

        // upload green ranger
        new_image("ariel.png");
        console.log("you have uploaded ariel!");
   }
   
   if(keyPressed == '66')
   {
          block_x = 400;
          block_y = 100  
        // upload yellow ranger
        new_image("belle.png");
        console.log("you have uploaded belle!");
   }
   if(keyPressed == '67')
   {
        block_x = 250;
        block_y = 100;
        // upload pink ranger
        new_image("cinderella.png");
        console.log("you have uploaded cinderella!");
   }
   if(keyPressed == '69')
   {
        block_x = 50;
        block_y = 100;
        // upload blue ranger
        new_image("elsa.png");
        console.log("you have uploaded elsa!");
   }
   
}