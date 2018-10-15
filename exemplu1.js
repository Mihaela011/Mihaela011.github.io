document.getElementById("id_buissness_version").innerHTML="Buissness version: 2018.10.15.0"

function rezolva ()
{   //citre
	var a= document.getElementById("id_a").value;
	var b= document.getElementById("id_b").value;
	var c= document.getElementById("id_c").value;
	
	//rezolvare
	
	  var delta=b*b-4*a*c;
	  var x1_re,x1_im,x2_re,x2_im;
	    if (delta>=0)
		{
			var x1= (-b+ Math.sqrt(delta))/(2*a);
			var x2= (-b- Math.sqrt(delta))/(2*a);
		}
		else 
		{
			x1_re=-b/(2*a);
			x1_im=Math.sqrt(-delta)/(2*a);
		
		    x2_re=-b/(2*a);
			x2_im=-Math.sqrt(-delta)/(2*a);
		}
		
	
	
	//sriere
	
	document.getElementById("id_x1").innerHTML=x1_re+ "+"+ x1_im="i";
	document.getElementById("id_x1").innerHTML=x1_re+ "+"+ x1_im="i";
}