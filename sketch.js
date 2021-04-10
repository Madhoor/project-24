const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,iron1;
var r,stone1;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(0,0);
    r = new Rubber(800,300,15);
    stone1 = new stone(300,300);
    iron1 = new iron(500,300);

    

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

          /*  for (var i = 0; i < 10; i++){
        rubber1[i] = new Rubber(580 +i*20+2,400,6);
        rubber1[i].display();
        }
        */
    plane.display();
    hammer.display();
    stone1.display();
    r.display();
    iron1.display();
    
}

