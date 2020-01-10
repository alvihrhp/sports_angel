'use strict';

$(document).ready(function() {
	$('#category').hide();
});

function onSignIn(googleUser) {
	$('#home').hide();
	var id_token = googleUser.getAuthResponse().id_token;
	$.ajax({
		type : 'post',
		url  : 'http://localhost:3000/users/signIn',
		data : {
			id_token
		}
	}).done((response) => {
		$('#tombolLogin').fadeOut();
		$('#home').show();
		$('#category').show();
	});
}

function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function() {
		console.log('User signed out.');
		$('#home').hide();
		$('#category').hide();
		$('#tombolLogin').fadeIn();
	});
}
