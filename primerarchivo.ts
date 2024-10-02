interface Equipo {
    nombre: string;
    puntos: {
        handball: number;
        resistencia: number;
        ajedrez: number;
    };
}

class Competencia {
    private equipos: { [key: string]: Equipo };

    constructor() {
        this.equipos = {
            A: { nombre: "Equipo A", puntos: { handball: 0, resistencia: 0, ajedrez: 0 } },
            B: { nombre: "Equipo B", puntos: { handball: 0, resistencia: 0, ajedrez: 0 } }
        };
    }

    agregarPuntos(nombreEquipo: string, disciplina: keyof Equipo['puntos'], puntos: number) {
        if (this.equipos[nombreEquipo]) {
            this.equipos[nombreEquipo].puntos[disciplina] += puntos;
            this.actualizarUI(nombreEquipo, disciplina);
        }
    }

    obtenerTotalPuntos(nombreEquipo: string): number {
        const equipo = this.equipos[nombreEquipo];
        if (equipo) {
            return Object.values(equipo.puntos).reduce((total, puntos) => total + puntos, 0);
        }
        return 0;
    }

    obtenerEquipoConMasPuntos(): Equipo {
        return Object.values(this.equipos).reduce((max, equipo) => 
            this.obtenerTotalPuntos(equipo.nombre.slice(-1)) > this.obtenerTotalPuntos(max.nombre.slice(-1)) ? equipo : max
        );
    }

    obtenerDisciplinaConMayorPuntuacion(): { disciplina: string, puntuacion: number } {
        const disciplinas = Object.keys(this.equipos.A.puntos) as Array<keyof Equipo['puntos']>;
        return disciplinas.reduce((max, disciplina) => {
            const puntuacionMaxima = Math.max(...Object.values(this.equipos).map(e => e.puntos[disciplina]));
            return puntuacionMaxima > max.puntuacion ? { disciplina, puntuacion: puntuacionMaxima } : max;
        }, { disciplina: '', puntuacion: 0 });
    }

    private actualizarUI(nombreEquipo: string, disciplina: keyof Equipo['puntos']) {
        const element = document.getElementById(`equipo${nombreEquipo}-${disciplina}`);
        if (element) {
            element.textContent = this.equipos[nombreEquipo].puntos[disciplina].toString();
        }
        this.actualizarTotal(nombreEquipo);
        this.mostrarResultados();
    }

    private actualizarTotal(nombreEquipo: string) {
        const totalElement = document.getElementById(`equipo${nombreEquipo}-total`);
        if (totalElement) {
            totalElement.textContent = this.obtenerTotalPuntos(nombreEquipo).toString();
        }
    }

    mostrarResultados() {
        const resultadosDiv = document.getElementById('resultados');
        const equipoGanador = this.obtenerEquipoConMasPuntos();
        const disciplinaMayorPuntuacion = this.obtenerDisciplinaConMayorPuntuacion();

        if (resultadosDiv) {
            resultadosDiv.innerHTML = `
                <h2>Resultados:</h2>
                <p>Equipo con más puntos: ${equipoGanador.nombre}</p>
                <p>Total de puntos del equipo ganador: ${this.obtenerTotalPuntos(equipoGanador.nombre.slice(-1))}</p>
                <p>Disciplina con mayor puntuación: ${disciplinaMayorPuntuacion.disciplina}</p>
                <p>Puntuación más alta: ${disciplinaMayorPuntuacion.puntuacion}</p>
            `;
        }
    }
}

const competencia = new Competencia();

function agregarPuntos(equipo: string, disciplina: keyof Equipo['puntos']) {
    const input = document.getElementById(`input${equipo}-${disciplina}`) as HTMLInputElement;
    if (input) {
        const puntos = parseInt(input.value, 10) || 0;
        competencia.agregarPuntos(equipo, disciplina, puntos);
        input.value = '';
    }
}

// Inicializar la aplicación
window.onload = () => {
    competencia.mostrarResultados();

    // Agregar event listeners a todos los botones
    const equipos = ['A', 'B'];
    const disciplinas = ['handball', 'resistencia', 'ajedrez'];

    equipos.forEach(equipo => {
        disciplinas.forEach(disciplina => {
            const boton = document.getElementById(`btn${equipo}-${disciplina}`);
            if (boton) {
                boton.addEventListener('click', () => agregarPuntos(equipo, disciplina as keyof Equipo['puntos']));
            }
        });
    });
};

// Agregar la función agregarPuntos al objeto window para que sea accesible globalmente
(window as any).agregarPuntos = agregarPuntos;