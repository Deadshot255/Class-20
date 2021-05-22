

var a;
var b;

function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(360,160,50,50);
  a.shapeColor="green";
  b.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  a.x=World.mouseX;
  a.y=World.mouseY;
  if(a.x-b.x<b.width/2+a.width/2){
    a.shapeColor="blue";
    b.shapeColor="blue";
  }
  else{
    a.shapeColor="green";
    b.shapeColor="green";
  }
  drawSprites();
}