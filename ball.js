class Ball {
    constructor(x,y,radius){
        var options = {
            'restitution': 0.5,
            'density':0.7,
            'friction':1
            
        }
        this.Body = Matter.Bodies.circle(x,y,radius/2,options);
        this.radius = radius;
        this.height = height;
        this.image = loadImage("sprite/ball.png");
        World.add(world,this.Body);
    }
    display(){
        var pos = this.Body.position;
        var angle = this.Body.angle;
        push()
        imageMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image,0, 0, this.radius,this.radius);
        pop();
    }
}