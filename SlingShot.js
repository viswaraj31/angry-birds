class SlingShot{
    constructor(body,point){
        var options={
            bodyA:body,
            pointB:point,
            length:10,
            stiffness:0.1
        }
        this.sling=Matter.Constraint.create(options)
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.pointB;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
}