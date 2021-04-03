class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.07,
            length: 10
        }
        this.pointB = pointB;
        this.bodyA = bodyA;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    display(){

        

        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            //ine(pointA.x, pointA.y, pointB.x, pointB.y);
            strokeWeight(7);
            stroke(48,25,13);
            

            if(pointA.x<180){
                
                strokeWeight(7);
                stroke(48,25,13);
                fill(48,25,13);
                rect(pointA.x-30,pointA.y-10,15,30);
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
                
            }else{
                
                strokeWeight(3);
                stroke(48,25,13);
                fill(48,25,13);
                rect(pointA.x+25,pointA.y-10,15,30);
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y);
            
            }
        }
    }
    fly(){
        this.body.bodyA = null
    }
    attach(){
        this.body.bodyA = this.bodyA;
    }
}