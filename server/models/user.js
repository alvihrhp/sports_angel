'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
	name     : {
		type     : String,
		required : [ true, 'name is requires' ]
	},
	email    : {
		type     : String,
		require  : [ true, 'email is required' ],
		match    : [ /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address' ],
		validate : {
			validator : function(value) {
				return mongoose.models.User.findOne({ email: value }).then((result) => {
					if (result) {
						return false;
					} else {
						return true;
					}
				});
			},
			message   : 'Email already used'
		}
	},
	password : {
		type    : String,
		require : [ true, 'password is required' ]
	},
	schedule : {
		type : [ { type: Schema.Types.ObjectId, ref: 'Schedule' } ]
	}
});

const Users = mongoose.model('User', userSchema);

module.exports = Users;
