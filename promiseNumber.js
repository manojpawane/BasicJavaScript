var fs = require('fs');
var file = 'c.txt'

function data(){
    return new Promise((resolve, reject)=>{
        fs.readFile(file, function(err, data){
            if(err){
                throw err
            }
            else{
                resolve(data);
            }
        })
    })
    .then(data=>{
        console.log(data.toString());       
        var newArray = data.toString().split(" ");
        var newArrayTwo = newArray.map(Number);
            return bubble(newArrayTwo);
    })
    .then(sortedData=>{
        console.log(sortedData);
        
    })
}

function bubble(a){
    return new Promise(function(resolve, reject){
        console.log(a);    
        var swapped;
        do {
            swapped = false;
            for (var i=0; i < a.length-1; i++) {
                if (a[i] > a[i+1]) {
                    var temp = a[i];
                    a[i] = a[i+1];
                    a[i+1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
    resolve(a);
    })
}

data();