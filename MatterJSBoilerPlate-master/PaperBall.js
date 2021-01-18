class PaperBall{
    constructor(x, y, radius, {options}) {
        var options = {
            'isStatic':true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, radius, {options}, {maxSides});
        this.radius = radius;
        this.options = {options};
        this.maxSides = {maxSides};
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        pop();
      }
}
    
