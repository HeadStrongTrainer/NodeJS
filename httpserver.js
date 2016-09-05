var http = require('http');
// require is to import any kind of module so that we can use it in our application


//this is to check what type the http is
console.log(typeof(http));


// Requiring the node-router module and we will get a function to use
var Router = require('node-router');

//this is to check type of the Router
console.log(typeof(Router));

var router = Router();



var route = router.push;
console.log(typeof(route));
route('GET',  '/ganesh', function(req, res ){
res.send("Hello Ganesh ! ");

});
route('POST',  '/surya', function(req, res ){
res.send("Hello SURYA ! ");

});
route('GET',  '/', function(req, res ){
res.send("Hello World ! ");

});

var server = http.createServer(router).listen(3002);