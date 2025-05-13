console.log("Inicio")

const boton = document.getElementById("enviar")


// boton.addEventListener("click", 
//     () => {
//         console.log("los parametros")
//         let username = document.getElementById("username")
//         let password = document.getElementById("password")
//         console.log(password.value)
//         console.log(username.value)
//     }
// )

const mostrar = () => {
    console.log("los paremetros:")
    let username = document.getElementById("username")
    let password = document.getElementById("password")
    console.log(password.value)
    console.log(username.value)

    let formulario = document.getElementsByTagName("form")
    console.log(formulario)
    username.setAttribute("name", "q")
    password.setAttribute("name", "password")
    formulario[0].setAttribute("action", "https://google.com/search")
    formulario[0].submit()
}

boton.addEventListener("click", mostrar)