/*
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

Posiciones:
 beforebegin(hermano anterior)
 afterbegin(primer hijo)
 beforeend(ultimo hijo)
 afterend(hermano siguiente)
*/
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any"></img>
  <figcaption></figcaption>
  `;

$newCard.classList.add("card");

/*Para este primer bloque de ejemplo es necesario que la etiqueta 
<figcaption> lleve como valor Any*/
$cards.insertAdjacentElement("beforebegin", $newCard);
$cards.insertAdjacentElement("afterbegin", $newCard);
$cards.insertAdjacentElement("beforeend", $newCard);
$cards.insertAdjacentElement("afterend", $newCard);

/*Para este segundo bloque de ejemplo es necesario que la etiqueta
<figcaption> no lleve ningún valor*/
$newCard.insertAdjacentHTML("beforeend", $contenCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
$cards.insertAdjacentElement("afterbegin", $newCard);

$cards.prepend($newCard);
$cards.before($newCard);
$cards.append($newCard);
$cards.after($newCard);
