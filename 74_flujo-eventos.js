const $divsEventos = document.querySelectorAll(".eventos-flujo div");

console.log($divsEventos);

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
}

//Del más interno al más externo en la propagación (burbuja)
$divsEventos.forEach((div) => {
  //Fase de burbuja
  div.addEventListener("click", flujoEventos, false);
});

//Del más externo al más interno en la propagación (captura)
$divsEventos.forEach((div) => {
  //Fase de captura
  div.addEventListener("click", flujoEventos, true);
});

$divsEventos.forEach((div) => {
  div.addEventListener("click", flujoEventos, { capture: false });
});

$divsEventos.forEach((div) => {
  div.addEventListener("click", flujoEventos, { capture: true });
});

$divsEventos.forEach((div) => {
  div.addEventListener("click", flujoEventos, { capture: false, once: true });
});
