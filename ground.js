class Ground{

constructor(){
    var ground_options ={
        isStatic: true
    }

  this.body=Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,this.body);



}
display(){
fill("grey");
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,400,20);



}



}