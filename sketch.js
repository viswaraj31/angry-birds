const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var gameState = "onSling";
var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var bird;
var ground,ground1;
var log1,log2,log3,log4,log5,log6,log7;
var backgroundImage;
var sling;
var bg,score=0;

function preload(){
    backgroundImage=loadImage("sprites/bg.png")
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(150,310,300,160);
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
    bird = new Bird(230,60);
    sling = new SlingShot(bird.body,{x:230, y:60});

}

function draw(){
    if(backgroundImage){
    background(backgroundImage);
    }
    Engine.update(engine);
    
    ground.display();
    ground1.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();

    bird.display();

    sling.display();
    pig1.score();
    pig2.score();
    textSize(30);
    fill(255);
    text("Score:"+score,1000,50);
    console.log(bird.body.speed)
}

function mouseDragged(){
    if(gameState !== "launched")
    Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    sling.fly();
    gameState = "launched"
}

function keyPressed(){
    if(keyCode === 32&&bird.body.speed <1){
        Matter.Body.setPosition(bird.body,{x:230, y:60});
        sling.attach(bird.body);
        bird.trajectory=[];
        gameState="onSling";
    }
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var respnse = await response.json();

    var hour = respnse.datetime.slice(11,13);
    console.log(hour);

    if(hour>=06&&hour<=18){
        bg = "sprites/bg.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }
    backgroundImage = loadImage(bg);
}