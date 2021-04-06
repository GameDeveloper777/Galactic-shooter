const Body=Matter.Body;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;
var world;
var engine;
function setup() {
  createCanvas(800,400);
  
  engine=Engine.create()
  world=engine.world;
  enemy1=new AlienShip(200,200,100,100)
/*   enemy2=new AlienShip(200,200)
  enemy3=new AlienShip(200,200)
  enemy4=new AlienShip(200,200)
  enemy5=new AlienShip(200,200)
  enemy6=new AlienShip(200,200)
  enemy7=new AlienShip(200,200)
  enemy8=new AlienShip(200,200)
  enemy9=new AlienShip(200,200)
  enemy10=new AlienShip(200,200)
  enemy11=new AlienShip(200,200)
  enemy12=new AlienShip(200,200)
  enemy13=new AlienShip(200,200)
  enemy14=new AlienShip(200,200)
  enemy15=new AlienShip(200,200)
  enemy16=new AlienShip(200,200)
  enemy17=new AlienShip(200,200)
  enemy18=new AlienShip(200,200) */

  player=new PlayerShip(200,200)

}

function draw() {
  background(128,128,128); 
  Engine.update(engine)
  enemy1.display()
  /* enemy2.display()
  enemy3.display()
  enemy4.display()
  enemy5.display()
  enemy6.display()
  enemy7.display()
  enemy8.display()
  enemy9.display()
  enemy10.display()
  enemy11.display()
  enemy12.display()
  enemy13.display()
  enemy14.display()
  enemy15.display()
  enemy16.display()
  enemy17.display()
  enemy18.display()
 */
  player.display()


  
  
}