const Players = require('../models/Players');
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(

	function(userName, userPassword, done) {
		Players.findOne({ userName: userName }, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!players) {
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!players.checkPassword(userPassword)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, players)
		})
	}
)

module.exports = strategy
