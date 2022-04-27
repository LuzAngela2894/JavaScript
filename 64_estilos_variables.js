const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM));

//Variables CSS - Custom Properties CSS

//Cuando se usa el $ al declarar una variable significa que almacena una referencia en el DOM

const $html = document.documentElement,
  $body = document.body;

let varWhitesmokeColor =
    getComputedStyle($html).getPropertyValue("--whitesmoke-color"),
  varBluevioletColor =
    getComputedStyle($html).getPropertyValue("--blueviolet-color");

console.log(varWhitesmokeColor, varBluevioletColor);

$body.style.backgroundColor = varBluevioletColor;
$body.style.color = varWhitesmokeColor;

$html.style.setProperty("--blueviolet-color", "blueviolet");
varBluevioletColor =
  getComputedStyle($html).getPropertyValue("--blueviolet-color");

$body.style.setProperty("background-color", varBluevioletColor);

$html.style.setProperty("--whitesmoke-color", "whitesmoke");
varWhitesmokeColor =
  getComputedStyle($html).getPropertyValue("--whitesmoke-color");

$body.style.setProperty("color", varWhitesmokeColor);
