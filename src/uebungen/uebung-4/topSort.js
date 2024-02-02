function topsort(abhaengigkeiten) {
    const graph = new Map();
    const sortedGraph = new Map();
    const ergebnis = [];
  
    // Erstelle den Graphen und berechne die sortedGraph
    for (const [von, nach] of abhaengigkeiten) {
      if (!graph.has(von)) {
        graph.set(von, []);
      }
      graph.get(von).push(nach);
  
      sortedGraph.set(nach, (sortedGraph.get(nach) || 0) + 1);
    }
  
    // Initialisiere eine queue mit Knoten
    const queue = [];
    for (const knoten of graph.keys()) {
      if (!sortedGraph.has(knoten)) {
        queue.push(knoten);
      }
    }
  
    // Führe die topologische Sortierung
    while (queue.length > 0) {
      const knoten = queue.shift();
      ergebnis.push(knoten);
  
      if (graph.has(knoten)) {
        for (const nachbar of graph.get(knoten)) {
          sortedGraph.set(nachbar, sortedGraph.get(nachbar) - 1);
  
          if (sortedGraph.get(nachbar) === 0) {
            queue.push(nachbar);
          }
        }
      }
    }
  
    return ergebnis;
  }
  
  // Test
  const abhaengigkeiten = [["schlafen", "studieren"], ["essen", "studieren"], ["studieren", "pruefen"],["vorbereiten", "pruefen"]];
  const ergebnis = topsort(abhaengigkeiten);

    console.assert(ergebnis.indexOf("essen") < ergebnis.indexOf("studieren"), "Test failed: 'essen' sollte vor 'studieren' liegen");
    console.assert(ergebnis.indexOf("schlafen") < ergebnis.indexOf("studieren"), "Test failed: 'schlafen' sollte vor 'studieren' liegen");
    console.assert(ergebnis.indexOf("studieren") < ergebnis.indexOf("pruefen"), "Test failed: 'studieren' sollte vor 'pruefen' liegen");
    console.assert(ergebnis.indexOf("vorbereiten") < ergebnis.indexOf("pruefen"), "Test failed: 'studieren' sollte vor 'pruefen' liegen");

console.log("Topologische Sortierung:", ergebnis);
    