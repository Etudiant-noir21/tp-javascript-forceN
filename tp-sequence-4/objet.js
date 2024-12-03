let personne = {
    nom: 'Baba Faye',
    age: 20,
    proffesion: 'developpeur web et mobile',

    introduction: function(){
        console.log(`Bonjour je suis ${this.nom} j'ai ${this.age} ans je suis un ${this.proffesion}`)
    }
}

personne.introduction()

// utiliation l'objet math

let x = 25
let y = 9.5

// l'arrondi d'un chiffre
let z = Math.round(x+y)
console.log("l'arrondi de z ", z)

// racine carre 
let racineCarre = Math.sqrt(x)
console.log(`la racine carre de ${x} est de ${racineCarre}`)

// calculons la puissance de y
let puissance = Math.pow(y,2)
console.log(`la puissance  de ${y} est de ${puissance}`)

// nombre aleatoir
let aleatoire = (Math.random()  * 10) + 1
console.log('nombre aleatoire ', aleatoire)


// l'objet date

function heureDate(){
    let date = new Date()
    let day = date.getDay()
    let moths = date.getMonth()
    let years = date.getFullYear()
    let heurs = date.getHours()
    let minute = date.getMinutes()
    let seconde = date.getSeconds()

    let affichage = `Aujourd'hui c'est le ${day}/ ${moths}/ ${years}\n
    a ${heurs}: ${minute}: ${seconde}
    `
    return console.log(affichage)
}

heureDate()

// manipulation d'objets strings

function compterCaracter(chaine){
 
    return chaine.length
}

console.log('Le nombre de caractere est de ',compterCaracter('institutionnellement'));

// fonction recherche et remplace de chaine

function remplacementChaine(chaine,recherche,remplace){
  return  chaine.replace(recherche,remplace)
}

const text=  "c'est bien de faire du sport"

const recherche = "faire"
const remplace = "pratiquer"

console.log(remplacementChaine(text,recherche,remplace))
