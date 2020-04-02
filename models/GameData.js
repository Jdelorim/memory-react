'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GameDataSchema = new Schema({
    title: {
        type: String,
        requried: true
    },
    gameData: [{
        name: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        }
    }]
})

const GameData = mongoose.model('GameData', GameDataSchema);
module.exports = GameData;