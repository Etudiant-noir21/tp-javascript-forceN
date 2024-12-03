let fruit = ['pommes', 'banane','raisin','clementine']
        fruit.push('limon')
        console.log(fruit)
        // suppression d'un elements par slice
       fruit.splice(2,1)
        console.log(fruit)
        // boucle
        for(let i =0;i<fruit.length;i++){
            console.log(fruit[i])
        }

// etape 3 

function agePerson(age){
if(age < 18){
    console.log('vous etes une mineures')
}else if(age => 18){
    console.log('vous etes majeure')
}else{
    console.log("vous n'exister pas mec ")
}
// return age
}

agePerson(1)

// boucle for

for(let j =1;j <=10;j++){
    console.log("la boucle for : \n"+j)
}

// while
let sommes= 0
let n = 1

while(n<= 10){
    sommes +=n
    n++

}
console.log("la sommes des nombres de 1 a 10 est de : "+sommes)

// if else

let nombre = 7

if(nombre%2===0){
 alert('le nombre est pair')
}else{
    alert('le nombre est impair')
}