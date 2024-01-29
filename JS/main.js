import {getCode} from "./utils.js";
            getCode();

            
async function getSelectedText() {
    let selectedText = '';
    if (document.getSelection) {
        selectedText = document.getSelection().toString();
        if(selectedText){
            await window.navigator.clipboard.writeText(selectedText);
            alert(`Your text is copied in clipboard : ${selectedText}`)
        }
    } 

}

document.addEventListener('mouseup', getSelectedText);
