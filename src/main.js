import "./style.css";
import { estado } from "./estado.js";
import { render } from "./dom.js";
import { renderNotas } from "./dom-notas.js";

console.table(estado.tareas);

render();
renderNotas();