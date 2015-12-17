/********************************************************/
var EventEmitter = require("events");
var util = require("util");

function MyObject(){
	EventEmitter.call(this);
}

util.inherits(MyObject,EventEmitter);

MyObject.prototype.start = function(){
	this.emit("start",1);
}

MyObject.prototype.stop = function(){
	this.emit("stop",2);
}

var test = new MyObject();
test.on("start",function(args){
	for(var i=0; i<10; i++){
		console.log("listen started..."+args);
		
	}
});

test.on("stop",function(args){
	for(var i=0; i<10; i++){
	console.log("listen stoped..."+args);
}
})


test.start();
test.stop();


/******************************闭包*****************************/
var j=0;
function bibao(){
	console.log(j);
}

function testbibao(fun){
		fun();
}

testbibao(bibao);
for(var i=0; i<10; i++){
	j++;
}

