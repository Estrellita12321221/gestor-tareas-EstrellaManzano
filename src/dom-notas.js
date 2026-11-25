import { alumnos, calcularMedia, contarAprobados } from "./notas.js";

export function renderNotas() {
    const lista = document.querySelector("#lista-notas");

    lista.replaceChildren();

    const alumnosOrdenados = [...alumnos].sort((a, b) => b.nota - a.nota);

    alumnosOrdenados.forEach((alumno) => {
        const li = document.createElement("li");
        li.textContent = `${alumno.nombre} — ${alumno.nota}`;

        if (alumno.nota >= 5) {
            li.classList.add("aprobado");
        } else {
            li.classList.add("suspenso");
        }

        lista.append(li);
    });

    const media = calcularMedia(alumnos).toFixed(1);
    const aprobados = contarAprobados(alumnos);

    const resumen = document.querySelector("#resumen-notas");

    resumen.textContent = `Media: ${media} · Aprobados: ${aprobados} de ${alumnos.length}`;
}