function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
}


f=0;

setup=_=>

	{
		createCanvas(192,157)
	};

draw=_=>
	{
		background(0);

		noFill();

		for(c=0;c<10;c++)
		{
			m=sin(((cos((f/300+((9-c)/18)+1)%1*PI*2)+1)/2)/1*(PI/2));

			for(i=0;i<9;i++)
	
			{
				stroke(i/9*175+80);
				ellipse(c*21,((i/9)*m*162)+4,18);
			}
		}
	
		f++
	}