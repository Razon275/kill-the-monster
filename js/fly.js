class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        
        this.pointB = pointB
        this.fly = Constraint.create(options);
        World.add(world, this.fly);
    }
   
    
    

}