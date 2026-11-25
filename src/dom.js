
import { estado } from "./estado.js";
import { contarPendientes, contarCompletadas } from "./tareas.js";

export function render() {

    const lista = document.querySelector("#lista");

    lista.replaceChildren();

    estado.tareas.forEach((tarea) => {

        const li = document.createElement("li");

        li.textContent = tarea.texto;

        if (tarea.completada === true) {
            li.classList.add("completada");
        }

        lista.append(li);
    });

    const pendientes = contarPendientes(estado.tareas);
    const completadas = contarCompletadas(estado.tareas);

    const resumen = document.querySelector("#resumen");

    resumen.textContent = `${completadas} completadas · ${pendientes} pendientes`;
}
