class dustbin
{
	constructor(x,y,width,height)
	{
		//this.image = loadImage("New folder/dustbingreen.png");
		
		this.dustbinWidth=200;
		this.dustbinHeight=250;
		this.wallThickness=20;
		//this.angle=0;	
		
		this.body = Bodies.rectangle(x, y, width, height);
		this.x=x;
		this.y=y;
        this.width = width;
        this.height = height;
        this.image = loadImage("New folder/dustbingreen.png");
        World.add(world, this.body);
		this.bottomBody=Bodies.rectangle(this.x, 679, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(950, 600, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(1250,600, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
		
	}
	display()
	{
		  
		/*	var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

		   

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			//imageMode(CENTER);
            rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()*/

			var angle = this.body.angle;
			push();
			translate(this.body.position.x, this.body.position.y);
			rotate(angle);
			imageMode(CENTER);
			image(this.image, 0, 0, this.width, this.height);
			pop();
			
	}

}