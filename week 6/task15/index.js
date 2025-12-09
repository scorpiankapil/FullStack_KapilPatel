function runTask15() {
  let output = "";

  
  function outer() {
    let count = 0;
    return function inner() {
      count++;
      return count;
    };
  }
  let counter = outer();
  output += "Closure Counter: " + counter() + ", " + counter() + "<br>";


  let iifeResult = (function () {
    return "IIFE executed immediately!";
  })();
  output += iifeResult + "<br>";

  function greet(message) {
    return function (name) {
      return message + ", " + name;
    };
  }
  let sayHello = greet("Hello");
  output += sayHello("Aman") + "<br>";

 
  let x = 10;
  function test() {
    let y = 20;
    function innerTest() {
      return x + y;
    }
    return innerTest();
  }
  output += "Lexical Scope Output: " + test() + "<br>";

  document.getElementById("output").innerHTML = output;
}
