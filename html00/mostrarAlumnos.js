export function mostrarAlumnos(alumnos) {
  let table = "<tr><th>Nombre</th><th>Correo</th><th>Nacimiento</th></tr>";

  for (let i = 0; i < alumnos.length; i++) {
    const alumno = alumnos[i];

    const nombreElem = alumno.getElementsByTagName("nombre")[0];
    const nombre = nombreElem?.textContent || "No especificado";
    const correo = nombreElem?.getAttribute("correo") || alumno.getAttribute("correo") || "No especificado";

    const nacimientoElem = alumno.getElementsByTagName("nacimiento")[0];
    const nacimiento = nacimientoElem?.textContent || "No especificado";

    table += `<tr>
                <td>${nombre}</td>
                <td>${correo}</td>
                <td>${nacimiento}</td>
              </tr>`;
  }

  document.getElementById("demo").innerHTML = table;
}
