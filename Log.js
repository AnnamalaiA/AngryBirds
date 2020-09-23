class Log {
    constructor(x,y,width) {
        var log_options = {
          restitution: 0.8,
          density: 1,
          friction: 0.5
        }
        this.log = Bodies.rectangle(x,y,width,10,log_options);
        World.add(world,this.log); 
        this.width = width;
        this.height = 10;
        console.log(this.log)
    }
    display(){
      var pos = this.log.position;
      var angle = this.log.angle;
      rectMode(CENTER);
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rect(0,0,this.width,this.height);
      pop();
    }
}