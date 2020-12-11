class Wall {
    constructor(x,y,width,height){
        var options = {
            'restitution': 0.1,
            'density':10,
            'friction':5
            
        }
        this.Body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.Body);
    }
    display(){
        var angle = this.Body.angle;
        push();
        translate(this.Body.position.x, this.Body.position.y);
        rotate(angle);
        fill("white");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}