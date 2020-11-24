const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,760,480,10);

  Engine.run(engine);
}

function draw() {
  background(1,0,1); 
  Engine.update(engine); 

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,75,10));
  }

  for(var j = 15; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,175,10));
  }

  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275,10));
  } 

  for(var j = 15; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,375,10));
  }

  if(frameCount % 60 === 0){
    particles.push(new Particles(width*2-20,width*2+20,10,14));
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var f = 0; f < plinkos.length; f++){
    plinkos[f].display();
  }

  drawSprites();
}