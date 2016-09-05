util=require('util');

hello = function(){ console.log('Hello world');}


call = util.deprecate(
	function (){ 

	return hello()

} , 
	    'Call function is deprecated use hello instead of call ');


console.log(call());



// check https://nodejs.org/en/blog/release/v6.0.0/ for why we have seen this