class Paper
{

    constructor(){

        var options = {

            'isStatic' : false,
            'restitution' : 0.3,
            'friction': 0.5,
            'density': 1.2

        }

        this.radius = 30

        this.body = Bodies.circle(50 , 100 , this.radius , options)
        World.add(world,this.body);
        
        

    }

    display(){

        var pos = this.body.position
        
        fill ("white")
        ellipseMode(RADIUS)
        circle(pos.x , pos.y  , this.radius)

    }
    

}
