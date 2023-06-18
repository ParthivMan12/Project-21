
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ball_options;

var groundObj, leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1870, 700);

	ball_options = {
		isStatic:false,
		restituition:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100, 100, 20, ball_options);
	World.add(world,ball);

	groundObj = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(1100, 600, 20, 120);
	rightSide = new Ground(1400, 600, 20, 120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  drawSprites();
  groundObj.show();
  leftSide.show();
  rightSide.show();
  var bPos = ball.position;
  ellipse(bPos.x, bPos.y, 20)
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:100, y:-90})
	}
}

