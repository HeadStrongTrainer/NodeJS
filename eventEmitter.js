

var EventEmitter = require('events');  


var util = require('util');

   


function MyThing() {  

            EventEmitter.call(this);

            doFirstThing();

            setImmediate(emitThing1, this);
}



util.deprecate(function(){ return MyThing}, "this function soon gonna removed please update to new version");
util.inherits(MyThing, EventEmitter);


function emitThing1(self) {  

             self.emit('thing1');

 }



 var mt = new MyThing();

 mt.on('thing1', function onThing1() {  

            console.log('this is onthing1');

});

function doFirstThing(){

 	        console.log("this is first thing ");

}

