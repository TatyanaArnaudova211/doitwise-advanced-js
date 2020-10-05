var anotherHi;
// console.log(typeof hi);      //undefined
// console.log(typeof hello);  //'function' (string)
// console.log(typeof anotherHi);  // undefined


console.log(typeof hi === 'function' ? hi() : 'hi is not a function'); 
console.log(typeof hello === 'function' ? hello() : 'hello is not a function');

function hello() {
console.log('hi');
}

var hi = function anotherHi() {
 console.log('hello');
}

console.log(typeof hihi === 'function' ? hihi() : 'hihi is not a function');

// hi(); // print  hello
/*
What is the output of this script and explain why:

The output is: 
hi is not a function - because hi is undefined 
hi - because hello is function
undefined -  ????
hihi is not a function - hihi is not defined, the JS parser defined it in global scope automatically

*/