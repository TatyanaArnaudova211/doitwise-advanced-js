// someVariable is declared in the global scope
var someVariable = 100;

// sum is declared in the global scope
function sum(a, b) {
  // a is declared in the sum scope
  // b is declared in the sum scope
  return a + b;
}

// avg is declared in the global scope
function avg(arr) {
  // arr is declared in the avg scope
  total = 0;
  // total is declared in the global scope !!!! not declared as a var total=0
  for (var i = 0; i < arr.length; i++) {
    // i is declared in the loop scope
    total = sum(total, arr[i]);
    // explain how the parser finds the sum function:
    // 1. the parser finds the sm function in the global scope, because the function is defined there
    // 2. 
  }
  return total / arr.length;
}

console.log(avg([1, 2, 3]), someVariable, total);
/* What is the result of this operation? :
2, 100, 6
*/
// test is declared in the global scope
function test(a, b) {
  // a is declared in the test scope
  // b is declared in the test scope
  function best(c, d) {
    // best is declared in the test scope
    // c is declared in the best scope
    // d is declared in the best scope
    function rest(e, f) {
      // rest is declared in the best scope
      // e is declared in the rest scope
      // f is declared in the rest scope
      return e + f + c + d + a + b;
      /* explain how the parser finds e, f, c, d, a, b:
        the parser find e and f in function (rest) scope
        the parser find c and d because they are in best scope, the rest scope can see them because it is also in best scope 
        the parser find a and b because they are in test scope, the rest scope can see them because it is also in test scope 

      */
    }
    return rest(c, d);
  }
  return best(a, b);
}