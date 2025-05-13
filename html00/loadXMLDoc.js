export async function loadXMLDoc() {
  try {
    const response = await fetch('cd_catalog.xml');
    const text = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "application/xml");
    const cds = xmlDoc.getElementsByTagName("CD");
    return cds;
  } catch (error) {
    console.error('Error loading XML:', error);
    return [];
  }
}
