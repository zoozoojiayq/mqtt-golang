/********************************************************
以下演示的的是node的事件驱动机制、回调机制
1，第9行和第12行分别继承EventEmitter的属性和原型方法
2，node的回调函数是在JS单线程环境中运行的，第24行、31行的回调函数不会同时执行，只有一个执行完毕才会执行另外一个。
3，node的网络IO和文件IO操作执行，是在C++的线程池环境中并发执行的。
********************************************************/
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




