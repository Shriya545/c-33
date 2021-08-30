var Bg 
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

var player
var ground
var snow
function preload(){
Bg =loadImage("snow1.jpg")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  player=createSprite(400, 200, 50, 50);
  ground=createSprite(400,380,800,10)
}

function draw() {
 
  background(Bg); 
  Engine.update(engine);

  if(keyDown("space") ) {
    player.velocityY = -12;
  }
  player.velocityY = player.velocityY + 0.8
  player.collide(ground);
  drawSprites();
  snow=new Snow(random(0,800),0,10,10)
  snow.display()
}