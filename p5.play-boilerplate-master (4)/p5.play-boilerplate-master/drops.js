class Drops{
    constructor(){
        this.body=Bodies.circle(random(50,350),-10,5)
        World.add(world,this.body)
    }display(){
        ellipse(this.body.position.x,this.body.position.y,5,5)
    }
}