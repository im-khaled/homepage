import {getCode} from "./utils.js";

    getCode("NODE111", "11", "server");
    getCode("ES63", "6", "generators");
    getCode("ES64", "6", "proxy");
    getCode("JS44", "4", "topSort");
    getCode("JS43", "4", "fibonacci");
    getCode("JS42", "4", "objekte");
    getCode("JS41", "4", "applyf");

            
async function getSelectedText() {
    let selectedText = '';
    if (document.getSelection) {
        selectedText = document.getSelection().toString();
        if(selectedText){
            await window.navigator.clipboard.writeText(selectedText);
            alert(`Your text is copied to clipboard : ${selectedText}`)
        }
    } 

}

document.addEventListener('mouseup', getSelectedText);
