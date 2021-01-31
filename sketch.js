f=0;

setup=_=>

	{
		createCanvas(1600,900)
	};

draw=_=>
	{
		background(0);

		noFill();

		for(c=0;c<32;c++)
		{
			m=sin(((cos((f/150+((20-c)/200)+1)%1*PI*2)+1)/2)/1*(PI/2));

			for(i=0;i<12;i++)
	
			{
				stroke(i/9*300+80);
				ellipse(c*70,((i/1.9)*m*140)+40,60);
			}
		}
	
		f++
	}
