class SlingShot{
    constructor(body,point){
        var options={
            bodyA:body,
            pointB:point,
            length:10,
            stiffness:0.4
        }
        this.sling=Matter.Constraint.create(options)
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        image(this.sling1,230,33);
        image(this.sling2,203,33);
        if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.pointB;
        stroke('#301608')
        if(pointA.x<250){
            push();
            strokeWeight(7);
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3)
            line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
            image(this.sling3,pointA.x-30,pointA.y-10,15,30)
            pop();
        }
        else{
            push();
            strokeWeight(7);
            line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3)
            line(pointA.x+25,pointA.y,pointB.x-10,pointB.y)
            image(this.sling3,pointA.x+25,pointA.y-10,15,30)
            pop();
        }
    }
    }
}