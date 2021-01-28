function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
}


f=0;

setup=_=>

	{
		createCanvas(1590,850)
	};

draw=_=>
	{
		background(0);

		noFill();

		for(c=0;c<32;c++)
		{
			m=sin(((cos((f/150+((9-c)/18)+1)%1*PI*2)+1)/2)/1*(PI/2));

			for(i=0;i<9;i++)
	
			{
				stroke(i/9*300+80);
				ellipse(c*50,((i/1.9)*m*200)+9,30);
			}
		}
	
		f++
	}