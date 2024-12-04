// negra
const puntuacionNegraHandball = document.getElementById("tribuNegra-handball") as HTMLElement; 
const puntuacionNegraResistencia = document.getElementById("resistencia") as HTMLElement; 
const puntuacionNegraAjedrez = document.getElementById("tribuNegra-ajedrez") as HTMLElement; 
const totalNegra = document.getElementById("tribuNegra-total") as HTMLElement; 

//esto es para ingresar los datos de las puntuaciones(negra)
const inputNegraHandball = document.getElementById("inputNegra-handball") as HTMLElement;
const inputNegraResistencia = document.getElementById("inputNegra-resistencia") as HTMLElement; 
const inputNegraAjedrez = document.getElementById("inputNegra-ajedrez") as HTMLElement;

// actualiza los balores de los botones(negra)
const btnNegraHandball = document.getElementById("btnNegra-handball") as HTMLElement; 
const btnNegraResistencia = document.getElementById("btnNegra-resistencia") as HTMLElement;
const btnNegraAjedrez = document.getElementById("btnNegra-ajedrez") as HTMLElement;

//roja
const puntuacionRojaHandball = document.getElementById("tribuRoja-handball") as HTMLElement;
const puntuacionRojaResistencia = document.getElementById("tribuRoja-resistencia") as HTMLElement; 
const puntuacionRojaAjedrez = document.getElementById("tribuRoja-ajedrez") as HTMLElement;
const totalRoja = document.getElementById("tribuRoja-total") as HTMLElement;

//esto es para ingresar los datos de las puntuaciones(roja)
const inputRojaHandball = document.getElementById("inputRoja-handball") as HTMLElement; 
const inputRojaResistencia = document.getElementById("inputRoja-resistencia") as HTMLElement;
const inputRojaAjedrez = document.getElementById("inputRoja-ajedrez") as HTMLElement;

// actualiza los balores de los botones(roja)
const btnRojaHandball = document.getElementById("btnRoja-handball") as HTMLElement; 
const btnRojaResistencia = document.getElementById("btnRoja-resistencia") as HTMLElement;
const btnRojaAjedrez = document.getElementById("btnRoja-ajedrez") as HTMLElement;

// bueno esto no hace falta desir que es pero para no mariarme 
var Tribuganadora = document.getElementById("Ganador") as HTMLSelectElement;

//esto es bueno esto es lo que es es el ultimo paso de  este programa el "Ganador" O SEA la Tribu negra 
function compararPuntajes () {
    const puntajeTotalNegra = parseInt(totalNegra.innerText) || 0;
    const puntajeTotalRoja = parseInt(totalRoja.innerText) || 0;

    if (puntajeTotalNegra > puntajeTotalRoja) {
        Tribuganadora = "la tribu ganadora es la Negra";
    } else if (puntajeTotalRoja > puntajeTotalNegra) {
        Tribuganadora  = "la tribu ganadora es la Roja";
    } else {
        Tribuganadora.innerText = "es un empate";
    }
}

// todo este es de la negra 
btnNegraHandball.addEventListener("click", function () {
    var puntos = parseInt(inputNegraHandball.value) || 0;
    puntuacionHandball.innerText = parseInt(puntuacionHandball.innerText) + puntos;
    totalNegra.innerText = parseInt(puntuacionHandball.innerText) + parseInt(puntuacionNegraResistencia.innerText) + parseInt(puntuacionNegraAjedrez.innerText);
    compararPuntajes();
});
btnNegraResistencia.addEventListener("click", function () {
    var puntos = parseInt(inputNegraResistencia.value) || 0;
    puntuacionNegraResistencia.innerText = parseInt(puntuacionNegraResistencia.innerText) + puntos;
    totalNegra.innerText = parseInt(puntuacionNegraHandball.innerText) + parseInt(puntuacionNegraResistencia.innerText) + parseInt(puntuacionNegraAjedrez.innerText);
    inputNegraResistencia.value = '';
    compararPuntajes();
});
btnNegraAjedrez.addEventListener("click", function () {
    var puntos = parseInt(inputNegraAjedrez.value) || 0;
    puntuacionNegraAjedrez.innerText = parseInt(puntuacionNegraAjedrez.innerText) + puntos;
    totalNegra.innerText = parseInt(puntuacionNegraHandball.innerText) + parseInt(puntuacionNegraResistencia.innerText) + parseInt(puntuacionNegraAjedrez.innerText);
    inputNegraAjedrez.value = '';
    compararPuntajes();
});

// y todo esto es de la roja 

btnRojaHandball.addEventListener("click", function () {
    var puntos = parseInt(inputRojaHandball.value) || 0;
    puntuacionRojaHandball.innerText = parseInt(puntuacionRojaHandball.innerText) + puntos;
    totalRoja.innerText = parseInt(puntuacionRojaHandball.innerText) + parseInt(puntuacionRojaResistencia.innerText) + parseInt(puntuacionRojaAjedrez.innerText);
    inputRojaHandball.value = '';
    compararPuntajes();
});
btnRojaResistencia.addEventListener("click", function () {
    var puntos = parseInt(inputRojaResistencia.value) || 0;
    puntuacionRojaResistencia.innerText = parseInt(puntuacionRojaResistencia.innerText) + puntos;
    totalRoja.innerText = parseInt(puntuacionRojaHandball.innerText) + parseInt(puntuacionRojaResistencia.innerText) + parseInt(puntuacionRojaAjedrez.innerText);
    inputRojaResistencia.value = '';
    compararPuntajes();
});
btnRojaAjedrez.addEventListener("click", function () {
    var puntos = parseInt(inputRojaAjedrez.value) || 0;
    puntuacionRojaAjedrez.innerText = parseInt(puntuacionRojaAjedrez.innerText) + puntos;
    totalRoja.innerText = parseInt(puntuacionRojaHandball.innerText) + parseInt(puntuacionRojaResistencia.innerText) + parseInt(puntuacionRojaAjedrez.innerText);
    inputRojaAjedrez.value = '';
    compararPuntajes();
});

