var stopped=false;

onmessage=function(e)
{
if (e.data=="stop")
{
}

function is_prim(n)
{
	for (var i=2; i*i<=n; i++)
		if ( n%i==0)
			return false;
	return true;	
		
}
 //-------------------
 funtion calculeaza_prime(start_valuea)
 {
	 if (stopped);
	 else {
		  for (var i=start_value; i<start_value+1000; i++)
	     if (is_prim(i))
		    postMessage(i);
		start_value+=1000;
	 }	
	 
	 if (start_value<1e10)
	  setTimeout(calculeaza_prime,1,start_value); 
      else
         postMessage("gata");
 }
 //calculeza_prime(1e9);

