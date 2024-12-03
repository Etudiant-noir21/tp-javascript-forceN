let form = document.getElementById('myForm')

const inputName = document.getElementById('name')
const inputEmail = document.getElementById('email')
const inputPassword = document.getElementById('password')

let erreur = document.querySelectorAll('#error')
erreur.forEach(ele=> ele.innerHTML='')
console.log(erreur)
// ecouter la soummission
let isvalide = true
form.addEventListener('submit',function(event){

    let regexpName = /^[A-Za-z\s]+$/
    let regexpEmail = /^[a-z0-9]+@(gmail\.com|tech|yahou\.com|edu)$/
    let regexpPassword= /^(?=.*[A-Z])(?=.*\d).{6,}$/

    if(inputName.value===''){
        event.preventDefault()
        erreur[0].innerHTML = 'vous devez remplir le champs nom'
        inputName.classList.add('erroner')
        isvalide = false
    }else if(!regexpName.test(inputName.value)){
     event.preventDefault()
     erreur[0].innerHTML = ''
     const errorname = document.querySelector('.errorname')
     errorname.innerHTML='cette champs doit contenir uniquement des lettres'
     inputName.classList.add('erroner')
     isvalide = false
    }else {
        inputName.classList.add('valider')
        inputName.classList.remove('erroner')
        const errorname = document.querySelector('.errorname')
        errorname.innerHTML = ''
        erreur[0].innerHTML = ''

    }

    if(inputEmail.value===''){
        event.preventDefault()
         erreur[1].innerHTML = 'vous devez remplir le champs email'
         inputEmail.classList.add('erroner')
         isvalide = false
    }else if(!regexpEmail.test(inputEmail.value)){
        event.preventDefault()
        erreur[1].innerHTML =''
        const errorEmail = document.querySelector('.erroremail')
     errorEmail.innerHTML='cette champs ne doit pas contenir de majuscules '
     inputEmail.classList.add('erroner')
     isvalide = false
    }else{
        inputEmail.classList.remove('erroner')
        inputEmail.classList.add('valider')
        const errorEmail = document.querySelector('.erroremail')
        errorEmail.innerHTML = ''
        erreur[1].innerHTML = ''
    }

    if(inputPassword.value===''){
        event.preventDefault()
        erreur[2].innerHTML = 'vous devez remplir le champs password'
        inputPassword.classList.add('erroner')
        isvalide = false
    }else if(!regexpPassword.test(inputPassword.value)){
        event.preventDefault()
        erreur[2].innerHTML = ''
        const errorpassword = document.querySelector('.errorpassword')
        errorpassword.innerHTML=`cette champs doit  contenir au moins un majuscule, 
        une chiffre et au moins 6 caracteres  `
     inputPassword.classList.add('erroner')
     isvalide = false
    }else{
        inputPassword.classList.add('valider')
        inputPassword.classList.remove('erroner')
        const errorpassword = document.querySelector('.errorpassword')
        errorpassword.innerHTML = ''
        erreur[2].innerHTML = ''
    }
    
    if(isvalide){
        form.submit()
    }
})