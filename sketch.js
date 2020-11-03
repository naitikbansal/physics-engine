const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var naitikengine,world;
var ground;
var opt,ballopt;
var ball;
function setup() {
  createCanvas(400,400);

  naitikengine=Engine.create();
  world=naitikengine.world;

  opt={
    isStatic:true
  }
  ballopt ={
    restitution:1.0
  }
  ground=Bodies.rectangle(200,350,200,20,opt);
  World.add(world,ground);
  console.log(ground.position.x);
  ball=Bodies.circle(200,100,40,ballopt);
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(naitikengine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,40);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}