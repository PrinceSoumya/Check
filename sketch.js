
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground,boys,trees,sto,shot;
var mangs1,mangs2,mangs3,mangs4,mangs5;

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world  = engine.world;

	//Create the Bodies Here.
	
 mangs1 = new Mangoo(500,350,50,50,70);
 mangs2 = new Mangoo(600,400,50,50,70);
 mangs3 = new Mangoo(690,250,50,50,70);
 mangs4 = new Mangoo(750,330,50,50,70);
 mangs5 = new Mangoo(850,400,50,50,70);
 shot   = new sling(boys.body,{x:200, y:50});
 sto    = new stoo(200,500,30,30,70);
 boys   = new man(200,650,150,200,70);
 trees  = new tre(680,440,550,550,100);
 ground = new grounds(500,700,1000,20);

 Engine.run(engine);
  
}

function draw() {
	background("lightgrey");
	Engine.update(engine);

 ground.display();
 trees.display();
 mangs1.display();
 mangs2.display();
 mangs3.display();
 mangs4.display();
 mangs5.display();
 sto.display();
 boys.display();
 shot.display()
 
 
}



