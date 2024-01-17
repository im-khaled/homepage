const add = (x: number, y: number): number => x + y;
const equals = <T>(x: T, y: T): boolean => x === y;

console.log(add(1, 2));
console.log(add(true, true)); // Dadurch wird ein TypeScript-Fehler generiert
console.log(add(true, false)); // Dadurch wird ein TypeScript-Fehler generiert
const x: number = 1;
const y: number = 1;
console.log(add(equals<number>(x, y), equals<number>(y, x))); // Fehler tritt auf, weil „add“ Zahlenparameter erwartet, „equals(x, y)“ und „equals(y, x)“ jedoch einen booleschen Wert zurückgeben.