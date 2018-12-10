document.getElementById("id_logic_version").innerHTML="Logic version 2018.12.10.0"
document.getElementById("id_get_voices").addEventListener=("click", on_get_voices)


var synth =  window.speechSynthesis;


function on_get_voices()
{   document.getElementById("id_voices_list").innerHTML = " ";
	var voices = synth.getVoices();
	for ( var i=1; i<voices.length; i++)
		document.getElementById("id_voices_list").innerHTML +=
	        voices[i].lang + " " + voices[i].name + "<br>";
}
