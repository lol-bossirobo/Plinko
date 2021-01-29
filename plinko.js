class Plinko {

    constructor(x,y,radius){

        var options = {

            isStatic:true

        }
        
        this.body = Bodies.circle(x,y,this.r/2,options);
        this.r = radius;
        this.color=color("white")
        World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;
        fill("white");
        rect(pos.x,pos.y,this.r)

    }




}