// In TypeScript gibt es kein direktes Äquivalent zu statischen Klassen, da TypeScript in erster Linie den ECMAScript-Standards folgt und JavaScript selbst kein Konzept für statische Klassen hat. Mit TypeScript können Sie jedoch mithilfe statischer Eigenschaften und Methoden innerhalb einer Klasse eine ähnliche Funktionalität erreichen.

// Hier ist ein Beispiel für die Erstellung einer TypeScript-Klasse mit statischen Mitgliedern:

class StaticExample {
    static staticProperty: number = 42;
  
    static staticMethod(): void {
      console.log("Static method called");
    }
  }
  
  // Auf statische Mitglieder zugreifen:
  console.log(StaticExample.staticProperty);
  StaticExample.staticMethod();
  