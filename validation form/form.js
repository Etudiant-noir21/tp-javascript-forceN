let form = document.getElementById('form')

let inputText = document.getElementById('text')

form.addEventListener('submit', (e) => {
    let myRegexp = /^[a-zA-Z-\s]+$/
    let myError = document.getElementById('error')
    if(inputText.value == '') {
        myError.style.color = 'red'
        myError.innerHTML = 'Veuillez remplir le champ'
        e.preventDefault()

    }else if(myRegexp.test(inputText.value)===false) {
        myError.innerHTML = 'le champs doit contenir des lettres au moins un majuscule , minuscule '
        myError.style.color = 'red'
        e.preventDefault()
    }else{
        form.submit()
    }
})