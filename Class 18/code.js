$(function(){ // same as saying window.onload = ....

	// jQuery API: http://api.jquery.com/
	// lodash API: http://lodash.com/

	// demonstrating that jQuery can get DOM elements
	document.querySelector('.profile'); // find .profile
	$('.profile'); // also finds .profile

	// just some variables
	var github_username = "matthiasak";
	var github_url = "https://api.github.com/users/";

	// putting the URL and username together gives me the exact API URL
	var url = github_url+github_username;
	console.log('grabbing profile data:', github_url+github_username);

	// downloads the entire JSON text
	var github_data = $.getJSON(url);

	// template
	var template_string = document.querySelector('#github_profile_template').textContent;
	var createProfileStringFromData = _.template(template_string);

	// when that finishes downloading, jQuery creates the object and passes it into the callback function
	github_data.then(function(data){
		var github_html = createProfileStringFromData(data);
		$('body').append(github_html);
	});

});