'use strict'

const mongoose = require('mongoose');
var poll = require('../models/poll');

module.exports = {
 
 viewPolls: function(req, res){
     
     poll.find({}, function(err, polls){
         
         res.end(JSON.stringify(polls));
     });
     
 },
 
 createPolls: function(req, res){
     
     var newpoll = new poll();
     newpoll.Polls.uri="URL";
     newpoll.Polls.question=req.query.question;
    newpoll.Polls.userid=req.query.userid;
    var pollObj = {};
    console.log(req.query.polloptions);
    
    for( var i in req.query.polloptions){
        var k = req.query.polloptions[i];
        pollObj[k] = 0;
    }
    newpoll.Polls.polloptions = pollObj;
    
    newpoll.save(function(err)
    {
        if(err)
        throw err;
        console.log("Saved");
    });
    
    res.end("Poll Added");
 },
 
 updatePoll: function(req, res){
     let query = {_id:req.query.id};
     let key = req.query.option; 
     poll.findOneandUpdate(query,{ $inc: { key : 1 } },{new: true},function(err,doc){
         if(err) throw err;
         console.log(doc);
         res.end('updated');
     })
 }
 
}


