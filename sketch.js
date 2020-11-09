
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var bodies;

var ground;
var ball;
var base,side1,side2;

function setup() {

	createCanvas(1200, 500);

  engine = Engine.create();
  world = engine.world; 

  ground = new Ground();
  ball = new Ball();

  base = new Dustbin(850,440,150,100);
  //side1 = new Dustbin(775,410,20,80);
  //side2 = new Dustbin(925,410,20,80);

}


function draw() {

  background("cyan");

  Engine.update(engine);

  ground.display();
  ball.display();
  base.display();
  //side1.display();
  //side2.display();

  keyPressed();
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:7,y:-7});
  }

  if(keyCode === DOWN_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:1,y:7});
  }

}



