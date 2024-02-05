export const getCode = async (id, ubungNummer, fileName) =>{
    const url = `./src/uebungen/uebung-${ubungNummer}/${fileName}.js`;
    try {
        const data = await fetch(url)
        const code = await data.text();
        document.getElementById(id).innerText = code;
    } catch (error) {
        console.error(error);
    }
}


