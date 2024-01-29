export const getCode = () =>{
    const url = '/Uebungs/uebung -11/server.js';
    fetch(url)
    .then(data => data.text())
    .then(code => {
        document.getElementById('11').innerText = code;
    })
    .catch(e => console.error(e))
}


