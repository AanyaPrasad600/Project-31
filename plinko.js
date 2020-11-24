class Plinko {
    constructor(x,y,radius) {
        var option ={
            isStatic: true,
            restitution: 0,
            friction: 1
        }

        this.body = Bodies.circle(this.x,this.y,(this.radius),option);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world, this.body);
    }

	display()
	{
        var plinkoPos = this.body.position;

        push();
		translate(plinkoPos.x, plinkoPos.y);
		rotate(this.body.angle);
		fill("white");
        ellipseMode(CENTER);
        pop();
 }
}