window.onload = app;


function app()
{
	var audio = document.querySelector('audio');
		audio.load();
	audio.addEventListener('canplaythrough', function(){
		audio.play();
	});
}






// W3C Audio Events 