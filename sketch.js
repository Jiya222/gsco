var car,wall;
var speed,weight
var deformation
function setup() {
  createCanvas(1200,800);
 car= createSprite (100, 400, 50, 20);
 car.shapeColor="white"
 wall= createSprite (900, 400, 80, 800);
 wall.shapeColor="grey"
 speed = random(55,90);
  weight = random(400,1500);
   car.velocityX = speed;
}

function draw() {
  background(0);  
  if(car.x-wall.x<=car.width/2+wall.width/2&&
    wall.x-car.x<=car.width/2+wall.width/2 ){

    car.velocityX=0;
    deformation=(0.5*weight*speed*speed)/22500
    if(deformation <100){
      car.shapeColor="green"
    }
    else if(deformation>100 && deformation<180){
      car.shapeColor="yellow";}
      else if(deformation>180){
        car.shapeColor="red";}
        textSize(25);
        fill("white");
        text("Deformation= "+deformation,300,300);
  }
  drawSprites();
}