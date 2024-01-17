// Person-Prototyp
function Person(name) {
    this.name = name;
    this.autos = [];
  }
  
  // Auto-Prototyp
  function Auto(model) {
    this.model = model;
    this.owner = [];
  }
  
  // Funktion zum Überprüfen von Konflikten
  function conflict(auto) {
    
    if(auto.owner.length > 1){
        console.log('\nKonflikt gefunden');
        for(var x of auto.owner ){
            console.log(auto.model, 'wird von', x, 'besessen');
        }
        
     return true;   
    }
    else{
       console.log('\nFür',auto.model,'Kein Konflikt gefunden'); 
    }
    return false;
  }
  
  // Beispiel
  const person1 = new Person("Paul");
  const person2 = new Person("Linda");
  const person3 = new Person("Tim");
  
  const auto1 = new Auto("BMW");
  const auto2 = new Auto("Audi");
  const auto3 = new Auto("Volkswagen");
  
  
  person1.autos.push(auto1);
  person2.autos.push(auto2);
  person3.autos.push(auto3);
  
  

  auto1.owner.push (person1.name);
  auto2.owner.push (person2.name);
  auto3.owner.push (person1.name);
  auto3.owner.push (person3.name);


// false, kein Konflikt
conflict(auto1); 

// true, Konflikt gefunden
conflict(auto3); 
  