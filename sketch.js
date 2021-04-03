const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;
const Events = Matter.Events;

var ground;
var ground1;
var ground2;
var ground3;
//var box1;
var i = 0;
var stack, stack1,stack2, stack3;
var poly;
var sling;
var drag = true;
var mConstraint;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stack = new Stack(7,1000,240,20)
    stack1 = new Stack(5,600,240,30)
    stack2 = new Stack(11,800,340,10)
    //stack3 = new Stack(5,200,200,20)

    ground = new Ground(600,390,1200,10);
    ground1 = new Ground(980+(160/2),250,160,10);
    ground2 = new Ground(570+(180/2),250,180,10);
    ground3 = new Ground(785+(130/2),350,130,10);

    poly = new Polygon(150,250,20);
    sling = new SlingShot(poly.body,{x:150,y:250});

    
    var canvasMouse = Mouse.create(canvas.elt);
    canvasMouse.pixelRatio = pixelDensity();
    var options = {
        mouse: canvasMouse
    }

    mConstraint = MouseConstraint.create(engine,options);
    World.add(world,mConstraint);
  


    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    ground1.display();
    ground2.display();
    ground3.display();
    stack.display();
    stack1.display();
    stack2.display();
   // stack3.display();
    poly.display();
    sling.display();

    if(drag === false){
        text('Press Space to get chances!',30,30);
    }
    
    
    

 
}

// function mouseDragged(){
//     if(drag === true){
//         Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY});
//     }
    
    
// }




function mouseReleased(){
    setTimeout(() => {
        sling.fly();
      }, 100);
        
    drag = false;
    
}



function keyPressed(){
	if(keyCode === 32){
		sling.attach();
		drag = true;
	}
}

