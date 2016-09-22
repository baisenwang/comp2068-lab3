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
var calculate = function(req,res,next){

    var qs = url.parse(req.url,true).query;
    var method = qs.method;
    var x = qs.x;
    var y = qs.y;

    if(method == 'add')             res.end('Output: '+ x + ' + ' + y + ' = ' +(x*1+y*1));
    else if(method == 'subtract')   res.end('Output: '+ x + ' - ' + y + ' = ' +(x-y));
    else if(method == 'multiply')   res.end('Output: '+ x + ' * ' + y + ' = ' +(x*y));
    else if(method == 'divide')     res.end('Output: '+ x + ' / ' + y + ' = ' +(x/y));
}
// call calculate function
app.use(calculate);

// put the port
app.listen(3000);
console.log('Connect running on port 3000');
