function somefun(){
    function inner(){
        var inner1 = 2
    }
    function innerTwo(){
        var inner2 = 5;
        function foo(){
            var data = inner2 + inner1;
            console.log(data);
        }
    }
}