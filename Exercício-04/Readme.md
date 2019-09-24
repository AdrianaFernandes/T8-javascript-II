# Exercício 04 - Criando pinguins

//Vamos criar um objeto pinguim que contenha nome, idade e origem. Depois, criaremos métodos para o pinguim andar e voar. Para voar, ele deverá ter uma propriedade podeVoar verdadeira.


let pinguim = {
    "nome": "gui",
    "idade": 1,
    "origem": "antartica"
}

pinguim.andar = function (){
        console.log("andou")
}

pinguim.poderVoar = false;

pinguim.voar = function(){
    if (pinguim.podeVoar == true) {
        console.log("Pode!")
    } else 
        console.log("Sory!")
}



