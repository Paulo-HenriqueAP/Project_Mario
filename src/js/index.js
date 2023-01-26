const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal= document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
let alertaCasa = document.querySelector(".home-menu");


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
        alert ("Um pequeno easter egg que eu coloquei :>")
})
