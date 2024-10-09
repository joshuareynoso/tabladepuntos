var Intertribus = /** @class */ (function () {
    function Intertribus() {
        this.equipos = {
            A: { nombre: "Equipo A", puntos: { handball: 0, resistencia: 0, ajedrez: 0 } },
            B: { nombre: "Equipo B", puntos: { handball: 0, resistencia: 0, ajedrez: 0 } }
        };
    }
    Intertribus.prototype.agregarPuntos = function (nombreEquipo, disciplina, puntos) {
        if (this.equipos[nombreEquipo]) {
            this.equipos[nombreEquipo].puntos[disciplina] += puntos;
            this.actualizarUI(nombreEquipo, disciplina);
        }
    };
    Intertribus.prototype.obtenerTotalPuntos = function (nombreEquipo) {
        var equipo = this.equipos[nombreEquipo];
        if (equipo) {
            return Object.values(equipo.puntos).reduce(function (total, puntos) { return total + puntos; }, 0);
        }
        return 0;
    };
    Intertribus.prototype.obtenerEquipoConMasPuntos = function () {
        var _this = this;
        return Object.values(this.equipos).reduce(function (max, equipo) {
            return _this.obtenerTotalPuntos(equipo.nombre.slice(-1)) > _this.obtenerTotalPuntos(max.nombre.slice(-1)) ? equipo : max;
        });
    };
    Competencia.prototype.obtenerDisciplinaConMayorPuntuacion = function () {
        var _this = this;
        var disciplinas = Object.keys(this.equipos.A.puntos);
        return disciplinas.reduce(function (max, disciplina) {
            var puntuacionMaxima = Math.max.apply(Math, Object.values(_this.equipos).map(function (e) { return e.puntos[disciplina]; }));
            return puntuacionMaxima > max.puntuacion ? { disciplina: disciplina, puntuacion: puntuacionMaxima } : max;
        }, { disciplina: '', puntuacion: 0 });
    };
    Competencia.prototype.actualizarUI = function (nombreEquipo, disciplina) {
        var element = document.getElementById("equipo".concat(nombreEquipo, "-").concat(disciplina));
        if (element) {
            element.textContent = this.equipos[nombreEquipo].puntos[disciplina].toString();
        }
        this.actualizarTotal(nombreEquipo);
        this.mostrarResultados();
    };
    Competencia.prototype.actualizarTotal = function (nombreEquipo) {
        var totalElement = document.getElementById("equipo".concat(nombreEquipo, "-total"));
        if (totalElement) {
            totalElement.textContent = this.obtenerTotalPuntos(nombreEquipo).toString();
        }
    };
    Competencia.prototype.mostrarResultados = function () {
        var resultadosDiv = document.getElementById('resultados');
        var equipoGanador = this.obtenerEquipoConMasPuntos();
        var disciplinaMayorPuntuacion = this.obtenerDisciplinaConMayorPuntuacion();
        if (resultadosDiv) {
            resultadosDiv.innerHTML = "\n                <h2>Resultados:</h2>\n                <p>Equipo con m\u00E1s puntos: ".concat(equipoGanador.nombre, "</p>\n                <p>Total de puntos del equipo ganador: ").concat(this.obtenerTotalPuntos(equipoGanador.nombre.slice(-1)), "</p>\n                <p>Disciplina con mayor puntuaci\u00F3n: ").concat(disciplinaMayorPuntuacion.disciplina, "</p>\n                <p>Puntuaci\u00F3n m\u00E1s alta: ").concat(disciplinaMayorPuntuacion.puntuacion, "</p>\n            ");
        }
    };
    return Competencia;
}());
var competencia = new Competencia();
function agregarPuntos(equipo, disciplina) {
    var input = document.getElementById("input".concat(equipo, "-").concat(disciplina));
    if (input) {
        var puntos = parseInt(input.value, 10) || 0;
        competencia.agregarPuntos(equipo, disciplina, puntos);
        input.value = '';
    }
}
window.onload = function () {
    competencia.mostrarResultados();
    var equipos = ['A', 'B'];
    var disciplinas = ['handball', 'resistencia', 'ajedrez'];
    equipos.forEach(function (equipo) {
        disciplinas.forEach(function (disciplina) {
            var boton = document.getElementById("btn".concat(equipo, "-").concat(disciplina));
            if (boton) {
                boton.addEventListener('click', function () { return agregarPuntos(equipo, disciplina); });
            }
        });
    });
};
window.agregarPuntos = agregarPuntos;
