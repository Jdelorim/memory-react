'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PlayersSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    currentScore: {
        type: Number,
        required: true,
        default: 0
    },  
    highScore: {
        type: Number,
    }
});

const Players = mongoose.model('Players', PlayersSchema);

module.exports = Players;