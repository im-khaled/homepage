// function methodize
function methodize(binaryFn) {
    return function (y) {
      return binaryFn(this, y);
    };
  }
  const add = (a, b) => a + b;

  Number.prototype.add = methodize(add);
  
  

  function demethodize (unäreMethode) {
    return function(x, y) {
    return unäreMethode.call(x, y);
  }};

  Number.prototype.add = function(y) {
    return this + y;
  };

  const binaryAdd = demethodize(Number.prototype.add);
  

// function composeu
const composeu = (double, square) => x => square(double(x));

const double = x => x * 2;
const square = x => x * x;

console.log(composeu(double, square)(3)); 
