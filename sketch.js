const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine , world;
var bodies; 
var green_drop = [];
var red_drop = [];
var blue_drop = [];
var ground;
var rand;
var i = 0;
function setup() {
    createCanvas(400, 400);

    engine=Engine.create();
    world = engine.world ;  

    
    
    ground = new Ground(200,350,400,20);
    World.add(world,ground);
    console.log(ground);
}
 

function draw() {

    randx = random(0,400);
    randy = random(0,10);
    if ( frameCount%5===0) {
        console.log("Kooc cook , i m inside");
            red_drop[i] = new Rrain(randx,randy);
            World.add(world,red_drop);
            green_drop[i] = new Grain(randx+15,randy+15);
            World.add(world,red_drop);
            blue_drop[i] = new Brain(randx-15,randy-15);
            World.add(world,red_drop);
            i++;
    }
    background("white");
    console.log("MouseEvent" + MouseEvent);
        ground.display();
    console.log("Mouin for loopseEvent i="+i);
    for(var j = 0;j < i; j++){
        red_drop[j].display();
        green_drop[j].display();
        blue_drop[j].display();
    }
 Engine.update(engine);   
}

 

