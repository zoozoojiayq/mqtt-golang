/******************************闭包*****************************/
var j=0;
function bibao(){
	console.log(j);
}

function testbibao(fun){
		fun();
}

testbibao(bibao);//输出0
for(var i=0; i<10; i++){
	j++;
}
testbibao(bibao);//输出10




