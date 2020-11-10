
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var bodies;

var ground;
var ball;
var base,side1,side2,bin;

function preload(){

  bin=loadImage("dustbin.png");

}
function setup() {

	createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world; 

  ground = new Ground();
  ball = new Ball();

  base = new Dustbin(600,555 , 150,20);
  side1 = new Dustbin(530 , 515 , 20,100);
  side2 = new Dustbin(670 , 515 ,20 ,100);

}


function draw() {

  background("cyan");

  Engine.update(engine);

  ground.display();
  ball.display();
  base.display();
  side1.display();
  side2.display();

  image(bin,500,465,200,200);
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-100});
  }

}



