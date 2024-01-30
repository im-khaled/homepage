// HTTP-Modul beladen
const http = require('http');
const url = require('url');

// Port und Hostname(IP address)
const port = 3000;
const hostname = '127.0.0.1';


// Konfigurieration des HTTP-Servers
const server = http.createServer((req, res) => {
  
  const { pathname, query } = url.parse(req.url, true);

  //Path überprüfen / Schnittstelle
  if (pathname === '/greet' && req.method === 'GET') {

    // Zugreifen die Name aus den Query-Parametern
    const name = query.name || 'Unbekannt';

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain' );
    res.end(`Hallo ${name}!`);
  } else {

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
});

server.listen(port, hostname , () => {
  console.log(`Server läuft unter ${hostname}:${port}`);
});

/*
* Um mehr über Nodejs server zu erfahren (https://nodejs.org/api/synopsis.html)
* Der Client sendet "Mika", der Name als Query-Parametern und der Server wird mit "Hallo Mika!" antworten.
* Zum Beispiel:(http://127.0.0.1:3000/greet?name=Mika)
 */