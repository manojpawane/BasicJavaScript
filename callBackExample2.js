// var fs = require("fs");
// console.log('Programs started');
// fs.exists('pizza.txt', function(status){
//     if(status){
//         console.log('status: '+status);
//         fs.stat('pizza.txt', function(err, isReadable){
//             if(err){
//                 console.log(err)
//             }
//             else{
//                 console.log(isReadable.isFile())
//                 fs.readFile('pizza.txt', function(err, data){
//                     if(err){
//                         console.log(err)
//                     }
//                     else{
//                         console.log(data.toString());
//                     }
//                 })
//             }
//         })
//     }
// })
// console.log('Program ended')


var file = 'pizza.txt'
var fs = require("fs");
fs.exists(file, existChecking);
function existChecking(exists){
    if(exists){
        fs.stat(file, checkStat);
    }
}

function checkStat(err, stat){
    if(err){
        console.log(err)
    }
    else{
        fs.readFile(file, readData);
    }
}

function readData(err, data){
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString());
    }
}