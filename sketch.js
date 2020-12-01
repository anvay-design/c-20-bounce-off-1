var movingRectangle,fixedRectangle;

function setup() {
  createCanvas(1200,800);
  movingRectangle=createSprite(400,800,80,30);
  fixedRectangle=createSprite(400,100,50,80);
  movingRectangle.shapeColor="red";
  fixedRectangle.shapeColor="blue";
  movingRectangle.velocityY=-5;
  fixedRectangle.velocityY=5;
}

function draw() {
  background(255,255,255);  
  
  if (movingRectangle.x-fixedRectangle.x<movingRectangle.width/2+fixedRectangle.width/2&&
    fixedRectangle.x-movingRectangle.x<movingRectangle.width/2+fixedRectangle.width/2) {
      movingRectangle.velocityX=movingRectangle.velocityX*(-1);
      fixedRectangle.velocityX=movingRectangle.velocityX*(-1);
      
    
    }
if(movingRectangle.y-fixedRectangle.y<movingRectangle.height/2+fixedRectangle.height/2&&
  fixedRectangle.y-movingRectangle.y<movingRectangle.height/2+fixedRectangle.height/2){
    movingRectangle.velocityY=movingRectangle.velocityY*(-1);
    fixedRectangle.velocityY=movingRectangle.velocityY*(-1);
}
  
  drawSprites();
}