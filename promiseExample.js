var fs = require("fs")
var file = 'pizza.txt'
function data(){
return new Promise((resolve, reject)=>{
    fs.exists(file, function(status){
        if(!status){
            throw status
        }
        else{
            resolve(status)
        }
    })
})
.then(()=>{
    fs.stat(file, function(err, fileStat){
        if(err){
            throw err
        }
    })
})
.then(()=>{
    fs.readFile(file, function(err, data){
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
    
}
data();