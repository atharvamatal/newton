class circle{

constructor(x,y,radius){

    var  options={
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }

this.body=Bodies.circle(x,y,50,options);
this.radius=50
this.x=this.x
this.y=this.y

World.add(world,this.body);

}


display(){
    ellipseMode(CENTER)
ellipse(this.x,this.y,50)

}







}