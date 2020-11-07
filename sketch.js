
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobcount = 5;
var roof1;

function setup() {
	createCanvas(900, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(450, 50, 720, 40);
  	bobObject1 = new Bob(450, 450, 50);
	bobObject2 = new Bob(350, 450, 50);
	bobObject3 = new Bob(550, 450, 50);
	bobObject4 = new Bob(250, 450, 50);
	bobObject5 = new Bob(650, 450, 50);

	rope1 = new Rope(bobObject1.body, roof1.body, 0, 0, 700);
	rope2 = new Rope(bobObject2.body, roof1.body, -100, 0, 700);
	rope3 = new Rope(bobObject3.body, roof1.body, 100, 0, 700);
	rope4 = new Rope(bobObject4.body, roof1.body, -200, 0, 700);
	rope5 = new Rope(bobObject5.body, roof1.body, 200, 0, 700);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);

  Engine.update(engine);


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  


  roof1.display();

  if (keyDown("UP_ARROW")) {
	  Body.applyForce(bobObject4.body, bobObject2.body.position, {x: -100, y: 0})
  }
 
}


