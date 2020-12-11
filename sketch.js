
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var bin,binImg

function preload()
{
	binImg = loadImage("sprite/dustbingreen.png");
}

function setup() {
	createCanvas(1200, 400);

	bin = createSprite(875,284,300,300);
	bin.addImage(binImg);
    bin.scale = 0.57;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	ball = new Ball(100,100,40);
	ground = new Ground(800,400,2000,20);
	wall1 = new Wall(790,300,10,200);
	wall2 = new Wall(875,350,160,10);
	wall3 = new Wall(960,300,10,200);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("white");
  //console.log(ball);

  ball.display();
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  
  drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.Body,ball.Body.position,{x : 41.5, y : -47});
   }
  
  
  }


