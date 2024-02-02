export const getCode = (id, ubungNummer, fileName) =>{
    const url = `./src/uebungen/uebung-${ubungNummer}/${fileName}.js`;
    fetch(url)
    .then(data => data.text())
    .then(code => {
        document.getElementById(id).innerText = code;
    })
    .catch(e => console.error(e))
}


