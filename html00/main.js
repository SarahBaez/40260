import { loadXMLDoc } from "./loadXMLDoc.js";
import { myFunction } from "./myFunction.js";

document.getElementById("btn").addEventListener("click", async () => {
  const cds = await loadXMLDoc();
  myFunction(cds);
});
