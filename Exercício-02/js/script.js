// // 
// const MinhaImg = document.querySelectorAll('.item');

// // MinhaImg.addEventListener("Click",function removerImage(item){
    
// // })


// const muitosGatos = document.querySelectorAll(".item__imagem");

// for (let i=0; i<MinhaImg.length; i++){
//     MinhaImg[i].addEventListener("click", function (){
//         muitosGatos[i].classList.add("invisivel");
//     })
// }

const muitosGatos = document.querySelectorAll(".item__imagem");


muitosGatos.forEach(function(gato) {
    gato.addEventListener("click", function(evento) {
        if (evento.target.classList.contains("invisivel")) {
            evento.target.classList.remove("invisivel")
        } else {
        evento.target.classList.add("invisivel");
        }
    })
})





