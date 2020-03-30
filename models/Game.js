'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GameSchema = new Schema({
   name: {
       type: String,
       required: true
       
   },
   imageRef: {
       type: String,
       requrired: true
   }

})

const Game = mongoose.model('Game', GameSchema);
module.exports = Game;
