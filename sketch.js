var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  Rect = createSprite(700,200,80,30);
  Rect.shapeColor = "white";
  Rect2 = createSprite(500,200,80,30);
  Rect2.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(iscolliding(movingRect,Rect2)){
   movingRect.shapeColor="blue";
   fixedRect.shapeColor = "blue";
   Rect.shapeColor = "blue";
   Rect2.shapeColor = "blue";

 }
 else{
   movingRect.shapeColor="green";
   fixedRect.shapeColor = "green";
   Rect.shapeColor = "white";
   Rect2.shapeColor = "yellow";
 }





  drawSprites();
}
// movingrect= object1
//fixedrect=object2
