const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var bird;
var log1,log2,log3,log4,log5,log6,log7;
var backgroundImage;

function preload(){
    backgroundImage = loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,370,70,70);
    box2 = new Box(920,370,70,70);
    box3 = new Box(700,295,70,70);
    box4 = new Box(920,295,70,70);
    box5 = new Box(810,205,70,70)
    pig1 = new Pig(810,380);
    pig2 = new Pig(810,295)
    log1 = new Log(810,340,300,PI/2);
    log2 = new Log(810,250,300,PI/2);
    log3 = new Log(700,230,150,PI/2);
    log4 = new Log(920,230,150,PI/2);
    log5 = new Log(700,160,100,PI);
    log6 = new Log(920,160,100,PI);
    log7 = new Log(810,100,280,PI/2);
    bird = new Bird(100,100);

}

function draw(){
    background(backgroundImage);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    bird.display();
    fill("white")
    text(mouseX+','+mouseY,mouseX,mouseY)
}