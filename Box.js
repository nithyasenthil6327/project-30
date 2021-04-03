class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visibility= 255;
    //this.image = loadImage("sprites/wood1.png");
    
  }
  display(){
    if(this.body.speed<3){
      fill(0);
      strokeWeight(2);
      stroke(255,255,255);
      super.display();
    }
    else{
      push();
      World.remove(world,this.body);
      this.visibility -= 5;
      //tint(255,this.visibility);
      fill(0,0,0,this.visibility);
      stroke(255,255,255,this.visibility);
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      rect(0,0,this.width,this.height);
      pop();
    }
   
    
  }

};
