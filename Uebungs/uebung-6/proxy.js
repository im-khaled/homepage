class Vorrang {
    
    constructor(relations) {
      this.graph = new Map();
      this.inDegree = new Map();
      this.sortedOrder = [];
        
      // Erstelle den Graphen und berechne die inDegreeGraph
      relations.forEach(([node1, node2]) => {
        if (!this.graph.has(node1)) {
          this.graph.set(node1, new Set());
          this.inDegree.set(node1, 0);
        }
        if (!this.graph.has(node2)) {
          this.graph.set(node2, new Set());
          this.inDegree.set(node2, 0);
        }
  
        this.graph.get(node1).add(node2);
        this.inDegree.set(node2, this.inDegree.get(node2) + 1);
      });

      // Proxy handler
      this.handler = {
            get: function (target, prop, receiver) {
              if (prop === 'generator') {
                
                return function () {   
                  const result = target[prop].apply(target, arguments);
                  
                  return result;
                };
              }
              return target[prop];
            },
          
      }

      // Proxy for Logging
      this.proxy = new Proxy(this,this.handler);
    }

  // generator function
    *generator() {
         
      while (this.sortedOrder.length < this.graph.size) {
        const candidates = Array.from(this.inDegree.entries())
          .filter(([node, inDegree]) => inDegree === 0 && !this.sortedOrder.includes(node))
          .map(([node]) => node);
  
        const node = candidates[0];
        this.sortedOrder.push(node);
  
        if (this.graph.has(node)) {
          this.graph.get(node).forEach(neighbor => {
            this.inDegree.set(neighbor, this.inDegree.get(neighbor) - 1);
          });
        }
        this.remainingRelations = this.graph.size - this.sortedOrder.length;
        console.log(`Remaining relations: ${this.remainingRelations}`);
        yield node;
        
      }
      
    }
      
  }
  
  // Test Data
  const studentenLeben = new Vorrang([
    ["schlafen", "studieren"],
    ["essen", "studieren"],
    ["studieren", "prüfen"],
    ["vorbereiten", "prüfen"]

  ]);
  
  const gen = studentenLeben.proxy.generator();

  //Tests
  console.assert(gen.next().value === "schlafen", "Test 1 nicht bestanden!");
  console.assert(gen.next().value === "essen", "Test 2 nicht bestanden!");
  console.assert(gen.next().value === "studieren", "Test 3 nicht bestanden!");
  console.assert(gen.next().value === "vorbereiten", "Test 4 nicht bestanden!");
  console.assert(gen.next().value === "prüfen", "Test 4 nicht bestanden!");
  
 