//Toggling active class in the button
const addActiveClass = () =>{
    const HTMLButton = document.querySelectorAll('.navButton');
    
    HTMLButton.forEach(button =>{ 

        if(button.checked){
            const addClass = document.querySelector(`nav #s${button.id}`)
            addClass.classList.add('active')
        }
        if(!button.checked){
            const addClass = document.querySelector(`nav #s${button.id}`)
            addClass.classList.remove('active')
        }
        
    })     
}
//Toggling active class in the aside button
const addActiveClassAside = () =>{
    const contentButton = document.querySelectorAll('.loesung');
    
    contentButton.forEach(button =>{ 

        if(button.checked){
            const addClass = document.querySelector(`aside #s${button.id}`)
            addClass.classList.add('active')
        }
        if(!button.checked){
            const addClass = document.querySelector(`aside #s${button.id}`)
            addClass.classList.remove('active')
        }
        
    })     
}

