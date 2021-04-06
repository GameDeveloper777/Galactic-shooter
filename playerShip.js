class PlayerShip{
    constructor(x,y){

        this.body=Bodies.rectangle(x,y,10,10)
        this.x=x
        this.y=y
        this.width=10
        this.height=10
        World.add(world,this.body)
        this.player=loadImage("Images/player-ship2.png")
    }
    display(){
        imageMode(CENTER)
        image(this.player,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}