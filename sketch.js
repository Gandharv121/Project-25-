
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,ballimg,binimg;
var p1,p2,p3;

function preload()
{

	binimg = loadImage("Images/Dusbin.png")


}


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	

	p1=createSprite(825,540,50,80)
	p1.shapeColor=color("red");

	p1.addImage("Bin",binimg)
	p1.scale = 0.7

	//p2=createSprite(945,670,250,20);
	//p2.shapeColor=color("red");

	//p3=createSprite(1060,620,20,80)
	//p3.shapeColor=color("red");

	
	ground = Bodies.rectangle(width/2, 650, 1600, 10 , {isStatic:true} );
	World.add(world, ground);
  
	ball = new paper (510,190,80)

}


function draw() {
  rectMode(CENTER);
  background(255);
  
  

rect(ground.position.x,ground.position.y,1600,10)


  ball.display();

  drawSprites();
 


}


function keyPressed (){
if (keyCode === UP_ARROW){


Matter.Body.applyForce(ball.body,ball.body.position,{x:300,y:-1400})

}



}
