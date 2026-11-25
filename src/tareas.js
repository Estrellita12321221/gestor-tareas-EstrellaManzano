export function contarPendientes(tareas) {
  return tareas.filter((tarea) => tarea.completada===false).length;
}

export function contarCompletadas(tareas) {
  return tareas.filter((tarea) => tarea.completada===true).length;
}