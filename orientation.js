document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.10.29.19";
window.addEventListener("deviceorientation", "on_device_orientation");

//-----------
function on_device_orientation(e)
{
	documen.getElementById("id_alpha").innerHTML=e.alpha;
	documen.getElementById("id_beta").innerHTML=e.beta;
	documen.getElementById("id_gamma").innerHTML=e.gamma;
}

var canvas= document.getElementById("id_canvas");
var context=canvas.getContext("2d")


context.beginPath();
context.arc(canvas.width/2+e.gamma/90*(canvas.width/2-R), canvas.height/2+e.beta/90*(canvas.width/2-R),R,0,2*Math.PI);
context.stroke();
//--------------------