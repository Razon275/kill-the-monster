class Hero
{
	constructor(x,y,width,height)
	{
		var options={
			density:1,
            frictionAir:1
            
			
			}
		this.x=x;
		this.y=y;
		this.height=height;
		this.width=width;
        this.image=loadImage("images/Superhero-01.png")
		this.body=Bodies.rectangle(this.x, this.y,this.width,this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var heropos=this.body.position;		

			push()
			translate(heropos.x, heropos.y);
			
			
			
			
			image(this.image,0,0,this.width,this.height)
			pop()
			
	}

}