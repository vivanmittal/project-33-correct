var background1
var snow=[]
const Engine = Matter.Engine
const  World = Matter.World
const    Bodies = Matter.Bodies

function preload(){
  background1=loadImage("snow2.jpg")
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine=Engine.create()
  world=engine.world
}

function draw() {
  background(background1);  
  Engine.update(engine)
  drawSprites();
  if (frameCount%10===0){ 
    snow.push(new Snow (random(width/2-250,width/2+250),10,10)) 
  }
for(var p =0;p<snow.length;p++){
snow[p].display();
}

}



