let boton_reiniciar = document.getElementById("boton_reiniciar");

boton_reiniciar.addEventListener("click", ()=> {
    window.location.reload()
});

let cartas_rompec = document.getElementsByClassName("arrastre_imagen");

for (let i = 0; i<3; i++) {
    cartas_rompec[i].addEventListener("mouseover", ()=> {
        cartas_rompec[i].style.background = "#262729";
        cartas_rompec[i].style.border = "2px black solid"
    })
    cartas_rompec[i].addEventListener("mouseout", ()=> {
        cartas_rompec[i].style.background = "grey";
    })
}

let destino1 = document.getElementById("destino1");
let destino2 = document.getElementById("destino2");
let destino3 = document.getElementById("destino3");
let imagen1 = document.getElementById("img1");
let imagen2 = document.getElementById("img2");
let imagen3 = document.getElementById("img3");

function borrarImagen(nombre) {
    let imagen = document.getElementById(`${nombre}`);
    imagen.remove();
}

function moverImagen1(evento) {
    evento.dataTransfer.setData('Text',"Rompe1.png");
}

imagen1.addEventListener("dragstart", moverImagen1);

function moverImagen2(evento) {
    evento.dataTransfer.setData('Text',"rompe2.png");
}

imagen2.addEventListener("dragstart", moverImagen2);

function moverImagen3(evento) {
    evento.dataTransfer.setData('Text',"Rompe3.png");
}

imagen3.addEventListener("dragstart", moverImagen3);

function soltarImagen1(evento) {
    let dataImagen = evento.dataTransfer.getData('Text');
    destino1.innerHTML = `<img class="carta" src="./imagenes/${dataImagen}"/>` ;
    let imagen = document.getElementsByClassName("carta");
    for (let i=0 ; i<imagen.length; i++) {
        imagen[i].style.width = "280px";
        imagen[i].style.height = "400px";
    };
    borrarImagen("img1");
}

function soltarImagen2(evento) {
    let dataImagen = evento.dataTransfer.getData('Text');
    destino2.innerHTML = `<img class="carta" src="./imagenes/${dataImagen}"/>` ;
    let imagen = document.getElementsByClassName("carta");
    for (let i=0 ; i<imagen.length; i++) {
        imagen[i].style.width = "280px";
        imagen[i].style.height = "400px";
    };
    borrarImagen("img2");
}

function soltarImagen3(evento) {
    let dataImagen = evento.dataTransfer.getData('Text');
    destino3.innerHTML = `<img class="carta" src="./imagenes/${dataImagen}"/>` ;
    let imagen = document.getElementsByClassName("carta");
    for (let i=0 ; i<imagen.length; i++) {
        imagen[i].style.width = "280px";
        imagen[i].style.height = "400px";
    };
    borrarImagen("img3");
}

function prevenirDefault(evento) {
    evento.preventDefault();
}

destino1.addEventListener("dragover", prevenirDefault);
destino1.addEventListener("drop", soltarImagen1);

destino2.addEventListener("dragover", prevenirDefault);
destino2.addEventListener("drop", soltarImagen2);

destino3.addEventListener("dragover", prevenirDefault);
destino3.addEventListener("drop", soltarImagen3);