'use strict'

const gameDataRoutes = require('express').Router();
const GameData = require('../models/GameData');

module.exports = app =>{
    gameDataRoutes.route('/expanse').get((req, res)=>{
        console.log('hiiting expanse route');
        const title ='Expanse';
        const {name, img} = req.body;
        GameData.findOne({title}).then(data=>{
            if(data) {
                console.log(data.gameData);
                return res.send(data.gameData);
            } else {
                console.log('not returning right data');
            }
        })
    });

    app.use('/gameData', gameDataRoutes);
}