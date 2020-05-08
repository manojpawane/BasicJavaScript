var util = require('util');
var fs = require("fs");


var exist = util.promisify(fs.exists);
var statCheck = util.promisify(fs.stat);
var read = util.promisify(fs.readFile);

Promise.all([
    exist('a.txt'),
    exist('b.txt'),
    exist('c.txt'),
    exist('pizza.txt')
])
.then(stats=>{
   return Promise.all([
        statCheck('a.txt'),
        statCheck('b.txt'),
        statCheck('c.txt'),
        statCheck('pizza.txt')
    ])
})
.then((info)=>{
    console.log(info);
   return Promise.all([
        read('a.txt'),
        read('b.txt'),
        read('c.txt'),
        read('pizza.txt')
    ])
})
.then((info2)=>{
    const [data0, data1, data2, data3] = info2
    console.log(data0.toString());
})
.catch(err=>{
 console.log(err);   
})





//     Promise.all([
//         statCheck('a.txt'),
//         statCheck('b.txt'),
//         statCheck('c.txt'),
//         statCheck('pizza.txt')
//     ])
// .then((info)=>{
    
//     const che = info.every(x=>x.isFile())
//     console.log(che)
// })