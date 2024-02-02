const deepCopy = (struct) =>
  Array.isArray(struct)
    ? struct.map((item) => deepCopy(item))
    : typeof struct === 'object' && struct !== null
    ? Object.fromEntries(
        Object.entries(struct).map(([key, value]) => [key, deepCopy(value)])
      )
    : struct;

// Test 
const originalArray = [1, [2, 3], { a: 4, b: { c: 5 } }];
const copiedArray = deepCopy(originalArray);
console.assert(JSON.stringify(originalArray) === JSON.stringify(copiedArray), 'Array test nicht bestanden');


const originalObject = { x: 1, y: { z: 2 }, arr: [3, 4] };
const copiedObject = deepCopy(originalObject);
console.assert(JSON.stringify(originalObject) === JSON.stringify(copiedObject), 'Object test nicht bestanden');
