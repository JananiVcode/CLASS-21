var fixedRect, movingRect;
var box1;
var box2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1 = createSprite(600,150,90,100);
  box1.debug = true;
  box2 = createSprite(200,150,90,100);
  box2.debug=true;

  
  box1.velocityX = -4;
  box2.velocityX =4;
  
}

function draw() {
  background(0,0,0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor ="orange";
    fixedRect.shapeColor = "orange";
  }

  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  bounceOff(movingRect,fixedRect);
  bounceOff(box1,box2);
 
  drawSprites();
}

