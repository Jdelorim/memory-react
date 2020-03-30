'use strict'

const userRoutes = require('express').Router();
const Players = require('../models/Players');

module.exports = app => {
    
    userRoutes.route('/register').post((req, res)=> {
        console.log(req.body);
        const {userName, userPassword} = req.body;
        Players.findOne({userName}).then(data => {
            if(data) {
                console.log('username taken');
                return res.send({success: false, msg: 'Username is already taken!' });
            } 
                const newPlayer = new Players(req.body);
                newPlayer.save().then((result)=> {
                    console.log(result);
                    return res.send({
                        success: true,
                        msg: 'Created new account!'
                    });
                }).catch(err=>{
                    if(err) return res.send('account creation failed!')
                })
            
        })
    });

    userRoutes.route('/player').get((req,res)=>{    
        Players.findOne({})
    })


app.use('/users', userRoutes);
}
