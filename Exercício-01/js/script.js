const alunas = ["Raquel Pereira", "Talita Barbosa", "Lia Lobo", "Daiana Moreais", "Angelica Garcia", "Simara COnceição", "Simone Santos", "Monique Almeida", "Priscilla Alves"];

const minhaUl = document.getElementById ("lista-alunas");

// for (let i=0; i< alunas.length; i++) {
//     const lista = document.createElement ("li");
    
//     minhaUl.appendChild(lista);
//     lista.textContent = alunas[i];
// }

//ou so funciona no array no forEach ( sempre irá pegar elemento por elemento do array) - função CallBack (umas função com parametro dentro de outra função). 

alunas.forEach(function(aluna){
    const lista = document.createElement ("li");

    lista.textContent = aluna; 
    minhaUl.appendChild(lista);
})
///////////////////////////////////////////////////////////////
//conta qtas vezes foram clicado em cima do titulo

// let soma = 0;

// const meuTitulo = document.querySelector(".titulo");

// meuTitulo.addEventListener("click", function logar() {
//     console.log(soma++)
// });

//////////////////////////////////////////////////////////////////
//no click muda a cor de preto pra vermelho
const meuTitulo = document.querySelector(".titulo");

meuTitulo.addEventListener("click", function () {
    // meuTitulo.style.color = "red";
    meuTitulo.classList.add("vermelha");
});

///////////////////////////////////