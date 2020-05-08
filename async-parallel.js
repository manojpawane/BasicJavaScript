var fs = require('fs')
var messageFile = 'faceBookMessages.txt'
var notificationFile = 'faceBookNotification.txt'
var async = require('async')

async.parallel({
   Task1 : function(callback){
        fs.readFile(messageFile, function(err, data){
            callback(err, data.toString());
        })
    },

  Task2:  function(callback){
        fs.readFile(notificationFile, function(err, dataInfo){
            callback(err, dataInfo.toString());
        })
    }
},
function(err, result){
    console.log(result);
    
})