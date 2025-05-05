console.log("Inicio")

const boton = document.getElementById("enviar")

boton.addEventListener("click", 
    () => {
        console.log("los parametros")
        let username = document.getElementById("username")
        let password = document.getElementById("password")
        console.log(password.value)
        console.log(username.value)
    }
)