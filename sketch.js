//Namespace ==>Nickname
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;


var ground,myEngine,myWorld;
var ball
function setup() {
  createCanvas(800,400);

  myEngine = Engine.create(); // Create an engine object and store it inside myEngine
  //Engine obj has a property called world 
  myWorld = myEngine.world;

  var opt ={
    isStatic : true
  }

  ground = Bodies.rectangle(400,380,800,20,opt);
var opt1={
  restitution:1
}

  ball = Bodies.circle(100,100,100,opt1)
  //console.log(ground);

  World.add(myWorld,ball);
  World.add(myWorld,ground); //World.add(whichworld,whatobjshould be added)
 
}

function draw() {
  background(180); 
  
  Engine.update(myEngine); //Engine.update(whichEngineshould beupdated)

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  //circle(ball.position.x,ball.position.y,200)
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,100,100);

}