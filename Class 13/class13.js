/**
 * play with qs, qsa
 */

window.onload = app;

function qs(selector){
	return document.querySelector(selector);
}

function qsa(selector){
	return document.querySelectorAll(selector);
}

// var qs = document.querySelector; //--> NO.

function app(){
	var container = qs('.container'); //--> single element, returns the first one it finds, null if nothing found
	console.log(container);

	var paragraphs = document.querySelectorAll('p'); //--> Array of DOM elements, empty array if nothing found
	console.log(paragraphs);

	// find .innerP item
	// method 1
	console.log(qs('.container .innerP'))
	// method 2
	var innerP = qs('.container').querySelector('.innerP');
	console.log(innerP);

	console.log(innerP.innerText);
	console.log(container.innerHTML);
	console.log(container.outerHTML);

	container.innerHTML = "GOTCHA";

	/// create a `ul` dynamically (in JavaScript)
	// and add a bunch of `li` elements to it

	var quotes = ['GET IN THE CHOPPAAAAAAA', 'Be like water.', 'BIG PAPA', 'Learn JS', 'Be kool, stay in skool'];

	// method 1
	var li_html = '';
	quotes.forEach(function(quote){
		li_html += '<li>'+quote+'</li>';
	});

	container.innerHTML = '<ul>'+li_html+'</ul>';

	// method 2
	var ul = container.querySelector('ul');
	quotes.forEach(function(quote){
		var li = document.createElement('li');
		li.innerText = quote;
		ul.appendChild(li);
	})
}

