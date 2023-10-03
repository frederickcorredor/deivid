let parte1 = document.getElementById("parte1");
let parte2 = document.getElementById("parte2");
let botonCambio = document.getElementById("mostrarmas");

botonCambio.addEventListener("click",() => {
    parte1.style.display="none";
    parte2.style.display="flex";
})