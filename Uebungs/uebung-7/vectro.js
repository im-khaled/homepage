function vector() {
    const privateArray = [];
  
    const publicMethods = {
      append: function(value) {
        privateArray.push(value);
      },
      store: function(index, value) {
        if (index >= 0) {
          privateArray[index] = value;
        } else {
          console.error('Index out of bounds');
        }
      },
      get: function(index) {
        if (index >= 0 && index < privateArray.length) {
          return privateArray[index];
        } else {
          console.error('Index out of bounds');
        }
      }
    };
  
    return publicMethods;
  }
  
  const my_vector = vector();
  my_vector.append(7);
  my_vector.store(1, 8);
  
  console.log(my_vector.get(0)); // Ergebnis: 7
  console.log(my_vector.get(1)); // Ergebnis: 8
  