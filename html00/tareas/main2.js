import { loadXMLDoc2 } from "./loadXMLDoc2.js";
import { mostrarAlumnos } from "./mostrarAlumnos.js";

document.getElementById("btn2").addEventListener("click", async () => {
  const alumnos = await loadXMLDoc2();
  mostrarAlumnos(alumnos);
});