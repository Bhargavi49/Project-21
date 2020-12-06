var wall, thickness;
var bullet, speed, weight;

function setup() {
  
  createCanvas(16000,400);
 
  speed= random(50,90)
  weight= random(400,1500)
  thickness= random(22,83)
  
  bullet= createSprite(50,200,50,50)
  bullet.velocityX= speed
  
  wall= createSprite(1500,200,60,height/2)
  wall.shapeColor= color(80,80,80)
}

function draw() {
  background(255,255,255);  
if(hasCollided(bullet,wall)){
  bullet.velocityX=0
  var damage= 0.5 * weight * speed* speed/(thickness* thickness* thickness);

  if(damage>10)
  wall.shapeColor= color(255,0,0);
}

if(damage<10)
wall.shapeColor(0,255,0);
  
  drawSprites();
}

function hasCollided() {
  bulletRightEdge= bullet.x+bullet.width;
  wallLeftEdge= wall.x
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}