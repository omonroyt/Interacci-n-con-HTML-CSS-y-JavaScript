const primerHola = document.querySelector("h1");
primerHola.textContent = "Adiós";

const encabezadoNaranja = document.getElementById("cambiarColor");
encabezadoNaranja.style.color = "#fb6734";

const clickable = document.getElementById("clickeable");

clickable.addEventListener("click", (event) => {
  clickable.style.color = "#624133";
});
