
var wall,thickness
var bullet,speed,weight

thickness = random(22,83)
speed = random(223,321)
weight = random(30,52)

function setup(){
    var canvas = createCanvas(1600,400);
    wall = createSprite(1200,200,thickness,height/2)
    wall.shapeColor = (80,80,80)

}

function draw(){
    background(0);

    if(hasCollided(bullet,wall)){
        bullet.velocityX = 0;
        var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

        if (damage>10){
            wall.shapeColor = (255,0,0)
        }

        if (damage<10){
            wall.shapeColor = (0,255,0)
        }
    }

}

function hasCollided(bullet,wall){
    bulletRightEdge = bullet.x+bullet.width;
    wallLeftEdge = wall.x
    if(bulletRightEdge = wallLeftEdge){
        return true
    }
    return false

}
