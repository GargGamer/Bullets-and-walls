var bullet,wall
var speed, weight, thickness


function setup() {
  createCanvas(1000,400);
  speed = random(223, 321)
  weight = random(30, 52)
  thickness = random(22,83)
  
  bullet = createSprite(50,200,60,5)
  bullet.velocityX = speed
  bullet.shapeColor = "white"
  wall = createSprite(900,200,thickness,height/2)
  wall.shapeColor = "white"

}

function draw() {
  background(0); 

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0
    var damage = 0.5 * weight *speed * speed/(thickness * thickness * thickness)
    if(damage>10){
      wall.shapeColor = "red"
    }
    
    if(damage<10){
      wall.shapeColor="green"
    }
  }

  drawSprites();

}

function hasCollided(lbullet,lwall){
  lbulletRightEdge=lbullet.x +lbullet.width
  lwallLeftEdge = lwall.x
  if(lbulletRightEdge>=lwallLeftEdge){
    return true
  }
  return false
}
