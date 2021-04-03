class Polygon {
    constructor(x, y, radius) {
      var options = {
          isStatic : false,
          restitution : 1,
          friction:0,
          density:0.8
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.width = width;
      this.height = height;
      this.image = loadImage("polygon.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
    
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,2*this.radius,2*this.radius)
      pop();
    }
  };
  