console.log("********* Elementos del Documento *********");
console.log(window.document);
console.log(document);
console.log(document.head); //Cabeza del documento
console.log(document.body); //Cuerpo del documento
console.log(document.documentElement); //Tipo de documento
console.log(document.doctype);
console.log(document.charset); //Se encuentra en desuso y se planea eliminar
console.log(document.characterSet); //Reemplazo de charset
console.log(document.title);
console.log(document.links); //Enlaces del documento
console.log(document.images); //Imágenes del documento
console.log(document.forms); //Formularios del documento
console.log(document.styleSheets); //Estilos del documento
console.log(document.scripts);
setTimeout(() => {
  console.log(document.getSelection.toString());
}, 3000);
document.write("<h2>Hola Mundo desde el DOM</h2>");
