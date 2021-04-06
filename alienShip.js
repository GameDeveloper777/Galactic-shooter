class AlienShip{
    constructor(x,y,w,h){

        var options={
            isStatic:true
        }
        this.x=x
        this.y=y
        this.width=w
        this.height=h
        this.body=Bodies.rectangle(x,y,w,h,options)
        
        World.add(world,this.body)
        this.enemy1=loadImage("Images/Enemyship.png")
        this.enemy2=loadImage("Images/Enemyship1.png")
        this.enemy3=loadImage("Images/Enemyship2.png")
        this.enemy4=loadImage("Images/Enemyship3.png")
        this.enemy5=loadImage("Images/Enemyship4.png")
        this.enemy6=loadImage("Images/Enemyship5.png")
        this.enemy7=loadImage("Images/Enemyship6.png")
        this.enemy8=loadImage("Images/Enemyship7.png")
        this.enemy9=loadImage("Images/Enemyship8.png")
        this.enemy10=loadImage("Images/Enemyship9.png")
        this.enemy11=loadImage("Images/Enemyship10.png")
        this.enemy12=loadImage("Images/Enemyship11.png")
        this.enemy13=loadImage("Images/Enemyship12.png")
        this.enemy14=loadImage("Images/Enemyship13.png")
        this.enemy15=loadImage("Images/Enemyship14.png")
        this.enemy16=loadImage("Images/Enemyship15.png")
        this.enemy17=loadImage("Images/Enemyship16.png")
        this.enemy18=loadImage("Images/Enemyship17.png")
        
    }
    display(){
        imageMode(CENTER)
        var ran=Math.round(random(1,18))
        console.log(ran)
        console.log(this.width)
        if(ran===1){
            image(this.enemy,this.body.position.x,this.body.position.y,this.width,this.height)
        }else if(ran===2){
            image(this.enemy1,this.body.position.x,this.body.position.y,this.width,this.height)
        }else if(ran===3){
            image(this.enemy2,this.body.position.x,this.body.position.y,this.width,this.height)        
        }else if(ran===4){
            image(this.enemy3,this.body.position.x,this.body.position.y,this.width,this.height)           
        }else if(ran===5){
            image(this.enemy4,this.body.position.x,this.body.position.y,this.width,this.height)           
        }else if(ran===6){
            image(this.enemy5,this.body.position.x,this.body.position.y,this.width,this.height)          
        }else if(ran===7){
            image(this.enemy6,this.body.position.x,this.body.position.y,this.width,this.height)          
        }else if(ran===8){
            image(this.enemy7,this.body.position.x,this.body.position.y,this.width,this.height)         
        }else if(ran===9){
            image(this.enemy8,this.body.position.x,this.body.position.y,this.width,this.height)          
        }else if(ran===10){
            image(this.enemy9,this.body.position.x,this.body.position.y,this.width,this.height)           
        }else if(ran===11){
            image(this.enemy10,this.body.position.x,this.body.position.y,this.width,this.height)           
        }else if(ran===12){
            image(this.enemy11,this.body.position.x,this.body.position.y,this.width,this.height)           
        }else if(ran===13){
            image(this.enemy12,this.body.position.x,this.body.position.y,this.width,this.height)            
        }else if(ran===14){
            image(this.enemy13,this.body.position.x,this.body.position.y,this.width,this.height)           
        }else if(ran===15){
            image(this.enemy14,this.body.position.x,this.body.position.y,this.width,this.height)           
        }else if(ran===16){
            image(this.enemy15,this.body.position.x,this.body.position.y,this.width,this.height)          
        }else if(ran===17){
            image(this.enemy16,this.body.position.x,this.body.position.y,this.width,this.height)
        }else{
            image(this.enemy17,this.body.position.x,this.body.position.y,this.width,this.height)

        }

    }
}