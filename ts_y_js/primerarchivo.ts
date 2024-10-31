const puntuacionNegraHandball = document.getElementById("tribuNegra-handball") as HTMLElement;
const puntuacionNegraResistencia = document.getElementById("resistencia") as HTMLElement;
const puntuacionNegraAjedrez = document.getElementById("tribuNegra-ajedrez") as HTMLElement;
const totalNegra = document.getElementById("tribuNegra-total") as HTMLElement;
const inputNegraHandball = document.getElementById("inputNegra-handball") as HTMLInputElement;
const inputNegraResistencia = document.getElementById("inputNegra-resistencia") as HTMLInputElement;
const inputNegraAjedrez = document.getElementById("inputNegra-ajedrez") as HTMLInputElement;
const btnNegraHandball = document.getElementById("btnNegra-handball") as HTMLButtonElement;
const btnNegraResistencia = document.getElementById("btnNegra-resistencia") as HTMLButtonElement;
const btnNegraAjedrez = document.getElementById("btnNegra-ajedrez") as HTMLButtonElement;

const puntuacionRojaHandball = document.getElementById("tribuRoja-handball") as HTMLElement;
const puntuacionRojaResistencia = document.getElementById("tribuRoja-resistencia") as HTMLElement;
const puntuacionRojaAjedrez = document.getElementById("tribuRoja-ajedrez") as HTMLElement;
const totalRoja = document.getElementById("tribuRoja-total") as HTMLElement;
const inputRojaHandball = document.getElementById("inputRoja-handball") as HTMLInputElement;
const inputRojaResistencia = document.getElementById("inputRoja-resistencia") as HTMLInputElement;
const inputRojaAjedrez = document.getElementById("inputRoja-ajedrez") as HTMLInputElement;
const btnRojaHandball = document.getElementById("btnRoja-handball") as HTMLButtonElement;
const btnRojaResistencia = document.getElementById("btnRoja-resistencia") as HTMLButtonElement;
const btnRojaAjedrez = document.getElementById("btnRoja-ajedrez") as HTMLButtonElement;

const btnpuntajeTotal = document.getElementById("")




btnNegraHandball.addEventListener("click", function() {
    const puntos = parseInt(inputNegraHandball.value) || 0;
    puntuacionNegraHandball.innerText = (parseInt(puntuacionNegraHandball.innerText) + puntos).toString();
    totalNegra.innerText = (
        parseInt(puntuacionNegraHandball.innerText) + 
        parseInt(puntuacionNegraResistencia.innerText) + 
        parseInt(puntuacionNegraAjedrez.innerText)
    ).toString();
    inputNegraHandball.value = '';
});

btnNegraResistencia.addEventListener("click", function() {
    const puntos = parseInt(inputNegraResistencia.value) || 0;
    puntuacionNegraResistencia.innerText = (parseInt(puntuacionNegraResistencia.innerText) + puntos).toString();
    totalNegra.innerText = (
        parseInt(puntuacionNegraHandball.innerText) + 
        parseInt(puntuacionNegraResistencia.innerText) + 
        parseInt(puntuacionNegraAjedrez.innerText)
    ).toString();
    inputNegraResistencia.value = '';
});

btnNegraAjedrez.addEventListener("click", function() {
    const puntos = parseInt(inputNegraAjedrez.value) || 0;
    puntuacionNegraAjedrez.innerText = (parseInt(puntuacionNegraAjedrez.innerText) + puntos).toString();
    totalNegra.innerText = (
        parseInt(puntuacionNegraHandball.innerText) + 
        parseInt(puntuacionNegraResistencia.innerText) + 
        parseInt(puntuacionNegraAjedrez.innerText)
    ).toString();
    inputNegraAjedrez.value = '';
});

// Eventos para botones de la tribu Roja
btnRojaHandball.addEventListener("click", function() {
    const puntos = parseInt(inputRojaHandball.value) || 0;
    puntuacionRojaHandball.innerText = (parseInt(puntuacionRojaHandball.innerText) + puntos).toString();
    totalRoja.innerText = (
        parseInt(puntuacionRojaHandball.innerText) + 
        parseInt(puntuacionRojaResistencia.innerText) + 
        parseInt(puntuacionRojaAjedrez.innerText)
    ).toString();
    inputRojaHandball.value = '';
});

btnRojaResistencia.addEventListener("click", function() {
    const puntos = parseInt(inputRojaResistencia.value) || 0;
    puntuacionRojaResistencia.innerText = (parseInt(puntuacionRojaResistencia.innerText) + puntos).toString();
    totalRoja.innerText = (
        parseInt(puntuacionRojaHandball.innerText) + 
        parseInt(puntuacionRojaResistencia.innerText) + 
        parseInt(puntuacionRojaAjedrez.innerText)
    ).toString();
    inputRojaResistencia.value = '';
});

btnRojaAjedrez.addEventListener("click", function() {
    const puntos = parseInt(inputRojaAjedrez.value) || 0;
    puntuacionRojaAjedrez.innerText = (parseInt(puntuacionRojaAjedrez.innerText) + puntos).toString();
    totalRoja.innerText = (
        parseInt(puntuacionRojaHandball.innerText) + 
        parseInt(puntuacionRojaResistencia.innerText) + 
        parseInt(puntuacionRojaAjedrez.innerText)
    ).toString();
    inputRojaAjedrez.value = '';
});
