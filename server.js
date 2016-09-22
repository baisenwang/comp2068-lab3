// module ref's
var connect = require('connect');
var url = require('url');

// create new connect object
var app = connect();

/* creae callback function
 function accepts amount from url querystring
 calculate number
 display formular
 */
var get = function(req,res,next){

    var qs = url.parse(req.url,true).query;
    var method = qs.method;
    var x = qs.x;
    var y = qs.y;

    var calculate = function(method,x,y){
        if(method == 'add')             res.end('Output: '+ x + ' + ' + y + ' = ' +(x*1+y*1));
        else if(method == 'subtract')   res.end('Output: '+ x + ' - ' + y + ' = ' +(x-y));
        else if(method == 'multiply')   res.end('Output: '+ x + ' * ' + y + ' = ' +(x*y));
        else if(method == 'divide')     res.end('Output: '+ x + ' / ' + y + ' = ' +(x/y));
        else res.end('Method should be  "add", "subtract", "multiply", or "divide"!');
    }
    calculate(method,x,y);

}
// call calculate function
app.use(get);

// put the port
app.listen(3000);
console.log('Connect running on port 3000');
