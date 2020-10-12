const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box = new Box(240,200,50,80);

    ground = new Ground(200,580,1200,20);




}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box.display();
    ground.display();
   
}