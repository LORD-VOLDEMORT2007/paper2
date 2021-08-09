
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000 , 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Paper();
	gr1 = new Ground (width/2 , 280 , width , 20)
	gr2 = new Ground (900 , 230 , 20 , 100)
	gr3 = new Ground (770 , 230 , 20 , 100)

	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
  ball.display();

  gr3.display();
  gr2.display();
  gr1.display();

 

  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

	Body.applyForce(ball.body , ball.body.position , {x:160 , y:-180 })
}

}

