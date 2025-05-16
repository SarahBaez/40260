
import { saludar, Picture } from "./componentes.js";

let x = document.getElementById('app').innerHTML = Picture(1, "John") + Picture(2,"Jane")
const lista = app.querySelectorAll("img")
console.log(lista)

for (let i = 0; i < lista.length; i++) {
            lista[i].addEventListener("click", () =>{
                lista[i].classList.toggle("redonda")
            })
        }