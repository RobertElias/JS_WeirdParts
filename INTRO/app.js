function b(){
    console.log('Called b!')
}
 b();
console.log(a)

var a = 'Hello World!';

console.log(a);
//////////////////////

//invocation

function a(){
    b();
    var c;
}

function b(){
    var d;
}

a();
var d;

//Variable Environment: Where is the variable

function b(){
    var myVar;
}

function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a();