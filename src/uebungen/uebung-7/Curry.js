// Curry 
const curry = (fun, arg1) => {
    return (arg2) => {
      return fun(arg1, arg2);
    };
  }
  
  const add = (a, b) => a + b;
  const add3 = curry(add, 3);
  console.log(add3(4)); 

  const mul = (a, b) => a * b;
  console.log(curry(mul, 5)(6)); 
  