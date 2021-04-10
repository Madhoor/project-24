class iron {
    constructor(x, y) {
        var options = {
          'restitution':0.8,
          'friction': 3,
          'density' :30
        };
        this.body = Bodies.rectangle(x, y, 100 ,100, options);
        this.width = 100;
        this.height = 100;
        World.add(world, this.body);
      };
      display(){
        var pos = this.body.position;
        //pos.x = mouseX;
        //pos.y = mouseY;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke('grey ');
        fill('offwhite');
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();
      };
}