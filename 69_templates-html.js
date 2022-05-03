const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    { title: "Tecnología", img: "https://placeimg.com/200/200/tech" },
    { title: "Animales", img: "https://placeimg.com/200/200/animals" },
    { title: "Arquitectura", img: "https://placeimg.com/200/200/arch" },
    { title: "Gente", img: "https://placeimg.com/200/200/people" },
    { title: "Naturaleza", img: "https://placeimg.com/200/200/nature" },
  ];

cardContent.forEach((elemento) => {
  $template.querySelector("img").setAttribute("src", elemento.img);
  $template.querySelector("img").setAttribute("alt", elemento.title);
  $template.querySelector("figcaption").textContent = elemento.title;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);
