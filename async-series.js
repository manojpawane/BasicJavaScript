var async = require('async');
var fs = require('fs')
var messageFile = 'faceBookMessages.txt'
async.series([
    function exists(callback){
        fs.exists(messageFile, function(exist){
            if(exist){
                callback(null, exist)
            }
        })
    },
    function statCheck(callback){
        fs.stat(messageFile, function(err, statCheck){
            if(err){
                throw err
            }
            else{
                callback(null, statCheck.isFile());
            }
        })
    },
    function readFile(callback){
        fs.readFile(messageFile, function(err, data){
            callback(null, data.toString());
        })
    }
],
function(err, result){
    console.log((result));
    
});