const $whatIsDOM = document.getElementById("que-es");

let text = `
<p>
El modelo de Objetos del Documentos (<b><i>DOM - Document Object Model</i></b>) es una API para documentos HTML y XML.
</p>
<p>
Este provee una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
<mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>
`;

$whatIsDOM.innerText = text;
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text;