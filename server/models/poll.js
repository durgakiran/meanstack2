'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const poll = new Schema({
    
    Polls: {
        uri: {type: String},
        question: {type: String},
        userid: {type: String},
        polloptions: {type: Object}
    }
      
});

module.exports = mongoose.model('poll',poll);