var car, wall;
var speed,weight;
var deform;
function setup() {
  createCanvas(1600,400);

speed=random(55,90)
weight=random(400,1500)
car=createSprite(50, 200, 50, 50);

wall=createSprite(1200,200,60,height/2);
wall.shapeColor=("pink") (80,80,80);
}

function draw() {
  background("black"); 
  car.velocityx=speed;
  deformation(); 
  drawSprites();
} 

function deformation(){
  if(wall.x-car.x < (car.width + wall.width )/2){
    car.velocityX=0;

    deform = (0.5 * weight * speed * speed)/22500;
    console.log(deform)

    if(deform >180)
    car.shapeColor=("yellow")(255,0,0) 
  }
  if(deform < 180 && deform > 100){
    car.shapeColor= ("red") (230,230,0);
      if(deform < 100)
      car.shapeColor=("skyblue")(0,225,0);
    }
    
if(deformation<180 && deformation>100)
{
  car.shapeColor="pink"(230,230,0);
}
if (deformation<100){
  car.shapeColor="green"(0,255,0)
}
