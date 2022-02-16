var box;

function setup() {
  createCanvas(1500,700);
  box = createSprite(200,200,30,30);
box.shapeColor ='blue'
}

function draw() 
{


  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red")
  }
if(keyIsDown(LEFT_ARROW))
 
{
  background("blue")
 }
 
if(keyIsDown(UP_ARROW)) {
  background("green")
}
if(keyIsDown(DOWN_ARROW)) {
  background("black")
}




  drawSprites();
}




