//Create alias names
Engine = Matter.Engine
Bodies = Matter.Bodies
World = Matter.World

var engine;
var box, box2,box3,box4;
var log,log2;
var ground;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  
  box = new Box(100,300,50,50);
  box2 = new Box(300,300,50,50);
  box3 = new Box(100,200,50,50);
  box4 = new Box(300,200,50,50);

  log = new Log(200,240,250);
  log2 = new Log(200,140,250);
  ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(400,390,1000,30,ground_options);
  World.add(world,ground);


}

function draw() {
  Engine.update(engine)
  background(255,255,255);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1000,30);
  box.display();
  box2.display();
  box3.display();
  box4.display();
  log.display();
  log2.display();
}