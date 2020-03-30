const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const Players = require('../models/Players');

module.exports = passport => {
    passport.use(
        new localStrategy({usernameField: 'userName'}, (userName, password, done) => {
            let lowUser = userName.toLowerCase();
            Players.findOne({userName: lowUser}).then( user =>{
                if(!user) {
                    return done(null, false, {message: 'email is not registered!'})
                }
                bcrypt.compare(password, user.password, (err, isMatch)=>{
                    if(err) throw err;
                    if(isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, {msg: 'Incorrect Password'})
                    }
                })
            }).catch(err => {
                if(err) {
                    console.log(err);
                }
            })
        })
    );
    passport.serializeUser((user, done)=>{
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        Players.findById(id, (err, user)=>{
            done(err, user);
        })
    });
}