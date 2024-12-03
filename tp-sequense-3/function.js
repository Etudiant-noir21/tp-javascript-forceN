function greet(name){
console.log('Bonjour ', name)
}

greet('Baba faye')

// fonction calculate

function calculate(num1,num2,operateur){
    if(operateur == '+'){
        console.log(num1+num2)
    }else if(operateur == '-'){
        console.log(num1-num2)
    }
    else if(operateur == '/'){
        console.log(num1/num2)
    }
    else if(operateur == '%'){
        console.log(num1%num2)
    }
    else if(operateur == '*'){
        console.log(num1*num2)
    }
}

calculate(25,15,"%")

// foncion avec valeur

function calculateArea(longueur,largeur){
    const aire = longueur * largeur

    console.log("l'air du rectangle est de ", aire , 'cm')
}

calculateArea(15, 10)

// fonction imbriquer

function outer(){
    function inner(){
        alert('je vous salu les gros')
    }
    inner()

    alert('cest cool')
}

outer()