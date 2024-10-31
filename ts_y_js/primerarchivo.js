var puntuacionNegraHandball = document.getElementById("tribuNegra-handball"), puntuacionNegraResistencia = document.getElementById("resistencia"), puntuacionNegraAjedrez = document.getElementById("tribuNegra-ajedrez"), totalNegra = document.getElementById("tribuNegra-total"), inputNegraHandball = document.getElementById("inputNegra-handball"), inputNegraResistencia = document.getElementById("inputNegra-resistencia"), inputNegraAjedrez = document.getElementById("inputNegra-ajedrez"), btnNegraHandball = document.getElementById("btnNegra-handball"), btnNegraResistencia = document.getElementById("btnNegra-resistencia"), btnNegraAjedrez = document.getElementById("btnNegra-ajedrez");
var puntuacionRojaHandball = document.getElementById("tribuRoja-handball"), puntuacionRojaResistencia = document.getElementById("tribuRoja-resistencia"), puntuacionRojaAjedrez = document.getElementById("tribuRoja-ajedrez"), totalRoja = document.getElementById("tribuRoja-total"), inputRojaHandball = document.getElementById("inputRoja-handball"), inputRojaResistencia = document.getElementById("inputRoja-resistencia"), inputRojaAjedrez = document.getElementById("inputRoja-ajedrez"), btnRojaHandball = document.getElementById("btnRoja-handball"), btnRojaResistencia = document.getElementById("btnRoja-resistencia"), btnRojaAjedrez = document.getElementById("btnRoja-ajedrez");
btnNegraHandball.addEventListener("click", function () {
    var puntos = parseInt(inputNegraHandball.value) || 0;
    puntuacionHandball.innerText = parseInt(puntuacionHandball.innerText) + puntos;
    totalNegra.innerText = parseInt(puntuacionHandball.innerText) + parseInt(puntuacionNegraResistencia.innerText) + parseInt(puntuacionNegraAjedrez.innerText);
    inputNegraHandball.value = '';
});
btnNegraResistencia.addEventListener("click", function () {
    var puntos = parseInt(inputNegraResistencia.value) || 0;
    puntuacionNegraResistencia.innerText = parseInt(puntuacionNegraResistencia.innerText) + puntos;
    totalNegra.innerText = parseInt(puntuacionNegraHandball.innerText) + parseInt(puntuacionNegraResistencia.innerText) + parseInt(puntuacionNegraAjedrez.innerText);
    inputNegraResistencia.value = '';
});
btnNegraAjedrez.addEventListener("click", function () {
    var puntos = parseInt(inputNegraAjedrez.value) || 0;
    puntuacionNegraAjedrez.innerText = parseInt(puntuacionNegraAjedrez.innerText) + puntos;
    totalNegra.innerText = parseInt(puntuacionNegraHandball.innerText) + parseInt(puntuacionNegraResistencia.innerText) + parseInt(puntuacionNegraAjedrez.innerText);
    inputNegraAjedrez.value = '';
});
// Eventos para botones de la tribu Roja
btnRojaHandball.addEventListener("click", function () {
    var puntos = parseInt(inputRojaHandball.value) || 0;
    puntuacionRojaHandball.innerText = parseInt(puntuacionRojaHandball.innerText) + puntos;
    totalRoja.innerText = parseInt(puntuacionRojaHandball.innerText) + parseInt(puntuacionRojaResistencia.innerText) + parseInt(puntuacionRojaAjedrez.innerText);
    inputRojaHandball.value = '';
});
btnRojaResistencia.addEventListener("click", function () {
    var puntos = parseInt(inputRojaResistencia.value) || 0;
    puntuacionRojaResistencia.innerText = parseInt(puntuacionRojaResistencia.innerText) + puntos;
    totalRoja.innerText = parseInt(puntuacionRojaHandball.innerText) + parseInt(puntuacionRojaResistencia.innerText) + parseInt(puntuacionRojaAjedrez.innerText);
    inputRojaResistencia.value = '';
});
btnRojaAjedrez.addEventListener("click", function () {
    var puntos = parseInt(inputRojaAjedrez.value) || 0;
    puntuacionRojaAjedrez.innerText = parseInt(puntuacionRojaAjedrez.innerText) + puntos;
    totalRoja.innerText = parseInt(puntuacionRojaHandball.innerText) + parseInt(puntuacionRojaResistencia.innerText) + parseInt(puntuacionRojaAjedrez.innerText);
    inputRojaAjedrez.value = '';
});
