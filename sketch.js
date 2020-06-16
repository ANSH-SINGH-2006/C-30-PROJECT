const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground2= new Ground(890,250,200,20)

    box1= new Box(330+500,235,30,40);
    box2= new Box(360+500,235,30,40);
    box3= new Box(390+500,235,30,40);
    box4= new Box(420+500,235,30,40);
    box5= new Box(450+500,235,30,40);
    box6= new Box(360+500,195,30,40);
    box7= new Box(390+500,195,30,40);
    box8= new Box(420+500,195,30,40);
    box9= new Box(390+500,155,30,40);
    //platform = new G5ound(150, 305, 300, 170);

    //box1 = new Box(700,320,70,70);
   // box2 = new Box(920,320,70,70);
   // pig1 = new Pig(810, 350);
   // log1 = new Log(810,260,300, PI/2);

    //box3 = new Box(700,240,70,70);
   // box4 = new Box(920,240,70,70);
  //  pig3 = new Pig(810, 220);

   // log3 =  new Log(810,180,300, PI/2);

    //box5 = new Box(810,160,70,70);
   // log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50,6,100);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Slingshot(bird.body,{x:200, y:50});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
    
    
    bird.display();
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    ground2.display();
    slingshot.display(); 
    fill("green");
    text("1- press SPACE to get another chance",500,200);   
    text("2- DESTROY THE BLOCKS",500,220);   
}



function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(bird.body);
    }
}