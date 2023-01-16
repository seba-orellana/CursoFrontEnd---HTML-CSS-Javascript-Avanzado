let botonPlay = document.getElementById("play")
let botonPausa = document.getElementById("pause")
let video = document.querySelector("video")

botonPlay.addEventListener("click", ()=> {
    video.play()
})

botonPausa.addEventListener("click", ()=> {
    video.pause()
})

//funcion que convierte el tiempo del video para que luego se pueda mostrar en el formato minutos:segundos
//Ejemplo: intTommss(281.10) -> [04,41]
function intTommss(tiempo) {
    mm = parseInt(tiempo/60);
    ss = parseInt(tiempo-(mm*60));
    return ([mm,ss])
}

let duracionVideo = document.getElementById("duracion_video");

video.onloadedmetadata = function(){
        duracionVideo.textContent = (intTommss(video.duration)).join(":");
};
