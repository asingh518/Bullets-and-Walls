var wall, thickness;
var bullet, speed,weight;





function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed=random(55,90)

thickness=random(22,83);

weight=random(400,1500);

bullet=createSprite(50,200,50,50)

wall=createSprite(1200,200,thickness,height/2);

bullet.velocityX = speed;

function hasCollided(lbullet, lwall)
{
  bulletRidgeEdge=lbullet.x = lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge
{
  return true
}
return false;
}

function draw() {
  background(255,255,255);  
  drawSprites();

  bullet.display();
  wall.display();
}
}