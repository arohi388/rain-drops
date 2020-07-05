var drop=[]
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
    world = engine.world;
}

function draw() {
  Engine.update(engine)
  background(255,255,255);  
  drawSprites();
  Rain()
}
function Rain(){
  var a=new Drops()
  drop.push(a)
  for(i=0;i<drop.length;i++)
  drop[i].display()
}