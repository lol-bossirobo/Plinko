class Particle {

    constructor(x,y,radius){

        var options = {

            isStatic:true

        }
        
        this.body = Bodies.circle(x,y,this.r/2,options);
        this.r = radius;
        this.color = color(random(0,255),random(0,255), random(0,255))
        World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;
        fill(color(random(0,255),random(0,255), random(0,255)));
        rect(pos.x,pos.y,this.r)

    }




}