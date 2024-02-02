
const fibTable = new Map();
const GrosteInt = new Array();
const intZahl = new Array();
const numZahl = new Array();

function fib(n) {
  // Initialisiere die ersten beiden Fibonacci-Zahlen.
  let prevPrev = 0;
  let prev = 1;
  if(n === 0){
      return 0;
  }
  if(n === 1) {
      return 1;
  }
  // Berechne die Fibonacci-Zahlen von 2 bis n.
  for (let i = 2; i <= n; i++) {
    const current = prevPrev + prev;
    prevPrev = prev;
    prev = current;
  }

  // Rückgabe der n-ten Fibonacci-Zahl.
  return prev;
}
for (let i = 0; i <= 2000; i++) {
  let result = fib(i);
  
  if(result > Number.MAX_SAFE_INTEGER && result < Number.MAX_VALUE){

      intZahl.push(i-1);
      const newResult = fib(i-1);
      GrosteInt.push(newResult);
      result = BigInt(result);
      numZahl.push(result);
       
  }
  fibTable.set(i, result);
  console.log(fibTable); 
  
}
//größte Fibonacci-Zahl, die sich noch als Integer sicher speichern lässt
console.log('Größte Fibonacci-Zahl(Integer)', GrosteInt[0])

//Die Zahl, die in der Fibonacci-Folge(Integer)
console.log('Die anzahl, die in der Fibonacci-Folge(Integer):', intZahl[0]);

//die größte Fibonacci-Zahl, die sich noch als Number speichern lässt 
console.log('Größte Fibonacci-Zahl(Number)', numZahl[numZahl.length-1])

//Die Zahl, die in der Fibonacci-Folge(Number)
console.log('Die anzahl, die in der Fibonacci-Folge(Number):', intZahl.length);