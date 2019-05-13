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