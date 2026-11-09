
/* =========================================
   GRACIA SUBLIME - JAVASCRIPT
========================================= */


/* =========================================
   MENU PARA CELULARES
========================================= */

const botonMenu = document.getElementById("menu-movil");
const navegacion = document.getElementById("navegacion");

botonMenu.addEventListener("click", () => {

    navegacion.classList.toggle("activo");

    const menuAbierto = navegacion.classList.contains("activo");

    botonMenu.textContent = menuAbierto ? "✕" : "☰";

});


// Cerrar menu al seleccionar una opcion

document.querySelectorAll(".navegacion a").forEach(enlace => {

    enlace.addEventListener("click", () => {

        navegacion.classList.remove("activo");
        botonMenu.textContent = "☰";

    });

});


/* =========================================
   GALERIA DE FOTOGRAFIAS
========================================= */

const contenedorGaleria = document.getElementById("contenedor-galeria");

const fotografias = [
    "gs1.jpeg",
    "gs2.jpeg",
    "gs3.jpeg",
    "gs4.jpeg",
    "gs5.jpeg",
    "gs6.jpeg",
    "gs7.jpeg",
    "gs8.jpeg",
    "gs9.jpeg",
    "gs10.jpeg",
    "festejo dia madres.jpeg"
];

fotografias.forEach((fotografia, indice) => {

    const imagen = document.createElement("img");

    imagen.src = `../${fotografia}`;
    imagen.alt = `Fotografía de Gracia Sublime ${indice + 1}`;
    imagen.classList.add("foto-galeria");
    imagen.loading = "lazy";

    imagen.addEventListener("error", () => {
        imagen.remove();
    });

    contenedorGaleria.appendChild(imagen);

});


/* =========================================
   APARICION DE LAS SECCIONES
========================================= */

const elementos = document.querySelectorAll(".seccion");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach(entrada => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.15
});

elementos.forEach(elemento => {

    elemento.classList.add("aparecer");
    observador.observe(elemento);

});


/* =========================================
   EFECTO DE LUZ EN LAS TARJETAS
========================================= */

const tarjetas = document.querySelectorAll(".tarjeta-reunion");

tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener("mousemove", (evento) => {

        const rectangulo = tarjeta.getBoundingClientRect();

        const x = evento.clientX - rectangulo.left;
        const y = evento.clientY - rectangulo.top;

        tarjeta.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(212, 166, 60, 0.18),
                #101010 75%
            )
        `;

    });

    tarjeta.addEventListener("mouseleave", () => {

        tarjeta.style.background = "";

    });

});


/* =========================================
   ANIMACION DEL LOGO
========================================= */

const logo = document.querySelector(".logo-principal");

if (logo) {

    logo.addEventListener("mouseenter", () => {

        logo.style.transform = "scale(1.04)";

    });

    logo.addEventListener("mouseleave", () => {

        logo.style.transform = "scale(1)";

    });

}


/* =========================================
   AÑO AUTOMATICO DEL PIE DE PAGINA
========================================= */

const piePagina = document.querySelector(".pie-pagina span");

if (piePagina) {

    piePagina.textContent =
        `© ${new Date().getFullYear()} Gracia Sublime. Todos los derechos reservados.`;

}


/* =========================================
   MENSAJE DE INICIO
========================================= */

console.log("Gracia Sublime - Página web cargada correctamente.");
