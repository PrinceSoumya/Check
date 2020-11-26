
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground,paperObject,dustbinObject,ima;

function setup() {
	var canvas=createCanvas(1600, 700);
    engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground = new grounds(800,680,1700,20)
  dustbinObject = new dustbin(1100,670,300,300);
 paperObject = new paper(200,500,30)
  

	Engine.run(engine);
	
	

   
}


function draw() {
 
  rectMode(CENTER);
  background("lightgrey");
  

  paperObject.display();
  ground.display();
 dustbinObject.display();
  //KeyPressed();
  
 
}

function keyPressed(){
 if (keyCode === UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:45,y:-55});

  }
}

