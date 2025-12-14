const fondo = document.querySelector(".corazones");

const simbolos = ["💖","💗","💘","💞","💕","🩷","✨","🌸","🌷"];

function crearElemento() {
    const span = document.createElement("span");

    const esPetalo = Math.random() > 0.7;
    span.classList.add(esPetalo ? "petalo" : "corazon");

    span.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];

    span.style.left = Math.random() * 100 + "%";
    span.style.fontSize = Math.random() * 20 + 16 + "px";
    span.style.animationDuration = Math.random() * 10 + 12 + "s";

    fondo.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 20000);
}

// Crear continuamente
setInterval(crearElemento, 600);

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("texto-carta");
    const texto = contenedor.dataset.text.trim();
    let index = 0;
    let velocidad = 35; // menor = más rápido

    function escribir() {
        if (index < texto.length) {
            contenedor.innerHTML += texto[index] === "\n" ? "<br><br>" : texto[index];
            index++;
            setTimeout(escribir, velocidad);
        }
    }

    escribir();
});
document.addEventListener("DOMContentLoaded", () => {
    const musica = document.getElementById("musica");
    const activar = document.getElementById("activar-audio");

    activar.addEventListener("click", () => {
        musica.play();
        activar.style.display = "none";
    });
});
