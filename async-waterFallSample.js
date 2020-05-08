var async = require('async');
var file = 'c.txt'
var fs = require('fs')

async.waterfall([
    function exists(done){
        fs.exists(file, function(exists){
            done(null, exists)
        })
    },
    function statCheck(existsStatus, done){
        if(existsStatus){
            fs.stat(file, function(err, statcChecks){
                done(err, statcChecks);
            })
        }
    },
    function readData(stakcheck, done){
        if(stakcheck.isFile()){
            fs.readFile(file, function(err, data){
                done(err, data)
            })
        }
    },
    function printData(dataInfo, done){
        if(dataInfo){
            console.log(dataInfo.toString());
            done(null);
        }
    }
], function(err){
    if(err){
        throw err
    }
})
