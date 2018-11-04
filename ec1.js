document.getElementById("id_text").innerHTML="Logic version  2018.11.04.06";

//atasare butonului functia rezolva
document.getElementById("buton").addEventListener("click",rezolvare);

function rezolvare()
{
//citirea elementeleor
	var a = document.getElementById("var_a").value;
	var b = document.getElementById("var_b").value;
	var c = document.getElementById("var_c").value;
//calculare lor	
	var delta=b*b-4*a*c;
	var x1_re,x2_re,x1_im,x2_im;
	if (delta>=0)
	{
	   x1_re=(-b+Math.sqrt(delta))/(2*a);	
	   x2_re=(-b-Math.sqrt(delta))/(2*a);	
	}
	else
	{   x1_im=-b/2*a
		x1_re=(Math.sqrt(-delta))/2*a;
		x2_re=(Math.sqrt(-delta))/2*a;
	}
//afisarea solutiilor	

    if (delta>=0)
	{
		document.getElementById("r1").innerHTML=x1_re;
		document.getElementById("r2").innerHTML=x2_re;
	}
	else
	{
		document.getElementById("r1").innerHTML=x1_im + " + " + "x1_re" + "i";
		document.getElementById("r2").innerHTML=x1_im + " + " - "x1_re" + "i";
	}
	
}