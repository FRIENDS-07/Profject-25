class Ground{

  constructor(){

      var options = {
          isStatic : true
      }

      this.body = Bodies.rectangle(400,590,800,50,options);
      this.width = 800;
      this.height = 50;
      World.add(world,this.body);

  }

  display(){
      rectMode(CENTER);
      fill("yellow");
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
  }

}