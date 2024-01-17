//Aufgabe 1
function identity(a) {
    return a;
  }

//Aufgabe 2
function identity_function(a) {
    return function() {
      return a;
    };
  }
  
// Aufgabe 3
function add(x, y) {
    return x + y;
  }
  
  function mul(x, y) {
    return x * y;
  }
  
//Aufgabe 4
function addf(x) {
    return function(y) {
      return x + y;
    };
  }
  
  // Example usage:
  const result = addf(3)(4); 
  console.log("Result:", result);
  
//aufgabe 5
function applyf(binaryFunc) {
    return function(x) {
      return function(y) {
        return binaryFunc(x, y);
      };
    };
  }
  const addff = applyf(add);
  const mulf = applyf(mul);
  
  const resultAdd = addff(3)(4); // Result: 7
  const resultMul = mulf(5)(6); // Result: 30
  
  console.log("Result (addf):", resultAdd);
  console.log("Result (mulf):", resultMul);
  