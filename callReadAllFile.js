var fs = require("fs")

fs.readFile('a.txt', function(err, data){
    if(data){
        fs.readFile('b.txt', function(err, data2){
            if(data2){
                fs.readFile('c.txt', (err, data3)=>{
                    if(data3){
                        fs.readFile('pizza.txt', (err, data4)=>{
                            console.log(data.toString());
                            console.log(data2.toString());
                            console.log(data3.toString());
                            console.log(data4.toString());
                                                        
                        })
                    }
                })
            }
        })
    }
})

