const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var BackGround,Monster1Image,Monster2Image,SuperheroImage;
var Superhero,block1,block2,fly;
function preload()
{
	SuperheroImage=loadImage("images/Superhero-01.png")
	BackGround=loadImage("images/GamingBackground.png")
}

function setup() {
	createCanvas(2000, 800);
    

	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
    Superhero=new Hero(200,200,300,120)
    fly=new Fly(Superhero.body,{x:500,y:50})
    block1=new Block(400,400,40,40)
	BlockGround=new Ground(500,400,200,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(BackGround);
  Superhero.display();

 
}

function mouseDragged(){
	Matter.Body.setPosition(Superhero.body,{x:mouseX,y:mouseY});
}