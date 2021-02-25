function addingEventListener() {
    const inputInput = document.querySelector("input#input")
    inputInput.addEventListener('click', () => {
        console.log(event)
        alert(event)    
    })
}

addingEventListener()