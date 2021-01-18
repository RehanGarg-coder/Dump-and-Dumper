
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paperball,net1,net2,net3;

function setup() {
  var canvas = createCanvas(800,700);
    engine = Engine.create();
  	world = engine.world;

	
	
	//Create the Bodies Here.
	ground = new BaseClass(600,height,800,20);
	
	paperball = new PaperBall(500,200,20,options);

	net1 = new Dustbin(550,550,80,20);
	net2 = new Dustbin(550,500,20,50);
	net3 = new Dustbin(550,600,20,50);
	
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  ground.display();
  paperball.display();
  net1.display();
  net2.display();
  net3.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
     Matter.body.applyForce(paperball,paperball.body.position,{x:85,y:-85});
  }
}


