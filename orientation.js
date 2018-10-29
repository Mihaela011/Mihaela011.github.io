document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.10.29.16";
window.addEventListener("deviceorientation", "on_device_orientation");

//-----------
function on_device_orientation(e)
{
	documen.getElementById("id_alpha").innerHTML=e.alpha;
	documen.getElementById("id_beta").innerHTML=e.beta;
	documen.getElementById("id_gamma").innerHTML=e.gamma;
}
//--------------------