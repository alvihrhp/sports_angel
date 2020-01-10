


        function onSignIn(googleUser) {
            $('#home-page').hide();
            const id_token = googleUser.getAuthResponse().id_token;
            $.ajax({
                type : 'post',
                url  : 'http://localhost:3000/users/signIn',
                data : {
                    id_token
                }
            })
            .done((response) => {
                console.log('res',response)
                $('#tombolLogin').fadeOut();
                $('#home-page').show();
				$('#category').show();
            });
        }
	
        function signOut () {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function() {
                console.log('User signed out.');
                $('#home').hide();
                $('#category').hide();
				$('#tombolLogin').fadeIn();
				$('#login').show()
            });
		}
		
		function showNba(event){
			
			$("#nba").show()
			$("#category").hide()
			$("#login").hide()
		}

		function football(){
			$("#football123").show()
			$("#category").hide()
			$("#login").hide()
		}

		function back(){
			$("#football123").hide()
			$("#nba").hide()
			$("#category").show()
			$("#login").hide()
		}