import { estado } from "./estado.js";
import { contarPendientes, contarCompletadas } from "./tareas.js";

export function render() {
    const lista = document.getElementById("lista");
    const resumen = document.querySelector("#resumen");

    lista.replaceChildren();

    for (const tarea of estado.tareas) {
        const li = document.createElement("li");
        li.textContent = tarea.texto;

        if (tarea.completada === true) {
            li.classList.add("completada");
        }

        lista.append(li);
    }

    const pendientes = contarPendientes(estado.tareas);
    const completadas = contarCompletadas(estado.tareas);

    resumen.textContent = `${completadas} completadas · ${pendientes} pendientes`;
}