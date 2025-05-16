import { imagen, Picture } from "./imagenFun.js";

const ejemplo = document.getElementById("demo");

ejemplo.innerHTML = "hola" + Picture(1) + imagen(2) + Picture(3);
