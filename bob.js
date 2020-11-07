class Bob{
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 0.4
        }
        this.width = r * 2;
        this.body = Matter.Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position
        ellipseMode(CENTER);
        fill("white");
        ellipse(pos.x, pos.y, this.width);
    }
}