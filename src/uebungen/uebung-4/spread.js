/*
    Mit dem Spread-Operator können wir die Elemente eines Arrays in ein anderes Array einfügen oder sie als Argumente für eine Funktion übergeben.
*/

//Zusammenfügen von Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];

console.log(mergedArray); // Ausgabe: [1, 2, 3, 4, 5, 6]

// Verwendung in einer Funktion
const numbers = [10, 20, 30];
const sum = (a, b, c) => a + b + c;

console.log(sum(...numbers)); // Ausgabe: 60

/*
    Der Spread-Operator kann auch verwendet werden, um Eigenschaften von einem Objekt in ein anderes zu kopieren.   
*/

//Kopieren von Objekteigenschaften
const person = { name: 'John', age: 25 };
const details = { email: 'john@beispiel.com', ...person };

console.log(details);
// Ausgabe: { address: '123 Main St', name: 'John', age: 25 }
