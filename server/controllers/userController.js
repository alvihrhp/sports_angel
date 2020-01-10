'use strict';

const User = require('../models/user');
const jwt = require('../helper/jwt');

class UserController {
	static signIn(req, res, next) {
		const { name, email, picture } = req.dataUser;
		User.findOne({ email })
			.then((result) => {
				if (result) {
					return result;
				} else {
					return User.create({
						name,
						email,
						password : 'kodok'
					});
				}
			})
			.then((result) => {
				console.log('masukkkkk')
				const newToken = jwt.generateToken(result);
				res.status(200).json({
					message : 'login success',
					token   : newToken,
					picture : picture,
					name    : result.name,
					email   : result.email
				});
			})
			.catch((err) => {
				res.status(500).json(err);
			});
	}
}

module.exports = UserController;
