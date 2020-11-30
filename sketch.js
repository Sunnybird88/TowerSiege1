
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var polygonImage;
var ground, stand;

function preload() {

    polygonImage = loadImage("polygon.png");
}

function setup() {
    createCanvas(800, 400);

    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(390, 300, 250, 10);
    stand2 = new Ground(700, 200, 200, 10);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);
    slingShot = new Slingshot(this.polygon, { x: 150, y: 100 });

    
    block1 = new Block(300, 275, 30, 40);
    block2 = new Block(330, 275, 30, 40);
    block3 = new Block(360, 275, 30, 40);
    block4 = new Block(390, 275, 30, 40);
    block5 = new Block(420, 275, 30, 40);
    block6 = new Block(450, 275, 30, 40);
    block7 = new Block(480, 275, 30, 40);

    block8 = new Block(330, 235, 30, 40);
    block9 = new Block(360, 235, 30, 40);
    block10 = new Block(390, 235, 30, 40);
    block11 = new Block(420, 235, 30, 40);
    block12 = new Block(450, 235, 30, 40);

    block13 = new Block(360, 195, 30, 40);
    block14 = new Block(390, 195, 30, 40);
    block15 = new Block(420, 195, 30, 40);

    block16 = new Block(390, 155, 30, 40);

    Engine.run(engine);

  
}



function draw() {
    background(0, 0, 0);  
    fill("red");

    imageMode(CENTER)
    image(polygonImage, polygon.position.x, polygon.position.y, 40, 40);

    stand1.display();
    stand2.display();

    slingShot.display();

    fill("pink");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("skyblue");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("green");
    block13.display();
    block14.display();
    block15.display();

    fill("yellow");
    block16.display();

  
}


function mouseDragged() {

    Matter.Body.setPosition(this.polygon, { x: mouseX, y: mouseY });

}

function mouseReleased() {

    slingShot.fly()

}