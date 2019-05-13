// function b(){
//     console.log('Called b!')
// }
//  b();
// console.log(a)

// var a = 'Hello World!';

// console.log(a);
// //////////////////////

// //invocation

// function a(){
//     b();
//     var c;
// }

// function b(){
//     var d;
// }

// a();
// var d;

//Variable Environment: Where is the variable

function b(){
    var myVar;
    console.log(myVar);
}

function a() {
    var myVar = 2;
    console.log(myVar);
    b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);