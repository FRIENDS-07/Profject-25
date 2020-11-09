class Ball{

    constructor(){

        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2

        }

        this.body = Bodies.rectangle(300,250,50,50,options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("Pics/paper.png");
        World.add(world,this.body);

    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }

}