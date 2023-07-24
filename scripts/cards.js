//acceder e importar los recursos del 'json' que contiene mi informacion
import data from './data.js';

//mapeo de data => trabajar sobre cada elemento del array => extraer del array la noticia que necesite
let socialArray = data.map(item => item.sociales.firstNew);
let economyArray = data.map(item => item.economia.secondNew);
let globalArray = data.map(item => item.global.thirdNew);
let scienceArray = data.map(item => item.ciencia.fourthNew);
let entertaimentArray = data.map(item => item.entretenimiento.fivethNew);


//variables de segmentos => selecciona el boton
let socialBtn = document.getElementsByClassName('social');
let economyBtn = document.getElementsByClassName('economy');
let globalBtn = document.getElementsByClassName('global');
let scienceBtn = document.getElementsByClassName('science');
let entertaimentBtn = document.getElementsByClassName('entertaiment');

//seccion en la que inyectar las cards
const cardContainer = document.querySelector(".card-container")

//sin la necesidad de que se presione un boton, la primera vista se imprime en ejecucion
drawCards(globalArray);

//reaccion al evento de seleccion en cada boton
for (let i = 0; i < socialBtn.length; i++) {
    socialBtn[i].addEventListener('click', () => {
        drawCards(socialArray);
    });
}

for (let i = 0; i < economyBtn.length; i++) {
     economyBtn[i].addEventListener('click', () => {
        drawCards(economyArray);
     });
}

for(let i = 0; i < globalBtn.length; i++){
    globalBtn[i].addEventListener('click', () => {
        drawCards(globalArray);
    })
}
for (let i = 0; i < scienceBtn.length; i++) {
    scienceBtn[i].addEventListener('click', () => {
        drawCards(scienceArray);
    });
}

for (let i = 0; i < entertaimentBtn.length; i++) {
    entertaimentBtn[i].addEventListener('click', () => {
        drawCards(entertaimentArray);
    });
}

//funcion que 'dibuja' las tarjetas en el documento
function drawCards(arrayNews) {
    cardContainer.innerHTML = "";
    arrayNews.forEach(element => {
        cardContainer.innerHTML += `
        <div class="card" style="background-image: linear-gradient(rgba(5, 7, 12, 0.75), rgba(5, 7, 12, 0.75)), url(${element.background});">
                <div class="card__title">
                    <p class="title">${element.title}</p>
                </div>
                <div class="card__details">
                    <p class="details">${element.content}</p>
                </div>
                <div class="card__btn">
                    <a class="card-anchor" href="${element.anchor}">Continuar leyendo</a>
                </div>
            </div>
        `
    });
};