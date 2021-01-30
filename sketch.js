const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world,engine;
var ground;
var par = [];
var div = [];
var plinko = [];
var divH = 200;

function setup() {
  createCanvas(600,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,780,800,10);

  for (var i = 0; i <=width; i = i + 100) {
    div.push(new Division(i, height-divH/2,10,divH));
  }
  
}

function draw() {
  background(0); 
  Engine.update(engine);
  ground.display();
  div.display();


  drawSprites();
}
