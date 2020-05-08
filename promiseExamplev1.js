const fs = require('fs');
const util = require('util');
var read = util.promisify(fs.exists);

read('pizza.txt')
.then((exists)=>{
    if(exists){
        fs.stat('pizza.txt', function(err, statCheck){
            if(err){
                throw err
            }
        })
    }
    else{
        throw exists
    }
})
.then(()=>{
    fs.readFile('pizza.txt', function(err, data){
        if(err){
            throw err
        }
        else{
            console.log(data.toString());
        }
    })
})
.catch(err=>{
    console.log(err);
})