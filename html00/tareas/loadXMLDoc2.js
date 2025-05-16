export async function loadXMLDoc2() {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      const xmlDoc = xhttp.responseXML;
      const alumnos = xmlDoc.getElementsByTagName("alumno");
      resolve(alumnos);
    };
    xhttp.onerror = () => reject("Error al cargar XML.");
    xhttp.open("GET", "alumnos.xml");
    xhttp.send();
  });
}
