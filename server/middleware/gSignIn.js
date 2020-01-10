'use strict';

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(
	'28377485352-q817kugueua3da6emqrous1nglu0eoos.apps.googleusercontent.com'
);

module.exports = (req, res, next) => {
	client
		.verifyIdToken({
			idToken  : req.body.id_token,
			audience : '28377485352-q817kugueua3da6emqrous1nglu0eoos.apps.googleusercontent.com'
		})
		.then((ticket) => {
			console.log(ticket,'tikettt')
			const payload = ticket.getPayload();
			req.dataUser = payload;
			next();
		})
		.catch(err=>{
			console.log(err)
		});
};
