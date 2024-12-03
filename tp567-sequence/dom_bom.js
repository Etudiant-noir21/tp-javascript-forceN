let p1 = document.getElementById('para1')
let contenu = document.querySelector('.content')

// modification de contenu
p1.textContent = 'je suis un paragraphe modifier avec le dom'

// ajout d'un nouveau element dans le dom
let newP = document.createElement('p')
newP.textContent = 'je suis un nouveau paragraphe ajouter depuis le dom'
contenu.appendChild(newP)


// utilisation de addEventListener
let btn = document.getElementById('btn')
btn.addEventListener('click',function(){
    console.log('vous avez cliquer sur le bouton')
})

contenu.insertBefore(newP,btn)

// etape:2 interaction avec le bom

// Utilisez l'objet window pour afficher la largeur et la hauteur de la fenêtre du
// navigateur

const largeur = window.innerWidth
const hauteur = window.innerHeight
console.log(`la largeur de la fenetre est de ${largeur} et la hauteur est de ${hauteur}`)

// Utilisez l'objet window pour rediriger l'utilisateur vers une autre page

const lien = 'https://www.google.com/'
const btnnewfntre = document.getElementById('newfenetre')

let fenetre = ''

btnnewfntre.addEventListener('click',fOuverte)

function fOuverte(){
    fenetre = window.open(lien,'_blank','width=500')
}


// Etape 3: Manipulation d'événements

// changement de couleur de fond au survole
p1.addEventListener('mouseenter',()=>{
    p1.style.backgroundColor = '#45ff12'
})

p1.addEventListener('mouseleave',()=>{
    p1.style.backgroundColor = 'white'
})

// formulaire

const myForm = document.getElementById('myform')
const nom = document.getElementById('nom')
const email = document.getElementById('email')

myForm.addEventListener('submit',(e)=>{
    if(nom.value=== '' && email.value=== ''){
        e.preventDefault()
    }else{
        myForm.submit()
        alert('Vous avez envoyer la formulaire')
    }
})