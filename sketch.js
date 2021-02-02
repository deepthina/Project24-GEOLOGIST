
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var hammer;
var plane;
var stone;
var rubber;
var iron;
var sand1, sand2, sand3, sand4, sand5;

function preload() {

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(300, 200, 100, 30);
	plane = new Plane(600, 680, 1200, 30);
	rubber = new Rubber(100, 100, 50);
	stone = new Stone(1000, 100, 100, 100);
	iron = new Iron(400, 100, 150, 150);

	//Engine.run(engine);
	sand1 = new Sand(600, 100, 10);
	sand2 = new Sand(600, 100, 10);
	sand3 = new Sand(600, 100, 10);
	sand4 = new Sand(600, 100, 10);
	sand5 = new Sand(600, 100, 10);
}


function draw() {
	//rectMode(CENTER);
	background(0);

	Engine.update(engine);

	plane.display();
	rubber.display();

	hammer.display();
	stone.display();

	iron.display();
	//drawSprites();

	
	
	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();
	

}



