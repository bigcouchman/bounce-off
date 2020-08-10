var fixedRect, movingRect;
var gObject1,gObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  fixedRect.velocityY = +5;

  gObject1 = createSprite(200,200,50,50);
  gObject1.shapeColor = "green";
  gObject2 = createSprite(300,200,50,50);
  gObject2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  

bounceOff(fixedRect,movingRect);

if (isTouching(gObject1,movingRect)){
  gObject1.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}
else{
  gObject1.shapeColor = "green";
  movingRect.shapeColor = "green";
}
  drawSprites();
}