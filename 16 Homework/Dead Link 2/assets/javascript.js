window.onload = app;

//========== AUDIO ==========
function app()
{
	var audio = document.querySelector('audio');
		audio.load();
	audio.addEventListener('canplaythrough', function(){
		audio.play();
	});
}

//========== TESTING ==========
function callback(event){
	console.log(event.type)
}

//========== LINK IS ALIVE ==========

var rise = document.querySelector('.link');
rise.addEventListener('mouseover', alive);

function alive(){
	var audio = document.querySelector('.ding');
		audio.load();
	audio.addEventListener('canplaythrough', function(){
		audio.play();
	});
}

//========== ADD HEALTH ==========

var health = document.querySelector('.cloud');
health.addEventListener('click', heart);

function heart(){
	health.src = "./img/hearts.png";
}

