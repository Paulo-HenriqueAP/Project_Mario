const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal= document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
let alertaCasa = document.querySelector(".home-menu");
var clicouCasa = 0


function alternarModal () {
    modal.classList.toggle("aberto");
}
botaoTrailer.addEventListener("click", ()=> {
    alternarModal();
    video.setAttribute("src", linkDoVideo);    
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});

alertaCasa.addEventListener("click", () => {
    clicouCasa = clicouCasa + 1
    if (clicouCasa >= 3)
        alert ("Um pequeno easter egg que eu coloquei :>");
})

alertaCasa.addEventListener("click", () => {
    if (clicouCasa >= 3)
    window.open("backup.html","_self") 
})
