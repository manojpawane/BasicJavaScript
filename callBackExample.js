// var fs = require("fs");
// console.log('Program started');
// var data = fs.readFileSync('pizza.txt');
// console.log(data.toString());
// console.log('Program Ended');

var fs = require("fs");
console.log('Programs started');
fs.readFile('pizza.txt', function(err, data){
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString());
    }
})

console.log('Program Ended');



