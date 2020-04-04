'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PlayersSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    },
    highScore: {
        type: Number,
        required: true,
        default: 0
    },
    lastLoggedin: {
        type: String,
        required: true,
        default: Date.now()
    }

});

const Players = mongoose.model('Players', PlayersSchema);

module.exports = Players;